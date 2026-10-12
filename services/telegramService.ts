/**
 * Telegram Notification Service for Shakti Group Web App
 * Dispatches real-time alerts for customer chat messages, contact inquiries, and RFQ submissions.
 */

export function escapeTelegramHtml(text: string): string {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export interface TelegramAlertData {
  type: 'chat' | 'contact' | 'rfq';
  message: string;
  clientIp?: string;
  userAgent?: string;
  metadata?: Record<string, any>;
}

export async function sendTelegramNotification(data: TelegramAlertData): Promise<{ success: boolean; error?: string }> {
  const token = (process.env.TELEGRAM_BOT_TOKEN || '').trim();
  const chatId = (process.env.TELEGRAM_CHAT_ID || '').trim();

  if (!token || !chatId) {
    // Missing credentials - silent return or log notice
    console.info('[Telegram Notice]: Skipping alert because TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not configured in environment variables.');
    return { success: false, error: 'TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not configured in process.env' };
  }

  const timestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'medium',
  });

  const cleanMessage = (data.message || '').trim();
  const truncated = cleanMessage.length > 3000
    ? cleanMessage.substring(0, 3000) + '... (truncated)'
    : cleanMessage;

  const typeHeader = data.type === 'contact'
    ? '📬 <b>NEW WEBSITE CONTACT INQUIRY</b>'
    : data.type === 'rfq'
    ? '⚡ <b>NEW INSTANT RFQ QUOTE REQUEST</b>'
    : '💬 <b>NEW SHAKTI AI CHAT INQUIRY</b>';

  const lines = [
    typeHeader,
    `━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `🕒 <b>Time:</b> ${escapeTelegramHtml(timestamp)} IST`,
    data.clientIp ? `🌐 <b>IP:</b> <code>${escapeTelegramHtml(data.clientIp)}</code>` : null,
  ];

  if (data.metadata) {
    for (const [key, val] of Object.entries(data.metadata)) {
      if (val !== undefined && val !== null && val !== '') {
        lines.push(`📌 <b>${escapeTelegramHtml(key)}:</b> ${escapeTelegramHtml(String(val))}`);
      }
    }
  }

  lines.push(`━━━━━━━━━━━━━━━━━━━━━━━━━`);
  lines.push(`📝 <b>Content:</b>`);
  lines.push(`<blockquote>${escapeTelegramHtml(truncated)}</blockquote>`);

  const htmlBody = lines.filter(Boolean).join('\n');

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 7000);

    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: htmlBody,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text().catch(() => '');
      console.warn(`[Telegram Bot Error] HTTP ${response.status}:`, errorText);
      return { success: false, error: `HTTP ${response.status}: ${errorText}` };
    }

    return { success: true };
  } catch (err: any) {
    console.warn('[Telegram Dispatch Exception]:', err?.message || err);
    return { success: false, error: err?.message || 'Network error reaching Telegram API' };
  }
}

/**
 * Diagnostic tool to check Telegram configuration and connectivity
 */
export async function getTelegramDiagnostics(): Promise<{
  configured: boolean;
  hasToken: boolean;
  hasChatId: boolean;
  tokenMasked?: string;
  chatIdMasked?: string;
  botDetails?: any;
  error?: string;
}> {
  const token = (process.env.TELEGRAM_BOT_TOKEN || '').trim();
  const chatId = (process.env.TELEGRAM_CHAT_ID || '').trim();

  const hasToken = Boolean(token);
  const hasChatId = Boolean(chatId);

  if (!hasToken || !hasChatId) {
    return {
      configured: false,
      hasToken,
      hasChatId,
      error: 'Environment variables TELEGRAM_BOT_TOKEN and/or TELEGRAM_CHAT_ID are not set in the hosting environment.'
    };
  }

  const tokenMasked = token.length > 8 ? `${token.substring(0, 4)}...${token.substring(token.length - 4)}` : '****';
  const chatIdMasked = chatId.length > 4 ? `${chatId.substring(0, 2)}***${chatId.substring(chatId.length - 2)}` : '****';

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/getMe`);
    const data = await response.json();

    if (data.ok) {
      return {
        configured: true,
        hasToken: true,
        hasChatId: true,
        tokenMasked,
        chatIdMasked,
        botDetails: data.result,
      };
    } else {
      return {
        configured: true,
        hasToken: true,
        hasChatId: true,
        tokenMasked,
        chatIdMasked,
        error: `Telegram getMe returned error: ${data.description || 'Unknown error'}`
      };
    }
  } catch (err: any) {
    return {
      configured: true,
      hasToken: true,
      hasChatId: true,
      tokenMasked,
      chatIdMasked,
      error: `Network error connecting to Telegram: ${err?.message || err}`
    };
  }
}

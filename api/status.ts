/**
 * Vercel Serverless Function: /api/status
 * Diagnostic endpoint to check hosting health and Telegram bot connection status.
 */

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    return res.end();
  }

  const token = (process.env.TELEGRAM_BOT_TOKEN || '').trim();
  const chatId = (process.env.TELEGRAM_CHAT_ID || '').trim();
  const geminiKey = (process.env.GEMINI_API_KEY || process.env.API_KEY || '').trim();

  let telegramConnected = false;
  let botUsername: string | null = null;
  let telegramError: string | null = null;

  if (token) {
    try {
      const response = await fetch(`https://api.telegram.org/bot${token}/getMe`);
      const data = await response.json();
      if (data.ok) {
        telegramConnected = true;
        botUsername = data.result?.username || null;
      } else {
        telegramError = data.description || 'Invalid token';
      }
    } catch (e: any) {
      telegramError = e?.message || 'Network error connecting to Telegram';
    }
  }

  const result = {
    status: 'ok',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString(),
    telegram: {
      hasBotToken: Boolean(token),
      hasChatId: Boolean(chatId),
      connected: telegramConnected,
      botUsername,
      error: telegramError,
    },
    gemini: {
      hasKey: Boolean(geminiKey) && geminiKey.length > 10,
    },
  };

  if (res.status) {
    return res.status(200).json(result);
  } else {
    res.statusCode = 200;
    return res.end(JSON.stringify(result));
  }
}

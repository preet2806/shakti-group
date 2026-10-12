/**
 * Vercel Serverless Function & Express Handler: /api/contact
 * Dispatches real-time Telegram alerts for website contact form inquiries
 * and instant RFQ requests.
 */

function escapeTelegramHtml(text: string): string {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function getClientIp(req: any): string {
  const forwarded = req.headers?.['x-forwarded-for'];
  if (typeof forwarded === 'string') {
    return forwarded.split(',')[0].trim();
  }
  if (Array.isArray(forwarded) && forwarded.length > 0) {
    return forwarded[0].trim();
  }
  return req.socket?.remoteAddress || req.ip || '127.0.0.1';
}

function setCorsHeaders(res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

export default async function handler(req: any, res: any) {
  setCorsHeaders(res);

  if (req.method === 'OPTIONS') {
    return res.status ? res.status(204).end() : (res.statusCode = 204, res.end());
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status
      ? res.status(405).json({ error: 'Method Not Allowed. Use POST.' })
      : (res.statusCode = 405, res.end(JSON.stringify({ error: 'Method Not Allowed' })));
  }

  try {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch {
        body = {};
      }
    } else if (Buffer.isBuffer(body)) {
      try {
        body = JSON.parse(body.toString('utf-8'));
      } catch {
        body = {};
      }
    }

    const { name, company, email, phone, type, message, gasType, quantity, location } = body || {};
    const clientIp = getClientIp(req);
    const isRfq = type === 'RFQ' || Boolean(gasType);

    const token = (process.env.TELEGRAM_BOT_TOKEN || '').trim();
    const chatId = (process.env.TELEGRAM_CHAT_ID || '').trim();

    if (token && chatId) {
      const timestamp = new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        dateStyle: 'medium',
        timeStyle: 'medium',
      });

      const cleanMessage = (message || '').trim();
      const typeHeader = isRfq
        ? '⚡ <b>NEW INSTANT RFQ QUOTE REQUEST</b>'
        : '📬 <b>NEW WEBSITE CONTACT INQUIRY</b>';

      const lines = [
        typeHeader,
        '━━━━━━━━━━━━━━━━━━━━━━━━━',
        `🕒 <b>Time:</b> ${escapeTelegramHtml(timestamp)} IST`,
        `👤 <b>Customer:</b> ${escapeTelegramHtml(name || 'Anonymous')}`,
        company ? `🏢 <b>Company:</b> ${escapeTelegramHtml(company)}` : null,
        email ? `📧 <b>Email:</b> ${escapeTelegramHtml(email)}` : null,
        phone ? `📞 <b>Phone:</b> ${escapeTelegramHtml(phone)}` : null,
        gasType ? `🧪 <b>Product / Gas:</b> ${escapeTelegramHtml(gasType)}` : null,
        quantity ? `📦 <b>Quantity / Frequency:</b> ${escapeTelegramHtml(quantity)}` : null,
        location ? `📍 <b>Delivery Location:</b> ${escapeTelegramHtml(location)}` : null,
        clientIp ? `🌐 <b>IP:</b> <code>${escapeTelegramHtml(clientIp)}</code>` : null,
      ];

      if (cleanMessage) {
        lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━');
        lines.push('📝 <b>Message:</b>');
        lines.push(`<blockquote>${escapeTelegramHtml(cleanMessage)}</blockquote>`);
      }

      const htmlBody = lines.filter(Boolean).join('\n');

      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000);

        await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: htmlBody,
            parse_mode: 'HTML',
            disable_web_page_preview: true,
          }),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);
      } catch (tgErr: any) {
        console.warn('[Telegram Dispatch Warning]:', tgErr?.message || tgErr);
      }
    }

    if (res.status) {
      return res.status(200).json({ success: true, message: 'Inquiry received and processed.' });
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify({ success: true, message: 'Inquiry received and processed.' }));
    }
  } catch (err: any) {
    console.error('Contact handler error:', err);
    if (res.status) {
      return res.status(200).json({ success: true, fallback: true });
    } else {
      res.statusCode = 200;
      return res.end(JSON.stringify({ success: true, fallback: true }));
    }
  }
}

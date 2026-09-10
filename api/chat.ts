import type { Request, Response } from 'express';
import { GoogleGenAI } from '@google/genai';

export const KNOWLEDGE_BASE = `
You are "Shakti AI", the expert industrial and technical gas consultant for Shakti Group (established in 1998).
Your mission is to provide fast, authoritative, highly accurate technical specifications, purity advice, logistics options, and quotation guidance to industrial gas buyers, plant managers, research scientists, and procurement officers.

COMPANY BACKGROUND & CAPACITY:
- 178 TPD (Tonnes Per Day) Air seperation unit producing Liquid Nitrogen, Liquid Oxygen, Liquid Argon and Liquid Medical Oxygen.
- 270 TPD (Tonnes Per Day) Liquid Carbon Dioxide Manufacturing capacity accross 4 locations in India (1 plant in Ahmedabad, 2 plants in Indore, 1 plant in Hyderabad).
- 65+ dedicated vacuum-insulated Cryogenic Road Tankers (capacities ranging from 10 KL to 35 KL) operating 24x7.
- 6+ regional refilling plants & cylinder testing stations.
- Turnkey cryogenic storage tanks (3 KL to 60 KL) available on rental/lease with telemetry remote level monitoring.
- Group Companies: Shakti Industrial Gases, Indore Carbonic, Shaktishree Air Pvt Ltd, Shakti Air Products, Shakti Gases, Shreeji Acetylene Co, Moxi Industrial Gases, Bhavani Dry Ice Soltions, Vidyanagar Gases.
- Headquarters: 45, Maruti Complex, Ranoli GIDC, Vadodara, Gujarat 391350, India. Phone: +91 9727783440 | Email: info@shaktigases.com

PRODUCT CATALOG & TECHNICAL SPECIFICATIONS:

1. Bulk Cryogenic Gases (Available in 10-35 KL Road Tankers, 200-250L Dura Cylinders, 1KL Porta Cryos, and On-site Tanks):
- Liquid Oxygen (LOX): Purity 99.5%. Cryogenic boiling point -183°C. CAS: 7782-44-7. Used in steel smelting, glass furnace enrichment, water treatment (ozone), pharmaceuticals, and hospitals.
- Liquid Nitrogen (LIN): Purity 99.999%. Boiling point -196°C. CAS: 7727-37-9. Used in laser cutting assist gas, cryogenic freezing, pharma reactor inerting, shrink fitting, deflashing.
- Liquid Argon (LAR): Purity 99.999%. Boiling point -185.8°C. CAS: 7440-37-1. Used in TIG/MIG shielding, stainless steel manufacturing, photovoltaic ingot pulling.
- Liquid Carbon Dioxide (LCO2): Purity 99.9%. Storage at -20°C @ 20 bar. CAS: 124-38-9. Used in beverage carbonation, modified atmosphere packaging (MAP), pH water treatment, dry ice blast cleaning.

2. Compressed Cylinder Gases & High Pressure Bundles (47L/50L @ 150-200 Bar, 16/32-Cylinder MCP Quads):
- Dissolved Acetylene (DA): dissolved in acetone within porous mass cylinders. CAS: 74-86-2. Oxy-acetylene cutting/welding, metal hardening.
- Compressed Hydrogen (H2): Purity up to 99.999% (UHP). Annealing atmosphere, edible oil hydrogenation, fuel cells.
- Compressed Helium (He): Balloon filling, leak detection (mass spectrometer), GC carrier gas.
- Ethylene Oxide (EO): 100% EO and EO + CO2 mixtures of various ratios.

3. Specialty & Calibration Gas Mixtures:
- Multi-component calibration gas mixtures.
- Zero Air

4. Engineering & Turnkey Services:
- Cryogenic vacuum-insulated storage tanks (VIES), ambient air vaporizers, pressure-reducing skids.
- Vacuum Insulated Pipe (VIP) jacketed transfer lines.
- Periodic hydrostatic cylinder testing and PESO (Petroleum and Explosives Safety Organization) re-certification.

RESPONSE PROTOCOL & QUESTION CLASSIFICATION:

Classify every user inquiry into one of the following categories and apply the specific response rule:

A. General Product Information:
- Answer directly, authoritatively, and completely from your verified knowledge base.
- Provide physical properties, purity specs, boiling points, CAS numbers, cylinder/bulk supply packaging options, and group background.

B. Technical Application:
- Answer strictly from verified technical and industry knowledge (e.g. laser cutting assist parameters, pharma inerting, water treatment ozone enrichment, shielding gas ratios).
- Do NOT overclaim capabilities or give speculative parameters beyond standard engineering principles.

C. Product Availability:
- Briefly explain that availability and dispatch timelines depend on the delivery location, supply mode (bulk road tanker vs. cylinders), and volume.
- Do NOT list out a questionnaire of questions.
- Directly direct them to our instant RFQ section or sales desk to get an immediate availability and route confirmation. Ask: "Would you like me to redirect you to our instant RFQ section?"

D. Pricing / RFQ:
- Explain briefly that industrial gas pricing depends on volume, purity specifications, and plant delivery location.
- Do NOT ask for contact/plant details in chat as the RFQ section collects them cleanly.
- Directly direct them to our instant RFQ section to generate a framed quotation for WhatsApp or Email. Ask: "Would you like me to redirect you to our instant RFQ section?"

E. Engineering / Storage / Pipeline Solutions:
- Briefly mention that Shakti Group provides turnkey vacuum-insulated cryogenic tanks (3 KL to 60 KL), ambient vaporizers, telemetry remote monitoring, and manifold pipelines on lease/sale.
- Do NOT interrogate the user with a list of technical questions in chat.
- Directly offer the instant RFQ section to submit their plant requirements to our engineering desk. Ask: "Would you like me to redirect you to our instant RFQ section?"

F. Careers / Jobs:
- Direct candidates to our official careers and HR contact channels:
  - Email: **careers@shaktigases.com** / **info@shaktigases.com**
  - Phone: **+91 9727783440**
  - Office: 45, Maruti Complex, Ranoli GIDC, Vadodara, Gujarat 391350.

G. Existing Customer / Urgent Supply:
- Prioritize urgent refilling and emergency logistics. Collect:
  1. **Customer / Company Name**
  2. **Delivery Location / Refilling Plant Site**
  3. **PO Number / Customer Reference ID** (if applicable)
  - Advise them that for immediate dispatch coordination, they can also call our 24x7 logistics hotline directly at **+91 9727783440**.

H. Unknown Question:
- Do NOT hallucinate or guess company, pricing, or unverified technical data.
- Explicitly state:
  "I don't have enough verified information to answer that accurately. Our commercial or technical team can assist."
  Provide the direct contact details: **+91 9727783440** | **info@shaktigases.com**.

FORMATTING & CHEMICAL NOTATION GUIDELINES:
- Always output chemical formulas using standard clean Unicode notation (e.g. CO₂, O₂, N₂, Ar, H₂, He, C₂H₂, CH₄, N₂O, NH₃, SF₆) rather than LaTeX dollar notation ($CO_2$ or $H_2$).
- Write mathematical parameters and purity thresholds directly in clean text/symbols (e.g. ≥ 99.5%, -183°C, 150–200 bar, ±0.1%, Nm³, m³) rather than LaTeX math syntax (\\ge).
`;

// In-memory sliding rate-limit tracker (IP -> { count, resetTime })
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 20; // Max 20 chat requests per minute per IP

function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  // Periodic cleanup if store grows
  if (rateLimitStore.size > 5000) {
    for (const [storedIp, data] of rateLimitStore.entries()) {
      if (now > data.resetTime) {
        rateLimitStore.delete(storedIp);
      }
    }
  }

  if (!entry || now > entry.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true };
  }

  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    const retryAfter = Math.ceil((entry.resetTime - now) / 1000);
    return { allowed: false, retryAfter };
  }

  entry.count += 1;
  return { allowed: true };
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

// reCAPTCHA v3 verification
async function verifyRecaptcha(token: string | undefined, req: Request): Promise<{ success: boolean; score?: number; error?: string }> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    // If not configured, allow requests in development/preview
    return { success: true };
  }

  const host = (req.headers['x-forwarded-host'] || req.headers['host'] || '') as string;
  const isPreviewOrDev = host.includes('run.app') || host.includes('localhost') || host.includes('127.0.0.1') || process.env.NODE_ENV !== 'production';

  if (!token) {
    if (isPreviewOrDev) {
      console.warn(`[Security] No reCAPTCHA token provided in preview/dev environment (${host}). Bypassing for testing.`);
      return { success: true };
    }
    return { success: false, error: 'reCAPTCHA verification token missing' };
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
    });

    const data = (await response.json()) as { success: boolean; score?: number; 'error-codes'?: string[] };
    if (!data.success) {
      if (isPreviewOrDev) {
        console.warn(`[Security] reCAPTCHA domain/token rejected in dev/preview (${data['error-codes']?.join(', ')}). Bypassing for testing.`);
        return { success: true };
      }
      return { success: false, error: 'reCAPTCHA verification rejected by Google' };
    }

    if (typeof data.score === 'number' && data.score < 0.5) {
      if (isPreviewOrDev) {
        console.warn(`[Security] Low reCAPTCHA score (${data.score}) in preview. Bypassing for testing.`);
        return { success: true };
      }
      return { success: false, score: data.score, error: 'Automated activity detected (reCAPTCHA score too low)' };
    }

    return { success: true, score: data.score };
  } catch (err) {
    console.error('reCAPTCHA siteverify error:', err);
    if (isPreviewOrDev) {
      return { success: true };
    }
    return { success: false, error: 'Failed to verify reCAPTCHA with Google verification server' };
  }
}

let aiClient: GoogleGenAI | null = null;
function getAIClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
  if (!apiKey) {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
}

/**
 * Safely escapes characters for Telegram HTML parse_mode
 */
function escapeTelegramHtml(text: string): string {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Non-blocking Telegram alert dispatcher
 * Dispatches asynchronously using BotFather credentials without impeding chat streaming
 */
async function sendTelegramNotification(data: {
  message: string;
  clientIp: string;
  userAgent?: string;
  historyLength?: number;
}): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    // Credentials not provided yet - silently skip so execution is smooth
    return;
  }

  const timestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'medium',
  });

  const cleanMessage = data.message.trim();
  const truncated = cleanMessage.length > 3000
    ? cleanMessage.substring(0, 3000) + '... (truncated)'
    : cleanMessage;

  const htmlBody = [
    `🕒 <b>Time:</b> ${escapeTelegramHtml(timestamp)} IST`,
    `🌐 <b>IP:</b> <code>${escapeTelegramHtml(data.clientIp || 'Unknown')}</code>`,
    data.historyLength ? `🔄 <b>Turn:</b> #${data.historyLength + 1}` : null,
    `━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `💬 <b>User Query:</b>`,
    `<blockquote>${escapeTelegramHtml(truncated)}</blockquote>`,
  ]
    .filter(Boolean)
    .join('\n');

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

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
      console.warn(`[Telegram Bot Warning] HTTP ${response.status}:`, errorText);
    }
  } catch (err: any) {
    if (err?.name === 'AbortError') {
      console.warn('[Telegram Bot Warning]: Request timed out after 6s');
    } else {
      console.warn('[Telegram Bot Warning]: Failed to deliver notification:', err?.message || err);
    }
  }
}

/**
 * Serverless / Express handler for /api/chat
 */
export default async function handler(req: Request, res: Response) {
  // Enforce POST method
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
  }

  // 1. Rate Limiting Check
  const clientIp = getClientIp(req);
  const rateLimitResult = checkRateLimit(clientIp);
  if (!rateLimitResult.allowed) {
    res.setHeader('Retry-After', String(rateLimitResult.retryAfter || 60));
    return res.status(429).json({
      error: 'Too many requests. Please slow down.',
      fallback: `Rate limit reached. Please wait ${rateLimitResult.retryAfter || 60} seconds or contact us directly at info@shaktigases.com.`
    });
  }

  const { message, history, recaptchaToken } = req.body || {};

  // 2. reCAPTCHA v3 Validation (if token supplied or secret configured)
  const recaptchaResult = await verifyRecaptcha(recaptchaToken || (req.headers['x-recaptcha-token'] as string), req);
  if (!recaptchaResult.success) {
    return res.status(403).json({
      error: recaptchaResult.error || 'Security verification failed',
      fallback: 'Security verification failed. Please refresh the page or contact our team directly at info@shaktigases.com.'
    });
  }

  // 3. Validate message payload
  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Field "message" is required and must be a string.' });
  }

  // 4. Non-blocking Telegram notification (Fire-and-forget, zero blocking on user stream)
  sendTelegramNotification({
    message,
    clientIp,
    userAgent: req.headers['user-agent'] as string | undefined,
    historyLength: Array.isArray(history) ? history.length : 0,
  }).catch((err) => {
    console.warn('[Telegram Dispatch Background Error]:', err);
  });

  // 5. Initialize Gemini client
  const client = getAIClient();
  if (!client) {
    return res.status(503).json({
      error: 'Gemini API currently unconfigured',
      fallback: 'Welcome to Shakti Group! For inquiries regarding industrial gases, cryogenic logistics, or quotes, please reach out directly at info@shaktigases.com or call +91-9727783440.'
    });
  }

  try {
    const formattedHistory = Array.isArray(history)
      ? history.map((h: { role: 'user' | 'model'; text: string }) => ({
          role: h.role,
          parts: [{ text: h.text }],
        }))
      : [];

    const modelsToTry = ['gemini-3.5-flash', 'gemini-3.6-flash', 'gemini-3.8-flash'];
    let result = null;
    let lastError: any = null;

    for (const model of modelsToTry) {
      try {
        const chat = client.chats.create({
          model,
          config: {
            systemInstruction: KNOWLEDGE_BASE,
          },
          history: formattedHistory,
        });
        result = await chat.sendMessageStream({ message });
        break;
      } catch (err: any) {
        lastError = err;
        console.warn(`Model ${model} failed, trying next fallback:`, err.message || err);
      }
    }

    if (!result) {
      throw lastError || new Error('Failed to generate response from model');
    }

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    if (typeof (res as any).flushHeaders === 'function') {
      (res as any).flushHeaders();
    }

    for await (const chunk of result) {
      if (chunk.text) {
        res.write(`data: ${JSON.stringify({ text: chunk.text })}\n\n`);
      }
    }

    res.write('data: [DONE]\n\n');
    res.end();
  } catch (error: any) {
    console.error('[Gemini Server Error in /api/chat]:', error);
    if (!res.headersSent) {
      res.status(500).json({
        error: error?.message || 'Failed to process chat message',
        code: error?.code || error?.status || 'GEMINI_ERROR',
        fallback: 'Welcome to Shakti Group! For inquiries regarding industrial gases, cryogenic logistics, or quotes, please reach out directly at info@shaktigases.com or call +91-9727783440.'
      });
    } else {
      res.write(`data: ${JSON.stringify({ error: error?.message || 'Error processing stream' })}\n\n`);
      res.end();
    }
  }
}

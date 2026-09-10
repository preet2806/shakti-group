declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

/**
 * Safely requests a reCAPTCHA v3 verification token if VITE_RECAPTCHA_SITE_KEY is provided
 */
async function getRecaptchaToken(): Promise<string | undefined> {
  const siteKey = (import.meta as any).env?.VITE_RECAPTCHA_SITE_KEY;
  if (!siteKey || typeof window === 'undefined') return undefined;

  try {
    if (!window.grecaptcha) {
      await new Promise<void>((resolve, reject) => {
        const existingScript = document.getElementById('recaptcha-v3-script');
        if (existingScript) {
          existingScript.addEventListener('load', () => resolve());
          existingScript.addEventListener('error', (e) => reject(e));
          return;
        }
        const script = document.createElement('script');
        script.id = 'recaptcha-v3-script';
        script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = (e) => reject(e);
        document.head.appendChild(script);
      });
    }

    if (window.grecaptcha) {
      return await new Promise<string>((resolve) => {
        window.grecaptcha!.ready(async () => {
          try {
            const token = await window.grecaptcha!.execute(siteKey, { action: 'chat' });
            resolve(token);
          } catch (err) {
            console.warn('reCAPTCHA execution error:', err);
            resolve('');
          }
        });
      });
    }
  } catch (err) {
    console.warn('reCAPTCHA script load error:', err);
  }
  return undefined;
}

export const streamChatResponse = async function* (
  userMessage: string,
  history: { role: 'user' | 'model'; text: string }[]
) {
  try {
    const recaptchaToken = await getRecaptchaToken();

    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: userMessage,
        history,
        recaptchaToken,
      }),
    });

    if (!response.ok) {
      let errorData: any = null;
      try {
        errorData = await response.json();
      } catch {
        errorData = { raw: await response.text().catch(() => '') };
      }

      console.error('[Gemini Bot HTTP Error]:', {
        status: response.status,
        statusText: response.statusText,
        details: errorData,
      });

      if (errorData?.fallback) {
        yield errorData.fallback;
        return;
      }
      if (errorData?.error) {
        yield `_${errorData.error}_\n\nPlease connect directly with our technical team at **info@shaktigases.com** or call **+91-9727783440**.`;
        return;
      }
      yield "Welcome to Shakti Group! For inquiries regarding industrial gases, cryogenic logistics, or quotes, please reach out directly at **info@shaktigases.com** or call **+91-9727783440**.";
      return;
    }

    if (!response.body) {
      console.error('[Gemini Bot Error]: No response body stream received from /api/chat');
      yield "No response received from the server. Please contact us at **info@shaktigases.com**.";
      return;
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || !trimmed.startsWith('data:')) continue;
        const dataStr = trimmed.replace(/^data:\s*/, '');
        if (dataStr === '[DONE]') {
          return;
        }
        try {
          const parsed = JSON.parse(dataStr);
          if (parsed.text) {
            yield parsed.text;
          } else if (parsed.error) {
            console.error('[Gemini Bot Stream Error]:', parsed.error);
            yield `\n\n_${parsed.error}_`;
          }
        } catch (parseErr) {
          console.error('[Gemini Bot Stream Parse Error]:', parseErr, 'Raw data:', dataStr);
        }
      }
    }
  } catch (error) {
    console.error('[Gemini Bot Network/Execution Error]:', error);
    yield "Welcome to Shakti Group! For inquiries regarding industrial gases, cryogenic logistics, or quotes, please reach out directly at **info@shaktigases.com** or call **+91-9727783440**.";
  }
};

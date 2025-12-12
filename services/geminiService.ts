import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { PRODUCTS, SERVICES, GROUP_COMPANIES } from "../constants";

// Construct a knowledge base string from our constants
const KNOWLEDGE_BASE = `
You are "Shakti AI", a helpful virtual assistant for Shakti Group.
Shakti Group is a leader in industrial gas solutions since 1998.

Core Stats:
- 65+ Cryogenic Road Tankers
- 6+ Refilling Stations
- 24x7 Logistics
- Established 1998

Products:
${PRODUCTS.map(p => `- **${p.title}**: ${p.description}`).join('\n')}

Services:
${SERVICES.map(s => `- **${s.title}**: ${s.description}`).join('\n')}

Group Companies:
${GROUP_COMPANIES.map(c => `- **${c.name}**: ${c.description}`).join('\n')}

Contact Info:
Address: 45, Maruti Complex, Ranoli GIDC, Ranoli, Dist: Vadodara-391350, Gujarat.
Phone: 9727783440
Email: info@shaktigases.com

INSTRUCTIONS:
1. Answer visitor questions professionally and concisely.
2. Use **bold** text for key terms or product names.
3. Use bullet points (-) for lists to make them readable.
4. If asked for a quote, ask to fill the contact form mentioning the requirements (gas type, volume, location) and a sales rep will contact them.
5. Do not guess safety rules, regulatory details, PESO requirements, or technical specs unless they are provided in your knowledge base.
6. If asked something very technical or compliance-related, respond in general terms and advise them fill the contact form and the Shakti engineering team will get in touch.
`;

let ai: GoogleGenAI | null = null;

// Initialize the API client only when needed to capture the latest env var
const getAIClient = () => {
  if (!process.env.API_KEY) {
    console.warn("API Key not found in process.env.API_KEY");
    return null;
  }
  if (!ai) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return ai;
};

export const streamChatResponse = async function* (
  userMessage: string,
  history: { role: 'user' | 'model'; text: string }[]
) {
  const client = getAIClient();
  if (!client) {
    yield "I'm sorry, I cannot connect to the server right now. Please check the API configuration.";
    return;
  }

  try {
    const chat = client.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: KNOWLEDGE_BASE,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }],
      })),
    });

    const result = await chat.sendMessageStream({ message: userMessage });

    for await (const chunk of result) {
       const c = chunk as GenerateContentResponse;
       if (c.text) {
         yield c.text;
       }
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    yield "I apologize, but I encountered an error processing your request.";
  }
};
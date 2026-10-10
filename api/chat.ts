import type { Request, Response } from 'express';
import { GoogleGenAI } from '@google/genai';
import {
  PRODUCTS,
  STATS,
  GROUP_COMPANIES,
  SERVICES,
  SOLUTIONS_SUBPAGES,
  DELIVERY_OPTIONS,
  TIMELINE,
  INDUSTRIES,
  VALUES,
  COMMITMENTS
} from '../constants';
import {
  INDIVIDUAL_PRODUCTS_DATA,
  CATEGORY_SUBPAGES_DATA,
  PRODUCT_SLUG_ALIASES,
  ProductPageData
} from '../pages/products/productData';
import {
  SOLUTION_SUBPAGES_DATA,
  SolutionPageData
} from '../pages/solutions/SolutionSubPage';
import {
  INDUSTRY_SUBPAGES_DATA,
  IndustryPageData
} from '../pages/industries/IndustrySubPage';
import {
  COMPANY_SUBPAGES_DATA,
  CompanyPageData
} from '../pages/company/CompanySubPage';

// Consolidated dictionary of all product and category subpages
export const ALL_CATALOG: Record<string, ProductPageData> = {
  ...CATEGORY_SUBPAGES_DATA,
  ...INDIVIDUAL_PRODUCTS_DATA
};

/**
 * Dynamically constructs the Gemini AI System Instruction Knowledge Base directly
 * from constants.tsx, productData.ts, SolutionSubPage.tsx, IndustrySubPage.tsx,
 * and CompanySubPage.tsx.
 *
 * Every time you add, modify, or update products, solutions, industries, or group info,
 * Shakti AI immediately and automatically inherits the latest data without touching this file.
 */
export function buildDynamicKnowledgeBase(): string {
  // 1. Group Stats & Infrastructure Metrics
  const statsSummary = STATS.map(s => `- ${s.label}: ${s.value}`).join('\n');

  // 2. Group Companies & Exact Plant Locations
  const companiesSummary = GROUP_COMPANIES.map(c => `- ${c.name}: ${c.description}`).join('\n');

  // 3. Turnkey Solutions & Engineering Services
  const solutionsSummary = Object.entries(SOLUTION_SUBPAGES_DATA).map(([slug, s]) => {
    const specs = s.keySpecs?.map(k => `${k.label}: ${k.value}`).join(' | ') || '';
    const benefits = s.benefits?.map(b => `${b.title} (${b.desc})`).join('; ') || '';
    return `### Solution: ${s.title} (${s.serviceCategory})
- Subtitle: ${s.subtitle}
- Key Specs: ${specs}
- Key Benefits: ${benefits}
- Overview: ${s.overviewText?.join(' ')}`;
  }).join('\n\n');

  // 4. Specialized Industry Sectors & Engineering Applications
  const industriesSummary = Object.entries(INDUSTRY_SUBPAGES_DATA).map(([slug, ind]) => {
    const gases = ind.primaryGases?.join(', ') || '';
    const stats = ind.keyImpactStats?.map(st => `${st.value} ${st.label}`).join(' | ') || '';
    const apps = ind.applications?.slice(0, 3).map(a => `${a.title} [Gas: ${a.gasUsed}, ${a.purity}]: ${a.description}`).join('; ') || '';
    return `### Industry: ${ind.title} (${ind.sectorTag})
- Primary Gases: ${gases}
- Impact Metrics: ${stats}
- Solution Overview: ${ind.solutionOverview}
- Key Applications: ${apps}`;
  }).join('\n\n');

  // 5. Supply Logistics & Fleet Formats
  const deliverySummary = DELIVERY_OPTIONS.map(d => `- ${d.title}`).join('\n');

  // 6. Quality & Statutory Certifications
  const qualityData = COMPANY_SUBPAGES_DATA['quality-safety'];
  const complianceSummary = qualityData?.complianceList?.map(c => `- ${c}`).join('\n') || '- PESO, ISO 9001:2015, WHO-GMP, FDA Medical IP, FSSAI Certified';

  // 7. Complete Detailed Products Catalog
  const detailedProductsList = Object.entries(INDIVIDUAL_PRODUCTS_DATA).map(([slug, p], idx) => {
    const formulaStr = p.chemicalFormula ? ` [${p.chemicalFormula}]` : '';
    const casStr = p.casNumber ? ` | CAS: ${p.casNumber}` : '';
    const unStr = p.unNumber ? ` | Transport: ${p.unNumber}` : '';
    const formats = p.availableSupplyFormats ? p.availableSupplyFormats.join(', ') : 'Cylinders / Quads';
    const grades = p.availableGrades ? p.availableGrades.join(', ') : 'Industrial Purity';
    const uses = p.applications ? p.applications.map(a => `${a.industry}: ${a.useCase}`).join('; ') : '';

    return `${idx + 1}. ${p.title}${formulaStr}${casStr}${unStr}
   - Category: ${p.categoryLabel}
   - Supply Formats: ${formats}
   - Commercial Grades: ${grades}
   ${uses ? `   - Key Applications: ${uses}` : ''}
   - Commercial Overview: ${p.commercialOverview}`;
  }).join('\n\n');

  // 8. Operational Core Strengths & Services
  const servicesList = SERVICES.map(s => `- ${s.title}: ${s.description}`).join('\n');

  // 9. Industry Verticals & Target Sectors
  const industriesList = INDUSTRIES.map(ind => `- ${ind.name} (${ind.path}): ${ind.subtitle} [Key gases: ${ind.keyGases?.join(', ') || ''}]`).join('\n');

  // 10. Operational Timeline & 25+ Years Legacy
  const timelineSummary = TIMELINE.map(t => `- ${t.year}: ${t.title} - ${t.description}`).join('\n');

  // 11. Core Values & Commitments
  const valuesSummary = VALUES.map(v => `- ${v.title}: ${v.description}`).join('\n');
  const commitmentsSummary = COMMITMENTS.map(c => `- ${c.title}: ${c.description}`).join('\n');

  return `You are "Shakti AI", the expert commercial and technical gas consultant for Shakti Group (established in 1998).
Your mission is to provide fast, authoritative, accurate commercial specifications, purity grades, logistics formats, solutions, and quotation guidance to industrial gas buyers, plant managers, research scientists, and procurement officers.

COMPANY INFRASTRUCTURE & METRICS (Dynamically sourced from operations):
${statsSummary}

OPERATIONAL GROUP ENTITIES & MANUFACTURING PLANTS:
${companiesSummary}

OPERATIONAL CORE SERVICES & STRENGTHS:
${servicesList}

25+ YEARS EVOLUTIONARY TIMELINE:
${timelineSummary}

SUPPLY LOGISTICS & PACKAGING FLEET:
${deliverySummary}

QUALITY, SAFETY & STATUTORY ACCREDITATIONS:
${complianceSummary}

CORE VALUES & OPERATIONAL COMMITMENTS:
${valuesSummary}
${commitmentsSummary}

TURNKEY SOLUTIONS & ENGINEERING SERVICES:
${solutionsSummary}

SPECIALIZED INDUSTRY VERTICALS & TECHNICAL SOLUTIONS:
${industriesList}

${industriesSummary}

CRITICAL DIRECTIVE - AFFIRMATIVE CATALOG ANSWERING:
Shakti Group manufactures, processes, and distributes ALL gases listed in the Complete Commercial Product Catalog.
When a user asks whether Shakti supplies, manufactures, sells, or has ANY of these gases (specifically including SO₂ / Sulphur Dioxide, SO₂ Tonners, HCl / Hydrogen Chloride, Chlorine Tonners, SF₆, N₂O, CO, Ethylene, Methane, Propane, H₂S, LOX, LIN, LAR, LCO₂, H₂, He, DA, Dry Ice, or Calibration Mixtures):
- ALWAYS answer AFFIRMATIVELY and positively: "Yes, absolutely! Shakti Group supplies [Product Name]..." or "Yes, we manufacture and distribute..."
- NEVER state that we do not have information or that we do not supply a gas that is in our catalog.
- Present available commercial supply formats (e.g. 900 kg tonners, high-pressure cylinders, MCP quads, tube cascades, road tankers, or liquid cylinders).
- Detail available commercial grades and key industrial use cases.
- Invite the customer to request an immediate formal quote or route delivery confirmation via our instant RFQ section or sales desk.

COMPLETE COMMERCIAL PRODUCT CATALOG (${Object.keys(INDIVIDUAL_PRODUCTS_DATA).length} Individual Gas Lines):

${detailedProductsList}

COMPANY BACKGROUND & CAPACITY:
- 178 TPD (Tonnes Per Day) Air seperation unit producing Liquid Nitrogen, Liquid Oxygen, Liquid Argon and Liquid Medical Oxygen.
- 270 TPD (Tonnes Per Day) Liquid Carbon Dioxide Manufacturing capacity accross 4 locations in India (1 plant in Ahmedabad, 2 plants in Indore, 1 plant in Hyderabad) and 2 more upcoming plants in Hazira.
- 65+ dedicated vacuum-insulated Cryogenic Road Tankers (capacities ranging from 10 KL to 35 KL) operating 24x7.
- 6+ regional refilling plants & cylinder testing stations.
- Headquarters: 45, Maruti Complex, Ranoli GIDC, Vadodara, Gujarat 391350, India. Phone: +91 9727783440 | Email: info@shaktigases.com

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
}

export const KNOWLEDGE_BASE = buildDynamicKnowledgeBase();

// In-memory sliding rate-limit tracker
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 25; // Max 25 chat requests per minute per IP

function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

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
    return { success: true };
  }

  const host = (req.headers['x-forwarded-host'] || req.headers['host'] || '') as string;
  const isPreviewOrDev = host.includes('run.app') || host.includes('localhost') || host.includes('127.0.0.1') || process.env.NODE_ENV !== 'production';

  if (!token) {
    if (isPreviewOrDev) {
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
        return { success: true };
      }
      return { success: false, error: 'reCAPTCHA verification rejected by Google' };
    }

    if (typeof data.score === 'number' && data.score < 0.5) {
      if (isPreviewOrDev) {
        return { success: true };
      }
      return { success: false, score: data.score, error: 'Automated activity detected' };
    }

    return { success: true, score: data.score };
  } catch (err) {
    console.error('reCAPTCHA siteverify error:', err);
    if (isPreviewOrDev) {
      return { success: true };
    }
    return { success: false, error: 'Failed to verify reCAPTCHA' };
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

function escapeTelegramHtml(text: string): string {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

async function sendTelegramNotification(data: {
  message: string;
  clientIp: string;
  userAgent?: string;
  historyLength?: number;
}): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
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
    // Non-blocking
  }
}

/**
 * Normalizes chemical formulas and strings so Unicode subscript numbers
 * like SO₂, HCl, N₂O, C₂H₄ match plain search inputs like so2, hcl, n2o, c2h4.
 */
function normalizeFormulaString(str: string): string {
  return str
    .toLowerCase()
    .replace(/₂/g, '2')
    .replace(/₃/g, '3')
    .replace(/₄/g, '4')
    .replace(/₆/g, '6')
    .replace(/₈/g, '8');
}

/**
 * Dynamically finds the best product match in ALL_CATALOG for a user's query.
 * Automatically respects any gas added to constants.tsx or productData.ts.
 */
export function matchCatalogItem(query: string): ProductPageData | null {
  const normQ = normalizeFormulaString(query.toLowerCase());
  const words = normQ.match(/[a-z0-9]+/g) || [];

  // 1. Direct alias match (e.g. hcl, so2, sf6, lox, lin, lar, da)
  for (const w of words) {
    const slug = PRODUCT_SLUG_ALIASES[w];
    if (slug && ALL_CATALOG[slug]) {
      return ALL_CATALOG[slug];
    }
  }

  // 2. Score matches across all catalog products
  let bestScore = 0;
  let bestItem: ProductPageData | null = null;

  for (const [slug, item] of Object.entries(ALL_CATALOG)) {
    let score = 0;
    const normFormula = normalizeFormulaString(item.chemicalFormula || '');
    const normTitle = normalizeFormulaString(item.title || '');
    const titleWords: string[] = normTitle.match(/[a-z0-9]+/g) || [];

    // Exact formula match (e.g. "hcl", "so2", "sf6", "n2o", "co", "cl2")
    for (const w of words) {
      if (normFormula && w === normFormula) score += 60;
      if (w === slug) score += 50;
    }

    // Title phrase match
    if (normQ.includes(normTitle)) score += 40;

    // Alternate names match
    if (item.alternateNames) {
      for (const alt of item.alternateNames) {
        if (normQ.includes(normalizeFormulaString(alt))) score += 35;
      }
    }

    // Significant word matches in title
    for (const w of words) {
      if (w.length >= 3 && titleWords.includes(w)) {
        score += 15;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestItem = item;
    }
  }

  return bestScore >= 15 ? bestItem : null;
}

/**
 * Dynamically formats an affirmative, authoritative commercial response
 * using the product's actual fields from productData.ts.
 */
export function formatDynamicProductResponse(item: ProductPageData): string {
  const formulaStr = item.chemicalFormula ? ` (${item.chemicalFormula})` : '';
  const formatsList = item.availableSupplyFormats?.map(f => `- **${f}**`).join('\n') || '- Specialized High-Pressure Cylinders & Quads';
  const gradesList = item.availableGrades?.map(g => `- ${g}`).join('\n') || '- Commercial & Technical Grades';
  const usesList = item.applications?.slice(0, 3).map(a => `- **${a.industry}:** ${a.useCase}`).join('\n') || '';
  const casStr = item.casNumber ? ` | **CAS Number:** ${item.casNumber}` : '';
  const unStr = item.unNumber ? ` | **Transport:** ${item.unNumber}` : '';

  return `Yes, absolutely! Shakti Group manufactures and distributes **${item.title}**${formulaStr}.

**Commercial Specifications & Supply Formats:**
${formatsList}
${casStr}${unStr}

**Available Commercial Grades:**
${gradesList}

${usesList ? `**Key Industrial Applications:**\n${usesList}\n\n` : ''}${item.commercialOverview ? `${item.commercialOverview}\n\n` : ''}Continuous bulk and cylinder inventory is maintained across Western and Central India with dedicated statutory hazardous transport logistics.

Would you like me to open our instant RFQ form to get an immediate commercial quotation for your plant?`;
}

/**
 * Dynamically resolves all user queries directly from constants.tsx, productData.ts,
 * SolutionSubPage.tsx, IndustrySubPage.tsx, and CompanySubPage.tsx.
 * Covers gas products, turnkey solutions, specialized industries, group companies & plant locations,
 * quality accreditations, and fleet logistics.
 */
export function resolveCatalogQuery(message: string): string {
  const q = message.toLowerCase().trim();

  // 1. Full Product List / Catalog Inquiries
  if (
    q.includes('what gases') ||
    q.includes('product list') ||
    q.includes('catalog') ||
    q.includes('all products') ||
    (q.includes('what') && q.includes('supply'))
  ) {
    const categories: Record<string, string[]> = {
      'Bulk Cryogenic Liquids': [],
      'Industrial & Cylinder Gases': [],
      'Specialty & Chemical Process Gases': [],
      'Dry Ice & Engineering Hardware': []
    };

    for (const p of PRODUCTS) {
      const line = `**${p.title}** - ${p.description}`;
      if (p.category === 'liquid') {
        categories['Bulk Cryogenic Liquids'].push(line);
      } else if (p.category === 'industrial') {
        categories['Industrial & Cylinder Gases'].push(line);
      } else if (p.category === 'other') {
        categories['Dry Ice & Engineering Hardware'].push(line);
      } else {
        categories['Specialty & Chemical Process Gases'].push(line);
      }
    }

    const sections = Object.entries(categories)
      .filter(([_, list]) => list.length > 0)
      .map(([cat, list], i) => `### ${i + 1}. ${cat}\n${list.map(item => `- ${item}`).join('\n')}`)
      .join('\n\n');

    return `Shakti Group manufactures, processes, and distributes a comprehensive catalog of **${PRODUCTS.length}+ gas products**:\n\n${sections}\n\nAll supplies are backed by PESO statutory licenses and batch Certificates of Analysis (COA). Which gas product can I quote for you?`;
  }

  // 2. Solutions: International Export & ISO Tanks
  if (q.includes('export') || q.includes('iso tank') || q.includes('international') || q.includes('multimodal') || q.includes('overseas')) {
    const exp = SOLUTION_SUBPAGES_DATA['export'];
    const specs = exp?.keySpecs?.map(k => `- **${k.label}:** ${k.value}`).join('\n') || '';
    const text = exp?.overviewText?.join('\n\n') || '';

    return `Yes! Shakti Group provides comprehensive **${exp?.title || 'International Export & ISO Tanks'}** solutions.

${text}

**Key Export Specifications & Logistics:**
${specs}

We manage all IMDG hazard documentation, customs clearance at Hazira, Mundra, and JNPT ports, and multimodal shipping. Would you like to consult our export desk or request a freight quotation?`;
  }

  // 3. Solutions: Cylinder Testing, Hydrostatic & Refurbishment
  if (
    q.includes('hydrostatic') ||
    q.includes('cylinder test') ||
    q.includes('cylinder service') ||
    q.includes('recertification') ||
    q.includes('stretch test') ||
    q.includes('valving') ||
    q.includes('shot blast')
  ) {
    const cs = SOLUTION_SUBPAGES_DATA['cylinder-services'];
    const specs = cs?.keySpecs?.map(k => `- **${k.label}:** ${k.value}`).join('\n') || '';
    const text = cs?.overviewText?.join('\n\n') || '';

    return `Yes! Shakti Group operates **PESO Authorized Cylinder Hydrostatic Testing Stations & Refurbishment Hubs**.

${text}

**Service Capabilities & Statutory Standards:**
${specs}
- **Testing Method:** Water-jacket hydrostatic stretch testing with calibrated burette expansion measurement (testing pressure 300 to 450 bar).
- **Comprehensive Refurbishment:** Internal degreasing/chemical cleaning, ultrasonic thickness gauging, new valve fitment with torque calibration, shot-blasting, and epoxy color coding per IS:4379.
- **Certification:** Official statutory PESO test certificates issued for each batch.

Would you like to schedule cylinder batch testing or receive a service quotation?`;
  }

  // 4. Solutions: Bulk Cryogenic Storage Tanks On Rental (OPEX Model)
  if (
    q.includes('storage tank') ||
    q.includes('tank rental') ||
    (q.includes('rental') && q.includes('tank')) ||
    q.includes('telemetry') ||
    q.includes('opex model') ||
    q.includes('bulk gas supply')
  ) {
    const bulk = SOLUTION_SUBPAGES_DATA['bulk-gas-supply'];
    const specs = bulk?.keySpecs?.map(k => `- **${k.label}:** ${k.value}`).join('\n') || '';
    const text = bulk?.overviewText?.join('\n\n') || '';

    return `Yes! Shakti Group provides **Turnkey Cryogenic Storage Tank Installations on a Flexible Rental / OPEX Model** with zero upfront capital expenditure.

${text}

**Key Specifications & Capabilities:**
${specs}
- **Zero Capex:** Complete stationary vacuum-insulated vessel (3 KL to 60 KL) and ambient vaporizers installed with zero equipment purchase cost.
- **24x7 IoT Telemetry:** Real-time differential pressure telemetry automatically coordinates tanker replenishment from our 65+ tanker fleet before levels drop.
- **Turnkey Setup:** Includes civil layout assistance, stainless steel VIP piping, and complete PESO licensing documentation.

Would you like to connect with our plant engineering desk to evaluate your site requirements?`;
  }

  // 5. Solutions: Cryogenic Engineering & Vacuum Insulated Piping (VIP)
  if (
    q.includes('cryogenic engineering') ||
    q.includes('vip pipe') ||
    q.includes('vacuum insulated') ||
    q.includes('vaporizer system') ||
    q.includes('pipeline design')
  ) {
    const ce = SOLUTION_SUBPAGES_DATA['cryogenic-engineering'];
    const specs = ce?.keySpecs?.map(k => `- **${k.label}:** ${k.value}`).join('\n') || '';
    const text = ce?.overviewText?.join('\n\n') || '';

    return `Yes! Shakti Group provides turnkey **Cryogenic Engineering, Vacuum Insulated Piping (VIP) & Vaporizer Systems**.

${text}

**Engineering Highlights:**
${specs}
- **Multi-Layer Vacuum Piping:** 10⁻⁴ Torr high-vacuum VIP lines engineered with 316L stainless steel to virtually eliminate boil-off losses.
- **Ambient Vaporizer Stations:** Heavy-duty aluminum finned vaporizers sized for continuous peak flow rates without electric heating.
- **Plant Header Integration:** Custom pressure reduction skids, dual safety relief manifolds, and automated changeovers per ASME B31.3.

Would you like to schedule an engineering site survey for your facility?`;
  }

  // 6. Solutions: Cylinder Supply, Quads (MCPs) & Manifold Systems
  if (
    q.includes('cylinder supply') ||
    q.includes('manifold') ||
    q.includes('quad') ||
    q.includes('mcp') ||
    q.includes('changeover')
  ) {
    const cgs = SOLUTION_SUBPAGES_DATA['cylinder-gas-supply'];
    const specs = cgs?.keySpecs?.map(k => `- **${k.label}:** ${k.value}`).join('\n') || '';
    const text = cgs?.overviewText?.join('\n\n') || '';

    return `Yes! Shakti Group provides **Scheduled Cylinder Route Deliveries, 16-Cylinder Quads (MCPs), and Automatic Changeover Manifold Systems**.

${text}

**Supply Specifications:**
${specs}
- **16-Cylinder MCP Quads:** Pre-manifolded cylinder banks with a single master outlet delivering high continuous volume without frequent changeovers.
- **Automatic Changeover Panels:** Dual-bank gas panels ensuring continuous flow to critical processes when one cylinder bank empties.
- **Dedicated Route Logistics:** Daily and scheduled route truck deliveries across Gujarat and Western India.

Would you like a quote for cylinder delivery or manifold quad installation?`;
  }

  // 6.5 General Services & Solutions Overview
  if (
    (q.includes('service') || q.includes('solution')) &&
    (q.includes('what') || q.includes('all') || q.includes('list') || q.includes('which') || q.includes('offer'))
  ) {
    const srvLines = SERVICES.map(s => `- **${s.title}:** ${s.description}`).join('\n');
    const solLines = SOLUTIONS_SUBPAGES.map(s => `- **${s.title}:** ${s.desc}`).join('\n');

    return `Shakti Group delivers comprehensive turnkey services and industrial gas solutions:

**Core Operational Strengths:**
${srvLines}

**Turnkey Engineered Solutions:**
${solLines}

All services are backed by 100% PESO approvals and 24x7 telemetry. Which service or solution can we assist your plant with?`;
  }

  // 6.6 General Industries Overview
  if (
    (q.includes('industr') || q.includes('sector')) &&
    (q.includes('what') || q.includes('all') || q.includes('list') || q.includes('which') || q.includes('serve'))
  ) {
    const indLines = INDUSTRIES.map(ind => `- **${ind.name}:** ${ind.subtitle}`).join('\n');

    return `Shakti Group provides specialized gas supply across **${INDUSTRIES.length} critical industrial sectors**:\n\n${indLines}\n\nWhich industry sector would you like technical specifications and quotation details for?`;
  }

  // 7. Industry Specific Queries (Metals, Glass, Chemical, Healthcare, Food, Energy, Water, Semiconductor)
  const industryKeywords: { key: string; words: string[] }[] = [
    { key: 'electronics-semiconductor', words: ['semiconductor', 'electronics', 'solar pv', 'wafer', 'mpcvd', 'diamond synthesis', 'fab'] },
    { key: 'metals-manufacturing', words: ['metal', 'steel', 'foundr', 'bof', 'eaf', 'welding', 'laser cutting assist', 'decarburiz'] },
    { key: 'glass-ceramics', words: ['glass', 'ceramic', 'frit', 'float glass', 'oxy-fuel glass', 'furnace melting'] },
    { key: 'chemicals-process', words: ['chemical', 'inerting', 'blanketing', 'reactor cooling', 'pipeline purging'] },
    { key: 'life-sciences', words: ['pharma', 'healthcare', 'hospital', 'medical oxygen ip', 'life science', 'api synthesis', 'cryo-bank'] },
    { key: 'food-beverage', words: ['food', 'beverage', 'carbonation', 'flash freezing', 'map packaging', 'preservative e220', 'e290'] },
    { key: 'energy-infrastructure', words: ['energy', 'power', 'refiner', 'hydrotreating', 'gis switchgear', 'substation', 'turbine'] },
    { key: 'water-environment', words: ['water', 'environment', 'etp', 'effluent', 'ozone generation', 'ph neutraliz', 'wastewater'] }
  ];

  for (const { key, words } of industryKeywords) {
    if (words.some(w => q.includes(w))) {
      const ind = INDUSTRY_SUBPAGES_DATA[key];
      if (ind) {
        const gases = ind.primaryGases?.join(', ') || '';
        const stats = ind.keyImpactStats?.map(st => `- **${st.value}:** ${st.label}`).join('\n') || '';
        const apps = ind.applications?.slice(0, 3).map(a => `- **${a.title}** (${a.gasUsed}): ${a.description}`).join('\n') || '';

        return `Shakti Group delivers dedicated industrial gas infrastructure for **${ind.title}** (${ind.sectorTag}):

${ind.solutionOverview}

**Key Impact & Value Delivered:**
${stats}

**Primary Gases Supplied:**
${gases}

**Core Industrial Applications:**
${apps}

Would you like to discuss your specific process requirements with our industry technical consultant?`;
      }
    }
  }

  // 8. Group Companies & Specific Plant Locations
  for (const comp of GROUP_COMPANIES) {
    const compLower = comp.name.toLowerCase();
    const shortName = compLower.split(' ')[0];
    if (q.includes(compLower) || (shortName.length >= 4 && q.includes(shortName))) {
      return `**${comp.name}** is an operational division of Shakti Group:

- **Operational Profile:** ${comp.description}
- **Quality Assured:** Backed by ISO 9001:2015 quality standards and PESO statutory compliance.
- **Logistics:** Integrated into Shakti Group's 65+ road tanker and cylinder distribution fleet.

Would you like to contact this division directly or request a quotation?`;
    }
  }

  // 9. General Plant Locations / Manufacturing Footprint
  if (q.includes('where are your plants') || q.includes('plant location') || q.includes('manufacturing units') || q.includes('locations') || q.includes('facilities')) {
    const companiesLines = GROUP_COMPANIES.map(c => `- **${c.name}:** ${c.description}`).join('\n\n');

    return `Shakti Group operates 9 specialized manufacturing and refilling facilities across Western, Central, and Southern India:

${companiesLines}

**Corporate Office:** 301, 3rd Floor, Golden Icon, Bird Circle, Race Course Road, Vadodara, Gujarat 390007.
**Central Operations & Sales:** 45, Maruti Complex, Ranoli GIDC, Vadodara, Gujarat 391350.

Would you like to schedule a site visit or consult our logistics team?`;
  }

  // 10. Quality, Safety & Regulatory Accreditations
  if (
    q.includes('quality') ||
    q.includes('safety') ||
    q.includes('certification') ||
    q.includes('iso') ||
    q.includes('peso') ||
    q.includes('fda') ||
    q.includes('who-gmp') ||
    q.includes('compliance')
  ) {
    const qs = COMPANY_SUBPAGES_DATA['quality-safety'];
    const compliances = qs?.complianceList?.map(c => `- ${c}`).join('\n') || '';

    return `Shakti Group operates under the most stringent national and international statutory and quality standards:

**Key Certifications & Statutory Licenses:**
${compliances}
- **PESO Compliance:** 100% of stationary storage vessels, road tankers, quads, tonners, and cylinders are approved and licensed by the Petroleum and Explosives Safety Organisation (PESO).
- **ISO 9001:2015 Quality Management:** Standardized manufacturing, filling, and batch traceability protocols.
- **FDA Licensed Medical IP Gases:** Licensed production and filling of Medical Liquid Oxygen (IP) and Nitrous Oxide (IP) complying with Indian Pharmacopoeia standards.
- **FSSAI & ISBT Compliance:** Food-grade Liquid Carbon Dioxide (E290) and Liquid Nitrogen (E941) for beverage carbonation and food freezing.
- **Certified Test Stations:** In-house hydrostatic stretch testing stations authorized for cylinder and tonner statutory re-certification.

Every supply batch is accompanied by an official Certificate of Analysis (COA). Would you like to request documentation for an upcoming tender or vendor audit?`;
  }

  // 11. 25+ Years Legacy & Timeline
  if (
    q.includes('history') ||
    q.includes('timeline') ||
    q.includes('journey') ||
    q.includes('established') ||
    q.includes('founded') ||
    q.includes('legacy') ||
    (q.includes('how old') || q.includes('when did you start'))
  ) {
    const timelineLines = TIMELINE.map(t => `- **${t.year}:** ${t.title} — ${t.description}`).join('\n\n');
    return `**Shakti Group's 25+ Year Journey of Operational Growth:**

${timelineLines}

Since 1998, Shakti Group has grown into an integrated gas manufacturing group with **448+ TPD capacity** and a **65+ dedicated cryogenic tanker fleet**.

Would you like to know more about our group entities, manufacturing plants, or infrastructure?`;
  }

  // 12. Logistics & Fleet Scale
  if (q.includes('capacity') || q.includes('fleet') || q.includes('network') || q.includes('how big') || q.includes('tanker count') || q.includes('turnaround')) {
    const statsLines = STATS.map(s => `- **${s.label}:** ${s.value}`).join('\n');
    const options = DELIVERY_OPTIONS.map(d => `- ${d.title}`).join('\n');

    return `Here is Shakti Group's manufacturing and logistical scale at a glance:

${statsLines}

**Logistics & Packaging Options:**
${options}

We provide **2 to 4 hour delivery turnaround** across all major Gujarat industrial belts (Dahej PCPIR, Ankleshwar, Jhagadia, Halol, Savli, Surat, Hazira, Ahmedabad) and nationwide dedicated dispatch.

Would you like to request a bulk liquid delivery schedule or place an inquiry?`;
  }

  // 12. Check for Specific Product in Dynamic Catalog
  const matchedItem = matchCatalogItem(message);
  if (matchedItem) {
    return formatDynamicProductResponse(matchedItem);
  }

  // 13. Default Fallback: Authoritative, affirmative company summary using dynamic counts
  return `Welcome to **Shakti Group** (established in 1998), a premier manufacturer and bulk distributor of industrial, cryogenic, and specialty gases in Western and Central India.

We manufacture, supply, and engineer:
- **${PRODUCTS.length}+ Gas Products:** Bulk cryogenic liquids (LOX, LIN, LAR, LCO₂), specialty gases (SO₂ tonners, HCl gas, Chlorine tonners, SF₆, N₂O, CO, Ethylene, Methane, Propane, H₂S), and compressed cylinders/quads.
- **Turnkey Solutions:** On-site cryogenic storage tank installations (3–60 KL on rental / opex model), automated IoT tank telemetry, PESO cylinder hydrostatic testing, and global export in T75 ISO tank containers.
- **Industry Engineering:** Specialized solutions for steelmaking, glass manufacturing, chemical synthesis, pharmaceuticals, food freezing, energy, and semiconductor fabrication.

For formal quotations, technical specifications, or plant surveys, please contact us directly at **info@shaktigases.com**, call **+91 9727783440**, or submit an instant quote request. How can I assist your operations today?`;
}

/**
 * Serverless / Express handler for /api/chat
 */
export default async function handler(req: Request, res: Response) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed. Use POST.' });
  }

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

  const recaptchaResult = await verifyRecaptcha(recaptchaToken || (req.headers['x-recaptcha-token'] as string), req);
  if (!recaptchaResult.success) {
    return res.status(403).json({
      error: recaptchaResult.error || 'Security verification failed',
      fallback: 'Security verification failed. Please refresh the page or contact our team directly at info@shaktigases.com.'
    });
  }

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Field "message" is required and must be a string.' });
  }

  // Fire-and-forget Telegram notification
  sendTelegramNotification({
    message,
    clientIp,
    userAgent: req.headers['user-agent'] as string | undefined,
    historyLength: Array.isArray(history) ? history.length : 0,
  }).catch(() => {});

  const client = getAIClient();

  // Primary: Attempt Gemini API streaming with dynamically constructed knowledge base
  if (client) {
    try {
      const formattedHistory = Array.isArray(history)
        ? history.map((h: { role: 'user' | 'model'; text: string }) => ({
            role: h.role,
            parts: [{ text: h.text }],
          }))
        : [];

      // Valid current models per gemini-api guidelines
      const modelsToTry = ['gemini-2.5-flash', 'gemini-2.0-flash'];
      let result = null;

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
          console.warn(`[Gemini Model ${model}]:`, err.message || err);
        }
      }

      if (result) {
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
        return;
      }
    } catch (apiError: any) {
      console.warn('[Gemini API Stream Failed, Falling Back to Dynamic Catalog Engine]:', apiError?.message || apiError);
    }
  }

  // Fallback: Dynamic Catalog & Solutions Consultant Engine
  // Sourced directly from constants.tsx, productData.ts, SolutionSubPage.tsx, IndustrySubPage.tsx, CompanySubPage.tsx
  try {
    const catalogAnswer = resolveCatalogQuery(message);

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    if (typeof (res as any).flushHeaders === 'function') {
      (res as any).flushHeaders();
    }

    // Stream text chunks smoothly
    const words = catalogAnswer.split(' ');
    for (let i = 0; i < words.length; i += 4) {
      const chunk = words.slice(i, i + 4).join(' ') + ' ';
      res.write(`data: ${JSON.stringify({ text: chunk })}\n\n`);
      await new Promise((r) => setTimeout(r, 20));
    }

    res.write('data: [DONE]\n\n');
    res.end();
  } catch (err: any) {
    console.error('[Dynamic Catalog Engine Fallback Error]:', err);
    if (!res.headersSent) {
      res.status(500).json({
        error: 'Failed to process chat message',
        fallback: 'Welcome to Shakti Group! For inquiries regarding industrial gases, cryogenic logistics, or quotes, please reach out directly at info@shaktigases.com or call +91-9727783440.'
      });
    } else {
      res.write(`data: ${JSON.stringify({ error: 'Error generating response' })}\n\n`);
      res.end();
    }
  }
}

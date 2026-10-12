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
} from '../pages/solutions/solutionData';
import {
  INDUSTRY_SUBPAGES_DATA,
  IndustryPageData
} from '../pages/industries/industryData';
import {
  COMPANY_SUBPAGES_DATA,
  CompanyPageData
} from '../pages/company/companyData';

// Consolidated dictionary of all product and category subpages
export const ALL_CATALOG: Record<string, ProductPageData> = {
  ...CATEGORY_SUBPAGES_DATA,
  ...INDIVIDUAL_PRODUCTS_DATA
};

/**
 * Dynamically constructs the Gemini AI System Instruction Knowledge Base directly
 * from constants.tsx, productData.ts, solutionData.ts, industryData.ts, and companyData.ts.
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
    const grades = (p.availableGrades || p.puritiesAvailable) ? (p.availableGrades || p.puritiesAvailable).join(', ') : 'Industrial Purity';
    const uses = p.applications ? p.applications.map(a => `${a.industry}: ${a.useCase}`).join('; ') : '';
    const overviewText = p.commercialOverview || p.overview || p.subtitle || '';

    return `${idx + 1}. ${p.title}${formulaStr}${casStr}${unStr}
   - Category: ${p.categoryLabel}
   - Supply Formats: ${formats}
   - Commercial Grades: ${grades}
   ${uses ? `   - Key Applications: ${uses}` : ''}
   - Commercial Overview: ${overviewText}`;
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

  return `You are "Shakti AI", the dedicated commercial and technical gas assistant for Shakti Group (established in 1998).

CONVERSATIONAL VOICE & CHATTING EXPERIENCE:
- Tone: Natural, warm, polite, and human. Converse like an experienced, helpful colleague on Shakti Group's commercial and technical desk.
- Never sound like an emotionless corporate robot or dump giant wall-of-text disclaimers when a simple, conversational reply is best.
- Conversational Pleasantries: When a user asks casual questions like "How are you?", "How's your day?", "Good morning!", or "Hello":
  - Respond warmly and naturally as a person would: e.g., "I'm doing great, thank you for asking! Hope you're having a productive day as well. I'm here from the Shakti Group team — how can I help you with your gas requirements or facility today?"
  - Acknowledge their greeting before smoothly asking how you can help their plant or operations.
- Politeness: Acknowledge thanks ("You're very welcome!", "Happy to help!"), goodbyes ("Have a great day ahead! Feel free to reach back out anytime"), and short acknowledgments naturally.

SHAKTI ASSISTANT RESTRAINT & BOUNDARIES:
- Domain Focus: You represent Shakti Group, a premier manufacturer of industrial, cryogenic, and specialty gases in Western and Central India.
- If a user veers into unrelated personal chit-chat, trivial questions, or general banter: Respond with a friendly, human touch, but gently steer the conversation back to how you can support their operations, gas supplies, or plant engineering.
- Commercial Restraint: Industrial gas rates depend on volume, purity, supply packaging, and delivery plant location. NEVER make up fictional prices or guess figures. Instead, explain the factors clearly and warmly invite the user to use our instant RFQ tool or connect with our commercial desk (+91 9727783440 / info@shaktigases.com).
- Engineering & Safety Restraint: Stick to verified chemical properties, cylinder/bulk specifications, and PESO safety norms. Never compromise on safety guidelines.

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
- Present available commercial supply formats (e.g. 900 kg tonners, high-pressure cylinders, MCP quads, tube cascades, road tankers, or liquid cylinders).
- Detail available commercial grades and key industrial use cases in conversational, easily readable terms.
- Invite the customer to request an immediate formal quote or route delivery confirmation via our instant RFQ section or sales desk.

COMPLETE COMMERCIAL PRODUCT CATALOG (${Object.keys(INDIVIDUAL_PRODUCTS_DATA).length} Individual Gas Lines):

${detailedProductsList}

COMPANY BACKGROUND & CAPACITY:
- 178 TPD (Tonnes Per Day) Air separation unit at Karjan producing Liquid Nitrogen, Liquid Oxygen, Liquid Argon and Liquid Medical Oxygen.
- 270 TPD (Tonnes Per Day) Liquid Carbon Dioxide Manufacturing capacity across 4 locations in India (Ahmedabad, 2 in Indore, Hyderabad) and 2 upcoming in Hazira.
- 65+ dedicated vacuum-insulated Cryogenic Road Tankers (capacities ranging from 10 KL to 35 KL) operating 24x7.
- 6+ regional refilling plants & cylinder testing stations.
- Headquarters: 45, Maruti Complex, Ranoli GIDC, Vadodara, Gujarat 391350, India. Phone: +91 9727783440 | Email: info@shaktigases.com

RESPONSE PROTOCOL & QUESTION CLASSIFICATION:

A. Greetings & Pleasantries:
- Answer with genuine human warmth and friendliness.
- Acknowledge social pleasantries naturally ("I'm doing well, thank you!", "Good morning!"), and ask how you can help with their gas or plant requirements.

B. General Product Information:
- Answer directly and conversationally using verified data from the catalog.
- Explain physical properties, purity specs, boiling points, CAS numbers, and packaging formats clearly.

C. Technical Application:
- Answer from verified engineering knowledge (e.g. laser cutting assist parameters, pharma inerting, water treatment ozone enrichment, shielding gas ratios).

D. Product Availability & Delivery Routes:
- Explain that delivery routes and timelines depend on plant location, required mode (cryogenic road tanker vs. cylinders/quads), and volume.
- Offer our instant RFQ section or direct dispatch desk (+91 9727783440) for route scheduling.

E. Pricing / RFQ:
- Explain warmly that pricing depends on off-take volume, purity grade, and delivery location.
- Directly direct them to our instant RFQ section to generate a framed quotation.

F. Engineering / Storage / Pipeline Solutions:
- Mention that Shakti Group provides turnkey vacuum-insulated cryogenic tanks (3 KL to 60 KL), ambient vaporizers, telemetry monitoring, and pipelines on lease/sale.
- Offer the instant RFQ section or engineering consultation.

G. Careers / Jobs:
- Direct candidates warmly to our HR team:
  - Email: **careers@shaktigases.com** / **info@shaktigases.com**
  - Phone: **+91 9727783440**
  - Office: 45, Maruti Complex, Ranoli GIDC, Vadodara, Gujarat 391350.

H. Existing Customer / Urgent Supply:
- Prioritize urgent refilling and emergency logistics. Advise them to call our 24x7 logistics hotline directly at **+91 9727783440** for immediate tanker dispatch.

I. Off-Topic / Unknown Questions:
- If completely off-topic: Acknowledge with a light human touch, then politely bring the focus back to Shakti Group's industrial gas and engineering capabilities.
- If asking about specific unverified company facts or numbers: Honestly state that you'd like our commercial or engineering team to provide verified specifics, and give contact details: **+91 9727783440** | **info@shaktigases.com**.

FORMATTING & CHEMICAL NOTATION GUIDELINES:
- Output chemical formulas using standard clean Unicode notation (e.g. CO₂, O₂, N₂, Ar, H₂, He, C₂H₂, CH₄, N₂O, NH₃, SF₆) rather than LaTeX dollar notation ($CO_2$ or $H_2$).
- Write parameters and purity thresholds cleanly (e.g. ≥ 99.5%, -183°C, 150–200 bar, ±0.1%, Nm³, m³).
`;
}

export const KNOWLEDGE_BASE = buildDynamicKnowledgeBase();

/**
 * Normalizes chemical formulas and strings so Unicode subscript numbers
 * like SO₂, HCl, N₂O, C₂H₄ match plain search inputs like so2, hcl, n2o, c2h4.
 */
export function normalizeFormulaString(str: string): string {
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
  const gradesList = (item.availableGrades || item.puritiesAvailable)?.map(g => `- ${g}`).join('\n') || '- Commercial & Technical Grades';
  const usesList = item.applications?.slice(0, 3).map(a => `- **${a.industry}:** ${a.useCase}`).join('\n') || '';
  const casStr = item.casNumber ? ` | **CAS Number:** ${item.casNumber}` : '';
  const unStr = item.unNumber ? ` | **Transport:** ${item.unNumber}` : '';
  const productOverview = item.commercialOverview || item.overview || item.subtitle || '';

  return `Yes, absolutely! Shakti Group manufactures and distributes **${item.title}**${formulaStr}.

**Commercial Specifications & Supply Formats:**
${formatsList}
${casStr}${unStr}

**Available Commercial Grades:**
${gradesList}

${usesList ? `**Key Industrial Applications:**\n${usesList}\n\n` : ''}${productOverview ? `${productOverview}\n\n` : ''}Continuous bulk and cylinder inventory is maintained across Western and Central India with dedicated statutory hazardous transport logistics.

Would you like me to open our instant RFQ form to get an immediate commercial quotation for your plant?`;
}

/**
 * Dynamically resolves all user queries directly from constants.tsx, productData.ts,
 * solutionData.ts, industryData.ts, and companyData.ts.
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

  // 2. Careers / Job Inquiries
  if (q.includes('job') || q.includes('career') || q.includes('hiring') || q.includes('vacancy') || q.includes('hr') || q.includes('work with you')) {
    return `Thank you for your interest in joining Shakti Group!

To explore career opportunities across plant operations, cryogenic logistics, sales engineering, and quality control:
- **Email HR:** **careers@shaktigases.com** / **info@shaktigases.com**
- **Direct Phone:** **+91 9727783440**
- **Headquarters:** 45, Maruti Complex, Ranoli GIDC, Vadodara, Gujarat 391350.

Please send your resume with your functional domain in the subject line.`;
  }

  // 3. Contact Details / Office Location / Direct Phone
  if (
    q.includes('contact') ||
    q.includes('phone') ||
    q.includes('email') ||
    q.includes('number') ||
    q.includes('address') ||
    q.includes('headquarters') ||
    q.includes('call')
  ) {
    return `You can reach Shakti Group directly via any of our official channels:

- **Central Operations & Sales Desk:** **+91 9727783440** (Mon–Sat, 9:00 AM – 7:00 PM IST)
- **Official Email:** **info@shaktigases.com**
- **Head Office:** 45, Maruti Complex, Ranoli GIDC, Vadodara, Gujarat 391350, India.

Would you like to open our RFQ inquiry form or request a callback from our regional sales team?`;
  }

  // 4. Quotation / Pricing / Cost Requests
  if (
    q.includes('price') ||
    q.includes('pricing') ||
    q.includes('cost') ||
    q.includes('rate') ||
    q.includes('quotation') ||
    q.includes('quote') ||
    q.includes('rfq') ||
    q.includes('buy')
  ) {
    return `Industrial and specialty gas pricing is determined by purity grade, supply format (bulk road tanker vs. cylinders/quads), off-take volume, and plant delivery location.

To generate an immediate formal quotation with current logistics tariffs, please submit an inquiry through our **Instant RFQ form** or connect directly:
- **Phone:** **+91 9727783440**
- **Email:** **info@shaktigases.com**

Would you like me to open the RFQ form for you right now?`;
  }

  // 5. Turnkey Engineering & Solutions
  for (const [slug, sol] of Object.entries(SOLUTION_SUBPAGES_DATA)) {
    const slugWords = slug.split('-');
    const titleWords = sol.title.toLowerCase().split(' ');
    const isMatch = slugWords.some(w => w.length > 3 && q.includes(w)) || titleWords.some(w => w.length > 3 && q.includes(w));

    if (isMatch) {
      const specs = sol.keySpecs?.map(k => `- **${k.label}:** ${k.value}`).join('\n') || '';
      const benefits = sol.benefits?.map(b => `- **${b.title}:** ${b.desc}`).join('\n') || '';
      const overview = sol.overviewText?.[0] || sol.subtitle || '';

      return `Shakti Group provides turnkey **${sol.title}** (${sol.serviceCategory}):

${overview}

**Key Engineering Specifications:**
${specs}

**Operational Benefits:**
${benefits}

We offer turnkey equipment on CAPEX and OPEX/rental arrangements with complete PESO statutory approvals. Would you like our engineering team to conduct a site feasibility assessment?`;
    }
  }

  // 6. General Solutions / Tank Lease / Telemetry Inquiry
  if (
    q.includes('tank on lease') ||
    q.includes('tank rental') ||
    q.includes('storage tank') ||
    q.includes('cryogenic tank') ||
    q.includes('telemetry') ||
    q.includes('iot monitoring') ||
    q.includes('testing station') ||
    q.includes('hydro test') ||
    q.includes('iso tank') ||
    q.includes('export')
  ) {
    const solTitles = Object.values(SOLUTION_SUBPAGES_DATA).map(s => `- **${s.title}:** ${s.subtitle}`).join('\n');
    return `Shakti Group engineers end-to-end industrial gas infrastructure and turnkey solutions:

${solTitles}

All systems come with 24x7 telemetry monitoring, scheduled cryogenic top-ups, and full PESO statutory compliance. Would you like an engineering quote for your plant?`;
  }

  // 7. Specialized Industry Verticals
  for (const [slug, ind] of Object.entries(INDUSTRY_SUBPAGES_DATA)) {
    const indWords = slug.split('-');
    const titleWords = ind.title.toLowerCase().split(' ');
    const isMatch = indWords.some(w => w.length > 3 && q.includes(w)) || titleWords.some(w => w.length > 3 && q.includes(w));

    if (isMatch) {
      const gases = ind.primaryGases?.map(g => `**${g}**`).join(', ') || '';
      const apps = ind.applications?.slice(0, 3).map(a => `- **${a.title}** [${a.gasUsed}, ${a.purity}]: ${a.description}`).join('\n') || '';
      const stats = ind.keyImpactStats?.map(st => `**${st.value}** ${st.label}`).join(' | ') || '';

      return `Shakti Group provides dedicated gas engineering for the **${ind.title}** industry (${ind.sectorTag}):

${ind.solutionOverview}

**Primary Gases Supplied:** ${gases}
${stats ? `**Key Impact Metrics:** ${stats}\n` : ''}
**Core Applications:**
${apps}

Would you like to discuss supply volumes or gas purity specifications for your facility?`;
    }
  }

  // 8. General Industry Vertical Inquiry
  if (q.includes('industry') || q.includes('sector') || q.includes('application') || q.includes('vertical')) {
    const indTitles = Object.values(INDUSTRY_SUBPAGES_DATA).map(i => `- **${i.title} (${i.sectorTag}):** Primary gases: ${i.primaryGases?.join(', ') || ''}`).join('\n');
    return `Shakti Group engineers specialized gas supply chains across high-criticality industry sectors:

${indTitles}

Which sector best describes your manufacturing or research facility?`;
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

Would you like to request a bulk liquid delivery schedule or place an inquiry?`;
  }

  // 13. Check for Specific Product in Dynamic Catalog
  const matchedItem = matchCatalogItem(message);
  if (matchedItem) {
    return formatDynamicProductResponse(matchedItem);
  }

  // 14. Default Fallback: Authoritative, affirmative company summary using dynamic counts
  return `Welcome to **Shakti Group** (established in 1998), a premier manufacturer and bulk distributor of industrial, cryogenic, and specialty gases in Western and Central India.

We manufacture, supply, and engineer:
- **${PRODUCTS.length}+ Gas Products:** Bulk cryogenic liquids (LOX, LIN, LAR, LCO₂), specialty gases (SO₂ tonners, HCl gas, Chlorine tonners, SF₆, N₂O, CO, Ethylene, Methane, Propane, H₂S), and compressed cylinders/quads.
- **Turnkey Solutions:** On-site cryogenic storage tank installations (3–60 KL on rental / opex model), automated IoT tank telemetry, PESO cylinder hydrostatic testing, and global export in T75 ISO tank containers.
- **Industry Engineering:** Specialized solutions for steelmaking, glass manufacturing, chemical synthesis, pharmaceuticals, food freezing, energy, and semiconductor fabrication.

For formal quotations, technical specifications, or plant surveys, please contact us directly at **info@shaktigases.com**, call **+91 9727783440**, or submit an instant quote request. How can I assist your operations today?`;
}

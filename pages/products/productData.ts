export interface ProductPageData {
  slug: string;
  title: string;
  chemicalFormula: string;
  symbolBadge: string;
  casNumber: string;
  unNumber: string;
  subtitle: string;
  heroImage: string;
  category: 'liquid' | 'industrial' | 'high-purity' | 'specialty' | 'other';
  categoryLabel: string;
  categorySlug: string;
  physicalState?: string;
  appearance?: string;
  availableSupplyFormats?: string[];
  puritiesAvailable: string[];
  physicalProperties: {
    boilingPoint: string;
    expansionRatio: string;
    gasDensity: string;
    molecularWeight: string;
    criticalTemp: string;
  };
  overview: string;
  supplyModes: {
    title: string;
    capacity: string;
    pressure: string;
    description: string;
    idealFor: string;
  }[];
  applications: {
    industry: string;
    useCase: string;
    recommendedPurity: string;
  }[];
  handlingSafety?: string[];
  relatedProducts?: { title: string; slug: string; formula: string }[];
  seoTitle: string;
  seoDesc: string;
  keywords: string;
  alternateNames?: string[];
  targetQueries?: string[];
  deliveryCoverage?: string[];
  faqs?: { question: string; answer: string }[];
}

export const INDIVIDUAL_PRODUCTS_DATA: Record<string, ProductPageData> = {
  // ----------------------------------------------------
  // LIQUID OXYGEN (LOX)
  // ----------------------------------------------------
  'liquid-oxygen': {
    slug: 'liquid-oxygen',
    title: 'Liquid Oxygen (LOX)',
    chemicalFormula: 'O₂',
    symbolBadge: 'LOX | Cryogenic Liquid',
    casNumber: '7782-44-7',
    unNumber: 'UN 1073 (Oxygen, Refrigerated Liquid)',
    subtitle: 'High-purity pale blue cryogenic liquid oxygen for steel making, healthcare IP respiration, chemical oxidation, and wastewater aeration.',
    heroImage: 'https://images.unsplash.com/photo-1615486510988-2c6ecc66ceba?q=80&w=1740&auto=format&fit=crop',
    category: 'liquid',
    categoryLabel: 'Bulk & Cryogenic Gases',
    categorySlug: 'bulk-cryogenic',
    physicalState: 'Cryogenic Liquid (-182.96°C)',
    appearance: 'Pale blue transparent cryogenic liquid / Colorless, odorless gas upon vaporization',
    availableSupplyFormats: [
      'Bulk Cryogenic Road Tankers (10 KL to 35 KL)',
      'Cryogenic Dura Liquid Cylinders (160L to 250L)',
      'Turnkey On-Site Storage Tanks (3 KL to 50 KL Rental)'
    ],
    puritiesAvailable: ['Commercial Grade (≥ 99.5%)', 'Medical Oxygen IP Grade (≥ 99.5%)', 'Ultra High Purity Grade 5.0 (99.999%)', 'Electronic / Laser Grade (99.9995%)'],
    physicalProperties: {
      boilingPoint: '-182.96°C (-297.3°F)',
      expansionRatio: '1 : 861 (Liquid to Gas @ 15°C, 1 atm)',
      gasDensity: '1.429 kg/m³ (at 0°C, 101.3 kPa)',
      molecularWeight: '31.998 g/mol',
      criticalTemp: '-118.57°C (Critical Pressure 50.43 bar)'
    },
    overview: 'Shakti Group produces high-purity Liquid Oxygen (LOX) through cryogenic distillation of atmospheric air at our Karjan ASU plant (178 TPD) and partner facilities. With strict control over moisture (< 5 ppm) and trace hydrocarbons, our LOX is supplied via our dedicated 65+ cryogenic tanker fleet for steel blast furnace injection, medical liquid cylinders in hospitals, and precision chemical oxidation.',
    supplyModes: [
      {
        title: 'Cryogenic Road Tanker Bulk Delivery',
        capacity: '10 KL to 35 KL (11 to 40 Metric Tonnes)',
        pressure: '16 to 24 Bar',
        description: 'Direct decanting into customer vertical or horizontal cryogenic storage tanks with automated IoT level telemetry.',
        idealFor: 'Steel melting shops, large hospitals, chemical plants, and copper smelters.'
      },
      {
        title: 'Cryogenic Liquid Cylinders (Dura Cylinders)',
        capacity: '160L to 250L Portable Liquid Vessels',
        pressure: '16 to 24 Bar',
        description: 'Movable vacuum-insulated stainless steel liquid vessels replacing multiple high-pressure cylinders.',
        idealFor: 'Hospitals, laser cutting units, and medium industrial fabrication shops.'
      },
      {
        title: 'On-Site Storage Tank Installation (Rental)',
        capacity: '3 KL to 50 KL Storage Vessels',
        pressure: 'Regulated up to 35 Bar',
        description: 'Turnkey on-site cryogenic tank & ambient vaporizer setup supplied on rental/opex basis with continuous tanker top-ups.',
        idealFor: 'Continuous 24/7 manufacturing plants requiring uninterrupted oxygen supply.'
      }
    ],
    applications: [
      { industry: 'Steel & Metallurgy', useCase: 'Blast furnace oxygen enrichment, basic oxygen furnace refining & electric arc furnace cutting', recommendedPurity: '≥ 99.5% Commercial LOX' },
      { industry: 'Healthcare & Hospitals', useCase: 'Medical Oxygen (IP) for ICU patient ventilation, anesthesia & life support manifolds', recommendedPurity: '≥ 99.5% Medical Oxygen IP (FDA Licensed)' },
      { industry: 'Chemicals & Oxidation', useCase: 'Ethylene oxide production, wastewater ozone generation & hydrocarbon oxidation', recommendedPurity: '≥ 99.8% Technical Grade' },
      { industry: 'Metal Fabrication & Laser', useCase: 'Clean laser cutting assist gas and heavy oxy-fuel cutting of carbon steels', recommendedPurity: '≥ 99.95% Laser Grade' }
    ],
    handlingSafety: [
      'Liquid oxygen is extremely cold (-183°C); contact causes instant severe cryogenic frostbite and tissue destruction.',
      'LOX is a strong oxidizer; vigorously accelerates combustion of combustible materials like oils, asphalt, and clothing.',
      'Equipment and piping must be 100% degreased and cleaned for oxygen service per CGA G-4.1 standards.',
      'Wear dedicated cryogenic face shields, loose-fitting cryogenic leather gloves, and cuffless aprons during filling.'
    ],
    relatedProducts: [
      { title: 'Liquid Nitrogen (LIN)', slug: 'liquid-nitrogen', formula: 'N₂' },
      { title: 'Liquid Argon (LAR)', slug: 'liquid-argon', formula: 'Ar' },
      { title: 'Liquid Carbon Dioxide (LCO₂)', slug: 'liquid-carbon-dioxide', formula: 'CO₂' }
    ],
    seoTitle: 'Liquid Oxygen (LOX) Bulk Supplier India | 10-35 KL Tankers & Medical IP | Shakti Group',
    seoDesc: 'Leading Liquid Oxygen (LOX) bulk supplier in India. 448 TPD capacity, 65+ cryogenic road tankers (10-35 KL), FDA licensed Medical Oxygen IP, and turnkey on-site cryogenic tank setups on rental across Gujarat, Maharashtra & nationwide.',
    keywords: 'Liquid Oxygen bulk supplier, Liquid Oxygen bulk supplier India, LOX tanker supplier Gujarat, Bulk medical oxygen liquid supplier, Industrial liquid oxygen Vadodara, Cryogenic liquid oxygen supplier Dahej, On-site liquid oxygen tank rental, LOX road tanker delivery',
    alternateNames: ['Liquid Oxygen', 'LOX', 'Refrigerated Liquid Oxygen', 'Bulk Liquid Oxygen', 'Medical Liquid Oxygen IP', 'Cryogenic Oxygen'],
    targetQueries: [
      'Liquid oxygen bulk supplier India',
      'LOX cryogenic road tanker delivery',
      'Medical oxygen IP liquid bulk tanker',
      'Liquid oxygen storage tank rental on-site',
      'Bulk liquid oxygen price per ton / liter',
      'Cryogenic LOX supplier in Gujarat Dahej Ankleshwar'
    ],
    deliveryCoverage: ['Vadodara', 'Dahej PCPIR', 'Ankleshwar', 'Surat & Hazira', 'Ahmedabad', 'Sanand', 'Halol & Savli', 'Bharuch & Jhagadia', 'Maharashtra', 'Madhya Pradesh', 'Rajasthan', 'Pan-India'],
    faqs: [
      {
        question: 'Who is the leading bulk liquid oxygen (LOX) supplier in India and Gujarat?',
        answer: 'Shakti Group is a premier liquid oxygen manufacturer and bulk supplier operating 448 TPD combined capacity and a fleet of 65+ dedicated cryogenic road tankers (10 KL to 35 KL). We deliver commercial LOX and FDA-licensed Medical Oxygen IP across Gujarat, Maharashtra, MP, Rajasthan, and nationwide.'
      },
      {
        question: 'What tanker volumes and delivery options are available for Liquid Oxygen?',
        answer: 'We deliver bulk liquid oxygen in 10 KL, 16 KL, 20 KL, 28 KL, and 35 KL vacuum-insulated road tankers. For medium requirements, we supply 160L–250L Dura liquid cylinders, and for large manufacturing plants we provide turnkey 3 KL to 50 KL on-site storage tanks on rental.'
      },
      {
        question: 'Is your Liquid Oxygen certified for medical hospital use?',
        answer: 'Yes. Shakti Group holds complete FDA and Drug Controller licenses for Medical Oxygen IP (Indian Pharmacopoeia) with certified purity ≥ 99.5%, zero moisture (< 5 ppm), and zero toxic hydrocarbons.'
      },
      {
        question: 'Can we lease or rent an on-site cryogenic liquid oxygen storage tank?',
        answer: 'Yes, Shakti Group provides turnkey cryogenic storage tanks (3 KL to 50 KL) and ambient air vaporizers on an opex/rental model with zero capital expenditure, full PESO clearance documentation, and IoT telemetry auto-refill.'
      }
    ]
  },

  // ----------------------------------------------------
  // LIQUID NITROGEN (LIN)
  // ----------------------------------------------------
  'liquid-nitrogen': {
    slug: 'liquid-nitrogen',
    title: 'Liquid Nitrogen (LIN)',
    chemicalFormula: 'N₂',
    symbolBadge: 'LIN | Cryogenic Liquid',
    casNumber: '7727-37-9',
    unNumber: 'UN 1977 (Nitrogen, Refrigerated Liquid)',
    subtitle: 'Ultra-cold inert cryogenic liquid (-196°C) for industrial cooling, shrink fitting, food freezing, biological cryo-preservation, chemical inerting, and pipeline purging.',
    heroImage: 'https://plus.unsplash.com/premium_photo-1720616742209-5ca756a58be7?w=900&auto=format&fit=crop',
    category: 'liquid',
    categoryLabel: 'Bulk & Cryogenic Gases',
    categorySlug: 'bulk-cryogenic',
    physicalState: 'Cryogenic Liquid (-195.79°C)',
    appearance: 'Clear, colorless cryogenic liquid / Colorless, odorless inert gas upon vaporization',
    availableSupplyFormats: [
      'Bulk Cryogenic Road Tankers (10 KL to 35 KL)',
      'Turnkey On-Site Storage Tanks & Vaporizers (3 KL to 60 KL Rental)',
      'Cryogenic Liquid Dewars & Dura Cylinders (10L to 250L)'
    ],
    puritiesAvailable: ['Industrial Grade (≥ 99.99%)', 'Food Grade E941 (≥ 99.9%)', 'Ultra High Purity Grade 5.0 (99.999%)', 'UHP Grade 6.0 (99.9999%)'],
    physicalProperties: {
      boilingPoint: '-195.79°C (-320.4°F)',
      expansionRatio: '1 : 694 (Liquid to Gas @ 20°C, 1 atm)',
      gasDensity: '1.2506 kg/m³ (at 0°C, 101.3 kPa)',
      molecularWeight: '28.0134 g/mol',
      criticalTemp: '-146.9°C (Critical Pressure 33.99 bar)'
    },
    overview: 'Shakti Industrial Gases is a leading bulk supplier of ultra-cold Liquid Nitrogen (LIN) in India. Produced at cryogenic air separation plants with 448 TPD capacity, our LIN is delivered via 65+ dedicated cryogenic road tankers and portable dewars. We also engineer and install on-site cryogenic storage tanks on a rental model for food flash freezing, chemical reaction cooling, pharmaceutical synthesis, electronics blanketing, and pipeline purging.',
    supplyModes: [
      {
        title: 'Bulk Cryogenic Road Tankers (10-35 KL)',
        capacity: '10,000 to 35,000 Litres (8 to 28 Metric Tonnes)',
        pressure: '16 to 24 Bar Working Pressure',
        description: 'Super-insulated vacuum tankers with 24/7 GPS dispatch and IoT telemetry monitoring for customer on-site bulk storage tanks.',
        idealFor: 'Refineries, chemical synthesis complexes, food freezing plants, and pharmaceutical bulk manufacturing.'
      },
      {
        title: 'Turnkey On-Site Storage & Vaporizer Systems (Rental)',
        capacity: '3 KL to 60 KL Vacuum Insulated Cryogenic Tanks',
        pressure: 'Custom Regulated Line Pressure up to 35 Bar',
        description: 'Zero capex turnkey rental installation with ambient air vaporizers delivering high-flow gaseous N₂ without electrical power.',
        idealFor: 'Electronics factories, laser cutting workshops, and chemical reactor blanketing.'
      },
      {
        title: 'Cryogenic Liquid Dewars & Dura Cylinders',
        capacity: '10L to 250L Portable Vacuum Vessels',
        pressure: 'Atmospheric to 24 Bar',
        description: 'Vacuum-insulated aluminum and stainless steel dewars with super-low static evaporation loss rate.',
        idealFor: 'Laboratories, IVF clinics, biological sample banks, dermatology, and workshop shrink fitting.'
      }
    ],
    applications: [
      { industry: 'Chemicals & Refining', useCase: 'Reactor inerting, vessel purging, volatile vapor recovery & catalyst cooling', recommendedPurity: '≥ 99.999% UHP LIN' },
      { industry: 'Food & Beverage', useCase: 'Cryogenic immersion tunnel freezing, liquid nitrogen bottle dosing & MAP preservation', recommendedPurity: '≥ 99.9% Food Grade E941 (FSSAI Certified)' },
      { industry: 'Metal & Manufacturing', useCase: 'Cryogenic sub-zero hardening of tooling steels, shrink fitting & laser assist gas', recommendedPurity: '≥ 99.99% Industrial Grade' },
      { industry: 'Life Sciences & Biotech', useCase: 'Stem cell, vaccine, semen, and genetic sample cryo-storage (-196°C)', recommendedPurity: '≥ 99.999% Bio-Grade' }
    ],
    handlingSafety: [
      'Boils at -196°C; splashes cause instant cryogenic burns, severe eye injury, and frostbite.',
      'Severe asphyxiation hazard: 1 volume of liquid expands to ~700 volumes of gas, rapidly displacing breathable oxygen.',
      'Always install oxygen depletion monitors (ODMs) and forced ventilation in indoor nitrogen handling zones.',
      'Never store liquid nitrogen in non-vented or tightly sealed domestic containers; pressure buildup causes explosions.'
    ],
    relatedProducts: [
      { title: 'Liquid Oxygen (LOX)', slug: 'liquid-oxygen', formula: 'O₂' },
      { title: 'Liquid Argon (LAR)', slug: 'liquid-argon', formula: 'Ar' },
      { title: 'Compressed N₂ Cylinders', slug: 'industrial-cylinder', formula: 'N₂' }
    ],
    seoTitle: 'Liquid Nitrogen (LIN) Bulk Supplier India | 10-35 KL Tankers & On-Site Tanks | Shakti Group',
    seoDesc: 'Premier Liquid Nitrogen (LIN) bulk supplier in India. 448 TPD capacity, 65+ cryogenic road tankers (10-35 KL), turnkey on-site storage tank installations on rental, food grade E941 & Grade 5.0/6.0 UHP LIN delivery across Gujarat, Maharashtra, MP, Rajasthan & Pan-India.',
    keywords: 'Liquid Nitrogen bulk supplier, Liquid Nitrogen bulk supplier India, Liquid Nitrogen bulk supplier Gujarat, Bulk LIN supplier Vadodara, Cryogenic liquid nitrogen tanker supplier, liquid nitrogen supplier near me, liquid nitrogen price per kg, liquid nitrogen bulk delivery, liquid nitrogen on-site tank rental, liquid nitrogen dewar supplier, food grade liquid nitrogen supplier, liquid nitrogen Dahej Ankleshwar Ahmedabad Surat',
    alternateNames: ['Liquid Nitrogen', 'LIN', 'Refrigerated Liquid Nitrogen', 'Bulk Liquid Nitrogen', 'Liquid Nitrogen Bulk Supplier', 'Cryogenic Nitrogen', 'Food Grade Liquid Nitrogen E941', 'UHP Liquid Nitrogen'],
    targetQueries: [
      'Liquid nitrogen bulk supplier India',
      'Liquid nitrogen bulk supplier Gujarat Vadodara Dahej',
      'Bulk liquid nitrogen tanker delivery 10-35 KL',
      'Liquid nitrogen storage tank setup rental opex model',
      'Food grade liquid nitrogen supplier E941 for tunnel freezing',
      'Liquid nitrogen price per liter / kg in bulk tanker',
      'Cryogenic liquid nitrogen dewar refilling supplier'
    ],
    deliveryCoverage: ['Vadodara', 'Dahej PCPIR', 'Ankleshwar', 'Surat & Hazira', 'Ahmedabad', 'Sanand', 'Halol & Savli', 'Bharuch & Jhagadia', 'Vapi & Valsad', 'Maharashtra', 'Madhya Pradesh', 'Rajasthan', 'Pan-India'],
    faqs: [
      {
        question: 'Who is the best Liquid Nitrogen (LIN) bulk supplier in India / Gujarat?',
        answer: 'Shakti Group is a top-ranked liquid nitrogen bulk supplier in India, operating 448 TPD ASU manufacturing capacity with a dedicated fleet of 65+ vacuum-insulated cryogenic road tankers (10 KL to 35 KL). We provide seamless bulk supply and turnkey on-site storage tank setups on rental across Gujarat, Maharashtra, MP, Rajasthan, and nationwide.'
      },
      {
        question: 'What is the minimum order quantity (MOQ) for bulk liquid nitrogen delivery?',
        answer: 'For cryogenic road tankers, our standard delivery volumes range from 10,000 Litres (10 KL) to 35,000 Litres (35 KL) per trip. For smaller commercial and laboratory requirements, we supply portable Dura liquid cylinders (160L to 250L) and liquid nitrogen dewars (10L to 50L).'
      },
      {
        question: 'Can Shakti Group install an on-site Liquid Nitrogen cryogenic storage tank at our factory on rental?',
        answer: 'Yes! Shakti Group provides turnkey on-site vacuum-insulated cryogenic storage tanks (3 KL to 60 KL) with ambient air vaporizers on a zero-capex rental/opex model. We handle foundation engineering, PESO statutory approvals, piping, and 24/7 IoT telemetry auto-refill logistics.'
      },
      {
        question: 'What purity grades of Liquid Nitrogen do you supply?',
        answer: 'We supply Industrial Grade (≥ 99.99%), FSSAI Certified Food Grade E941 (≥ 99.9%), Ultra-High Purity Grade 5.0 (99.999%), and Semiconductor Grade 6.0 (99.9999%) with complete batch Certificate of Analysis (COA).'
      },
      {
        question: 'How quickly can bulk Liquid Nitrogen tankers be dispatched for emergency top-ups?',
        answer: 'With our dedicated 65+ tanker fleet and central logistics hub in Karjan/Vadodara (Gujarat), we provide 2 to 4 hour emergency dispatch to major chemical and pharma zones including Dahej, Ankleshwar, Jhagadia, Halol, Savli, Ahmedabad, and Surat.'
      }
    ]
  },

  // ----------------------------------------------------
  // LIQUID ARGON (LAR)
  // ----------------------------------------------------
  'liquid-argon': {
    slug: 'liquid-argon',
    title: 'Liquid Argon (LAR)',
    chemicalFormula: 'Ar',
    symbolBadge: 'LAR | Inert Cryogen',
    casNumber: '7440-37-1',
    unNumber: 'UN 1951 (Argon, Refrigerated Liquid)',
    subtitle: 'Completely inert cryogenic liquid noble gas for high-grade stainless steel refining, specialized TIG/MIG welding, semiconductor fabrication, and 3D metal printing.',
    heroImage: 'https://plus.unsplash.com/premium_photo-1682144582509-e520bf8771d3?w=900&auto=format&fit=crop',
    category: 'liquid',
    categoryLabel: 'Bulk & Cryogenic Gases',
    categorySlug: 'bulk-cryogenic',
    physicalState: 'Cryogenic Liquid (-185.87°C)',
    appearance: 'Clear, colorless cryogenic liquid / Colorless, odorless noble gas upon vaporization',
    availableSupplyFormats: [
      'Dedicated Cryogenic Road Tankers (10 KL to 32 KL)',
      'Liquid Dura Cylinders & Microbulk (160L to 1000L)',
      'Turnkey On-Site Storage Tanks (3 KL to 40 KL Rental)'
    ],
    puritiesAvailable: ['Commercial Grade (≥ 99.99%)', 'High Purity (≥ 99.995%)', 'Ultra High Purity Grade 5.0 (99.999%)', 'Grade 6.0 (99.9999%)'],
    physicalProperties: {
      boilingPoint: '-185.87°C (-302.6°F)',
      expansionRatio: '1 : 841 (Liquid to Gas @ 15°C, 1 atm)',
      gasDensity: '1.784 kg/m³ (1.38x heavier than air)',
      molecularWeight: '39.948 g/mol',
      criticalTemp: '-122.29°C (Critical Pressure 48.98 bar)'
    },
    overview: 'Liquid Argon (LAR) is a colorless, odorless noble gas fractionated during air separation. Because argon is 100% chemically inert even at extreme plasma temperatures, it creates the ultimate protective shielding atmosphere for molten titanium, stainless steel, zirconium, and aluminum alloys. Delivered in dedicated stainless steel inner vessel tankers and on-site tank setups.',
    supplyModes: [
      {
        title: 'Dedicated Cryogenic Road Tankers',
        capacity: '10 KL to 32 KL Vacuum Tankers',
        pressure: '16 to 24 Bar',
        description: 'Dedicated stainless steel inner vessel road tankers ensuring zero cross-contamination of inert argon.',
        idealFor: 'Stainless steel mills, alloy foundries, solar ingot pullers, and large fabrication yards.'
      },
      {
        title: 'Liquid Dura Cylinders & Microbulk',
        capacity: '160L to 1000L Liquid Containers',
        pressure: '22 Bar Max Operating Pressure',
        description: 'High-efficiency liquid cylinders with integrated internal vaporizers for continuous high-flow welding stations.',
        idealFor: 'Automotive component welders, pressure vessel manufacturers, and robotic welding cells.'
      },
      {
        title: 'On-Site Storage Tanks (Rental Available)',
        capacity: '3 KL to 40 KL Cryogenic Vessels',
        pressure: 'Regulated 15 to 30 Bar',
        description: 'Turnkey vacuum insulated storage installations provided on rental contracts with automated refill dispatch.',
        idealFor: 'Continuous steel melting, AOD converter purging, and laser manufacturing.'
      }
    ],
    applications: [
      { industry: 'Stainless Steel & Metallurgy', useCase: 'AOD decarburization, ladle degassing, ingot casting & titanium melting', recommendedPurity: '≥ 99.99% LAR' },
      { industry: 'Welding & Fabrication', useCase: 'TIG (GTAW), MIG (GMAW), plasma arc welding and root purging of alloy pipes', recommendedPurity: '≥ 99.995% High Purity' },
      { industry: 'Additive Manufacturing (3D Printing)', useCase: 'Inert chamber blanketing for selective laser melting (SLM) of reactive powders', recommendedPurity: '≥ 99.999% Grade 5.0' },
      { industry: 'Electronics & Solar', useCase: 'Silicon monocrystal pulling (Czochralski process) and sputtering carrier gas', recommendedPurity: '≥ 99.9999% Grade 6.0' }
    ],
    handlingSafety: [
      'Extremely cold cryogenic liquid (-186°C); direct contact destroys skin and eye tissue.',
      'Argon is 38% heavier than air and rapidly pools in pits, trenches, basements, and confined spaces.',
      'Asphyxiation hazard: provides no warning odor or color before causing loss of consciousness.',
      'Equip all work areas with continuous atmospheric oxygen monitors positioned near floor levels.'
    ],
    relatedProducts: [
      { title: 'Liquid Nitrogen (LIN)', slug: 'liquid-nitrogen', formula: 'N₂' },
      { title: 'Liquid Oxygen (LOX)', slug: 'liquid-oxygen', formula: 'O₂' },
      { title: 'Calibration Gas Mixtures', slug: 'calibration-gas-mixtures', formula: 'Mixtures' }
    ],
    seoTitle: 'Liquid Argon (LAR) Bulk Supplier India | Grade 5.0 / 6.0 Cryogenic Tankers | Shakti Group',
    seoDesc: 'High-purity Liquid Argon (LAR) bulk supplier in India. 10-32 KL dedicated cryogenic road tankers, Grade 5.0 & 6.0 UHP Argon for steelmaking, TIG welding & additive manufacturing across Gujarat & nationwide.',
    keywords: 'Liquid Argon bulk supplier, Liquid Argon supplier India, Bulk LAR tanker delivery, Liquid Argon Gujarat, UHP Argon Grade 5.0, Cryogenic Liquid Argon supplier Dahej, On-site liquid argon tank rental, Liquid Argon Vadodara Ahmedabad',
    alternateNames: ['Liquid Argon', 'LAR', 'Refrigerated Liquid Argon', 'Bulk Liquid Argon', 'Grade 5.0 Argon', 'Cryogenic Argon'],
    targetQueries: [
      'Liquid argon bulk supplier India',
      'Liquid argon cryogenic road tanker delivery',
      'Bulk LAR supplier in Gujarat Dahej Ankleshwar',
      'Liquid argon storage tank rental on-site',
      'UHP Liquid Argon Grade 5.0 for stainless steel and 3D printing'
    ],
    deliveryCoverage: ['Vadodara', 'Dahej PCPIR', 'Ankleshwar', 'Surat', 'Ahmedabad', 'Sanand', 'Halol', 'Maharashtra', 'Madhya Pradesh', 'Rajasthan', 'Pan-India'],
    faqs: [
      {
        question: 'Who supplies bulk Liquid Argon (LAR) in Gujarat and India?',
        answer: 'Shakti Group is a major bulk supplier of Liquid Argon (LAR), operating dedicated cryogenic road tankers (10 KL to 32 KL) and supplying steel melting plants, alloy foundries, and automated welding facilities across Western and Central India.'
      },
      {
        question: 'What purity levels of Liquid Argon are available?',
        answer: 'We supply Commercial Grade (≥ 99.99%), High Purity (≥ 99.995%), Ultra-High Purity Grade 5.0 (99.999%), and Semiconductor Grade 6.0 (99.9999%) with moisture < 2 ppm and oxygen < 1 ppm.'
      }
    ]
  },

  // ----------------------------------------------------
  // LIQUID CARBON DIOXIDE (LCO2)
  // ----------------------------------------------------
  'liquid-carbon-dioxide': {
    slug: 'liquid-carbon-dioxide',
    title: 'Liquid Carbon Dioxide (LCO₂)',
    chemicalFormula: 'CO₂',
    symbolBadge: 'LCO₂ | Refrigerated Liquid',
    casNumber: '124-38-9',
    unNumber: 'UN 2187 (Carbon Dioxide, Refrigerated Liquid)',
    subtitle: 'Food-grade E290 and industrial Liquid CO₂ for soft drink carbonation, pH water neutralization, MAP food packaging, dry ice manufacturing, and foundry core curing.',
    heroImage: 'https://plus.unsplash.com/premium_photo-1676979223508-1509a7dc4571?w=900&auto=format',
    category: 'liquid',
    categoryLabel: 'Bulk & Cryogenic Gases',
    categorySlug: 'bulk-cryogenic',
    physicalState: 'Refrigerated Liquid (-20°C @ 20 Bar)',
    appearance: 'Clear, colorless refrigerated liquid / Colorless, odorless gas upon vaporization',
    availableSupplyFormats: [
      'Insulated LCO₂ Road Tankers (12 MT to 30 MT)',
      'Turnkey On-Site Storage Tanks (5 MT to 60 MT Rental)',
      'High-Pressure CO₂ Cylinders & Packs (30 kg to 45 kg)'
    ],
    puritiesAvailable: ['Food Grade E290 (≥ 99.9% ISBT Compliant)', 'Industrial Grade (≥ 99.8%)', 'Welding Grade (≥ 99.5%)', 'UHP Grade (99.995%)'],
    physicalProperties: {
      boilingPoint: '-78.5°C Sublimation Point (Triple Point -56.6°C @ 5.18 bar)',
      expansionRatio: '1 : 550 (Liquid to Gas @ 15°C)',
      gasDensity: '1.977 kg/m³ (1.52x heavier than air)',
      molecularWeight: '44.01 g/mol',
      criticalTemp: '31.06°C (Critical Pressure 73.82 bar)'
    },
    overview: 'Shakti Group operates dedicated catalytic CO₂ recovery and purification units delivering 270 TPD of ultra-pure Liquid CO₂. Certified under FSSAI standards and fully meeting international beverage requirements (ISBT/CGA), our LCO₂ is stored at -20°C and 20 bar pressure, delivered via insulated road tankers.',
    supplyModes: [
      {
        title: 'Insulated LCO₂ Road Tankers',
        capacity: '12 MT to 30 MT Liquid Transport',
        pressure: '18 to 22 Bar Operating Pressure',
        description: 'Polyurethane and vacuum-insulated road tankers equipped with cryogenic transfer pumps.',
        idealFor: 'Beverage bottling plants, dry ice extrusion factories, chemical plants, and cold storages.'
      },
      {
        title: 'Turnkey On-Site Storage Tanks (Rental)',
        capacity: '5 MT to 60 MT Low-Temperature Vessels',
        pressure: '20 to 24 Bar with Refrigeration Units',
        description: 'Complete storage tank installation with steam/electric vaporizers and level telemetry on flexible rental plans.',
        idealFor: 'Breweries, soft drink manufacturers, textile effluent plants, and metal casting foundries.'
      },
      {
        title: 'High-Pressure CO₂ Cylinders & Packs',
        capacity: '30 kg to 45 kg Gas Cylinders',
        pressure: '50 to 60 Bar at Ambient Temp',
        description: 'Deep-dip tube liquid withdrawal cylinders and standard gaseous supply cylinders.',
        idealFor: 'MIG welding stations, fire suppression systems, and small catering venues.'
      }
    ],
    applications: [
      { industry: 'Food & Beverage', useCase: 'Soft drink and beer carbonation (ISBT standard), flash food freezing & MAP packaging', recommendedPurity: '≥ 99.9% Food Grade E290 (FSSAI Licensed)' },
      { industry: 'Effluent & Water Treatment', useCase: 'Eco-friendly pH neutralization of alkaline wastewater (replaces hazardous sulfuric acid)', recommendedPurity: '≥ 99.8% Technical Grade' },
      { industry: 'Foundry & Metallurgy', useCase: 'CO₂-silicate sand core hardening process and inert shielding in MAG welding', recommendedPurity: '≥ 99.5% Industrial Grade' },
      { industry: 'Dry Ice Manufacturing', useCase: 'Feedstock for high-density dry ice pellet and block extrusion presses', recommendedPurity: '≥ 99.9% High Purity' }
    ],
    handlingSafety: [
      'Stored under high pressure (20 bar) at -20°C; venting liquid produces dry ice snow (-78.5°C) causing rapid frostbite.',
      'Heavier than air (density ~1.5); rapidly sinks into pits, sumps, and poorly ventilated basements.',
      'Toxic at elevated concentrations: acts as a respiratory stimulant above 3% and causes asphyxiation above 10%.',
      'Ensure continuous CO₂ gas alarms with audible/visual alerts in all indoor bottling and storage areas.'
    ],
    relatedProducts: [
      { title: 'Dry Ice & Dewars', slug: 'other', formula: 'Solid CO₂' },
      { title: 'Liquid Nitrogen (LIN)', slug: 'liquid-nitrogen', formula: 'N₂' },
      { title: 'Carbon Dioxide Gas (CO₂)', slug: 'carbon-dioxide-gas', formula: 'CO₂' }
    ],
    seoTitle: 'Liquid Carbon Dioxide (LCO2) Supplier India | Food Grade E290 Tankers & On-Site Tanks | Shakti Group',
    seoDesc: 'FSSAI certified Food Grade Liquid CO2 (E290) and industrial LCO2 supplier in India. 270 TPD capacity, 12-30 MT road tankers, on-site storage rental for beverages, water treatment & cold chain across Gujarat & nationwide.',
    keywords: 'Liquid CO2 Supplier India, Liquid Carbon Dioxide bulk supplier, Food Grade LCO2 E290, Bulk Liquid CO2 Gujarat, LCO2 road tanker delivery, beverage grade CO2 supplier Dahej Ankleshwar, on site LCO2 storage tank rental',
    alternateNames: ['Liquid Carbon Dioxide', 'LCO2', 'Food Grade Liquid CO2 E290', 'Refrigerated Liquid CO2', 'Bulk LCO2', 'Liquid CO2 Tanker'],
    targetQueries: [
      'Liquid carbon dioxide bulk supplier India',
      'Food grade LCO2 tanker supplier Gujarat',
      'Liquid CO2 bulk delivery for soft drink carbonation',
      'On-site liquid CO2 storage tank rental',
      'LCO2 supplier in Dahej Ankleshwar Vadodara'
    ],
    deliveryCoverage: ['Vadodara', 'Dahej PCPIR', 'Ankleshwar', 'Surat', 'Ahmedabad', 'Sanand', 'Halol & Savli', 'Bharuch', 'Maharashtra', 'Madhya Pradesh', 'Rajasthan', 'Pan-India'],
    faqs: [
      {
        question: 'Who is the leading bulk Liquid CO2 (LCO2) supplier in Gujarat and India?',
        answer: 'Shakti Group is a premier manufacturer and bulk distributor of Liquid Carbon Dioxide (LCO2) with 270 TPD production capacity and a dedicated fleet of insulated road tankers (12 MT to 30 MT). We supply FSSAI certified Food Grade E290 and industrial LCO2 across Western and Central India.'
      },
      {
        question: 'Is your Liquid CO2 certified for beverage and food carbonation?',
        answer: 'Yes. Our Liquid Carbon Dioxide is FSSAI licensed and complies fully with ISBT (International Society of Beverage Technologists) and CGA guidelines with purity ≥ 99.9% and moisture < 20 ppm.'
      },
      {
        question: 'Can we lease an on-site Liquid CO2 storage tank with refrigeration and vaporizers?',
        answer: 'Yes. Shakti Group provides turnkey 5 MT to 60 MT on-site LCO2 storage vessels, refrigeration systems, electric vaporizers, and telemetry on a flexible rental/opex model.'
      }
    ]
  },

  // ----------------------------------------------------
  // HYDROGEN GAS
  // ----------------------------------------------------
  'hydrogen-gas': {
    slug: 'hydrogen-gas',
    title: 'Hydrogen Gas (H₂)',
    chemicalFormula: 'H₂',
    symbolBadge: 'H₂ | Flammable Fuel Gas',
    casNumber: '1333-74-0',
    unNumber: 'UN 1049 (Hydrogen, Compressed)',
    subtitle: 'Ultra-light high-energy reducing gas for heat treatment atmosphere furnaces, hydrogenation reactions, semiconductor wafer processing, and fuel cell energy.',
    heroImage: 'https://images.unsplash.com/photo-1631304480499-b45f5e4aa882?w=900&auto=format&fit=crop',
    category: 'industrial',
    categoryLabel: 'Industrial & Cylinder Gases',
    categorySlug: 'industrial-cylinder',
    physicalState: 'High-Pressure Compressed Gas (150 - 200 Bar)',
    appearance: 'Colorless, odorless, ultra-light compressed gas',
    availableSupplyFormats: [
      'Mobile Tube Trailer Cascades (1,500m³ to 4,500m³)',
      'Multi-Cylinder Packs / MCP Quads (16-Cylinder Bundles)',
      'High-Pressure Seamless Cylinders (47L / 50L)'
    ],
    puritiesAvailable: ['Commercial Grade (≥ 99.5%)', 'High Purity (≥ 99.99%)', 'Ultra High Purity Grade 5.0 (99.999%)', 'Grade 6.0 UHP (99.9999%)'],
    physicalProperties: {
      boilingPoint: '-252.87°C (-423.2°F)',
      expansionRatio: 'High-pressure compressed gas',
      gasDensity: '0.0899 kg/m³ (14.4x lighter than air)',
      molecularWeight: '2.016 g/mol',
      criticalTemp: '-240.18°C (Critical Pressure 12.98 bar)'
    },
    overview: 'Shakti Group supplies compressed Hydrogen Gas (H₂) in high-pressure seamless cylinders, cylinder banks, and mobile high-capacity tube cascades. With unmatched thermal conductivity and reducing properties, hydrogen creates oxide-free protective atmospheres in metallurgical furnaces and serves as an essential chemical reagent.',
    supplyModes: [
      {
        title: 'Mobile Hydrogen Tube Cascades / Trailers',
        capacity: '1,500m³ to 4,500m³ High-Volume Supply',
        pressure: '150 Bar to 200 Bar',
        description: 'Multi-tube trailer cascades connected to customer pressure regulating and decanting skids.',
        idealFor: 'Refineries, edible oil hydrogenation, continuous bright annealing lines, and float glass manufacturing.'
      },
      {
        title: 'Multi-Cylinder Packs (MCP Quads)',
        capacity: '12 to 16 Cylinder Bundles (~100m³)',
        pressure: '200 Bar Integrated Header',
        description: 'Palletized steel frames with single outlet manifold connection for high-flow workshop requirements.',
        idealFor: 'Heat treatment furnaces, chemical laboratories, and semiconductor research.'
      },
      {
        title: 'High-Pressure Seamless Cylinders',
        capacity: '47L Water Capacity (~7m³ Gas)',
        pressure: '150 Bar / 200 Bar PESO Approved',
        description: 'Individually hydro-tested steel cylinders with red color code and left-hand thread safety connections.',
        idealFor: 'Analytical GC-FID carrier gas, flame brazing, and metal fabrication.'
      }
    ],
    applications: [
      { industry: 'Heat Treatment & Metallurgy', useCase: 'Bright annealing, powder metallurgy sintering, and oxide reduction atmosphere', recommendedPurity: '≥ 99.99% High Purity' },
      { industry: 'Chemical & Pharma', useCase: 'Catalytic hydrogenation of organic intermediates, oils, and fine chemicals', recommendedPurity: '≥ 99.9% Technical Grade' },
      { industry: 'Glass & Electronics', useCase: 'Float glass tin bath reduction shielding and semiconductor epitaxial growth', recommendedPurity: '≥ 99.999% Grade 5.0 / 6.0' },
      { industry: 'Energy & Power Plants', useCase: 'Generator rotor cooling due to exceptional thermal heat dissipation', recommendedPurity: '≥ 99.95% Pure H₂' }
    ],
    handlingSafety: [
      'Extremely flammable gas (flammability range 4% to 75% in air) with near-invisible pale blue flame.',
      'Extremely small molecular size: easily permeates seals and leaks through microscopic fittings.',
      'Positive ventilation at ceiling level required since hydrogen rises immediately.',
      'Use explosion-proof (Ex-d) electrical fittings, non-sparking brass tools, and dedicated flashback arrestors.'
    ],
    relatedProducts: [
      { title: 'Dissolved Acetylene (DA)', slug: 'dissolved-acetylene', formula: 'C₂H₂' },
      { title: 'Calibration Gas Mixtures', slug: 'calibration-gas-mixtures', formula: 'Mixtures' },
      { title: 'Helium Gas (He)', slug: 'helium-gas', formula: 'He' }
    ],
    seoTitle: 'Hydrogen Gas (H2) Supplier India | Tube Cascades & UHP Cylinders | Shakti Group',
    seoDesc: 'High-pressure Hydrogen Gas (H2) supplier in India. Mobile tube cascades (1,500-4,500m³ @ 200 bar), MCP quads, and Grade 5.0/6.0 UHP cylinders for bright annealing, chemical hydrogenation & semiconductor applications.',
    keywords: 'Hydrogen Gas Supplier India, Hydrogen Tube Cascade supplier, UHP Hydrogen Grade 5.0 Gujarat, Hydrogen Gas Cylinders Vadodara, Bulk Hydrogen Cascade Dahej Ankleshwar',
    alternateNames: ['Hydrogen Gas', 'H2 Gas', 'Compressed Hydrogen', 'UHP Hydrogen Grade 5.0', 'Hydrogen Tube Cascade', 'Hydrogen MCP Quad'],
    targetQueries: [
      'Hydrogen gas supplier India',
      'Hydrogen gas tube cascade trailer supplier',
      'Ultra high purity hydrogen gas Grade 5.0',
      'Hydrogen gas cylinder refilling Gujarat',
      'Hydrogen gas for bright annealing furnaces'
    ],
    deliveryCoverage: ['Vadodara', 'Dahej', 'Ankleshwar', 'Surat', 'Ahmedabad', 'Sanand', 'Halol', 'Bharuch', 'Maharashtra', 'Madhya Pradesh', 'Rajasthan', 'Pan-India'],
    faqs: [
      {
        question: 'What supply options does Shakti Group provide for Hydrogen gas?',
        answer: 'We supply compressed Hydrogen gas in high-pressure 47L seamless cylinders (150-200 bar), 16-cylinder MCP quads (~100m³), and high-capacity mobile tube cascades (1,500m³ to 4,500m³) for large industrial facilities.'
      },
      {
        question: 'What purity grades of Hydrogen gas are available?',
        answer: 'We supply Commercial Grade (≥ 99.5%), High Purity (≥ 99.99%), Ultra-High Purity Grade 5.0 (99.999%), and Semiconductor Grade 6.0 (99.9999%) with individual Certificate of Analysis (COA).'
      },
      {
        question: 'How do mobile Hydrogen tube cascades work on site?',
        answer: 'Our mobile tube cascade trailers park at customer decanting stations and connect to automated pressure regulating skids, providing continuous high-volume hydrogen flow without manual cylinder handling.'
      }
    ]
  },

  // ----------------------------------------------------
  // DISSOLVED ACETYLENE (DA)
  // ----------------------------------------------------
  'dissolved-acetylene': {
    slug: 'dissolved-acetylene',
    title: 'Dissolved Acetylene (DA)',
    chemicalFormula: 'C₂H₂',
    symbolBadge: 'DA | Ultra-Hot Fuel',
    casNumber: '74-86-2',
    unNumber: 'UN 1001 (Acetylene, Dissolved)',
    subtitle: 'The hottest and most efficient fuel gas (3,100°C with Oxygen) for heavy metal cutting, oxy-acetylene welding, brazing, flame straightening, and thermal gouging.',
    heroImage: 'https://media.istockphoto.com/id/2249079819/photo/copper-pipe-soldering-process-with-tin-by-specialized-technicians.webp?a=1&b=1&s=612x612&w=0&k=20&c=gJ8unfsXi--OY9ii5tzkks8cUt6FpXDL5K6Zl-LsV8s=',
    category: 'industrial',
    categoryLabel: 'Industrial & Cylinder Gases',
    categorySlug: 'industrial-cylinder',
    physicalState: 'Gas Dissolved in Acetone / Porous Mass (15 Bar)',
    appearance: 'Colorless gas with characteristic ethereal / garlic odor',
    availableSupplyFormats: [
      'Standard DA Maroon Cylinders (6m³ to 8.5m³ / 4.5 to 7.0 kg)',
      'Manifolded DA Cylinder Packs (MCP 6 to 12 Cylinders)'
    ],
    puritiesAvailable: ['Commercial DA (≥ 98.5% IS:308 Compliant)', 'Purified Acetylene (≥ 99.5%)', 'Atomic Absorption Spectroscopy (AAS) Grade (≥ 99.6%)'],
    physicalProperties: {
      boilingPoint: '-84°C Sublimation Point',
      expansionRatio: 'Dissolved in acetone within porous mass',
      gasDensity: '1.097 kg/m³ (slightly lighter than air)',
      molecularWeight: '26.04 g/mol',
      criticalTemp: '35.2°C (Critical Pressure 61.9 bar)'
    },
    overview: 'Shakti Group manufactures Dissolved Acetylene (DA) at dedicated chemical generation facilities by reacting calcium carbide with water under controlled temperature. Acetylene gas is dissolved under pressure into liquid acetone contained within a monolithic porous mass inside maroon steel cylinders, fully complying with IS:308 and PESO statutory safety standards.',
    supplyModes: [
      {
        title: 'Standard DA Cylinders (Maroon)',
        capacity: '4.5 kg to 7.0 kg Gas Charge (~6m³ to 8.5m³)',
        pressure: '15 Bar at 15°C',
        description: 'Monolithic mass cylinders filled with acetone solvent to safely stabilize high-pressure acetylene.',
        idealFor: 'Ship breaking, heavy structural fabrication, pipeline welding, and automotive repair.'
      },
      {
        title: 'Manifolded DA Cylinder Packs (MCP)',
        capacity: '6 to 12 Cylinder Manifolds',
        pressure: '15 Bar with Regulated Headers',
        description: 'Ganged cylinder banks with approved flashback arrestors and heavy-duty steel lifting cages.',
        idealFor: 'Large shipyard construction, heavy boiler fabrication, and continuous steel mill scrapping.'
      }
    ],
    applications: [
      { industry: 'Metal Fabrication & Cutting', useCase: 'Oxy-acetylene profile cutting, beveling, heavy plate severance & rapid preheating', recommendedPurity: '≥ 98.5% IS:308 Standard' },
      { industry: 'Ship Repair & Infrastructure', useCase: 'Heavy flame gouging, rivet washing, and thermal structural beam straightening', recommendedPurity: '≥ 98.5% Commercial DA' },
      { industry: 'Analytical Laboratories', useCase: 'Fuel gas in Atomic Absorption Spectrophotometry (AAS) for trace metal analysis', recommendedPurity: '≥ 99.6% AAS Grade' }
    ],
    handlingSafety: [
      'Extremely wide explosive range (2.5% to 81% in air) with high flame propagation speed.',
      'Never use pure acetylene above 1.5 bar (15 psig) free gaseous pressure without dissolving solvent.',
      'Always keep DA cylinders upright during storage and usage to prevent acetone liquid discharge.',
      'Equip both torch end and regulator end with certified thermal/pressure flashback arrestors.'
    ],
    relatedProducts: [
      { title: 'Compressed O₂ Cylinders', slug: 'industrial-cylinder', formula: 'O₂' },
      { title: 'Hydrogen Gas (H₂)', slug: 'hydrogen-gas', formula: 'H₂' },
      { title: 'Propane Gas', slug: 'propane-gas', formula: 'C₃H₈' }
    ],
    seoTitle: 'Dissolved Acetylene (DA) Cylinder Manufacturer India | IS:308 Certified | Shakti Group',
    seoDesc: 'IS:308 certified Dissolved Acetylene (DA) gas cylinders manufacturer in India. PESO approved refilling for oxy-acetylene cutting, brazing, AAS labs, and ship repair across Gujarat.',
    keywords: 'Dissolved Acetylene Supplier India, DA Gas Cylinders Gujarat, Oxy-Acetylene Cutting Gas, Acetylene Manufacturer Vadodara, DA gas cylinder refilling Dahej Ankleshwar',
    alternateNames: ['Dissolved Acetylene', 'DA Gas', 'Acetylene Gas Cylinder', 'Oxy-Acetylene Fuel Gas', 'IS 308 Acetylene'],
    targetQueries: [
      'Dissolved acetylene gas cylinder supplier India',
      'DA gas cylinder refilling near me Gujarat',
      'Oxy-acetylene cutting gas cylinders',
      'Dissolved acetylene manufacturer Vadodara Surat Ankleshwar'
    ],
    deliveryCoverage: ['Vadodara', 'Ahmedabad', 'Surat', 'Ankleshwar', 'Dahej', 'Halol', 'Savli', 'Bharuch', 'Gujarat', 'Western India'],
    faqs: [
      {
        question: 'Why is Acetylene stored as Dissolved Acetylene (DA) in cylinders?',
        answer: 'Free gaseous acetylene is unstable above 1.5 bar pressure. To store it safely at 15 bar, cylinders are packed with a porous monolithic mass soaked in liquid acetone, which dissolves large volumes of acetylene gas safely.'
      },
      {
        question: 'Are your DA cylinders certified per Indian safety standards?',
        answer: 'Yes. All Shakti Group Dissolved Acetylene cylinders comply strictly with IS:308 and are 100% approved by the Petroleum and Explosives Safety Organization (PESO).'
      }
    ]
  },

  // ----------------------------------------------------
  // GASEOUS CO2 CYLINDERS
  // ----------------------------------------------------
  'carbon-dioxide-gas': {
    slug: 'carbon-dioxide-gas',
    title: 'Carbon Dioxide Gas (Gaseous CO₂)',
    chemicalFormula: 'CO₂',
    symbolBadge: 'CO₂ | Shielding & Fire Gas',
    casNumber: '124-38-9',
    unNumber: 'UN 1013 (Carbon Dioxide, Compressed)',
    subtitle: 'High-pressure compressed CO₂ cylinders for GMAW/MIG welding shielding, automated fire suppression systems, beverage dispensing, and foundry casting.',
    heroImage: 'https://plus.unsplash.com/premium_photo-1661490162121-41df314e1ef1?w=900&auto=format&fit=crop',
    category: 'industrial',
    categoryLabel: 'Industrial & Cylinder Gases',
    categorySlug: 'industrial-cylinder',
    physicalState: 'Compressed Gas / Liquefied Equilibrium (50 - 60 Bar)',
    appearance: 'Colorless, odorless compressed gas',
    availableSupplyFormats: [
      'High-Pressure Seamless Cylinders (30 kg to 45 kg)',
      'Multi-Cylinder Bundles (CO₂ MCP Quads with Heated Vaporizer)',
      'Dip-Tube Liquid Extraction Cylinders'
    ],
    puritiesAvailable: ['Commercial Grade (≥ 99.5%)', 'Welding Shielding Grade (≥ 99.8%)', 'Food & Beverage Grade (≥ 99.9%)', 'Dry / Low Moisture Grade (< 20 ppm H₂O)'],
    physicalProperties: {
      boilingPoint: '-78.5°C Sublimation Point',
      expansionRatio: 'Liquefied compressed gas in cylinder',
      gasDensity: '1.977 kg/m³ (at 0°C)',
      molecularWeight: '44.01 g/mol',
      criticalTemp: '31.06°C'
    },
    overview: 'Shakti Group fills and tests high-pressure seamless Carbon Dioxide cylinders across our network of certified bottling plants. Cylinders are fitted with PESO-approved valves, tested for moisture content, and painted per IS:4379 color coding for MIG welding, fire fighting systems, and industrial carbonation.',
    supplyModes: [
      {
        title: 'High-Pressure CO₂ Cylinders',
        capacity: '30 kg to 45 kg Gas Capacity (47L Water Capacity)',
        pressure: '50 to 60 Bar at 20°C',
        description: 'Individually hydro-tested carbon steel cylinders with pressure relief rupture discs.',
        idealFor: 'Fabrication shops, fire safety equipment installers, and restaurants.'
      },
      {
        title: 'Multi-Cylinder Bundles (CO₂ Quads)',
        capacity: '6 to 12 Cylinder Manifolds',
        pressure: '55 Bar Combined Header with Heated Vaporizer',
        description: 'Ganged cylinder banks equipped with inline electrical heaters to prevent regulator freeze-up during high discharge.',
        idealFor: 'High-volume structural welding, foundry casting, and greenhouse enrichment.'
      }
    ],
    applications: [
      { industry: 'MIG / MAG Welding', useCase: 'Shielding gas for carbon steel arc welding (deep penetration and lower cost)', recommendedPurity: '≥ 99.8% Welding Grade' },
      { industry: 'Fire Protection Systems', useCase: 'Total flooding fire extinguishing systems for electrical server rooms and ship engine compartments', recommendedPurity: '≥ 99.5% Commercial Grade' },
      { industry: 'Beverage & Catering', useCase: 'Draft beer dispensing and fountain soda carbonation', recommendedPurity: '≥ 99.9% Food Grade' }
    ],
    handlingSafety: [
      'High cylinder pressure (55 bar) stored as a liquefied gas; discharge causes rapid cooling and regulator icing.',
      'Always use a thermostatically heated CO₂ regulator when high continuous gas flow is required.',
      'Heavier than air; displaces oxygen rapidly in unventilated cellars and pits.'
    ],
    relatedProducts: [
      { title: 'Liquid Carbon Dioxide (LCO₂)', slug: 'liquid-carbon-dioxide', formula: 'CO₂' },
      { title: 'Dry Ice Pellets & Blocks', slug: 'other', formula: 'Solid CO₂' },
      { title: 'Calibration Gas Mixtures', slug: 'calibration-gas-mixtures', formula: 'Mixtures' }
    ],
    seoTitle: 'CO2 Gas Cylinders Supplier India | MIG Welding & Fire Fighting | Shakti Group',
    seoDesc: 'High-pressure Carbon Dioxide (CO2) cylinders (30-45 kg) and quads. Certified for MIG welding shielding, fire suppression, and beverage dispensing across Gujarat.',
    keywords: 'CO2 Cylinders India, Carbon Dioxide Gas Supplier Gujarat, MIG Welding CO2 Gas, Fire Extinguisher CO2 refilling Vadodara',
    alternateNames: ['Carbon Dioxide Gas', 'CO2 Gas Cylinders', 'Compressed CO2', 'MIG Welding CO2', 'Industrial CO2 Cylinder'],
    targetQueries: [
      'CO2 gas cylinder refilling supplier Gujarat',
      'MIG welding CO2 gas cylinder price',
      'Carbon dioxide cylinder for fire fighting systems',
      'Industrial CO2 cylinder supplier Vadodara Ahmedabad'
    ],
    deliveryCoverage: ['Vadodara', 'Ahmedabad', 'Surat', 'Ankleshwar', 'Dahej', 'Halol', 'Bharuch', 'Gujarat', 'Western India'],
    faqs: [
      {
        question: 'What cylinder sizes are available for compressed CO2 gas?',
        answer: 'We supply standard 30 kg, 35 kg, and 45 kg CO2 cylinders (47L water capacity) as well as 6 to 12 cylinder manifolded MCP quads for continuous high-flow welding lines.'
      },
      {
        question: 'Why do CO2 regulators freeze during continuous gas withdrawal?',
        answer: 'CO2 expands from high liquid pressure inside the cylinder to ambient line pressure, causing significant Joule-Thomson cooling. We supply thermostatically heated CO2 regulators to prevent freezing.'
      }
    ]
  },

  // ----------------------------------------------------
  // HELIUM GAS (He)
  // ----------------------------------------------------
  'helium-gas': {
    slug: 'helium-gas',
    title: 'Helium Gas (He)',
    chemicalFormula: 'He',
    symbolBadge: 'He | Noble Inert Gas',
    casNumber: '7440-59-7',
    unNumber: 'UN 1046 (Helium, Compressed)',
    subtitle: 'Ultra-light, completely unreactive noble gas with the lowest boiling point of all elements (-269°C) for MRI magnet cooling, leak detection, semiconductor lithography, and deep-sea diving.',
    heroImage: 'https://plus.unsplash.com/premium_photo-1663047674926-3e35e511c80e?w=900&auto=format&fit=crop',
    category: 'high-purity',
    categoryLabel: 'Specialty & Calibration Gases',
    categorySlug: 'specialty-calibration',
    physicalState: 'High-Pressure Compressed Noble Gas (150 - 200 Bar)',
    appearance: 'Colorless, odorless, non-flammable noble gas',
    availableSupplyFormats: [
      'High-Pressure Seamless Steel/Aluminium Cylinders (10L / 47L / 50L)',
      'Multi-Cylinder Packs (16-Cylinder MCP Bundles ~120m³)',
      'High-Purity Laboratory Lecture Bottles'
    ],
    puritiesAvailable: ['Balloon / Commercial Grade (≥ 99.0%)', 'High Purity Grade 4.5 (99.995%)', 'Ultra High Purity Grade 5.0 (99.999%)', 'UHP Grade 6.0 (99.9999%)'],
    physicalProperties: {
      boilingPoint: '-268.93°C (-452.1°F, 4.2 K)',
      expansionRatio: 'Compressed gas @ 150-200 Bar',
      gasDensity: '0.1786 kg/m³ (7x lighter than air)',
      molecularWeight: '4.0026 g/mol',
      criticalTemp: '-267.96°C (5.19 K)'
    },
    overview: 'Shakti Sales Agency supplies high-purity Helium Gas (He) sourced through global cryogen networks. Helium has an exceptionally small molecular size and zero chemical reactivity, making it the global standard for high-sensitivity mass spectrometer leak testing, carrier gas in gas chromatography, and shielding during titanium welding.',
    supplyModes: [
      {
        title: 'High-Pressure Seamless Steel/Aluminium Cylinders',
        capacity: '10L / 47L / 50L Cylinders (1.5m³ to 10m³)',
        pressure: '150 Bar to 200 Bar',
        description: 'Internally passivated cylinders with brass/stainless steel valves maintaining ultra-low impurity thresholds.',
        idealFor: 'Analytical GC laboratories, leak detection units, and research universities.'
      },
      {
        title: 'Multi-Cylinder Packs (MCP Bundles)',
        capacity: '12 to 16 Cylinder Banks (~120m³)',
        pressure: '200 Bar Integrated Manifold',
        description: 'Pre-manifolded quads for continuous high-flow industrial and aerospace testing applications.',
        idealFor: 'Defense aerospace purging, optical fiber drawing, and heat exchanger leak testing.'
      }
    ],
    applications: [
      { industry: 'Analytical Labs & QC', useCase: 'Carrier gas in Gas Chromatography (GC-MS), ICP-MS collision gas & nuclear magnetic resonance', recommendedPurity: '≥ 99.999% Grade 5.0 / 6.0' },
      { industry: 'Industrial Leak Detection', useCase: 'Mass spectrometer vacuum leak testing of automotive air bags, HVAC coils & aerospace valves', recommendedPurity: '≥ 99.995% High Purity' },
      { industry: 'Semiconductor & Fiber Optics', useCase: 'Heat transfer medium and optical fiber drawing furnace inert atmosphere', recommendedPurity: '≥ 99.9999% Grade 6.0' },
      { industry: 'Healthcare', useCase: 'Cryogenic liquid helium for MRI superconducting magnet zero-boil-off cooling', recommendedPurity: 'Liquid Helium (4.2 K)' }
    ],
    handlingSafety: [
      'Completely non-toxic and non-flammable; however, rapidly displaces air in enclosed spaces causing asphyxiation without warning.',
      'Never inhale helium directly from pressurized cylinders: extreme velocity causes lung tissue rupture.',
      'Small atomic size allows helium to slowly diffuse through standard rubber hoses; use stainless steel or copper tubing.'
    ],
    relatedProducts: [
      { title: 'High Purity Oxygen', slug: 'high-purity-oxygen', formula: 'O₂' },
      { title: 'Calibration Gas Mixtures', slug: 'calibration-gas-mixtures', formula: 'Mixtures' },
      { title: 'Liquid Argon (LAR)', slug: 'liquid-argon', formula: 'Ar' }
    ],
    seoTitle: 'Helium Gas Supplier India | UHP Grade 5.0 & 6.0 Helium Cylinders | Shakti Group',
    seoDesc: 'High-purity Helium Gas (He) Grade 5.0 & 6.0 supplier in India. Cylinders & MCP bundles for GC-MS carrier gas, mass spectrometer leak detection, semiconductor wafer manufacturing & aerospace across Gujarat & nationwide.',
    keywords: 'Helium Gas Supplier India, Grade 5.0 Helium Gujarat, Helium Leak Detection Gas, UHP Helium Cylinders, Pure Helium Gas Vadodara Ahmedabad Dahej, Grade 6.0 Helium India',
    alternateNames: ['Helium Gas', 'He Gas', 'Ultra High Purity Helium', 'Grade 5.0 Helium', 'Grade 6.0 Helium', 'Helium Leak Check Gas'],
    targetQueries: [
      'Helium gas supplier India',
      'Grade 5.0 ultra high purity helium cylinder supplier',
      'Helium gas for mass spectrometer leak detection',
      'Helium cylinder refilling Gujarat Vadodara Ahmedabad',
      'UHP helium gas Grade 6.0 for GC-MS carrier'
    ],
    deliveryCoverage: ['Vadodara', 'Ahmedabad', 'Surat', 'Ankleshwar', 'Dahej', 'Halol', 'Maharashtra', 'Madhya Pradesh', 'Rajasthan', 'Pan-India'],
    faqs: [
      {
        question: 'What purity grades of Helium gas does Shakti Group supply?',
        answer: 'We supply High Purity Grade 4.5 (99.995%), Ultra-High Purity Grade 5.0 (99.999%), and Semiconductor Grade 6.0 (99.9999%) with guaranteed sub-PPM total impurity levels.'
      },
      {
        question: 'What cylinder packaging is available for Helium gas?',
        answer: 'We offer individual 10L, 47L, and 50L high-pressure seamless steel cylinders (150-200 bar) as well as 16-cylinder MCP packs (~120m³) for high-flow leak testing and industrial processes.'
      },
      {
        question: 'Can you supply helium for mass spectrometer leak testing and GC-MS?',
        answer: 'Yes. Every batch of Grade 5.0 and 6.0 helium is supplied with an individual analytical Certificate of Analysis (COA) specifying moisture, oxygen, and hydrocarbon levels.'
      }
    ]
  },

  // ----------------------------------------------------
  // HIGH PURITY OXYGEN (UHP)
  // ----------------------------------------------------
  'high-purity-oxygen': {
    slug: 'high-purity-oxygen',
    title: 'High Purity Oxygen (99.9999%)',
    chemicalFormula: 'O₂',
    symbolBadge: 'UHP O₂ | Grade 6.0',
    casNumber: '7782-44-7',
    unNumber: 'UN 1072 (Oxygen, Compressed)',
    subtitle: 'Ultra-High Purity Grade 5.0 to 6.0 oxygen for semiconductor silicon wafer thermal oxidation, optical fiber core fabrication, and analytical research.',
    heroImage: 'https://images.unsplash.com/photo-1748261347902-451fb437e8fb?w=900&auto=format&fit=crop',
    category: 'high-purity',
    categoryLabel: 'Specialty & Calibration Gases',
    categorySlug: 'specialty-calibration',
    physicalState: 'Compressed Gas @ 150-200 Bar',
    appearance: 'Colorless, odorless, high-purity oxidizing gas',
    availableSupplyFormats: [
      'Specialty High-Pressure Aluminum & Steel Cylinders (10L to 47L)',
      'Ultra-Clean Diaphragm Valve Cylinders with Certificate of Analysis (COA)'
    ],
    puritiesAvailable: ['Grade 5.0 (99.999%, Total Impurities < 10 ppm)', 'Grade 5.5 (99.9995%, Impurities < 5 ppm)', 'Grade 6.0 (99.9999%, Impurities < 1 ppm)'],
    physicalProperties: {
      boilingPoint: '-182.96°C',
      expansionRatio: 'Compressed Gas @ 150-200 Bar',
      gasDensity: '1.429 kg/m³',
      molecularWeight: '31.998 g/mol',
      criticalTemp: '-118.57°C'
    },
    overview: 'Shakti Sales Agency purifies and fills Ultra-High Purity (UHP) Oxygen with certified sub-PPM levels of moisture, hydrocarbons, nitrogen, and carbon monoxide. Supplied in specially treated aluminum and stainless-lined cylinders with certified individual Certificates of Analysis (COA).',
    supplyModes: [
      {
        title: 'Specialty High-Pressure Cylinders',
        capacity: '10L to 47L Aluminum & Steel Cylinders',
        pressure: '150 Bar to 200 Bar',
        description: 'Internally mirror-polished and baked cylinders fitted with stainless steel diaphragm valves.',
        idealFor: 'Semiconductor fabs, fiber optics, and analytical calibration.'
      }
    ],
    applications: [
      { industry: 'Semiconductor Fabrication', useCase: 'Thermal oxide gate growth and silicon dioxide layer formation', recommendedPurity: 'Grade 6.0 (99.9999%)' },
      { industry: 'Optical Fiber Drawing', useCase: 'Modified Chemical Vapor Deposition (MCVD) glass core doping', recommendedPurity: 'Grade 5.5 UHP' },
      { industry: 'Analytical Calibration', useCase: 'Total Hydrocarbon Analyzers (THA) and instrument zero gas', recommendedPurity: 'Grade 5.0 UHP' }
    ],
    handlingSafety: [
      'Strong oxidizer; accelerates fire vigorously. Strictly keep all equipment free of hydrocarbons and grease.',
      'Only use oxygen-compatible stainless steel regulators with metal-to-metal diaphragm seals.'
    ],
    relatedProducts: [
      { title: 'Liquid Oxygen (LOX)', slug: 'liquid-oxygen', formula: 'O₂' },
      { title: 'Calibration Gas Mixtures', slug: 'calibration-gas-mixtures', formula: 'Mixtures' }
    ],
    seoTitle: 'High Purity Oxygen (99.9999%) Grade 6.0 Supplier India | Shakti Group',
    seoDesc: 'Ultra-High Purity (UHP) Oxygen Grade 5.0, 5.5, and 6.0 for semiconductor manufacturing, fiber optics, and analytical testing laboratories across India.',
    keywords: 'UHP Oxygen Grade 6.0, High Purity Oxygen India, Semiconductor Gas Gujarat, Electronic Grade Oxygen, Grade 5.0 Oxygen Cylinders Vadodara',
    alternateNames: ['High Purity Oxygen', 'UHP Oxygen', 'Grade 6.0 Oxygen', 'Electronic Grade Oxygen', 'Semiconductor Oxygen'],
    targetQueries: [
      'High purity oxygen gas cylinder supplier India',
      'Ultra high purity oxygen Grade 6.0 for semiconductors',
      'UHP oxygen Grade 5.0 cylinders Gujarat',
      'Electronic grade oxygen gas supplier Vadodara'
    ],
    deliveryCoverage: ['Vadodara', 'Ahmedabad', 'Surat', 'Dahej', 'Ankleshwar', 'Maharashtra', 'Pan-India'],
    faqs: [
      {
        question: 'What differentiates Grade 6.0 Oxygen from industrial oxygen?',
        answer: 'Grade 6.0 Oxygen is 99.9999% pure with total impurities (moisture, hydrocarbons, CO, CO2, N2) less than 1 ppm, filled in passivated cylinders with metal-to-metal diaphragm valves.'
      },
      {
        question: 'What industries use Ultra-High Purity (UHP) Oxygen?',
        answer: 'It is essential for semiconductor thermal gate oxidation, optical fiber glass preform fabrication (MCVD), and precision analytical calibration instrumentation.'
      }
    ]
  },

  // ----------------------------------------------------
  // CALIBRATION GAS MIXTURES
  // ----------------------------------------------------
  'calibration-gas-mixtures': {
    slug: 'calibration-gas-mixtures',
    title: 'Calibration Gas Mixtures',
    chemicalFormula: 'Multi-Component Blends',
    symbolBadge: 'Certified Standards',
    casNumber: 'Custom Blends',
    unNumber: 'UN 1956 (Compressed Gas, N.O.S.)',
    subtitle: 'NIST & NABL traceable gravimetrically blended calibration standards for Continuous Emission Monitoring (CEMS), gas chromatographs, and hazardous gas detectors.',
    heroImage: 'https://plus.unsplash.com/premium_photo-1661857085334-50e11ccd7629?w=900&auto=format&fit=crop',
    category: 'high-purity',
    categoryLabel: 'Specialty & Calibration Gases',
    categorySlug: 'specialty-calibration',
    physicalState: 'Compressed Gas / Certified Gravimetric Blend',
    appearance: 'Colorless gas blend with individual analytical Certificate of Analysis (COA)',
    availableSupplyFormats: [
      'Disposable Aluminum Canisters (34L, 58L, 110L)',
      'High-Pressure Refillable Cylinders (10L to 47L)',
      'NIST / NABL Traceable Calibration Cylinders'
    ],
    puritiesAvailable: ['PPM & PPB Level Multi-Component Standards', 'LEL Combustible Gas Mixes (% LEL CH₄, C₃H₈, H₂)', 'Toxic Gas Blends (CO, H₂S, SO₂, NO, NO₂)', 'Laser Resonator Cutting Gas Mixtures (He/N₂/CO₂)'],
    physicalProperties: {
      boilingPoint: 'Mixture Specific',
      expansionRatio: 'N/A - Gravimetric Precision',
      gasDensity: 'Certified Component Data',
      molecularWeight: 'NIST Traceable Calculated',
      criticalTemp: 'Certified Environment'
    },
    overview: 'Shakti Sales Agency manufactures gravimetrically blended multi-component calibration gas standards with analytical certification traceable to international standards (NIST/NABL). Our mixtures feature long stability shelf lives (up to 36 months) in passivated aluminum cylinders.',
    supplyModes: [
      {
        title: 'Disposable & Refillable Specialty Cylinders',
        capacity: '34L, 58L, 110L Disposable & 10L-47L High-Pressure Cylinders',
        pressure: '70 Bar to 150 Bar',
        description: 'Internally treated cylinders with individual Certificate of Analysis (COA) specifying exact analytical tolerances.',
        idealFor: 'CEMS stack emission calibration, portable gas detector bump testing, and laboratory GC calibration.'
      }
    ],
    applications: [
      { industry: 'Environmental & CEMS', useCase: 'Calibration of Continuous Emission Monitoring Systems (SOx, NOx, CO, CO₂, O₂)', recommendedPurity: '±1% Analytical Tolerance' },
      { industry: 'Workplace Safety & Mining', useCase: 'Bump testing and span calibration of multi-gas personal safety monitors (H₂S, CO, O₂, LEL)', recommendedPurity: 'NIST Traceable Standard' },
      { industry: 'Laser Cutting', useCase: 'CO₂ Laser resonator tri-mixes (Helium, Nitrogen, Carbon Dioxide)', recommendedPurity: 'Grade 5.0 Pure Resonator Mix' }
    ],
    handlingSafety: [
      'Verify cylinder Certificate of Analysis (COA) expiration date before calibration.',
      'Use dedicated non-reactive stainless steel or brass regulators matching mixture compatibility.'
    ],
    relatedProducts: [
      { title: 'Helium Gas (He)', slug: 'helium-gas', formula: 'He' },
      { title: 'High Purity Oxygen', slug: 'high-purity-oxygen', formula: 'O₂' }
    ],
    seoTitle: 'Calibration Gas Mixtures Supplier India | CEMS & Lab Standards | Shakti Group',
    seoDesc: 'NIST/NABL traceable calibration gas mixtures in refillable and disposable cylinders. Custom PPM/PPB standards for CEMS stack analyzers, personal gas detector bump test & GC.',
    keywords: 'Calibration Gas Mixtures India, CEMS Calibration Standards, Span Gas Cylinders Gujarat, Multi-gas Mixture, Bump Test Gas Cylinders, Quad Gas Mix India',
    alternateNames: ['Calibration Gas Mixtures', 'Span Gas', 'CEMS Calibration Gas', 'Multi-Gas Standard', 'Bump Test Gas', 'Laser Resonator Mixture'],
    targetQueries: [
      'Calibration gas mixtures supplier India',
      'CEMS stack analyzer calibration gas cylinder',
      'Multi gas 4-gas bump test mixture for safety monitors',
      'NIST traceable span gas supplier Gujarat',
      'Laser resonator gas mixture He N2 CO2'
    ],
    deliveryCoverage: ['Vadodara', 'Ahmedabad', 'Surat', 'Dahej', 'Ankleshwar', 'Hazira', 'Vapi', 'Maharashtra', 'Pan-India'],
    faqs: [
      {
        question: 'Are your calibration gas mixtures traceable to NIST standards?',
        answer: 'Yes. All specialty calibration gas mixtures prepared by Shakti Sales Agency come with an analytical Certificate of Analysis (COA) traceable to NIST/NABL gravimetric standards.'
      },
      {
        question: 'What is the shelf-life stability of reactive calibration gas mixtures like H2S or SO2?',
        answer: 'Using proprietary cylinder passivation and moisture barrier technologies, our reactive gas blends maintain analytical stability for 12 to 24 months, and non-reactive mixtures up to 36 months.'
      },
      {
        question: 'Do you offer non-refillable disposable canisters for portable bump testing?',
        answer: 'Yes. We supply 34L, 58L, and 110L lightweight aluminum disposable canisters equipped with push-button and demand flow regulators for field gas detectors.'
      }
    ]
  },

  // ----------------------------------------------------
  // SPECIALTY GASES (CO, N2O, SF6, HCl, Ethylene, Methane, Propane, SO2, H2S, Cl2)
  // ----------------------------------------------------
  'carbon-monoxide': {
    slug: 'carbon-monoxide',
    title: 'Carbon Monoxide (CO)',
    chemicalFormula: 'CO',
    symbolBadge: 'CO | Toxic & Flammable',
    casNumber: '630-08-0',
    unNumber: 'UN 1016 (Carbon Monoxide, Compressed)',
    subtitle: 'Specialty-grade carbon monoxide for chemical acetic acid synthesis, metal carbonyl production, calibration standards, and pharmaceutical intermediates.',
    heroImage: 'https://images.unsplash.com/photo-1727504172743-08f14448fab8?w=900&auto=format&fit=crop',
    category: 'specialty',
    categoryLabel: 'Specialty & Calibration Gases',
    categorySlug: 'specialty-calibration',
    physicalState: 'High-Pressure Compressed Gas (150 Bar)',
    appearance: 'Colorless, odorless, highly flammable and toxic gas',
    availableSupplyFormats: [
      'High-Pressure Seamless Steel Cylinders (10L to 47L)',
      'Custom PPM / % Span Gas Mixtures'
    ],
    puritiesAvailable: ['Commercial Grade (≥ 99.0%)', 'High Purity (≥ 99.5%)', 'Ultra High Purity Grade 4.8 (99.98%)'],
    physicalProperties: {
      boilingPoint: '-191.5°C',
      expansionRatio: 'Compressed Gas @ 150 Bar',
      gasDensity: '1.250 kg/m³ (approx same as air)',
      molecularWeight: '28.01 g/mol',
      criticalTemp: '-140.2°C'
    },
    overview: 'High-purity Carbon Monoxide (CO) supplied in safety-certified high-pressure cylinders. Used widely as a C1 building block in industrial carbonyl synthesis, acetic acid production, and toxic gas detector calibration.',
    supplyModes: [
      {
        title: 'High-Pressure Cylinders with Safety Outlets',
        capacity: '10L to 47L Seamless Steel',
        pressure: '150 Bar',
        description: 'Equipped with DISS / CGA 350 valves and helium leak-checked fittings.',
        idealFor: 'Chemical synthesis labs and calibration gas manufacturing.'
      }
    ],
    applications: [
      { industry: 'Chemical Manufacturing', useCase: 'Hydroformylation, carbonylation reactions, and acetic acid synthesis', recommendedPurity: '≥ 99.5% HP' },
      { industry: 'Calibration & Safety', useCase: 'Span calibration of toxic gas detection systems in mines and factories', recommendedPurity: 'Certified PPM Blend' }
    ],
    handlingSafety: [
      'Colorless, odorless, highly toxic gas: binds irreversibly with blood hemoglobin.',
      'Install dual-stage toxic gas scrubbers and continuous electrochemical CO sensors.'
    ],
    relatedProducts: [
      { title: 'Calibration Gas Mixtures', slug: 'calibration-gas-mixtures', formula: 'Mixtures' },
      { title: 'Hydrogen Gas (H₂)', slug: 'hydrogen-gas', formula: 'H₂' }
    ],
    seoTitle: 'Carbon Monoxide (CO) Gas Supplier India | High Purity CO Cylinders | Shakti Group',
    seoDesc: 'Specialty Carbon Monoxide (CO) gas in high-pressure cylinders for chemical synthesis, carbonylation, and calibration standards across Gujarat and India.',
    keywords: 'Carbon Monoxide Gas Supplier India, Pure CO Cylinders, Chemical Synthesis CO, CO Calibration Gas Gujarat',
    alternateNames: ['Carbon Monoxide', 'CO Gas', 'Pure Carbon Monoxide', 'Carbon Monoxide Cylinder'],
    targetQueries: [
      'Carbon monoxide gas supplier India',
      'Pure CO gas cylinders for chemical research',
      'Carbon monoxide span gas calibration'
    ],
    deliveryCoverage: ['Vadodara', 'Dahej', 'Ankleshwar', 'Gujarat', 'Western India', 'Pan-India'],
    faqs: [
      {
        question: 'What safety precautions are required when purchasing Carbon Monoxide cylinders?',
        answer: 'Due to extreme toxicity, CO is supplied only to authorized industrial and laboratory buyers with verified safety infrastructure including gas detection alarms, scrubber ventilation, and certified DISS/CGA regulators.'
      }
    ]
  },

  'nitrous-oxide': {
    slug: 'nitrous-oxide',
    title: 'Nitrous Oxide (N₂O)',
    chemicalFormula: 'N₂O',
    symbolBadge: 'N₂O | Medical & Tech',
    casNumber: '10024-97-2',
    unNumber: 'UN 1070 (Nitrous Oxide, Compressed)',
    subtitle: 'High-purity Nitrous Oxide for medical anesthesia, semiconductor Chemical Vapor Deposition (CVD), food whipped cream propellants, and racing performance.',
    heroImage: 'https://images.unsplash.com/photo-1652211955967-99c892925469?w=900&auto=format&fit=crop',
    category: 'specialty',
    categoryLabel: 'Specialty & Calibration Gases',
    categorySlug: 'specialty-calibration',
    physicalState: 'Liquefied Compressed Gas (50 Bar @ 20°C)',
    appearance: 'Colorless gas with a slightly sweet odor and taste',
    availableSupplyFormats: [
      'High-Pressure Liquefied Cylinders (30 kg to 32 kg)',
      'Pin-Index Medical Gas Cylinders',
      'Electronic-Grade High Purity Cylinders'
    ],
    puritiesAvailable: ['Medical Grade IP (≥ 99.0%)', 'Food Grade E942 (≥ 99.5%)', 'Electronic / Semiconductor Grade (99.999%)'],
    physicalProperties: {
      boilingPoint: '-88.5°C',
      expansionRatio: 'Liquefied Compressed Gas',
      gasDensity: '1.977 kg/m³ (1.5x heavier than air)',
      molecularWeight: '44.01 g/mol',
      criticalTemp: '36.4°C (Critical Pressure 72.5 bar)'
    },
    overview: 'Nitrous Oxide (N₂O) is a sweet-smelling liquefied compressed gas supplied for hospital inhalation analgesia, food foaming agents, and semiconductor thin-film dielectric oxide deposition.',
    supplyModes: [
      {
        title: 'High-Pressure Liquefied Cylinders',
        capacity: '30 kg to 32 kg Liquefied Gas',
        pressure: '50 Bar at 20°C',
        description: 'Pin-index medical valves and high-purity brass valves.',
        idealFor: 'Hospitals, food processors, and semiconductor wafer fabs.'
      }
    ],
    applications: [
      { industry: 'Healthcare & Anesthesia', useCase: 'Inhalation anesthetic in combination with oxygen for surgery and dentistry', recommendedPurity: 'Medical Grade IP (FDA Licensed)' },
      { industry: 'Semiconductor & Electronics', useCase: 'Silicon oxynitride dielectric CVD deposition and chamber cleaning', recommendedPurity: '≥ 99.999% Electronic Grade' },
      { industry: 'Food Processing', useCase: 'Whipped cream aeration propellant (bacteriostatic E942)', recommendedPurity: '≥ 99.5% Food Grade' }
    ],
    handlingSafety: [
      'Supports combustion intensely like oxygen. Keep all grease and organic substances away.',
      'Liquefied in cylinders: avoid rapid discharge that causes cryogenic cooling.'
    ],
    relatedProducts: [
      { title: 'Liquid Oxygen (LOX)', slug: 'liquid-oxygen', formula: 'O₂' },
      { title: 'Helium Gas (He)', slug: 'helium-gas', formula: 'He' }
    ],
    seoTitle: 'Nitrous Oxide (N2O) Supplier India | Medical & Food Grade Cylinders',
    seoDesc: 'High-purity Nitrous Oxide (N2O) for medical anesthesia IP, food grade E942, and electronic semiconductor grade thin film deposition.',
    keywords: 'Nitrous Oxide Supplier India, Medical N2O Gujarat, Food Grade Nitrous Oxide, Semiconductor N2O'
  },

  'sulphur-hexafluoride': {
    slug: 'sulphur-hexafluoride',
    title: 'Sulphur Hexafluoride (SF₆)',
    chemicalFormula: 'SF₆',
    symbolBadge: 'SF₆ | Dielectric Gas',
    casNumber: '2551-62-4',
    unNumber: 'UN 1080 (Sulfur Hexafluoride)',
    subtitle: 'Superior dielectric insulating and arc-quenching gas for high-voltage electrical switchgear, Gas-Insulated Substations (GIS), and semiconductor etching.',
    heroImage: 'https://images.unsplash.com/photo-1560700105-716e308979fc?w=900&auto=format&fit=crop',
    category: 'specialty',
    categoryLabel: 'Specialty & Calibration Gases',
    categorySlug: 'specialty-calibration',
    physicalState: 'Liquefied Gas (22 Bar @ 20°C)',
    appearance: 'Colorless, odorless, extremely dense non-flammable gas',
    availableSupplyFormats: [
      'High-Pressure Liquefied Gas Cylinders (40 kg to 50 kg)',
      'IEC 60376 Certified Electrical Utility Cylinders'
    ],
    puritiesAvailable: ['Electrical Grade IEC 60376 (≥ 99.9%)', 'Electronic / Etching Grade (≥ 99.999%)'],
    physicalProperties: {
      boilingPoint: '-63.8°C Sublimation',
      expansionRatio: 'Liquefied Gas @ 22 Bar',
      gasDensity: '6.13 kg/m³ (5x heavier than air)',
      molecularWeight: '146.06 g/mol',
      criticalTemp: '45.5°C'
    },
    overview: 'Sulphur Hexafluoride (SF₆) is an inert, non-toxic gas with exceptional dielectric strength (3x higher than air) and rapid arc-extinguishing capability, making it the indispensable insulation medium for modern electric power grids.',
    supplyModes: [
      {
        title: 'High-Pressure Liquefied Cylinders',
        capacity: '40 kg to 50 kg Gas Charge',
        pressure: '22 Bar at 20°C',
        description: 'Tested per IEC 60376 standards with moisture content < 15 ppm.',
        idealFor: 'Power substations, switchgear manufacturers, and semiconductor fabs.'
      }
    ],
    applications: [
      { industry: 'Electrical Power Utilities', useCase: 'Dielectric insulation in Gas-Insulated Substations (GIS) and high-voltage circuit breakers', recommendedPurity: '≥ 99.9% IEC 60376' },
      { industry: 'Semiconductor & MEMS', useCase: 'Deep Reactive Ion Etching (DRIE) of silicon wafers for microchips', recommendedPurity: '≥ 99.999% UHP' }
    ],
    handlingSafety: [
      'Very heavy gas: sinks rapidly and displaces breathable air in electrical trenches and basements.',
      'High Global Warming Potential (GWP): use certified recovery and evacuation carts to prevent atmospheric release.'
    ],
    relatedProducts: [
      { title: 'Nitrous Oxide (N₂O)', slug: 'nitrous-oxide', formula: 'N₂O' },
      { title: 'Helium Gas (He)', slug: 'helium-gas', formula: 'He' }
    ],
    seoTitle: 'Sulphur Hexafluoride (SF6) Supplier India | Electrical GIS Grade Gas',
    seoDesc: 'IEC 60376 compliant Sulphur Hexafluoride (SF6) for high-voltage GIS electrical switchgear and semiconductor DRIE etching.',
    keywords: 'SF6 Gas Supplier India, Sulphur Hexafluoride Cylinders, Electrical Grade SF6 Gujarat'
  },

  'hydrogen-chloride': {
    slug: 'hydrogen-chloride',
    title: 'Hydrogen Chloride (HCl Gas)',
    chemicalFormula: 'HCl',
    symbolBadge: 'HCl | Corrosive Gas',
    casNumber: '7647-01-0',
    unNumber: 'UN 1050 (Hydrogen Chloride, Anhydrous)',
    subtitle: 'Anhydrous Hydrogen Chloride gas for semiconductor silicon wafer etching, chemical chlorination synthesis, and pharmaceutical catalysis.',
    heroImage: 'https://plus.unsplash.com/premium_photo-1675186951036-d87283dac099?w=900&auto=format&fit=crop',
    category: 'specialty',
    categoryLabel: 'Specialty & Calibration Gases',
    categorySlug: 'specialty-calibration',
    physicalState: 'Liquefied Compressed Gas (42 Bar)',
    appearance: 'Colorless, pungent fuming gas (corrosive, acid odor)',
    availableSupplyFormats: [
      'Specialty Passivated Cylinders (20 kg to 40 kg)',
      'Corrosion-Resistant Hastelloy / Monel Valve Cylinders'
    ],
    puritiesAvailable: ['Technical Grade (≥ 99.0%)', 'Electronic / VLSI Grade (≥ 99.999%)'],
    physicalProperties: {
      boilingPoint: '-85.05°C',
      expansionRatio: 'Liquefied Gas @ 42 Bar',
      gasDensity: '1.639 kg/m³',
      molecularWeight: '36.46 g/mol',
      criticalTemp: '51.4°C'
    },
    overview: 'Anhydrous Hydrogen Chloride (HCl) gas supplied in specialized passivated nickel/Monel lined cylinders for precision semiconductor silicon surface cleaning, epitaxial wafer growth, and organic chlorination synthesis.',
    supplyModes: [
      {
        title: 'Specialty Anhydrous Cylinders',
        capacity: '20 kg to 40 kg Gas Charge',
        pressure: '42 Bar',
        description: 'Fitted with DISS / CGA 330 corrosion-resistant Hastelloy valves.',
        idealFor: 'Wafer fabs and fine chemical synthesis.'
      }
    ],
    applications: [
      { industry: 'Semiconductor Fabrication', useCase: 'In-situ CVD reactor cleaning and vapor phase etching of silicon wafers', recommendedPurity: '≥ 99.999% VLSI Grade' },
      { industry: 'Pharmaceutical & Chemical', useCase: 'Anhydrous hydrochlorination catalyst in API synthesis', recommendedPurity: '≥ 99.5% Pure' }
    ],
    handlingSafety: [
      'Extremely corrosive and toxic; reacts violently with moisture in air to form dense white fumes of hydrochloric acid.',
      'Must use Hastelloy or Monel purge panels with dry nitrogen purge cycles before and after use.'
    ],
    relatedProducts: [
      { title: 'High Purity Chlorine', slug: 'high-purity-chlorine', formula: 'Cl₂' },
      { title: 'Carbon Monoxide', slug: 'carbon-monoxide', formula: 'CO' }
    ],
    seoTitle: 'Anhydrous Hydrogen Chloride (HCl Gas) Supplier India | Semiconductor Grade',
    seoDesc: 'High-purity Anhydrous Hydrogen Chloride (HCl) gas in passivated cylinders for wafer etching and chemical synthesis.',
    keywords: 'Hydrogen Chloride Gas Supplier India, Anhydrous HCl Cylinders, Electronic Grade HCl'
  },

  'high-purity-chlorine': {
    slug: 'high-purity-chlorine',
    title: 'High Purity Chlorine (Cl₂)',
    chemicalFormula: 'Cl₂',
    symbolBadge: 'Cl₂ | Reactive Halogen',
    casNumber: '7782-50-5',
    unNumber: 'UN 1017 (Chlorine)',
    subtitle: 'High-purity liquid/gaseous Chlorine for municipal water purification, PVC polymer manufacturing, titanium dioxide pigment production, and pharmaceutical synthesis.',
    heroImage: 'https://images.unsplash.com/photo-1557313773-74c3490a350d?w=900&auto=format&fit=crop',
    category: 'high-purity',
    categoryLabel: 'Specialty & Calibration Gases',
    categorySlug: 'specialty-calibration',
    physicalState: 'Liquefied Gas (6.8 Bar @ 20°C)',
    appearance: 'Greenish-yellow gas with pungent, irritating suffocating odor',
    availableSupplyFormats: [
      'PESO Certified 100 kg Chlorine Cylinders',
      '900 kg Chlorine Tonners with Safety Hoods'
    ],
    puritiesAvailable: ['Commercial Grade (≥ 99.5%)', 'High Purity Grade (≥ 99.99%)', 'Electronic Grade (99.999%)'],
    physicalProperties: {
      boilingPoint: '-34.04°C',
      expansionRatio: 'Liquefied Gas @ 6.8 Bar (20°C)',
      gasDensity: '3.214 kg/m³ (2.5x heavier than air)',
      molecularWeight: '70.90 g/mol',
      criticalTemp: '143.8°C'
    },
    overview: 'High-purity Chlorine (Cl₂) supplied in PESO-certified 100 kg cylinders and 900 kg tonners with strict safety controls, pressure emergency kits, and emergency scrubber backup.',
    supplyModes: [
      {
        title: 'Chlorine Tonners & Cylinders',
        capacity: '100 kg Cylinders & 900 kg Tonners',
        pressure: '6.8 Bar at 20°C',
        description: 'Monitored ton containers equipped with dual fusible plugs and auxiliary emergency safety hoods.',
        idealFor: 'Water treatment authorities, paper bleaching mills, and chemical complexes.'
      }
    ],
    applications: [
      { industry: 'Water & Wastewater', useCase: 'Potable water disinfection, algae control, and sewage sterilization', recommendedPurity: '≥ 99.5% Commercial Grade' },
      { industry: 'Chemicals & Pigments', useCase: 'Titanium tetrachloride synthesis for TiO₂ pigments and PVC vinyl chloride monomer', recommendedPurity: '≥ 99.8% High Grade' }
    ],
    handlingSafety: [
      'Dense greenish-yellow toxic gas with suffocating odor; 2.5x heavier than air.',
      'Always have Emergency Kit B (for tonners) and sodium hydroxide scrubbers on site.'
    ],
    relatedProducts: [
      { title: 'Hydrogen Chloride', slug: 'hydrogen-chloride', formula: 'HCl' },
      { title: 'Sulphur Dioxide', slug: 'sulphur-dioxide', formula: 'SO₂' }
    ],
    seoTitle: 'Chlorine Gas (Cl2) Tonners & Cylinders Supplier India | Shakti Group',
    seoDesc: 'PESO certified Chlorine gas (Cl2) in 100 kg cylinders and 900 kg tonners for municipal water disinfection and chemical processing.',
    keywords: 'Chlorine Gas Supplier India, Chlorine Tonner Gujarat, Water Disinfection Chlorine'
  },

  'ethylene-gas': {
    slug: 'ethylene-gas',
    title: 'Ethylene Gas (C₂H₄)',
    chemicalFormula: 'C₂H₄',
    symbolBadge: 'C₂H₄ | Polymer & Agri',
    casNumber: '74-85-1',
    unNumber: 'UN 1962 (Ethylene, Compressed)',
    subtitle: 'Specialty hydrocarbon gas for fruit ripening chambers (mangoes, bananas), polyethylene polymer synthesis, and chemical alkylation.',
    heroImage: 'https://images.unsplash.com/photo-1703365508981-cc87f60446cb?w=900&auto=format&fit=crop',
    category: 'specialty',
    categoryLabel: 'Specialty & Calibration Gases',
    categorySlug: 'specialty-calibration',
    physicalState: 'High-Pressure Compressed Gas (70 - 100 Bar)',
    appearance: 'Colorless gas with a faint sweet, musky odor',
    availableSupplyFormats: [
      'High-Pressure Seamless Cylinders (5 kg to 15 kg)',
      'Controlled Fruit Ripening Dosing Cylinders'
    ],
    puritiesAvailable: ['Fruit Ripening Grade (≥ 99.5%)', 'Polymer Grade (≥ 99.95%)', 'UHP Grade 5.0 (99.999%)'],
    physicalProperties: {
      boilingPoint: '-103.7°C',
      expansionRatio: 'Compressed Gas',
      gasDensity: '1.261 kg/m³',
      molecularWeight: '28.05 g/mol',
      criticalTemp: '9.2°C (Critical Pressure 50.4 bar)'
    },
    overview: 'Ethylene Gas (C₂H₄) is supplied for commercial agricultural fruit ripening chambers with automated dosing systems, replacing hazardous calcium carbide with clean natural phytohormone ripening.',
    supplyModes: [
      {
        title: 'High-Pressure Seamless Cylinders',
        capacity: '5 kg to 15 kg Gas Charge',
        pressure: '70 to 100 Bar',
        description: 'Equipped with precision metering valves for controlled PPM concentration dosing in ripening chambers.',
        idealFor: 'Cold storage facilities, fruit exporters, and polymer research.'
      }
    ],
    applications: [
      { industry: 'Agriculture & Cold Storage', useCase: 'Safe, uniform ripening of bananas, mangoes, papayas, and citrus fruits per FSSAI guidelines', recommendedPurity: '≥ 99.5% Ripening Grade' },
      { industry: 'Polymer & Chemical Fabs', useCase: 'Feedstock for polyethylene polymers and chemical ethylene oxide synthesis', recommendedPurity: '≥ 99.95% Polymer Grade' }
    ],
    handlingSafety: [
      'Flammable gas (explosive range 2.7% to 36% in air). Keep ripening chamber concentrations strictly below 100-150 PPM.',
      'Use automated ethylene gas monitors with safety interlocks.'
    ],
    relatedProducts: [
      { title: 'Methane Gas', slug: 'methane-gas', formula: 'CH₄' },
      { title: 'Propane Gas', slug: 'propane-gas', formula: 'C₃H₈' }
    ],
    seoTitle: 'Ethylene Gas for Fruit Ripening & Industry Supplier India | Shakti Group',
    seoDesc: 'High-purity Ethylene Gas (C2H4) cylinders for fruit ripening chambers (FSSAI approved) and polymer chemical synthesis.',
    keywords: 'Ethylene Gas for Fruit Ripening, Ethylene Cylinders Gujarat, Mango Ripening Gas, Polymer Ethylene'
  },

  'methane-gas': {
    slug: 'methane-gas',
    title: 'Methane Gas (CH₄)',
    chemicalFormula: 'CH₄',
    symbolBadge: 'CH₄ | Hydrocarbon Fuel',
    casNumber: '74-82-8',
    unNumber: 'UN 1971 (Methane, Compressed)',
    subtitle: 'Ultra-pure clean hydrocarbon fuel gas for calibration standards, environmental gas chromatography, and synthetic diamond Chemical Vapor Deposition (CVD).',
    heroImage: 'https://plus.unsplash.com/premium_photo-1682148795124-dac95dd91fd4?w=900&auto=format&fit=crop',
    category: 'specialty',
    categoryLabel: 'Specialty & Calibration Gases',
    categorySlug: 'specialty-calibration',
    physicalState: 'High-Pressure Compressed Gas (150 - 200 Bar)',
    appearance: 'Colorless, odorless, lighter-than-air flammable gas',
    availableSupplyFormats: [
      'High-Pressure Seamless Steel Cylinders (10L to 47L)',
      'Lab-Grown Diamond CVD Synthesis Bundles'
    ],
    puritiesAvailable: ['Commercial Grade (≥ 99.0%)', 'High Purity Grade (≥ 99.95%)', 'UHP Grade 5.0 (99.999%)'],
    physicalProperties: {
      boilingPoint: '-161.5°C',
      expansionRatio: 'Compressed Gas @ 150-200 Bar',
      gasDensity: '0.717 kg/m³ (0.55x lighter than air)',
      molecularWeight: '16.04 g/mol',
      criticalTemp: '-82.6°C'
    },
    overview: 'High-purity Methane Gas (CH₄) supplied in high-pressure cylinders. Used widely for laboratory CVD diamond growth, gas turbine calibration, and environmental greenhouse gas analyzer standards.',
    supplyModes: [
      {
        title: 'High-Pressure Cylinders',
        capacity: '10L to 47L Seamless Steel Cylinders',
        pressure: '150 Bar to 200 Bar',
        description: 'Passivated steel cylinders with left-handed flammable gas valve connections.',
        idealFor: 'Diamond CVD labs, calibration gas manufacturers, and engine R&D.'
      }
    ],
    applications: [
      { industry: 'Lab Grown Diamonds', useCase: 'Microwave Plasma Chemical Vapor Deposition (MPCVD) diamond crystal growth', recommendedPurity: '≥ 99.999% Grade 5.0' },
      { industry: 'Analytical Calibration', useCase: 'FID flame calibration and natural gas analyzer span standards', recommendedPurity: 'Certified PPM Blend' }
    ],
    handlingSafety: [
      'Highly flammable gas (5% to 15% in air). Lighter than air; accumulates near ceilings.'
    ],
    relatedProducts: [
      { title: 'Ethylene Gas', slug: 'ethylene-gas', formula: 'C₂H₄' },
      { title: 'Hydrogen Gas (H₂)', slug: 'hydrogen-gas', formula: 'H₂' }
    ],
    seoTitle: 'Methane Gas (CH4) Supplier India | Lab Grown Diamond CVD Grade',
    seoDesc: 'High-purity Methane Gas (CH4) Grade 5.0 for lab grown diamond CVD synthesis and analytical gas chromatography.',
    keywords: 'Methane Gas Supplier India, CVD Diamond Methane Gas, Grade 5.0 Methane Cylinders'
  },

  'propane-gas': {
    slug: 'propane-gas',
    title: 'Propane Gas (C₃H₈)',
    chemicalFormula: 'C₃H₈',
    symbolBadge: 'C₃H₈ | High-Calorie Fuel',
    casNumber: '74-98-6',
    unNumber: 'UN 1978 (Propane)',
    subtitle: 'High-calorific fuel gas for precision metal cutting, glass bead manufacture, shrink wrapping, and laboratory heating.',
    heroImage: 'https://images.unsplash.com/photo-1600885764629-a715b643f024?w=900&auto=format&fit=crop',
    category: 'specialty',
    categoryLabel: 'Specialty & Calibration Gases',
    categorySlug: 'specialty-calibration',
    physicalState: 'Liquefied Gas (8.5 Bar @ 20°C)',
    appearance: 'Colorless liquefied gas with faint petroleum odor / stenching agent added',
    availableSupplyFormats: [
      'Industrial Propane Cylinders (19 kg to 47 kg)',
      'Liquid or Vapor Phase Withdrawal Cylinders'
    ],
    puritiesAvailable: ['Commercial Grade (≥ 95%)', 'High Purity Grade (≥ 99.5%)', 'Instrument Grade (99.99%)'],
    physicalProperties: {
      boilingPoint: '-42.1°C',
      expansionRatio: 'Liquefied Gas @ 8.5 Bar',
      gasDensity: '2.009 kg/m³ (1.5x heavier than air)',
      molecularWeight: '44.10 g/mol',
      criticalTemp: '96.7°C'
    },
    overview: 'High-purity Propane Gas (C₃H₈) provides uniform combustion and high heat value without residue, making it the preferred clean fuel for high-temperature flame cutting, glass furnaces, and calibration standards.',
    supplyModes: [
      {
        title: 'Industrial Propane Cylinders',
        capacity: '19 kg to 47 kg Liquefied Gas',
        pressure: '8.5 Bar at 20°C',
        description: 'Equipped with high-flow liquid or vapor withdrawal valves.',
        idealFor: 'Metal cutting shops, powder coating curing ovens, and heating lines.'
      }
    ],
    applications: [
      { industry: 'Metal Fabrication', useCase: 'Oxy-propane heavy plate cutting and preheating (cleaner cut edge than acetylene)', recommendedPurity: '≥ 95% Commercial' },
      { industry: 'Calibration & Labs', useCase: 'LEL detector calibration standards and aerosol propellant blends', recommendedPurity: '≥ 99.5% High Purity' }
    ],
    handlingSafety: [
      'Heavier than air; collects in low spots and trenches creating explosive vapor pools.'
    ],
    relatedProducts: [
      { title: 'Dissolved Acetylene (DA)', slug: 'dissolved-acetylene', formula: 'C₂H₂' },
      { title: 'Methane Gas', slug: 'methane-gas', formula: 'CH₄' }
    ],
    seoTitle: 'Propane Gas Supplier India | Industrial Cutting & High Purity Propane',
    seoDesc: 'High-purity Propane Gas (C3H8) cylinders for industrial oxy-propane cutting, glass heating, and calibration gas blends.',
    keywords: 'Propane Gas Supplier India, Propane Cylinders Gujarat, Oxy Propane Cutting Gas'
  },

  'sulphur-dioxide': {
    slug: 'sulphur-dioxide',
    title: 'Sulphur Dioxide (SO₂)',
    chemicalFormula: 'SO₂',
    symbolBadge: 'SO₂ | Preservative & Reagent',
    casNumber: '7446-09-5',
    unNumber: 'UN 1079 (Sulfur Dioxide)',
    subtitle: 'Specialty chemical gas for sugar bleaching, wine preservation, wastewater dechlorination, and CEMS stack calibration.',
    heroImage: 'https://images.unsplash.com/photo-1551884171-004163219904?w=900&auto=format&fit=crop',
    category: 'specialty',
    categoryLabel: 'Specialty & Calibration Gases',
    categorySlug: 'specialty-calibration',
    physicalState: 'Liquefied Gas (3.3 Bar @ 20°C)',
    appearance: 'Colorless, toxic gas with pungent, suffocating, pungent odor',
    availableSupplyFormats: [
      'Liquefied Gas Cylinders (50 kg)',
      '500 kg Liquefied Tonners'
    ],
    puritiesAvailable: ['Commercial Grade (≥ 99.9%)', 'Calibration Grade (PPM Blends in N₂/Air)'],
    physicalProperties: {
      boilingPoint: '-10.0°C',
      expansionRatio: 'Liquefied Gas @ 3.3 Bar (20°C)',
      gasDensity: '2.926 kg/m³ (2.2x heavier than air)',
      molecularWeight: '64.06 g/mol',
      criticalTemp: '157.6°C'
    },
    overview: 'Sulphur Dioxide (SO₂) supplied in liquefied gas cylinders and tonners for sugar juice sulfitation, chemical bleaching, and environmental analyzer span calibration.',
    supplyModes: [
      {
        title: 'Liquefied Gas Cylinders & Tonners',
        capacity: '50 kg Cylinders & 500 kg Tonners',
        pressure: '3.3 Bar at 20°C',
        description: 'Equipped with corrosion-resistant brass/Monel valves.',
        idealFor: 'Sugar mills, chemical synthesis, and environmental calibration.'
      }
    ],
    applications: [
      { industry: 'Sugar Industry', useCase: 'Juice sulfitation clarification and syrup bleaching process', recommendedPurity: '≥ 99.9% Pure' },
      { industry: 'Environmental & CEMS', useCase: 'Stack analyzer span calibration gas for thermal power and chemical plants', recommendedPurity: 'Certified PPM Mixture' }
    ],
    handlingSafety: [
      'Pungent, suffocating, toxic gas; highly irritating to respiratory tract and eyes.'
    ],
    relatedProducts: [
      { title: 'Calibration Gas Mixtures', slug: 'calibration-gas-mixtures', formula: 'Mixtures' },
      { title: 'Hydrogen Sulfide', slug: 'hydrogen-sulfide', formula: 'H₂S' }
    ],
    seoTitle: 'Sulphur Dioxide (SO2) Gas Supplier India | Sugar & CEMS Grade',
    seoDesc: 'High-purity Sulphur Dioxide (SO2) in cylinders and tonners for sugar refining, bleaching, and environmental CEMS calibration.',
    keywords: 'Sulphur Dioxide Gas Supplier India, SO2 Cylinders Gujarat, Sugar Mill SO2 Gas'
  },

  'hydrogen-sulfide': {
    slug: 'hydrogen-sulfide',
    title: 'Hydrogen Sulfide (H₂S)',
    chemicalFormula: 'H₂S',
    symbolBadge: 'H₂S | Highly Toxic',
    casNumber: '7783-06-4',
    unNumber: 'UN 1053 (Hydrogen Sulfide)',
    subtitle: 'Specialty gas for analytical laboratories, petrochemical catalyst sulfiding, and safety detector span calibration.',
    heroImage: 'https://images.unsplash.com/photo-1578496479914-7ef3b0193be3?w=900&auto=format&fit=crop',
    category: 'specialty',
    categoryLabel: 'Specialty & Calibration Gases',
    categorySlug: 'specialty-calibration',
    physicalState: 'Liquefied Gas (18 Bar @ 20°C)',
    appearance: 'Colorless, flammable, extremely hazardous gas (rotten egg odor at low conc.)',
    availableSupplyFormats: [
      'NIST Traceable Calibration Gas Canisters (34L, 58L, 110L)',
      '10L High-Pressure Calibration Cylinders'
    ],
    puritiesAvailable: ['Technical Grade (≥ 99.5%)', 'PPM Trace Calibration Standards (10-50 ppm in N₂/Air)'],
    physicalProperties: {
      boilingPoint: '-60.3°C',
      expansionRatio: 'Liquefied Gas @ 18 Bar',
      gasDensity: '1.539 kg/m³ (heavier than air)',
      molecularWeight: '34.08 g/mol',
      criticalTemp: '100.4°C'
    },
    overview: 'Hydrogen Sulfide (H₂S) supplied in certified PPM calibration cylinders and pure lecture bottles for laboratory analysis, catalyst presulfiding, and toxic gas alarm testing.',
    supplyModes: [
      {
        title: 'PPM Calibration Cylinders & Aluminum Bottles',
        capacity: '34L, 58L, 110L Non-Refillable & 10L Cylinders',
        pressure: 'Custom Regulated',
        description: 'Internally passivated aluminum cylinders with NIST traceable analytical COA.',
        idealFor: 'Refinery personal gas monitor testing, wastewater safety, and drilling rigs.'
      }
    ],
    applications: [
      { industry: 'Workplace Safety & Oil Rigs', useCase: 'Daily bump test and span calibration of H₂S personal detectors (10-25 ppm)', recommendedPurity: 'NIST Traceable Mix' },
      { industry: 'Refining & Catalysis', useCase: 'Hydroprocessing catalyst presulfiding in refinery reactors', recommendedPurity: '≥ 99.5% Pure' }
    ],
    handlingSafety: [
      'Extremely toxic gas with rotten egg odor at low levels; rapid olfactory fatigue makes it undetectable at lethal concentrations (>100 ppm).',
      'Mandatory use of personal H₂S monitors and SCBA respirators when handling.'
    ],
    relatedProducts: [
      { title: 'Calibration Gas Mixtures', slug: 'calibration-gas-mixtures', formula: 'Mixtures' },
      { title: 'Sulphur Dioxide', slug: 'sulphur-dioxide', formula: 'SO₂' }
    ],
    seoTitle: 'Hydrogen Sulfide (H2S) Gas Supplier India | Detector Calibration Standards',
    seoDesc: 'NIST traceable Hydrogen Sulfide (H2S) calibration gas mixtures (10-50 ppm) for refinery safety monitors and catalyst sulfiding.',
    keywords: 'Hydrogen Sulfide Calibration Gas, H2S Bump Test Gas India, H2S Cylinders Gujarat'
  }
};

// Aliases mapping to resolve short codes and alternative URLs
export const PRODUCT_SLUG_ALIASES: Record<string, string> = {
  'lox': 'liquid-oxygen',
  'liquid-oxygen-lox': 'liquid-oxygen',
  'lin': 'liquid-nitrogen',
  'liquid-nitrogen-lin': 'liquid-nitrogen',
  'lar': 'liquid-argon',
  'liquid-argon-lar': 'liquid-argon',
  'lco2': 'liquid-carbon-dioxide',
  'liquid-carbon-dioxide-lco2': 'liquid-carbon-dioxide',
  'hydrogen': 'hydrogen-gas',
  'h2': 'hydrogen-gas',
  'da': 'dissolved-acetylene',
  'acetylene': 'dissolved-acetylene',
  'dissolved-acetylene-da': 'dissolved-acetylene',
  'co2-gas': 'carbon-dioxide-gas',
  'gaseous-co2': 'carbon-dioxide-gas',
  'helium': 'helium-gas',
  'he': 'helium-gas',
  'uhp-oxygen': 'high-purity-oxygen',
  'medical-oxygen': 'liquid-oxygen',
  'dry-ice': 'other'
};

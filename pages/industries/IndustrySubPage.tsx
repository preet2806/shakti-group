import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  ChevronRight,
  CheckCircle2,
  Building2,
  Boxes,
  ShieldCheck,
  ArrowRight,
  Truck,
  Flame,
  Zap,
  MapPin,
  Sparkles,
  Layers,
  Award
} from 'lucide-react';
import SEO from '../../components/SEO';

export interface IndustryPageData {
  slug: string;
  title: string;
  sectorTag: string;
  subtitle: string;
  heroImage: string;
  primaryGases: string[];
  keyImpactStats: { value: string; label: string }[];
  challengeTitle: string;
  challengeText: string;
  solutionOverview: string;
  comparisonTitle: string;
  comparisonHeaders: [string, string, string];
  comparisonRows: {
    feature: string;
    col1: string;
    col2: string;
    isCol1Better?: boolean;
  }[];
  applications: {
    title: string;
    gasUsed: string;
    purity: string;
    description: string;
    deliveryFormat: string;
  }[];
  regulatoryStandards: string[];
  seoTitle: string;
  seoDesc: string;
  keywords: string;
  alternateNames?: string[];
  targetQueries?: string[];
  deliveryCoverage?: string[];
  faqs?: { question: string; answer: string }[];
}

const INDUSTRY_DISPLAY_NAMES: Record<string, string> = {
  'metals-manufacturing': 'Metals, Steel & Fabrication',
  'glass-ceramics': 'Glass & Ceramics Manufacturing',
  'chemicals-process': 'Chemicals & Process Plants',
  'life-sciences': 'Life Sciences & Healthcare',
  'food-beverage': 'Food & Beverage Carbonation',
  'energy-infrastructure': 'Energy, Refineries & Power',
  'water-environment': 'Water Treatment & Environment',
  'electronics-semiconductor': 'Electronics & Semiconductors',
};

export const INDUSTRY_SUBPAGES_DATA: Record<string, IndustryPageData> = {
  // ----------------------------------------------------
  // METALS & MANUFACTURING (STEELMAKING, LASER, WELDING)
  // ----------------------------------------------------
  'metals-manufacturing': {
    slug: 'metals-manufacturing',
    title: 'Metals, Steelmaking & Heavy Manufacturing Gas Solutions',
    sectorTag: 'Steelmaking, Laser Cutting, Welding & Metallurgy',
    subtitle: 'High-volume industrial gas solutions for Basic Oxygen Furnaces (BOF), Electric Arc Furnaces (EAF), fiber laser cutting assist gas, and robotic welding shielding across steel mills and fabrication hubs.',
    heroImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1600',
    primaryGases: [
      'Liquid Oxygen (LOX 99.5% for Blast Furnaces & Cutting)',
      'High-Pressure Nitrogen (LIN 99.999% for Fiber Laser Assist)',
      'Liquid Argon (LAR 99.999% for Ladle Refining & TIG/MIG Shielding)',
      'Dissolved Acetylene (DA) & Propane for Oxy-Fuel Cutting',
      'Hydrogen Gas (H₂ for Bright Annealing & Heat Treatment)'
    ],
    keyImpactStats: [
      { value: '3x Speed', label: 'Fiber Laser Cutting Velocity with N₂ Assist' },
      { value: 'Oxide-Free', label: 'Dross-Free Stainless & Aluminum Edges' },
      { value: '99.999%', label: 'Ultra-Pure Argon for Ladle Steel Refining' },
      { value: '200 Bar', label: 'High-Flow MCP Quad Manifolds' }
    ],
    challengeTitle: 'Edge Oxidation, Slag Inclusions, Weld Porosity & Furnace Energy Costs',
    challengeText: 'Steel mills and fabrication facilities face tough operational hurdles: slow cutting speeds with heavy oxidation scale requiring expensive manual grinding, high fuel costs in un-enriched melting furnaces, and atmospheric nitrogen/hydrogen pickup causing embrittlement in molten steel.',
    solutionOverview: 'Shakti Group supplies bulk Liquid Oxygen (LOX) for blast furnace combustion enrichment and decarburization, ultra-pure Liquid Argon (LAR) for ladle furnace bottom stirring and degassing, and high-pressure Liquid Nitrogen (LIN) skids delivering continuous 25-30 bar assist gas for fiber laser cutting.',
    comparisonTitle: 'Laser Assist Gas Performance: High-Pressure Nitrogen (LIN) vs Oxygen Flame Cutting',
    comparisonHeaders: ['Performance Metric', 'High-Pressure Nitrogen Assist (LIN)', 'Standard Oxygen Flame Cutting'],
    comparisonRows: [
      { feature: 'Cut Edge Quality', col1: 'Oxide-free, mirror-bright cut face ready for immediate powder coating or welding', col2: 'Heavy dark oxide slag requiring mechanical deburring and acid pickling', isCol1Better: true },
      { feature: 'Cutting Speed (Stainless Steel)', col1: 'Up to 300% faster cutting speeds on thin-to-medium gauge sheets', col2: 'Slower speed constrained by exothermic iron oxidation kinetics', isCol1Better: true },
      { feature: 'Material Versatility', col1: 'Ideal for Stainless Steel (SS304/316), Aluminum alloys, Brass & Galvanized sheet', col2: 'Effective primarily on Carbon Mild Steel (MS)', isCol1Better: true },
      { feature: 'Gas Supply System', col1: 'Continuous 25-35 Bar cryogenic tank + high-pressure ambient vaporizer skid', col2: 'Standard 5-10 Bar low-pressure cylinder or pipeline supply', isCol1Better: false }
    ],
    applications: [
      {
        title: 'Steelmaking & Electric Arc Furnace (EAF / BOF) Decarburization',
        gasUsed: 'Liquid Oxygen (LOX) & Argon (LAR)',
        purity: '≥ 99.5% LOX / ≥ 99.999% LAR Grade 5.0',
        description: 'Oxygen is lanced into blast furnaces and BOF converters for fast carbon burn-off. Argon is injected through bottom porous plugs for ladle stirring, temperature homogenization, and desulfurization.',
        deliveryFormat: 'Bulk Cryogenic Road Tankers into On-site Storage Vessels (10 KL - 60 KL)'
      },
      {
        title: 'Fiber Laser Cutting Assist Gas (25 - 35 Bar)',
        gasUsed: 'High-Pressure Liquid Nitrogen (LIN)',
        purity: '≥ 99.999% Grade 5.0 (Moisture < 2 ppm, O₂ < 2 ppm)',
        description: 'Blasts away molten stainless steel and aluminum kerf at high pressure, yielding dross-free, oxide-free edges without post-cut processing.',
        deliveryFormat: 'Bulk LIN Tank + High-Pressure Vaporizer Skid (40 Bar) or 200 Bar MCP Quad Bundles'
      },
      {
        title: 'TIG & Robotic MIG Arc Welding Shielding',
        gasUsed: 'Pure Argon (LAR) & Ar/CO₂ Welding Mixtures',
        purity: '≥ 99.99% to 99.999%',
        description: 'Shields molten weld pools from atmospheric oxygen and nitrogen, preventing joint porosity, spatter, and oxidation in critical pressure vessels and structural steel.',
        deliveryFormat: '47L / 50L Seamless Cylinders (150-200 Bar) & 16-Cylinder MCP Manifold Quads'
      },
      {
        title: 'Bright Annealing & Heat Treatment Atmospheres',
        gasUsed: 'Nitrogen (N₂) + Hydrogen (H₂) Gas Blends',
        purity: 'Grade 5.0 High Purity',
        description: 'Provides a reducing, protective atmosphere in bell and continuous annealing furnaces to prevent surface decarburization and scaling on cold-rolled steel coils.',
        deliveryFormat: 'Dedicated Gas Mixing Panels with LIN Tank and Hydrogen Mobile Tube Cascades'
      }
    ],
    regulatoryStandards: [
      'AWS (American Welding Society) A5.32 specification for welding shielding gases',
      'IS 308 (Commercial Oxygen) & IS 1747 (Nitrogen) Bureau of Indian Standards',
      'IS 5760 specification for Compressed Argon and IS 308 for Dissolved Acetylene',
      'PESO compliance for on-site cryogenic storage and 200 Bar cascade systems'
    ],
    seoTitle: 'Industrial Gas for Steel Supplier & Metal Fabrication | LOX, LIN, Argon | Shakti Group',
    seoDesc: 'Leading industrial gas supplier for steel mills, foundries, and metal fabricators in India. Bulk Liquid Oxygen for blast furnaces, High-Pressure Nitrogen for laser cutting, and Argon for ladle refining & welding.',
    keywords: 'gas for steel supplier, industrial gas for steelmaking, liquid oxygen for steel furnace, argon for ladle refining, nitrogen for laser cutting assist gas, welding gas supplier India, lox supplier for steel mills Gujarat, laser cutting gas supplier Vadodara Ahmedabad',
    alternateNames: ['Gas for Steel Supplier', 'Steelmaking Industrial Gases', 'Laser Cutting Assist Gas Supplier', 'Welding Shield Gas Supplier', 'Bulk Argon for Steel Mills'],
    targetQueries: [
      'Gas for steel supplier India',
      'Liquid oxygen supplier for steel manufacturing plant Gujarat',
      'Argon gas for ladle furnace refining EAF',
      'Nitrogen assist gas for fiber laser cutting machines',
      'Industrial gas supplier for steel rolling mills Vadodara Ahmedabad',
      'Bulk liquid oxygen road tanker for steel melting'
    ],
    deliveryCoverage: ['Vadodara', 'Ahmedabad', 'Sanand', 'Surat', 'Hazira Steel Hub', 'Dahej PCPIR', 'Halol & Savli', 'Bharuch', 'Maharashtra', 'Pan-India'],
    faqs: [
      {
        question: 'What is the role of Liquid Oxygen (LOX) in steel manufacturing?',
        answer: 'Liquid Oxygen is vaporized and lanced into Basic Oxygen Furnaces (BOF) and Electric Arc Furnaces (EAF) to oxidize carbon, silicon, and impurities, accelerating heat generation and shortening tap-to-tap times.'
      },
      {
        question: 'Why do fiber laser cutting operations choose High-Pressure Nitrogen over Oxygen?',
        answer: 'High-pressure Nitrogen (20-35 bar) acts as an inert mechanical purge that expels molten metal without burning it, producing clean, shiny, oxide-free edges ready for immediate welding or powder coating.'
      },
      {
        question: 'Do you supply on-site storage tanks and high-pressure vaporization skids for laser cutting?',
        answer: 'Yes. Shakti Group installs turnkey on-site cryogenic storage tanks (3 KL to 30 KL) equipped with 40-bar high-pressure ambient vaporizers and automated telemetry on an attractive opex/rental model.'
      }
    ]
  },

  // ----------------------------------------------------
  // GLASS & CERAMICS (OXY-FUEL, FRIT KILNS, FLOAT GLASS)
  // ----------------------------------------------------
  'glass-ceramics': {
    slug: 'glass-ceramics',
    title: 'Glass & Ceramics Industrial Gas Solutions',
    sectorTag: 'Oxy-Fuel Glass Melting, Ceramic Sintering & Frit Kilns',
    subtitle: 'Bulk Liquid Oxygen (LOX) for energy-efficient oxy-fuel glass melting, high-purity Nitrogen and Hydrogen for float glass tin baths, and specialty combustion gases for ceramic tile kilns.',
    heroImage: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=1600',
    primaryGases: [
      'Liquid Oxygen (LOX ≥ 99.5% for Oxy-Fuel Combustion & Frit Kilns)',
      'High-Purity Nitrogen (LIN ≥ 99.999% for Float Glass Tin Bath Blanketing)',
      'Hydrogen Gas (H₂ for Reducing Atmosphere in Float Glass)',
      'Propane & Compressed Natural Gas for Lehr Annealing & Polishing'
    ],
    keyImpactStats: [
      { value: '30% Less', label: 'Fuel Consumption with Oxy-Fuel Combustion' },
      { value: '80% Cut', label: 'NOx Emission Reduction vs Air-Fuel Burners' },
      { value: '99.999%', label: 'Nitrogen Purity for Float Glass Tin Bath' },
      { value: '270 TPD', label: 'Multi-Plant Cryogenic Production Capacity' }
    ],
    challengeTitle: 'High Fuel Consumption, High NOx Emissions & Defect Rates in Melting',
    challengeText: 'Glass and ceramic manufacturers face escalating natural gas and fuel costs, strict environmental caps on nitrogen oxide (NOx) emissions, and surface defect risks caused by furnace temperature fluctuations and oxidation in float glass tin baths.',
    solutionOverview: 'Shakti Group delivers bulk Liquid Oxygen (LOX) for oxy-fuel combustion and oxygen-enriched air burning—slashing natural gas usage by up to 30% and NOx emissions by up to 80%—alongside ultra-pure Nitrogen/Hydrogen protective atmospheres for float glass manufacturing.',
    comparisonTitle: 'Glass Melting Technology: Oxy-Fuel LOX Combustion vs Standard Air-Fuel Combustion',
    comparisonHeaders: ['Operational Parameter', 'Oxy-Fuel LOX Melting (LOX + Natural Gas)', 'Standard Air-Fuel Combustion (Air + Natural Gas)'],
    comparisonRows: [
      { feature: 'Thermal Efficiency', col1: 'High thermal efficiency; 100% of heat transferred directly without heating ballast nitrogen', col2: 'Low thermal efficiency; 78% of air is inert nitrogen that absorbs and wastes heat up the stack', isCol1Better: true },
      { feature: 'Fuel Consumption', col1: 'Reduces natural gas / furnace oil consumption by 20% - 35%', col2: 'High fuel consumption due to large exhaust flue gas volume', isCol1Better: true },
      { feature: 'NOx Emissions', col1: 'Drastically reduces thermal NOx formation by up to 80%', col2: 'High thermal NOx emissions requiring costly De-NOx SCR scrubbers', isCol1Better: true },
      { feature: 'Melting Pull Rate', col1: 'Increases furnace pull rate & glass production capacity by 15-25%', col2: 'Standard baseline furnace throughput', isCol1Better: true }
    ],
    applications: [
      {
        title: 'Oxy-Fuel Glass Melting & Furnace Oxygen Enrichment',
        gasUsed: 'Liquid Oxygen (LOX)',
        purity: '≥ 99.5% Industrial Liquid Oxygen',
        description: 'Replaces combustion air with pure oxygen in container glass, tableware, and specialty glass furnaces, elevating flame temperature and cutting fuel consumption.',
        deliveryFormat: 'Bulk Cryogenic Road Tankers into On-site Vacuum Insulated Vessels (10 KL - 60 KL)'
      },
      {
        title: 'Float Glass Tin Bath Atmosphere (N₂ + H₂ Blanketing)',
        gasUsed: 'High-Purity Nitrogen (LIN) & Hydrogen (H₂)',
        purity: 'Grade 5.0 (99.999% N₂, O₂ < 2 ppm, Moisture < 2 ppm)',
        description: 'Maintains a protective non-oxidizing atmosphere over the molten tin bath where flat glass ribbons float, preventing tin oxidation and surface dross.',
        deliveryFormat: 'Dedicated On-site LIN Storage + Vaporizer System + Hydrogen Mobile Cascades'
      },
      {
        title: 'Ceramic Frit Kilns & Tile Sintering Enrichment',
        gasUsed: 'Liquid Oxygen (LOX)',
        purity: '≥ 99.5%',
        description: 'Oxygen enrichment boosts burner efficiency in rotary ceramic frit kilns, accelerating raw material melting and improving glaze homogeneity.',
        deliveryFormat: 'Bulk LOX Storage Tank with Automated Flow Control Skids'
      },
      {
        title: 'Glassware Fire Polishing & Lehr Annealing',
        gasUsed: 'Oxygen (LOX) + Propane / Hydrogen',
        purity: 'High Purity',
        description: 'Precision oxy-gas burners remove mold seams and micro-surface imperfections on glass bottles, tableware, and optical lenses.',
        deliveryFormat: 'High-Flow Cylinder Packs or Direct Bulk Cryogenic Line'
      }
    ],
    regulatoryStandards: [
      'Pollution Control Board (CPCB / GPCB) NOx emission abatement norms',
      'IS 308 specification for Commercial Liquid Oxygen',
      'PESO approval for cryogenic vessel installation at glass plants',
      'ISO 9001:2015 certified gas manufacturing and logistics'
    ],
    seoTitle: 'LOX for Ceramic & Glass Supplier India | Oxy-Fuel Glass Melting Gases | Shakti Group',
    seoDesc: 'Reliable Liquid Oxygen (LOX) supplier for glass and ceramic manufacturers in India. High-efficiency oxy-fuel glass melting, ceramic frit kilns, and float glass N2/H2 atmospheres across Gujarat and Morbi.',
    keywords: 'lox for ceramic glass, liquid oxygen for glass furnace, oxy fuel glass melting gas, glass industry oxygen supplier India, ceramic frit kiln oxygen enrichment, float glass nitrogen hydrogen supplier, bulk lox Morbi ceramic cluster, industrial gas glass manufacturing Gujarat',
    alternateNames: ['LOX for Ceramic and Glass', 'Oxy-Fuel Glass Melting Gas', 'Ceramic Kiln Oxygen Supplier', 'Float Glass Nitrogen Atmosphere', 'Bulk LOX for Glass Plants'],
    targetQueries: [
      'LOX for ceramic glass manufacturing India',
      'Oxy-fuel combustion liquid oxygen for glass furnace',
      'Liquid oxygen supplier for ceramic frit kilns Gujarat Morbi',
      'Nitrogen hydrogen float glass tin bath atmosphere supplier',
      'Bulk liquid oxygen road tanker for glass manufacturing',
      'Industrial gas supplier for Morbi ceramic tile cluster'
    ],
    deliveryCoverage: ['Morbi Ceramic Cluster', 'Vadodara', 'Bharuch & Dahej', 'Ahmedabad', 'Surat', 'Jaipur Glass Hub', 'Firozabad Glass Cluster', 'Pan-India'],
    faqs: [
      {
        question: 'Why is Liquid Oxygen (LOX) essential for oxy-fuel glass melting?',
        answer: 'Replacing atmospheric combustion air with pure Liquid Oxygen eliminates 78% inert nitrogen ballast from the furnace. This raises flame temperatures, enhances radiant heat transfer to the glass batch, cuts fuel consumption by 25-35%, and slashes thermal NOx emissions by up to 80%.'
      },
      {
        question: 'What gas mixture is required for float glass tin bath blanketing?',
        answer: 'Float glass production requires a protective atmosphere composed of 90-95% ultra-pure Nitrogen (99.999%) and 5-10% Hydrogen. This prevents the molten tin bath from oxidizing, which would cause severe optical defects in the glass ribbon.'
      },
      {
        question: 'How does Shakti Group ensure continuous LOX supply to high-temperature glass furnaces?',
        answer: 'Glass furnaces operate 24/7/365 and cannot afford cooling shutdowns. Shakti Group deploys dedicated cryogenic on-site storage vessels with dual telemetry, redundant vaporization systems, and a priority 270 TPD road tanker logistics fleet to guarantee 100% uptime.'
      }
    ]
  },

  // ----------------------------------------------------
  // CHEMICALS & PROCESS (INERTING, SYNTHESIS, HYDROGEN)
  // ----------------------------------------------------
  'chemicals-process': {
    slug: 'chemicals-process',
    title: 'Chemical & Process Industries Gas Solutions',
    sectorTag: 'Chemical Synthesis, Inerting, Blanketing & Process Plants',
    subtitle: 'Ultra-pure Nitrogen for reactor blanketing, Liquid Nitrogen cryo-cooling (-196°C), mobile Hydrogen tube cascades for hydro-processing, and specialty calibration standards.',
    heroImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1600',
    primaryGases: [
      'High-Purity Nitrogen (LIN ≥ 99.999% for Reactor Blanketing & Inerting)',
      'Compressed Hydrogen (H₂ 200 Bar for Catalytic Hydrogenation)',
      'Liquid Nitrogen (-196°C for Cryo Reactions & VOC Condensation)',
      'Specialty Calibration Gas Mixtures for GC & CEMS Analyzers',
      'Chlorine & Anhydrous Ammonia for Synthesis'
    ],
    keyImpactStats: [
      { value: '< 2 PPM', label: 'Oxygen Purity in Nitrogen Blanketing' },
      { value: 'Grade 6.0', label: 'Ultra-High Purity Specialty Standards' },
      { value: '200 Bar', label: 'Hydrogen Mobile Tube Cascade Pressure' },
      { value: '-196°C', label: 'Cryogenic Reaction Cooling Capability' }
    ],
    challengeTitle: 'Explosion Hazards, Solvent Oxidation & Process Analytical Drift',
    challengeText: 'Chemical process plants handling volatile organic compounds (VOCs) and flammable solvents face severe fire and explosion risks in storage vessel headspaces. Catalytic hydrogenation requires steady high-pressure hydrogen, and strict environmental CEMS monitors require traceable span gases.',
    solutionOverview: 'Shakti Group delivers automated nitrogen inerting systems to maintain oxygen levels well below limiting oxygen concentration (LOC), mobile hydrogen tube cascades for continuous chemical reduction, and liquid nitrogen for cryogenic VOC condensation.',
    comparisonTitle: 'Reactor Atmospheric Protection: Nitrogen Inerting vs Unpurged Ambient Air',
    comparisonHeaders: ['Safety & Quality Metric', 'Nitrogen Blanketing System (LIN)', 'Unpurged Ambient Air Atmosphere'],
    comparisonRows: [
      { feature: 'Explosion Hazard', col1: 'Eliminated completely; oxygen content suppressed below 2-4%', col2: 'Extreme explosion risk from solvent vapors ignited by static sparks', isCol1Better: true },
      { feature: 'Chemical Yield & Color', col1: 'Zero oxidation; preserves chemical purity, yield and water-white color', col2: 'Severe discoloration, polymerization, and product degradation', isCol1Better: true },
      { feature: 'Moisture Control', col1: 'Ultra-dry dew point (-70°C) prevents moisture-sensitive side reactions', col2: 'Atmospheric humidity contaminates catalysts and reacts with reagents', isCol1Better: true }
    ],
    applications: [
      {
        title: 'Reactor Vessel Inerting, Blanketing & Pressure Purging',
        gasUsed: 'Nitrogen (LIN / High-Purity Gaseous N₂)',
        purity: '≥ 99.999% Grade 5.0',
        description: 'Displaces air in chemical batch reactors, distillation columns, and storage tanks to maintain safe non-flammable headspaces.',
        deliveryFormat: 'Bulk Liquid Cryogenic Storage Tank + Ambient Vaporizer Skid'
      },
      {
        title: 'Catalytic Hydrogenation & Organic Synthesis',
        gasUsed: 'Compressed Hydrogen (H₂)',
        purity: '≥ 99.99% to 99.999%',
        description: 'High-pressure hydrogen feed for reduction of nitro-compounds, hydrogenation of oils, and pharmaceutical intermediate synthesis.',
        deliveryFormat: 'Mobile Tube Cascades (1,500 - 4,500 m³ @ 200 Bar) & MCP Quad Bundles'
      },
      {
        title: 'Cryogenic Reaction Cooling & VOC Condensation',
        gasUsed: 'Liquid Nitrogen (LIN at -196°C)',
        purity: '≥ 99.999%',
        description: 'Direct and indirect cryogenic cooling for low-temperature organometallic reactions and condensing volatile solvent vapors before venting.',
        deliveryFormat: 'Bulk Cryogenic Road Tankers into Vacuum Insulated Storage Vessels'
      }
    ],
    regulatoryStandards: [
      'ISO 9001:2015 Quality Management System for chemical raw materials',
      'PESO Static and Mobile Pressure Vessels (Unfired) Rules',
      'OISD and CCPS process safety management inerting guidelines',
      'NIST/NABL traceability for calibration gas standards'
    ],
    seoTitle: 'Chemical & Process Industry Gas Solutions | Nitrogen Blanketing, Hydrogen | Shakti Group',
    seoDesc: 'Comprehensive industrial gas solutions for chemical and petrochemical plants in India. Nitrogen for reactor blanketing, mobile Hydrogen cascades, and cryogenic VOC recovery across Dahej, Ankleshwar & Gujarat.',
    keywords: 'nitrogen for reactor blanketing, chemical process gas supplier India, industrial hydrogen tube cascade Dahej, chemical plant nitrogen supplier Ankleshwar, cryogenic VOC recovery liquid nitrogen, specialty calibration gas chemical industry',
    alternateNames: ['Chemical Process Gases', 'Nitrogen Reactor Blanketing Supplier', 'Hydrogen Tube Cascades for Chemicals', 'Cryogenic Inerting Gas Solutions'],
    targetQueries: [
      'Nitrogen for reactor blanketing supplier India',
      'Industrial gas supplier for chemical plant Dahej Ankleshwar',
      'Hydrogen tube cascade supplier for chemical hydrogenation',
      'Liquid nitrogen supplier for low temperature chemical reactions',
      'Bulk nitrogen tanker delivery for chemical manufacturing Gujarat'
    ],
    deliveryCoverage: ['Dahej PCPIR', 'Ankleshwar Chemical Zone', 'Vadodara', 'Vapi', 'Hazira', 'Panoli', 'Jhagadia', 'Maharashtra', 'Pan-India'],
    faqs: [
      {
        question: 'Why is high-purity Nitrogen used for chemical reactor blanketing?',
        answer: 'Nitrogen is inert and non-reactive. Injecting it into chemical reactors and storage tanks displaces oxygen and moisture, eliminating the combustion triangle and preventing solvent oxidation and static ignition.'
      },
      {
        question: 'How do mobile Hydrogen tube cascades serve chemical processing units?',
        answer: 'Our mobile tube cascades hold 1,500m³ to 4,500m³ of high-pressure hydrogen at 200 bar. They park at your decanting bay and connect to an automated pressure regulating skid, delivering seamless high-volume hydrogen without manual cylinder handling.'
      }
    ]
  },

  // ----------------------------------------------------
  // LIFE SCIENCES & HEALTHCARE (MEDICAL OXYGEN, PHARMA)
  // ----------------------------------------------------
  'life-sciences': {
    slug: 'life-sciences',
    title: 'Life Sciences, Healthcare & Pharmaceutical Gas Solutions',
    sectorTag: 'Medical Oxygen IP, Pharma API Synthesis & Cryo-Banking',
    subtitle: 'Indian Pharmacopoeia (IP) certified Medical Liquid Oxygen for hospitals, ultra-pure cGMP Nitrogen for pharmaceutical API synthesis, and Liquid Nitrogen for biological cryo-preservation.',
    heroImage: 'https://images.unsplash.com/photo-1578496479914-7ef3b0193be3?auto=format&fit=crop&q=80&w=1600',
    primaryGases: [
      'Medical Liquid Oxygen (LOX IP Grade ≥ 99.5% for Hospital Pipelines)',
      'Pharma Grade High-Purity Nitrogen (LIN ≥ 99.999% for API & Sterilization)',
      'Specialty Helium (He Grade 5.5 for MRI Superconducting Magnets)',
      'Medical Nitrous Oxide (N₂O IP for Anesthesia & Surgery)'
    ],
    keyImpactStats: [
      { value: 'IP Grade', label: 'Indian Pharmacopoeia & FDA Drug Licensed' },
      { value: 'Grade 5.5', label: 'Helium Purity for Hospital MRI Scanners' },
      { value: '-196°C', label: 'Liquid Nitrogen Bio-Sample Cryo Banking' },
      { value: '24/7/365', label: 'Dedicated Hospital Emergency Dispatch Fleet' }
    ],
    challengeTitle: 'Strict Pharmacopoeia Compliance, Sterility & Zero Supply Disruption',
    challengeText: 'Hospitals and pharmaceutical manufacturing facilities cannot tolerate impurity spikes or delivery delays. ICU ventilators require uncompromised medical oxygen purity, while cGMP pharmaceutical API production requires certified moisture-free inert atmospheres.',
    solutionOverview: 'Shakti Group operates dedicated medical oxygen production and distribution networks backed by State FDA drug licenses, Indian Pharmacopoeia (IP) certifications, hospital storage tank installations with telemetry, and validated pharma gas packaging.',
    comparisonTitle: 'Hospital Oxygen Infrastructure: Cryogenic LOX Storage vs High-Pressure Cylinder Banks',
    comparisonHeaders: ['Infrastructure Parameter', 'Bulk Cryogenic Medical LOX Storage Vessel', 'Individual High-Pressure Medical Cylinder Banks'],
    comparisonRows: [
      { feature: 'Supply Reliability & Continuity', col1: 'Continuous automatic pipeline feed; zero pressure fluctuation in ICUs and Operation Theatres', col2: 'Manual cylinder changeovers required; high risk of human error and pressure drops', isCol1Better: true },
      { feature: 'Storage Footprint & Logistics', col1: 'One compact outdoor cryogenic tank replaces hundreds of heavy cylinders', col2: 'Requires large dedicated storage room and frequent cylinder handling labor', isCol1Better: true },
      { feature: 'Safety & Telemetry Monitoring', col1: 'Real-time digital level and pressure telemetry automatically alerts dispatch', col2: 'Manual visual inspection of mechanical pressure gauges by hospital staff', isCol1Better: true }
    ],
    applications: [
      {
        title: 'Hospital Central Medical Gas Pipeline System (MGPS)',
        gasUsed: 'Medical Liquid Oxygen (IP Grade LOX)',
        purity: 'Indian Pharmacopoeia (IP) ≥ 99.5%',
        description: 'Powers central hospital pipelines, neonatal ICUs, trauma centers, and surgical suites with uninterrupted medical oxygen.',
        deliveryFormat: 'Dedicated Insulated Cryogenic Tankers + On-Site Hospital Storage Tanks (3 KL - 20 KL)'
      },
      {
        title: 'Pharma API Synthesis, Lyophilization & Sterile Packaging',
        gasUsed: 'High-Purity Pharma Nitrogen (LIN)',
        purity: '≥ 99.999% Grade 5.0 (cGMP Validated)',
        description: 'Inert blanket for sterile packaging, moisture removal during freeze-drying (lyophilization), and dry powder micronization.',
        deliveryFormat: 'Bulk Liquid Vessels & Certified High-Purity Cylinder Packs'
      },
      {
        title: 'Biological Sample & Stem Cell Cryo-Preservation',
        gasUsed: 'Liquid Nitrogen (LIN at -196°C)',
        purity: '≥ 99.999%',
        description: 'Maintains vaccines, biological specimens, stem cells, and cord blood viable for decades in ultra-low temperature dewars.',
        deliveryFormat: 'Vacuum Insulated Liquid Dewars & Bulk Tanks'
      }
    ],
    regulatoryStandards: [
      'Indian Pharmacopoeia (IP) Drug License issued by State FDA',
      'Central Drugs Standard Control Organisation (CDSCO) regulations',
      'ISO 13485 & ISO 9001:2015 Quality Management Systems',
      'HTM 02-01 & NFPA 99 Medical Gas Pipeline System standards'
    ],
    seoTitle: 'Medical Oxygen IP & Pharma Gas Solutions | Hospital Cryogenic Tanks | Shakti Group',
    seoDesc: 'Indian Pharmacopoeia (IP) certified Medical Liquid Oxygen supplier for hospitals and healthcare institutions in India. Ultra-pure Nitrogen for pharma API synthesis and Liquid Nitrogen for bio-banking.',
    keywords: 'medical oxygen supplier India, medical liquid oxygen IP grade, hospital oxygen cryogenic tank rental, pharma grade nitrogen supplier Gujarat, liquid nitrogen for bio banking, medical gas pipeline supplier Vadodara Ahmedabad',
    alternateNames: ['Medical Oxygen IP Supplier', 'Hospital Cryogenic Oxygen Tank Supplier', 'Pharmaceutical Nitrogen Supplier', 'Healthcare Industrial Gases'],
    targetQueries: [
      'Medical oxygen IP supplier Gujarat hospitals',
      'Medical liquid oxygen cryogenic road tanker delivery',
      'Hospital central oxygen pipeline storage tank rental',
      'Pharma grade ultra pure nitrogen supplier for API synthesis',
      'Liquid nitrogen supplier for bio banking cryo preservation'
    ],
    deliveryCoverage: ['Vadodara', 'Ahmedabad', 'Surat', 'Rajkot', 'Ankleshwar Pharma Hub', 'Bharuch', 'Maharashtra', 'Pan-India'],
    faqs: [
      {
        question: 'Are Shakti Group medical gases licensed by the FDA and Indian Pharmacopoeia (IP)?',
        answer: 'Yes. Our Medical Liquid Oxygen is manufactured and packaged under valid Drug Licenses issued by the Food and Drugs Control Administration (FDCA) and complies 100% with Indian Pharmacopoeia (IP) monographs.'
      },
      {
        question: 'Can you install an on-site Medical Oxygen tank at our hospital on a rental basis?',
        answer: 'Yes. We provide turnkey hospital cryogenic oxygen installations (3 KL to 20 KL vessels) including foundation engineering, dual ambient vaporizers, auto-changeover control panels, and digital telemetry on an affordable opex/rental model.'
      }
    ]
  },

  // ----------------------------------------------------
  // FOOD & BEVERAGE (CARBONATION, FLASH FREEZING, MAP)
  // ----------------------------------------------------
  'food-beverage': {
    slug: 'food-beverage',
    title: 'Food & Beverage Industrial Gas Applications',
    sectorTag: 'Beverage Carbonation, Cryogenic Freezing, MAP & Cold-Chain',
    subtitle: 'FSSAI certified Food-Grade Liquid CO₂ (E290) for soft drink carbonation, Liquid Nitrogen for flash freezing, MAP gas blends for shelf-life extension, and solid Dry Ice for cold-chain transit.',
    heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600',
    primaryGases: [
      'Food-Grade Liquid CO₂ (E290 ≥ 99.9% for Beverage Carbonation)',
      'Food-Grade Liquid Nitrogen (LIN for Flash Freezing & Liquid Dosing)',
      'Solid CO₂ Dry Ice (High-Density Pellets & Slices at -78.5°C)',
      'Modified Atmosphere Packaging (MAP) Gas Blends (N₂ / CO₂ / O₂)'
    ],
    keyImpactStats: [
      { value: 'FSSAI E290', label: 'Food-Safety Certified Beverage Carbonation' },
      { value: '-196°C', label: 'Ultra-Fast Flash Freezing (Zero Drip Loss)' },
      { value: '2x - 4x', label: 'Shelf-Life Extension via MAP Packaging' },
      { value: '-78.5°C', label: 'Dry Ice Non-Melting Cold Chain Transit' }
    ],
    challengeTitle: 'Food Spoilage, Cellular Texture Loss in Freezing & Carbonation Purity',
    challengeText: 'Food and beverage processors face major challenges: bacterial spoilage and oxidation in packaged foods, texture destruction and drip loss caused by slow mechanical freezing, and off-flavors from sub-standard carbonation gases.',
    solutionOverview: 'Shakti Group provides certified FSSAI/ISBT food-grade Liquid CO₂ for crisp beverage carbonation, Liquid Nitrogen cryogenic immersion tunnel freezing that prevents cellular damage, and precision Modified Atmosphere Packaging (MAP) gas mixtures.',
    comparisonTitle: 'Food Preservation: Cryogenic Liquid Nitrogen Freezing vs Mechanical Blast Freezing',
    comparisonHeaders: ['Preservation Quality', 'Cryogenic Liquid Nitrogen Freezing (-196°C)', 'Mechanical Blast Freezing (-30°C to -40°C)'],
    comparisonRows: [
      { feature: 'Freezing Velocity', col1: 'Ultra-fast flash freezing in minutes; locks in moisture and flavor immediately', col2: 'Slow freezing over hours; moisture migrates and forms damaging large crystals', isCol1Better: true },
      { feature: 'Cellular Structure & Drip Loss', col1: 'Forms microscopic ice crystals; zero cellular rupture and near-zero drip loss on thawing', col2: 'Large needle-like ice crystals rupture cell walls, causing heavy moisture and nutrient drip loss', isCol1Better: true },
      { feature: 'Equipment Footprint', col1: 'Compact in-line cryogenic tunnel or spiral freezer requiring minimal floor area', col2: 'Massive insulated blast freezer rooms with heavy mechanical compressor maintenance', isCol1Better: true }
    ],
    applications: [
      {
        title: 'Soft Drink, Sparkling Water & Craft Beer Carbonation',
        gasUsed: 'Food-Grade Liquid CO₂ (E290)',
        purity: '≥ 99.9% (ISBT & FSSAI Compliant, Hydrocarbons < 5 ppm)',
        description: 'Delivers pure, odorless carbonation bubbles for soft drinks, sodas, sparkling waters, and brewery kegging lines.',
        deliveryFormat: 'Dedicated Insulated LCO₂ Road Tankers (12-30 MT) or Cylinder Manifolds'
      },
      {
        title: 'Cryogenic Flash Freezing & Liquid Nitrogen Dosing',
        gasUsed: 'Food-Grade Liquid Nitrogen (LIN)',
        purity: '≥ 99.99% Food Grade',
        description: 'Flash freezes ready meals, seafood, meat, berries, and bakery products. Liquid nitrogen drops pressurize PET bottles and aluminum beverage cans.',
        deliveryFormat: 'Bulk Liquid Nitrogen Storage Tank + Vacuum Insulated Cryo Piping'
      },
      {
        title: 'Modified Atmosphere Packaging (MAP)',
        gasUsed: 'Food-Grade N₂ / CO₂ Gas Blends',
        purity: 'FSSAI Food Additive Certified',
        description: 'Displaces atmospheric oxygen in snack pouches, fresh meat trays, and dairy packaging to inhibit aerobic bacterial growth.',
        deliveryFormat: 'Premixed High-Pressure Cylinders or On-Site Proportional Gas Blenders'
      },
      {
        title: 'Temperature-Controlled Cold-Chain Transit',
        gasUsed: 'High-Density Dry Ice (Solid CO₂ Pellets / Slices)',
        purity: 'Food Grade at -78.5°C',
        description: 'Sublimates directly into gas without liquid mess, maintaining frozen ice cream, meat, and airline catering cold during transit.',
        deliveryFormat: 'Insulated Polyethylene Bins (3mm, 10mm, 16mm pellets and 1 kg slices)'
      }
    ],
    regulatoryStandards: [
      'FSSAI (Food Safety and Standards Authority of India) License',
      'ISBT (International Society of Beverage Technologists) CO₂ quality guidelines',
      'EIGA (European Industrial Gases Association) Food Gas standard',
      'ISO 22000 Food Safety Management System'
    ],
    seoTitle: 'Food Grade Liquid CO2 E290 & Liquid Nitrogen Freezing | Shakti Group',
    seoDesc: 'FSSAI certified food-grade Liquid CO2 (E290) for beverage carbonation, Liquid Nitrogen for flash freezing, and dry ice for cold-chain shipping across Gujarat & India.',
    keywords: 'food grade liquid co2 supplier India, beverage carbonation co2 e290, liquid nitrogen food freezing, modified atmosphere packaging gases, dry ice supplier Gujarat, fssai certified food gases, lco2 road tanker soft drink carbonation',
    alternateNames: ['Food Grade Liquid CO2 E290', 'Beverage Carbonation Gas', 'Liquid Nitrogen Food Freezing', 'MAP Packaging Gas Supplier', 'Dry Ice Cold Chain Supplier'],
    targetQueries: [
      'Food grade liquid CO2 E290 supplier India',
      'Liquid CO2 bulk delivery for soft drink carbonation',
      'Liquid nitrogen flash freezing supplier for seafood ready meals',
      'Modified atmosphere packaging gas supplier Gujarat',
      'Dry ice pellets manufacturer and supplier near me'
    ],
    deliveryCoverage: ['Vadodara', 'Ahmedabad', 'Surat', 'Ankleshwar', 'Rajkot', 'Sanand', 'Maharashtra', 'Madhya Pradesh', 'Pan-India'],
    faqs: [
      {
        question: 'Is your Liquid CO2 certified for food and beverage carbonation in India?',
        answer: 'Yes. Our Liquid Carbon Dioxide is manufactured under FSSAI license and meets stringent ISBT (International Society of Beverage Technologists) and CGA guidelines with purity ≥ 99.9% and moisture < 20 ppm.'
      },
      {
        question: 'What is the benefit of Liquid Nitrogen droplet dosing in beverage bottling?',
        answer: 'A micro-droplet of Liquid Nitrogen injected into a bottle or can just before capping vaporizes and expands 700-fold, creating internal positive pressure that strengthens lightweight PET bottles and displaces residual headspace oxygen.'
      }
    ]
  },

  // ----------------------------------------------------
  // ENERGY & INFRASTRUCTURE (REFINERY, PIPELINE, SF6)
  // ----------------------------------------------------
  'energy-infrastructure': {
    slug: 'energy-infrastructure',
    title: 'Energy, Power & Infrastructure Industrial Gas Solutions',
    sectorTag: 'Oil & Gas Refineries, Power Generation, Pipelines & Substation GIS',
    subtitle: 'High-volume high-flow Nitrogen purging for refinery turnarounds, pipeline hydrostatic drying, Sulfur Hexafluoride (SF₆) for GIS switchgear, and Hydrogen for power generator cooling.',
    heroImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1600',
    primaryGases: [
      'Liquid Nitrogen (LIN for High-Flow Refinery Purging & Pipeline Drying)',
      'Sulfur Hexafluoride (SF₆ Dielectric Gas for High-Voltage GIS Substations)',
      'High-Pressure Hydrogen (H₂ for Turbogenerator Rotor Cooling & Energy)',
      'Specialty Span Calibration Gases for CEMS Stack Analyzers'
    ],
    keyImpactStats: [
      { value: '5,000 Nm³/h', label: 'Mobile High-Flow Nitrogen Pumper Units' },
      { value: '300 Bar', label: 'High-Pressure Pipeline Testing Capability' },
      { value: 'IEC 60376', label: 'SF₆ Electrical Grade Dielectric Compliance' },
      { value: '-70°C', label: 'Ultra-Dry Nitrogen Dew Point for Drying' }
    ],
    challengeTitle: 'Flammable Hydrocarbon Hazards, Moisture Ingress & High-Voltage Arcing',
    challengeText: 'Refinery shutdowns and maintenance turnarounds require fast, safe displacement of volatile hydrocarbons before hot work permits can be issued. Electrical substations require ultra-dry dielectric SF₆ gas to prevent catastrophic switchgear flashovers.',
    solutionOverview: 'Shakti Group mobilizes heavy-duty cryogenic nitrogen pumpers for rapid refinery vessel inerting and pipeline pigging, delivers certified SF₆ gas for high-voltage gas-insulated substations (GIS), and supplies high-conductivity hydrogen for turbine cooling.',
    comparisonTitle: 'Pipeline Purging & Drying: High-Flow Cryogenic Nitrogen vs Atmospheric Compressed Air',
    comparisonHeaders: ['Purging & Safety Parameter', 'High-Flow Cryogenic Nitrogen Purge (LIN)', 'Compressed Atmospheric Air'],
    comparisonRows: [
      { feature: 'Combustion Safety & Inertness', col1: '100% Inert; completely eliminates flammable fuel-air-oxygen explosion risks', col2: 'Contains 21% Oxygen; severe explosion risk when mixed with residual hydrocarbons', isCol1Better: true },
      { feature: 'Moisture Content & Dew Point', col1: 'Ultra-dry dew point (-60°C to -70°C); dries pipelines rapidly to avoid internal corrosion', col2: 'High moisture and ambient humidity that causes condensation and pipeline rust', isCol1Better: true },
      { feature: 'Purge Flow Rate & Speed', col1: 'Mobile vaporizers deliver up to 5,000 Nm³/hour, completing shutdowns in hours', col2: 'Limited by air compressor capacity, requiring days of drying time', isCol1Better: true }
    ],
    applications: [
      {
        title: 'Refinery Turnaround Inerting & Reactor Catalyst Cooling',
        gasUsed: 'Liquid Nitrogen (LIN / High-Flow N₂)',
        purity: '≥ 99.99% Industrial Grade',
        description: 'Rapidly purges catalytic crackers, hydrocarbon pipelines, and storage tanks during scheduled shutdowns and emergency turnarounds.',
        deliveryFormat: 'Mobile Cryogenic Tankers with High-Flow Pumping Vaporizer Skids'
      },
      {
        title: 'High-Voltage GIS Electrical Switchgear Insulation',
        gasUsed: 'Sulfur Hexafluoride (SF₆ Gas)',
        purity: '≥ 99.9% Dielectric Grade (IEC 60376 Compliant)',
        description: 'Provides superior dielectric insulation and arc-quenching capability in high-voltage gas-insulated substations (GIS) and circuit breakers.',
        deliveryFormat: 'Specialty High-Pressure Cylinders & Recovery Tonners'
      },
      {
        title: 'Power Turbogenerator Rotor Hydrogen Cooling',
        gasUsed: 'High-Purity Hydrogen Gas (H₂)',
        purity: '≥ 99.99%',
        description: 'Leverages hydrogen’s high thermal conductivity and low density to cool large thermal and nuclear power plant generator rotors with minimal windage loss.',
        deliveryFormat: 'High-Pressure Hydrogen Mobile Tube Cascades (200 Bar) & MCP Bundles'
      }
    ],
    regulatoryStandards: [
      'OISD (Oil Industry Safety Directorate) pipeline purging & testing norms',
      'IEC 60376 and IS 13072 specifications for electrical grade SF₆ gas',
      'PESO Static and Mobile Pressure Vessels (Unfired) Rules',
      'ISO 9001:2015 certified engineering and fleet logistics'
    ],
    seoTitle: 'Refinery Nitrogen Purging & Energy Gas Solutions | SF6, Hydrogen | Shakti Group',
    seoDesc: 'High-flow Nitrogen purging for oil refinery turnarounds and pipeline drying, SF6 dielectric gas for electrical GIS switchgear, and Hydrogen for power generation across India.',
    keywords: 'nitrogen purging services India, refinery turnaround nitrogen supply, sf6 gas supplier for GIS switchgear, pipeline drying nitrogen, hydrogen for power plant generator cooling, high flow nitrogen pumper Gujarat',
    alternateNames: ['Refinery Nitrogen Purging Services', 'Pipeline Nitrogen Drying Gas', 'SF6 Gas for GIS Substations', 'Power Plant Hydrogen Cooling'],
    targetQueries: [
      'Nitrogen purging services for refinery turnaround India',
      'SF6 gas cylinder supplier for GIS electrical switchgear',
      'Pipeline hydrostatic pressure testing nitrogen supplier Gujarat',
      'High flow mobile nitrogen pumper rental for industrial purging',
      'Hydrogen gas supplier for power plant turbine cooling'
    ],
    deliveryCoverage: ['Jamnagar Refinery Hub', 'Dahej PCPIR', 'Hazira', 'Vadodara', 'Ankleshwar', 'Maharashtra', 'Pan-India'],
    faqs: [
      {
        question: 'How quickly can Shakti Group mobilize Nitrogen pumpers for refinery turnarounds?',
        answer: 'We maintain dedicated mobile high-flow ambient and steam-heated vaporization units capable of delivering up to 5,000 Nm³/hr at pressures up to 300 bar, deployable on short notice across Western and Central India.'
      },
      {
        question: 'Does your SF6 gas comply with IEC 60376 standards for electrical switchgear?',
        answer: 'Yes. Our Sulfur Hexafluoride gas is certified to IEC 60376 and IS 13072 standards with moisture < 15 ppm and purity ≥ 99.9% for high-voltage gas-insulated substations (GIS).'
      }
    ]
  },

  // ----------------------------------------------------
  // WATER TREATMENT & ENVIRONMENT (LOX OZONATION, LCO2 pH)
  // ----------------------------------------------------
  'water-environment': {
    slug: 'water-environment',
    title: 'Water Treatment & Environmental Gas Solutions',
    sectorTag: 'Ozone Generation, Wastewater Treatment, ETP/STP & pH Balancing',
    subtitle: 'High-purity Liquid Oxygen (LOX) for heavy-duty ozone generation and wastewater biological aeration, alongside Liquid Carbon Dioxide (LCO₂) for eco-friendly effluent pH neutralization.',
    heroImage: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=1600',
    primaryGases: [
      'Liquid Oxygen (LOX ≥ 99.5% for High-Efficiency Ozone Generation)',
      'Liquid Carbon Dioxide (LCO₂ for Effluent pH Neutralization & Balancing)',
      'Chlorine Gas (Cl₂ 900kg Tonners for Municipal Drinking Water Disinfection)',
      'Specialty Calibration Gas Mixtures for Stack CEMS & Water Quality Analyzers'
    ],
    keyImpactStats: [
      { value: '3x Yield', label: 'Ozone Generation Concentration vs Air Feed' },
      { value: 'Zero Hazard', label: 'CO₂ Replaces Dangerous Sulfuric Acid for pH' },
      { value: '99.5%', label: 'Liquid Oxygen Purity for Aeration' },
      { value: '270 TPD', label: 'Guaranteed Cryogenic Logistics Capacity' }
    ],
    challengeTitle: 'Refractory COD/BOD, Toxic Acid Spills & Stringent Discharge Limits',
    challengeText: 'Industrial Effluent Treatment Plants (ETP) and municipal STPs struggle to degrade recalcitrant COD and color compounds using standard aeration. Furthermore, using mineral acids (sulfuric/hydrochloric acid) for wastewater neutralization poses severe corrosion, operator acid burn risks, and harmful sulfate salt accumulation.',
    solutionOverview: 'Shakti Group delivers bulk Liquid Oxygen (LOX) feed gas to generate high-concentration ozone for COD breakdown and color removal, paired with Liquid CO₂ for self-buffering, safe effluent pH neutralization without sulfate addition.',
    comparisonTitle: 'Effluent pH Neutralization: Carbon Dioxide (LCO₂) vs Sulfuric Acid (H₂SO₄)',
    comparisonHeaders: ['Treatment Parameter', 'Liquid CO₂ pH Neutralization (LCO₂)', 'Traditional Sulfuric Acid (H₂SO₄) Treatment'],
    comparisonRows: [
      { feature: 'Operator Safety & Handling', col1: 'Completely safe; non-corrosive gas; zero acid burn hazards or toxic fumes', col2: 'Extremely hazardous mineral acid; severe chemical burn and inhalation risks', isCol1Better: true },
      { feature: 'Over-Acidification Risk', col1: 'Self-buffering chemistry; forms mild carbonic acid that cannot drop pH below 6.0', col2: 'No buffering; easy to over-acidify into dangerous pH < 4.0 requiring caustic re-dosing', isCol1Better: true },
      { feature: 'Secondary Salt Pollution', col1: 'Zero sulfates added to treated water; lowers total dissolved solids (TDS)', col2: 'Adds large quantities of sulfate ions (SO₄²⁻), increasing salinity and violating TDS norms', isCol1Better: true },
      { feature: 'Equipment Corrosion', col1: 'Non-corrosive to standard carbon steel and concrete pipes', col2: 'Highly corrosive to pumps, dosing valves, and concrete collection sumps', isCol1Better: true }
    ],
    applications: [
      {
        title: 'Ozone Generation for Advanced Oxidation & Color Removal',
        gasUsed: 'Liquid Oxygen (LOX)',
        purity: '≥ 99.5% (Ultra-Dry Dew Point < -65°C)',
        description: 'Feeds industrial corona discharge ozone generators to produce high-concentration ozone (10-14 wt%) for breaking down refractory COD and pharmaceutical residues.',
        deliveryFormat: 'Bulk Liquid Oxygen Storage Tank + High-Efficiency Ambient Vaporizer'
      },
      {
        title: 'Effluent pH Neutralization & Alkalinity Control',
        gasUsed: 'Liquid Carbon Dioxide (LCO₂)',
        purity: '≥ 99.9%',
        description: 'Replaces mineral acids for neutralizing alkaline wastewater streams in textile mills, chemical ETPs, and paper manufacturing.',
        deliveryFormat: 'Bulk LCO₂ Storage Tank + Thermostatically Heated Vaporizer & Gas Diffusers'
      },
      {
        title: 'Biological Wastewater Aeration & Oxygen Dissolution',
        gasUsed: 'Pure Oxygen (LOX)',
        purity: '≥ 99.5%',
        description: 'Injects pure oxygen micro-bubbles into biological aeration basins, boosting dissolved oxygen (DO) levels and handling peak hydraulic shock loads.',
        deliveryFormat: 'Bulk LOX Storage Tank + Venturi / Submersible Oxygen Dissolution Skids'
      },
      {
        title: 'Municipal Drinking Water Disinfection',
        gasUsed: 'Chlorine Gas (Cl₂)',
        purity: 'IS:646 Certified',
        description: 'PESO approved chlorine tonners for municipal drinking water filtration plants and industrial cooling water biocide treatment.',
        deliveryFormat: 'PESO Approved 900 kg Ton Containers & 100 kg Cylinders'
      }
    ],
    regulatoryStandards: [
      'Central Pollution Control Board (CPCB) Zero Liquid Discharge (ZLD) norms',
      'IS 308 for Liquid Oxygen & IS 646 for Liquid Chlorine tonners',
      'PESO compliance for on-site LCO₂ and LOX storage vessels',
      'ISO 14001 Environmental Management System'
    ],
    seoTitle: 'Water Treatment Gases | LOX for Ozone & LCO2 for pH Neutralization | Shakti Group',
    seoDesc: 'Eco-friendly industrial gases for water and effluent treatment in India. Bulk Liquid Oxygen for ozone generation and Liquid CO2 for safe wastewater pH neutralization.',
    keywords: 'lox for water treatment, liquid oxygen for ozone generation, co2 for effluent ph neutralization, wastewater treatment gases India, chlorine tonner supplier Gujarat, ETP STP oxygen aeration, liquid carbon dioxide ph balancing',
    alternateNames: ['Water Treatment Gas Solutions', 'LOX for Ozone Generation', 'CO2 Effluent pH Neutralization', 'Wastewater Treatment Industrial Gases'],
    targetQueries: [
      'Liquid oxygen for ozone generation water treatment India',
      'CO2 for effluent pH neutralization ETP STP Gujarat',
      'Dissolved oxygen aeration for wastewater treatment plants',
      'Chlorine tonners for municipal drinking water disinfection',
      'Bulk liquid oxygen supplier for industrial effluent treatment'
    ],
    deliveryCoverage: ['Vadodara', 'Dahej', 'Ankleshwar', 'Surat Textile ETPs', 'Ahmedabad', 'Vapi', 'Maharashtra', 'Pan-India'],
    faqs: [
      {
        question: 'Why is pure Liquid Oxygen (LOX) preferred over air for ozone generation?',
        answer: 'Feeding pure Liquid Oxygen into ozone generators triples ozone yield (producing 10-14% ozone concentration vs only 2-3% from air) while halving electrical power consumption and eliminating harmful NOx byproducts.'
      },
      {
        question: 'How does Carbon Dioxide (CO2) replace Sulfuric Acid for wastewater pH neutralization?',
        answer: 'When CO2 is bubbled into alkaline wastewater, it forms carbonic acid (H2CO3) which reacts smoothly with hydroxide ions. Because it is a weak acid, it naturally buffers around pH 7.0-7.5 and cannot over-acidify, eliminating toxic acid burns and reducing sulfate TDS.'
      }
    ]
  },

  // ----------------------------------------------------
  // ELECTRONICS & SEMICONDUCTORS (UHP, CVD, WAFER FAB)
  // ----------------------------------------------------
  'electronics-semiconductor': {
    slug: 'electronics-semiconductor',
    title: 'Electronics, Semiconductor & Solar PV Gas Solutions',
    sectorTag: 'Semiconductor Wafers, Solar PV, Lab-Grown Diamonds & CVD',
    subtitle: 'Grade 5.0 to 6.0 Ultra-High Purity (UHP) Argon, Nitrogen, Helium, Silane, and Methane for semiconductor wafer fabrication, solar cell manufacturing, and CVD diamond synthesis.',
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600',
    primaryGases: [
      'Ultra-High Purity Nitrogen (LIN Grade 6.0 99.9999% for Cleanrooms)',
      'UHP Argon (LAR Grade 5.0 / 6.0 for Silicon Ingot Pulling & Sputtering)',
      'Helium Gas (He Grade 6.0 for Wafer Backside Cooling & Leak Detection)',
      'Methane Gas (CH₄ Grade 5.0 for MPCVD Lab-Grown Diamond Synthesis)',
      'High Purity Oxygen (Grade 6.0 for Thermal Gate Oxidation)'
    ],
    keyImpactStats: [
      { value: 'Grade 6.0', label: '99.9999% Semiconductor Purity Standard' },
      { value: '< 1 PPB', label: 'Critical Impurity Level in Purified Line' },
      { value: 'Sub-PPM', label: 'Moisture & Hydrocarbon Limits' },
      { value: 'COA Tested', label: 'Every Batch Certified by Gas Chromatograph' }
    ],
    challengeTitle: 'Micro-Contamination, Trace Moisture & Crystal Lattice Defects',
    challengeText: 'Semiconductor chip fabrication, photovoltaic solar cell deposition, and lab-grown diamond MPCVD reactors require extreme gaseous purity. Even 1 part-per-million (PPM) of trace oxygen, moisture, or hydrocarbons can cause electrical shorts, crystal lattice defects, and batch failure.',
    solutionOverview: 'Shakti Group supplies Grade 5.0, 5.5, and 6.0 Ultra-High Purity gases packaged in passivated, internally electro-polished cylinders with DISS/metal-to-metal diaphragm valves and individual Certificates of Analysis (COA).',
    comparisonTitle: 'Gas Purity Performance: Semiconductor Grade 6.0 vs Standard Industrial Grade Gases',
    comparisonHeaders: ['Purity & Contamination Metric', 'Electronic Grade 6.0 UHP Gas (99.9999%)', 'Standard Industrial Commercial Grade (99.5% - 99.9%)'],
    comparisonRows: [
      { feature: 'Total Gas Purity', col1: '99.9999% pure; total impurities (O₂, H₂O, THC, CO, CO₂) < 1 PPM', col2: '99.5% to 99.9% pure; impurities up to 1,000 - 5,000 PPM', isCol1Better: true },
      { feature: 'Moisture (H₂O) Content', col1: 'Sub-PPM moisture (< 0.5 PPM) with dew point below -80°C', col2: 'Moisture levels up to 20 - 50 PPM causing wafer oxidation', isCol1Better: true },
      { feature: 'Cylinder Packaging & Valving', col1: 'Internally baked, passivated cylinders with brass/stainless diaphragm valves', col2: 'Standard industrial painted cylinders with standard gland valves', isCol1Better: true },
      { feature: 'Analytical Quality Assurance', col1: 'Individual batch Certificate of Analysis (COA) tested on GC-MS and trace moisture analyzers', col2: 'Standard generic industrial compliance specification', isCol1Better: true }
    ],
    applications: [
      {
        title: 'Silicon Ingot Pulling (Czochralski) & Plasma Sputtering',
        gasUsed: 'UHP Liquid Argon (LAR Grade 5.0 / 6.0)',
        purity: '≥ 99.9999% (Electronic Grade)',
        description: 'Maintains an inert, non-reactive atmosphere inside crystal pulling furnaces to grow defect-free monocrystalline silicon ingots.',
        deliveryFormat: 'Dedicated UHP Cryogenic Microbulk or Passivated Cylinder Manifolds'
      },
      {
        title: 'Lab-Grown Diamond Synthesis (MPCVD)',
        gasUsed: 'Grade 5.0 Methane (CH₄) & Grade 5.0 Hydrogen (H₂)',
        purity: '≥ 99.999% Grade 5.0',
        description: 'Provides high-purity carbon and hydrogen feedstock for Microwave Plasma Chemical Vapor Deposition (MPCVD) diamond growth in Surat labs.',
        deliveryFormat: 'High-Pressure Seamless Cylinders with DISS / Brass Diaphragm Valves'
      },
      {
        title: 'Wafer Backside Cooling & Mass Spectrometer Leak Detection',
        gasUsed: 'Specialty Helium (He Grade 5.0 / 6.0)',
        purity: '≥ 99.9999%',
        description: 'Conducts heat away from semiconductor wafers during plasma etching and tests hermetic seal integrity of microelectronic packages.',
        deliveryFormat: 'High-Pressure 50L Seamless Cylinders & MCP Quads'
      }
    ],
    regulatoryStandards: [
      'SEMI (Semiconductor Equipment and Materials International) gas purity standards',
      'IS 5760 and ISO 9001:2015 quality testing verification',
      'NABL certified analytical laboratory COA documentation'
    ],
    seoTitle: 'Semiconductor & Electronics Gas Supplier India | UHP Grade 6.0 | Shakti Group',
    seoDesc: 'Ultra-High Purity (UHP) gases Grade 5.0 and 6.0 for semiconductor wafer fab, solar cell manufacturing, and lab-grown diamond CVD in India. Argon, Nitrogen, Helium & Methane.',
    keywords: 'semiconductor gas supplier India, uhp argon grade 6.0, electronic grade gases Gujarat, lab grown diamond methane gas Surat, helium leak detection gas, solar cell manufacturing gases, uhp nitrogen cleanroom',
    alternateNames: ['Semiconductor Gases Supplier', 'Electronic Grade UHP Gases', 'Lab Grown Diamond Gas Supplier', 'Solar PV Manufacturing Gases'],
    targetQueries: [
      'Ultra high purity gases for semiconductor fab India',
      'Grade 6.0 argon supplier for silicon crystal growth',
      'Methane gas Grade 5.0 supplier for lab grown diamond Surat',
      'Helium gas for mass spectrometer leak detection Gujarat',
      'Electronic grade nitrogen supplier for cleanrooms'
    ],
    deliveryCoverage: ['Surat Diamond Hub', 'Ahmedabad Semiconductor Zone', 'Sanand Electronics Hub', 'Vadodara', 'Bengaluru', 'Pan-India'],
    faqs: [
      {
        question: 'What purity grades are available for semiconductor and electronics manufacturing?',
        answer: 'We supply High Purity Grade 5.0 (99.999%), Ultra-High Purity Grade 5.5 (99.9995%), and Semiconductor Grade 6.0 (99.9999%) accompanied by individual batch Certificates of Analysis (COA) specifying trace impurity levels in PPM/PPB.'
      },
      {
        question: 'Why is Grade 5.0 Methane required for Lab-Grown Diamonds (MPCVD) in Surat?',
        answer: 'Microwave plasma CVD diamond synthesis requires methane with nitrogen and oxygen content below 1 ppm. Nitrogen traces cause yellow discoloration and crystal defects in rough diamonds.'
      }
    ]
  }
};

export const IndustrySubPage: React.FC = () => {
  const location = useLocation();
  const rawSlug = location.pathname.split('/').pop() || 'metals-manufacturing';

  // Resolve alias mappings if any
  const slug = rawSlug === 'chemicals-pharmaceuticals' ? 'chemicals-process' : rawSlug;
  const data = INDUSTRY_SUBPAGES_DATA[slug] || INDUSTRY_SUBPAGES_DATA['metals-manufacturing'];

  // Structured Schema for rich SEO results
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.title,
    serviceType: `Industrial Gas Supply for ${data.sectorTag}`,
    description: data.subtitle,
    provider: {
      '@type': 'Organization',
      name: 'Shakti Group of Companies',
      url: 'https://www.shaktigases.com',
      logo: 'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/product_hero.png',
      telephone: '+91 265 233 1234',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Vadodara',
        addressRegion: 'Gujarat',
        addressCountry: 'India'
      }
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'India & Export Markets'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${data.title} Products & Delivery Formats`,
      itemListElement: data.applications.map((app, i) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: app.title,
          description: `${app.description} (Gas: ${app.gasUsed}, Purity: ${app.purity})`
        },
        position: i + 1
      }))
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.shaktigases.com/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Industries',
        item: 'https://www.shaktigases.com/industries'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: data.title,
        item: `https://www.shaktigases.com/industries/${data.slug}`
      }
    ]
  };

  const faqSchema = data.faqs && data.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  } : null;

  const schemaArray = [serviceSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])];

  // Dynamic keyword string combining keywords and targetQueries in pipeline format
  const pipelineTargetQueries = data.targetQueries && data.targetQueries.length > 0
    ? data.targetQueries.join(' | ')
    : '';
  const formattedKeywords = [data.keywords, pipelineTargetQueries].filter(Boolean).join(' | ');

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <SEO
        title={data.seoTitle}
        description={data.seoDesc}
        keywords={formattedKeywords}
        canonicalUrl={`https://www.shaktigases.com/industries/${data.slug}`}
        ogImage={data.heroImage}
        schemaJson={schemaArray}
      />

      {/* Clean High-Contrast Industry Hero Header */}
      <div className="bg-slate-950 text-white py-14 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 via-slate-950 to-slate-900 opacity-95 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 mb-5">
            <NavLink to="/" className="hover:text-white transition">Home</NavLink>
            <ChevronRight className="h-3 w-3 text-slate-600" />
            <NavLink to="/industries" className="hover:text-white transition">Industries</NavLink>
            <ChevronRight className="h-3 w-3 text-slate-600" />
            <span className="text-blue-400 font-medium">{data.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2">
                <span className="bg-blue-900/60 text-blue-300 text-xs font-mono font-semibold px-3 py-1 rounded-md border border-blue-700/60 uppercase tracking-wider">
                  {data.sectorTag}
                </span>
                <span className="bg-slate-800 text-slate-300 text-xs font-medium px-2.5 py-1 rounded-md border border-slate-700">
                  PESO / ISO Certified
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {data.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal pt-1">
                {data.subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <NavLink
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl transition shadow-lg shadow-blue-600/30"
              >
                <span>Consult Industry Engineer</span>
                <ArrowRight className="h-4 w-4" />
              </NavLink>
              <NavLink
                to="/services"
                className="inline-flex items-center justify-center gap-2 bg-slate-800/90 hover:bg-slate-700 text-slate-200 text-xs font-semibold px-6 py-3.5 rounded-xl transition border border-slate-700"
              >
                <span>On-Site Storage Rental</span>
              </NavLink>
            </div>
          </div>

        </div>
      </div>

      {/* Key Impact Benchmarks Summary Bar */}
      <section className="bg-slate-50 border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.keyImpactStats.map((st, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
                <span className="text-xl sm:text-2xl font-extrabold text-blue-700 block">{st.value}</span>
                <span className="text-xs font-semibold text-slate-700 mt-1 block leading-tight">{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          <div className="lg:col-span-8 space-y-10">

            {/* Sector Challenge & Solution */}
            <div className="space-y-4">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wider">
                  <Flame className="h-4 w-4" />
                  <span>Sector Challenge</span>
                </div>
                <h2 className="text-lg font-bold text-slate-900">
                  {data.challengeTitle}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {data.challengeText}
                </p>
              </div>

              <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-200/80 space-y-2">
                <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                  <Sparkles className="h-4 w-4" />
                  <span>The Shakti Engineered Solution</span>
                </div>
                <h2 className="text-lg font-bold text-blue-900">
                  Tailored Gas Chemistry & High-Reliability Logistics
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {data.solutionOverview}
                </p>
              </div>
            </div>

            {/* On-Site Storage Rental Callout Banner */}
            <div className="bg-gradient-to-r from-slate-900 to-blue-950 text-white p-6 rounded-2xl border border-slate-800 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div className="space-y-1 max-w-xl">
                <div className="inline-flex items-center gap-1.5 text-blue-400 text-xs font-bold uppercase tracking-wider">
                  <Truck className="h-4 w-4" />
                  <span>Turnkey On-Site Storage Setup</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  3 KL to 60 KL Cryogenic Storage Vessels on Rental / Opex Model
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Zero capital expenditure required. We install vacuum-insulated tanks, high-flow vaporizers, safety telemetry, and handle all PESO statutory approvals.
                </p>
              </div>
              <NavLink
                to="/contact"
                className="bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg transition shrink-0 whitespace-nowrap"
              >
                Inquire For Tank Lease
              </NavLink>
            </div>

            {/* Technical Comparison Table */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 flex items-center justify-between">
                <span>{data.comparisonTitle}</span>
              </h3>

              <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
                <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                  <thead className="bg-slate-100 text-slate-900 font-bold uppercase tracking-wider text-[11px] border-b border-slate-200">
                    <tr>
                      <th className="p-3.5">{data.comparisonHeaders[0]}</th>
                      <th className="p-3.5 text-blue-800 bg-blue-50/70">{data.comparisonHeaders[1]}</th>
                      <th className="p-3.5 text-slate-600">{data.comparisonHeaders[2]}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {data.comparisonRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="p-3.5 font-semibold text-slate-900">{row.feature}</td>
                        <td className="p-3.5 font-medium text-slate-800 bg-blue-50/30">{row.col1}</td>
                        <td className="p-3.5 text-slate-600">{row.col2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Key Applications & Delivery Formats */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
                <Boxes className="h-5 w-5 text-blue-700" />
                <span>Sector Applications & Specialized Delivery Formats</span>
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {data.applications.map((app, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm space-y-2.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-base font-bold text-slate-900">{app.title}</h4>
                      <span className="bg-blue-50 text-blue-800 font-bold text-xs px-3 py-1 rounded-full border border-blue-200">
                        {app.gasUsed}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {app.description}
                    </p>

                    <div className="pt-2.5 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="text-slate-600">
                        <span className="font-semibold text-slate-800">Purity Standard: </span>
                        <span>{app.purity}</span>
                      </div>
                      <div className="text-slate-600">
                        <span className="font-semibold text-slate-800">Delivery Format: </span>
                        <span>{app.deliveryFormat}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sidebar: Primary Gases, Standards & Coverage */}
          <div className="lg:col-span-4 space-y-6">

            {/* Primary Gas Products Box */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl space-y-4 border border-slate-800 shadow-md">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                <Building2 className="h-5 w-5 text-blue-400" />
                <h3 className="text-base font-bold text-white">
                  Primary Sector Gases
                </h3>
              </div>

              <ul className="space-y-2 text-xs text-slate-300 font-medium">
                {data.primaryGases.map((gas, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{gas}</span>
                  </li>
                ))}
              </ul>

              {/* Regulatory Standards */}
              <div className="pt-3 border-t border-slate-800 space-y-2">
                <div className="flex items-center gap-1.5 text-xs text-slate-300 font-semibold">
                  <ShieldCheck className="h-4 w-4 text-blue-400" />
                  <span>Compliance & Quality Norms:</span>
                </div>
                <ul className="space-y-1.5 text-[11px] text-slate-400">
                  {data.regulatoryStandards.map((std, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                      <span>{std}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Geographic Delivery Coverage */}
              {data.deliveryCoverage && (
                <div className="pt-3 border-t border-slate-800 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 font-semibold">
                    <MapPin className="h-4 w-4 text-blue-400" />
                    <span>Logistics Coverage Hubs:</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {data.deliveryCoverage.map((hub, hIdx) => (
                      <span key={hIdx} className="bg-slate-800 text-[10px] text-slate-300 px-2 py-0.5 rounded border border-slate-700">
                        {hub}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-3">
                <NavLink
                  to="/contact"
                  className="block text-center w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition shadow-md"
                >
                  Request Commercial Quotation
                </NavLink>
              </div>
            </div>

            {/* Other Industries Quick Navigation */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                Explore Other Industries
              </h4>
              <ul className="space-y-1.5 text-xs">
                {Object.values(INDUSTRY_SUBPAGES_DATA)
                  .filter(ind => ind.slug !== data.slug)
                  .map((ind) => (
                    <li key={ind.slug}>
                      <NavLink
                        to={`/industries/${ind.slug}`}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-blue-600 font-medium transition"
                      >
                        <span className="truncate">{INDUSTRY_DISPLAY_NAMES[ind.slug] || ind.title}</span>
                        <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                      </NavLink>
                    </li>
                  ))}
              </ul>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default IndustrySubPage;

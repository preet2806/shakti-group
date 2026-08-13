import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  ChevronRight,
  CheckCircle2,
  Building2,
  Boxes,
  ShieldCheck,
  ArrowRight
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
}

export const INDUSTRY_SUBPAGES_DATA: Record<string, IndustryPageData> = {
  'metals-manufacturing': {
    slug: 'metals-manufacturing',
    title: 'Metals & Manufacturing Solutions',
    sectorTag: 'Steel, Cutting & Metallurgy',
    subtitle: 'Industrial gas solutions for basic oxygen furnace steelmaking, fiber laser cutting, TIG/MIG arc welding, and heat treatment.',
    heroImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1600',
    primaryGases: ['Liquid Oxygen (LOX)', 'High-Pressure Nitrogen (LIN)', 'Liquid Argon (LAR)', 'Dissolved Acetylene (DA)'],
    keyImpactStats: [
      { value: '3x Speed', label: 'Laser Cutting Assist Speed with N₂' },
      { value: 'Oxide-Free', label: 'Clean Weld & Cut Edge Finish' },
      { value: '99.999%', label: 'Argon Purity for Ladle Refining' },
      { value: '200 Bar', label: 'High Flow MCP Quads Supply' }
    ],
    challengeTitle: 'Edge Oxidation, Weld Porosity & Furnace Efficiency',
    challengeText: 'Metal fabricators encounter cost and quality bottlenecks: traditional flame cutting leaves oxide scale requiring manual grinding, atmospheric air exposure during arc welding causes joint porosity, and un-enriched melting furnaces consume excessive fuel.',
    solutionOverview: 'Shakti Group supplies high-pressure nitrogen assist gas for dross-free laser cutting, ultra-pure argon for spatter-free arc shielding, and bulk liquid oxygen enrichment that boosts furnace throughput while reducing fuel consumption.',
    comparisonTitle: 'Laser Assist Gas Comparison: High-Pressure Nitrogen vs Oxygen Flame',
    comparisonHeaders: ['Feature / Metric', 'High-Pressure Nitrogen Assist', 'Standard Oxygen Flame Cutting'],
    comparisonRows: [
      { feature: 'Cut Edge Quality', col1: 'Oxide-free, bright, ready for painting without grinding', col2: 'Heavy oxide scale requiring manual grinding', isCol1Better: true },
      { feature: 'Cutting Speed (Stainless)', col1: 'Up to 3x faster cutting speeds', col2: 'Slower cutting speed; limited by exothermic reaction', isCol1Better: true },
      { feature: 'Material Versatility', col1: 'Ideal for Stainless Steel, Aluminum & Galvanized', col2: 'Limited primarily to Carbon Mild Steel', isCol1Better: true },
      { feature: 'Supply Pressure', col1: 'Continuous 20-30 Bar high-pressure supply', col2: 'Standard 5-10 Bar low-pressure supply', isCol1Better: false }
    ],
    applications: [
      {
        title: 'High-Pressure Laser Cutting',
        gasUsed: 'Nitrogen (N₂)',
        purity: '≥ 99.999% Grade 5.0',
        description: 'Blasts away molten stainless steel and aluminum during fiber laser cutting without edge oxidation.',
        deliveryFormat: 'Bulk Liquid Tank + High Pressure Vaporizer Skid or MCP Quads'
      },
      {
        title: 'Steelmaking & Ladle Refining',
        gasUsed: 'Oxygen (LOX) & Argon (LAR)',
        purity: '≥ 99.5% LOX / 99.999% LAR',
        description: 'Oxygen enriches furnace combustion; Argon is injected through porous plugs in ladle furnaces to stir and degas steel.',
        deliveryFormat: 'Bulk Cryogenic Road Tankers into On-site Storage Vessels'
      },
      {
        title: 'TIG & MIG Arc Welding',
        gasUsed: 'Argon & Ar/CO₂ Mixtures',
        purity: '≥ 99.99% Argon',
        description: 'Shields molten weld pools from atmospheric oxygen and nitrogen, preventing porosity.',
        deliveryFormat: '47L / 50L Cylinders & MCP Quads (200 Bar)'
      }
    ],
    regulatoryStandards: [
      'AWS (American Welding Society) shield gas purity standards',
      'IS 308 (Commercial Oxygen) & IS 1747 (Nitrogen) Indian Standards',
      'PESO pressure vessel compliance for laser assist gas banks'
    ],
    seoTitle: 'Metals & Manufacturing Industrial Gas Solutions | Shakti Group',
    seoDesc: 'High-pressure Nitrogen for laser cutting, Argon for arc welding, and Oxygen for steelmaking.',
    keywords: 'Laser Cutting Assist Gas, Argon Welding Supply, Steelmaking Oxygen India'
  },

  'chemicals-process': {
    slug: 'chemicals-process',
    title: 'Chemical & Process Industries Solutions',
    sectorTag: 'Chemical Synthesis, Inerting & Process Plants',
    subtitle: 'Ultra-pure nitrogen for reactor blanketing, liquid nitrogen cryo-cooling, and compressed hydrogen for hydro-processing.',
    heroImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1600',
    primaryGases: ['High-Purity Nitrogen (LIN)', 'Compressed Hydrogen (H₂)', 'Specialty Calibration Gases', 'Chlorine & Anhydrous Ammonia'],
    keyImpactStats: [
      { value: '< 5 PPM', label: 'Oxygen Content in Nitrogen Blanketing' },
      { value: 'Grade 6.0', label: 'Max Carrier Gas Purity (99.9999%)' },
      { value: '200 Bar', label: 'Hydrogen Tube Cascade Pressure' },
      { value: '-196°C', label: 'Cryogenic Reaction Cooling Capability' }
    ],
    challengeTitle: 'Explosion Risk, Volatile Oxidation & Process Control',
    challengeText: 'Chemical process reactors handling volatile organic solvents face fire hazards in oxygenated headspaces. Hydro-processing units require continuous high-pressure hydrogen, while analytical process monitors demand precision calibration standards.',
    solutionOverview: 'Shakti Group provides continuous nitrogen reactor blanketing to eliminate explosion hazards, ultra-high pressure hydrogen tube cascades for hydro-processing, and UHP carrier gases for process gas chromatographs.',
    comparisonTitle: 'Reactor Atmospheric Protection: Nitrogen Inerting vs Unpurged Air',
    comparisonHeaders: ['Parameter / Risk', 'Nitrogen Blanketing System', 'Unpurged Ambient Atmosphere'],
    comparisonRows: [
      { feature: 'Explosion Hazard', col1: 'Eliminated (O₂ concentration kept < 5%)', col2: 'High risk of vapor ignition from static sparks', isCol1Better: true },
      { feature: 'Solvent Preservation', col1: 'Zero oxidation; preserves chemical reaction yield', col2: 'Degradation and discoloration of sensitive compounds', isCol1Better: true },
      { feature: 'Moisture Ingress', col1: 'Dew point below -60°C prevents side reactions', col2: 'Atmospheric humidity causes product degradation', isCol1Better: true }
    ],
    applications: [
      {
        title: 'Reactor Vessel Inerting & Blanketing',
        gasUsed: 'Nitrogen (LIN / Compressed N₂)',
        purity: '≥ 99.999% Grade 5.0',
        description: 'Displaces atmospheric air in chemical reactors and solvent storage tanks to maintain non-flammable headspaces.',
        deliveryFormat: 'Bulk Liquid Tank + Ambient Vaporizer or High-Flow Nitrogen Manifold'
      },
      {
        title: 'Hydro-processing & Chemical Synthesis',
        gasUsed: 'Hydrogen (H₂)',
        purity: '≥ 99.99% Industrial Grade',
        description: 'High-pressure hydrogen feed for catalytic hydrogenation, organic synthesis, and reduction reactions.',
        deliveryFormat: 'Mobile Tube Cascades (200 Bar) & High-Pressure Cylinder Skids'
      },
      {
        title: 'Cryogenic Condensation & VOC Recovery',
        gasUsed: 'Liquid Nitrogen (-196°C)',
        purity: '≥ 99.999%',
        description: 'Cryogenic condensation of volatile organic compounds (VOCs) from reactor off-gases before venting.',
        deliveryFormat: 'Bulk Cryogenic Tankers into On-site Liquid Storage Vessels'
      }
    ],
    regulatoryStandards: [
      'ISO 9001:2015 Quality Management System for chemical raw materials',
      'PESO Static and Mobile Pressure Vessels (Unfired) Rules',
      'Hazardous process safety management guidelines'
    ],
    seoTitle: 'Chemical & Process Industry Gas Solutions | Shakti Group',
    seoDesc: 'Ultra-pure Nitrogen for reactor blanketing, Hydrogen tube cascades, and cryogenic VOC recovery.',
    keywords: 'Nitrogen Reactor Blanketing, Industrial Hydrogen Cascades, Cryogenic VOC Recovery'
  },

  'chemicals-pharmaceuticals': {
    slug: 'chemicals-pharmaceuticals',
    title: 'Chemical & Process Industries Solutions',
    sectorTag: 'Chemical Synthesis, Inerting & Process Plants',
    subtitle: 'Ultra-pure nitrogen for reactor blanketing, liquid nitrogen cryo-cooling, and compressed hydrogen for hydro-processing.',
    heroImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1600',
    primaryGases: ['High-Purity Nitrogen (LIN)', 'Compressed Hydrogen (H₂)', 'Specialty Calibration Gases', 'Chlorine & Anhydrous Ammonia'],
    keyImpactStats: [
      { value: '< 5 PPM', label: 'Oxygen Content in Nitrogen Blanketing' },
      { value: 'Grade 6.0', label: 'Max Carrier Gas Purity (99.9999%)' },
      { value: '200 Bar', label: 'Hydrogen Tube Cascade Pressure' },
      { value: '-196°C', label: 'Cryogenic Reaction Cooling Capability' }
    ],
    challengeTitle: 'Explosion Risk, Volatile Oxidation & Process Control',
    challengeText: 'Chemical process reactors handling volatile organic solvents face fire hazards in oxygenated headspaces. Hydro-processing units require continuous high-pressure hydrogen, while analytical process monitors demand precision calibration standards.',
    solutionOverview: 'Shakti Group provides continuous nitrogen reactor blanketing to eliminate explosion hazards, ultra-high pressure hydrogen tube cascades for hydro-processing, and UHP carrier gases for process gas chromatographs.',
    comparisonTitle: 'Reactor Atmospheric Protection: Nitrogen Inerting vs Unpurged Air',
    comparisonHeaders: ['Parameter / Risk', 'Nitrogen Blanketing System', 'Unpurged Ambient Atmosphere'],
    comparisonRows: [
      { feature: 'Explosion Hazard', col1: 'Eliminated (O₂ concentration kept < 5%)', col2: 'High risk of vapor ignition from static sparks', isCol1Better: true },
      { feature: 'Solvent Preservation', col1: 'Zero oxidation; preserves chemical reaction yield', col2: 'Degradation and discoloration of sensitive compounds', isCol1Better: true },
      { feature: 'Moisture Ingress', col1: 'Dew point below -60°C prevents side reactions', col2: 'Atmospheric humidity causes product degradation', isCol1Better: true }
    ],
    applications: [
      {
        title: 'Reactor Vessel Inerting & Blanketing',
        gasUsed: 'Nitrogen (LIN / Compressed N₂)',
        purity: '≥ 99.999% Grade 5.0',
        description: 'Displaces atmospheric air in chemical reactors and solvent storage tanks to maintain non-flammable headspaces.',
        deliveryFormat: 'Bulk Liquid Tank + Ambient Vaporizer or High-Flow Nitrogen Manifold'
      },
      {
        title: 'Hydro-processing & Chemical Synthesis',
        gasUsed: 'Hydrogen (H₂)',
        purity: '≥ 99.99% Industrial Grade',
        description: 'High-pressure hydrogen feed for catalytic hydrogenation, organic synthesis, and reduction reactions.',
        deliveryFormat: 'Mobile Tube Cascades (200 Bar) & High-Pressure Cylinder Skids'
      },
      {
        title: 'Cryogenic Condensation & VOC Recovery',
        gasUsed: 'Liquid Nitrogen (-196°C)',
        purity: '≥ 99.999%',
        description: 'Cryogenic condensation of volatile organic compounds (VOCs) from reactor off-gases before venting.',
        deliveryFormat: 'Bulk Cryogenic Tankers into On-site Liquid Storage Vessels'
      }
    ],
    regulatoryStandards: [
      'ISO 9001:2015 Quality Management System for chemical raw materials',
      'PESO Static and Mobile Pressure Vessels (Unfired) Rules',
      'Hazardous process safety management guidelines'
    ],
    seoTitle: 'Chemical & Process Industry Gas Solutions | Shakti Group',
    seoDesc: 'Ultra-pure Nitrogen for reactor blanketing, Hydrogen tube cascades, and cryogenic VOC recovery.',
    keywords: 'Nitrogen Reactor Blanketing, Industrial Hydrogen Cascades, Cryogenic VOC Recovery'
  },

  'life-sciences': {
    slug: 'life-sciences',
    title: 'Life Sciences & Healthcare Gas Solutions',
    sectorTag: 'Medical Oxygen, Pharma API & Cryo-Preservation',
    subtitle: 'Indian Pharmacopoeia (IP) licensed medical oxygen pipelines, ultra-pure pharma synthesis gases, and liquid nitrogen bio-banking.',
    heroImage: 'https://images.unsplash.com/photo-1578496479914-7ef3b0193be3?auto=format&fit=crop&q=80&w=1600',
    primaryGases: ['Medical LOX (IP Grade)', 'High-Purity LIN (-196°C)', 'Specialty Helium (He Grade 5.5)', 'Calibration Mixture Gases'],
    keyImpactStats: [
      { value: 'cGMP / IP', label: 'Indian Pharmacopoeia Certified' },
      { value: 'Grade 5.5', label: 'Helium Purity for Liquid Helium MRI' },
      { value: '-196°C', label: 'Bio-Banking Cryo Preservation' },
      { value: '24/7', label: 'Dedicated Hospital Emergency Supply' }
    ],
    challengeTitle: 'Strict Pharmacopoeial Standards & Zero Supply Disruption',
    challengeText: 'Hospitals and pharmaceutical manufacturers require absolute gas purity compliance with zero tolerance for supply interruption. Medical oxygen pipelines, ICU ventilators, and bio-specimen cryo-freezers depend on guaranteed 24/7 liquid gas delivery.',
    solutionOverview: 'Shakti Group supplies IP licensed medical liquid oxygen for hospital bulk storage tanks, ultra-high purity gases for pharmaceutical API synthesis under cGMP standards, and liquid nitrogen for cryogenic biological sample preservation.',
    comparisonTitle: 'Hospital Oxygen Supply: Cryogenic Liquid LOX vs High-Pressure Cylinders',
    comparisonHeaders: ['Feature / Metric', 'Bulk Cryogenic LOX Storage', 'Individual Medical Cylinder Banks'],
    comparisonRows: [
      { feature: 'Supply Continuity', col1: 'Continuous automatic pipeline feed to ICU / Operation Theatres', col2: 'Manual cylinder swaps required; risk of line pressure drops', isCol1Better: true },
      { feature: 'Storage Footprint', col1: 'Compact outdoor vessel replaces hundreds of indoor cylinders', col2: 'Large indoor cylinder storage space needed', isCol1Better: true },
      { feature: 'Telemetry Monitoring', col1: 'Real-time telemetry alert notifies dispatch center automatically', col2: 'Manual gauge checking by hospital maintenance personnel', isCol1Better: true }
    ],
    applications: [
      {
        title: 'Hospital Central Oxygen Pipeline Supply',
        gasUsed: 'Medical Liquid Oxygen (IP Grade)',
        purity: 'Indian Pharmacopoeia (IP) Certified',
        description: 'Supplies hospital pipeline networks, ICU ventilators, and surgical operating rooms from bulk cryogenic storage.',
        deliveryFormat: 'Cryogenic Tanker Hospital Storage Vessels & Backup Manifold Banks'
      },
      {
        title: 'Pharma API Synthesis & Lyophilization',
        gasUsed: 'High-Purity Nitrogen (LIN)',
        purity: '≥ 99.999% Pharma Grade',
        description: 'Provides moisture-free inert atmospheres for active pharmaceutical ingredient (API) crystallization and freeze-drying.',
        deliveryFormat: 'Bulk Liquid Vessels & High-Purity Cylinder Packs'
      },
      {
        title: 'Biological Sample Cryo-Preservation',
        gasUsed: 'Liquid Nitrogen (-196°C)',
        purity: '≥ 99.999%',
        description: 'Maintains biological samples, stem cells, and vaccines at ultra-low cryogenic temperatures.',
        deliveryFormat: 'Vacuum Insulated Dewars & Liquid Storage Tanks'
      }
    ],
    regulatoryStandards: [
      'Indian Pharmacopoeia (IP) Drug License for Medical Oxygen',
      'Central Drugs Standard Control Organisation (CDSCO) compliance',
      'ISO 13485 Quality Management for Medical Gas Piping Systems'
    ],
    seoTitle: 'Life Sciences & Healthcare Gas Solutions | Shakti Group',
    seoDesc: 'Indian Pharmacopoeia (IP) certified medical liquid oxygen, ultra-pure pharma synthesis gases, and cryo-preservation.',
    keywords: 'Medical Oxygen IP Grade, Hospital Cryogenic Oxygen Tank, Pharma Nitrogen Supply'
  },

  'food-beverage': {
    slug: 'food-beverage',
    title: 'Food & Beverage Gas Applications',
    sectorTag: 'Food Freezing, Carbonation & Cold Chain',
    subtitle: 'E290 food-grade liquid CO₂ for beverage carbonation, solid dry ice cold-chain logistics, and MAP modified atmosphere packaging.',
    heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600',
    primaryGases: ['Food-Grade Liquid CO₂ (E290)', 'Food-Grade Liquid Nitrogen', 'Solid CO₂ Dry Ice (Pellets/Blocks)', 'MAP Gas Mixtures'],
    keyImpactStats: [
      { value: 'E290 Grade', label: 'Food Safe CO₂ Certification (≥ 99.9%)' },
      { value: '-196°C', label: 'Liquid Nitrogen Flash Freezing' },
      { value: '2x Shelf Life', label: 'Modified Atmosphere Packaging (MAP)' },
      { value: '-78.5°C', label: 'Dry Ice Cold Chain Temperature' }
    ],
    challengeTitle: 'Product Spoilage, Texture Loss & Cold Chain Interruptions',
    challengeText: 'Food processors struggle with bacterial growth and lipid oxidation in packaged foods, texture degradation during slow conventional mechanical freezing, and temperature spikes in cold-chain logistics.',
    solutionOverview: 'Shakti Group delivers food-grade E290 liquid carbon dioxide for soft drink carbonation, liquid nitrogen immersion for flash freezing that preserves cellular structure, and dry ice pellets for temperature-controlled transit.',
    comparisonTitle: 'Food Freezing Technology: Cryogenic Liquid Nitrogen vs Mechanical Freezing',
    comparisonHeaders: ['Feature / Metric', 'Cryogenic Liquid Nitrogen Freezing', 'Conventional Mechanical Refrigeration'],
    comparisonRows: [
      { feature: 'Freezing Speed', col1: 'Ultra-fast flash freezing (minutes)', col2: 'Slow freezing rate (hours)', isCol1Better: true },
      { feature: 'Cellular Damage & Drip Loss', col1: 'Micro-crystal formation preserves cellular structure', col2: 'Large ice crystals rupture cell walls, causing drip loss', isCol1Better: true },
      { feature: 'Equipment Footprint', col1: 'Compact cryogenic tunnel freezer', col2: 'Large spiral mechanical freezer room', isCol1Better: true }
    ],
    applications: [
      {
        title: 'Soft Drink & Beverage Carbonation',
        gasUsed: 'Food-Grade Liquid CO₂ (E290)',
        purity: '≥ 99.9% Food Grade',
        description: 'Provides clean carbonation bubbles for carbonated soft drinks, sparkling water, and beverage bottling lines.',
        deliveryFormat: 'Insulated LCO₂ Road Tankers or CO₂ Cylinder Banks'
      },
      {
        title: 'Cryogenic Food Freezing & Chilling',
        gasUsed: 'Liquid Nitrogen (LIN)',
        purity: '≥ 99.99% Food Grade',
        description: 'Flash freezes bakery items, seafood, poultry, and ice cream without texture degradation or weight loss.',
        deliveryFormat: 'Bulk Liquid Nitrogen Storage Tank + Cryo Tunnel'
      },
      {
        title: 'Modified Atmosphere Packaging (MAP)',
        gasUsed: 'N₂ / CO₂ Gas Mixtures',
        purity: 'Food Grade Certified',
        description: 'Displaces atmospheric oxygen inside food trays to extend shelf life without chemical preservatives.',
        deliveryFormat: 'Premixed Gas Cylinders or On-site Gas Blending'
      }
    ],
    regulatoryStandards: [
      'FSSAI compliant food additive standards (E290 Carbon Dioxide)',
      'EIGA (European Industrial Gases Association) food gas specification',
      'ISO 22000 Food Safety Management Guidelines'
    ],
    seoTitle: 'Food & Beverage Industrial Gas Solutions | Shakti Group',
    seoDesc: 'E290 food-grade Liquid CO2, Liquid Nitrogen flash freezing, and dry ice cold-chain transport.',
    keywords: 'Food Grade CO2 Gujarat, Liquid Nitrogen Food Freezing, Dry Ice Cold Chain'
  },

  'energy-infrastructure': {
    slug: 'energy-infrastructure',
    title: 'Energy & Infrastructure Gas Solutions',
    sectorTag: 'Oil & Gas, Power Plants, Pipelines & Energy',
    subtitle: 'High-flow nitrogen purging for refineries, pipeline pressure testing, power plant transformer blanketing, and hydrogen mobility.',
    heroImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1600',
    primaryGases: ['Liquid Nitrogen (LIN)', 'High-Pressure Hydrogen (H₂)', 'Sulfur Hexafluoride (SF₆)', 'High-Purity Oxygen & Argon'],
    keyImpactStats: [
      { value: '5,000 Nm³/h', label: 'High-Flow Nitrogen Purging Skid' },
      { value: '300 Bar', label: 'Pipeline Hydrostatic / Pneumatic Test' },
      { value: 'SF₆ Gas', label: 'Dielectric Insulation for Switchgear' },
      { value: 'Zero Moisture', label: 'High-Voltage Transformer Drying' }
    ],
    challengeTitle: 'Flammable Hydrocarbon Purging, Moisture & Switchgear Arcing',
    challengeText: 'Refinery maintenance turnarounds require rapid, non-flammable purging of volatile hydrocarbons before hot work. Electrical power substations require SF₆ dielectric insulating gas, and pipelines demand high-pressure nitrogen testing.',
    solutionOverview: 'Shakti Group provides mobile high-flow nitrogen pumper units for rapid refinery vessel purging, SF₆ gas for high-voltage electrical switchgear, and high-pressure hydrogen for power generator cooling and clean mobility.',
    comparisonTitle: 'Pipeline Purging & Drying: High-Flow Cryogenic Nitrogen vs Compressed Air',
    comparisonHeaders: ['Feature / Metric', 'High-Flow Cryogenic Nitrogen Purge', 'Standard Compressed Atmospheric Air'],
    comparisonRows: [
      { feature: 'Combustion Safety', col1: '100% Inert (displaces combustible vapors completely)', col2: 'Contains 21% Oxygen; risk of explosive fuel-air mixture', isCol1Better: true },
      { feature: 'Moisture Content (Dew Point)', col1: 'Ultra-dry dew point (-60°C to -70°C)', col2: 'High moisture content causes internal pipeline rust', isCol1Better: true },
      { feature: 'Purge Speed', col1: 'High-flow vaporizers deliver up to 5,000 Nm³/hr', col2: 'Slower flow rate limited by air compressor capacity', isCol1Better: true }
    ],
    applications: [
      {
        title: 'Refinery Turnaround & Pipeline Nitrogen Purging',
        gasUsed: 'Liquid Nitrogen (LIN / Gaseous N₂)',
        purity: '≥ 99.99% Industrial Grade',
        description: 'Displaces flammable hydrocarbons from refinery catalytic reactors, storage tanks, and natural gas pipelines during shutdowns.',
        deliveryFormat: 'Mobile Cryogenic Tankers with High-Flow Pumper Vaporizers'
      },
      {
        title: 'High-Voltage Electrical Switchgear Insulation',
        gasUsed: 'Sulfur Hexafluoride (SF₆)',
        purity: '≥ 99.9% Dielectric Grade',
        description: 'Dielectric insulating gas for gas-insulated substations (GIS) and high-voltage circuit breakers.',
        deliveryFormat: 'Specialty High-Pressure Cylinders & Tonners'
      },
      {
        title: 'Power Generator Rotor Cooling & Hydrogen Energy',
        gasUsed: 'Hydrogen Gas (H₂)',
        purity: '≥ 99.99%',
        description: 'High thermal conductivity hydrogen for cooling large thermal power plant turbogenerator rotors.',
        deliveryFormat: 'High-Pressure Hydrogen Tube Cascades & Cylinder Skids'
      }
    ],
    regulatoryStandards: [
      'OISD (Oil Industry Safety Directorate) pipeline purging guidelines',
      'PESO Static and Mobile Pressure Vessels (Unfired) Rules',
      'IEC 60376 specification for electrical grade SF₆ gas'
    ],
    seoTitle: 'Energy & Infrastructure Industrial Gas Solutions | Shakti Group',
    seoDesc: 'High-flow Nitrogen purging for refineries, SF6 gas for power substations, and Hydrogen for energy infrastructure.',
    keywords: 'Nitrogen Purging Services, SF6 Gas Substation, Refinery Turnaround Gas'
  }
};

export const IndustrySubPage: React.FC = () => {
  const location = useLocation();
  const slug = location.pathname.split('/').pop() || 'metals-manufacturing';
  const data = INDUSTRY_SUBPAGES_DATA[slug] || INDUSTRY_SUBPAGES_DATA['metals-manufacturing'];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.title,
    description: data.subtitle,
    provider: {
      '@type': 'Organization',
      name: 'Shakti Group of Companies'
    }
  };

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <SEO
        title={data.seoTitle}
        description={data.seoDesc}
        keywords={data.keywords}
        canonicalUrl={`https://www.shaktigases.com${location.pathname}`}
        ogImage={data.heroImage}
        schemaJson={schema}
      />

      {/* Clean Technical Header */}
      <div className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 mb-4">
            <NavLink to="/" className="hover:text-white transition">Home</NavLink>
            <ChevronRight className="h-3 w-3 text-slate-600" />
            <NavLink to="/industries" className="hover:text-white transition">Industries</NavLink>
            <ChevronRight className="h-3 w-3 text-slate-600" />
            <span className="text-blue-400 font-medium">{data.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-3xl space-y-2">
              <span className="bg-slate-800 text-blue-300 text-xs font-mono px-2.5 py-0.5 rounded border border-slate-700">
                {data.sectorTag}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                {data.title}
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {data.subtitle}
              </p>
            </div>

            <NavLink
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition shrink-0"
            >
              <span>Consult Industry Specialist</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </NavLink>
          </div>

        </div>
      </div>

      {/* Key Impact Benchmarks Summary Bar */}
      <section className="bg-slate-50 border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.keyImpactStats.map((st, idx) => (
              <div key={idx} className="bg-white p-3.5 rounded-xl border border-slate-200">
                <span className="text-xl font-bold text-blue-700 block">{st.value}</span>
                <span className="text-xs font-semibold text-slate-700 mt-0.5 block">{st.label}</span>
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
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
                <h2 className="text-base font-bold text-slate-900">
                  Sector Challenge: {data.challengeTitle}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {data.challengeText}
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
                <h2 className="text-base font-bold text-blue-800">
                  Shakti Gas Solution Overview
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {data.solutionOverview}
                </p>
              </div>
            </div>

            {/* Technical Comparison Table */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">
                {data.comparisonTitle}
              </h3>

              <div className="overflow-x-auto bg-white rounded-xl border border-slate-200">
                <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                  <thead className="bg-slate-50 text-slate-900 font-bold uppercase tracking-wider text-[11px] border-b border-slate-200">
                    <tr>
                      <th className="p-3">{data.comparisonHeaders[0]}</th>
                      <th className="p-3 text-blue-800">{data.comparisonHeaders[1]}</th>
                      <th className="p-3 text-slate-600">{data.comparisonHeaders[2]}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {data.comparisonRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="p-3 font-semibold text-slate-900">{row.feature}</td>
                        <td className="p-3 font-medium text-slate-800 bg-blue-50/30">{row.col1}</td>
                        <td className="p-3 text-slate-600">{row.col2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Application Case Studies */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
                <Boxes className="h-4 w-4 text-blue-700" />
                <span>Key Applications & Delivery Formats</span>
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {data.applications.map((app, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-base font-bold text-slate-900">{app.title}</h4>
                      <span className="bg-slate-100 text-slate-700 font-semibold text-xs px-2.5 py-0.5 rounded border border-slate-200">
                        {app.gasUsed}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {app.description}
                    </p>

                    <div className="pt-2 border-t border-slate-100 flex flex-wrap justify-between items-center gap-2 text-xs">
                      <div className="text-slate-500">
                        <span className="font-semibold text-slate-700">Purity Standard: </span>
                        <span>{app.purity}</span>
                      </div>
                      <div className="text-slate-500">
                        <span className="font-semibold text-slate-700">Delivery Format: </span>
                        <span>{app.deliveryFormat}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sidebar: Primary Gases & Standards */}
          <div className="lg:col-span-4 space-y-6">

            <div className="bg-slate-900 text-white p-6 rounded-2xl space-y-4 border border-slate-800">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                <Building2 className="h-5 w-5 text-blue-400" />
                <h3 className="text-base font-bold text-white">
                  Primary Gas Products
                </h3>
              </div>

              <ul className="space-y-2 text-xs text-slate-300 font-medium">
                {data.primaryGases.map((gas, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                    <span>{gas}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-slate-800 space-y-2">
                <div className="flex items-center gap-1.5 text-xs text-slate-300 font-semibold">
                  <ShieldCheck className="h-4 w-4 text-blue-400" />
                  <span>Industry Standards:</span>
                </div>
                <ul className="space-y-1 text-[11px] text-slate-400">
                  {data.regulatoryStandards.map((std, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                      <span>{std}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <NavLink
                  to="/contact"
                  className="block text-center w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2.5 rounded-lg text-xs transition"
                >
                  Inquire For Industry Supply
                </NavLink>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default IndustrySubPage;

import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  ChevronRight,
  CheckCircle2,
  FlaskConical,
  Truck,
  Gauge,
  Boxes,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';
import SEO from '../../components/SEO';

export interface ProductPageData {
  slug: string;
  title: string;
  chemicalFormula: string;
  symbolBadge: string;
  casNumber: string;
  unNumber: string;
  subtitle: string;
  heroImage: string;
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
  handlingSafety: string[];
  seoTitle: string;
  seoDesc: string;
  keywords: string;
}

export const PRODUCT_SUBPAGES_DATA: Record<string, ProductPageData> = {
  'bulk-cryogenic': {
    slug: 'bulk-cryogenic',
    title: 'Bulk Cryogenic Liquid Gases',
    chemicalFormula: 'LOX / LIN / LAR / LCO₂',
    symbolBadge: 'O₂ | N₂ | Ar | CO₂',
    casNumber: '7782-44-7 (LOX) | 7727-37-9 (LIN)',
    unNumber: 'UN 1073 (LOX) | UN 1066 (LIN)',
    subtitle: 'Industrial-volume liquid oxygen, nitrogen, argon, and CO₂ delivered via vacuum-insulated cryogenic tankers.',
    heroImage: 'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/product_hero.png',
    puritiesAvailable: ['99.5% Commercial LOX', '99.999% UHP LIN (Grade 5.0)', '99.999% High Purity LAR', '99.9% Food Grade LCO₂'],
    physicalProperties: {
      boilingPoint: '-195.8°C (LIN) / -183.0°C (LOX)',
      expansionRatio: '1 : 860 (Liquid to Gas @ 15°C)',
      gasDensity: '1.429 kg/m³ (LOX) / 1.251 kg/m³ (LIN)',
      molecularWeight: '32.00 g/mol (LOX) / 28.01 g/mol (LIN)',
      criticalTemp: '-118.6°C (LOX) / -146.9°C (LIN)'
    },
    overview: 'Shakti Group supplies industrial-scale bulk cryogenic liquids for high-volume consumers including steel plants, chemical synthesis facilities, pharmaceutical manufacturers, and food processing units. Liquids are delivered in 10 KL to 35 KL vacuum-insulated road tankers directly into customer on-site storage vessels.',
    supplyModes: [
      {
        title: 'Cryogenic Tanker Delivery',
        capacity: '10,000L to 35,000L per trip',
        pressure: 'Up to 24 Bar',
        description: 'Direct decanting into customer vertical or horizontal cryogenic storage tanks backed by telemetry dispatch.',
        idealFor: 'Steel plants, chemical complexes, hospitals, and food freezing operations.'
      },
      {
        title: 'Microbulk Liquid Systems',
        capacity: '1,000L to 3,000L vessels',
        pressure: '15 to 24 Bar',
        description: 'Compact stationary liquid storage vessels installed on customer premises for medium-volume gas requirements.',
        idealFor: 'Laser cutting workshops, analytical research labs, and mid-sized pharma units.'
      },
      {
        title: 'On-Site Storage & Vaporizers',
        capacity: '3 KL to 50 KL Storage Vessels',
        pressure: 'Custom Regulated',
        description: 'Turnkey vessel installation complete with ambient air vaporizers for zero-electricity liquid-to-gas conversion.',
        idealFor: 'Long-term continuous industrial gas supply contracts.'
      }
    ],
    applications: [
      { industry: 'Steel & Metallurgy', useCase: 'Oxygen enrichment in melting furnaces & argon ladle stirring', recommendedPurity: '≥ 99.5% LOX / 99.999% LAR' },
      { industry: 'Chemical & Refining', useCase: 'Nitrogen purging, blanketing, and inerting atmospheric tanks', recommendedPurity: '≥ 99.999% UHP LIN' },
      { industry: 'Food & Beverage', useCase: 'Cryogenic liquid nitrogen immersion freezing & food preservation', recommendedPurity: '≥ 99.9% Food Grade' }
    ],
    handlingSafety: [
      'Cryogenic liquids exist at extremely low temperatures (below -180°C); direct contact causes severe thermal burns and frostbite.',
      'Liquid oxygen vigorously supports combustion; keep away from oils, grease, and flammable sources.',
      'Liquid nitrogen and argon evaporate rapidly and displace oxygen in enclosed areas, posing an asphyxiation hazard.'
    ],
    seoTitle: 'Bulk Cryogenic Liquid Gases | Liquid Oxygen, Nitrogen, Argon, CO2',
    seoDesc: 'High-volume liquid oxygen, nitrogen, argon, and CO2 delivered in vacuum-insulated cryogenic tankers.',
    keywords: 'Bulk Liquid Oxygen, Liquid Nitrogen Supplier, Liquid Argon Tanker, Bulk LCO2 India'
  },

  'industrial-cylinder': {
    slug: 'industrial-cylinder',
    title: 'Industrial Compressed Gases',
    chemicalFormula: 'O₂ / N₂ / Ar / CO₂ / H₂ / DA',
    symbolBadge: 'Compressed Gas',
    casNumber: 'Standard Industrial Identifiers',
    unNumber: 'UN 1072 (O₂) | UN 1006 (Ar) | UN 1001 (DA)',
    subtitle: 'High-pressure compressed gases supplied in 47L / 50L cylinders, cylinder quads (MCP), and tube cascades.',
    heroImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1600',
    puritiesAvailable: ['99.5% Commercial Oxygen', '99.99% Industrial Argon', '99.9% Carbon Dioxide', '99.5% Dissolved Acetylene'],
    physicalProperties: {
      boilingPoint: 'Varies by Gas Type',
      expansionRatio: 'Compressed Gas @ 150-200 Bar',
      gasDensity: 'Standard Temperature & Pressure Data',
      molecularWeight: 'Varies by Chemical Formula',
      criticalTemp: 'Varies by Gas Type'
    },
    overview: 'Shakti Group operates high-pressure cylinder refilling stations equipped with automated compression manifolds and vacuum evacuation systems. We supply individual high-pressure cylinders, multi-cylinder quads (MCPs), and mobile tube cascades for welding, cutting, blanketing, and heat treatment.',
    supplyModes: [
      {
        title: 'High-Pressure Cylinders (47L / 50L)',
        capacity: '7m³ to 10m³ Compressed Gas',
        pressure: '150 Bar to 200 Bar',
        description: 'Individually tested high-pressure steel cylinders certified under PESO safety guidelines.',
        idealFor: 'Metal fabrication workshops, maintenance teams, and light manufacturing.'
      },
      {
        title: 'Multi-Cylinder Packs (MCP Quads)',
        capacity: '12 to 16 Cylinder Bundles (~100m³)',
        pressure: '200 Bar Integrated Header',
        description: 'Manifolded cylinder quads mounted in protective steel frames for high-flow gas consumption.',
        idealFor: 'Heavy structural fabrication, laser cutting, and pipeline testing.'
      },
      {
        title: 'Hydrogen Tube Cascades',
        capacity: 'High-Volume Mobile Storage',
        pressure: 'Up to 200 Bar',
        description: 'Mobile pressure vessel tube trailers designed for high-flow continuous hydrogen delivery.',
        idealFor: 'Refineries, heat treatment furnaces, and chemical processing plants.'
      }
    ],
    applications: [
      { industry: 'Metal Fabrication', useCase: 'Oxy-acetylene cutting, brazing, and TIG/MIG arc welding shielding', recommendedPurity: 'Argon 99.99% / DA 99.5%' },
      { industry: 'Laser Cutting', useCase: 'High-pressure nitrogen assist gas for dross-free stainless steel cuts', recommendedPurity: 'Nitrogen ≥ 99.999%' },
      { industry: 'Heat Treatment', useCase: 'Hydrogen & nitrogen atmosphere control in annealing furnaces', recommendedPurity: 'Hydrogen 99.9% / N2 99.99%' }
    ],
    handlingSafety: [
      'Store high-pressure gas cylinders vertically and secure with safety chains to prevent falling.',
      'Always use a certified two-stage pressure regulator matching the specific gas valve type.',
      'Keep flammable gases like Acetylene and Hydrogen separated from Oxygen cylinders during storage.'
    ],
    seoTitle: 'Industrial Compressed Gases & Cylinder Supply | Shakti Group',
    seoDesc: 'High-pressure Oxygen, Nitrogen, Argon, CO2, Hydrogen, and Acetylene cylinders and MCP quads.',
    keywords: 'Industrial Gas Cylinders Vadodara, Oxygen Cylinder Supply, Argon Gas Quad, Hydrogen Cascades'
  },

  'specialty-calibration': {
    slug: 'specialty-calibration',
    title: 'Specialty & Calibration Gases',
    chemicalFormula: 'Grade 5.0 - 6.0 / Mixtures',
    symbolBadge: 'UHP & Pure Gas',
    casNumber: 'Traceable Standards',
    unNumber: 'UN 1956 (Compressed Gas N.O.S.)',
    subtitle: 'Ultra-High Purity (UHP) single gases and NIST/NABL traceable multi-component calibration gas mixtures.',
    heroImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1600',
    puritiesAvailable: ['Grade 5.0 (99.999%)', 'Grade 5.5 (99.9995%)', 'Grade 6.0 (99.9999%)', 'PPM / PPB Level Calibration Standards'],
    physicalProperties: {
      boilingPoint: 'Certified Purity Specific',
      expansionRatio: 'N/A - Precision Blends',
      gasDensity: 'Gravimetric Certified Data',
      molecularWeight: 'NIST Traceable Composition',
      criticalTemp: 'Certified Environment'
    },
    overview: 'Shakti Sales Agency supplies Ultra-High Purity (UHP Grade 5.0 to 6.0) carrier gases and gravimetrically blended calibration mixtures for analytical laboratories, quality control testing, environmental monitoring, and semiconductor research.',
    supplyModes: [
      {
        title: 'Specialty Gas Cylinders',
        capacity: '10L to 47L Aluminum/Steel',
        pressure: '150 Bar Precision Charged',
        description: 'Internally passivated and polished cylinders maintaining mixture stability over long shelf lives.',
        idealFor: 'Gas chromatography carrier gas, atomic absorption, and spectrometry.'
      },
      {
        title: 'Custom Calibration Standards',
        capacity: 'PPM to % Level Concentrations',
        pressure: 'Custom Regulated',
        description: 'Gravimetrically prepared multi-component mixtures certified with NIST & NABL traceability.',
        idealFor: 'Emission monitoring, gas detector calibration, and pharmaceutical QC.'
      }
    ],
    applications: [
      { industry: 'Analytical Laboratories', useCase: 'GC carrier gas (Helium, Nitrogen, Hydrogen) and detector FID supply', recommendedPurity: 'Grade 5.0 - 6.0' },
      { industry: 'Environmental Testing', useCase: 'Stack emission calibration standards and gas analyzer verification', recommendedPurity: 'Certified PPM Mixtures' },
      { industry: 'Pharmaceutical R&D', useCase: 'Inert reaction blanketing and quality control chromatography', recommendedPurity: 'Grade 5.5 UHP' }
    ],
    handlingSafety: [
      'Use dedicated stainless steel purge regulators to prevent ambient air contamination.',
      'Ensure calibration certificates match cylinder batch numbers before connecting to analytical equipment.',
      'Store toxic or corrosive mixture components in ventilated gas cabinets.'
    ],
    seoTitle: 'Specialty Gases & Calibration Standards | Shakti Group',
    seoDesc: 'Ultra-High Purity (UHP) gases (Grade 5.0 - 6.0) and NIST traceable calibration gas mixtures.',
    keywords: 'Specialty Gases Gujarat, UHP Argon, Calibration Gas Mixtures, Gas Chromatography Carrier Gas'
  },

  'other': {
    slug: 'other',
    title: 'Dry Ice, Dewars & Hardware',
    chemicalFormula: 'Solid CO₂ / Hardware',
    symbolBadge: 'Dry Ice & Hardware',
    casNumber: '124-38-9 (CO₂)',
    unNumber: 'UN 1845 (Carbon Dioxide, Solid)',
    subtitle: 'Food-grade solid CO₂ dry ice pellets and blocks, cryogenic liquid dewars, pressure regulators, and manifold hardware.',
    heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600',
    puritiesAvailable: ['Food Grade Solid CO₂ (≥ 99.9%)', '3mm High-Density Pellets', '6mm Pellets', '5kg Insulated Blocks'],
    physicalProperties: {
      boilingPoint: '-78.5°C Sublimation Point',
      expansionRatio: '1 kg Solid = ~500L CO₂ Gas',
      gasDensity: '1.56 g/cm³ (Solid Density)',
      molecularWeight: '44.01 g/mol',
      criticalTemp: '31.1°C'
    },
    overview: 'Bhavani Enterprise and Shakti Group manufacture solid CO₂ dry ice pellets and blocks for cold-chain pharmaceutical shipping, catering, and blast cleaning. We also supply liquid nitrogen dewars, high-pressure regulators, and gas manifold accessories.',
    supplyModes: [
      {
        title: 'Dry Ice Pellets & Blocks',
        capacity: '3mm / 6mm Pellets & 5kg Blocks',
        pressure: 'Solid Form (-78.5°C)',
        description: 'High-density extruded dry ice supplied in insulated thermal containers.',
        idealFor: 'Cold-chain pharma shipping, food catering, and dry ice blast cleaning.'
      },
      {
        title: 'Cryogenic Liquid Dewars',
        capacity: '10L to 50L Dewars',
        pressure: 'Low Pressure Transport',
        description: 'Super-insulated aluminum dewars with minimal static evaporation loss.',
        idealFor: 'Biological sample storage, IVF clinics, and dermatological therapy.'
      },
      {
        title: 'Gas Regulators & Manifolds',
        capacity: 'Single & Dual Stage Brass/SS',
        pressure: 'Inlet up to 300 Bar',
        description: 'Pressure regulators, flashback arrestors, pigtails, and auto-changeover panels.',
        idealFor: 'Factory gas piping lines and lab gas distribution.'
      }
    ],
    applications: [
      { industry: 'Cold Chain Shipping', useCase: 'Pharmaceutical, biological, and perishable food temperature maintenance', recommendedPurity: 'Food-Grade Solid CO₂' },
      { industry: 'Industrial Cleaning', useCase: 'Non-abrasive dry ice blast cleaning of machinery and molds', recommendedPurity: '3mm Pellets' },
      { industry: 'Biological Preservation', useCase: 'Cell line and biological sample storage in liquid nitrogen dewars', recommendedPurity: 'Liquid Nitrogen (-196°C)' }
    ],
    handlingSafety: [
      'Dry ice sublimates directly into CO₂ gas (-78.5°C); never store in airtight containers due to pressure risk.',
      'Use insulated cryogenic gloves when handling dry ice to prevent frostbite.',
      'Ensure proper ventilation in storage areas to prevent CO₂ gas buildup.'
    ],
    seoTitle: 'Dry Ice, Cryogenic Dewars & Gas Hardware | Shakti Group',
    seoDesc: 'Solid CO2 dry ice pellets and blocks, liquid nitrogen dewars, and pressure regulators.',
    keywords: 'Dry Ice Supplier Vadodara, Solid CO2 Blocks, Liquid Nitrogen Dewar, Gas Pressure Regulators'
  }
};

export const ProductSubPage: React.FC = () => {
  const location = useLocation();
  const slug = location.pathname.split('/').pop() || 'bulk-cryogenic';
  const data = PRODUCT_SUBPAGES_DATA[slug] || PRODUCT_SUBPAGES_DATA['bulk-cryogenic'];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: data.title,
    description: data.subtitle,
    brand: {
      '@type': 'Brand',
      name: 'Shakti Industrial Gases'
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
            <NavLink to="/products" className="hover:text-white transition">Products</NavLink>
            <ChevronRight className="h-3 w-3 text-slate-600" />
            <span className="text-blue-400 font-medium">{data.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-blue-700 text-white font-bold text-xs px-2.5 py-0.5 rounded uppercase">
                  {data.symbolBadge}
                </span>
                <span className="bg-slate-800 text-slate-300 font-mono text-xs px-2.5 py-0.5 rounded border border-slate-700">
                  Formula: {data.chemicalFormula}
                </span>
                <span className="bg-slate-800 text-slate-400 font-mono text-xs px-2.5 py-0.5 rounded border border-slate-700">
                  {data.unNumber}
                </span>
              </div>

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
              <span>Request Quote & Spec Sheet</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </NavLink>
          </div>

        </div>
      </div>

      {/* Physical & Thermodynamic Properties Bar */}
      <section className="bg-slate-50 border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <FlaskConical className="h-4 w-4 text-blue-700" />
            <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Technical Physical Properties
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <span className="text-[11px] font-semibold text-slate-500 block">Boiling Point</span>
              <span className="text-xs font-bold text-slate-900">{data.physicalProperties.boilingPoint}</span>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <span className="text-[11px] font-semibold text-slate-500 block">Expansion Ratio</span>
              <span className="text-xs font-bold text-blue-700">{data.physicalProperties.expansionRatio}</span>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <span className="text-[11px] font-semibold text-slate-500 block">Gas Density</span>
              <span className="text-xs font-bold text-slate-900">{data.physicalProperties.gasDensity}</span>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <span className="text-[11px] font-semibold text-slate-500 block">Molecular Weight</span>
              <span className="text-xs font-bold text-slate-900">{data.physicalProperties.molecularWeight}</span>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200">
              <span className="text-[11px] font-semibold text-slate-500 block">Critical Temp</span>
              <span className="text-xs font-bold text-slate-900">{data.physicalProperties.criticalTemp}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          <div className="lg:col-span-8 space-y-10">

            {/* Overview */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
                Product Specification & Scope
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {data.overview}
              </p>
            </div>

            {/* Supply Modes */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
                <Truck className="h-4 w-4 text-blue-700" />
                <span>Supply Modes & Packaging</span>
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {data.supplyModes.map((mode, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-base font-bold text-slate-900">{mode.title}</h4>
                      <span className="bg-slate-100 text-slate-700 font-semibold text-xs px-2.5 py-0.5 rounded border border-slate-200">
                        {mode.capacity}
                      </span>
                    </div>

                    <div className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                      <Gauge className="h-3.5 w-3.5 text-blue-600" />
                      <span>Pressure: {mode.pressure}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {mode.description}
                    </p>

                    <div className="bg-slate-50 p-2.5 rounded border border-slate-200 text-xs text-slate-700">
                      <span className="font-semibold text-slate-900 mr-1">Ideal For:</span>
                      <span>{mode.idealFor}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Industrial Applications Table */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
                <Boxes className="h-4 w-4 text-blue-700" />
                <span>Industrial Applications & Purity Standards</span>
              </h3>

              <div className="overflow-x-auto bg-white rounded-xl border border-slate-200">
                <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                  <thead className="bg-slate-50 text-slate-900 font-bold uppercase tracking-wider text-[11px] border-b border-slate-200">
                    <tr>
                      <th className="p-3">Industry</th>
                      <th className="p-3">Application</th>
                      <th className="p-3">Recommended Grade</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {data.applications.map((app, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="p-3 font-semibold text-slate-900">{app.industry}</td>
                        <td className="p-3">{app.useCase}</td>
                        <td className="p-3 text-blue-700 font-medium">{app.recommendedPurity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* Right Sidebar: Safety & Purity */}
          <div className="lg:col-span-4 space-y-6">

            <div className="bg-slate-900 text-white p-6 rounded-2xl space-y-4 border border-slate-800">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                <AlertTriangle className="h-5 w-5 text-amber-400" />
                <h3 className="text-base font-bold text-white">
                  Handling & Safety Guidelines
                </h3>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-300">
                {data.handlingSafety.map((safe, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    <span>{safe}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2 border-t border-slate-800">
                <span className="text-[11px] font-semibold text-slate-400 block mb-2">Available Purity Grades:</span>
                <ul className="space-y-1 text-xs text-blue-300 font-medium">
                  {data.puritiesAvailable.map((pur, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                      <span>{pur}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <NavLink
                  to="/contact"
                  className="block text-center w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2.5 rounded-lg text-xs transition"
                >
                  Request Technical Quote
                </NavLink>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default ProductSubPage;

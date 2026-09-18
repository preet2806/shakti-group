import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  ChevronRight,
  CheckCircle2,
  Truck,
  Gauge,
  Boxes,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Zap,
  PhoneCall,
  Atom,
  MapPin,
  Clock,
  FileText,
  HelpCircle
} from 'lucide-react';
import SEO from '../../components/SEO';
import {
  ProductPageData,
  INDIVIDUAL_PRODUCTS_DATA,
  PRODUCT_SLUG_ALIASES
} from './productData';

export const CATEGORY_SUBPAGES_DATA: Record<string, ProductPageData> = {
  'bulk-cryogenic': {
    slug: 'bulk-cryogenic',
    title: 'Bulk & Cryogenic Gases Catalog',
    chemicalFormula: 'LOX / LIN / LAR / LCO₂',
    symbolBadge: 'Bulk Cryogenic Liquids',
    casNumber: '7782-44-7 (LOX) | 7727-37-9 (LIN)',
    unNumber: 'UN 1073 (LOX) | UN 1977 (LIN) | UN 1951 (LAR)',
    subtitle: 'Industrial-volume liquid oxygen, nitrogen, argon, and CO₂ delivered via our 65+ vacuum-insulated cryogenic road tankers (10-35 KL) and turnkey on-site storage setups.',
    heroImage: 'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/product_hero.png',
    category: 'liquid',
    categoryLabel: 'Bulk & Cryogenic Gases',
    categorySlug: 'bulk-cryogenic',
    physicalState: 'Cryogenic Liquid (-196°C to -78.5°C)',
    puritiesAvailable: [
      'Commercial Grade LOX (≥ 99.5%)',
      'Medical Oxygen IP Grade (≥ 99.5% FDA Approved)',
      'Ultra-High-Purity LIN (Grade 5.0 - 99.999%)',
      'High-Purity Liquid Argon (Grade 5.0 - 99.999%)',
      'Food Grade Liquid CO₂ (≥ 99.9% ISBT / E290)'
    ],
    physicalProperties: {
      boilingPoint: '-195.8°C (LIN) / -183.0°C (LOX)',
      expansionRatio: '1 : 860 (Liquid to Gas @ 15°C)',
      gasDensity: '1.429 kg/m³ (LOX) / 1.251 kg/m³ (LIN)',
      molecularWeight: '32.00 g/mol (LOX) / 28.01 g/mol (LIN)',
      criticalTemp: '-118.6°C (LOX) / -146.9°C (LIN)'
    },
    overview: 'Shakti Group is a premier manufacturer and bulk cryogenic gases supplier in Western and Central India. Operating 448 TPD combined manufacturing capacity with 65+ specialized cryogenic road tankers, we provide seamless bulk supply of Liquid Nitrogen (LIN), Liquid Oxygen (LOX), Liquid Argon (LAR), and Liquid CO2. We also provide turnkey on-site cryogenic storage tank installations on a flexible rental/opex model for uninterrupted production.',
    supplyModes: [
      {
        title: 'Cryogenic Road Tanker Fleet (65+ Units)',
        capacity: '10 KL to 35 KL (11 to 40 Metric Tonnes)',
        pressure: '16 to 24 Bar Operating Pressure',
        description: 'Direct decanting into customer on-site storage vessels backed by 24/7 GPS routing and IoT digital tank telemetry.',
        idealFor: 'Steel melting shops, chemical synthesis complexes, large hospitals, and continuous float glass lines.'
      },
      {
        title: 'On-Site Storage Tanks (Rental / Opex Model)',
        capacity: '3 KL to 60 KL Cryogenic Storage Vessels',
        pressure: 'Custom Regulated Line Pressures up to 35 Bar',
        description: 'Turnkey installation of vacuum-insulated storage tanks, ambient air vaporizers, and telemetry on a rental model with zero upfront capital expenditure.',
        idealFor: 'Heavy industrial consumers seeking guaranteed supply with outsourced maintenance.'
      },
      {
        title: 'Cryogenic Dura Liquid Cylinders',
        capacity: '160L to 250L Portable Liquid Vessels',
        pressure: '16 to 24 Bar Max Pressure',
        description: 'Portable vacuum-insulated liquid cylinders replacing large high-pressure cylinder banks.',
        idealFor: 'Laser cutting units, pharmaceutical labs, and welding fabrication shops.'
      }
    ],
    applications: [
      { industry: 'Steel & Metallurgy', useCase: 'Blast furnace oxygen injection, AOD argon stirring & electric arc furnace cutting', recommendedPurity: '≥ 99.5% LOX / 99.999% LAR' },
      { industry: 'Chemicals & Refining', useCase: 'Volatile tank blanketing, inert gas purging & liquid nitrogen reaction cooling', recommendedPurity: '≥ 99.999% UHP LIN' },
      { industry: 'Healthcare & Life Sciences', useCase: 'Medical Oxygen IP bulk hospital supply and biological cryo-preservation', recommendedPurity: 'Medical Oxygen IP (FDA Approved)' },
      { industry: 'Food & Beverage', useCase: 'Liquid nitrogen tunnel flash freezing & LCO₂ carbonation (ISBT Standard)', recommendedPurity: '≥ 99.9% Food Grade' }
    ],
    handlingSafety: [
      'Cryogenic liquids exist below -180°C; contact causes instant tissue frostbite and destruction.',
      'Liquid oxygen vigorously accelerates fire; keep all grease and flammable materials away.',
      'Nitrogen and Argon rapidly displace atmospheric oxygen; install continuous oxygen depletion monitors in indoor areas.'
    ],
    relatedProducts: [
      { title: 'Liquid Oxygen (LOX)', slug: 'liquid-oxygen', formula: 'O₂' },
      { title: 'Liquid Nitrogen (LIN)', slug: 'liquid-nitrogen', formula: 'N₂' },
      { title: 'Liquid Argon (LAR)', slug: 'liquid-argon', formula: 'Ar' },
      { title: 'Liquid Carbon Dioxide (LCO₂)', slug: 'liquid-carbon-dioxide', formula: 'CO₂' }
    ],
    seoTitle: 'Bulk Cryogenic Gases Supplier India | Liquid Nitrogen (LIN), LOX, LAR Tankers | Shakti Group',
    seoDesc: 'Premier bulk cryogenic gases supplier in India. 448 TPD capacity, 65+ cryogenic road tankers (10-35 KL) delivering Liquid Nitrogen (LIN), Liquid Oxygen (LOX), Liquid Argon (LAR), and LCO2. Turnkey on-site cryogenic tank installation on rental model across Gujarat, Maharashtra & nationwide.',
    keywords: 'Bulk cryogenic gases supplier, Liquid nitrogen bulk supplier India, Liquid oxygen tanker supplier, Liquid argon bulk supplier, Bulk LCO2 tanker, on site cryogenic tank rental, cryogenic road tankers Gujarat Vadodara Dahej Ankleshwar, LIN bulk tanker',
    deliveryCoverage: ['Vadodara', 'Dahej PCPIR', 'Ankleshwar', 'Surat & Hazira', 'Ahmedabad', 'Sanand', 'Halol & Savli', 'Bharuch & Jhagadia', 'Maharashtra', 'Madhya Pradesh', 'Rajasthan', 'Pan-India'],
    faqs: [
      {
        question: 'Who is the leading bulk cryogenic gas supplier in India and Gujarat?',
        answer: 'Shakti Group is a premier bulk cryogenic gas manufacturer and distributor with 448 TPD manufacturing capacity and a fleet of 65+ dedicated vacuum-insulated cryogenic road tankers (10 KL to 35 KL). We deliver Liquid Nitrogen, Liquid Oxygen, Liquid Argon, and Liquid CO2 across Gujarat, Maharashtra, MP, Rajasthan, and nationwide.'
      },
      {
        question: 'What tanker capacities are available for bulk liquid gas deliveries?',
        answer: 'Our dedicated cryogenic tanker fleet includes 10 KL, 16 KL, 20 KL, 28 KL, and 35 KL capacity transport tankers, accommodating between 8 to 40 metric tonnes of liquefied gas per shipment.'
      },
      {
        question: 'Can we get an on-site cryogenic storage tank installed on a rental basis?',
        answer: 'Yes. Shakti Group provides turnkey on-site cryogenic storage tanks (3 KL to 60 KL) with ambient air vaporizers and IoT digital telemetry on an opex/rental model with zero upfront capital expenditure.'
      }
    ]
  },

  'industrial-cylinder': {
    slug: 'industrial-cylinder',
    title: 'Industrial Compressed Gases & Cylinders',
    chemicalFormula: 'O₂ / N₂ / Ar / CO₂ / H₂ / DA',
    symbolBadge: 'High-Pressure Cylinders',
    casNumber: 'Standard Industrial Identifiers',
    unNumber: 'UN 1072 (O₂) | UN 1006 (Ar) | UN 1001 (DA) | UN 1049 (H₂)',
    subtitle: 'High-pressure compressed gases supplied in 47L / 50L cylinders, 16-cylinder quads (MCP), and high-capacity mobile tube cascades.',
    heroImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1600',
    category: 'industrial',
    categoryLabel: 'Industrial & Cylinder Gases',
    categorySlug: 'industrial-cylinder',
    physicalState: 'High-Pressure Compressed Gas (150-200 Bar)',
    puritiesAvailable: [
      'Commercial Oxygen (≥ 99.5%)',
      'Industrial Shielding Argon (≥ 99.99%)',
      'Carbon Dioxide Welding Grade (≥ 99.9%)',
      'Dissolved Acetylene IS:308 Grade',
      'Compressed Nitrogen (≥ 99.99%)'
    ],
    physicalProperties: {
      boilingPoint: 'Varies by Chemistry',
      expansionRatio: 'Compressed Gas @ 150-200 Bar',
      gasDensity: 'Standard Atmospheric Data',
      molecularWeight: 'Specific to Compound',
      criticalTemp: 'Varies by Gas Type'
    },
    overview: 'Shakti Group operates 6+ high-pressure cylinder refilling stations equipped with automated compression manifolds, vacuum evacuation bays, and hydrostatic testing stations certified by PESO. We supply industrial cylinders, cylinder bundles (MCP quads), and mobile cascades across Gujarat and neighboring states.',
    supplyModes: [
      {
        title: 'High-Pressure Seamless Cylinders (47L / 50L)',
        capacity: '7m³ to 10m³ Compressed Gas',
        pressure: '150 Bar to 200 Bar',
        description: 'PESO certified carbon steel cylinders with color-coded bodies per IS:4379 standard.',
        idealFor: 'Fabrication workshops, maintenance operations, and medium cutting shops.'
      },
      {
        title: 'Manifold Cylinder Quads (MCP - 16 Cylinders)',
        capacity: '110m³ to 160m³ Bundled Volume',
        pressure: '150 Bar to 200 Bar',
        description: 'Pre-manifolded 16-cylinder steel pallets with single outlet connection for high-flow requirements.',
        idealFor: 'Construction projects, structural steel yards, and batch heat treatment.'
      },
      {
        title: 'Mobile Tube Cascades & Skids',
        capacity: '1,500m³ to 4,500m³ Bulk Gas',
        pressure: '200 Bar to 250 Bar',
        description: 'Multi-tube semi-trailers providing uninterrupted gaseous supply directly to plant manifolds.',
        idealFor: 'Refinery catalyst regeneration, pipeline pneumatic testing, and chemical synthesis.'
      }
    ],
    applications: [
      { industry: 'Metal Fabrication & Welding', useCase: 'MIG/TIG shielding (Argon/CO₂ mixtures) and oxy-acetylene cutting', recommendedPurity: 'Commercial & Shielding Grade' },
      { industry: 'Refineries & Petrochemicals', useCase: 'Emergency purging and pipeline pressure testing', recommendedPurity: 'Compressed Nitrogen (≥ 99.99%)' },
      { industry: 'Manufacturing & Automotive', useCase: 'Heat treatment inert atmosphere and laser assist gas', recommendedPurity: 'High-Purity Industrial Grade' }
    ],
    handlingSafety: [
      'Always secure high-pressure cylinders upright using robust safety chains or trolleys.',
      'Never allow oil, grease, or flammable lubricants on oxygen cylinder valves or regulators.',
      'Check hydrostatic test re-certification date stamped on the cylinder neck ring before use.'
    ],
    relatedProducts: [
      { title: 'Hydrogen Gas (H₂)', slug: 'hydrogen-gas', formula: 'H₂' },
      { title: 'Dissolved Acetylene (DA)', slug: 'dissolved-acetylene', formula: 'C₂H₂' },
      { title: 'Carbon Dioxide Gas (CO₂)', slug: 'carbon-dioxide-gas', formula: 'CO₂' }
    ],
    seoTitle: 'Industrial Compressed Gases & Cylinders Supplier Gujarat | Shakti Group',
    seoDesc: 'High-pressure seamless cylinders, 16-cylinder quads (MCP), and tube cascades. Dissolved Acetylene (DA), Oxygen, Nitrogen, Argon, and CO2 cylinders refilled at PESO certified stations.',
    keywords: 'Industrial Gas Cylinders Vadodara, Acetylene DA Supplier, MCP Cylinder Quads, Compressed Nitrogen Tankers',
    deliveryCoverage: ['Vadodara', 'Dahej', 'Ankleshwar', 'Surat', 'Ahmedabad', 'Gujarat', 'Western India']
  },

  'specialty-calibration': {
    slug: 'specialty-calibration',
    title: 'Specialty & Calibration Gas Mixtures',
    chemicalFormula: 'UHP & Multi-Component Mixes',
    symbolBadge: 'Grade 5.0 - 6.0 UHP',
    casNumber: 'Traceable Certified Mixes',
    unNumber: 'UN 1956 (Compressed Gas, N.O.S.)',
    subtitle: 'Ultra-High-Purity (UHP) gases up to Grade 6.0 and NIST/NABL traceable calibration mixtures for analytical laboratories and QC instruments.',
    heroImage: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1600',
    category: 'high-purity',
    categoryLabel: 'Specialty & Calibration Gases',
    categorySlug: 'specialty-calibration',
    physicalState: 'High-Purity Gas & Precision Gravimetric Mixes',
    puritiesAvailable: [
      'Ultra-High Purity Grade 5.0 (99.999%)',
      'Electronic Grade 5.5 (99.9995%)',
      'Semiconductor Grade 6.0 (99.9999%)',
      'NIST Traceable Calibration Mixtures (PPM / PPB)',
      'Laser Resonator Cutting Mixtures'
    ],
    physicalProperties: {
      boilingPoint: 'Certified Purity Specific',
      expansionRatio: 'Gravimetric Precision Blend',
      gasDensity: 'Gravimetric Certified Data',
      molecularWeight: 'NIST Traceable Composition',
      criticalTemp: 'Certified Environment'
    },
    overview: 'Shakti Sales Agency delivers Ultra-High Purity (UHP Grade 5.0 to 6.0) single gases and gravimetrically blended calibration mixtures for analytical gas chromatography, stack emissions CEMS monitoring, semiconductor research, and hazardous gas detector bump testing.',
    supplyModes: [
      {
        title: 'Specialty Gas Passivated Cylinders',
        capacity: '10L to 47L Aluminum / Stainless Lined',
        pressure: '150 Bar to 200 Bar',
        description: 'Internally polished and passivated cylinders maintaining mixture stability over long shelf lives.',
        idealFor: 'Gas chromatography carrier gas (Helium, Hydrogen, Nitrogen) and detector FID supply.'
      },
      {
        title: 'NIST/NABL Traceable Calibration Standards',
        capacity: 'PPM to % Level Concentrations',
        pressure: 'Custom Regulated',
        description: 'Multi-component mixtures certified with individual Certificates of Analysis (COA).',
        idealFor: 'CEMS stack emission calibration, ambient air monitoring, and pharmaceutical QC.'
      }
    ],
    applications: [
      { industry: 'Analytical Chemistry & QC', useCase: 'GC-MS carrier gas, ICP-MS collision gas & NMR spectroscopy', recommendedPurity: 'Grade 5.0 to 6.0' },
      { industry: 'Environmental & CEMS', useCase: 'Continuous Emission Monitoring System span calibration (SO₂, NOx, CO, O₂)', recommendedPurity: '±1% Analytical Tolerance' },
      { industry: 'Semiconductor Research', useCase: 'Epitaxial wafer growth and chamber plasma cleaning', recommendedPurity: 'Grade 6.0 UHP' }
    ],
    handlingSafety: [
      'Use dedicated stainless steel purge regulators to prevent ambient air contamination.',
      'Check Certificate of Analysis (COA) expiration date before calibration.',
      'Store toxic or corrosive mixture components in ventilated gas cabinets.'
    ],
    relatedProducts: [
      { title: 'Helium Gas (He)', slug: 'helium-gas', formula: 'He' },
      { title: 'High Purity Oxygen', slug: 'high-purity-oxygen', formula: 'O₂' },
      { title: 'Calibration Gas Mixtures', slug: 'calibration-gas-mixtures', formula: 'Mixtures' }
    ],
    seoTitle: 'Specialty Gases & Calibration Standards Supplier India | Shakti Group',
    seoDesc: 'Ultra-High Purity (UHP) gases (Grade 5.0 - 6.0) and NIST traceable calibration gas mixtures for GC-MS, CEMS, and analytical laboratories.',
    keywords: 'Specialty Gases Gujarat, UHP Argon, Calibration Gas Mixtures, Gas Chromatography Carrier Gas',
    deliveryCoverage: ['Vadodara', 'Ahmedabad', 'Surat', 'Mumbai', 'Pune', 'Delhi NCR', 'Pan-India']
  },

  'other': {
    slug: 'other',
    title: 'Dry Ice, Cryogenic Dewars & Gas Hardware',
    chemicalFormula: 'Solid CO₂ / Hardware',
    symbolBadge: 'Dry Ice & Equipment',
    casNumber: '124-38-9 (CO₂)',
    unNumber: 'UN 1845 (Carbon Dioxide, Solid)',
    subtitle: 'Food-grade solid CO₂ dry ice pellets and blocks, cryogenic liquid dewars, pressure regulators, and manifold hardware.',
    heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600',
    category: 'other',
    categoryLabel: 'Other Products & Hardware',
    categorySlug: 'other',
    physicalState: 'Solid (-78.5°C) & Cryogenic Equipment',
    puritiesAvailable: [
      'Food Grade Solid CO₂ (≥ 99.9%)',
      '3mm High-Density Pellets',
      '6mm Pellets for Cold-Chain Storage',
      '5kg Insulated High-Density Blocks'
    ],
    physicalProperties: {
      boilingPoint: '-78.5°C Sublimation Point',
      expansionRatio: '1 kg Solid = ~500L CO₂ Gas',
      gasDensity: '1.56 g/cm³ (Solid Density)',
      molecularWeight: '44.01 g/mol',
      criticalTemp: '31.1°C'
    },
    overview: 'Bhavani Enterprise and Shakti Group manufacture food-grade solid CO₂ dry ice pellets and blocks for cold-chain pharmaceutical shipping, catering, and blast cleaning. We also supply liquid nitrogen dewars, high-pressure regulators, and gas manifold accessories.',
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
    relatedProducts: [
      { title: 'Liquid Carbon Dioxide (LCO₂)', slug: 'liquid-carbon-dioxide', formula: 'CO₂' },
      { title: 'Liquid Nitrogen (LIN)', slug: 'liquid-nitrogen', formula: 'N₂' }
    ],
    seoTitle: 'Dry Ice, Cryogenic Dewars & Gas Hardware Supplier | Shakti Group',
    seoDesc: 'Solid CO2 dry ice pellets and blocks, liquid nitrogen dewars, and pressure regulators in Gujarat. FSSAI food grade dry ice supplier in Vadodara.',
    keywords: 'Dry Ice Supplier Vadodara, Solid CO2 Blocks, Liquid Nitrogen Dewar, Gas Pressure Regulators',
    deliveryCoverage: ['Vadodara', 'Ahmedabad', 'Surat', 'Ankleshwar', 'Bharuch', 'Gujarat', 'Western India']
  }
};

export const ALL_PRODUCTS_SUBPAGES_DATA: Record<string, ProductPageData> = {
  ...CATEGORY_SUBPAGES_DATA,
  ...INDIVIDUAL_PRODUCTS_DATA
};

export const PRODUCT_SUBPAGES_DATA = ALL_PRODUCTS_SUBPAGES_DATA;

export const ProductSubPage: React.FC = () => {
  const location = useLocation();
  const rawSlug = location.pathname.split('/').pop() || 'bulk-cryogenic';
  const resolvedSlug = PRODUCT_SLUG_ALIASES[rawSlug.toLowerCase()] || rawSlug;
  const data = ALL_PRODUCTS_SUBPAGES_DATA[resolvedSlug] || CATEGORY_SUBPAGES_DATA['bulk-cryogenic'];

  const isIndividualProduct = !(data.slug in CATEGORY_SUBPAGES_DATA);

  // Structured Data (JSON-LD)
  const canonicalUrl = `https://www.shaktigases.com/products/${data.slug}`;

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: data.title,
    alternateName: data.alternateNames || [data.title],
    description: data.seoDesc || data.subtitle,
    category: data.categoryLabel,
    brand: {
      '@type': 'Brand',
      name: 'Shakti Industrial Gases (Shakti Group)'
    },
    sku: `SHAKTI-${data.slug.toUpperCase()}`,
    mpn: `SHAKTI-${data.slug.toUpperCase()}`,
    image: data.heroImage || 'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/product_hero.png',
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Chemical Formula', value: data.chemicalFormula },
      { '@type': 'PropertyValue', name: 'CAS Number', value: data.casNumber },
      { '@type': 'PropertyValue', name: 'UN Transport Number', value: data.unNumber },
      { '@type': 'PropertyValue', name: 'Boiling Point', value: data.physicalProperties.boilingPoint },
      { '@type': 'PropertyValue', name: 'Expansion Ratio', value: data.physicalProperties.expansionRatio },
      { '@type': 'PropertyValue', name: 'Purity Grades', value: data.puritiesAvailable.join(', ') },
      { '@type': 'PropertyValue', name: 'PESO Clearance', value: '100% Certified Cylinders, Vessels & Road Tankers' },
      { '@type': 'PropertyValue', name: 'Supply Logistics', value: '65+ Cryogenic Road Tankers & On-Site Storage Tank Rental' }
    ],
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      price: 'Custom Industrial Quotation',
      priceValidUntil: '2027-12-31',
      seller: {
        '@type': 'Organization',
        name: 'Shakti Group of Companies',
        telephone: '+91-9825008544',
        url: 'https://www.shaktigases.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '301, 3rd Floor, Golden Icon, Bird Circle, Race Course Road',
          addressLocality: 'Vadodara',
          addressRegion: 'Gujarat',
          postalCode: '390007',
          addressCountry: 'IN'
        }
      }
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
        name: 'Products',
        item: 'https://www.shaktigases.com/products'
      },
      ...(data.categorySlug && data.slug !== data.categorySlug ? [{
        '@type': 'ListItem',
        position: 3,
        name: data.categoryLabel,
        item: `https://www.shaktigases.com/products/${data.categorySlug}`
      }, {
        '@type': 'ListItem',
        position: 4,
        name: data.title,
        item: canonicalUrl
      }] : [{
        '@type': 'ListItem',
        position: 3,
        name: data.title,
        item: canonicalUrl
      }])
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

  const combinedSchema = [productSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])];

  // List of other gases in the same category for clean sidebar navigation
  const siblingProducts = Object.values(INDIVIDUAL_PRODUCTS_DATA).filter(
    p => p.category === data.category && p.slug !== data.slug
  ).slice(0, 5);

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <SEO
        title={data.seoTitle}
        description={data.seoDesc}
        keywords={data.keywords}
        canonicalUrl={canonicalUrl}
        schemaJson={combinedSchema}
      />

      {/* Clean, Refined Hero Header (No Blobs, No Box Clutter) */}
      <header className="relative bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-5 font-medium">
            <NavLink to="/" className="hover:text-white transition">Home</NavLink>
            <ChevronRight className="h-3 w-3 text-slate-600" />
            <NavLink to="/products" className="hover:text-white transition">Products</NavLink>
            {data.categorySlug && data.slug !== data.categorySlug && (
              <>
                <ChevronRight className="h-3 w-3 text-slate-600" />
                <NavLink to={`/products/${data.categorySlug}`} className="hover:text-white transition text-slate-300">
                  {data.categoryLabel}
                </NavLink>
              </>
            )}
            <ChevronRight className="h-3 w-3 text-slate-600" />
            <span className="text-sky-400 font-semibold truncate max-w-xs">{data.title}</span>
          </nav>

          {/* Title & Chemical Formula Header */}
          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-baseline gap-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
                {data.title}
              </h1>
              {data.chemicalFormula && (
                <span className="font-mono text-xs sm:text-sm font-bold px-2.5 py-1 rounded bg-sky-950 text-sky-400 border border-sky-800/80">
                  {data.chemicalFormula}
                </span>
              )}
            </div>

            <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-normal max-w-3xl">
              {data.subtitle}
            </p>

            {/* Quiet, Cohesive Technical Meta Strip (Replacing Scattered Pill Blobs) */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 pt-3 text-xs text-slate-400 font-medium">
              <div>
                <span className="text-slate-500">Classification:</span>{' '}
                <span className="text-slate-200 font-semibold">{data.categoryLabel}</span>
              </div>
              {data.casNumber && (
                <div>
                  <span className="text-slate-500">CAS:</span>{' '}
                  <span className="text-slate-200 font-mono">{data.casNumber}</span>
                </div>
              )}
              {data.unNumber && (
                <div>
                  <span className="text-slate-500">Transport:</span>{' '}
                  <span className="text-slate-200 font-mono">{data.unNumber}</span>
                </div>
              )}
              {data.physicalState && (
                <div>
                  <span className="text-slate-500">Physical State:</span>{' '}
                  <span className="text-slate-200 font-semibold">{data.physicalState}</span>
                </div>
              )}
              <div className="text-emerald-400 font-semibold flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>PESO Certified</span>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-2 bg-sky-700 hover:bg-sky-800 text-white text-xs font-bold px-5 py-2.5 rounded-lg transition shadow-sm"
              >
                <span>Request Quotation & Spec Sheet</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </NavLink>

              <a
                href="tel:+919825008544"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold px-4 py-2.5 rounded-lg transition border border-slate-700"
              >
                <PhoneCall className="h-3.5 w-3.5 text-emerald-400" />
                <span>Plant Dispatch: +91 98250 08544</span>
              </a>
            </div>
          </div>

        </div>
      </header>

      {/* Main Technical Content Structure */}
      <main className="py-10 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* Primary Column (8 Columns) */}
          <div className="lg:col-span-8 space-y-10">

            {/* 1. Technical Overview */}
            <section className="space-y-3">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  Product Overview & Technical Scope
                </h2>
                <span className="text-xs font-bold text-sky-800 uppercase">
                  {data.categoryLabel}
                </span>
              </div>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                {data.overview}
              </p>
            </section>

            {/* 2. Physical & Chemical Properties Specifications Matrix */}
            <section className="space-y-3">
              <div className="border-b border-slate-200 pb-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Gauge className="h-4 w-4 text-sky-800" />
                  <span>Physical & Chemical Properties</span>
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                  <span className="text-[11px] font-semibold text-slate-500 block uppercase tracking-wider">
                    Boiling Point
                  </span>
                  <span className="text-sm font-bold font-mono text-slate-900 mt-1 block">
                    {data.physicalProperties.boilingPoint}
                  </span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                  <span className="text-[11px] font-semibold text-slate-500 block uppercase tracking-wider">
                    Expansion Ratio
                  </span>
                  <span className="text-sm font-bold font-mono text-slate-900 mt-1 block">
                    {data.physicalProperties.expansionRatio}
                  </span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                  <span className="text-[11px] font-semibold text-slate-500 block uppercase tracking-wider">
                    Gas Density
                  </span>
                  <span className="text-sm font-bold font-mono text-slate-900 mt-1 block">
                    {data.physicalProperties.gasDensity}
                  </span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                  <span className="text-[11px] font-semibold text-slate-500 block uppercase tracking-wider">
                    Molecular Weight
                  </span>
                  <span className="text-sm font-bold font-mono text-slate-900 mt-1 block">
                    {data.physicalProperties.molecularWeight}
                  </span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 sm:col-span-2">
                  <span className="text-[11px] font-semibold text-slate-500 block uppercase tracking-wider">
                    Critical Temperature / State
                  </span>
                  <span className="text-sm font-bold font-mono text-slate-900 mt-1 block">
                    {data.physicalProperties.criticalTemp}
                  </span>
                </div>
              </div>
            </section>

            {/* 3. Available Purity Grades */}
            <section className="space-y-3">
              <div className="border-b border-slate-200 pb-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-sky-800" />
                  <span>Available Purity Grades & Standards</span>
                </h3>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100">
                {data.puritiesAvailable.map((grade, idx) => (
                  <div key={idx} className="p-3.5 flex items-center justify-between gap-3 text-xs sm:text-sm">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span className="font-semibold text-slate-800">{grade}</span>
                    </div>
                    <span className="text-[11px] font-mono font-medium text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200 shrink-0">
                      Certified Analysis
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Supply Modes & Packaging */}
            <section className="space-y-4">
              <div className="border-b border-slate-200 pb-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Truck className="h-4 w-4 text-sky-800" />
                  <span>Supply Modes, Packaging & Transport Formats</span>
                </h3>
              </div>

              <div className="space-y-3">
                {data.supplyModes.map((mode, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                        {mode.title}
                      </h4>
                      <span className="bg-slate-100 text-slate-800 font-semibold text-xs px-2.5 py-0.5 rounded border border-slate-200 self-start sm:self-auto">
                        {mode.capacity}
                      </span>
                    </div>

                    <div className="text-xs text-sky-800 font-medium mb-2 flex items-center gap-1.5">
                      <Gauge className="h-3.5 w-3.5" />
                      <span>{mode.pressure}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                      {mode.description}
                    </p>

                    <div className="text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <strong className="text-slate-900">Recommended For:</strong> {mode.idealFor}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Industrial Applications Table */}
            <section className="space-y-3">
              <div className="border-b border-slate-200 pb-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Boxes className="h-4 w-4 text-sky-800" />
                  <span>Industrial Applications & Manufacturing Processes</span>
                </h3>
              </div>

              <div className="overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-2xs">
                <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                  <thead className="bg-slate-50 text-slate-900 font-bold uppercase tracking-wider text-xs border-b border-slate-200">
                    <tr>
                      <th className="p-3.5">Industry</th>
                      <th className="p-3.5">Application / Process</th>
                      <th className="p-3.5">Recommended Purity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {data.applications.map((app, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                        <td className="p-3.5 font-bold text-slate-900 whitespace-nowrap">{app.industry}</td>
                        <td className="p-3.5">{app.useCase}</td>
                        <td className="p-3.5 font-semibold text-sky-800 whitespace-nowrap">{app.recommendedPurity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 6. Handling & Safety Directives */}
            {data.handlingSafety && data.handlingSafety.length > 0 && (
              <section className="space-y-3">
                <div className="border-b border-slate-200 pb-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-600" />
                    <span>Handling, Storage & Safety Protocols</span>
                  </h3>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 space-y-2.5">
                  <ul className="space-y-2 text-xs sm:text-sm text-amber-950">
                    {data.handlingSafety.map((safe, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                        <span className="leading-relaxed">{safe}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2 border-t border-amber-200/60 text-xs text-amber-900 flex items-center justify-between">
                    <span>100% PESO statutory compliance guaranteed.</span>
                    <NavLink
                      to="/company/quality-safety"
                      className="font-bold underline hover:text-amber-950"
                    >
                      View Safety Certifications →
                    </NavLink>
                  </div>
                </div>
              </section>
            )}

            {/* 7. Related Gases */}
            {data.relatedProducts && data.relatedProducts.length > 0 && (
              <section className="space-y-3 pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <Atom className="h-4 w-4 text-sky-800" />
                    <span>Related Gases in this Family</span>
                  </h3>
                  <NavLink to="/products" className="text-xs font-semibold text-sky-800 hover:underline">
                    View Full Directory →
                  </NavLink>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {data.relatedProducts.map((rel, rIdx) => (
                    <NavLink
                      key={rIdx}
                      to={`/products/${rel.slug}`}
                      className="p-3.5 rounded-lg border border-slate-200 hover:border-sky-300 hover:shadow-2xs transition bg-white flex flex-col justify-between group"
                    >
                      <div>
                        <span className="text-xs font-mono font-bold text-sky-800 block mb-1">
                          {rel.formula}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-sky-800 transition-colors">
                          {rel.title}
                        </h4>
                      </div>
                      <span className="text-xs font-medium text-sky-800 flex items-center gap-1 mt-2">
                        <span>View Specs</span>
                        <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </NavLink>
                  ))}
                </div>
              </section>
            )}

            {/* 8. Frequently Asked Questions (If available) */}
            {data.faqs && data.faqs.length > 0 && (
              <section className="space-y-4 pt-4 border-t border-slate-200">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-sky-800" />
                  <span>Frequently Asked Technical Questions</span>
                </h3>

                <div className="space-y-3">
                  {data.faqs.map((faq, fIdx) => (
                    <div key={fIdx} className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1.5">
                        {faq.question}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* Sidebar (4 Columns) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">

            {/* Direct Plant Quotation Card */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-4 shadow-2xs">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-800 block mb-0.5">
                  Direct Plant Supply
                </span>
                <h3 className="text-base font-bold text-slate-900">
                  Request Commercial Quotation
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Connect directly with Shakti Group plant engineers for bulk road tankers (10-35 KL), cylinder quads, or turnkey storage tank setups.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                <NavLink
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full bg-sky-700 hover:bg-sky-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition shadow-sm"
                >
                  <span>Request Custom Quotation</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </NavLink>

                <a
                  href="tel:+919825008544"
                  className="flex items-center justify-center gap-2 w-full bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-semibold px-4 py-2.5 rounded-lg transition border border-slate-200"
                >
                  <PhoneCall className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Call +91 98250 08544</span>
                </a>
              </div>

              <div className="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-sky-800 shrink-0" />
                  <span>24/7 Dedicated Logistics Dispatch</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-sky-800 shrink-0" />
                  <span>2 - 4 Hour TAT across Gujarat Belts</span>
                </div>
              </div>
            </div>

            {/* Turnkey On-Site Storage Setup (For Liquid / Bulk Products) */}
            {(data.category === 'liquid' || data.slug === 'bulk-cryogenic') && (
              <div className="bg-slate-950 text-white rounded-xl p-5 space-y-3 border border-slate-800">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider">
                    On-Site Storage Setup
                  </span>
                  <span className="text-[10px] bg-sky-900/60 text-sky-200 px-2 py-0.5 rounded font-semibold">
                    Rental / Opex
                  </span>
                </div>

                <h4 className="text-sm font-bold text-white">
                  Turnkey Cryogenic Tank Installation
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Install 3 KL to 60 KL vacuum-insulated storage vessels with zero capital expenditure. 24/7 IoT level telemetry triggers automated tanker replenishment.
                </p>

                <NavLink
                  to="/solutions/bulk-gas-supply"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-white pt-1 transition"
                >
                  <span>Learn about Tank Rental</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </NavLink>
              </div>
            )}

            {/* Other Gases in this Category (Replacing the 10-pill horizontal overflow) */}
            {siblingProducts.length > 0 && (
              <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 space-y-3">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Other {data.categoryLabel}
                </h4>

                <ul className="space-y-1.5 text-xs">
                  {siblingProducts.map((sib) => (
                    <li key={sib.slug}>
                      <NavLink
                        to={`/products/${sib.slug}`}
                        className="p-2 rounded-lg bg-white border border-slate-200/80 hover:border-sky-300 hover:text-sky-800 transition flex items-center justify-between font-medium text-slate-700"
                      >
                        <span className="flex items-center gap-2">
                          <span className="font-mono text-[11px] font-bold text-sky-800 w-8">
                            {sib.chemicalFormula}
                          </span>
                          <span className="truncate">{sib.title}</span>
                        </span>
                        <ChevronRight className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                      </NavLink>
                    </li>
                  ))}
                </ul>

                <NavLink
                  to="/products"
                  className="block text-center text-xs font-bold text-sky-800 hover:underline pt-2"
                >
                  Browse Full Gas Catalog →
                </NavLink>
              </div>
            )}

            {/* Direct Category Directory */}
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 space-y-2">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                All Product Categories
              </h4>
              <ul className="space-y-1 text-xs">
                <li>
                  <NavLink
                    to="/products/bulk-cryogenic"
                    className={({ isActive }) =>
                      `block p-1.5 rounded font-medium transition ${
                        isActive || data.slug === 'bulk-cryogenic'
                          ? 'text-sky-900 font-bold bg-sky-100/70'
                          : 'text-slate-600 hover:text-slate-900'
                      }`
                    }
                  >
                    • Bulk & Cryogenic Gases
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products/industrial-cylinder"
                    className={({ isActive }) =>
                      `block p-1.5 rounded font-medium transition ${
                        isActive || data.slug === 'industrial-cylinder'
                          ? 'text-sky-900 font-bold bg-sky-100/70'
                          : 'text-slate-600 hover:text-slate-900'
                      }`
                    }
                  >
                    • Industrial Compressed Cylinders
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products/specialty-calibration"
                    className={({ isActive }) =>
                      `block p-1.5 rounded font-medium transition ${
                        isActive || data.slug === 'specialty-calibration'
                          ? 'text-sky-900 font-bold bg-sky-100/70'
                          : 'text-slate-600 hover:text-slate-900'
                      }`
                    }
                  >
                    • Specialty & Calibration Gases
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products/other"
                    className={({ isActive }) =>
                      `block p-1.5 rounded font-medium transition ${
                        isActive || data.slug === 'other'
                          ? 'text-sky-900 font-bold bg-sky-100/70'
                          : 'text-slate-600 hover:text-slate-900'
                      }`
                    }
                  >
                    • Dry Ice, Dewars & Hardware
                  </NavLink>
                </li>
              </ul>
            </div>

          </aside>

        </div>
      </main>
    </div>
  );
};

export default ProductSubPage;

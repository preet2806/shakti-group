import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  ChevronRight,
  CheckCircle2,
  FlaskConical,
  Truck,
  Gauge,
  Boxes,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Zap,
  PhoneCall,
  Atom,
  Grid,
  MapPin,
  HelpCircle,
  ChevronDown,
  Tag,
  Clock,
  Sparkles
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
    subtitle: 'Industrial-volume liquid oxygen, nitrogen, argon, and CO₂ delivered via our 65+ vacuum-insulated cryogenic road tankers (10-35 KL) and on-site tank setups.',
    heroImage: 'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/product_hero.png',
    category: 'liquid',
    categoryLabel: 'Bulk & Cryogenic Gases',
    categorySlug: 'bulk-cryogenic',
    puritiesAvailable: ['99.5% Commercial LOX', '99.999% UHP LIN (Grade 5.0)', '99.999% High Purity LAR', '99.9% Food Grade LCO₂ (E290)'],
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
    alternateNames: ['Bulk Cryogenic Gases', 'Liquid Nitrogen Bulk Supplier', 'Liquid Oxygen Tanker Supplier', 'Bulk Cryogenic Liquids', 'Cryogenic Tank Rental'],
    targetQueries: [
      'Liquid nitrogen bulk supplier India',
      'Bulk cryogenic gas supplier India',
      'Liquid oxygen cryogenic road tanker supplier',
      'On-site cryogenic storage tank rental setup',
      'Bulk LIN LAR LOX supplier Gujarat'
    ],
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
    puritiesAvailable: ['99.5% Commercial Oxygen', '99.99% Industrial Argon', '99.9% Carbon Dioxide', '99.5% Dissolved Acetylene', '99.99% Compressed Nitrogen'],
    physicalProperties: {
      boilingPoint: 'Varies by Gas Chemistry',
      expansionRatio: 'Compressed Gas @ 150-200 Bar',
      gasDensity: 'Standard Atmospheric Data',
      molecularWeight: 'Varies by Chemical Formula',
      criticalTemp: 'Varies by Gas Type'
    },
    overview: 'Shakti Group operates 6+ high-pressure cylinder refilling stations equipped with automated compression manifolds, vacuum evacuation bays, and hydrostatic testing stations certified by PESO. We supply industrial cylinders, cylinder bundles (MCP quads), and mobile cascades across Gujarat and neighboring states.',
    supplyModes: [
      {
        title: 'High-Pressure Seamless Cylinders (47L / 50L)',
        capacity: '7m³ to 10m³ Compressed Gas',
        pressure: '150 Bar to 200 Bar',
        description: 'Individually tested steel cylinders color-coded per IS:4379 with PESO approved brass valves.',
        idealFor: 'Metal fabrication workshops, maintenance facilities, and construction sites.'
      },
      {
        title: 'Multi-Cylinder Packs (MCP Quads)',
        capacity: '12 to 16 Cylinder Bundles (~100m³)',
        pressure: '200 Bar Integrated Header',
        description: 'Manifolded cylinder quads in heavy steel lifting cages with single central pressure regulator connection.',
        idealFor: 'Heavy structural fabrication, laser cutting workshops, and pipeline testing.'
      },
      {
        title: 'Mobile Hydrogen Tube Cascades',
        capacity: '1,500m³ to 4,500m³ High-Volume Supply',
        pressure: 'Up to 200 Bar',
        description: 'Multi-tube trailer cascades connected to customer pressure regulating and decanting skids.',
        idealFor: 'Refineries, continuous bright annealing furnaces, and chemical plants.'
      }
    ],
    applications: [
      { industry: 'Metal Fabrication & Welding', useCase: 'Oxy-acetylene cutting, brazing, and TIG/MIG inert shielding', recommendedPurity: 'Argon ≥ 99.99% / DA ≥ 98.5%' },
      { industry: 'Laser Cutting Assist Gas', useCase: 'High-pressure nitrogen cutting of stainless steel & aluminum sheets', recommendedPurity: 'Nitrogen ≥ 99.999%' },
      { industry: 'Heat Treatment & Annealing', useCase: 'Hydrogen & nitrogen protective reducing atmosphere in bright annealing', recommendedPurity: 'Hydrogen ≥ 99.99% / N₂ ≥ 99.99%' }
    ],
    handlingSafety: [
      'Store high-pressure gas cylinders vertically and secure with safety chains to prevent toppling.',
      'Always use a certified two-stage pressure regulator matching the specific gas valve type.',
      'Keep flammable gases like Acetylene and Hydrogen separated from Oxygen cylinders.'
    ],
    relatedProducts: [
      { title: 'Dissolved Acetylene (DA)', slug: 'dissolved-acetylene', formula: 'C₂H₂' },
      { title: 'Hydrogen Gas (H₂)', slug: 'hydrogen-gas', formula: 'H₂' },
      { title: 'Carbon Dioxide Gas (CO₂)', slug: 'carbon-dioxide-gas', formula: 'CO₂' }
    ],
    seoTitle: 'Industrial Gas Cylinders & MCP Quads Supplier India | Shakti Group',
    seoDesc: 'High-pressure Oxygen, Nitrogen, Argon, CO2, Hydrogen, and Acetylene cylinders and MCP quads. 100% PESO certified refilling stations in Gujarat.',
    keywords: 'Industrial Gas Cylinders Vadodara, Oxygen Cylinder Supply, Argon Gas Quad, Hydrogen Cascades',
    targetQueries: [
      'Industrial gas cylinder refilling near me',
      'Oxygen cylinder supplier Gujarat',
      'Nitrogen gas cylinder MCP quad bundle',
      'Dissolved acetylene gas cylinder supplier'
    ],
    deliveryCoverage: ['Vadodara', 'Ahmedabad', 'Surat', 'Ankleshwar', 'Dahej', 'Halol', 'Savli', 'Bharuch', 'Gujarat']
  },

  'specialty-calibration': {
    slug: 'specialty-calibration',
    title: 'Specialty & Calibration Gases Catalog',
    chemicalFormula: 'Grade 5.0 - 6.0 / NIST Standards',
    symbolBadge: 'UHP & Calibration Standards',
    casNumber: 'Traceable Certified Blends',
    unNumber: 'UN 1956 (Compressed Gas N.O.S.)',
    subtitle: 'Ultra-High Purity (UHP) carrier gases and NIST/NABL traceable multi-component calibration gas mixtures for analytical laboratories and CEMS.',
    heroImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1600',
    category: 'high-purity',
    categoryLabel: 'Specialty & Calibration Gases',
    categorySlug: 'specialty-calibration',
    puritiesAvailable: ['Grade 5.0 (99.999%)', 'Grade 5.5 (99.9995%)', 'Grade 6.0 (99.9999%)', 'PPM / PPB Trace Gas Blends', 'NIST / NABL Traceable Calibration Standards'],
    physicalProperties: {
      boilingPoint: 'Certified Purity Specific',
      expansionRatio: 'N/A - Gravimetric Precision',
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
    targetQueries: [
      'Specialty gas supplier India',
      'Calibration gas mixtures supplier Gujarat',
      'Ultra high purity UHP grade 5.0 6.0 gases',
      'GC-MS carrier gas helium nitrogen supplier'
    ],
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
    puritiesAvailable: ['Food Grade Solid CO₂ (≥ 99.9%)', '3mm High-Density Pellets', '6mm Pellets', '5kg Insulated Blocks'],
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
    targetQueries: [
      'Dry ice supplier in Vadodara Gujarat',
      'Solid CO2 dry ice pellets for pharma cold chain',
      'Liquid nitrogen dewar flask container supplier',
      'High pressure gas regulator double stage'
    ],
    deliveryCoverage: ['Vadodara', 'Ahmedabad', 'Surat', 'Ankleshwar', 'Bharuch', 'Gujarat', 'Western India']
  }
};

// Combined dictionary of all subpages (categories + individual products)
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

  // State for interactive FAQ accordion
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  // Structured Data (JSON-LD) multi-schema graph for search engines
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

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <SEO
        title={data.seoTitle}
        description={data.seoDesc}
        keywords={data.keywords}
        canonicalUrl={canonicalUrl}
        schemaJson={combinedSchema}
      />

      {/* Hero Header */}
      <div className="bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">

          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-6">
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
            <span className="text-blue-400 font-semibold">{data.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-blue-600 text-white font-bold text-xs px-3 py-1 rounded-md uppercase tracking-wider shadow-sm">
                  {data.symbolBadge}
                </span>
                <span className="bg-slate-800 text-blue-300 font-mono text-xs px-3 py-1 rounded-md border border-slate-700 font-semibold">
                  Formula: {data.chemicalFormula}
                </span>
                {data.casNumber && (
                  <span className="bg-slate-800 text-slate-300 font-mono text-xs px-3 py-1 rounded-md border border-slate-700">
                    CAS: {data.casNumber}
                  </span>
                )}
                {data.unNumber && (
                  <span className="bg-slate-800 text-slate-300 font-mono text-xs px-3 py-1 rounded-md border border-slate-700">
                    {data.unNumber}
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                {data.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {data.subtitle}
              </p>

              {/* Quality & PESO Assurance Badges */}
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400">
                <div className="flex items-center gap-1.5 text-slate-300">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  <span>PESO Certified Storage & Tankers</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-blue-400" />
                  <span>ISO 9001:2015 Quality Tested</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-300">
                  <Zap className="h-4 w-4 text-amber-400" />
                  <span>IoT Fleet & Tank Telemetry</span>
                </div>
              </div>
            </div>

            {/* Quick Action Card */}
            <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-xl shrink-0 w-full lg:w-72 space-y-3">
              <span className="text-xs font-semibold text-slate-300 block uppercase tracking-wider">
                Direct Supply Inquiries
              </span>
              <p className="text-xs text-slate-400">
                Need bulk tanker loads (10-35 KL), cylinder bundles, or an on-site storage tank setup?
              </p>
              <NavLink
                to="/contact"
                className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-3 rounded-lg transition shadow-md"
              >
                <span>Request Technical Quote</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </NavLink>
              <a
                href="tel:+919825008544"
                className="flex items-center justify-center gap-2 w-full bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-semibold px-4 py-2.5 rounded-lg transition border border-slate-600"
              >
                <PhoneCall className="h-3.5 w-3.5 text-emerald-400" />
                <span>Call +91 98250 08544</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Quick Switcher of Key Products */}
      <section className="bg-slate-100 border-b border-slate-200 py-3 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs">
          <span className="font-bold text-slate-600 uppercase tracking-wider shrink-0 flex items-center gap-1 mr-2">
            <Grid className="h-3.5 w-3.5 text-blue-600" />
            Quick Select:
          </span>
          <div className="flex items-center gap-1.5 flex-nowrap overflow-x-auto py-1">
            <NavLink
              to="/products/liquid-nitrogen"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition border ${
                  isActive || data.slug === 'liquid-nitrogen'
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-300 hover:border-blue-400 hover:text-blue-600'
                }`
              }
            >
              Liquid Nitrogen (LIN)
            </NavLink>
            <NavLink
              to="/products/liquid-oxygen"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition border ${
                  isActive || data.slug === 'liquid-oxygen'
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-300 hover:border-blue-400 hover:text-blue-600'
                }`
              }
            >
              Liquid Oxygen (LOX)
            </NavLink>
            <NavLink
              to="/products/liquid-argon"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition border ${
                  isActive || data.slug === 'liquid-argon'
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-300 hover:border-blue-400 hover:text-blue-600'
                }`
              }
            >
              Liquid Argon (LAR)
            </NavLink>
            <NavLink
              to="/products/liquid-carbon-dioxide"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition border ${
                  isActive || data.slug === 'liquid-carbon-dioxide'
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-300 hover:border-blue-400 hover:text-blue-600'
                }`
              }
            >
              Liquid CO₂ (LCO₂)
            </NavLink>
            <NavLink
              to="/products/bulk-cryogenic"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition border ${
                  isActive || data.slug === 'bulk-cryogenic'
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-300 hover:border-blue-400 hover:text-blue-600'
                }`
              }
            >
              Bulk Cryogenic Catalog
            </NavLink>
            <NavLink
              to="/products/hydrogen-gas"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition border ${
                  isActive || data.slug === 'hydrogen-gas'
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-300 hover:border-blue-400 hover:text-blue-600'
                }`
              }
            >
              Hydrogen Gas (H₂)
            </NavLink>
            <NavLink
              to="/products/dissolved-acetylene"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition border ${
                  isActive || data.slug === 'dissolved-acetylene'
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-300 hover:border-blue-400 hover:text-blue-600'
                }`
              }
            >
              Dissolved Acetylene (DA)
            </NavLink>
            <NavLink
              to="/products/helium-gas"
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition border ${
                  isActive || data.slug === 'helium-gas'
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-300 hover:border-blue-400 hover:text-blue-600'
                }`
              }
            >
              Helium Gas (He)
            </NavLink>
            <NavLink
              to="/products"
              className="px-3 py-1.5 rounded-full font-semibold text-blue-700 bg-blue-50 border border-blue-200 hover:bg-blue-100 whitespace-nowrap transition"
            >
              View Full Catalog →
            </NavLink>
          </div>
        </div>
      </section>

      {/* Physical & Thermodynamic Properties Bar */}
      <section className="bg-slate-50 border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <FlaskConical className="h-4 w-4 text-blue-700" />
            <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Technical Physical & Thermodynamic Properties
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-xs">
              <span className="text-[11px] font-semibold text-slate-500 block">Boiling Point</span>
              <span className="text-xs font-bold text-slate-900">{data.physicalProperties.boilingPoint}</span>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-xs">
              <span className="text-[11px] font-semibold text-slate-500 block">Expansion Ratio</span>
              <span className="text-xs font-bold text-blue-700">{data.physicalProperties.expansionRatio}</span>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-xs">
              <span className="text-[11px] font-semibold text-slate-500 block">Gas Density</span>
              <span className="text-xs font-bold text-slate-900">{data.physicalProperties.gasDensity}</span>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-xs">
              <span className="text-[11px] font-semibold text-slate-500 block">Molecular Weight</span>
              <span className="text-xs font-bold text-slate-900">{data.physicalProperties.molecularWeight}</span>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-xs">
              <span className="text-[11px] font-semibold text-slate-500 block">Critical Temp / Press.</span>
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
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2 flex items-center justify-between">
                <span>Product Overview & Technical Scope</span>
                <span className="text-xs font-semibold text-blue-700 uppercase bg-blue-50 px-2.5 py-1 rounded">
                  {data.categoryLabel}
                </span>
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {data.overview}
              </p>
            </div>

            {/* On-Site Storage Rental Highlight (For Bulk / Cryo Gases) */}
            {(data.category === 'liquid' || data.slug === 'bulk-cryogenic') && (
              <div className="bg-gradient-to-r from-blue-900 to-indigo-950 text-white p-6 rounded-2xl border border-blue-800 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="bg-blue-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded uppercase">
                    Storage Setup Options Available
                  </span>
                  <span className="text-blue-300 text-xs font-semibold">Rental / Opex Model</span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  Turnkey On-Site Storage Tanks & Vaporizer Systems On Rental
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Avoid heavy capital expenditure: Shakti Group supplies, installs, and commissions vacuum-insulated cryogenic tanks (3 KL to 60 KL) directly at your factory premises on an opex/rental model. Tanks are equipped with ambient air vaporizers and 24/7 digital IoT level telemetry, automatically scheduling top-ups from our 65+ road tanker fleet.
                </p>
                <div className="pt-2">
                  <NavLink
                    to="/solutions/bulk-gas-supply"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-300 hover:text-white transition"
                  >
                    <span>Explore Bulk Gas Supply & Tank Rental Solutions</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </NavLink>
                </div>
              </div>
            )}

            {/* Supply Modes */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
                <Truck className="h-4 w-4 text-blue-700" />
                <span>Supply Modes, Packaging & Transport Options</span>
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {data.supplyModes.map((mode, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 space-y-2 hover:border-blue-300 transition">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-base font-bold text-slate-900">{mode.title}</h4>
                      <span className="bg-slate-100 text-slate-800 font-semibold text-xs px-2.5 py-0.5 rounded border border-slate-200">
                        {mode.capacity}
                      </span>
                    </div>

                    <div className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                      <Gauge className="h-3.5 w-3.5 text-blue-600" />
                      <span>Operating Pressure: {mode.pressure}</span>
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

            {/* Logistics & Geographic Delivery Coverage (High SEO Impact) */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <h3 className="text-base font-bold text-slate-900">
                    Bulk Logistics, Fleet & Delivery Coverage
                  </h3>
                </div>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  24/7 Dedicated Dispatch
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                  <span className="text-slate-500 block text-[11px] font-medium">Transport Fleet</span>
                  <span className="text-sm font-bold text-slate-900 block mt-0.5">65+ Cryogenic Tankers</span>
                  <span className="text-slate-500 text-[11px]">10 KL to 35 KL Capacity</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                  <span className="text-slate-500 block text-[11px] font-medium">Production Output</span>
                  <span className="text-sm font-bold text-slate-900 block mt-0.5">448 TPD Capacity</span>
                  <span className="text-slate-500 text-[11px]">Multiple ASU Plants</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                  <span className="text-slate-500 block text-[11px] font-medium">Emergency Dispatch</span>
                  <span className="text-sm font-bold text-blue-700 block mt-0.5">2 - 4 Hour TAT</span>
                  <span className="text-slate-500 text-[11px]">Major Industrial Belts</span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Key Industrial Delivery Zones Covered:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {(data.deliveryCoverage || [
                    'Vadodara', 'Dahej PCPIR', 'Ankleshwar', 'Surat & Hazira', 'Ahmedabad', 'Sanand', 'Halol & Savli', 'Bharuch & Jhagadia', 'Vapi & Valsad', 'Maharashtra', 'Madhya Pradesh', 'Rajasthan', 'Pan-India'
                  ]).map((loc, lIdx) => (
                    <span key={lIdx} className="bg-white text-slate-700 border border-slate-300 text-xs px-2.5 py-1 rounded-md font-medium">
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Industrial Applications Table */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
                <Boxes className="h-4 w-4 text-blue-700" />
                <span>Industrial Applications & Purity Specifications</span>
              </h3>

              <div className="overflow-x-auto bg-white rounded-xl border border-slate-200">
                <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                  <thead className="bg-slate-50 text-slate-900 font-bold uppercase tracking-wider text-[11px] border-b border-slate-200">
                    <tr>
                      <th className="p-3.5">Industry Sector</th>
                      <th className="p-3.5">Application / Process</th>
                      <th className="p-3.5">Recommended Grade</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {data.applications.map((app, idx) => (
                      <tr key={idx} className="hover:bg-slate-50">
                        <td className="p-3.5 font-semibold text-slate-900">{app.industry}</td>
                        <td className="p-3.5">{app.useCase}</td>
                        <td className="p-3.5 text-blue-700 font-semibold">{app.recommendedPurity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Frequently Asked Questions (FAQ) Section - High SEO Authority */}
            {data.faqs && data.faqs.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <HelpCircle className="h-4 w-4 text-blue-700" />
                    <span>Frequently Asked Questions ({data.title})</span>
                  </h3>
                  <span className="text-xs font-semibold text-slate-500">
                    Buyer & Technical Guide
                  </span>
                </div>

                <div className="space-y-2.5">
                  {data.faqs.map((faq, fIdx) => {
                    const isOpen = openFaqIdx === fIdx;
                    return (
                      <div
                        key={fIdx}
                        className={`rounded-xl border transition ${
                          isOpen ? 'bg-blue-50/50 border-blue-300 shadow-xs' : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => toggleFaq(fIdx)}
                          className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 focus:outline-hidden"
                          aria-expanded={isOpen}
                        >
                          <span>{faq.question}</span>
                          <ChevronDown className={`h-4 w-4 text-slate-500 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
                        </button>
                        {isOpen && (
                          <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-blue-100">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Targeted Commercial Search Phrases Cloud (SEO Internal Relevance) */}
            {data.targetQueries && data.targetQueries.length > 0 && (
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2.5">
                <div className="flex items-center gap-2">
                  <Tag className="h-3.5 w-3.5 text-blue-600" />
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Related Commercial Searches & Specifications
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {data.targetQueries.map((query, qIdx) => (
                    <span
                      key={qIdx}
                      className="inline-flex items-center gap-1 bg-white text-slate-700 text-xs px-3 py-1 rounded-full border border-slate-200 shadow-xs font-medium"
                    >
                      <Sparkles className="h-3 w-3 text-blue-500" />
                      {query}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Related Products Bar */}
            {data.relatedProducts && data.relatedProducts.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-slate-200">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                  <Atom className="h-4 w-4 text-blue-700" />
                  <span>Related Products in Our Portfolio</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {data.relatedProducts.map((rel, rIdx) => (
                    <NavLink
                      key={rIdx}
                      to={`/products/${rel.slug}`}
                      className="p-3.5 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-xs transition bg-white flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-[11px] font-mono text-blue-600 font-bold block mb-1">
                          {rel.formula}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                          {rel.title}
                        </h4>
                      </div>
                      <span className="text-[11px] font-medium text-blue-600 flex items-center gap-1 mt-2">
                        <span>View Specifications</span>
                        <ArrowRight className="h-3 w-3" />
                      </span>
                    </NavLink>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Sidebar: Safety & Purity */}
          <div className="lg:col-span-4 space-y-6">

            <div className="bg-slate-900 text-white p-6 rounded-2xl space-y-5 border border-slate-800 shadow-md">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0" />
                <h3 className="text-base font-bold text-white">
                  Handling & Safety Directives
                </h3>
              </div>

              <ul className="space-y-3 text-xs text-slate-300">
                {data.handlingSafety.map((safe, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                    <span>{safe}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-slate-800 space-y-2">
                <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
                  Available Purity Grades:
                </span>
                <ul className="space-y-1.5 text-xs text-blue-300 font-medium">
                  {data.puritiesAvailable.map((pur, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>{pur}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-800 space-y-2">
                <NavLink
                  to="/contact"
                  className="block text-center w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg text-xs transition shadow-md"
                >
                  Request Technical Quotation
                </NavLink>
                <NavLink
                  to="/company/quality-safety"
                  className="block text-center w-full bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium py-2 rounded-lg text-xs transition border border-slate-700"
                >
                  View PESO & Safety Certifications
                </NavLink>
              </div>
            </div>

            {/* Quick Link to All Products */}
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Product Categories
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <NavLink
                    to="/products/bulk-cryogenic"
                    className="text-slate-700 hover:text-blue-600 font-medium flex items-center justify-between"
                  >
                    <span>Bulk & Cryogenic Gases</span>
                    <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products/industrial-cylinder"
                    className="text-slate-700 hover:text-blue-600 font-medium flex items-center justify-between"
                  >
                    <span>Industrial & Cylinder Gases</span>
                    <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products/specialty-calibration"
                    className="text-slate-700 hover:text-blue-600 font-medium flex items-center justify-between"
                  >
                    <span>Specialty & Calibration Gases</span>
                    <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products/other"
                    className="text-slate-700 hover:text-blue-600 font-medium flex items-center justify-between"
                  >
                    <span>Dry Ice, Dewars & Hardware</span>
                    <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                  </NavLink>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default ProductSubPage;

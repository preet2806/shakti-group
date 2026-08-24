import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Building2,
  ChevronRight,
  CheckCircle2,
  MapPin,
  ShieldCheck,
  ArrowRight,
  Factory,
  Truck,
  Award
} from 'lucide-react';
import SEO from '../../components/SEO';

export interface CompanyPageData {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  established: string;
  primaryStat: { value: string; label: string };
  stats: { value: string; label: string; desc: string }[];
  overviewHeading: string;
  overviewText: string[];
  entityOrFacilityTitle: string;
  entitiesOrFacilities: {
    name: string;
    location?: string;
    badge: string;
    description: string;
    highlights: string[];
    specs?: { label: string; value: string }[];
  }[];
  processTitle: string;
  processSteps: { step: string; title: string; desc: string }[];
  complianceList: string[];
  seoTitle: string;
  seoDesc: string;
  keywords: string;
}

export const COMPANY_SUBPAGES_DATA: Record<string, CompanyPageData> = {
  'our-group': {
    slug: 'our-group',
    title: 'Group Entities & Operational Network',
    subtitle: 'Operational profile of Shakti Group\'s 9 specialized divisions, cryogenic Air Separation Units (ASU), CO₂ plants, and refilling hubs.',
    heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600',
    established: '1998',
    primaryStat: { value: '448+ TPD', label: 'Group Daily Manufacturing Capacity' },
    stats: [
      { value: '9', label: 'Operational Divisions', desc: 'Air separation, hydrogen, CO₂ recovery & refilling hubs' },
      { value: '448 TPD', label: 'Cryogenic Capacity', desc: 'Liquid Oxygen, Nitrogen, Argon & Carbon Dioxide yield' },
      { value: '65+', label: 'Cryogenic Road Tankers', desc: 'Vacuum-insulated GPS tracked distribution fleet' },
      { value: '25+ Yrs', label: 'Industrial Legacy', desc: 'Continuous operations and safety compliance since 1998' }
    ],
    overviewHeading: 'Group Entities & Manufacturing Footprint',
    overviewText: [
      'Shakti Group operates 9 specialized industrial gas divisions providing complete coverage across production, purification, compression, and logistics.',
      'Our manufacturing footprint includes cryogenic Air Separation Units (ASUs) in Karjan, 270 TPD liquid CO₂ plants across Ahmedabad, Indore, and Hyderabad (with an upcoming facility in Hazira), dedicated Dissolved Acetylene (DA) gas manufacturing by Shreeji Acetylene in Savli, Hydrogen gas refilling with High Purity (HP) and Ultra High Purity (UHP) by Shakti Gases in Ranoli, and specialized cylinder refilling hubs across the Vadodara industrial corridor.'
    ],
    entityOrFacilityTitle: 'Operating Divisions & Plant Locations',
    entitiesOrFacilities: [
      {
        name: 'Shakti Industrial Gases',
        location: 'Plot No. 628/14, G.I.D.C, Manjusar, Ta. Savli, Dist: Vadodara',
        badge: 'Bulk Cryogenic Liquids',
        description: 'Primary air separation unit and distribution hub for Liquid Argon, Oxygen, Nitrogen, and Carbon Dioxide.',
        highlights: [
          'Cryogenic air distillation producing ultra-high purity gases',
          'Dedicated bulk liquid storage buffer tanks',
          'Vacuum-insulated road tanker loading terminal'
        ],
        specs: [
          { label: 'Plant Yield', value: '300+ TPD Liquid' },
          { label: 'Products', value: 'LOX, LIN, LAR, LCO₂' }
        ]
      },
      {
        name: 'Shaktishree Air Private Limited (SAPL)',
        location: 'Karjan, Gujarat',
        badge: '178 TPD Cryogenic ASU',
        description: 'Large-scale cryogenic Air Separation Unit commissioned in April 2026, strengthening Western India\'s liquid gas supply chain.',
        highlights: [
          'Low-pressure cryogenic distillation column technology',
          'High-yield production of Liquid Oxygen, Nitrogen, and Argon',
          'Direct loading bays for 35 KL road tankers'
        ],
        specs: [
          { label: 'Capacity', value: '178 TPD' },
          { label: 'Status', value: 'Commissioned April 2026' }
        ]
      },
      {
        name: 'Indore Carbonic',
        location: 'Ahmedabad (Gujarat), Indore (Madhya Pradesh) & Hyderabad (Telangana) [Upcoming: Hazira]',
        badge: '270 TPD Liquid CO₂ & Dry Ice',
        description: 'CO₂ recovery and catalytic purification facilities across Ahmedabad, Indore, and Hyderabad with a total manufacturing capacity of 270 TPD, producing food-grade liquid carbon dioxide and solid dry ice.',
        highlights: [
          'Total group CO₂ manufacturing capacity of 270 TPD across 3 active plants',
          'E290 beverage-grade CO₂ purification lines (≥ 99.9%) and industrial LCO₂',
          'Solid dry ice extruders (pellets and high-density blocks)',
          'Multi-state distribution network expanding to Hazira'
        ],
        specs: [
          { label: 'Total Capacity', value: '270 TPD Liquid CO₂' },
          { label: 'Locations', value: 'Ahmedabad, Indore & Hyderabad' }
        ]
      },
      {
        name: 'Shreeji Acetylene Co.',
        location: 'Plot No. 37, G.I.D.C. Alindra, Ta: Savli, Dist: Vadodara',
        badge: 'DA Gas Manufacturer',
        description: 'Dedicated manufacturer of Dissolved Acetylene (DA) gas for oxy-fuel cutting, brazing, chemical synthesis, and metal fabrication workshops.',
        highlights: [
          'Calcium carbide reaction chemical generators for direct Dissolved Acetylene (DA) gas manufacturing',
          'High Purity (HP) and Ultra High Purity (UHP) grades available upon request',
          'Porous mass cylinder charging manifolds and safety interlocks'
        ],
        specs: [
          { label: 'Role', value: 'DA Gas Manufacturer' },
          { label: 'Purities', value: 'Industrial, HP & UHP' }
        ]
      },
      {
        name: 'Moxi Industrial Gases',
        location: 'Survey No.: 431/1/P, Village: Moxi, Ta: Savli, Dist: Vadodara',
        badge: 'Industrial CO₂ Supply',
        description: 'Supplier of Carbon Dioxide gas for MIG welding, chemical processing, and water neutralization.',
        highlights: [
          'CO₂ compression and cylinder manifold filling',
          'Bulk and cylinder packaging options',
          'Purity and trace moisture testing'
        ],
        specs: [
          { label: 'Product', value: 'Carbon Dioxide (Gaseous & Liquid)' },
          { label: 'Packaging', value: 'Cylinders & Tanks' }
        ]
      },
      {
        name: 'Shakti Gases',
        location: '1002, GIDC Industrial Estate, Ranoli, Dist: Vadodara',
        badge: 'Hydrogen Refiller & Cascades',
        description: 'Leading Hydrogen gas refiller supplying industrial, High Purity (HP) and Ultra High Purity (UHP) Hydrogen to refineries, heat treatment plants, and chemical synthesis units.',
        highlights: [
          'Specialized Hydrogen gas refilling in individual cylinders, mobile skids, and tube cascades',
          'High Purity (HP) and Ultra High Purity (UHP Grade 5.0–6.0) grades available',
          'High-pressure manifold connections and transport skids'
        ],
        specs: [
          { label: 'Role', value: 'Hydrogen Refiller' },
          { label: 'Grades', value: 'Commercial, HP & UHP' }
        ]
      },
      {
        name: 'Shakti Sales Agency',
        location: '45, Maruti Complex, Ranoli GIDC, Vadodara',
        badge: 'UHP & Calibration Gases',
        description: 'Commercial division supplying Ultra-High Purity (UHP Grade 5.0–6.0) gases and custom laboratory calibration standards.',
        highlights: [
          'NIST & NABL traceable calibration mixtures',
          'Gravimetric precision blending',
          'Support for analytical and QC laboratories'
        ],
        specs: [
          { label: 'Purity Grade', value: 'Grade 5.0 to 6.0' },
          { label: 'Products', value: 'UHP & Calibration Gas' }
        ]
      },
      {
        name: 'Shakti Air Products',
        location: 'Plot No. 2, Shri Hari Industrial Park, Por GIDC, Vadodara',
        badge: 'Multi-Gas Compression Hub',
        description: 'Cylinder refilling station equipped with high-pressure compression manifolds for Argon, Nitrogen, CO₂, and Oxygen.',
        highlights: [
          'High-pressure 200 Bar cylinder filling headers with vacuum evacuation',
          'Large stock of 47L / 50L cylinders and MCP quads',
          'Dispatch services for Por and Vadodara industrial corridors'
        ],
        specs: [
          { label: 'Throughput', value: '2,500+ Cylinders/Day' },
          { label: 'Products', value: 'Argon, Nitrogen, CO₂, Oxygen' }
        ]
      },
      {
        name: 'Bhavani Enterprise',
        location: '45, Maruti Complex, Ranoli GIDC, Vadodara',
        badge: 'Dry Ice Logistics',
        description: 'Supplier of solid CO₂ dry ice pellets and blocks for cold-chain transport, pharmaceutical preservation, and blast cleaning.',
        highlights: [
          '3mm / 6mm dry ice pellets and 5kg insulated blocks',
          'Temperature stability at -78.5 °C',
          'Dispatch in insulated shipping containers'
        ],
        specs: [
          { label: 'Temperature', value: '-78.5 °C' },
          { label: 'Form', value: 'Pellets & Blocks' }
        ]
      }
    ],
    processTitle: 'Cryogenic Air Separation Process',
    processSteps: [
      { step: '01', title: 'Air Compression', desc: 'Ambient air is drawn through multi-stage filters and compressed to ~6 bar.' },
      { step: '02', title: 'Purification', desc: 'Molecular sieve beds remove water vapor, CO₂, and hydrocarbons.' },
      { step: '03', title: 'Liquefaction', desc: 'Purified air is cooled to -170°C inside main heat exchangers.' },
      { step: '04', title: 'Distillation', desc: 'Fractional columns separate gases by boiling points (N₂ -195.8°C, Ar -185.9°C, O₂ -183.0°C).' }
    ],
    complianceList: [
      '100% PESO Approved Plants, Assets & Transport Infrastructure',
      'FDA Drug Manufacturing License & WHO-GMP Certified Facilities',
      'ISO 9001:2015, ISO 14001:2015 & ISO 45001:2018 Certified Systems',
      'FSSAI Certified Food-Grade Liquid CO₂ (E290) & Nitrogen'
    ],
    seoTitle: 'Group Entities & Manufacturing Network | Shakti Industrial Gases',
    seoDesc: 'Shakti Group 9 operational entities, Air Separation Units (ASU), CO2 plants, and refilling hubs across India.',
    keywords: 'Shakti Group Companies, Shakti Industrial Gases, Shaktishree Air, Indore Carbonic, ASU Network'
  },

  'manufacturing-network': {
    slug: 'manufacturing-network',
    title: 'Group Entities & Operational Network',
    subtitle: 'Operational profile of Shakti Group\'s 9 specialized divisions, cryogenic Air Separation Units (ASU), CO₂ plants, and refilling hubs.',
    heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600',
    established: '1998',
    primaryStat: { value: '448+ TPD', label: 'Group Daily Manufacturing Capacity' },
    stats: [
      { value: '9', label: 'Operational Divisions', desc: 'Air separation, hydrogen, CO₂ recovery & refilling hubs' },
      { value: '448 TPD', label: 'Cryogenic Capacity', desc: 'Liquid Oxygen, Nitrogen, Argon & Carbon Dioxide yield' },
      { value: '65+', label: 'Cryogenic Road Tankers', desc: 'Vacuum-insulated GPS tracked distribution fleet' },
      { value: '25+ Yrs', label: 'Industrial Legacy', desc: 'Continuous operations and safety compliance since 1998' }
    ],
    overviewHeading: 'Group Entities & Manufacturing Footprint',
    overviewText: [
      'Shakti Group operates 9 specialized industrial gas divisions providing complete coverage across production, purification, compression, and logistics.',
      'Our manufacturing footprint includes cryogenic Air Separation Units (ASUs) in Karjan, 270 TPD liquid CO₂ plants across Ahmedabad, Indore, and Hyderabad (with an upcoming facility in Hazira), dedicated Dissolved Acetylene (DA) gas manufacturing by Shreeji Acetylene in Savli, Hydrogen gas refilling with High Purity (HP) and Ultra High Purity (UHP) by Shakti Gases in Ranoli, and specialized cylinder refilling hubs across the Vadodara industrial corridor.'
    ],
    entityOrFacilityTitle: 'Operating Divisions & Plant Locations',
    entitiesOrFacilities: [
      {
        name: 'Shakti Industrial Gases',
        location: 'Plot No. 628/14, G.I.D.C, Manjusar, Ta. Savli, Dist: Vadodara',
        badge: 'Bulk Cryogenic Liquids',
        description: 'Primary air separation unit and distribution hub for Liquid Argon, Oxygen, Nitrogen, and Carbon Dioxide.',
        highlights: [
          'Cryogenic air distillation producing ultra-high purity gases',
          'Dedicated bulk liquid storage buffer tanks',
          'Vacuum-insulated road tanker loading terminal'
        ],
        specs: [
          { label: 'Plant Yield', value: '300+ TPD Liquid' },
          { label: 'Products', value: 'LOX, LIN, LAR, LCO₂' }
        ]
      },
      {
        name: 'Shaktishree Air Private Limited (SAPL)',
        location: 'Karjan, Gujarat',
        badge: '178 TPD Cryogenic ASU',
        description: 'Large-scale cryogenic Air Separation Unit commissioned in April 2026, strengthening Western India\'s liquid gas supply chain.',
        highlights: [
          'Low-pressure cryogenic distillation column technology',
          'High-yield production of Liquid Oxygen, Nitrogen, and Argon',
          'Direct loading bays for 35 KL road tankers'
        ],
        specs: [
          { label: 'Capacity', value: '178 TPD' },
          { label: 'Status', value: 'Commissioned April 2026' }
        ]
      },
      {
        name: 'Indore Carbonic',
        location: 'Ahmedabad (Gujarat), Indore (Madhya Pradesh) & Hyderabad (Telangana) [Upcoming: Hazira]',
        badge: '270 TPD Liquid CO₂ & Dry Ice',
        description: 'CO₂ recovery and catalytic purification facilities across Ahmedabad, Indore, and Hyderabad with a total manufacturing capacity of 270 TPD, producing food-grade liquid carbon dioxide and solid dry ice.',
        highlights: [
          'Total group CO₂ manufacturing capacity of 270 TPD across 3 active plants',
          'E290 beverage-grade CO₂ purification lines (≥ 99.9%) and industrial LCO₂',
          'Solid dry ice extruders (pellets and high-density blocks)',
          'Multi-state distribution network expanding to Hazira'
        ],
        specs: [
          { label: 'Total Capacity', value: '270 TPD Liquid CO₂' },
          { label: 'Locations', value: 'Ahmedabad, Indore & Hyderabad' }
        ]
      },
      {
        name: 'Shreeji Acetylene Co.',
        location: 'Plot No. 37, G.I.D.C. Alindra, Ta: Savli, Dist: Vadodara',
        badge: 'DA Gas Manufacturer',
        description: 'Dedicated manufacturer of Dissolved Acetylene (DA) gas for oxy-fuel cutting, brazing, chemical synthesis, and metal fabrication workshops.',
        highlights: [
          'Calcium carbide reaction chemical generators for direct Dissolved Acetylene (DA) gas manufacturing',
          'High Purity (HP) and Ultra High Purity (UHP) grades available upon request',
          'Porous mass cylinder charging manifolds and safety interlocks'
        ],
        specs: [
          { label: 'Role', value: 'DA Gas Manufacturer' },
          { label: 'Purities', value: 'Industrial, HP & UHP' }
        ]
      },
      {
        name: 'Moxi Industrial Gases',
        location: 'Survey No.: 431/1/P, Village: Moxi, Ta: Savli, Dist: Vadodara',
        badge: 'Industrial CO₂ Supply',
        description: 'Supplier of Carbon Dioxide gas for MIG welding, chemical processing, and water neutralization.',
        highlights: [
          'CO₂ compression and cylinder manifold filling',
          'Bulk and cylinder packaging options',
          'Purity and trace moisture testing'
        ],
        specs: [
          { label: 'Product', value: 'Carbon Dioxide (Gaseous & Liquid)' },
          { label: 'Packaging', value: 'Cylinders & Tanks' }
        ]
      },
      {
        name: 'Shakti Gases',
        location: '1002, GIDC Industrial Estate, Ranoli, Dist: Vadodara',
        badge: 'Hydrogen Refiller & Cascades',
        description: 'Leading Hydrogen gas refiller supplying industrial, High Purity (HP) and Ultra High Purity (UHP) Hydrogen to refineries, heat treatment plants, and chemical synthesis units.',
        highlights: [
          'Specialized Hydrogen gas refilling in individual cylinders, mobile skids, and tube cascades',
          'High Purity (HP) and Ultra High Purity (UHP Grade 5.0–6.0) grades available',
          'High-pressure manifold connections and transport skids'
        ],
        specs: [
          { label: 'Role', value: 'Hydrogen Refiller' },
          { label: 'Grades', value: 'Commercial, HP & UHP' }
        ]
      },
      {
        name: 'Shakti Sales Agency',
        location: '45, Maruti Complex, Ranoli GIDC, Vadodara',
        badge: 'UHP & Calibration Gases',
        description: 'Commercial division supplying Ultra-High Purity (UHP Grade 5.0–6.0) gases and custom laboratory calibration standards.',
        highlights: [
          'NIST & NABL traceable calibration mixtures',
          'Gravimetric precision blending',
          'Support for analytical and QC laboratories'
        ],
        specs: [
          { label: 'Purity Grade', value: 'Grade 5.0 to 6.0' },
          { label: 'Products', value: 'UHP & Calibration Gas' }
        ]
      },
      {
        name: 'Shakti Air Products',
        location: 'Plot No. 2, Shri Hari Industrial Park, Por GIDC, Vadodara',
        badge: 'Multi-Gas Compression Hub',
        description: 'Cylinder refilling station equipped with high-pressure compression manifolds for Argon, Nitrogen, CO₂, and Oxygen.',
        highlights: [
          'High-pressure 200 Bar cylinder filling headers with vacuum evacuation',
          'Large stock of 47L / 50L cylinders and MCP quads',
          'Dispatch services for Por and Vadodara industrial corridors'
        ],
        specs: [
          { label: 'Throughput', value: '2,500+ Cylinders/Day' },
          { label: 'Products', value: 'Argon, Nitrogen, CO₂, Oxygen' }
        ]
      },
      {
        name: 'Bhavani Enterprise',
        location: '45, Maruti Complex, Ranoli GIDC, Vadodara',
        badge: 'Dry Ice Logistics',
        description: 'Supplier of solid CO₂ dry ice pellets and blocks for cold-chain transport, pharmaceutical preservation, and blast cleaning.',
        highlights: [
          '3mm / 6mm dry ice pellets and 5kg insulated blocks',
          'Temperature stability at -78.5 °C',
          'Dispatch in insulated shipping containers'
        ],
        specs: [
          { label: 'Temperature', value: '-78.5 °C' },
          { label: 'Form', value: 'Pellets & Blocks' }
        ]
      }
    ],
    processTitle: 'Cryogenic Air Separation Process',
    processSteps: [
      { step: '01', title: 'Air Compression', desc: 'Ambient air is drawn through multi-stage filters and compressed to ~6 bar.' },
      { step: '02', title: 'Purification', desc: 'Molecular sieve beds remove water vapor, CO₂, and hydrocarbons.' },
      { step: '03', title: 'Liquefaction', desc: 'Purified air is cooled to -170°C inside main heat exchangers.' },
      { step: '04', title: 'Distillation', desc: 'Fractional columns separate gases by boiling points (N₂ -195.8°C, Ar -185.9°C, O₂ -183.0°C).' }
    ],
    complianceList: [
      '100% PESO Approved Plants, Assets & Transport Infrastructure',
      'FDA Drug Manufacturing License & WHO-GMP Certified Facilities',
      'ISO 9001:2015, ISO 14001:2015 & ISO 45001:2018 Certified Systems',
      'FSSAI Certified Food-Grade Liquid CO₂ (E290) & Nitrogen'
    ],
    seoTitle: 'Group Entities & Manufacturing Network | Shakti Industrial Gases',
    seoDesc: 'Shakti Group 9 operational entities, Air Separation Units (ASU), CO2 plants, and refilling hubs across India.',
    keywords: 'Shakti Group Companies, Shakti Industrial Gases, Shaktishree Air, Indore Carbonic, ASU Network'
  },

  'infrastructure': {
    slug: 'infrastructure',
    title: 'Cryogenic Logistics Fleet & On-Site Vessels',
    subtitle: 'Vacuum-insulated cryogenic road tankers, on-site bulk storage installations, and automated telemetry.',
    heroImage: 'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/service_tanker.png',
    established: '65+ Tankers',
    primaryStat: { value: '65+', label: 'Cryogenic Road Tankers' },
    stats: [
      { value: '10-35 KL', label: 'Tanker Capacity Range', desc: 'Dedicated liquid transport for LOX, LIN, LAR, and LCO₂' },
      { value: '24/7 GPS', label: 'Fleet Telemetry', desc: 'Location, pressure, and tank level monitoring' },
      { value: '300+', label: 'On-Site Storage Tanks', desc: 'Turnkey cryogenic storage installed at client factories' },
      { value: '<0.2%', label: 'Boil-Off Loss Rate', desc: 'High-vacuum multi-layer insulation vessels' }
    ],
    overviewHeading: 'Cryogenic Logistics & On-Site Storage Engineering',
    overviewText: [
      'Shakti Group operates a fleet of stainless steel inner-vessel cryogenic tankers built with double-walled vacuum insulation for transport of liquid gases down to -196°C.',
      'To ensure continuous supply, customer-installed storage vessels are integrated with cellular telemetry modules, automatically notifying dispatch centers before liquid levels reach critical reorder thresholds.'
    ],
    entityOrFacilityTitle: 'Logistics Assets & On-Site Infrastructure',
    entitiesOrFacilities: [
      {
        name: 'Cryogenic Road Tanker Fleet',
        location: 'Pan-India Distribution',
        badge: '10 KL / 20 KL / 35 KL Tankers',
        description: 'Pressure vessels manufactured to PESO standards, featuring high-vacuum insulation and high-flow cryogenic discharge pumps.',
        highlights: [
          'High-flow liquid discharge pumps for rapid decanting',
          'GPS tracking and safety compliance monitoring',
          'Dedicated vessels for LOX, LIN, LAR, and LCO₂'
        ],
        specs: [
          { label: 'Pressure', value: 'Up to 24 Bar' },
          { label: 'Insulation', value: 'Super-Vacuum Perlite' }
        ]
      },
      {
        name: 'On-Site Storage & Vaporizer Systems',
        location: 'Customer Factory Installations',
        badge: 'Turnkey Tanks (3 KL - 50 KL)',
        description: 'Vertical and horizontal cryogenic storage vessels with ambient air vaporizers for zero-electricity liquid-to-gas conversion.',
        highlights: [
          'Replaces cylinder handling and reduces gas loss',
          'Maintains stable line pressure for factory operations',
          'Full installation and preventive maintenance'
        ],
        specs: [
          { label: 'Capacities', value: '3,000L to 50,000L' },
          { label: 'Vaporizers', value: 'Aluminum Fin Ambient Air' }
        ]
      },
      {
        name: 'Cellular Tank Telemetry',
        location: 'Remote Logistics Desk',
        badge: 'IoT Gauging Sensors',
        description: 'Differential pressure sensors monitor liquid levels and send data every 15 minutes to trigger dispatch orders automatically.',
        highlights: [
          'Automated reorder triggers at 25% vessel level',
          'Daily gas consumption analytics for clients',
          'Instant pressure anomaly alerts'
        ],
        specs: [
          { label: 'Frequency', value: '15-Minute Data Push' },
          { label: 'Network', value: 'Cellular Telemetry' }
        ]
      }
    ],
    processTitle: 'Bulk Supply Distribution Flow',
    processSteps: [
      { step: '01', title: 'Telemetry Alert', desc: 'Customer tank sensor sends low-level signal to dispatch desk.' },
      { step: '02', title: 'Route Allocation', desc: 'Logistics assigns the nearest available cryogenic tanker.' },
      { step: '03', title: 'Tanker Loading', desc: 'Tanker fills at ASU production hub and receives purity certification.' },
      { step: '04', title: 'On-Site Decanting', desc: 'Liquid decanted into customer vessel without stopping production.' }
    ],
    complianceList: [
      'PESO approved tanker inspection and safety valve calibration',
      'Hazchem trained drivers certified for hazardous transport',
      'Pre-trip mechanical and vacuum insulation verification'
    ],
    seoTitle: 'Cryogenic Tanker Fleet & Storage Infrastructure | Shakti Group',
    seoDesc: 'Shakti Group 65+ cryogenic tankers, ambient vaporizers, on-site storage vessels, and telemetry monitoring.',
    keywords: 'Cryogenic Tanker Fleet, Liquid Oxygen Transport, Onsite Storage Tanks, Gas Logistics'
  },

  'quality-safety': {
    slug: 'quality-safety',
    title: 'Quality Assurance, ISO & Statutory Compliance',
    subtitle: 'FDA Licensed, WHO-GMP Certified, ISO 9001/14001/45001, FSSAI accredited, and 100% PESO-approved plants and infrastructure.',
    heroImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1600',
    established: 'Certified',
    primaryStat: { value: 'Grade 6.0', label: 'Maximum Gas Purity (99.9999%)' },
    stats: [
      { value: 'ISO 9001/14001/45001', label: 'Integrated Systems', desc: 'Audited quality, environmental & safety management' },
      { value: '100%', label: 'PESO Compliance', desc: 'All plants, storage vessels, cascades & tankers PESO approved' },
      { value: 'FDA & WHO-GMP', label: 'Medical Accreditations', desc: 'Licensed for IP medical oxygen & pharmaceutical gases' },
      { value: 'FSSAI Certified', label: 'Food-Grade Compliance', desc: 'E290 beverage CO₂, nitrogen & solid dry ice' }
    ],
    overviewHeading: 'Quality Testing & Environmental Safety',
    overviewText: [
      'Quality control is integrated across every phase of production—from atmospheric air intake filtration to final tanker loading and cylinder manifold filling.',
      'Our quality laboratories use Gas Chromatography (GC), paramagnetic oxygen analyzers, and electrolytic moisture meters to certify that every gas batch satisfies client purity specifications.'
    ],
    entityOrFacilityTitle: 'Quality & Safety Framework',
    entitiesOrFacilities: [
      {
        name: 'In-House Quality Laboratories',
        location: 'All Production Plants',
        badge: 'Gas Chromatography',
        description: 'Batch sampling and purity verification before release. Certificates of Analysis (COA) are provided with every delivery.',
        highlights: [
          'Gas Chromatographs with TCD and FID detectors',
          'Sub-PPM trace oxygen analyzers',
          'Electrolytic dew-point moisture meters'
        ],
        specs: [
          { label: 'Frequency', value: 'Every Batch Tested' },
          { label: 'Traceability', value: 'NIST & NABL Traceable' }
        ]
      },
      {
        name: 'PESO & Statutory Compliance',
        location: 'All Plants & Transport Assets',
        badge: '100% PESO Licensed',
        description: 'Every manufacturing plant, cryogenic storage tank, transport tanker, and filling manifold strictly complies with Petroleum and Explosives Safety Organization (PESO) standards.',
        highlights: [
          'Hydrostatic stretch testing of high-pressure cylinders',
          'Safety relief valve calibration and burst-disc protocols',
          'Automated over-pressure shut-off interlocks'
        ],
        specs: [
          { label: 'Infrastructure', value: '100% PESO Approved' },
          { label: 'Compliance', value: 'Full Statutory Adherence' }
        ]
      },
      {
        name: 'FDA, WHO-GMP & FSSAI Standards',
        location: 'Medical & Food Gas Divisions',
        badge: 'FDA / WHO-GMP / FSSAI',
        description: 'Statutory pharmaceutical licensing, WHO Good Manufacturing Practices, and food safety standards for beverage and medical gas applications.',
        highlights: [
          'FDA Drug Manufacturing licenses for Medical Oxygen (IP)',
          'WHO-GMP compliance for hygiene and analytical testing',
          'FSSAI food safety certification for beverage-grade LCO₂ (E290)'
        ],
        specs: [
          { label: 'Medical', value: 'FDA & WHO-GMP Certified' },
          { label: 'Food Grade', value: 'FSSAI Certified' }
        ]
      },
      {
        name: 'Environmental, Health & Safety (EHS)',
        location: 'Group Standard',
        badge: 'ISO 14001 & 45001',
        description: 'Occupational health, risk assessment, hazard control, and cryo-handling safety training across all facilities.',
        highlights: [
          'Regular safety drills covering cryogenic burns and oxygen safety',
          'Mandatory PPE standards for liquid handling',
          'Zero-liquid-discharge water systems'
        ],
        specs: [
          { label: 'Audits', value: 'Periodic EHS Review' },
          { label: 'Training', value: 'Cryo Safety Certified' }
        ]
      }
    ],
    processTitle: 'Batch Quality Testing Protocol',
    processSteps: [
      { step: '01', title: 'Column Monitoring', desc: 'Online sensors track liquid oxygen and nitrogen purity inside ASU columns.' },
      { step: '02', title: 'Tank Sampling', desc: 'Storage tanks are isolated and tested via gas chromatograph before batch release.' },
      { step: '03', title: 'Cylinder Evacuation', desc: 'Cylinders undergo 100% vacuum purging to remove atmospheric moisture.' },
      { step: '04', title: 'COA Issuance', desc: 'Certificate of Analysis generated with purity metrics.' }
    ],
    complianceList: [
      '100% PESO Approved Plants, Storage Tanks, Road Tankers & Cascades',
      'FDA Drug Manufacturing License & WHO-GMP Certified Facilities',
      'ISO 9001:2015 (QMS), ISO 14001:2015 (EMS) & ISO 45001:2018 (OH&S)',
      'FSSAI Food Safety License for Food-Grade LCO₂ (E290) & Nitrogen',
      'PESO Licensed Periodic Hydrostatic Cylinder Testing Station'
    ],
    seoTitle: 'Quality Standards, FDA, ISO & PESO Compliance | Shakti Group',
    seoDesc: 'Shakti Group statutory compliance: FDA License, WHO-GMP, ISO 9001/14001/45001, FSSAI, and 100% PESO approved plants and assets.',
    keywords: 'PESO Gas Certification, FDA Medical Oxygen, WHO-GMP Gas, ISO 9001, ISO 14001, ISO 45001, FSSAI Food Gas'
  }
};

export const CompanySubPage: React.FC = () => {
  const location = useLocation();
  const slug = location.pathname.split('/').pop() || 'our-group';
  const data = COMPANY_SUBPAGES_DATA[slug] || COMPANY_SUBPAGES_DATA['our-group'];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: data.title,
    description: data.subtitle,
    publisher: {
      '@type': 'Organization',
      name: 'Shakti Group of Companies',
      url: 'https://www.shaktigases.com'
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
            <NavLink to="/company" className="hover:text-white transition">Company</NavLink>
            <ChevronRight className="h-3 w-3 text-slate-600" />
            <span className="text-blue-400 font-medium">{data.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-3xl space-y-2">
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
              <span>Contact Desk</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </NavLink>
          </div>

        </div>
      </div>

      {/* Key Metrics Summary Bar */}
      <section className="bg-slate-50 border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.stats.map((st, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="text-xl sm:text-2xl font-bold text-blue-700">
                  {st.value}
                </div>
                <div className="text-xs font-semibold text-slate-800 uppercase tracking-wide mt-0.5">
                  {st.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                  {st.desc}
                </div>
              </div>
            ))}
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
                {data.overviewHeading}
              </h2>
              {data.overviewText.map((pText, idx) => (
                <p key={idx} className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {pText}
                </p>
              ))}
            </div>

            {/* Entity / Facility List */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
                <Factory className="h-4 w-4 text-blue-700" />
                <span>{data.entityOrFacilityTitle}</span>
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {data.entitiesOrFacilities.map((item, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-base font-bold text-slate-900">{item.name}</h4>
                      <span className="bg-slate-100 text-slate-700 font-semibold text-[11px] px-2.5 py-0.5 rounded border border-slate-200 uppercase">
                        {item.badge}
                      </span>
                    </div>

                    {item.location && (
                      <div className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                        <MapPin className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                        <span>{item.location}</span>
                      </div>
                    )}

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs">
                      {item.highlights.map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-1.5 text-slate-700">
                          <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>

                    {item.specs && item.specs.length > 0 && (
                      <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-3 text-xs">
                        {item.specs.map((sp, sIdx) => (
                          <div key={sIdx} className="bg-slate-50 px-2.5 py-1 rounded border border-slate-200 text-[11px]">
                            <span className="text-slate-500 mr-1">{sp.label}:</span>
                            <span className="font-semibold text-slate-800">{sp.value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Operational Steps */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">
                {data.processTitle}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.processSteps.map((stepItem, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <div className="text-xs font-bold text-blue-700 uppercase mb-1">
                      Step {stepItem.step}
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">{stepItem.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{stepItem.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sidebar: Statutory & Safety Compliance */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-900 text-white p-6 rounded-2xl space-y-4 border border-slate-800">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                <ShieldCheck className="h-5 w-5 text-blue-400" />
                <h3 className="text-base font-bold text-white">
                  Compliance & Quality Standards
                </h3>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-300">
                {data.complianceList.map((comp, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{comp}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <NavLink
                  to="/contact"
                  className="block text-center w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2.5 rounded-lg text-xs transition"
                >
                  Inquire For Technical Specs
                </NavLink>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default CompanySubPage;

import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  ChevronRight,
  CheckCircle2,
  Wrench,
  Gauge,
  Settings,
  ShieldCheck,
  ArrowRight,
  Truck,
  Globe,
  FileCheck,
  Layers,
  Ship,
  Anchor,
  HelpCircle,
  ExternalLink,
  MapPin,
  Clock,
  Building2,
  Package
} from 'lucide-react';
import SEO from '../../components/SEO';

export interface SolutionPageData {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  serviceCategory: string;
  keySpecs: { label: string; value: string }[];
  overviewHeading: string;
  overviewText: string[];
  visualHighlights?: {
    image: string;
    caption: string;
    tag: string;
  }[];
  workflowTitle: string;
  workflowSteps: {
    step: string;
    phase: string;
    title: string;
    desc: string;
  }[];
  engineeringSpecsTitle: string;
  engineeringSpecs: {
    title: string;
    desc: string;
    points: string[];
  }[];
  benefits: { title: string; desc: string }[];
  complianceRequirements: string[];
  exportSpecifics?: {
    heading: string;
    targetPorts: string[];
    servedRegions: string[];
    exportGases: { name: string; formula: string; format: string; purity: string }[];
    incoTerms: string[];
    customsDocumentation: string[];
  };
  faqs?: { question: string; answer: string }[];
  seoTitle: string;
  seoDesc: string;
  keywords: string;
}

export const SOLUTION_SUBPAGES_DATA: Record<string, SolutionPageData> = {
  'bulk-gas-supply': {
    slug: 'bulk-gas-supply',
    title: 'Bulk Gas Supply & Tank Telemetry Solutions',
    subtitle: 'Turnkey on-site cryogenic storage vessel installation on rental / opex model, automated telemetry refills, and continuous gas pipeline feed.',
    heroImage: 'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/service_tanker.png',
    serviceCategory: 'Bulk Storage & Telemetry',
    keySpecs: [
      { label: 'Storage Tanks', value: '3 KL to 60 KL Vessels' },
      { label: 'Supply Setup', value: 'On-Site Storage on Rental' },
      { label: 'Refill Trigger', value: 'Automated IoT Telemetry' },
      { label: 'Downtime Risk', value: 'Zero Production Interruption' }
    ],
    overviewHeading: 'On-Site Cryogenic Bulk Storage Infrastructure (Rental / Opex Model)',
    overviewText: [
      'High-volume industrial gas consumers often experience operational bottlenecks with compressed gas cylinders—frequent cylinder swapping, pressure fluctuations, and labor overhead.',
      'Shakti Group provides turnkey on-site cryogenic storage tank setups on a flexible rental / opex model, eliminating large upfront capital investments. We supply and install stationary vacuum-insulated cryogenic vessels (3 KL to 60 KL), ambient air vaporizers, and IoT digital telemetry on your factory premises. Sensors monitor liquid level and pressure 24/7, automatically triggering tanker dispatches from our 65+ road tanker fleet before levels drop.'
    ],
    visualHighlights: [
      {
        image: 'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/Optimised%20images/Custom%20Cryogenic%20Engineering%20%26%20Pipeline%20Solutions.webp',
        caption: 'Vacuum-insulated cryogenic storage vessel with ambient vaporization system installed on-site.',
        tag: 'Turnkey Installation'
      },
      {
        image: 'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/roadtanker.png',
        caption: 'Fleet of 65+ dedicated cryogenic road tankers providing 24x7 replenishment.',
        tag: 'Logistics Fleet'
      }
    ],
    workflowTitle: 'Turnkey Installation & Commissioning Workflow',
    workflowSteps: [
      { step: '01', phase: 'Audit', title: 'Gas Consumption Audit', desc: 'Detailed assessment of daily gas consumption, peak flow rates, and operating pressure requirements.' },
      { step: '02', phase: 'Engineering', title: 'Site Layout & PESO Approval', desc: 'Preparation of civil foundation drawings and submission of PESO installation approval documentation.' },
      { step: '03', phase: 'Erection', title: 'Vessel Erection & Piping', desc: 'Installation of vertical cryogenic vessel, aluminum fin ambient vaporizers, and stainless steel factory feed line.' },
      { step: '04', phase: 'Telemetry', title: 'IoT Telemetry Mounting', desc: 'Mounting differential pressure sensors and cellular transmitters for 24/7 remote tank gauging.' },
      { step: '05', phase: 'Commissioning', title: 'Purging & First Decanting', desc: 'System purging, safety valve calibration, initial liquid tanker filling, and operator training.' }
    ],
    engineeringSpecsTitle: 'Engineering Specifications & Technical Benefits',
    engineeringSpecs: [
      {
        title: 'Ambient Vaporizer Systems',
        desc: 'Aluminum finned star-tube vaporizers convert liquid gas to gaseous form using atmospheric ambient heat without electrical power consumption.',
        points: ['Zero electrical power consumption', 'Dual-bank vaporizer layout with automatic switchover', 'Sized for peak hourly gas flow without icing']
      },
      {
        title: 'IoT Cellular Telemetry Engine',
        desc: 'Cellular telemetry modules monitor vessel differential pressure and calculate remaining liquid inventory in real time.',
        points: ['15-minute telemetry data updates', 'Client portal with historical gas usage charts', 'Automated SMS and email alerts for reorder levels']
      }
    ],
    benefits: [
      { title: 'Eliminates Cylinder Handling', desc: 'Removes manual cylinder moving, crane hoisting, and connection labor.' },
      { title: 'Eliminates Residual Gas Waste', desc: 'Consumes 100% of delivered gas, eliminating the ~10% residual gas left in returned cylinders.' },
      { title: 'Constant Line Pressure', desc: 'Delivers steady gas pressure to laser cutters, furnaces, and reactors without line dips.' }
    ],
    complianceRequirements: [
      'PESO Static and Mobile Pressure Vessels (Unfired) Rules 2016 approval',
      'Mandatory safety clearance zone surrounding bulk storage vessel',
      'Dual safety relief valve (SRV) manifold with changeover valve for uninterrupted servicing'
    ],
    faqs: [
      {
        question: 'How does the on-site cryogenic tank rental / OPEX model work?',
        answer: 'Shakti Group finances, supplies, and installs the vacuum-insulated cryogenic vessel (3 KL to 60 KL), ambient vaporizers, and pressure reduction skids on your premises under an OPEX lease. You pay zero upfront capital expenditure for the equipment—gas refills are billed based on metered decanting from our cryogenic tankers.'
      },
      {
        question: 'How quickly does telemetry trigger a refill dispatch?',
        answer: 'Our IoT tank telemetry transmits liquid level, differential pressure, and boil-off rate every 15 minutes. When levels approach pre-configured thresholds (typically 30% or 3-day buffer), our central dispatch automatically routes a dedicated road tanker from our nearest manufacturing plant.'
      }
    ],
    seoTitle: 'Bulk Cryogenic Storage Tank Installation & Telemetry | Shakti Group',
    seoDesc: 'Turnkey cryogenic liquid storage vessel installation on rental/OPEX model. 3 KL to 60 KL tanks, automated IoT telemetry refills, and continuous pipeline supply.',
    keywords: 'Bulk Storage Tank Installation, Cryogenic Vessel Telemetry, Industrial Gas Pipeline Supply, Tank Rental OPEX Model, LOX Storage Tank India'
  },

  'cylinder-gas-supply': {
    slug: 'cylinder-gas-supply',
    title: 'Cylinder Gas Supply & Manifold Systems',
    subtitle: 'Scheduled cylinder route delivery, high-pressure quad bundles (MCPs), and automatic changeover manifold panels.',
    heroImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1600',
    serviceCategory: 'Cylinder & Manifold Systems',
    keySpecs: [
      { label: 'Pressure Rating', value: '150 Bar to 200 Bar' },
      { label: 'Pack Formats', value: '47L Cylinders & 16-Cylinder Quads' },
      { label: 'Manifold Panels', value: 'Automatic Changeover Controls' },
      { label: 'Safety Rating', value: 'PESO & IS 3933 Standards' }
    ],
    overviewHeading: 'High-Pressure Cylinder & Quad Distribution Network',
    overviewText: [
      'For industrial workshops and manufacturing facilities requiring compressed gases in versatile volumes, Shakti Group manages an extensive inventory of high-pressure cylinders and Multi-Cylinder Packs (MCP quads).',
      'We install pneumatic automatic changeover manifold headers that seamlessly switch between active and reserve cylinder banks, preventing pressure drops during factory shift changes.'
    ],
    visualHighlights: [
      {
        image: 'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/skid.png',
        caption: '16-Cylinder high-pressure MCP quad skid with centralized manifold discharge valve.',
        tag: 'MCP Quads'
      },
      {
        image: 'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/cylinder.png',
        caption: 'PESO-certified 47L and 50L seamless steel industrial gas cylinders with tamper-evident seals.',
        tag: 'Cylinder Fleet'
      }
    ],
    workflowTitle: 'Cylinder Logistics & Refilling Protocol',
    workflowSteps: [
      { step: '01', phase: 'Preparation', title: 'Vacuum Evacuation', desc: 'Empty cylinders undergo complete vacuum evacuation to eliminate internal air or moisture residue.' },
      { step: '02', phase: 'Filling', title: 'Automated Header Charging', desc: 'Charged on 200 Bar automated filling headers with real-time temperature and pressure compensation.' },
      { step: '03', phase: 'QA Check', title: 'Leak & Purity Inspection', desc: 'Mass spectrometer leak detection and gas chromatography batch purity verification.' },
      { step: '04', phase: 'Logistics', title: 'Scheduled Route Delivery', desc: 'Palletized cylinder transport and collection of empty cylinders at client sites.' }
    ],
    engineeringSpecsTitle: 'Manifold & Quad Engineering Features',
    engineeringSpecs: [
      {
        title: 'Automatic Changeover Manifold Panels',
        desc: 'Pneumatic auto-changeover regulators automatically switch from primary to reserve cylinder banks when pressure reaches low thresholds.',
        points: ['Uninterrupted gas supply without manual valve switches', 'Visual status indicators and optional telemetry contacts', 'Stainless steel pigtails rated for 300 Bar pressure']
      },
      {
        title: 'Multi-Cylinder Packs (MCP Quads)',
        desc: '12 to 16 high-pressure cylinders secured inside heavy-duty steel frames with a unified discharge valve.',
        points: ['High-volume supply (~100m³ per quad) for laser cutting and fabrication', 'Forklift pockets and crane lifting lugs for easy positioning', 'Reduces cylinder swap frequency by 90%']
      }
    ],
    benefits: [
      { title: 'Continuous Gas Feed', desc: 'Auto-changeover headers maintain unbroken line pressure for welding and cutting.' },
      { title: 'Enhanced Workplace Safety', desc: 'Pre-inspected cylinders, flash-back arrestors, and certified valves protect site personnel.' },
      { title: 'Predictable Logistics', desc: 'Custom delivery schedules aligned with production shift demands.' }
    ],
    complianceRequirements: [
      'Gas Cylinders Rules 2016 statutory compliance',
      'Mandatory 5-year periodic hydrostatic stretch testing certification',
      'Color coding and safety labeling in compliance with IS 3933 standards'
    ],
    faqs: [
      {
        question: 'What is the advantage of using a 16-cylinder MCP quad instead of single cylinders?',
        answer: 'An MCP quad bundles 16 high-pressure cylinders into a heavy-duty steel cage connected to a single master outlet valve. This delivers ~110m³ of gas without swapping cylinders 16 times, eliminating production interruptions, crane handling risks, and regulator wear.'
      }
    ],
    seoTitle: 'Cylinder Gas Supply & Manifold Systems | Shakti Group',
    seoDesc: 'High-pressure cylinder management, MCP quad bundles, and automatic changeover gas manifold installations. Fast delivery across Western India.',
    keywords: 'Cylinder Gas Supply, MCP Quads Gujarat, Auto Changeover Gas Manifold, Industrial Gas Delivery, High Pressure Cylinder Packs'
  },

  'cylinder-management': {
    slug: 'cylinder-management',
    title: 'Cylinder Gas Supply & Manifold Systems',
    subtitle: 'Scheduled cylinder route delivery, high-pressure quad bundles (MCPs), and automatic changeover manifold panels.',
    heroImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1600',
    serviceCategory: 'Cylinder & Manifold Systems',
    keySpecs: [
      { label: 'Pressure Rating', value: '150 Bar to 200 Bar' },
      { label: 'Pack Formats', value: '47L Cylinders & 16-Cylinder Quads' },
      { label: 'Manifold Panels', value: 'Automatic Changeover Controls' },
      { label: 'Safety Rating', value: 'PESO & IS 3933 Standards' }
    ],
    overviewHeading: 'High-Pressure Cylinder & Quad Distribution Network',
    overviewText: [
      'For industrial workshops and manufacturing facilities requiring compressed gases in versatile volumes, Shakti Group manages an extensive inventory of high-pressure cylinders and Multi-Cylinder Packs (MCP quads).',
      'We install pneumatic automatic changeover manifold headers that seamlessly switch between active and reserve cylinder banks, preventing pressure drops during factory shift changes.'
    ],
    visualHighlights: [
      {
        image: 'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/skid.png',
        caption: '16-Cylinder high-pressure MCP quad skid with centralized manifold discharge valve.',
        tag: 'MCP Quads'
      },
      {
        image: 'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/cylinder.png',
        caption: 'PESO-certified 47L and 50L seamless steel industrial gas cylinders with tamper-evident seals.',
        tag: 'Cylinder Fleet'
      }
    ],
    workflowTitle: 'Cylinder Logistics & Refilling Protocol',
    workflowSteps: [
      { step: '01', phase: 'Preparation', title: 'Vacuum Evacuation', desc: 'Empty cylinders undergo complete vacuum evacuation to eliminate internal air or moisture residue.' },
      { step: '02', phase: 'Filling', title: 'Automated Header Charging', desc: 'Charged on 200 Bar automated filling headers with real-time temperature and pressure compensation.' },
      { step: '03', phase: 'QA Check', title: 'Leak & Purity Inspection', desc: 'Mass spectrometer leak detection and gas chromatography batch purity verification.' },
      { step: '04', phase: 'Logistics', title: 'Scheduled Route Delivery', desc: 'Palletized cylinder transport and collection of empty cylinders at client sites.' }
    ],
    engineeringSpecsTitle: 'Manifold & Quad Engineering Features',
    engineeringSpecs: [
      {
        title: 'Automatic Changeover Manifold Panels',
        desc: 'Pneumatic auto-changeover regulators automatically switch from primary to reserve cylinder banks when pressure reaches low thresholds.',
        points: ['Uninterrupted gas supply without manual valve switches', 'Visual status indicators and optional telemetry contacts', 'Stainless steel pigtails rated for 300 Bar pressure']
      },
      {
        title: 'Multi-Cylinder Packs (MCP Quads)',
        desc: '12 to 16 high-pressure cylinders secured inside heavy-duty steel frames with a unified discharge valve.',
        points: ['High-volume supply (~100m³ per quad) for laser cutting and fabrication', 'Forklift pockets and crane lifting lugs for easy positioning', 'Reduces cylinder swap frequency by 90%']
      }
    ],
    benefits: [
      { title: 'Continuous Gas Feed', desc: 'Auto-changeover headers maintain unbroken line pressure for welding and cutting.' },
      { title: 'Enhanced Workplace Safety', desc: 'Pre-inspected cylinders, flash-back arrestors, and certified valves protect site personnel.' },
      { title: 'Predictable Logistics', desc: 'Custom delivery schedules aligned with production shift demands.' }
    ],
    complianceRequirements: [
      'Gas Cylinders Rules 2016 statutory compliance',
      'Mandatory 5-year periodic hydrostatic stretch testing certification',
      'Color coding and safety labeling in compliance with IS 3933 standards'
    ],
    seoTitle: 'Cylinder Gas Supply & Manifold Systems | Shakti Group',
    seoDesc: 'High-pressure cylinder management, MCP quad bundles, and automatic changeover gas manifold installations.',
    keywords: 'Cylinder Gas Supply, MCP Quads Gujarat, Auto Changeover Gas Manifold, Industrial Gas Delivery'
  },

  'cryogenic-engineering': {
    slug: 'cryogenic-engineering',
    title: 'Cryogenic Engineering & Turnkey Pipelines',
    subtitle: 'Custom Vacuum Insulated Piping (VIP), ambient atmospheric vaporizers, pressure regulation stations, and plant integration.',
    heroImage: 'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/Industrial%20Gas%20Storage%20%26%20Vaporization%20Equipment.webp',
    serviceCategory: 'Engineering & Pipeline Integration',
    keySpecs: [
      { label: 'Piping Material', value: '316L Stainless Steel & VIP' },
      { label: 'Vacuum Rating', value: '10⁻⁴ Torr Multi-Layer VIP' },
      { label: 'Design Codes', value: 'ASME B31.3 & IS 2825' },
      { label: 'Pressure Range', value: 'Vacuum to 400 Bar' }
    ],
    overviewHeading: 'Turnkey Cryogenic Storage & Gas Pipeline Engineering',
    overviewText: [
      'Shakti Group’s engineering division designs, fabricates, and installs complete industrial gas distribution networks—from bulk storage tanks to high-purity point-of-use outlets.',
      'We specialize in Vacuum Insulated Pipe (VIP) systems that eliminate thermal boil-off losses during liquid nitrogen or oxygen transfer across long industrial facility distances.'
    ],
    visualHighlights: [
      {
        image: 'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/Optimised%20images/Custom%20Cryogenic%20Engineering%20%26%20Pipeline%20Solutions.webp',
        caption: 'Turnkey cryogenic pipeline headers, ambient vaporizers, and pressure control skids.',
        tag: 'Piping Headers'
      },
      {
        image: 'https://media.istockphoto.com/id/2249079819/photo/copper-pipe-soldering-process-with-tin-by-specialized-technicians.webp?a=1&b=1&s=612x612&w=0&k=20&c=gJ8unfsXi--OY9ii5tzkks8cUt6FpXDL5K6Zl-LsV8s=',
        caption: 'Precision orbital welding and helium leak detection for high-purity process gas lines.',
        tag: 'Orbital Welding'
      }
    ],
    workflowTitle: 'Turnkey Engineering Project Steps',
    workflowSteps: [
      { step: '01', phase: 'Design', title: 'Flow & Thermal Calculations', desc: 'Calculating pipeline pressure drops, cryogenic heat leak, and sizing vaporizer flow rates.' },
      { step: '02', phase: 'Approval', title: 'ISO & PESO Approvals', desc: 'Submitting isometric piping drawings and structural foundation calculations to regulatory bodies.' },
      { step: '03', phase: 'Fabrication', title: 'Orbital Welding & VIP Assembly', desc: 'Orbital TIG welding of stainless steel pipes and high-vacuum evacuation of VIP double jackets.' },
      { step: '04', phase: 'Commissioning', title: 'Hydrostatic & Helium Leak Test', desc: 'Helium mass spectrometer leak testing down to 10⁻⁹ mbar.l/s followed by N₂ dry purging.' }
    ],
    engineeringSpecsTitle: 'Cryogenic Piping & Control Engineering',
    engineeringSpecs: [
      {
        title: 'Vacuum Insulated Pipe (VIP) Systems',
        desc: 'Double-walled stainless steel pipe with molecular sieve vacuum insulation that reduces cryogenic liquid boil-off losses by over 90%.',
        points: ['Outer jacket remains at ambient temperature with zero frost formation', 'Maintenance-free static vacuum getters', 'Bellow expansion joints absorb thermal contraction (-196°C to +40°C)']
      },
      {
        title: 'Pressure Reduction & Control Stations',
        desc: 'Redundant dual-line pressure regulation skids equipped with safety shut-off valves and pressure relief devices.',
        points: ['Dual regulators ensure continuous flow during maintenance', 'Integrated pressure relief valves set per ASME Section VIII', 'Stainless steel instrumentation manifolds']
      }
    ],
    benefits: [
      { title: 'Minimal Boil-Off Loss', desc: 'Vacuum insulated piping minimizes liquid gas evaporation during transport.' },
      { title: 'Engineered Precision', desc: 'Designed to ASME B31.3 process piping standards for multi-decade reliability.' },
      { title: 'Turnkey Execution', desc: 'Single-source responsibility from civil foundations to final gas purity sign-off.' }
    ],
    complianceRequirements: [
      'ASME B31.3 Chemical Plant and Petroleum Refinery Piping Code',
      'PESO Static and Mobile Pressure Vessels (Unfired) Rules',
      'Radiographic testing (NDT) of stainless steel pipe welds'
    ],
    faqs: [
      {
        question: 'Why choose Vacuum Insulated Piping (VIP) over foam-insulated piping?',
        answer: 'VIP uses a double-walled stainless steel pipe with multi-layer foil insulation maintained under 10⁻⁴ Torr vacuum. It provides up to 10x better thermal efficiency than polyurethane or foam glass, eliminating sweating, ice accumulation, and boil-off gas losses during liquid nitrogen or oxygen transfer.'
      }
    ],
    seoTitle: 'Cryogenic Engineering & Turnkey Pipelines | Shakti Group',
    seoDesc: 'Custom Vacuum Insulated Piping (VIP), ambient atmospheric vaporizers, and industrial gas pipeline installation to ASME B31.3 standards.',
    keywords: 'Cryogenic Pipeline Engineering, Vacuum Insulated Piping VIP, Industrial Gas Piping ASME, Cryogenic Vaporizer Systems'
  },

  'onsite-generation': {
    slug: 'onsite-generation',
    title: 'Cryogenic Engineering & Turnkey Pipelines',
    subtitle: 'Custom Vacuum Insulated Piping (VIP), ambient atmospheric vaporizers, pressure regulation stations, and plant integration.',
    heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600',
    serviceCategory: 'Engineering & Pipeline Integration',
    keySpecs: [
      { label: 'Piping Material', value: '316L Stainless Steel & VIP' },
      { label: 'Vacuum Rating', value: '10⁻⁴ Torr Multi-Layer VIP' },
      { label: 'Design Codes', value: 'ASME B31.3 & IS 2825' },
      { label: 'Pressure Range', value: 'Vacuum to 400 Bar' }
    ],
    overviewHeading: 'Turnkey Cryogenic Storage & Gas Pipeline Engineering',
    overviewText: [
      'Shakti Group’s engineering division designs, fabricates, and installs complete industrial gas distribution networks—from bulk storage tanks to high-purity point-of-use outlets.',
      'We specialize in Vacuum Insulated Pipe (VIP) systems that eliminate thermal boil-off losses during liquid nitrogen or oxygen transfer across long industrial facility distances.'
    ],
    visualHighlights: [
      {
        image: 'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/Optimised%20images/Custom%20Cryogenic%20Engineering%20%26%20Pipeline%20Solutions.webp',
        caption: 'Turnkey cryogenic pipeline headers, ambient vaporizers, and pressure control skids.',
        tag: 'Piping Headers'
      },
      {
        image: 'https://media.istockphoto.com/id/2249079819/photo/copper-pipe-soldering-process-with-tin-by-specialized-technicians.webp?a=1&b=1&s=612x612&w=0&k=20&c=gJ8unfsXi--OY9ii5tzkks8cUt6FpXDL5K6Zl-LsV8s=',
        caption: 'Precision orbital welding and helium leak detection for high-purity process gas lines.',
        tag: 'Orbital Welding'
      }
    ],
    workflowTitle: 'Turnkey Engineering Project Steps',
    workflowSteps: [
      { step: '01', phase: 'Design', title: 'Flow & Thermal Calculations', desc: 'Calculating pipeline pressure drops, cryogenic heat leak, and sizing vaporizer flow rates.' },
      { step: '02', phase: 'Approval', title: 'ISO & PESO Approvals', desc: 'Submitting isometric piping drawings and structural foundation calculations to regulatory bodies.' },
      { step: '03', phase: 'Fabrication', title: 'Orbital Welding & VIP Assembly', desc: 'Orbital TIG welding of stainless steel pipes and high-vacuum evacuation of VIP double jackets.' },
      { step: '04', phase: 'Commissioning', title: 'Hydrostatic & Helium Leak Test', desc: 'Helium mass spectrometer leak testing down to 10⁻⁹ mbar.l/s followed by N₂ dry purging.' }
    ],
    engineeringSpecsTitle: 'Cryogenic Piping & Control Engineering',
    engineeringSpecs: [
      {
        title: 'Vacuum Insulated Pipe (VIP) Systems',
        desc: 'Double-walled stainless steel pipe with molecular sieve vacuum insulation that reduces cryogenic liquid boil-off losses by over 90%.',
        points: ['Outer jacket remains at ambient temperature with zero frost formation', 'Maintenance-free static vacuum getters', 'Bellow expansion joints absorb thermal contraction (-196°C to +40°C)']
      },
      {
        title: 'Pressure Reduction & Control Stations',
        desc: 'Redundant dual-line pressure regulation skids equipped with safety shut-off valves and pressure relief devices.',
        points: ['Dual regulators ensure continuous flow during maintenance', 'Integrated pressure relief valves set per ASME Section VIII', 'Stainless steel instrumentation manifolds']
      }
    ],
    benefits: [
      { title: 'Minimal Boil-Off Loss', desc: 'Vacuum insulated piping minimizes liquid gas evaporation during transport.' },
      { title: 'Engineered Precision', desc: 'Designed to ASME B31.3 process piping standards for multi-decade reliability.' },
      { title: 'Turnkey Execution', desc: 'Single-source responsibility from civil foundations to final gas purity sign-off.' }
    ],
    complianceRequirements: [
      'ASME B31.3 Chemical Plant and Petroleum Refinery Piping Code',
      'PESO Static and Mobile Pressure Vessels (Unfired) Rules',
      'Radiographic testing (NDT) of stainless steel pipe welds'
    ],
    seoTitle: 'Cryogenic Engineering & Turnkey Pipelines | Shakti Group',
    seoDesc: 'Custom Vacuum Insulated Piping (VIP), ambient atmospheric vaporizers, and industrial gas pipeline installation.',
    keywords: 'Cryogenic Pipeline Engineering, Vacuum Insulated Piping VIP, Industrial Gas Piping ASME'
  },

  'cylinder-services': {
    slug: 'cylinder-services',
    title: 'Cylinder Testing & Refurbishment',
    subtitle: 'PESO approved hydrostatic stretch testing, internal chemical cleaning, valving, shot-blasting, and re-certification.',
    heroImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1600',
    serviceCategory: 'Inspection & Maintenance',
    keySpecs: [
      { label: 'Testing Method', value: 'Water Jacket Hydrostatic Stretch' },
      { label: 'Test Pressure', value: '300 Bar to 450 Bar' },
      { label: 'Accreditation', value: 'PESO Certified Test Station' },
      { label: 'Services', value: 'Internal Wash, Valving & Painting' }
    ],
    overviewHeading: 'Statutory Cylinder Inspection & Re-Certification',
    overviewText: [
      'High-pressure gas cylinders are subject to strict statutory re-testing every 5 years under Indian Gas Cylinders Rules 2016 to prevent structural wall failure.',
      'Shakti Group operates PESO licensed testing stations equipped with automated water-jacket hydrostatic testing rigs, internal boroscopes, ultrasound wall thickness gauges, and shot-blasting bays.'
    ],
    visualHighlights: [
      {
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1600',
        caption: 'Calibrated water-jacket hydrostatic testing measuring permanent wall expansion per IS 8451.',
        tag: 'Hydrostatic Testing'
      },
      {
        image: 'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/cylinder.png',
        caption: 'Shot-blasted, repainted, and torque-valved cylinders ready for statutory dispatch.',
        tag: 'Refurbished Stock'
      }
    ],
    workflowTitle: '5-Year Re-Certification Workflow',
    workflowSteps: [
      { step: '01', phase: 'Prep', title: 'Gas De-canting & Degassing', desc: 'Complete evacuation of residual gas followed by steam or chemical purging.' },
      { step: '02', phase: 'Inspection', title: 'Internal Boroscope Inspection', desc: '360° internal visual inspection to detect corrosion, pitting, or oil contamination.' },
      { step: '03', phase: 'Testing', title: 'Water-Jacket Hydro-Test', desc: 'Pressurizing cylinder to 1.5x working pressure while measuring permanent volumetric expansion.' },
      { step: '04', phase: 'Refurbishment', title: 'Shot Blasting & Re-Valving', desc: 'External surface shot-blasting, polyurethane painting, new PESO-approved valve installation, and stamping.' }
    ],
    engineeringSpecsTitle: 'Testing Technology & Compliance Standards',
    engineeringSpecs: [
      {
        title: 'Water Jacket Hydrostatic Stretch Testing',
        desc: 'Measures elastic and permanent expansion of cylinder walls under high hydrostatic pressure.',
        points: ['Pass criteria: Permanent expansion must not exceed 10% of total expansion', 'Calibrated digital pressure transducers and automated expansion burettes', 'Digital test record retention for audit traceability']
      },
      {
        title: 'Ultrasonic Wall Thickness & Valve Refurbishment',
        desc: 'Non-destructive ultrasonic thickness measurement identifies thin spots or internal neck cracks.',
        points: ['Torque-controlled valve installation to prevent neck thread damage', 'Internal chemical washing and hot air drying for ultra-pure gas duty', 'Color-coded polyurethane painting per IS 3933']
      }
    ],
    benefits: [
      { title: '100% Statutory Compliance', desc: 'Fulfills all mandatory PESO guidelines under Gas Cylinders Rules 2016.' },
      { title: 'Extends Cylinder Lifespan', desc: 'Professional refurbishment restores cylinder appearance and operational safety.' },
      { title: 'Prevents Gas Contamination', desc: 'Internal chemical washing guarantees high-purity gas compatibility.' }
    ],
    complianceRequirements: [
      'PESO (Petroleum & Explosives Safety Organization) licensed testing facility',
      'IS 8451 & IS 5844 standards for high-pressure cylinder testing',
      'Mandatory cylinder neck stamping with testing date and PESO mark'
    ],
    faqs: [
      {
        question: 'How often must industrial gas cylinders be tested?',
        answer: 'Under Indian Gas Cylinders Rules 2016, seamless steel gas cylinders must undergo hydrostatic stretch testing every 5 years (toxic and corrosive gases like SO2 or Chlorine require testing every 2 to 3 years).'
      }
    ],
    seoTitle: 'PESO Approved Cylinder Testing & Refurbishment | Shakti Group',
    seoDesc: 'PESO licensed water-jacket hydrostatic stretch testing, internal chemical wash, ultrasonic wall inspection, valving, and statutory re-certification in Gujarat.',
    keywords: 'Cylinder Testing PESO, Hydrostatic Stretch Test, Gas Cylinder Refurbishment Gujarat, Cylinder Inspection Station'
  },

  'export': {
    slug: 'export',
    title: 'International Industrial Gas Export & ISO Tanks',
    subtitle: 'Global export and supply of bulk cryogenic liquids (LOX, LIN, LAR, LCO₂), specialty gas tonners, and cylinder quads in certified 20ft T75 ISO tank containers.',
    heroImage: 'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/Industrial%20Gas%20Storage%20%26%20Vaporization%20Equipment.webp',
    serviceCategory: 'Global Logistics & ISO Containers',
    keySpecs: [
      { label: 'Container Types', value: '20ft T75 ISO Tank Containers' },
      { label: 'Capacity Range', value: '20,000L to 24,000L Per ISO' },
      { label: 'Handling Class', value: 'IMO Class 2 Hazardous Goods' },
      { label: 'Export Ports', value: 'Mundra, Hazira & JNPT Ports' }
    ],
    overviewHeading: 'International Bulk Gas Export & Multimodal Transport From India',
    overviewText: [
      'Are you looking to import industrial, medical, or specialty gases from India? Shakti Group is a premier international exporter of high-purity cryogenic liquids and compressed gases, delivering to importers, manufacturing conglomerates, and gas distributors across the Middle East (UAE, Saudi Arabia, Oman, Qatar), Africa (Kenya, Tanzania, Nigeria, South Africa), and Southeast Asia (Vietnam, Indonesia, Malaysia).',
      'We manage the entire export chain: certified T75 cryogenic ISO tank containers, gravimetric decanting at our 448+ TPD ASU & CO₂ production facilities, comprehensive Dangerous Goods (DG) IMO documentation, SGS / Intertek inspection, customs clearance at western India deepwater ports (Hazira, Mundra, and JNPT), and multimodal sea freight forwarding on CIF, FOB, or CFR terms.'
    ],
    visualHighlights: [
      {
        image: 'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/isotank.png',
        caption: '20ft T75 intermodal cryogenic ISO tank container rated for LOX, LIN, LAR, and LCO₂ ocean freight.',
        tag: 'T75 ISO Containers'
      },
      {
        image: 'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/tonner.png',
        caption: 'Export tonners and cylinder pallets engineered for secure maritime cargo stacking.',
        tag: 'Tonners & Pallets'
      },
      {
        image: 'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/roadtanker.png',
        caption: 'Port connectivity from Gujarat manufacturing plants directly to Hazira, Mundra, and JNPT berths.',
        tag: 'Port Logistics'
      }
    ],
    workflowTitle: 'End-to-End Export Supply Chain Protocol',
    workflowSteps: [
      { step: '01', phase: 'Inquiry', title: 'Commercial Specification & Purity Alignment', desc: 'Confirming gas purity (Grade 5.0, UHP 99.999%, IP Medical, or Food Grade E290), container type, and target delivery port.' },
      { step: '02', phase: 'Filling', title: 'ISO Tank Cryo Decanting & Batch COA', desc: 'Gravimetric loading at our manufacturing plants with gas chromatography purity certification and batch analysis.' },
      { step: '03', phase: 'Compliance', title: 'IMDG Dangerous Goods & Customs Clearance', desc: 'Preparation of IMO DG declarations, MSDS, packing lists, consular legalization, and expedited port customs clearance.' },
      { step: '04', phase: 'Shipping', title: 'Ocean Freight Transit & Hold-Time Tracking', desc: 'Loading onto container vessels with continuous hold-time and pressure monitoring until destination port discharge.' }
    ],
    engineeringSpecsTitle: 'ISO Tank Container & Export Engineering Specifications',
    engineeringSpecs: [
      {
        title: '20ft T75 Cryogenic ISO Containers',
        desc: 'Intermodal ISO tank containers rated for international sea, rail, and road transport of cryogenic liquids.',
        points: [
          'Holding time up to 100 days with multi-layer super vacuum insulation',
          'DNV / Lloyds Register certified container frames and pressure vessels',
          'Dual safety relief valve manifolds and integrated pressure build-up vaporizers',
          'Suitable for Liquid Oxygen (LOX), Liquid Nitrogen (LIN), Liquid Argon (LAR), and Liquid CO₂'
        ]
      },
      {
        title: 'Dangerous Goods (DG) Packaging & Export Skids',
        desc: 'Certified steel cylinder pallets and tonners designed for ocean container loading without movement risk.',
        points: [
          'UN approved cylinder packaging for compressed and toxic gases',
          'IMDG Class 2.1 (Flammable), Class 2.2 (Non-flammable), and Class 2.3 (Toxic) compliance',
          'Export tonners for Sulphur Dioxide (SO₂) and Chlorine (Cl₂)'
        ]
      }
    ],
    exportSpecifics: {
      heading: 'Global Export Infrastructure & Trade Terms',
      targetPorts: ['Port of Jebel Ali (UAE)', 'Dammam & Jeddah (Saudi Arabia)', 'Mombasa (Kenya)', 'Dar es Salaam (Tanzania)', 'Port Klang (Malaysia)', 'Haiphong & Ho Chi Minh (Vietnam)', 'Colombo (Sri Lanka)'],
      servedRegions: ['Middle East & GCC Countries', 'East & West Africa', 'Southeast Asia', 'Indian Subcontinent & SAARC'],
      exportGases: [
        { name: 'Liquid Oxygen (LOX)', formula: 'O₂', format: 'T75 ISO Tanks (20–24 KL)', purity: '≥ 99.5% Industrial / 99.6% IP Medical' },
        { name: 'Liquid Nitrogen (LIN)', formula: 'N₂', format: 'T75 ISO Tanks (20–24 KL)', purity: 'Grade 5.0 (99.999%) / Food Grade E941' },
        { name: 'Liquid Argon (LAR)', formula: 'Ar', format: 'T75 ISO Tanks (20–24 KL)', purity: 'Grade 5.0 (99.999%) Welding & Metallurgy' },
        { name: 'Liquid Carbon Dioxide (LCO₂)', formula: 'CO₂', format: 'T75 ISO Tanks (20–22 MT)', purity: 'ISBT / FSSAI Food Grade E290 (≥ 99.9%)' },
        { name: 'Sulphur Dioxide (SO₂)', formula: 'SO₂', format: '900 kg Tonners / Cylinders', purity: 'Commercial & High Purity (≥ 99.9%)' },
        { name: 'Hydrogen Chloride (HCl)', formula: 'HCl', format: 'High Pressure Cylinders & Skids', purity: 'Anhydrous Grade (≥ 99.5% to 99.99%)' },
        { name: 'Sulphur Hexafluoride (SF₆)', formula: 'SF₆', format: 'High Pressure Cylinders', purity: 'IEC 60376 Electrical Grade (≥ 99.99%)' },
        { name: 'Nitrous Oxide (N₂O)', formula: 'N₂O', format: 'High Pressure Cylinders / Quads', purity: 'Medical IP (≥ 98.0%) & Electronic Grade' }
      ],
      incoTerms: ['FOB (Free on Board - Mundra / Hazira / JNPT)', 'CIF (Cost, Insurance & Freight to your destination port)', 'CFR (Cost and Freight)', 'EXW (Ex-Works from Gujarat plants)'],
      customsDocumentation: [
        'Certificate of Analysis (COA) with GC batch report',
        'IMO Dangerous Goods (DG) Declaration & MSDS',
        'Commercial Invoice & Consular Legalized Packing List',
        'Bill of Lading (B/L) issued by tier-1 shipping lines',
        'Certificate of Origin (COO / Form A where applicable)'
      ]
    },
    benefits: [
      { title: 'Global Gas Exporter', desc: 'Direct supply to gas importers, distributors, and turnkey contractors in 20+ countries.' },
      { title: '100-Day Cryogenic Hold-Time', desc: 'Super-vacuum T75 ISO tanks preserve cryogenic state across long intercontinental sea voyages.' },
      { title: 'Full Regulatory Documentation', desc: 'End-to-end management of IMDG declarations, shipping bills, and COA certification.' }
    ],
    complianceRequirements: [
      'IMDG (International Maritime Dangerous Goods) Code Class 2 compliance',
      'ISO 1496/3 intermodal tank container design and pressure inspection',
      'Port authority hazardous cargo handling approvals at Mundra, Hazira, and JNPT',
      'Customs EDI online export clearance and dangerous goods manifests'
    ],
    faqs: [
      {
        question: 'Which ports in India do you export cryogenic ISO tanks from?',
        answer: 'We dispatch primarily through Western India’s premier container ports: Mundra Port (Gujarat), Hazira Port (Surat, Gujarat), and Jawaharlal Nehru Port (JNPT, Mumbai). These ports offer direct weekly liner connections to the Middle East, East/West Africa, and Southeast Asia.'
      },
      {
        question: 'What gases can be exported in T75 cryogenic ISO containers?',
        answer: 'Our T75 ISO containers are engineered for Liquid Oxygen (LOX), Liquid Nitrogen (LIN), Liquid Argon (LAR), and Liquid Carbon Dioxide (LCO₂). Compressed and specialty gases like SO₂, HCl, SF₆, and N₂O are exported in certified tonners and cylinder pallets.'
      },
      {
        question: 'Can you supply on CIF or CFR trade terms to our destination port?',
        answer: 'Yes! Our dedicated international export desk regularly quotes on FOB (Indian ports), CFR, and CIF (destination ports) terms, coordinating ocean freight with leading shipping lines and marine insurance underwriters.'
      },
      {
        question: 'What is the minimum order quantity (MOQ) for international export?',
        answer: 'For bulk cryogenic liquids, the standard MOQ is one 20ft T75 ISO container (~20,000 to 24,000 liters / ~18 to 22 metric tons depending on the gas). For specialty gases, we accommodate full 20ft container loads (FCL) of cylinder pallets or tonners.'
      }
    ],
    seoTitle: 'Import Industrial Gas from India | Cryogenic ISO Tank Exporter | Shakti Group',
    seoDesc: 'Looking to import industrial gases from India? Shakti Group exports Liquid Oxygen, Nitrogen, Argon, CO2, SO2 & specialty gases in 20ft T75 ISO containers worldwide. FOB/CIF terms from Mundra & Hazira.',
    keywords: 'import industrial gas from India, industrial gas exporter India, cryogenic ISO tank export, T75 ISO container LOX LIN LAR, liquid oxygen exporter, liquid nitrogen supplier Middle East Africa, export liquid CO2 India, buy SO2 tonners India, gas cylinder pallets export, import medical oxygen from India'
  }
};

export const SolutionSubPage: React.FC = () => {
  const location = useLocation();
  const slug = location.pathname.split('/').pop() || 'bulk-gas-supply';
  const data = SOLUTION_SUBPAGES_DATA[slug] || SOLUTION_SUBPAGES_DATA['bulk-gas-supply'];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.title,
    description: data.subtitle,
    provider: {
      '@type': 'Organization',
      name: 'Shakti Group of Companies',
      url: 'https://www.shaktigases.com',
      logo: 'https://www.shaktigases.com/logo.png',
      telephone: '+91-9727783440',
      email: 'info@shaktigases.com'
    },
    areaServed: data.slug === 'export' ? ['Global', 'Middle East', 'Africa', 'Southeast Asia', 'India'] : ['India', 'Gujarat', 'Western India'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: data.title,
      itemListElement: data.keySpecs.map((s, idx) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: `${s.label}: ${s.value}`
        }
      }))
    }
  };

  const faqSchema = data.faqs && data.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer
      }
    }))
  } : null;

  const schemaArray = faqSchema ? [schema, faqSchema] : schema;

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <SEO
        title={data.seoTitle}
        description={data.seoDesc}
        keywords={data.keywords}
        canonicalUrl={`https://www.shaktigases.com${location.pathname}`}
        ogImage={data.heroImage}
        schemaJson={schemaArray}
      />

      {/* Clean Technical Header with Hero Visual */}
      <div className="bg-slate-950 text-white py-12 sm:py-16 border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 mb-4">
            <NavLink to="/" className="hover:text-white transition">Home</NavLink>
            <ChevronRight className="h-3 w-3 text-slate-600" />
            <NavLink to="/solutions" className="hover:text-white transition">Solutions</NavLink>
            <ChevronRight className="h-3 w-3 text-slate-600" />
            <span className="text-sky-400 font-medium">{data.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-3xl space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-sky-950 text-sky-300 text-xs font-mono font-semibold px-2.5 py-1 rounded border border-sky-800 uppercase tracking-wider">
                  {data.serviceCategory}
                </span>
                {data.slug === 'export' && (
                  <span className="bg-emerald-950 text-emerald-300 text-xs font-medium px-2.5 py-1 rounded border border-emerald-800 flex items-center gap-1">
                    <Globe className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Global Trade & Import Inquiries Welcome</span>
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {data.title}
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal pt-1">
                {data.subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <NavLink
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-lg transition shadow-sm"
              >
                <span>{data.slug === 'export' ? 'Request Export / Import Quote' : 'Consult Engineering Team'}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </NavLink>
              {data.slug === 'export' ? (
                <a
                  href="mailto:info@shaktigases.com?subject=International%20Gas%20Import%20Inquiry%20-%20Shakti%20Group"
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold px-5 py-3 rounded-lg transition border border-slate-700"
                >
                  <Ship className="h-3.5 w-3.5 text-sky-400" />
                  <span>Direct Export Desk Email</span>
                </a>
              ) : (
                <NavLink
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold px-5 py-3 rounded-lg transition border border-slate-700"
                >
                  <span>View All Solutions</span>
                </NavLink>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Key Specifications Summary Bar */}
      <section className="bg-slate-50 border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.keySpecs.map((spec, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg border border-slate-200 shadow-2xs">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide block">{spec.label}</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 mt-1 block">{spec.value}</span>
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
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-3">
                {data.overviewHeading}
              </h2>
              {data.overviewText.map((pText, idx) => (
                <p key={idx} className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                  {pText}
                </p>
              ))}
            </div>

            {/* Visual Operational Gallery (At least 2 pictures per solution) */}
            {data.visualHighlights && data.visualHighlights.length > 0 && (
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2">
                    <Layers className="h-4 w-4 text-sky-700" />
                    <span>Operational Hardware & Deployment Gallery</span>
                  </h3>
                  <span className="text-xs text-slate-500">Certified Field Infrastructure</span>
                </div>

                <div className={`grid grid-cols-1 sm:grid-cols-2 ${data.visualHighlights.length > 2 ? 'lg:grid-cols-3' : ''} gap-4`}>
                  {data.visualHighlights.map((vh, vIdx) => (
                    <div key={vIdx} className="group bg-slate-50 rounded-lg border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-xs transition">
                      <div className="h-44 sm:h-48 overflow-hidden bg-slate-900 relative">
                        <img
                          src={vh.image}
                          alt={vh.caption}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                          loading="lazy"
                        />
                        <div className="absolute top-2 left-2 bg-slate-950/80 backdrop-blur-xs text-sky-300 text-2xs font-semibold px-2 py-0.5 rounded border border-slate-700">
                          {vh.tag}
                        </div>
                      </div>
                      <div className="p-3 bg-white border-t border-slate-100">
                        <p className="text-xs text-slate-700 font-medium leading-relaxed">
                          {vh.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Special Section: For Export & ISO Tanks (Comprehensive Importer Hub) */}
            {data.exportSpecifics && (
              <div className="bg-slate-950 text-white p-6 sm:p-7 rounded-xl border border-slate-800 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-1.5 text-sky-400 text-xs font-bold uppercase tracking-wider">
                      <Globe className="h-4 w-4" />
                      <span>International Importers & Buyers Guide</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {data.exportSpecifics.heading}
                    </h3>
                  </div>
                  <span className="bg-sky-950 text-sky-300 text-xs px-3 py-1 rounded border border-sky-800 w-fit">
                    India ASU & Plant Decanting
                  </span>
                </div>

                {/* Export Gas Matrix Table */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Package className="h-3.5 w-3.5 text-sky-400" />
                    <span>Export Product Matrix & Container Formats</span>
                  </div>
                  <div className="overflow-x-auto rounded-lg border border-slate-800">
                    <table className="w-full text-left text-xs text-slate-300">
                      <thead className="bg-slate-900 text-white font-semibold border-b border-slate-800">
                        <tr>
                          <th className="py-2.5 px-3">Gas Line</th>
                          <th className="py-2.5 px-3">Chemical Formula</th>
                          <th className="py-2.5 px-3">Export Container / Format</th>
                          <th className="py-2.5 px-3">Export Purity Benchmark</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/80 bg-slate-950/60">
                        {data.exportSpecifics.exportGases.map((eg, egIdx) => (
                          <tr key={egIdx} className="hover:bg-slate-900/50 transition">
                            <td className="py-2.5 px-3 font-bold text-white">{eg.name}</td>
                            <td className="py-2.5 px-3 font-mono text-sky-400">{eg.formula}</td>
                            <td className="py-2.5 px-3 text-slate-300">{eg.format}</td>
                            <td className="py-2.5 px-3 text-slate-400">{eg.purity}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Key Target Regions & Ports */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="bg-slate-900/70 p-4 rounded-lg border border-slate-800 space-y-2">
                    <div className="text-xs font-bold text-sky-400 flex items-center gap-1.5 uppercase">
                      <Anchor className="h-3.5 w-3.5" />
                      <span>Regular Destination Ocean Ports</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {data.exportSpecifics.targetPorts.map((tp, tpIdx) => (
                        <li key={tpIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="h-3 w-3 text-sky-400 shrink-0" />
                          <span>{tp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-900/70 p-4 rounded-lg border border-slate-800 space-y-2">
                    <div className="text-xs font-bold text-sky-400 flex items-center gap-1.5 uppercase">
                      <FileCheck className="h-3.5 w-3.5" />
                      <span>Customs & Hazardous Documentation</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {data.exportSpecifics.customsDocumentation.map((cd, cdIdx) => (
                        <li key={cdIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="h-3 w-3 text-emerald-400 shrink-0" />
                          <span>{cd}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* IncoTerms Strip */}
                <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center gap-2 text-xs">
                  <span className="text-slate-400 font-semibold">Accepted Incoterms:</span>
                  {data.exportSpecifics.incoTerms.map((it, itIdx) => (
                    <span key={itIdx} className="bg-slate-900 text-slate-200 font-mono px-2 py-0.5 rounded border border-slate-700">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Workflow Timeline */}
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
                <Wrench className="h-4 w-4 text-sky-700" />
                <span>{data.workflowTitle}</span>
              </h3>

              <div className="space-y-3">
                {data.workflowSteps.map((stepItem, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="bg-sky-50 text-sky-800 border border-sky-200 text-xs font-mono font-bold px-2 py-0.5 rounded">
                          Phase {stepItem.step}
                        </span>
                        <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{stepItem.title}</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">{stepItem.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Specifications */}
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
                <Settings className="h-4 w-4 text-sky-700" />
                <span>{data.engineeringSpecsTitle}</span>
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {data.engineeringSpecs.map((spec, idx) => (
                  <div key={idx} className="bg-slate-50 p-5 rounded-lg border border-slate-200 space-y-2">
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">{spec.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{spec.desc}</p>

                    <div className="pt-2 border-t border-slate-200 space-y-1.5">
                      {spec.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-1.5 text-xs text-slate-700">
                          <CheckCircle2 className="h-3.5 w-3.5 text-sky-700 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Frequently Asked Questions (Structured FAQ schema for SEO) */}
            {data.faqs && data.faqs.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-slate-200">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-sky-700" />
                  <span>Frequently Asked Technical & Commercial Questions</span>
                </h3>

                <div className="space-y-3">
                  {data.faqs.map((faq, fIdx) => (
                    <div key={fIdx} className="bg-white p-4 sm:p-5 rounded-lg border border-slate-200 shadow-2xs space-y-1.5">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                        {faq.question}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Sidebar: Key Operational Benefits & Compliance */}
          <div className="lg:col-span-4 space-y-6">

            <div className="bg-slate-950 text-white p-6 rounded-lg space-y-4 border border-slate-800 sticky top-24">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                <Gauge className="h-5 w-5 text-sky-400" />
                <h3 className="text-sm sm:text-base font-bold text-white">
                  Operational Advantages
                </h3>
              </div>

              <div className="space-y-3">
                {data.benefits.map((ben, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <div className="text-xs font-bold text-sky-300">{ben.title}</div>
                    <div className="text-xs text-slate-400 leading-relaxed">{ben.desc}</div>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-800 space-y-2">
                <div className="flex items-center gap-1.5 text-xs text-slate-300 font-semibold">
                  <ShieldCheck className="h-4 w-4 text-sky-400" />
                  <span>Statutory Compliance & Standards:</span>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-400">
                  {data.complianceRequirements.map((req, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {data.slug === 'export' ? (
                <div className="pt-3 border-t border-slate-800 space-y-2">
                  <div className="text-2xs font-semibold uppercase tracking-wider text-slate-400">
                    Indian Ports of Departure:
                  </div>
                  <div className="flex flex-wrap gap-1.5 text-2xs text-slate-300">
                    <span className="bg-slate-900 px-2 py-0.5 rounded border border-slate-800">Hazira Port (Surat)</span>
                    <span className="bg-slate-900 px-2 py-0.5 rounded border border-slate-800">Mundra Port</span>
                    <span className="bg-slate-900 px-2 py-0.5 rounded border border-slate-800">JNPT Mumbai</span>
                  </div>
                </div>
              ) : (
                <div className="pt-3 border-t border-slate-800 space-y-1.5">
                  <div className="text-2xs font-semibold uppercase tracking-wider text-slate-400">
                    Regional Redundancy:
                  </div>
                  <p className="text-2xs text-slate-400">
                    448+ TPD capacity distributed across Karjan, Ranoli, Savli, Por, Ahmedabad, and Indore.
                  </p>
                </div>
              )}

              <div className="pt-2">
                <NavLink
                  to="/contact"
                  className="block text-center w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-2.5 rounded-lg text-xs uppercase tracking-wider transition shadow-sm"
                >
                  {data.slug === 'export' ? 'Inquire for Export Cargo' : 'Request Engineering Proposal'}
                </NavLink>
              </div>
            </div>

            {/* Quick Solution Directory Navigation */}
            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Explore Other Turnkey Solutions
              </h4>
              <div className="space-y-1.5">
                {Object.values(SOLUTION_SUBPAGES_DATA)
                  .filter(s => s.slug !== data.slug && s.slug !== 'cylinder-management' && s.slug !== 'onsite-generation')
                  .map((otherSol, osIdx) => (
                    <NavLink
                      key={osIdx}
                      to={`/solutions/${otherSol.slug}`}
                      className="flex items-center justify-between text-xs text-slate-700 hover:text-sky-700 p-2 rounded hover:bg-white transition group border border-transparent hover:border-slate-200"
                    >
                      <span className="font-medium group-hover:underline">{otherSol.title}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-700" />
                    </NavLink>
                  ))}
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default SolutionSubPage;

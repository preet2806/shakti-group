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
  FileCheck
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
  seoTitle: string;
  seoDesc: string;
  keywords: string;
}

export const SOLUTION_SUBPAGES_DATA: Record<string, SolutionPageData> = {
  'bulk-gas-supply': {
    slug: 'bulk-gas-supply',
    title: 'Bulk Gas Supply & Tank Telemetry Solutions',
    subtitle: 'On-site cryogenic liquid storage vessel installation, automated telemetry refill triggers, and continuous gas pipeline feed.',
    heroImage: 'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/service_tanker.png',
    serviceCategory: 'Bulk Storage & Telemetry',
    keySpecs: [
      { label: 'Storage Tanks', value: '3 KL to 50 KL Vessels' },
      { label: 'Refill Trigger', value: 'Automated IoT Telemetry' },
      { label: 'Supply Model', value: 'Capex or Opex Options' },
      { label: 'Downtime Risk', value: 'Zero Production Interruption' }
    ],
    overviewHeading: 'On-Site Cryogenic Bulk Storage Infrastructure',
    overviewText: [
      'High-volume industrial gas consumers often experience operational bottlenecks with compressed gas cylinders—frequent cylinder swapping, pressure fluctuations, and labor overhead.',
      'Shakti Group’s bulk solution installs stationary cryogenic storage vessels, ambient vaporizers, and IoT telemetry on client premises. Telemetry sensors monitor liquid height and pressure, automatically triggering tanker dispatches before levels drop.'
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
    seoTitle: 'Bulk Cryogenic Storage & Telemetry Solutions | Shakti Group',
    seoDesc: 'Turnkey cryogenic liquid storage vessel installation, ambient vaporizers, and automated tank telemetry.',
    keywords: 'Bulk Storage Tank Installation, Cryogenic Vessel Telemetry, Industrial Gas Pipeline Supply'
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
    seoTitle: 'Cylinder Testing & Refurbishment | Shakti Group',
    seoDesc: 'PESO approved hydrostatic stretch testing, internal chemical cleaning, valving, and cylinder re-certification.',
    keywords: 'Cylinder Testing PESO, Hydrostatic Stretch Test, Gas Cylinder Refurbishment Gujarat'
  },

  'export': {
    slug: 'export',
    title: 'International Export & ISO Tanks',
    subtitle: 'Global export of liquid LOX, LIN, LAR, LCO₂, cylinder pallets, and tonners with multimodal logistics.',
    heroImage: 'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/Industrial%20Gas%20Storage%20%26%20Vaporization%20Equipment.webp',
    serviceCategory: 'Global Logistics & ISO Containers',
    keySpecs: [
      { label: 'Container Types', value: '20ft T75 ISO Tank Containers' },
      { label: 'Capacity Range', value: '20,000L to 24,000L Per ISO' },
      { label: 'Handling Class', value: 'IMO Class 2 Hazardous Goods' },
      { label: 'Markets Served', value: 'Middle East, Africa, SE Asia' }
    ],
    overviewHeading: 'International Bulk Gas Export & Multimodal Transport',
    overviewText: [
      'Shakti Group facilitates international supply of industrial and specialty gases using T75 cryogenic ISO tank containers, cylinder pallets, and liquid tonners.',
      'Our export desk manages hazardous cargo documentation, IMDG code compliance, customs clearance at major Indian ports (Mundra, Hazira, JNPT), and sea freight forwarding.'
    ],
    workflowTitle: 'Export Supply Chain Protocol',
    workflowSteps: [
      { step: '01', phase: 'Order', title: 'Product & Purity Alignment', desc: 'Confirming technical purity specs (Grade 5.0 / E290) and container pressure rating.' },
      { step: '02', phase: 'Filling', title: 'ISO Tank Cryo Loading', desc: 'Precise liquid decanting at ASU production hubs under gravimetric weight control.' },
      { step: '03', phase: 'Compliance', title: 'IMDG & Customs Clearance', desc: 'Generating Dangerous Goods (DG) declarations, Certificate of Analysis, and port documentation.' },
      { step: '04', phase: 'Shipping', title: 'Multimodal Ocean Freight', desc: 'Transit to destination ports with temperature and hold-time pressure tracking.' }
    ],
    engineeringSpecsTitle: 'ISO Tank Container & Export Specifications',
    engineeringSpecs: [
      {
        title: '20ft T75 Cryogenic ISO Containers',
        desc: 'Intermodal ISO tank containers rated for international sea, rail, and road transport of cryogenic liquids.',
        points: ['Holding time up to 100 days with multi-layer super vacuum insulation', 'DNV / Lloyds Register certified container frames', 'Dual safety valve manifolds and pressure build-up vaporizers']
      },
      {
        title: 'Dangerous Goods (DG) Packaging & Stacking',
        desc: 'Certified steel cylinder pallets and tonners designed for ocean container loading without movement risk.',
        points: ['UN approved cylinder packaging for compressed gases', 'IMDG Class 2.1 / 2.2 / 2.3 dangerous goods compliance', 'Customs bonded port clearance workflows']
      }
    ],
    benefits: [
      { title: 'Global Reach', desc: 'Supplying bulk liquids and specialty gases across the Indian Ocean rim and beyond.' },
      { title: 'Long Hold-Times', desc: 'Super-vacuum T75 ISO tanks preserve cryogenic liquid state during long sea voyages.' },
      { title: 'Full Documentation', desc: 'End-to-end management of COA, IMDG DG declarations, and shipping bills.' }
    ],
    complianceRequirements: [
      'IMDG (International Maritime Dangerous Goods) code compliance',
      'ISO 1496/3 intermodal tank container design certification',
      'Port authority hazardous cargo handling approvals'
    ],
    seoTitle: 'International Industrial Gas Export & ISO Tanks | Shakti Group',
    seoDesc: 'Global export of bulk cryogenic liquids, T75 ISO tank containers, cylinder pallets, and multimodal logistics.',
    keywords: 'Industrial Gas Export India, Cryogenic ISO Tank Shipping, T75 ISO Container LOX'
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
            <NavLink to="/solutions" className="hover:text-white transition">Solutions</NavLink>
            <ChevronRight className="h-3 w-3 text-slate-600" />
            <span className="text-blue-400 font-medium">{data.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-3xl space-y-2">
              <span className="bg-slate-800 text-blue-300 text-xs font-mono px-2.5 py-0.5 rounded border border-slate-700">
                {data.serviceCategory}
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
              <span>Consult Engineering Team</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </NavLink>
          </div>

        </div>
      </div>

      {/* Key Specifications Summary Bar */}
      <section className="bg-slate-50 border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.keySpecs.map((spec, idx) => (
              <div key={idx} className="bg-white p-3.5 rounded-xl border border-slate-200">
                <span className="text-[11px] font-semibold text-slate-500 block">{spec.label}</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900">{spec.value}</span>
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

            {/* Workflow Timeline */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
                <Wrench className="h-4 w-4 text-blue-700" />
                <span>{data.workflowTitle}</span>
              </h3>

              <div className="space-y-3">
                {data.workflowSteps.map((stepItem, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="bg-blue-100 text-blue-700 text-[11px] font-bold px-2 py-0.5 rounded">
                          Phase {stepItem.step}
                        </span>
                        <h4 className="font-bold text-slate-900 text-sm">{stepItem.title}</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">{stepItem.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Specifications */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
                <Settings className="h-4 w-4 text-blue-700" />
                <span>{data.engineeringSpecsTitle}</span>
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {data.engineeringSpecs.map((spec, idx) => (
                  <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
                    <h4 className="text-base font-bold text-slate-900">{spec.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{spec.desc}</p>

                    <div className="pt-2 border-t border-slate-200/80 space-y-1">
                      {spec.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-1.5 text-xs text-slate-700">
                          <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sidebar: Key Operational Benefits & Compliance */}
          <div className="lg:col-span-4 space-y-6">

            <div className="bg-slate-900 text-white p-6 rounded-2xl space-y-4 border border-slate-800">
              <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                <Gauge className="h-5 w-5 text-blue-400" />
                <h3 className="text-base font-bold text-white">
                  Operational Advantages
                </h3>
              </div>

              <div className="space-y-3">
                {data.benefits.map((ben, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <div className="text-xs font-bold text-blue-300">{ben.title}</div>
                    <div className="text-[11px] text-slate-400 leading-relaxed">{ben.desc}</div>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-800 space-y-2">
                <div className="flex items-center gap-1.5 text-xs text-slate-300 font-semibold">
                  <ShieldCheck className="h-4 w-4 text-blue-400" />
                  <span>Statutory Compliance:</span>
                </div>
                <ul className="space-y-1 text-[11px] text-slate-400">
                  {data.complianceRequirements.map((req, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <NavLink
                  to="/contact"
                  className="block text-center w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2.5 rounded-lg text-xs transition"
                >
                  Request Engineering Proposal
                </NavLink>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default SolutionSubPage;

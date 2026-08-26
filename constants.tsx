import { 
  Truck, 
  Factory, 
  ShieldCheck, 
  Activity, 
  Zap, 
  Droplet,
  FlaskConical,
  Atom,
  Flame,
  Thermometer,
  Wind,
  Settings,
  Users,
  Clock,
  Briefcase
} from 'lucide-react';
import { NavItem, StatItem, Product, Service, GroupCompany, TimelineEvent, Industry, DeliveryOption, ValueItem } from './types';

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_e8fankb',   // e.g. service_8x3...
  TEMPLATE_ID: 'template_m0herq7', // e.g. template_9s2...
  PUBLIC_KEY: 'fqcrdjluwYKx-GMqN'    // e.g. user_Kj2...
};

// --- MICROSOFT OUTLOOK API CONFIGURATION ---
export const OUTLOOK_CONFIG = {
  TENANT_ID: 'f9e59c54-5546-47a1-9192-05d0ae488391',
  CLIENT_ID: 'b479f4cb-88fd-4956-8d15-fd4ef9678469',
  CLIENT_SECRET: 'db6678fe-254f-4cdb-90d0-2fbd92c96b8b', // WARNING: Using secrets in frontend is insecure for production. Use a backend proxy.
  FROM_EMAIL: 'preet.patel@shaktigases.com', // The email address sending the mail (must exist in your tenant)
  TO_EMAIL: 'preet.patel@shaktigases.com'    // Where the contact form submissions should go
};

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Company',
    path: '/company',
    children: [
      { label: 'About Shakti', path: '/company/about', description: 'Our history, leadership, and operational legacy since 1998' },
      { label: 'Group Entities & Network', path: '/company/our-group', description: '9 Group entities, ASUs, CO₂ units & refilling stations across India' },
      { label: 'Infrastructure', path: '/company/infrastructure', description: 'Cryogenic road tankers, storage tanks & vaporizers' },
      { label: 'Quality & Safety', path: '/company/quality-safety', description: 'PESO certifications, ISO standards & safety protocols' },
    ]
  },
  {
    label: 'Products',
    path: '/products',
    children: [
      { label: 'Bulk & Cryogenic Gases', path: '/products/bulk-cryogenic', description: 'Liquid LOX, LIN, LAR & LCO₂ in cryogenic tankers' },
      { label: 'Industrial & Cylinder Gases', path: '/products/industrial-cylinder', description: 'Compressed Oxygen, Nitrogen, Argon, Acetylene & Mixtures' },
      { label: 'Specialty & Calibration Gases', path: '/products/specialty-calibration', description: 'Ultra-high purity, laser gas mixtures & lab standards' },
      { label: 'Other Products', path: '/products/other', description: 'Dry ice, gas regulators, dewars & accessories' },
    ]
  },
  {
    label: 'Solutions',
    path: '/services',
    children: [
      { label: 'Bulk Gas Supply', path: '/solutions/bulk-gas-supply', description: 'On-site cryogenic storage & automated tanker telemetry' },
      { label: 'Cylinder Gas Supply', path: '/solutions/cylinder-gas-supply', description: 'Scheduled cylinder bank & manifold delivery' },
      { label: 'Cryogenic Engineering', path: '/solutions/cryogenic-engineering', description: 'Turnkey ASU installation, piping & vaporizer systems' },
      { label: 'Cylinder Services', path: '/solutions/cylinder-services', description: 'Hydrostatic testing, PESO re-certification & valving' },
      { label: 'Export', path: '/solutions/export', description: 'International gas supply, ISO tanks & multimodal freight' },
    ]
  },
  {
    label: 'Industries',
    path: '/industries',
    children: [
      { label: 'Metals & Manufacturing', path: '/industries/metals-manufacturing', description: 'Steelmaking, cutting, welding & heat treatment' },
      { label: 'Chemicals & Process Industries', path: '/industries/chemicals-process', description: 'Inerting, blanketing, purging & process reaction' },
      { label: 'Life Sciences', path: '/industries/life-sciences', description: 'Medical oxygen, pharma synthesis & cryo-preservation' },
      { label: 'Food & Beverage', path: '/industries/food-beverage', description: 'Cryogenic freezing, MAP packaging & carbonation' },
      { label: 'Energy & Infrastructure', path: '/industries/energy-infrastructure', description: 'Refinery purging, power plants & pipeline solutions' },
    ]
  },
  {
    label: 'Contact',
    path: '/contact'
  },
];

export const STATS: StatItem[] = [
  { value: '448 TPD', label: 'Total Manufacturing Capacity' },
  { value: '65+', label: 'Cryogenic Road Tankers' },
  { value: '6+', label: 'Refilling Stations' },
  { value: 'Since 1998', label: 'Legacy in Gases' },
];

export const PRODUCTS: Product[] = [
  // -------------------------------
  // LIQUID BULK GASES
  // -------------------------------
  {
    id: 'p1',
    title: 'Liquid Oxygen (LOX)',
    slug: 'liquid-oxygen',
    description: 'High-purity liquid oxygen used across industrial & medical applications.',
    image: 'https://images.unsplash.com/photo-1615486510988-2c6ecc66ceba?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'liquid'
  },
  {
    id: 'p2',
    title: 'Liquid Nitrogen (LIN)',
    slug: 'liquid-nitrogen',
    description: 'Ideal for cooling, shrink-fitting, cryogenic grinding and industrial freezing.',
    image: 'https://plus.unsplash.com/premium_photo-1720616742209-5ca756a58be7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG5pdHJvZ2VuJTIwcHVyZ2luZ3xlbnwwfHwwfHx8MA%3D%3D',
    category: 'liquid'
  },
  {
    id: 'p3',
    title: 'Liquid Argon (LAR)',
    slug: 'liquid-argon',
    description: 'High-purity inert liquid argon widely used for shielding in welding and metallurgy.',
    image: 'https://plus.unsplash.com/premium_photo-1682144582509-e520bf8771d3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXJnb24lMjB3ZWxkaW5nfGVufDB8fDB8fHww',
    category: 'liquid'
  },
  {
    id: 'p4',
    title: 'Liquid Carbon Dioxide (LCO₂)',
    slug: 'liquid-carbon-dioxide',
    description: 'Used for carbonation, food preservation, dry ice manufacturing and environmental applications.',
    image: 'https://plus.unsplash.com/premium_photo-1676979223508-1509a7dc4571?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNhcmJvbmF0aW9ufGVufDB8fDB8fHww',
    category: 'liquid'
  },

  // -------------------------------
  // INDUSTRIAL & FUEL GASES
  // -------------------------------
  {
    id: 'p5',
    title: 'Hydrogen Gas',
    slug: 'hydrogen-gas',
    description: 'Industrial fuel for refineries, metal treatment and chemical manufacturing.',
    image: 'https://images.unsplash.com/photo-1631304480499-b45f5e4aa882?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHlkcm9nZW58ZW58MHx8MHx8fDA%3D',
    category: 'industrial'
  },
  {
    id: 'p6',
    title: 'Dissolved Acetylene (DA)',
    slug: 'dissolved-acetylene',
    description: 'High-temperature flame for cutting, brazing, metal fabrication and workshops.',
    image: 'https://media.istockphoto.com/id/2249079819/photo/copper-pipe-soldering-process-with-tin-by-specialized-technicians.webp?a=1&b=1&s=612x612&w=0&k=20&c=gJ8unfsXi--OY9ii5tzkks8cUt6FpXDL5K6Zl-LsV8s=',
    category: 'industrial'
  },
  {
    id: 'p7',
    title: 'Carbon Dioxide Gas (CO₂)',
    slug: 'carbon-dioxide-gas',
    description: 'Used in MIG welding, fire suppression and controlled industrial atmospheres.',
    image: 'https://plus.unsplash.com/premium_photo-1661490162121-41df314e1ef1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmlyZSUyMHN1cHByZXNzaW9ufGVufDB8fDB8fHww',
    category: 'industrial'
  },
  {
    id: 'p8',
    title: 'Compressed O₂, N₂, Ar Cylinders',
    slug: 'industrial-cylinder',
    description: 'Reliable supply of gaseous high-pressure O₂, N₂, and Ar cylinders and quads.',
    image: 'https://plus.unsplash.com/premium_photo-1756175546649-1846fb6fbcca?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8',
    category: 'industrial'
  },

  // -------------------------------
  // HIGH-PURITY & CALIBRATION GASES
  // -------------------------------
  {
    id: 'p9',
    title: 'High Purity Oxygen (99.9999%)',
    slug: 'high-purity-oxygen',
    description: 'Ultra-high purity oxygen for specialized laboratory and analytical applications.',
    image: 'https://images.unsplash.com/photo-1748261347902-451fb437e8fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFib3JhdG9yeSUyMG94eWdlbnxlbnwwfHwwfHx8MA%3D%3D',
    category: 'high-purity'
  },
  {
    id: 'p10',
    title: 'High Purity Chlorine (99.999%)',
    slug: 'high-purity-chlorine',
    description: 'High-grade chlorine gas for chemical synthesis and industrial purification.',
    image: 'https://images.unsplash.com/photo-1557313773-74c3490a350d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNobG9yaW5lJTIwc3ludGhlc2lzfGVufDB8fDB8fHww',
    category: 'high-purity'
  },
  {
    id: 'p11',
    title: 'Calibration Gas Mixtures',
    slug: 'calibration-gas-mixtures',
    description: 'Accurate gas mixtures for instrument calibration and environmental monitoring.',
    image: 'https://plus.unsplash.com/premium_photo-1661857085334-50e11ccd7629?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2FsaWJyYXRpb24lMjBHYXN8ZW58MHx8MHx8fDA%3D',
    category: 'high-purity'
  },
  {
    id: 'p12',
    title: 'Helium Gas (He)',
    slug: 'helium-gas',
    description: 'High-purity helium for MRI systems, leak detection, cryogenics, and welding.',
    image: 'https://plus.unsplash.com/premium_photo-1663047674926-3e35e511c80e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TVJJfGVufDB8fDB8fHww',
    category: 'high-purity'
  },

  // -------------------------------
  // SPECIALTY & CHEMICAL GASES
  // -------------------------------
  {
    id: 'p13',
    title: 'Carbon Monoxide (CO)',
    slug: 'carbon-monoxide',
    description: 'Specialty-grade used in metal carbonyl production & chemical processing.',
    image: 'https://images.unsplash.com/photo-1727504172743-08f14448fab8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWV0YWwlMjBjYXJib255bCUyMHByb2R1Y3Rpb258ZW58MHx8MHx8fDA%3D',
    category: 'specialty'
  },
  {
    id: 'p14',
    title: 'Nitrous Oxide (N₂O)',
    slug: 'nitrous-oxide',
    description: 'Industrial and medical grade N₂O used in food processing, semiconductors and healthcare.',
    image: 'https://images.unsplash.com/photo-1652211955967-99c892925469?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMHByb2Nlc3Npbmd8ZW58MHx8MHx8fDA%3D',
    category: 'specialty'
  },
  {
    id: 'p15',
    title: 'Sulphur Hexafluoride (SF₆)',
    slug: 'sulphur-hexafluoride',
    description: 'Dielectric gas used in electrical switchgear & high-voltage equipment.',
    image: 'https://images.unsplash.com/photo-1560700105-716e308979fc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWxlY3RyaWNhbCUyMHN3aXRjaGdlYXJ8ZW58MHx8MHx8fDA%3D',
    category: 'specialty'
  },
  {
    id: 'p16',
    title: 'Hydrogen Chloride (HCl)',
    slug: 'hydrogen-chloride',
    description: 'Used in chemical synthesis, plasma etching, and industrial processing.',
    image: 'https://plus.unsplash.com/premium_photo-1675186951036-d87283dac099?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXRjaGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    category: 'specialty'
  },
  {
    id: 'p17',
    title: 'Ethylene Gas',
    slug: 'ethylene-gas',
    description: 'Used in polymer production, agriculture ripening chambers, and chemical processing.',
    image: 'https://images.unsplash.com/photo-1703365508981-cc87f60446cb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWdyaWN1bHR1cmUlMjByaXBlbmluZ3xlbnwwfHwwfHx8MA%3D%3D',
    category: 'specialty'
  },
  {
    id: 'p18',
    title: 'Methane Gas',
    slug: 'methane-gas',
    description: 'Clean-burning gas widely used in energy, laboratories, and calibration mixtures.',
    image: 'https://plus.unsplash.com/premium_photo-1682148795124-dac95dd91fd4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWV0aGFuZXxlbnwwfHwwfHx8MA%3D%3D',
    category: 'specialty'
  },
  {
    id: 'p19',
    title: 'Propane Gas',
    slug: 'propane-gas',
    description: 'Versatile fuel gas for heating, cutting, combustion, and industrial burners.',
    image: 'https://images.unsplash.com/photo-1600885764629-a715b643f024?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UHJvcGFuZSUyMGN1dHRpbmd8ZW58MHx8MHx8fDA%3D',
    category: 'specialty'
  },
  {
    id: 'p20',
    title: 'Sulphur Dioxide (SO₂)',
    slug: 'sulphur-dioxide',
    description: 'Used in food preservation, chemicals, and environmental applications.',
    image: 'https://images.unsplash.com/photo-1551884171-004163219904?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZCUyMHByZXNlcnZhdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    category: 'specialty'
  },
  {
    id: 'p21',
    title: 'Hydrogen Sulfide (H₂S)',
    slug: 'hydrogen-sulfide',
    description: 'Used in analytical labs, chemical research, and calibration standards.',
    image: 'https://images.unsplash.com/photo-1578496479914-7ef3b0193be3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5hbHl0aWNhbCUyMGxhYnN8ZW58MHx8MHx8fDA%3D',
    category: 'specialty'
  },
  {
    id: 'p22',
    title: 'Solid CO₂ Dry Ice & Dewars',
    slug: 'other',
    description: 'Food-grade solid dry ice blocks/pellets, liquid nitrogen dewars, and gas manifolds.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600',
    category: 'other'
  }
];


export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Cryogenic Engineering & Storage',
    description: 'Deep expertise in the design, construction, and management of advanced cryogenic storage facilities for maximum safety and efficiency.',
    icon: Factory
  },
  {
    id: 's2',
    title: 'Unmatched Logistical Reliability',
    description: 'Operating a state-of-the-art fleet of cryogenic tankers to ensure timely and secure delivery of industrial gases across the nation.',
    icon: Truck
  },
  {
    id: 's3',
    title: 'Comprehensive Gas Solutions',
    description: 'From production to distribution, we provide end-to-end solutions for a wide range of industrial gases, tailored to meet client needs.',
    icon: FlaskConical
  }
];

export const GROUP_COMPANIES: GroupCompany[] = [
  {
    name: 'Shakti Industrial Gases',
    description: 'Supplier of Argon, Oxygen, Nitrogen and Carbon-Dioxide in bulk liquid and cylinder formats. Plant located at: Plot No. 628/14, G.I.D.C, Manjusar, Ta. Savli, Dist: Vadodara- 391 350'
  },
  {
    name: 'Indore Carbonic',
    description: 'Manufacturer of Liquid Carbon Dioxide Gas with a total capacity of 270 TPD. Plants located in Ahmedabad, Indore and Hyderabad, with upcoming facility in Hazira.'
  },
  {
    name: 'Shreeji Acetylene Co.',
    description: 'Dedicated Manufacturer of Dissolved Acetylene (DA) Gas. Plant located at: Plot No. 37, G.I.D.C. Alindra, Ta: Savli, Dist: Vadodara.'
  },
  {
    name: 'Moxi Industrial Gases',
    description: 'Supplier of Carbon Dioxide Gas. Plant located at: Survey No.: 431/1/P, Village: Moxi, Ta: Savli, Dist: Vadodara.'
  },
  {
    name: 'Shakti Gases',
    description: 'Leading Hydrogen Gas Refiller supplying Industrial, High Purity (HP) and Ultra High Purity (UHP) Hydrogen in Cylinders, Cylinder Skids and Tube Cascades. Plant Located at: 1002, GIDC Industrial Estate, Ranoli, Dist: Vadodara- 391 350.'
  },
  {
    name: 'Shakti Sales Agency',
    description: 'Specialist in High Purity (HP) and Ultra High Purity (UHP) Gases, Mixture Gases & Calibration Standards. Office situated at: 45, Maruti Complex, Ranoli GIDC, Ranoli, Dist: Vadodara- 391 350.'
  },
  {
    name: 'Shakti Air Products',
    description: 'Supplier of Argon, Nitrogen, Carbon-Dioxide & Oxygen cylinders and packs. Plant located at: Plot No. 2, Shri Hari Industrial Park, Por GIDC, Por - Ramangamdi Road, Por, Vadodara- 391 243.'
  },
  {
    name: 'Bhavani Enterprise',
    description: 'Leading Supplier of Dry Ice (Pellets & Blocks). Office situated at: 45, Maruti Complex, Ranoli GIDC, Ranoli, Dist: Vadodara- 391 350.'
  },
  {
    name: 'Shaktishree Air Private Limited (SAPL)',
    description: 'Cryogenic 178 TPD Air Separation Unit (ASU) producing Liquid Oxygen, Nitrogen and Argon, located in Karjan, Gujarat.'
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: '1998',
    title: 'Legacy in Gas Production Begins',
    description: 'Established in 1998, laying the foundation for excellence in industrial gas manufacturing.'
  },
  {
    year: '2011',
    title: 'Shakti Industrial Gases',
    description: 'Consolidation of operations under the Shakti Group brand to serve a wider market.'
  },
  {
    year: 'Present',
    title: 'Strategic Expansion & Growth',
    description: 'Continuing to expand our footprint with new plants and an enhanced logistics network.'
  }
];

export const INDUSTRIES: Industry[] = [
  { name: 'Pharmaceuticals & Chemicals', icon: FlaskConical },
  { name: 'Nuclear & Power Plants', icon: Atom },
  { name: 'Oil & Gas', icon: Droplet },
  { name: 'Steel Plants & Foundries', icon: Factory },
  { name: 'Food & Beverages', icon: Wind }, // Using wind as a placeholder for preservation/gas
  { name: 'Automotive & Hydrogen Mobility', icon: Truck },
];

export const DELIVERY_OPTIONS: DeliveryOption[] = [
  { title: 'Cryogenic Road Tankers', image: 'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/roadtanker.png' },
  { title: 'ISO Tanks', image: 'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/isotank.png' },
  { title: 'Porta Cryos', image: 'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/portacryo.png' },
  { title: 'Dura Cylinders', image: 'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/dura.png' },
  { title: 'Standard Cylinders', image: 'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/cylinder.png' },
  { title: 'Cylinder Skids', image: 'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/skid.png' },
  { title: 'Tonners', image: 'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/tonner.png' },
  { title: 'Hydrogen Cascades', image: 'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/cascade.png' }
];

export const VALUES: ValueItem[] = [
  {
    title: 'Quality Assurance',
    description: 'Our operations are ISO 9001:2015 certified, guaranteeing the highest standards of purity and safety in all our products.',
    icon: ShieldCheck
  },
  {
    title: 'Unmatched Reliability',
    description: 'With a robust supply chain and 24×7 logistics, we ensure uninterrupted gas supply to keep your operations running smoothly.',
    icon: Truck
  },
  {
    title: 'Customer Satisfaction',
    description: 'We focus on building long-term partnerships by providing personalized solutions and responsive support for your specific needs.',
    icon: Users
  }
];

export const COMMITMENTS: ValueItem[] = [
  {
    title: 'Zero Interruption Guarantee',
    description: 'Redundant systems and a fast, GPS-equipped logistics team ensure your supply is never compromised.',
    icon: ShieldCheck
  },
  {
    title: 'Custom Engineered Solutions',
    description: 'From storage sizing to end-to-end pipeline design, we create solutions tailored to your exact needs.',
    icon: Settings
  },
  {
    title: 'Unmatched Safety & Compliance',
    description: 'Our highly trained teams and strict protocols ensure the highest safety standards in handling hazardous gases.',
    icon: ShieldCheck
  }
];
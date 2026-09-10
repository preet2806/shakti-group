import React, { useState } from 'react';
import { ShieldCheck, ChevronRight, CheckCircle, Settings, Truck, ArrowRight, Wrench, Globe, Layers, PhoneCall } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import SEO from '../components/SEO';

export const SOLUTIONS_SUBPAGES = [
  {
    path: '/solutions/bulk-gas-supply',
    title: 'Bulk Gas Supply & Telemetry Solutions',
    desc: 'On-site cryogenic storage vessel installation, automated tanker refills, and digital tank telemetry.'
  },
  {
    path: '/solutions/cylinder-gas-supply',
    title: 'Cylinder Gas Supply & Manifolds',
    desc: 'Scheduled cylinder route delivery, automatic changeover manifolds, and quad bundle supply.'
  },
  {
    path: '/solutions/cryogenic-engineering',
    title: 'Cryogenic Engineering & Pipelines',
    desc: 'Custom vacuum insulated piping (VIP), ambient vaporizers, pressure regulation, and plant integration.'
  },
  {
    path: '/solutions/cylinder-services',
    title: 'Cylinder Testing & Refurbishment',
    desc: 'PESO approved hydrostatic stretch testing, internal chemical washing, valving, and certification.'
  },
  {
    path: '/solutions/export',
    title: 'International Export & ISO Tanks',
    desc: 'Global export of bulk liquids in ISO containers, cylinder pallets, and tonners with dangerous goods clearance.'
  }
];

const SERVICE_TABS = [
  {
    id: 'engineering',
    label: 'Engineered Solutions',
    title: 'Cryogenic Engineering, Installation & Pipeline Solutions',
    description: 'Our engineering team designs, installs, and maintains cryogenic gas storage systems tailored to your operational requirements, ensuring efficiency, safety, and long-term reliability.',
    points: [
      'Optimized Cryogenic Storage Tank Sizing',
      'Defined Pressure Ratings & Vaporizer Capacity',
      'End-to-End Industrial Gas Pipeline Design',
      'Automated & Flexible Gas Delivery Scheduling'
    ],
    image: 'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/Optimised%20images/Custom%20Cryogenic%20Engineering%20%26%20Pipeline%20Solutions.webp'
  },
  {
    id: 'logistics',
    label: 'Logistical Reliability',
    title: 'Bulk Cryogenic Gas Transportation & Logistics',
    description: 'Our GPS-enabled cryogenic tanker fleet and regional refilling stations ensure reliable bulk gas delivery with zero supply interruptions.',
    points: [
      'GPS-Tracked Cryogenic Road Tankers',
      '24x7 Emergency Gas Delivery',
      'Strategic Regional Refilling Stations',
      'Automated Inventory & Stock Monitoring'
    ],
    image: 'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/service_tanker.png'
  },
  {
    id: 'support',
    label: 'Technical Support',
    title: 'Industrial Gas System Maintenance & Safety Support',
    description: 'We provide specialized services that support the safe installation, operation, and maintenance of industrial gas systems.',
    points: [
      'Nitrogen Purging Services',
      'Routine Maintenance & PESO Compliance Support',
      'Gas System Performance Optimization',
      'Cylinder Hydrostatic Testing'
    ],
    image: 'https://images.unsplash.com/photo-1662309376159-b95fb193d96b?q=80&w=774&auto=format&fit=crop'
  },
  {
    id: 'export',
    label: 'International Supply & Export',
    title: 'Industrial Gas Export & International Supply',
    description: 'Supporting international supply of industrial gases through dedicated infrastructure and multimodal road, rail and sea logistics.',
    points: [
      'Bulk & Cryogenic Gas Exports',
      'Cylinder & Tonner Loads',
      'ISO Tank Shipments',
      'Multimodal Logistics'
    ],
    image: 'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/Industrial%20Gas%20Storage%20%26%20Vaporization%20Equipment.webp'
  }
];

const SAFETY_ITEMS = [
  {
    title: "100% PESO Approved Plants & Assets",
    description: "All cryogenic storage vessels, ASU plants, road tankers, tube cascades, and cylinder filling manifolds are strictly approved and licensed under PESO (CCOE) statutory regulations."
  },
  {
    title: "ISO 9001 / 14001 / 45001 Integrated Systems",
    description: "Certified Quality Management (ISO 9001), Environmental Management (ISO 14001), and Occupational Health & Safety (ISO 45001) covering all manufacturing and distribution workflows."
  },
  {
    title: "FDA Licensed & WHO-GMP Certified",
    description: "Full statutory Drug Manufacturing Licenses and WHO-GMP certifications for Medical Gases including IP Medical Oxygen and pharmaceutical-grade synthesis gases."
  },
  {
    title: "FSSAI Food-Grade & Hydrostatic Testing",
    description: "FSSAI licensed for beverage-grade LCO₂ (E290), food-flushing Nitrogen, and dry ice, supported by an in-house PESO approved 5-year hydrostatic cylinder stretch testing station."
  }
];

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState('engineering');

  const activeContent = SERVICE_TABS.find(tab => tab.id === activeTab) || SERVICE_TABS[0];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Industrial Gas Engineering & Supply Solutions',
    provider: {
      '@type': 'Organization',
      name: 'Shakti Group of Companies'
    },
    serviceType: 'Cryogenic Engineering, Bulk Supply, Cylinder Management',
    areaServed: 'India & Export Markets'
  };

  return (
    <div className="bg-white font-sans text-slate-900">
      {/* SEO Metadata */}
      <SEO
        title="Industrial Gas Engineering & Supply Solutions | Shakti Group"
        description="Comprehensive industrial gas solutions: Bulk cryogenic storage installation, automated tank telemetry, vacuum insulated pipelines, cylinder testing, and international export."
        keywords="Cryogenic Engineering, Bulk Gas Supply Solution, Gas Pipeline Installation, Cylinder Testing PESO, Gas Telemetry System"
        canonicalUrl="https://www.shaktigases.com/services"
        schemaJson={schema}
      />

      {/* Hero - Full Size Image */}
      <div className="relative min-h-[440px] sm:min-h-[500px] flex items-center overflow-hidden bg-slate-950 border-b border-slate-800">
        <img
          src="https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/team.webp"
          alt="Shakti Group Team & Engineering Solutions"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Subtle optical gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-white w-full">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <NavLink to="/" className="hover:text-white transition">Home</NavLink>
              <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
              <span className="text-slate-200">Solutions & Services</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Industrial Gas Engineering <br />
              <span className="text-slate-300 font-medium">& Delivery Solutions</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-normal">
              Turnkey cryogenic storage engineering, high-pressure gas distribution pipelines, automated refilling telemetry, and PESO certified cylinder management.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <NavLink
                to="/contact"
                className="inline-flex items-center justify-center bg-sky-600 hover:bg-sky-500 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition duration-150 shadow-sm"
              >
                Consult an Engineer
              </NavLink>
              <NavLink
                to="/solutions/bulk-gas-supply"
                className="inline-flex items-center justify-center bg-slate-900/70 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold px-5 py-2.5 rounded-lg text-sm transition duration-150 backdrop-blur-sm"
              >
                Bulk Gas Supply
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Direct Subpages Directory Grid */}
      <section className="py-10 sm:py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-7">
            <span className="text-sky-700 font-bold uppercase tracking-widest text-xs block mb-1">
              Solutions Directory
            </span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Explore Targeted Solution Offerings
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SOLUTIONS_SUBPAGES.map((sol) => (
              <NavLink
                key={sol.path}
                to={sol.path}
                className="group bg-white p-5 sm:p-6 rounded-lg border border-slate-200 hover:border-slate-300 hover:shadow-xs transition flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-sky-700 transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {sol.desc}
                  </p>
                </div>

                <div className="flex items-center text-xs font-bold text-sky-700 pt-2.5 border-t border-slate-100 group-hover:translate-x-1 transition-transform">
                  <span>View Details</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* Tabbed Interactive Service Breakdown */}
      <section className="py-10 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-7">
          <span className="text-sky-700 font-bold uppercase tracking-widest text-xs block mb-1">
            Service Capabilities
          </span>
          <h2 className="text-xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            End-to-End Infrastructure & Distribution
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center bg-slate-100 p-1 rounded-lg max-w-3xl mx-auto mb-8 gap-1 border border-slate-200">
          {SERVICE_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition ${
                activeTab === tab.id
                  ? 'bg-white text-sky-700 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center bg-white border border-slate-200 p-5 sm:p-8 rounded-xl shadow-xs">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">{activeContent.title}</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">{activeContent.description}</p>

            <ul className="space-y-2.5 mb-6">
              {activeContent.points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-bold px-5 py-2.5 rounded-lg text-xs uppercase tracking-wider transition shadow-sm"
            >
              <span>Discuss Engineering Requirements</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </NavLink>
          </div>

          <div className="rounded-lg overflow-hidden border border-slate-200 h-[260px] sm:h-[320px] bg-slate-100">
            <img
              src={activeContent.image}
              alt={activeContent.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-10 sm:py-12 bg-slate-950 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-sky-400 font-bold uppercase tracking-widest text-xs block mb-1">
              Safety First
            </span>
            <h2 className="text-xl sm:text-3xl font-bold text-white tracking-tight">
              PESO Compliance & Quality Assurance
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SAFETY_ITEMS.map((item, index) => (
              <div key={index} className="bg-slate-900 p-5 rounded-lg border border-slate-800 space-y-2.5">
                <div className="h-8 w-8 rounded bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center font-bold">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <h3 className="font-bold text-white text-sm">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Cross Backlinks Footer */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-400">
            <div className="flex flex-wrap items-center gap-3">
              <span>Related Operations:</span>
              <NavLink to="/company/infrastructure" className="hover:text-white underline">Cryogenic Fleet</NavLink>
              <span>•</span>
              <NavLink to="/company/quality-safety" className="hover:text-white underline">Quality & PESO</NavLink>
              <span>•</span>
              <NavLink to="/products" className="hover:text-white underline">Gas Catalog</NavLink>
              <span>•</span>
              <NavLink to="/industries" className="hover:text-white underline">Sectors Served</NavLink>
            </div>

            <NavLink to="/contact" className="text-sky-400 font-bold hover:underline">
              Submit RFP / Tender Documents →
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

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
    <div className="bg-white">
      {/* SEO Metadata */}
      <SEO
        title="Industrial Gas Engineering & Supply Solutions | Shakti Group"
        description="Comprehensive industrial gas solutions: Bulk cryogenic storage installation, automated tank telemetry, vacuum insulated pipelines, cylinder testing, and international export."
        keywords="Cryogenic Engineering, Bulk Gas Supply Solution, Gas Pipeline Installation, Cylinder Testing PESO, Gas Telemetry System"
        canonicalUrl="https://www.shaktigases.com/services"
        schemaJson={schema}
      />

      {/* Hero */}
      <div className="relative bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <img
          src="https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/team.webp"
          alt="Shakti Group Team & Engineering Solutions"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-gray-900/85 to-gray-950/80" />
        <div className="relative max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-4">
            <NavLink to="/" className="hover:text-white transition">Home</NavLink>
            <ChevronRight className="h-3.5 w-3.5 text-gray-500" />
            <span className="text-white">Solutions & Services</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 max-w-3xl leading-tight">
            Industrial Gas Engineering & Delivery Solutions
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
            Turnkey cryogenic storage engineering, high-pressure gas distribution pipelines, automated refilling telemetry, and PESO certified cylinder management.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <NavLink
              to="/contact"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold uppercase tracking-wider px-6 py-3 rounded-xl text-sm transition shadow-lg shadow-blue-500/25"
            >
              Consult an Engineer
            </NavLink>
          </div>
        </div>
      </div>

      {/* Direct Subpages Directory Grid */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs block mb-1">
              Solutions Directory
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Explore Targeted Solution Offerings
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SOLUTIONS_SUBPAGES.map((sol) => (
              <NavLink
                key={sol.path}
                to={sol.path}
                className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {sol.desc}
                  </p>
                </div>

                <div className="flex items-center text-sm font-bold text-blue-600 pt-4 border-t border-gray-100 group-hover:translate-x-1 transition-transform">
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* Tabbed Interactive Service Breakdown */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs block mb-1">
            Service Capabilities
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900">
            End-to-End Infrastructure & Distribution
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center bg-gray-100 p-1.5 rounded-2xl max-w-3xl mx-auto mb-12 gap-1">
          {SERVICE_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition ${
                activeTab === tab.id
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white border border-gray-100 p-8 sm:p-12 rounded-3xl shadow-lg">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{activeContent.title}</h3>
            <p className="text-gray-600 text-base leading-relaxed mb-8">{activeContent.description}</p>

            <ul className="space-y-4 mb-8">
              {activeContent.points.map((pt, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <NavLink
              to="/contact"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-xl text-sm transition shadow-lg shadow-blue-500/20"
            >
              <span>Discuss Engineering Requirements</span>
              <ArrowRight className="h-4 w-4" />
            </NavLink>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md h-[380px]">
            <img
              src={activeContent.image}
              alt={activeContent.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-blue-400 font-bold uppercase tracking-widest text-xs block mb-1">
              Safety First
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              PESO Compliance & Quality Assurance
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SAFETY_ITEMS.map((item, index) => (
              <div key={index} className="bg-gray-800/80 p-8 rounded-2xl border border-gray-700">
                <div className="h-10 w-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold mb-6">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-white text-lg mb-3">{item.title}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Cross Backlinks Footer */}
          <div className="mt-16 pt-8 border-t border-gray-800 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-gray-400">
            <div className="flex flex-wrap items-center gap-3">
              <span>Related Operations:</span>
              <NavLink to="/company/infrastructure" className="hover:text-blue-400 underline">Cryogenic Fleet</NavLink>
              <span>•</span>
              <NavLink to="/company/quality-safety" className="hover:text-blue-400 underline">Quality & PESO</NavLink>
              <span>•</span>
              <NavLink to="/products" className="hover:text-blue-400 underline">Gas Catalog</NavLink>
              <span>•</span>
              <NavLink to="/industries" className="hover:text-blue-400 underline">Sectors Served</NavLink>
            </div>

            <NavLink to="/contact" className="text-blue-400 font-bold hover:underline">
              Submit RFP / Tender Documents →
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

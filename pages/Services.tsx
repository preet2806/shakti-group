import React, { useState } from 'react';
import { ShieldCheck, ChevronDown, CheckCircle, Settings, Truck } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const SERVICE_TABS = [
  {
    id: 'engineering',
    label: 'Engineered Solutions',
    title: 'Custom Cryogenic Engineering & Pipeline Solutions',
    description: 'Our engineering team designs, installs, and maintains cryogenic gas systems tailored to your operational requirements, ensuring efficiency, safety, and long-term reliability.',
    points: [
      'Optimized Cryogenic Storage Tank Sizing',
      'Defined Pressure Ratings & Vaporizer Capacity',
      'End-to-End Industrial Gas Pipeline Design',
      'Automated & Flexible Gas Delivery Scheduling'
    ],
    image: 'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/service_pipe.jpg'
  },
  {
    id: 'equipment',
    label: 'Equipment & Supply',
    title: 'Industrial Gas Storage & Vaporization Equipment',
    description: 'We supply high-performance cryogenic storage tanks, vaporizers, and gas handling equipment, supported by uninterrupted industrial gas supply.',
    points: [
      'Vertical & Horizontal Cryogenic Storage Tanks',
      'Ambient & Steam Heated Vaporizers',
      'High-Pressure Gas Cylinder Manifolds',
      'Precision Gas Regulation Panels'
    ],
    image: 'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/service_tank.avif'
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
    description: 'We provide ongoing technical support, safety audits, and system optimization to ensure compliant and efficient gas operations.',
    points: [
      'On-Site Industrial Gas Safety Training',
      'Routine Maintenance & PESO Compliance Audits',
      'Gas System Performance Optimization',
      'Expert Technical Troubleshooting'
    ],
    image: 'https://images.unsplash.com/photo-1662309376159-b95fb193d96b?q=80&w=774&auto=format&fit=crop'
  }
];

const SAFETY_ITEMS = [
  {
    title: "Certified Gas Handling & Safety Training",
    description: "Our personnel are rigorously trained in industrial gas handling, storage, and transportation with regular safety drills and refresher programs."
  },
  {
    title: "Emergency Response & Risk Mitigation",
    description: "Well-defined emergency response procedures including leak control, spill containment, and first-response actions to minimize operational risk."
  },
  {
    title: "PESO (CCOE) Licensed & Periodically Audited",
    description: "All equipment and operations are routinely inspected and licensed under PESO regulations, ensuring statutory compliance and safe operations."
  }
];

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState('engineering');

  const activeContent = SERVICE_TABS.find(tab => tab.id === activeTab) || SERVICE_TABS[0];

  return (
    <div className="bg-white">
      {/* React 19 SEO Hoisting */}
      <title>Industrial Gas Services & Cryogenic Engineering | Shakti Group India</title>
      <meta
        name="description"
        content="Shakti Group offers cryogenic engineering, industrial gas logistics, PESO-compliant storage systems, pipeline design, and 24x7 technical support across India."
      />

      {/* Hero */}
      <div className="relative h-[550px] overflow-hidden">
        <img
          src="https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/service_hero.jpg"
          alt="Cryogenic gas logistics and engineering services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Industrial Gas Engineering & Logistics Services
            </h1>
            <p className="text-xl text-gray-100 mb-10 max-w-2xl mx-auto">
              Engineered cryogenic solutions, reliable gas logistics, and uncompromising safety standards.
            </p>
            <NavLink
              to="/contact"
              className="bg-shakti-blue hover:bg-blue-600 text-white px-10 py-4 rounded-lg font-bold transition shadow-xl shadow-blue-900/30"
            >
              Speak to an Engineer
            </NavLink>
          </div>
        </div>
      </div>

      {/* Commitments */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Reliable Industrial Gas Services Built for Scale
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Our services are designed to deliver safety, reliability, and performance across critical industrial operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="bg-blue-50 p-4 rounded-xl w-fit mb-6 text-shakti-blue">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Uninterrupted Gas Supply</h3>
              <p className="text-gray-600">
                Redundant systems and real-time logistics ensure continuous industrial gas availability.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="bg-blue-50 p-4 rounded-xl w-fit mb-6 text-shakti-blue">
                <Settings className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Engineered Systems</h3>
              <p className="text-gray-600">
                Bespoke cryogenic storage, vaporization, and pipeline solutions engineered for your plant.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="bg-blue-50 p-4 rounded-xl w-fit mb-6 text-shakti-blue">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Safety & Compliance First</h3>
              <p className="text-gray-600">
                PESO-compliant systems operated by trained professionals with strict safety protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Tabs */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-sm border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-12 text-sm font-semibold text-gray-500 overflow-x-auto no-scrollbar">
            {SERVICE_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-6 whitespace-nowrap transition-all duration-300 border-b-2 ${
                  activeTab === tab.id
                    ? 'text-shakti-blue border-shakti-blue'
                    : 'text-gray-500 border-transparent hover:text-gray-900 hover:border-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Section */}
      <section className="py-24 bg-white min-h-[600px] transition-all duration-500 ease-in-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{activeContent.title}</h2>
              <p className="text-gray-600 mb-10 leading-relaxed text-lg">{activeContent.description}</p>
              <ul className="space-y-6">
                {activeContent.points.map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-shakti-blue flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src={activeContent.image}
                alt={`${activeContent.title} service`}
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industrial Gas Safety & Regulatory Compliance
            </h2>
            <p className="text-gray-600">
              Comprehensive safety systems aligned with national regulatory standards.
            </p>
          </div>

          <div className="space-y-4">
            {SAFETY_ITEMS.map((item, index) => (
              <SafetyAccordion key={index} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-shakti-dark text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">
            Talk to Industrial Gas Engineering Experts
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Discuss your cryogenic, pipeline, and bulk gas supply requirements with Shakti Group.
          </p>
          <NavLink
            to="/contact"
            className="bg-shakti-blue hover:bg-blue-600 text-white px-10 py-4 rounded-lg font-bold transition shadow-lg shadow-blue-900/50 inline-block"
          >
            Request a Consultation
          </NavLink>
        </div>
      </section>
    </div>
  );
};

const SafetyAccordion: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50"
      >
        <span className="font-bold text-lg text-gray-900">{title}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`${isOpen ? 'max-h-48' : 'max-h-0'} overflow-hidden transition-all`}>
        <div className="px-8 pb-8 pt-2 text-gray-600 border-t border-gray-100">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Services;

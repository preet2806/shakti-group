import React, { useState } from 'react';
import { ShieldCheck, ChevronDown, CheckCircle, Settings, Truck } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const SERVICE_TABS = [
  {
    id: 'engineering',
    label: 'Engineered Solutions',
    title: 'Fully Customized, End-to-End Solutions',
    description: 'Our engineering team works as an extension of yours to design, build, and maintain a cryogenic system that perfectly aligns with your operational requirements, ensuring optimal efficiency and cost-effectiveness.',
    points: [
      'Optimized Storage Tank Sizing',
      'Specific Pressure Ratings & Vaporizer Capacity',
      'Complete End-to-End Pipeline Design & Installation',
      'Flexible and Automated Delivery Schedules'
    ],
    image: 'public/images/service_pipe.jpg'
  },
  {
    id: 'equipment',
    label: 'Equipment & Supply',
    title: 'Top-Tier Equipment for Critical Operations',
    description: 'We provide a robust inventory of high-performance cryogenic storage and vaporization equipment, alongside a steady supply of high-purity industrial gases to keep your facility running without interruption.',
    points: [
      'Cryogenic Storage Tanks (Vertical & Horizontal)',
      'Ambient & Steam Heated Vaporizers',
      'High-Pressure Cylinder Manifolds',
      'Advanced Gas Regulation Panels'
    ],
    image: 'public/images/service_tank.jpg'
  },
  {
    id: 'logistics',
    label: 'Logistical Reliability',
    title: 'Unmatched Supply Chain Precision',
    description: 'With a massive fleet of cryogenic tankers and strategic refilling stations, we guarantee ready availability and rapid response times, virtually eliminating supply chain interruptions.',
    points: [
      'GPS-Tracked Cryogenic Tanker Fleet',
      'Round the clock Emergency Delivery Services',
      'Strategic Regional Refilling Networks',
      'Automated Stock Management Integration'
    ],
    image: 'public/images/service_tanker.png'
  },
  {
    id: 'support',
    label: 'Technical Support',
    title: 'Expert Guidance & Maintenance',
    description: 'Our relationship extends beyond supply. We offer comprehensive technical support, safety audits, and maintenance services to ensure your gas systems operate at peak safety and efficiency.',
    points: [
      'On-Site Safety Training',
      'Routine Maintenance & Compliance Audits',
      'Gas System Optimization Consulting',
      'Technical Troubleshooting'
    ],
    image: 'https://images.unsplash.com/photo-1662309376159-b95fb193d96b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

const SAFETY_ITEMS = [
  {
    title: "Expert Team Training & Handling",
    description: "Our team is trained in handling industrial gases safely and efficiently, including proper storage, transportation, and usage procedures. Regular refresher courses and hands-on drills ensure that every team member is up to date with the latest safety practices."
  },
  {
    title: "Emergency Response Protocols",
    description: "We maintain clear and practiced emergency response procedures to quickly address any unexpected situations. Our protocols include spill management, leak containment, and first-response measures to minimize risk to people, property, and the environment."
  },
  {
    title: "Periodic Testing & CCOE (PESO) Licensing",
    description: "All our equipment and operations undergo routine inspections and testing to ensure safe functioning. We are fully licensed under PESO (Chief Controller of Explosives) regulations, and we maintain up-to-date certification to guarantee compliance with statutory safety requirements."
  }
];

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState('engineering');

  const activeContent = SERVICE_TABS.find(tab => tab.id === activeTab) || SERVICE_TABS[0];

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative h-[550px] overflow-hidden">
        <img
          src="public/images/service_hero.jpg"
          alt="Truck on road"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent flex items-center justify-center">
          <div className="text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
              Engineered Reliability, <br/> Your Competitive Edge
            </h1>
            <p className="text-xl text-gray-100 mb-10 max-w-2xl mx-auto drop-shadow-md">
              Shakti Group delivers unmatched logistical reliability and fully customized cryogenic solutions to power your uninterrupted operations.
            </p>
            <NavLink to="/contact" className="bg-shakti-blue hover:bg-blue-600 text-white px-10 py-4 rounded-lg font-bold transition shadow-xl shadow-blue-900/30 transform hover:-translate-y-1">
              Speak to an Engineer
            </NavLink>
          </div>
        </div>
      </div>

      {/* Commitments */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commitment to Your Success</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">We build our services on three core pillars, ensuring your operations run seamlessly, efficiently, and with the highest standards of safety.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition duration-300">
               <div className="bg-blue-50 p-4 rounded-xl w-fit mb-6 text-shakti-blue">
                 <ShieldCheck className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-4">Zero Interruption Guarantee</h3>
               <p className="text-gray-600 leading-relaxed">
                 Redundant systems and a fast, GPS-equipped logistics team ensure your supply is never compromised.
               </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition duration-300">
               <div className="bg-blue-50 p-4 rounded-xl w-fit mb-6 text-shakti-blue">
                 <Settings className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Engineered Solutions</h3>
               <p className="text-gray-600 leading-relaxed">
                 From storage sizing to end-to-end pipeline design, we create solutions tailored to your exact needs.
               </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition duration-300">
               <div className="bg-blue-50 p-4 rounded-xl w-fit mb-6 text-shakti-blue">
                 <Truck className="w-8 h-8" />
               </div>
               <h3 className="text-xl font-bold text-gray-900 mb-4">Unmatched Safety & Compliance</h3>
               <p className="text-gray-600 leading-relaxed">
                 Our highly trained teams and strict protocols ensure the highest safety standards in handling hazardous gases.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings Nav */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-sm border-y border-gray-200 shadow-sm transition-all duration-300">
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
              <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                {activeContent.description}
              </p>

              <ul className="space-y-6">
                {activeContent.points.map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <CheckCircle className="w-6 h-6 text-shakti-blue flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative animate-fade-in-up" key={activeContent.image}>
              <div className="absolute inset-0 bg-blue-600 rounded-2xl transform rotate-3 opacity-10"></div>
              <img
                src={activeContent.image}
                alt={activeContent.title}
                className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-3xl font-bold text-gray-900 mb-4">Safety & Compliance at Our Core</h2>
             <p className="text-gray-600 max-w-2xl mx-auto">
               We adhere to the most stringent safety protocols to protect your people, your assets, and the environment.
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
                  <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Operations?</h2>
                  <p className="text-gray-400 mb-10 text-lg">
            Partner with Shakti Group for unparalleled reliability and custom-engineered cryogenic solutions.
                  </p>
                  <NavLink to="/contact" className="bg-shakti-blue hover:bg-blue-600 text-white px-10 py-4 rounded-lg font-bold transition shadow-lg shadow-blue-900/50 inline-block">
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
        className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition text-left"
      >
        <span className="font-bold text-lg text-gray-900">{title}</span>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-48' : 'max-h-0'}`}>
        <div className="px-8 pb-8 pt-2 text-gray-600 leading-relaxed border-t border-gray-100">
            {description}
        </div>
      </div>
    </div>
  );
};

export default Services;
import React from 'react';
import { GROUP_COMPANIES, SERVICES } from '../constants';
import { ChevronDown, ChevronUp, Factory, Users, TrendingUp, CheckCircle, Truck, ShieldCheck } from 'lucide-react';
import { NavLink, Outlet } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* React 19 SEO Hoisting */}
      <title>
        About Shakti Industrial Gases | Industrial Gas Manufacturer Since 1998
      </title>
      <meta
        name="description"
        content="Founded in 1998, Shakti Industrial Gases is a leading Indian manufacturer specializing in cryogenic engineering, PESO-compliant gas storage, and large-scale industrial gas production and logistics."
      />
      <meta
        name="keywords"
        content="Shakti Industrial Gases, Industrial Gas Manufacturer India, Cryogenic Engineering Company, PESO Certified Gas Manufacturer, Shaktishree Air, Indore Carbonic, Industrial Gas History"
      />

      {/* Hero */}
      <div className="relative h-[450px] overflow-hidden">
        <img
          src="https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/about_hero.jpg"
          alt="Large-scale industrial gas manufacturing facility and refinery operations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
            <div className="max-w-3xl text-left">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Our Legacy in Industrial <br /> Gas Manufacturing Excellence
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Engineering-driven industrial gas manufacturing and logistics, trusted by Indian industry since 1998.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* History Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h4 className="text-shakti-blue font-bold uppercase tracking-wider text-sm mb-3">
                Our History
              </h4>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Building a Legacy of Industrial Gas Manufacturing
              </h2>
              <p className="text-gray-600 mb-12 leading-relaxed text-lg">
                Our journey is rooted in cryogenic engineering excellence, safe gas manufacturing practices, and dependable industrial supply chains.
              </p>

              <div className="relative border-l-2 border-gray-200 ml-3 space-y-12">
                <div className="relative pl-10">
                  <div className="absolute -left-[9px] top-1 bg-white border-2 border-shakti-blue w-4 h-4 rounded-full"></div>
                  <div className="flex flex-col sm:flex-row gap-4 sm:items-center mb-2">
                    <span className="text-shakti-blue font-bold text-xl">1998</span>
                    <h4 className="font-bold text-gray-900 text-lg">
                      Industrial Gas Manufacturing Foundation
                    </h4>
                  </div>
                  <p className="text-gray-600">
                    Establishing the groundwork for safe, reliable industrial gas production.
                  </p>
                </div>

                <div className="relative pl-10">
                  <div className="absolute -left-[9px] top-1 bg-white border-2 border-shakti-blue w-4 h-4 rounded-full"></div>
                  <div className="flex flex-col sm:flex-row gap-4 sm:items-center mb-2">
                    <span className="text-shakti-blue font-bold text-xl">2011</span>
                    <h4 className="font-bold text-gray-900 text-lg">
                      Shakti Industrial Gases Established
                    </h4>
                  </div>
                  <p className="text-gray-600">
                    Expansion into large-scale liquid oxygen, nitrogen, argon, and CO₂ manufacturing.
                  </p>
                </div>

                <div className="relative pl-10">
                  <div className="absolute -left-[9px] top-1 bg-shakti-blue border-2 border-shakti-blue w-4 h-4 rounded-full"></div>
                  <div className="flex flex-col sm:flex-row gap-4 sm:items-center mb-2">
                    <span className="text-shakti-blue font-bold text-xl">Present</span>
                    <h4 className="font-bold text-gray-900 text-lg">
                      Capacity Expansion & National Footprint
                    </h4>
                  </div>
                  <p className="text-gray-600">
                    Scaling ASU capacity, CO₂ plants, and cryogenic logistics to serve pan-India demand.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-full min-h-[400px]">
              <img
                src="https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/about_legacy.png"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
                alt="Historical industrial gas plant showcasing Shakti Group manufacturing legacy"
              />
              <div className="absolute bottom-6 right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                <div className="text-4xl font-bold text-shakti-blue mb-1">25+</div>
                <div className="text-gray-600 font-medium">
                  Years of Industrial Gas Manufacturing
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise Cards */}
      <section className="py-18 bg-gray-50">
        <div className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Core Manufacturing & Engineering Expertise
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Specialized capabilities that define our leadership in industrial gas manufacturing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition duration-300">
              <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center text-shakti-blue mb-6">
                <Factory className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">
                Cryogenic Engineering & Storage Systems
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Design, installation, and operation of PESO-approved cryogenic storage and gas handling systems.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition duration-300">
              <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center text-shakti-blue mb-6">
                <Truck className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">
                Nationwide Cryogenic Logistics
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Dedicated cryogenic tanker fleet ensuring uninterrupted industrial gas supply across India.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition duration-300">
              <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center text-shakti-blue mb-6">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">
                End-to-End Industrial Gas Solutions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Integrated manufacturing, storage, and distribution of oxygen, nitrogen, argon, and carbon dioxide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Banner */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-white border border-blue-100 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-10">
            <div className="bg-shakti-blue rounded-full p-6 shrink-0 shadow-lg shadow-blue-200">
              <ShieldCheck className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                PESO-Compliant & Safety-First Manufacturing
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                All manufacturing plants, refilling units, tankers, and refilling stations operate under strict PESO regulations with ISO-certified safety and quality systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Group Companies */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Shakti Group of Industrial Gas Companies
          </h2>
          <p className="text-gray-500 text-center mb-12">
            A synergy of specialized entities driving comprehensive industrial gas solutions.
          </p>

          <div className="space-y-4">
            {GROUP_COMPANIES.map((company, index) => (
              <CompanyAccordion key={index} company={company} isOpenDefault={index === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-gray-50 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Partner with a Trusted Industrial Gas Manufacturer
          </h2>
          <p className="text-gray-600 mb-8">
            Engage with a manufacturing partner known for engineering depth, operational reliability, and uncompromising safety standards.
          </p>
          <NavLink
            to="/contact"
            className="bg-shakti-blue hover:bg-blue-600 text-white px-10 py-4 rounded-lg font-bold transition shadow-lg shadow-blue-900/50 inline-block"
          >
            Contact Our Experts
          </NavLink>
        </div>
      </section>
    </div>
  );
};

const CompanyAccordion: React.FC<{ company: any; isOpenDefault: boolean }> = ({ company, isOpenDefault }) => {
  const [isOpen, setIsOpen] = React.useState(isOpenDefault);

  return (
    <div className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-100 transition text-left"
      >
        <span className="font-semibold text-gray-900">{company.name}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-100 mt-2 bg-white p-4">
          <div className="pt-2">
            {company.description}
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
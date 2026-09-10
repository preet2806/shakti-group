import React from 'react';
import { GROUP_COMPANIES, SERVICES } from '../constants';
import { ChevronDown, ChevronUp, Factory, Users, TrendingUp, CheckCircle, Truck, ShieldCheck, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import SEO from '../components/SEO';

const About: React.FC = () => {
  return (
    <div className="bg-white font-sans text-slate-900">
      <SEO
        title="About Shakti Industrial Gases | Industrial Gas Manufacturing Group"
        description="Shakti Industrial Gases is an Indian industrial gas manufacturing group operating cryogenic ASUs, CO₂ plants, bulk storage, and tanker logistics since 1998."
        keywords="Shakti Industrial Gases, Industrial Gas Manufacturer India, Cryogenic Engineering Company, PESO Certified Gas Manufacturer, Shaktishree Air, Indore Carbonic"
        canonicalUrl="https://www.shaktigases.com/company/about"
      />

      {/* Hero - Full Size Video */}
      <div className="relative min-h-[440px] sm:min-h-[500px] flex items-center overflow-hidden bg-slate-950 border-b border-slate-800">
        <video
          className="absolute inset-0 w-full h-full object-cover scale-105"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/DJI_0184-small.webm" type="video/webm" />
          <source src="https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/DJI_0184-small.mp4" type="video/mp4" />
        </video>

        {/* Subtle optical gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-white w-full">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <NavLink to="/" className="hover:text-white transition">Home</NavLink>
              <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
              <NavLink to="/company" className="hover:text-white transition">Company</NavLink>
              <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
              <span className="text-slate-200">About Shakti</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
              Built on Engineering <br />
              <span className="text-slate-300 font-medium">& Operational Excellence</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-xl">
              Operating cryogenic gas plants, bulk storage hubs, and dedicated transport logistics to support continuous industrial operations since 1998.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <NavLink
                to="/company/infrastructure"
                className="inline-flex items-center justify-center bg-sky-600 hover:bg-sky-500 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition duration-150 shadow-sm"
              >
                Our Infrastructure
              </NavLink>
              <NavLink
                to="/company/our-group"
                className="inline-flex items-center justify-center bg-slate-900/70 hover:bg-slate-800 text-white border border-slate-700 font-semibold px-5 py-2.5 rounded-lg text-sm transition duration-150 backdrop-blur-sm"
              >
                Group Companies
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* History Timeline */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-sky-700 font-bold uppercase tracking-widest text-xs block mb-1">
                Operating History
              </span>
              <h2 className="text-xl sm:text-3xl font-bold text-slate-900 mb-3 tracking-tight">
                From Local Supply to Industrial-Scale Manufacturing
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Our growth has been driven by cryogenic engineering excellence, capacity expansion, safety compliance, and long-term industrial supply relationships.
              </p>

              <div className="relative border-l border-slate-200 ml-2 space-y-6">
                <div className="relative pl-6">
                  <div className="absolute -left-[5px] top-1.5 bg-white border-2 border-sky-600 w-2.5 h-2.5 rounded-full"></div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sky-700 font-mono font-bold text-sm">1998</span>
                    <h4 className="font-bold text-slate-900 text-sm">
                      Entry into Industrial Gas Sector
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Initiated industrial gas operations with a focus on safe handling, cylinder supply, and customer-specific delivery requirements.
                  </p>
                </div>

                <div className="relative pl-6">
                  <div className="absolute -left-[5px] top-1.5 bg-white border-2 border-sky-600 w-2.5 h-2.5 rounded-full"></div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sky-700 font-mono font-bold text-sm">2011</span>
                    <h4 className="font-bold text-slate-900 text-sm">
                      Shakti Industrial Gases Established
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Expanded into liquid oxygen, nitrogen, argon, and CO₂ manufacturing with cryogenic storage and tanker dispatch capability.
                  </p>
                </div>

                <div className="relative pl-6">
                  <div className="absolute -left-[5px] top-1.5 bg-sky-600 border-2 border-sky-600 w-2.5 h-2.5 rounded-full"></div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sky-700 font-mono font-bold text-sm">Present</span>
                    <h4 className="font-bold text-slate-900 text-sm">
                      Capacity Expansion & Multi-Plant Operations
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Operating and developing multiple ASU and CO₂ plants with regional redundancy and pan-India logistics coverage.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-lg overflow-hidden border border-slate-200 bg-slate-100 shadow-xs h-[280px] sm:h-[340px]">
                <img
                  src="https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/Optimised%20images/Industrial%20gas%20cylinders.webp"
                  className="w-full h-full object-cover"
                  alt="Industrial gas cylinders"
                />
              </div>
              <div className="absolute bottom-3 right-3 bg-slate-950/90 text-white p-3 sm:p-4 rounded-lg border border-slate-700 max-w-[190px] shadow-md">
                <div className="text-xl sm:text-2xl font-extrabold text-sky-400 font-mono">25+</div>
                <div className="text-xs text-slate-300 font-medium leading-tight mt-0.5">
                  Years of Industrial Gas Operations
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Expertise Cards */}
      <section className="py-10 sm:py-12 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 max-w-2xl mx-auto">
            <span className="text-sky-700 font-bold uppercase tracking-widest text-xs block mb-1">
              Core Strengths
            </span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Manufacturing Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Core operational functions that support safe, continuous industrial gas supply.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white p-5 sm:p-6 rounded-lg border border-slate-200 shadow-xs space-y-2">
              <div className="w-9 h-9 rounded bg-sky-50 text-sky-700 border border-sky-200 flex items-center justify-center">
                <Factory className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-slate-900">
                Cryogenic Plant & Storage Operations
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Design, installation, and operation of PESO-approved cryogenic storage and gas handling systems.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-lg border border-slate-200 shadow-xs space-y-2">
              <div className="w-9 h-9 rounded bg-sky-50 text-sky-700 border border-sky-200 flex items-center justify-center">
                <Truck className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-slate-900">
                Nationwide Cryogenic Logistics
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dedicated cryogenic tanker fleet with trained drivers, GPS tracking, and defined delivery cycles.
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-lg border border-slate-200 shadow-xs space-y-2">
              <div className="w-9 h-9 rounded bg-sky-50 text-sky-700 border border-sky-200 flex items-center justify-center">
                <CheckCircle className="w-4 h-4" />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-slate-900">
                End-to-End Industrial Gas Solutions
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Coordinated production planning, storage allocation, and dispatch for steel, refinery, EPC, manufacturing, and food-processing customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Banner */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 text-white border border-slate-800 rounded-lg p-5 sm:p-8 flex flex-col md:flex-row items-center gap-5">
            <div className="bg-sky-500/10 border border-sky-500/20 text-sky-400 rounded-lg p-3.5 shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 tracking-tight">
                Statutory Approvals & Quality Certifications
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                All manufacturing and refilling plants, cryogenic storage installations, tanker fleets, and filling manifolds are 100% PESO approved and operate under ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 certifications, alongside FDA manufacturing licenses, WHO-GMP medical certification, and FSSAI food-grade licensing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Group Companies */}
      <section className="py-10 sm:py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-7">
            <span className="text-sky-700 font-bold uppercase tracking-widest text-xs block mb-1">
              Group Entities
            </span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Shakti Group of Companies
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Each entity focuses on a defined segment of industrial gas manufacturing and supply.
            </p>
          </div>

          <div className="space-y-2.5">
            {GROUP_COMPANIES.map((company, index) => (
              <CompanyAccordion key={index} company={company} isOpenDefault={index === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-12 bg-white text-center border-t border-slate-200">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 tracking-tight">
            Discuss Industrial Gas Supply Requirements
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-5">
            Connect with our operations team to evaluate capacity, delivery models, and long-term supply arrangements.
          </p>
          <NavLink
            to="/contact"
            className="bg-sky-600 hover:bg-sky-700 text-white px-7 py-3 rounded-lg font-bold uppercase tracking-wider text-xs transition shadow-sm inline-block"
          >
            Contact Operations Team
          </NavLink>
        </div>
      </section>
    </div>
  );
};

const CompanyAccordion: React.FC<{ company: any; isOpenDefault: boolean }> = ({ company, isOpenDefault }) => {
  const [isOpen, setIsOpen] = React.useState(isOpenDefault);

  return (
    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 flex items-center justify-between hover:bg-slate-50 transition text-left"
      >
        <span className="font-bold text-sm text-slate-900">{company.name}</span>
        {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
      </button>
      {isOpen && (
        <div className="px-5 pb-4 pt-1 text-slate-600 text-xs leading-relaxed border-t border-slate-100 bg-slate-50/50">
          <div className="pt-2">
            {company.description}
          </div>
        </div>
      )}
    </div>
  );
};

export default About;

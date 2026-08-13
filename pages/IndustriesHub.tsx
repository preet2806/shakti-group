import React from 'react';
import { NavLink } from 'react-router-dom';
import { Factory, Flame, Droplet, Heart, Utensils, Zap, ArrowRight, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';

export const INDUSTRY_SUBPAGES = [
  {
    path: '/industries/metals-manufacturing',
    title: 'Metals & Manufacturing',
    subtitle: 'Steelmaking, laser cutting, welding shield gas, heat treatment & foundry refining.',
    icon: Flame,
    desc: 'High-purity Oxygen for basic oxygen furnaces, Nitrogen assist gas for fiber laser cutting, and Argon shielding mixtures.'
  },
  {
    path: '/industries/chemicals-process',
    title: 'Chemicals & Process Industries',
    subtitle: 'Nitrogen purging, reactor blanketing, oxidation, and VOC explosion prevention.',
    icon: Factory,
    desc: 'Inert nitrogen atmospheres preventing chemical oxidation, pipeline turnaround purging, and CO₂ effluent neutralization.'
  },
  {
    path: '/industries/life-sciences',
    title: 'Life Sciences & Healthcare',
    subtitle: 'IP grade medical oxygen, pharmaceutical synthesis, and bio-cryo preservation.',
    icon: Heart,
    desc: 'Certified Medical Oxygen (IP) for hospital pipelines, UHP nitrogen for sterile drug packaging, and liquid nitrogen bio-banks.'
  },
  {
    path: '/industries/food-beverage',
    title: 'Food & Beverage',
    subtitle: 'Cryogenic liquid nitrogen freezing, MAP packaging, and beverage carbonation.',
    icon: Utensils,
    desc: 'Food-grade E290 CO₂ for carbonated beverages, fast liquid nitrogen food freezing, and shelf-life extending gas packaging.'
  },
  {
    path: '/industries/energy-infrastructure',
    title: 'Energy & Infrastructure',
    subtitle: 'Oil refinery turnarounds, natural gas pipeline drying, and hydrogen power.',
    icon: Zap,
    desc: 'High-volume nitrogen pumping for pipeline pigging, catalytic cracker purging, and power generation transformer servicing.'
  }
];

export const IndustriesHub: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Industrial Gas Sector Solutions',
    provider: {
      '@type': 'Organization',
      name: 'Shakti Group'
    },
    serviceType: 'Industrial Gas Supply for Industries',
    areaServed: 'India & Global Export Markets'
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Industries Served | Shakti Group Industrial Gases"
        description="Shakti Group provides tailored industrial gas solutions for Metals, Chemical Processing, Healthcare, Food & Beverage, and Energy Infrastructure."
        keywords="Industries Served, Gas for Steelmaking, Medical Oxygen Hospital, Food Grade Nitrogen Freezing, Pipeline Purging Nitrogen, Laser Cutting Gas"
        canonicalUrl="https://www.shaktigases.com/industries"
        schemaJson={schema}
      />

      {/* Hero Banner */}
      <div className="relative bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-gray-900 to-gray-950 opacity-90" />
        <div className="relative max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-4">
            <NavLink to="/" className="hover:text-white transition">Home</NavLink>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">Industries</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Industries We Empower
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
            From high-volume liquid gas supply for steel plants to ultra-pure gases for pharmaceutical synthesis and food-grade CO₂ for soft drinks, Shakti Group powers critical manufacturing sectors.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <NavLink
              to="/contact"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold uppercase tracking-wider px-6 py-3 rounded-xl text-sm transition shadow-lg shadow-blue-500/25"
            >
              Consult an Industry Specialist
            </NavLink>
          </div>
        </div>
      </div>

      {/* Industry Subpage Directory */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-2 block">
            Sector Solutions
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Tailored Gas Delivery & Engineering for Your Industry
          </h2>
          <p className="text-gray-600 mt-3 text-base">
            Select your industry sector below to view specialized gas purities, delivery formats, and application engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRY_SUBPAGES.map((ind) => {
            const Icon = ind.icon;
            return (
              <NavLink
                key={ind.path}
                to={ind.path}
                className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 mb-3">{ind.subtitle}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {ind.desc}
                  </p>
                </div>

                <div className="flex items-center text-sm font-bold text-blue-600 pt-4 border-t border-gray-100 group-hover:translate-x-1 transition-transform">
                  <span>Explore Industry Solutions</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </NavLink>
            );
          })}
        </div>

        {/* Cross-linking section */}
        <div className="mt-16 bg-blue-50/60 rounded-3xl p-8 sm:p-12 border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
              Cross-Functional Services
            </span>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Need Bulk Cryogenic Supply or Piping Installation?
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We design, install, and service on-site cryogenic liquid storage vessels and vacuum insulated pipelines across all manufacturing sectors.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 shrink-0">
            <NavLink
              to="/services"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition shadow-lg shadow-blue-600/25"
            >
              Explore Solutions Overview
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesHub;

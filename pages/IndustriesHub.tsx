import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Factory,
  Flame,
  Droplets,
  Heart,
  Utensils,
  Zap,
  ArrowRight,
  ChevronRight,
  Cpu,
  Sparkles,
  Layers,
  Building2
} from 'lucide-react';
import SEO from '../components/SEO';

export const INDUSTRY_SUBPAGES = [
  {
    path: '/industries/metals-manufacturing',
    title: 'Metals, Steel & Fabrication',
    subtitle: 'Gas for steel mills, BOF/EAF, laser cutting assist gas & welding shields.',
    icon: Flame,
    desc: 'High-purity Liquid Oxygen for blast furnaces, High-Pressure Nitrogen for fiber laser cutting, and Argon for ladle refining & robotic arc welding.'
  },
  {
    path: '/industries/glass-ceramics',
    title: 'Glass & Ceramics Manufacturing',
    subtitle: 'LOX for oxy-fuel glass melting, frit kilns & float glass tin baths.',
    icon: Sparkles,
    desc: 'Bulk Liquid Oxygen (LOX) for oxy-fuel glass melting cutting fuel by 30%, and ultra-pure Nitrogen/Hydrogen atmospheres for float glass tin baths across Morbi & Gujarat.'
  },
  {
    path: '/industries/chemicals-process',
    title: 'Chemicals & Process Plants',
    subtitle: 'Nitrogen reactor blanketing, hydrogen cascades & cryogenic VOC recovery.',
    icon: Factory,
    desc: 'Inert nitrogen atmospheres preventing solvent explosion, 200 Bar mobile hydrogen tube cascades, and liquid nitrogen cooling for low-temp synthesis in Dahej & Ankleshwar.'
  },
  {
    path: '/industries/life-sciences',
    title: 'Life Sciences & Healthcare',
    subtitle: 'IP grade medical oxygen, pharma API synthesis & bio-cryo banking.',
    icon: Heart,
    desc: 'FDA/IP licensed Medical Liquid Oxygen for hospital central pipelines, UHP nitrogen for sterile pharma packaging, and liquid nitrogen for bio-sample preservation.'
  },
  {
    path: '/industries/food-beverage',
    title: 'Food & Beverage Carbonation',
    subtitle: 'FSSAI liquid CO₂ (E290), flash freezing & MAP packaging.',
    icon: Utensils,
    desc: 'Food-grade E290 Liquid CO₂ for soft drink and soda carbonation, rapid Liquid Nitrogen flash freezing, and dry ice pellets for temperature-controlled cold chains.'
  },
  {
    path: '/industries/energy-infrastructure',
    title: 'Energy, Refineries & Power',
    subtitle: 'High-flow refinery nitrogen purging, SF₆ switchgear & hydrogen cooling.',
    icon: Zap,
    desc: 'Mobile cryogenic nitrogen pumpers delivering up to 5,000 Nm³/hr for refinery turnarounds, dielectric SF₆ gas for GIS substations, and hydrogen for turbine cooling.'
  },
  {
    path: '/industries/water-environment',
    title: 'Water Treatment & Environment',
    subtitle: 'LOX for ozone generation, LCO₂ for effluent pH neutralization & chlorine.',
    icon: Droplets,
    desc: 'Bulk Liquid Oxygen feeding ozone generators for refractory COD breakdown, and Liquid CO₂ for safe, non-corrosive wastewater pH balancing without sulfuric acid.'
  },
  {
    path: '/industries/electronics-semiconductor',
    title: 'Electronics & Semiconductors',
    subtitle: 'Grade 6.0 UHP gases, wafer fab, solar PV & CVD diamond synthesis.',
    icon: Cpu,
    desc: 'Ultra-High Purity Grade 5.0 to 6.0 Argon, Nitrogen, Helium, and Methane for semiconductor wafer fabrication and MPCVD lab-grown diamond synthesis in Surat.'
  }
];

export const IndustriesHub: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Industrial Gas Sector Solutions',
    provider: {
      '@type': 'Organization',
      name: 'Shakti Group of Companies',
      url: 'https://www.shaktigases.com',
      logo: 'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/product_hero.png'
    },
    serviceType: 'Industrial Gas Supply for Critical Industries',
    areaServed: 'India & Global Export Markets',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Industry Gas Solutions Catalog',
      itemListElement: INDUSTRY_SUBPAGES.map((ind, i) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: ind.title,
          description: ind.desc,
          url: `https://www.shaktigases.com${ind.path}`
        },
        position: i + 1
      }))
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <SEO
        title="Industrial Gas Solutions by Industry | Steel, Glass, Chemicals, Healthcare | Shakti Group"
        description="Tailored industrial gas solutions for Steelmaking, Glass & Ceramics (LOX), Chemical Processing, Pharmaceuticals, Food Carbonation, Water Treatment, and Energy Infrastructure across India."
        keywords="gas for steel supplier, lox for ceramic glass, industrial gas supplier India, medical oxygen hospital supplier, nitrogen for reactor blanketing, food grade co2 e290, sf6 gas for gis switchgear, semiconductor uhp gases Gujarat"
        canonicalUrl="https://www.shaktigases.com/industries"
        schemaJson={schema}
      />

      {/* Hero Banner */}
      <div className="relative bg-slate-950 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <video
            src="https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/filling.webm"
            className="absolute inset-0 w-full h-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-slate-950 to-slate-900 opacity-80" />
        <div className="relative max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-4">
            <NavLink to="/" className="hover:text-white transition">Home</NavLink>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">Industries</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <span className="bg-blue-900/60 text-blue-300 text-xs font-mono font-semibold px-3 py-1 rounded-md border border-blue-700/60 uppercase tracking-wider">
              Sector Engineering & Supply
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Industrial Gases Engineered for Critical Sectors
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              From high-tonnage Liquid Oxygen for blast furnaces and oxy-fuel glass melting to Grade 6.0 ultra-pure gases for semiconductor cleanrooms and IP-grade hospital oxygen networks, Shakti Group powers India's core manufacturing hubs.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <NavLink
              to="/contact"
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl text-xs transition shadow-lg shadow-blue-600/30"
            >
              Consult an Industry Specialist
            </NavLink>
            <NavLink
              to="/services"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-6 py-3.5 rounded-xl text-xs transition border border-slate-700"
            >
              View On-Site Storage Rental Model
            </NavLink>
          </div>
        </div>
      </div>

      {/* Industry Subpage Directory */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs block">
            Specialized Sector Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tailored Gas Delivery & Process Engineering
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Select your industry sector below to review exact gas purities, on-site storage configurations, delivery fleet options, and application benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRY_SUBPAGES.map((ind) => {
            const Icon = ind.icon;
            return (
              <NavLink
                key={ind.path}
                to={ind.path}
                className="group bg-white p-7 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 mb-3">{ind.subtitle}</p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {ind.desc}
                  </p>
                </div>

                <div className="flex items-center text-xs font-bold text-blue-600 pt-4 border-t border-slate-100 group-hover:translate-x-1 transition-transform uppercase tracking-wider">
                  <span>Explore Industry Solutions</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                </div>
              </NavLink>
            );
          })}
        </div>

        {/* Cross-linking section */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 to-blue-950 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl space-y-2">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block">
              Flexible Rental / Opex Infrastructure
            </span>
            <h3 className="text-2xl font-bold text-white">
              Need Turnkey On-Site Storage Tanks (3 KL to 60 KL)?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We design, install, and commission on-site cryogenic liquid storage vessels with ambient vaporizers on a zero-capex rental model with 24/7 telemetry and automated refill scheduling.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 shrink-0">
            <NavLink
              to="/contact"
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition shadow-lg shadow-blue-600/30"
            >
              Inquire For Storage Setup
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesHub;

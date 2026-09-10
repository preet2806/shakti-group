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
    <div className="bg-white min-h-screen font-sans text-slate-900">
      <SEO
        title="Industrial Gas Solutions by Industry | Steel, Glass, Chemicals, Healthcare | Shakti Group"
        description="Tailored industrial gas solutions for Steelmaking, Glass & Ceramics (LOX), Chemical Processing, Pharmaceuticals, Food Carbonation, Water Treatment, and Energy Infrastructure across India."
        keywords="gas for steel supplier, lox for ceramic glass, industrial gas supplier India, medical oxygen hospital supplier, nitrogen for reactor blanketing, food grade co2 e290, sf6 gas for gis switchgear, semiconductor uhp gases Gujarat"
        canonicalUrl="https://www.shaktigases.com/industries"
        schemaJson={schema}
      />

      {/* Hero Banner - Full Size Video */}
      <div className="relative min-h-[440px] sm:min-h-[500px] flex items-center overflow-hidden bg-slate-950 border-b border-slate-800">
        <video
          src="https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/filling.webm"
          className="absolute inset-0 w-full h-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Subtle optical gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-slate-950/20 sm:to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-white w-full">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <NavLink to="/" className="hover:text-white transition">Home</NavLink>
              <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
              <span className="text-slate-200">Industries</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900/80 border border-slate-700/80 text-sky-400 text-xs font-medium tracking-wide rounded-full backdrop-blur-sm">
              <span>Sector Engineering & Specialized Supply</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Industrial Gases Engineered <br />
              <span className="text-slate-300 font-medium">for Critical Sectors</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-xl">
              From high-tonnage Liquid Oxygen for blast furnaces and oxy-fuel glass melting to Grade 6.0 ultra-pure gases for cleanrooms and hospital oxygen networks.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <NavLink
                to="/contact"
                className="inline-flex items-center justify-center bg-sky-600 hover:bg-sky-500 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition duration-150 shadow-sm"
              >
                Consult an Industry Specialist
              </NavLink>
              <NavLink
                to="/services"
                className="inline-flex items-center justify-center bg-slate-900/70 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold px-5 py-2.5 rounded-lg text-sm transition duration-150 backdrop-blur-sm"
              >
                View Storage & Supply Models
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Subpage Directory */}
      <section className="py-10 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-1.5">
          <span className="text-sky-700 font-bold uppercase tracking-widest text-xs block">
            Specialized Sector Capabilities
          </span>
          <h2 className="text-xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Tailored Gas Delivery & Process Engineering
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Select your industry sector below to review exact gas purities, on-site storage configurations, delivery fleet options, and application benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {INDUSTRY_SUBPAGES.map((ind) => {
            const Icon = ind.icon;
            return (
              <NavLink
                key={ind.path}
                to={ind.path}
                className="group bg-white p-5 sm:p-6 rounded-lg border border-slate-200 hover:border-slate-300 hover:shadow-xs transition flex flex-col justify-between"
              >
                <div>
                  <div className="h-9 w-9 rounded bg-sky-50 text-sky-700 border border-sky-200 flex items-center justify-center font-bold mb-3 group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600 transition duration-200">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-0.5 group-hover:text-sky-700 transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-xs font-semibold text-sky-700 mb-1.5">{ind.subtitle}</p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {ind.desc}
                  </p>
                </div>

                <div className="flex items-center text-xs font-bold text-sky-700 pt-2.5 border-t border-slate-100 group-hover:translate-x-1 transition-transform uppercase tracking-wider">
                  <span>Explore Industry Solutions</span>
                  <ArrowRight className="h-3 w-3 ml-1.5" />
                </div>
              </NavLink>
            );
          })}
        </div>

        {/* Cross-linking section */}
        <div className="mt-10 bg-slate-950 text-white rounded-lg p-5 sm:p-8 border border-slate-800 shadow-xs flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="max-w-xl space-y-1.5">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block">
              Flexible Rental / Opex Infrastructure
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Need Turnkey On-Site Storage Tanks (3 KL to 60 KL)?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We design, install, and commission on-site cryogenic liquid storage vessels with ambient vaporizers on a zero-capex rental model with 24/7 telemetry and automated refill scheduling.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <NavLink
              to="/contact"
              className="bg-sky-600 hover:bg-sky-700 text-white font-bold px-5 py-2.5 rounded-lg text-xs uppercase tracking-wider transition shadow-sm"
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

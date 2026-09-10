import React from 'react';
import { NavLink } from 'react-router-dom';
import { Factory, ShieldCheck, Truck, Users, Award, ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

export const COMPANY_SUBPAGES = [
  {
    path: '/company/about',
    title: 'About Shakti Group',
    subtitle: 'Our 25+ year legacy, leadership, and vision as a premier industrial gas manufacturer.',
    icon: Factory,
    desc: 'Founded in 1998, Shakti Group operates Air Separation Units (ASU), CO₂ recovery plants, and regional gas compression hubs across India.'
  },
  {
    path: '/company/our-group',
    title: 'Group Entities & Operational Divisions',
    subtitle: 'Unified operations across 9 specialized companies, ASUs, CO₂ plants, and refilling hubs.',
    icon: Users,
    desc: 'Comprehensive overview of Shakti Industrial Gases, SAPL, Indore Carbonic, Shakti Gases, Shreeji Acetylene, Moxi Gases, Shakti Air Products, Shakti Sales Agency, and Bhavani Enterprise.'
  },
  {
    path: '/company/infrastructure',
    title: 'Cryogenic Infrastructure & Tanker Logistics',
    subtitle: 'Fleet of 65+ vacuum-insulated cryogenic tankers with real-time GPS & telemetry.',
    icon: Truck,
    desc: 'Western India’s largest specialized distribution fleet, paired with on-site customer storage vessels and ambient vaporizers.'
  },
  {
    path: '/company/quality-safety',
    title: 'Quality Standards & PESO Compliance',
    subtitle: 'ISO 9001:2015 certified operations with total PESO regulatory compliance.',
    icon: ShieldCheck,
    desc: 'In-house gas chromatography quality control, hydrostatic cylinder testing, and zero-compromise environmental safety protocols.'
  }
];

export const CompanyHub: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Shakti Group of Companies',
    url: 'https://www.shaktigases.com/company',
    logo: 'https://www.shaktigases.com/logo.png',
    description: 'Leading manufacturer of industrial gases, cryogenic liquid gases, and PESO certified engineering solutions since 1998.',
    founder: 'Shakti Group Management',
    foundingDate: '1998',
    subOrganization: [
      { '@type': 'Organization', name: 'Shakti Industrial Gases' },
      { '@type': 'Organization', name: 'Shaktishree Air Products' },
      { '@type': 'Organization', name: 'Indore Carbonic' }
    ]
  };

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      <SEO
        title="Company Overview | Shakti Group of Companies"
        description="Learn about Shakti Group, operating cryogenic Air Separation Units, CO2 plants, 65+ tanker fleet, and PESO certified cylinder hubs in India since 1998."
        keywords="Shakti Group Company, Shakti Industrial Gases, Manufacturing Network, Cryogenic Infrastructure, PESO Certified Gas Manufacturer"
        canonicalUrl="https://www.shaktigases.com/company"
        schemaJson={schema}
      />

      {/* Hero Banner - Full Size Image */}
      {/* Hero - Full Size Image */}
      <div className="relative min-h-[440px] sm:min-h-[500px] flex items-center overflow-hidden bg-slate-950 border-b border-slate-800">
        <img
          src="https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/team.webp"
          alt="Shakti Group Team & Leadership"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Subtle optical gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-white w-full">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <NavLink to="/" className="hover:text-white transition">Home</NavLink>
              <ChevronRight className="h-3.5 w-3.5 text-slate-500" />
              <span className="text-slate-200">Company</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Shakti Group <br />
              <span className="text-slate-300 font-medium">of Companies</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-normal">
              A pioneer in cryogenic gas manufacturing, bulk liquid transportation, and turnkey industrial gas engineering since 1998. Explore our group structure, production network, and quality standards.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <NavLink
                to="/contact"
                className="inline-flex items-center justify-center bg-sky-600 hover:bg-sky-500 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition duration-150 shadow-sm"
              >
                Request Corporate Profile
              </NavLink>
              <NavLink
                to="/company/infrastructure"
                className="inline-flex items-center justify-center bg-slate-900/70 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold px-5 py-2.5 rounded-lg text-sm transition duration-150 backdrop-blur-sm"
              >
                Explore Infrastructure
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Directory Grid of Company Subpages */}
      <section className="py-10 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-1.5">
          <span className="text-sky-700 font-bold uppercase tracking-widest text-xs block">
            Company Navigation & Divisions
          </span>
          <h2 className="text-xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Explore Our Corporate Structure & Operations
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Click on any section below to learn more about our group history, manufacturing footprint, tanker fleet, and safety accreditations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {COMPANY_SUBPAGES.map((sub) => {
            const Icon = sub.icon;
            return (
              <NavLink
                key={sub.path}
                to={sub.path}
                className="group bg-white p-5 sm:p-6 rounded-lg border border-slate-200 hover:border-slate-300 hover:shadow-xs transition flex flex-col justify-between"
              >
                <div>
                  <div className="h-9 w-9 rounded bg-sky-50 text-sky-700 border border-sky-200 flex items-center justify-center font-bold mb-3 group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600 transition duration-200">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-0.5 group-hover:text-sky-700 transition-colors">
                    {sub.title}
                  </h3>
                  <p className="text-xs font-semibold text-sky-700 mb-1.5">{sub.subtitle}</p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {sub.desc}
                  </p>
                </div>

                <div className="flex items-center text-xs font-bold text-sky-700 pt-2.5 border-t border-slate-100 group-hover:translate-x-1 transition-transform">
                  <span>View Details</span>
                  <ArrowRight className="h-3 w-3 ml-1.5" />
                </div>
              </NavLink>
            );
          })}
        </div>

        {/* Cross-linking to Products and Solutions */}
        <div className="mt-10 bg-slate-50 rounded-lg p-5 sm:p-8 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="max-w-xl">
            <span className="text-xs font-bold text-sky-700 uppercase tracking-widest block mb-1">
              Next Steps & Catalogs
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
              Looking for Liquid Gases or Engineering Solutions?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Explore our full catalog of bulk liquid gases, compressed cylinder mixtures, or consult our cryogenic engineering specialists.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <NavLink
              to="/products"
              className="bg-white text-slate-900 border border-slate-300 hover:border-slate-400 font-bold px-4 py-2.5 rounded-lg text-xs uppercase tracking-wider transition"
            >
              Browse Products Catalog
            </NavLink>
            <NavLink
              to="/services"
              className="bg-sky-600 hover:bg-sky-700 text-white font-bold px-4 py-2.5 rounded-lg text-xs uppercase tracking-wider transition shadow-sm"
            >
              Explore Gas Solutions
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyHub;

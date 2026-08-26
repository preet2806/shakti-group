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
    <div className="bg-white min-h-screen">
      <SEO
        title="Company Overview | Shakti Group of Companies"
        description="Learn about Shakti Group, operating cryogenic Air Separation Units, CO2 plants, 65+ tanker fleet, and PESO certified cylinder hubs in India since 1998."
        keywords="Shakti Group Company, Shakti Industrial Gases, Manufacturing Network, Cryogenic Infrastructure, PESO Certified Gas Manufacturer"
        canonicalUrl="https://www.shaktigases.com/company"
        schemaJson={schema}
      />

      {/* Hero Banner */}
      <div className="relative bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <img
          src="https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/team.webp"
          alt="Shakti Group Team & Leadership"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/45 via-gray-900/25 to-gray-950/0" />
        <div className="relative max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-4">
            <NavLink to="/" className="hover:text-white transition">Home</NavLink>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">Company</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Shakti Group of Companies
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
            A pioneer in cryogenic gas manufacturing, bulk liquid transportation, and turnkey industrial gas engineering since 1998. Explore our group structure, production network, and quality standards.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <NavLink
              to="/contact"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold uppercase tracking-wider px-6 py-3 rounded-xl text-sm transition shadow-lg shadow-blue-500/25"
            >
              Request Corporate Profile
            </NavLink>
          </div>
        </div>
      </div>

      {/* Directory Grid of Company Subpages */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-2 block">
            Company Navigation & Divisions
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Explore Our Corporate Structure & Operations
          </h2>
          <p className="text-gray-600 mt-3 text-base">
            Click on any section below to learn more about our group history, manufacturing footprint, tanker fleet, and safety accreditations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COMPANY_SUBPAGES.map((sub, idx) => {
            const Icon = sub.icon;
            return (
              <NavLink
                key={sub.path}
                to={sub.path}
                className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {sub.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-600 mb-3">{sub.subtitle}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {sub.desc}
                  </p>
                </div>

                <div className="flex items-center text-sm font-bold text-blue-600 pt-4 border-t border-gray-100 group-hover:translate-x-1 transition-transform">
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </NavLink>
            );
          })}
        </div>

        {/* Cross-linking to Products and Solutions */}
        <div className="mt-16 bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">
              Next Steps & Catalogs
            </span>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Looking for Liquid Gases or Engineering Solutions?
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Explore our full catalog of bulk liquid gases, compressed cylinder mixtures, or consult our cryogenic engineering specialists.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 shrink-0">
            <NavLink
              to="/products"
              className="bg-white text-gray-900 border border-gray-200 hover:border-blue-500 hover:text-blue-600 font-bold px-5 py-3 rounded-xl text-sm transition"
            >
              Browse Products Catalog
            </NavLink>
            <NavLink
              to="/services"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-5 py-3 rounded-xl text-sm transition shadow-md shadow-blue-500/20"
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

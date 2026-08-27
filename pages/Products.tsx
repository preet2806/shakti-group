import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PRODUCTS, DELIVERY_OPTIONS } from '../constants';
import { ArrowRight, ChevronRight, Boxes, Factory, ShieldCheck, Truck, FlaskConical, Atom, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';

type Category = "liquid" | "industrial" | "high-purity" | "specialty";

export const PRODUCT_SUBPAGES = [
  {
    path: '/products/bulk-cryogenic',
    title: 'Bulk & Cryogenic Liquid Gases',
    badge: 'LOX / LIN / LAR / LCO₂',
    desc: 'High-purity liquid oxygen, nitrogen, argon, and CO₂ delivered via 65+ specialized cryogenic road tankers.'
  },
  {
    path: '/products/industrial-cylinder',
    title: 'Industrial & Cylinder Gases',
    badge: 'Cylinders & MCP Quads',
    desc: 'High-pressure cylinders, Dissolved Acetylene (DA), hydrogen cascades, and multi-cylinder quads (MCPs).'
  },
  {
    path: '/products/specialty-calibration',
    title: 'Specialty & Calibration Gases',
    badge: 'Grade 5.0 - 6.0 UHP',
    desc: 'Grade 5.0 & 6.0 UHP gases, laser cutting mixtures, and NIST/NABL traceable calibration standards.'
  },
  {
    path: '/products/other',
    title: 'Dry Ice, Dewars & Hardware',
    badge: 'Solid CO₂ & Equipment',
    desc: 'Food-grade solid CO₂ dry ice pellets/blocks, liquid nitrogen dewars, pressure regulators, and manifold panels.'
  }
];

export const POPULAR_INDIVIDUAL_PRODUCTS = [
  { title: 'Liquid Oxygen (LOX)', slug: 'liquid-oxygen', formula: 'O₂', category: 'Bulk Cryogenic', temp: '-183°C' },
  { title: 'Liquid Nitrogen (LIN)', slug: 'liquid-nitrogen', formula: 'N₂', category: 'Bulk Cryogenic', temp: '-196°C' },
  { title: 'Liquid Argon (LAR)', slug: 'liquid-argon', formula: 'Ar', category: 'Bulk Cryogenic', temp: '-186°C' },
  { title: 'Liquid Carbon Dioxide (LCO₂)', slug: 'liquid-carbon-dioxide', formula: 'CO₂', category: 'Bulk Cryogenic', temp: '-78.5°C' },
  { title: 'Hydrogen Gas (H₂)', slug: 'hydrogen-gas', formula: 'H₂', category: 'Compressed Gas', temp: '200 Bar' },
  { title: 'Dissolved Acetylene (DA)', slug: 'dissolved-acetylene', formula: 'C₂H₂', category: 'Industrial Fuel', temp: 'IS:308' },
  { title: 'Helium Gas (He)', slug: 'helium-gas', formula: 'He', category: 'Specialty / UHP', temp: 'Grade 5.0/6.0' },
  { title: 'Carbon Dioxide Gas (CO₂)', slug: 'carbon-dioxide-gas', formula: 'CO₂', category: 'Industrial Shielding', temp: '55 Bar' },
  { title: 'High Purity Oxygen (99.9999%)', slug: 'high-purity-oxygen', formula: 'O₂', category: 'Semiconductor', temp: 'Grade 6.0' },
  { title: 'Calibration Gas Mixtures', slug: 'calibration-gas-mixtures', formula: 'Multi-Gas', category: 'NIST Traceable', temp: 'PPM / PPB' },
  { title: 'Nitrous Oxide (N₂O)', slug: 'nitrous-oxide', formula: 'N₂O', category: 'Medical & Electronic', temp: 'IP / E942' },
  { title: 'Sulphur Hexafluoride (SF₆)', slug: 'sulphur-hexafluoride', formula: 'SF₆', category: 'GIS Switchgear', temp: 'IEC 60376' }
];

const Products: React.FC = () => {
  const [filter, setFilter] = useState<Category>("liquid");

  const filteredProducts = PRODUCTS.filter(p => p.category === filter);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Catalog',
    name: 'Industrial & Cryogenic Gas Products',
    provider: {
      '@type': 'Organization',
      name: 'Shakti Group of Companies'
    },
    itemListElement: [
      ...PRODUCT_SUBPAGES.map((item, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: item.title,
        url: `https://www.shaktigases.com${item.path}`
      })),
      ...POPULAR_INDIVIDUAL_PRODUCTS.map((prod, idx) => ({
        '@type': 'ListItem',
        position: PRODUCT_SUBPAGES.length + idx + 1,
        name: prod.title,
        url: `https://www.shaktigases.com/products/${prod.slug}`
      }))
    ]
  };

  return (
    <div className="bg-white">
      {/* SEO Metadata */}
      <SEO
        title="Industrial & Cryogenic Gas Products | LOX, LIN, LAR, LCO₂, H₂, Acetylene, Helium"
        description="Explore Shakti Group's comprehensive product catalog of bulk cryogenic gases (LOX, LIN, LAR, LCO2), high-pressure industrial cylinders, UHP specialty gases, and NIST calibration standards."
        keywords="Liquid Oxygen LOX, Liquid Nitrogen LIN, Liquid Argon LAR, Bulk LCO2 India, Dissolved Acetylene, Hydrogen Gas, Helium Cylinders, Specialty Gases Gujarat"
        canonicalUrl="https://www.shaktigases.com/products"
        schemaJson={schema}
      />

      {/* Hero */}
      <div className="relative h-[440px] overflow-hidden bg-slate-950">
        <img
          src="https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/product_hero.png"
          alt="Industrial gas manufacturing and delivery fleet"
          className="w-full h-full object-cover opacity-85 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/40 to-slate-950/20 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-4">
              <NavLink to="/" className="hover:text-white transition">Home</NavLink>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
              <span className="text-white">Products Catalog</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 max-w-3xl leading-tight" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.9)' }}>
              Industrial, Cryogenic & Specialty Gases
            </h1>
            <p className="text-sm sm:text-base text-slate-100 mb-6 max-w-2xl leading-relaxed" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.8)' }}>
              Manufacturing and supplying high-purity cryogenic liquids (LOX, LIN, LAR, LCO₂), compressed gas cylinders, UHP specialty mixtures, and on-site tank setups across India.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-lg font-bold uppercase tracking-wider text-xs transition shadow-lg shadow-black/40"
              >
                Browse Gas Catalog
              </button>
              <button
                onClick={() => document.getElementById("individual-products")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-slate-900/80 hover:bg-slate-800 text-slate-200 px-6 py-2.5 rounded-lg font-semibold text-xs transition border border-white/20 backdrop-blur-xs"
              >
                Individual Product Specs (LOX, LAR, etc.) ↓
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Categories Direct Links Grid */}
      <section className="bg-slate-50 py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs block mb-1">
              Gas Product Sub-Catalogs
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Explore Our Core Product Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCT_SUBPAGES.map((sub) => (
              <NavLink
                key={sub.path}
                to={sub.path}
                className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block bg-blue-50 text-blue-700 text-[11px] font-mono font-bold px-2 py-0.5 rounded mb-2.5 border border-blue-100">
                    {sub.badge}
                  </span>
                  <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-blue-600 transition-colors">
                    {sub.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {sub.desc}
                  </p>
                </div>
                <div className="flex items-center text-xs font-bold text-blue-600 pt-3 border-t border-slate-100 group-hover:translate-x-1 transition-transform">
                  <span>Explore Sub-Catalog</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-1" />
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Individual Products Showcase Section */}
      <section id="individual-products" className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-1.5 text-blue-600 font-bold uppercase tracking-widest text-xs mb-1">
              <FlaskConical className="h-4 w-4" />
              <span>Technical Data Sheets & Product Pages</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Individual Product Specifications
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Access dedicated technical specification pages, purity grades, CAS registry numbers, physical states, and available supply formats for each gas.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {POPULAR_INDIVIDUAL_PRODUCTS.map((prod) => (
            <NavLink
              key={prod.slug}
              to={`/products/${prod.slug}`}
              className="p-4 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all bg-white group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                    {prod.formula}
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium">
                    {prod.temp}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm group-hover:text-blue-600 transition-colors">
                  {prod.title}
                </h3>
                <span className="text-[11px] text-slate-500 block mt-1">
                  {prod.category}
                </span>
              </div>

              <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-100 text-[11px] font-semibold text-blue-600">
                <span>View Details</span>
                <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </NavLink>
          ))}
        </div>
      </section>

      {/* Portfolio Filter & Cards Grid */}
      <section id="portfolio" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs block mb-1">
              Complete Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Browse Gas Products by Application
            </h2>
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap bg-slate-100 p-1.5 rounded-xl w-fit gap-1 border border-slate-200">
            {["liquid","industrial","high-purity","specialty"].map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat as Category)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
                  filter === cat ? "bg-white text-blue-600 shadow-sm border border-slate-200" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {(() => {
                  switch (cat) {
                    case "liquid": return "Cryogenic Liquids (LOX, LIN, LAR, CO₂)";
                    case "industrial": return "Industrial Cylinders";
                    case "high-purity": return "High-Purity / Laser / He";
                    case "specialty": return "Specialty Gases";
                  }
                })()}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition duration-300 flex flex-col justify-between">
              <NavLink
                to={`/products/${product.slug || 'bulk-cryogenic'}`}
                className="relative h-52 overflow-hidden block"
              >
                <img
                  src={product.image}
                  alt={`${product.title} industrial gas`}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold text-base mb-1 group-hover:text-blue-300 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-slate-300 text-xs line-clamp-2">{product.description}</p>
                </div>
              </NavLink>

              <div className="p-4 bg-white flex items-center justify-between gap-2 border-t border-slate-100">
                <NavLink
                  to={`/products/${product.slug || 'bulk-cryogenic'}`}
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  <span>View Specifications</span>
                  <ArrowRight className="h-3 w-3" />
                </NavLink>
                <NavLink
                  to="/contact"
                  className="text-[11px] font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 px-2.5 py-1 rounded transition"
                >
                  Request Quote
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* On-Site Storage Rental Highlight Banner */}
      <section className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white py-12 border-t border-b border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="bg-blue-600 text-white text-[11px] font-bold px-3 py-1 rounded uppercase tracking-wider">
              On-Site Storage Setup Options Available
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Turnkey Cryogenic Tank Installation On Rental / Opex
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We install vacuum-insulated cryogenic storage tanks (3 KL to 60 KL) and ambient vaporizers directly at your facility on a rental basis. Automated IoT level telemetry triggers seamless replenishment via our 65+ road tanker fleet.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <NavLink
              to="/solutions/bulk-gas-supply"
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-6 py-3 rounded-xl transition shadow-md text-center"
            >
              Explore Tank Rental Solutions
            </NavLink>
            <NavLink
              to="/contact"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs px-5 py-3 rounded-xl transition border border-slate-700 text-center"
            >
              Consult an Engineer
            </NavLink>
          </div>
        </div>
      </section>

      {/* Delivery Options */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs block mb-1">
              Distribution Logistics
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Bulk Cryogenic Tankers, Cylinders & On-Site Setup
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {DELIVERY_OPTIONS.map((option, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl text-center shadow-xs hover:shadow-md transition duration-300 border border-slate-200 group"
              >
                <div className="h-28 mb-4 overflow-hidden rounded-xl mx-auto bg-slate-50 flex items-center justify-center p-2">
                  <img
                    src={option.image}
                    alt={`${option.title} gas supply`}
                    className="max-h-full object-contain group-hover:scale-105 transition duration-500"
                  />
                </div>

                <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                  {option.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Cross Backlinks Footer */}
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-slate-500">
            <div className="flex flex-wrap items-center gap-3">
              <span>Related Resources:</span>
              <NavLink to="/company/our-group" className="hover:text-blue-600 underline">Group Manufacturing Network</NavLink>
              <span>•</span>
              <NavLink to="/solutions/bulk-gas-supply" className="hover:text-blue-600 underline">Bulk Gas Supply & Tank Rental</NavLink>
              <span>•</span>
              <NavLink to="/industries" className="hover:text-blue-600 underline">Industries Served</NavLink>
            </div>

            <NavLink to="/contact" className="text-blue-600 font-bold hover:underline">
              Request Full Gas Specification & COA Sheets →
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;

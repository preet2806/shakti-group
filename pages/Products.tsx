import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PRODUCTS, DELIVERY_OPTIONS, INDUSTRIES } from '../constants';
import { ArrowRight, ChevronRight, Boxes, Factory, ShieldCheck, Truck } from 'lucide-react';
import SEO from '../components/SEO';

type Category = "liquid" | "industrial" | "high-purity" | "specialty";

export const PRODUCT_SUBPAGES = [
  {
    path: '/products/bulk-cryogenic',
    title: 'Bulk & Cryogenic Liquid Gases',
    desc: 'High-purity LOX, LIN, LAR, and LCO₂ delivered in specialized cryogenic road tankers.'
  },
  {
    path: '/products/industrial-cylinder',
    title: 'Industrial & Cylinder Gases',
    desc: 'High-pressure cylinders, Dissolved Acetylene (DA), and multi-cylinder quads (MCPs).'
  },
  {
    path: '/products/specialty-calibration',
    title: 'Specialty & Calibration Gases',
    desc: 'Grade 5.0 & 6.0 UHP gases, laser cutting mixtures, and NIST traceable calibration standards.'
  },
  {
    path: '/products/other',
    title: 'Dry Ice, Dewars & Gas Accessories',
    desc: 'Solid CO₂ dry ice blocks, liquid nitrogen dewars, pressure regulators, and manifold panels.'
  }
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
    itemListElement: PRODUCT_SUBPAGES.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.title,
      url: `https://www.shaktigases.com${item.path}`
    }))
  };

  return (
    <div className="bg-white">
      {/* SEO Metadata */}
      <SEO
        title="Industrial & Cryogenic Gas Products | Oxygen, Nitrogen, Argon, CO₂"
        description="Shakti Industrial Gases is a leading Indian manufacturer of industrial and cryogenic gases including LOX, LIN, LAR, LCO2, UHP gases, and high-pressure cylinders."
        keywords="Industrial Gases India, Liquid Oxygen LOX, Liquid Nitrogen LIN, Argon Gas Tanker, CO2 Cylinders, Specialty Gases"
        canonicalUrl="https://www.shaktigases.com/products"
        schemaJson={schema}
      />

      {/* Hero */}
      <div className="relative h-[480px] overflow-hidden bg-gray-900">
        <img
          src="https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/product_hero.png"
          alt="Industrial gas manufacturing and delivery fleet"
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/80 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-4">
              <NavLink to="/" className="hover:text-white transition">Home</NavLink>
              <ChevronRight className="h-3.5 w-3.5 text-gray-500" />
              <span className="text-white">Products Catalog</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 max-w-3xl leading-tight">
              Industrial & Cryogenic Gas Products
            </h1>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl leading-relaxed">
              Manufacturing and supplying high-purity cryogenic liquids, compressed cylinders, specialty mixtures, and food-grade gases across India.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-blue-500 hover:bg-blue-600 text-white px-7 py-3 rounded-xl font-bold uppercase tracking-wider text-sm transition shadow-lg shadow-blue-500/30"
              >
                Browse Gas Catalog
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Direct Links Grid */}
      <section className="bg-gray-50 py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs block mb-1">
              Product Categories
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Select Product Category
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCT_SUBPAGES.map((sub) => (
              <NavLink
                key={sub.path}
                to={sub.path}
                className="group bg-white p-6 rounded-2xl border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                    {sub.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {sub.desc}
                  </p>
                </div>
                <div className="flex items-center text-xs font-bold text-blue-600 pt-3 border-t border-gray-100 group-hover:translate-x-1 transition-transform">
                  <span>Explore Category</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-1" />
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section id="portfolio" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs block mb-1">
              Gas Portfolio
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Industrial, Cryogenic & Specialty Gases
            </h2>
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap bg-gray-100 p-1.5 rounded-xl w-fit gap-1">
            {["liquid","industrial","high-purity","specialty"].map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat as Category)}
                className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
                  filter === cat ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {(() => {
                  switch (cat) {
                    case "liquid": return "Cryogenic Liquids";
                    case "industrial": return "Industrial Gases";
                    case "high-purity": return "High-Purity / Laser";
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
            <div key={product.id} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition duration-300">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.title} industrial gas`}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
                  <h3 className="text-white font-bold text-lg mb-1">{product.title}</h3>
                  <p className="text-gray-300 text-xs line-clamp-2">{product.description}</p>
                </div>
              </div>

              <div className="p-4 bg-white flex justify-between items-center">
                <span className="text-xs font-bold text-blue-600 uppercase">PESO Certified</span>
                <NavLink
                  to="/contact"
                  className="text-xs font-bold text-gray-900 hover:text-blue-600 flex items-center gap-1"
                >
                  <span>Request Quote</span>
                  <ArrowRight className="h-3 w-3" />
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Delivery Options */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs block mb-1">
              Distribution Formats
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Bulk, Cylinder & On-Site Delivery Modes
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {DELIVERY_OPTIONS.map((option, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl text-center shadow-sm hover:shadow-lg transition duration-300 border border-gray-100 group"
              >
                <div className="h-28 mb-4 overflow-hidden rounded-xl mx-auto bg-gray-50 flex items-center justify-center p-2">
                  <img
                    src={option.image}
                    alt={`${option.title} gas supply`}
                    className="max-h-full object-contain group-hover:scale-105 transition duration-500"
                  />
                </div>

                <h3 className="font-bold text-gray-900 text-base mb-2">
                  {option.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Cross Backlinks Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-gray-500">
            <div className="flex flex-wrap items-center gap-3">
              <span>Explore Related:</span>
              <NavLink to="/company/manufacturing-network" className="hover:text-blue-600 underline">Manufacturing Network</NavLink>
              <span>•</span>
              <NavLink to="/services" className="hover:text-blue-600 underline">Gas Solutions</NavLink>
              <span>•</span>
              <NavLink to="/industries" className="hover:text-blue-600 underline">Industries Served</NavLink>
            </div>

            <NavLink to="/contact" className="text-blue-600 font-bold hover:underline">
              Request Full Gas Specification Sheet →
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;

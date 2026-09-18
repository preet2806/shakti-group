import React, { useState, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { PRODUCTS, DELIVERY_OPTIONS } from '../constants';
import {
  ArrowRight,
  ChevronRight,
  Search,
  X,
  FlaskConical,
  Truck,
  ShieldCheck,
  PhoneCall,
  SlidersHorizontal,
  TableProperties,
  LayoutGrid,
  CheckCircle2
} from 'lucide-react';
import SEO from '../components/SEO';

type CategoryFilter = 'all' | 'liquid' | 'industrial' | 'high-purity' | 'specialty' | 'other';

export const PRODUCT_SUBPAGES = [
  {
    path: '/products/bulk-cryogenic',
    title: 'Bulk & Cryogenic Liquid Gases',
    badge: 'LOX / LIN / LAR / LCO₂',
    desc: 'Liquid oxygen, nitrogen, argon, and carbon dioxide delivered via our 65+ dedicated cryogenic road tankers.'
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
    desc: 'Ultra-high-purity gases, laser cutting mixtures, and NIST/NABL traceable calibration standards.'
  },
  {
    path: '/products/other',
    title: 'Dry Ice, Dewars & Hardware',
    badge: 'Solid CO₂ & Equipment',
    desc: 'Food-grade solid CO₂ dry ice pellets/blocks, liquid nitrogen dewars, pressure regulators, and manifold panels.'
  }
];

export const POPULAR_INDIVIDUAL_PRODUCTS = [
  { title: 'Liquid Oxygen (LOX)', slug: 'liquid-oxygen', formula: 'O₂', category: 'Bulk Cryogenic', temp: '-183°C', purity: '≥ 99.5% to 99.999%', format: 'Road Tanker / Dura / On-Site' },
  { title: 'Liquid Nitrogen (LIN)', slug: 'liquid-nitrogen', formula: 'N₂', category: 'Bulk Cryogenic', temp: '-196°C', purity: '≥ 99.999% (Grade 5.0)', format: 'Road Tanker / Dura / Dewars' },
  { title: 'Liquid Argon (LAR)', slug: 'liquid-argon', formula: 'Ar', category: 'Bulk Cryogenic', temp: '-186°C', purity: '≥ 99.999% (Grade 5.0)', format: 'Road Tanker / Dura Liquid' },
  { title: 'Liquid Carbon Dioxide (LCO₂)', slug: 'liquid-carbon-dioxide', formula: 'CO₂', category: 'Bulk Cryogenic', temp: '-78.5°C', purity: '≥ 99.9% Food Grade (ISBT)', format: 'Road Tanker / On-Site Vessel' },
  { title: 'Hydrogen Gas (H₂)', slug: 'hydrogen-gas', formula: 'H₂', category: 'Industrial Gas', temp: '200 Bar', purity: '≥ 99.99% Industrial / UHP', format: 'Tube Cascade / Quad / Cylinder' },
  { title: 'Dissolved Acetylene (DA)', slug: 'dissolved-acetylene', formula: 'C₂H₂', category: 'Fuel Gas', temp: 'IS:308', purity: 'Commercial Fuel Gas', format: 'High-Pressure Cylinders' },
  { title: 'Helium Gas (He)', slug: 'helium-gas', formula: 'He', category: 'Specialty / UHP', temp: 'Grade 5.0/6.0', purity: '99.999% - 99.9999%', format: 'Passivated Cylinders / Quads' },
  { title: 'Carbon Dioxide Gas (CO₂)', slug: 'carbon-dioxide-gas', formula: 'CO₂', category: 'Industrial Shielding', temp: '55 Bar', purity: '≥ 99.9% Industrial / Food', format: '47L Cylinders / Manifold' },
  { title: 'High Purity Oxygen', slug: 'high-purity-oxygen', formula: 'O₂', category: 'Semiconductor', temp: 'Grade 6.0', purity: '99.9999% Electronic Grade', format: 'Passivated Cylinders' },
  { title: 'Calibration Gas Mixtures', slug: 'calibration-gas-mixtures', formula: 'Multi-Gas', category: 'NIST Traceable', temp: 'PPM / PPB', purity: 'Certified ±1% Accuracy', format: 'Aluminum / SS Cylinders' },
  { title: 'Nitrous Oxide (N₂O)', slug: 'nitrous-oxide', formula: 'N₂O', category: 'Medical & Specialty', temp: 'IP / E942', purity: 'Medical IP / Food Grade', format: 'High-Pressure Cylinders' },
  { title: 'Sulphur Hexafluoride (SF₆)', slug: 'sulphur-hexafluoride', formula: 'SF₆', category: 'GIS Switchgear', temp: 'IEC 60376', purity: '≥ 99.9% Dielectric', format: 'High-Pressure Cylinders' }
];

const CATEGORY_TABS: { id: CategoryFilter; label: string; count?: number }[] = [
  { id: 'all', label: 'All Gas Products' },
  { id: 'liquid', label: 'Bulk Cryogenic Liquids' },
  { id: 'industrial', label: 'Industrial & Compressed Cylinders' },
  { id: 'high-purity', label: 'High-Purity & Specialty' },
  { id: 'specialty', label: 'Specialty & Process Gases' },
  { id: 'other', label: 'Dry Ice & Hardware' }
];

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  const query = searchQuery.trim().toLowerCase();

  // Filtered master catalog list
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!query) return true;

      const titleMatch = p.title.toLowerCase().includes(query);
      const descMatch = p.description.toLowerCase().includes(query);
      const slugMatch = p.slug ? p.slug.toLowerCase().includes(query) : false;
      const catMatch = p.category.toLowerCase().includes(query);

      return titleMatch || descMatch || slugMatch || catMatch;
    });
  }, [selectedCategory, query]);

  // Filtered technical spec reference rows
  const filteredSpecs = useMemo(() => {
    if (!query) return POPULAR_INDIVIDUAL_PRODUCTS;
    return POPULAR_INDIVIDUAL_PRODUCTS.filter(p =>
      p.title.toLowerCase().includes(query) ||
      p.formula.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.purity.toLowerCase().includes(query)
    );
  }, [query]);

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
    <div className="bg-white font-sans text-slate-900 min-h-screen">
      {/* SEO Metadata */}
      <SEO
        title="Industrial & Cryogenic Gas Products | LOX, LIN, LAR, LCO₂, H₂, Acetylene, Helium | Shakti Group"
        description="Explore Shakti Group's comprehensive catalog of bulk cryogenic liquid gases (LOX, LIN, LAR, LCO2), high-pressure industrial cylinders, UHP specialty gases, and NIST calibration standards. 448 TPD manufacturing capacity with 65+ road tankers."
        keywords="Liquid Oxygen LOX, Liquid Nitrogen LIN, Liquid Argon LAR, Bulk LCO2 India, Dissolved Acetylene, Hydrogen Gas, Helium Cylinders, Specialty Gases Gujarat"
        canonicalUrl="https://www.shaktigases.com/products"
        schemaJson={schema}
      />

      {/* Clean, Industrial Hero Header */}
      <div className="relative bg-slate-950 text-white border-b border-slate-800 overflow-hidden">
        {/* Subtle background image texture with high contrast overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity"
          style={{
            backgroundImage: "url('https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/product_hero.png')"
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 mb-6 font-medium">
            <NavLink to="/" className="hover:text-white transition">Home</NavLink>
            <ChevronRight className="h-3 w-3 text-slate-600" />
            <span className="text-sky-400 font-semibold">Products Catalog</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Industrial, Cryogenic & Specialty Gas Catalog
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Serving demanding manufacturing, chemical synthesis, healthcare, and metallurgical operations with 448 TPD combined ASU production, 65+ cryogenic road tankers, and certified laboratory gas mixtures.
            </p>

            {/* Concise Industrial Metric Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800/80">
              <div>
                <span className="block text-xl sm:text-2xl font-black text-white">448 TPD</span>
                <span className="text-xs text-slate-400 font-medium">Air Separation Capacity</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-black text-sky-400">65+ Units</span>
                <span className="text-xs text-slate-400 font-medium">Cryogenic Road Tankers</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-black text-white">Grade 6.0</span>
                <span className="text-xs text-slate-400 font-medium">UHP Laboratory Purity</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-black text-emerald-400">24/7 Dispatch</span>
                <span className="text-xs text-slate-400 font-medium">Gujarat & Pan-India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Categories Overview */}
      <section className="bg-slate-50 border-b border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
            <div>
              <span className="text-xs font-bold text-sky-800 uppercase tracking-widest block">
                Primary Divisions
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                Product Categories & Specialized Catalogs
              </h2>
            </div>
            <span className="text-xs text-slate-500 font-medium hidden sm:block">
              Select a specialized category for comprehensive specs
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRODUCT_SUBPAGES.map((sub) => (
              <NavLink
                key={sub.path}
                to={sub.path}
                className="group bg-white p-5 rounded-xl border border-slate-200 hover:border-sky-300 hover:shadow-sm transition flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block bg-sky-50 text-sky-800 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded mb-2.5 border border-sky-200/80">
                    {sub.badge}
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm mb-1.5 group-hover:text-sky-700 transition-colors">
                    {sub.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {sub.desc}
                  </p>
                </div>
                <div className="flex items-center text-xs font-bold text-sky-700 pt-3 mt-3 border-t border-slate-100 group-hover:translate-x-0.5 transition-transform">
                  <span>Explore Technical Catalog</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Filter Header Section */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Gas Product Directory & Specifications
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Filter by product classification or search by chemical formula, purity, or application.
            </p>
          </div>

          {/* Unified Search Input */}
          <div className="w-full md:w-80 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search gas, formula (O₂, N₂), purity..."
              className="w-full pl-9 pr-9 py-2.5 bg-white border border-slate-300 rounded-lg text-sm placeholder-slate-400 text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 shadow-2xs transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-full"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Clean Segmented Category Tabs & View Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-5 pb-6">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {CATEGORY_TABS.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition whitespace-nowrap border ${
                    isActive
                      ? 'bg-slate-900 text-white border-slate-900 shadow-2xs'
                      : 'bg-white text-slate-600 hover:text-slate-900 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Table / Grid Toggle for Technical Users */}
          <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
            <span className="text-xs text-slate-500 font-medium">Layout:</span>
            <div className="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-50">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded text-xs font-semibold flex items-center gap-1 ${
                  viewMode === 'grid' ? 'bg-white text-sky-800 shadow-2xs' : 'text-slate-500 hover:text-slate-900'
                }`}
                title="Grid Cards View"
              >
                <LayoutGrid className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Cards</span>
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded text-xs font-semibold flex items-center gap-1 ${
                  viewMode === 'table' ? 'bg-white text-sky-800 shadow-2xs' : 'text-slate-500 hover:text-slate-900'
                }`}
                title="Specification Matrix View"
              >
                <TableProperties className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Matrix</span>
              </button>
            </div>
          </div>
        </div>

        {/* View 1: Clean Grid Cards */}
        {viewMode === 'grid' ? (
          filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-xs transition flex flex-col justify-between overflow-hidden group"
                >
                  {/* Image Container */}
                  <NavLink
                    to={`/products/${product.slug || 'bulk-cryogenic'}`}
                    className="relative h-44 overflow-hidden block bg-slate-100"
                  >
                    <img
                      src={product.image}
                      alt={`${product.title} industrial gas supply`}
                      width={400}
                      height={200}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-103 transition duration-300"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="bg-slate-950/80 backdrop-blur-xs text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded border border-white/20">
                        {product.category === 'liquid'
                          ? 'Cryogenic Liquid'
                          : product.category === 'high-purity'
                          ? 'UHP / Lab'
                          : product.category === 'specialty'
                          ? 'Specialty Gas'
                          : 'Industrial Gas'}
                      </span>
                    </div>
                  </NavLink>

                  {/* Body */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-slate-900 font-bold text-sm mb-1 group-hover:text-sky-800 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-slate-600 text-xs line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <NavLink
                        to={`/products/${product.slug || 'bulk-cryogenic'}`}
                        className="text-sky-800 hover:text-sky-950 font-bold inline-flex items-center gap-1"
                      >
                        <span>Specifications</span>
                        <ArrowRight className="h-3 w-3" />
                      </NavLink>
                      <NavLink
                        to="/contact"
                        className="text-[11px] font-bold text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 px-2.5 py-1 rounded transition"
                      >
                        Quote
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-slate-50 rounded-xl border border-slate-200 p-8 max-w-lg mx-auto my-6">
              <h3 className="text-sm font-bold text-slate-900 mb-1">
                No gases found matching &ldquo;{searchQuery}&rdquo;
              </h3>
              <p className="text-xs text-slate-600 mb-4">
                We manufacture custom blends, specialized cylinder quads, and certified calibration standards on request.
              </p>
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="text-xs font-semibold px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition"
                >
                  Reset Filter
                </button>
                <NavLink
                  to="/contact"
                  className="text-xs font-bold px-4 py-2 bg-sky-700 text-white rounded-lg hover:bg-sky-800 transition"
                >
                  Request Custom Mix
                </NavLink>
              </div>
            </div>
          )
        ) : (
          /* View 2: Technical Specification Matrix */
          <div className="overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-900 font-bold uppercase tracking-wider text-xs border-b border-slate-200">
                <tr>
                  <th className="p-3.5">Product Name</th>
                  <th className="p-3.5">Formula</th>
                  <th className="p-3.5">Classification</th>
                  <th className="p-3.5">Boiling Point / Temp</th>
                  <th className="p-3.5">Standard Purity</th>
                  <th className="p-3.5">Available Formats</th>
                  <th className="p-3.5 text-right">Data Sheet</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {filteredSpecs.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-3.5 font-bold text-slate-900">
                      <NavLink
                        to={`/products/${item.slug}`}
                        className="hover:text-sky-800 transition-colors"
                      >
                        {item.title}
                      </NavLink>
                    </td>
                    <td className="p-3.5 font-mono font-bold text-sky-800">{item.formula}</td>
                    <td className="p-3.5 text-slate-600 text-xs">{item.category}</td>
                    <td className="p-3.5 font-mono text-xs text-slate-600">{item.temp}</td>
                    <td className="p-3.5 text-xs text-slate-800 font-medium">{item.purity}</td>
                    <td className="p-3.5 text-xs text-slate-600">{item.format}</td>
                    <td className="p-3.5 text-right">
                      <NavLink
                        to={`/products/${item.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-sky-800 hover:text-sky-950"
                      >
                        <span>View Specs</span>
                        <ArrowRight className="h-3 w-3" />
                      </NavLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* On-Site Storage Rental Highlight Banner */}
      <section className="bg-slate-950 text-white py-12 border-t border-b border-slate-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <span className="text-sky-400 text-xs font-bold uppercase tracking-wider block">
                Turnkey Cryogenic Tank Installation On Rental (Opex Model)
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
                Zero Upfront Capital Expenditure for Bulk Consumers
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Shakti Group installs vacuum-insulated cryogenic storage tanks (3 KL to 60 KL) and ambient vaporizers directly at customer premises. 24/7 digital IoT level telemetry automatically coordinates replenishment via our 65+ road tanker fleet.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto">
              <NavLink
                to="/solutions/bulk-gas-supply"
                className="w-full sm:w-auto bg-sky-700 hover:bg-sky-800 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg transition shadow-sm text-center"
              >
                Explore Bulk Tank Rental
              </NavLink>
              <NavLink
                to="/contact"
                className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg transition border border-slate-700 text-center"
              >
                Consult Plant Engineer
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Supply & Packaging Logistics Section */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-sky-800 uppercase tracking-widest block mb-1">
              Distribution Logistics
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Bulk Cryogenic Road Tankers, Cylinders & Quads
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {DELIVERY_OPTIONS.map((option, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-xl border border-slate-200 hover:border-slate-300 transition text-center flex flex-col justify-between"
              >
                <div className="h-24 mb-3 overflow-hidden rounded-lg mx-auto bg-slate-50 flex items-center justify-center p-2 w-full">
                  <img
                    src={option.image}
                    alt={`${option.title} gas supply`}
                    width={140}
                    height={90}
                    loading="lazy"
                    className="max-h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">
                    {option.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {index === 0 && '10 KL to 35 KL vacuum-insulated transport fleet.'}
                    {index === 1 && '160L to 250L portable cryogenic liquid dewars.'}
                    {index === 2 && 'High-pressure 47L / 50L seamless steel cylinders.'}
                    {index === 3 && 'Turnkey 3 KL to 60 KL cryogenic storage tanks.'}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Cross-Nav Links */}
          <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-medium">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-bold text-slate-900">Direct Navigation:</span>
              <NavLink to="/company/our-group" className="hover:text-sky-800 underline underline-offset-2">
                Manufacturing ASUs & Refilling Plants
              </NavLink>
              <span>•</span>
              <NavLink to="/industries" className="hover:text-sky-800 underline underline-offset-2">
                Industry-Specific Applications
              </NavLink>
              <span>•</span>
              <NavLink to="/company/quality-safety" className="hover:text-sky-800 underline underline-offset-2">
                PESO & ISO 9001 Certifications
              </NavLink>
            </div>

            <NavLink
              to="/contact"
              className="text-sky-800 font-bold hover:text-sky-950 underline underline-offset-2 shrink-0"
            >
              Request Certificate of Analysis (COA) Sheets →
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;

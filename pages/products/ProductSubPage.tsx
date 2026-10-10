import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  ChevronRight,
  CheckCircle2,
  Truck,
  Gauge,
  Boxes,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Zap,
  PhoneCall,
  Atom,
  MapPin,
  Clock,
  FileText,
  HelpCircle
} from 'lucide-react';
import SEO from '../../components/SEO';
import {
  ProductPageData,
  INDIVIDUAL_PRODUCTS_DATA,
  PRODUCT_SLUG_ALIASES,
  CATEGORY_SUBPAGES_DATA,
  ALL_PRODUCTS_SUBPAGES_DATA
} from './productData';

export { CATEGORY_SUBPAGES_DATA, ALL_PRODUCTS_SUBPAGES_DATA };
export const PRODUCT_SUBPAGES_DATA = ALL_PRODUCTS_SUBPAGES_DATA;

export const ProductSubPage: React.FC = () => {
  const location = useLocation();
  const rawSlug = location.pathname.split('/').pop() || 'bulk-cryogenic';
  const resolvedSlug = PRODUCT_SLUG_ALIASES[rawSlug.toLowerCase()] || rawSlug;
  const data = ALL_PRODUCTS_SUBPAGES_DATA[resolvedSlug] || CATEGORY_SUBPAGES_DATA['bulk-cryogenic'];

  const isIndividualProduct = !(data.slug in CATEGORY_SUBPAGES_DATA);

  // Structured Data (JSON-LD)
  const canonicalUrl = `https://www.shaktigases.com/products/${data.slug}`;

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: data.title,
    alternateName: data.alternateNames || [data.title],
    description: data.seoDesc || data.subtitle,
    category: data.categoryLabel,
    brand: {
      '@type': 'Brand',
      name: 'Shakti Industrial Gases (Shakti Group)'
    },
    sku: `SHAKTI-${data.slug.toUpperCase()}`,
    mpn: `SHAKTI-${data.slug.toUpperCase()}`,
    image: data.heroImage || 'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/product_hero.png',
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Chemical Formula', value: data.chemicalFormula },
      { '@type': 'PropertyValue', name: 'CAS Number', value: data.casNumber },
      { '@type': 'PropertyValue', name: 'UN Transport Number', value: data.unNumber },
      { '@type': 'PropertyValue', name: 'Boiling Point', value: data.physicalProperties.boilingPoint },
      { '@type': 'PropertyValue', name: 'Expansion Ratio', value: data.physicalProperties.expansionRatio },
      { '@type': 'PropertyValue', name: 'Purity Grades', value: data.puritiesAvailable.join(', ') },
      { '@type': 'PropertyValue', name: 'PESO Clearance', value: '100% Certified Cylinders, Vessels & Road Tankers' },
      { '@type': 'PropertyValue', name: 'Supply Logistics', value: '65+ Cryogenic Road Tankers & On-Site Storage Tank Rental' }
    ],
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      price: 'Custom Industrial Quotation',
      priceValidUntil: '2027-12-31',
      seller: {
        '@type': 'Organization',
        name: 'Shakti Group of Companies',
        telephone: '+91-9825008544',
        url: 'https://www.shaktigases.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '301, 3rd Floor, Golden Icon, Bird Circle, Race Course Road',
          addressLocality: 'Vadodara',
          addressRegion: 'Gujarat',
          postalCode: '390007',
          addressCountry: 'IN'
        }
      }
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.shaktigases.com/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Products',
        item: 'https://www.shaktigases.com/products'
      },
      ...(data.categorySlug && data.slug !== data.categorySlug ? [{
        '@type': 'ListItem',
        position: 3,
        name: data.categoryLabel,
        item: `https://www.shaktigases.com/products/${data.categorySlug}`
      }, {
        '@type': 'ListItem',
        position: 4,
        name: data.title,
        item: canonicalUrl
      }] : [{
        '@type': 'ListItem',
        position: 3,
        name: data.title,
        item: canonicalUrl
      }])
    ]
  };

  const faqSchema = data.faqs && data.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  } : null;

  const combinedSchema = [productSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])];

  // List of other gases in the same category for clean sidebar navigation
  const siblingProducts = Object.values(INDIVIDUAL_PRODUCTS_DATA).filter(
    p => p.category === data.category && p.slug !== data.slug
  ).slice(0, 5);

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <SEO
        title={data.seoTitle}
        description={data.seoDesc}
        keywords={data.keywords}
        canonicalUrl={canonicalUrl}
        schemaJson={combinedSchema}
      />

      {/* Clean, Refined Hero Header (No Blobs, No Box Clutter) */}
      <header className="relative bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-5 font-medium">
            <NavLink to="/" className="hover:text-white transition">Home</NavLink>
            <ChevronRight className="h-3 w-3 text-slate-600" />
            <NavLink to="/products" className="hover:text-white transition">Products</NavLink>
            {data.categorySlug && data.slug !== data.categorySlug && (
              <>
                <ChevronRight className="h-3 w-3 text-slate-600" />
                <NavLink to={`/products/${data.categorySlug}`} className="hover:text-white transition text-slate-300">
                  {data.categoryLabel}
                </NavLink>
              </>
            )}
            <ChevronRight className="h-3 w-3 text-slate-600" />
            <span className="text-sky-400 font-semibold truncate max-w-xs">{data.title}</span>
          </nav>

          {/* Title & Chemical Formula Header */}
          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-baseline gap-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
                {data.title}
              </h1>
              {data.chemicalFormula && (
                <span className="font-mono text-xs sm:text-sm font-bold px-2.5 py-1 rounded bg-sky-950 text-sky-400 border border-sky-800/80">
                  {data.chemicalFormula}
                </span>
              )}
            </div>

            <p className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-normal max-w-3xl">
              {data.subtitle}
            </p>

            {/* Quiet, Cohesive Technical Meta Strip (Replacing Scattered Pill Blobs) */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 pt-3 text-xs text-slate-400 font-medium">
              <div>
                <span className="text-slate-500">Classification:</span>{' '}
                <span className="text-slate-200 font-semibold">{data.categoryLabel}</span>
              </div>
              {data.casNumber && (
                <div>
                  <span className="text-slate-500">CAS:</span>{' '}
                  <span className="text-slate-200 font-mono">{data.casNumber}</span>
                </div>
              )}
              {data.unNumber && (
                <div>
                  <span className="text-slate-500">Transport:</span>{' '}
                  <span className="text-slate-200 font-mono">{data.unNumber}</span>
                </div>
              )}
              {data.physicalState && (
                <div>
                  <span className="text-slate-500">Physical State:</span>{' '}
                  <span className="text-slate-200 font-semibold">{data.physicalState}</span>
                </div>
              )}
              <div className="text-emerald-400 font-semibold flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>PESO Certified</span>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-2 bg-sky-700 hover:bg-sky-800 text-white text-xs font-bold px-5 py-2.5 rounded-lg transition shadow-sm"
              >
                <span>Request Quotation & Spec Sheet</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </NavLink>

              <a
                href="tel:+919825008544"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold px-4 py-2.5 rounded-lg transition border border-slate-700"
              >
                <PhoneCall className="h-3.5 w-3.5 text-emerald-400" />
                <span>Plant Dispatch: +91 98250 08544</span>
              </a>
            </div>
          </div>

        </div>
      </header>

      {/* Main Technical Content Structure */}
      <main className="py-10 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* Primary Column (8 Columns) */}
          <div className="lg:col-span-8 space-y-10">

            {/* 1. Technical Overview */}
            <section className="space-y-3">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  Product Overview & Technical Scope
                </h2>
                <span className="text-xs font-bold text-sky-800 uppercase">
                  {data.categoryLabel}
                </span>
              </div>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                {data.overview}
              </p>
            </section>

            {/* 2. Physical & Chemical Properties Specifications Matrix */}
            <section className="space-y-3">
              <div className="border-b border-slate-200 pb-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Gauge className="h-4 w-4 text-sky-800" />
                  <span>Physical & Chemical Properties</span>
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                  <span className="text-[11px] font-semibold text-slate-500 block uppercase tracking-wider">
                    Boiling Point
                  </span>
                  <span className="text-sm font-bold font-mono text-slate-900 mt-1 block">
                    {data.physicalProperties.boilingPoint}
                  </span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                  <span className="text-[11px] font-semibold text-slate-500 block uppercase tracking-wider">
                    Expansion Ratio
                  </span>
                  <span className="text-sm font-bold font-mono text-slate-900 mt-1 block">
                    {data.physicalProperties.expansionRatio}
                  </span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                  <span className="text-[11px] font-semibold text-slate-500 block uppercase tracking-wider">
                    Gas Density
                  </span>
                  <span className="text-sm font-bold font-mono text-slate-900 mt-1 block">
                    {data.physicalProperties.gasDensity}
                  </span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                  <span className="text-[11px] font-semibold text-slate-500 block uppercase tracking-wider">
                    Molecular Weight
                  </span>
                  <span className="text-sm font-bold font-mono text-slate-900 mt-1 block">
                    {data.physicalProperties.molecularWeight}
                  </span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 sm:col-span-2">
                  <span className="text-[11px] font-semibold text-slate-500 block uppercase tracking-wider">
                    Critical Temperature / State
                  </span>
                  <span className="text-sm font-bold font-mono text-slate-900 mt-1 block">
                    {data.physicalProperties.criticalTemp}
                  </span>
                </div>
              </div>
            </section>

            {/* 3. Available Purity Grades */}
            <section className="space-y-3">
              <div className="border-b border-slate-200 pb-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-sky-800" />
                  <span>Available Purity Grades & Standards</span>
                </h3>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100">
                {data.puritiesAvailable.map((grade, idx) => (
                  <div key={idx} className="p-3.5 flex items-center justify-between gap-3 text-xs sm:text-sm">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span className="font-semibold text-slate-800">{grade}</span>
                    </div>
                    <span className="text-[11px] font-mono font-medium text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-200 shrink-0">
                      Certified Analysis
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Supply Modes & Packaging */}
            <section className="space-y-4">
              <div className="border-b border-slate-200 pb-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Truck className="h-4 w-4 text-sky-800" />
                  <span>Supply Modes, Packaging & Transport Formats</span>
                </h3>
              </div>

              <div className="space-y-3">
                {data.supplyModes.map((mode, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                        {mode.title}
                      </h4>
                      <span className="bg-slate-100 text-slate-800 font-semibold text-xs px-2.5 py-0.5 rounded border border-slate-200 self-start sm:self-auto">
                        {mode.capacity}
                      </span>
                    </div>

                    <div className="text-xs text-sky-800 font-medium mb-2 flex items-center gap-1.5">
                      <Gauge className="h-3.5 w-3.5" />
                      <span>{mode.pressure}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                      {mode.description}
                    </p>

                    <div className="text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <strong className="text-slate-900">Recommended For:</strong> {mode.idealFor}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Industrial Applications Table */}
            <section className="space-y-3">
              <div className="border-b border-slate-200 pb-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Boxes className="h-4 w-4 text-sky-800" />
                  <span>Industrial Applications & Manufacturing Processes</span>
                </h3>
              </div>

              <div className="overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-2xs">
                <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                  <thead className="bg-slate-50 text-slate-900 font-bold uppercase tracking-wider text-xs border-b border-slate-200">
                    <tr>
                      <th className="p-3.5">Industry</th>
                      <th className="p-3.5">Application / Process</th>
                      <th className="p-3.5">Recommended Purity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {data.applications.map((app, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                        <td className="p-3.5 font-bold text-slate-900 whitespace-nowrap">{app.industry}</td>
                        <td className="p-3.5">{app.useCase}</td>
                        <td className="p-3.5 font-semibold text-sky-800 whitespace-nowrap">{app.recommendedPurity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 6. Handling & Safety Directives */}
            {data.handlingSafety && data.handlingSafety.length > 0 && (
              <section className="space-y-3">
                <div className="border-b border-slate-200 pb-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-600" />
                    <span>Handling, Storage & Safety Protocols</span>
                  </h3>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 space-y-2.5">
                  <ul className="space-y-2 text-xs sm:text-sm text-amber-950">
                    {data.handlingSafety.map((safe, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                        <span className="leading-relaxed">{safe}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2 border-t border-amber-200/60 text-xs text-amber-900 flex items-center justify-between">
                    <span>100% PESO statutory compliance guaranteed.</span>
                    <NavLink
                      to="/company/quality-safety"
                      className="font-bold underline hover:text-amber-950"
                    >
                      View Safety Certifications →
                    </NavLink>
                  </div>
                </div>
              </section>
            )}

            {/* 7. Related Gases */}
            {data.relatedProducts && data.relatedProducts.length > 0 && (
              <section className="space-y-3 pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                    <Atom className="h-4 w-4 text-sky-800" />
                    <span>Related Gases in this Family</span>
                  </h3>
                  <NavLink to="/products" className="text-xs font-semibold text-sky-800 hover:underline">
                    View Full Directory →
                  </NavLink>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {data.relatedProducts.map((rel, rIdx) => (
                    <NavLink
                      key={rIdx}
                      to={`/products/${rel.slug}`}
                      className="p-3.5 rounded-lg border border-slate-200 hover:border-sky-300 hover:shadow-2xs transition bg-white flex flex-col justify-between group"
                    >
                      <div>
                        <span className="text-xs font-mono font-bold text-sky-800 block mb-1">
                          {rel.formula}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-sky-800 transition-colors">
                          {rel.title}
                        </h4>
                      </div>
                      <span className="text-xs font-medium text-sky-800 flex items-center gap-1 mt-2">
                        <span>View Specs</span>
                        <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </NavLink>
                  ))}
                </div>
              </section>
            )}

            {/* 8. Frequently Asked Questions (If available) */}
            {data.faqs && data.faqs.length > 0 && (
              <section className="space-y-4 pt-4 border-t border-slate-200">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-sky-800" />
                  <span>Frequently Asked Technical Questions</span>
                </h3>

                <div className="space-y-3">
                  {data.faqs.map((faq, fIdx) => (
                    <div key={fIdx} className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm mb-1.5">
                        {faq.question}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* Sidebar (4 Columns) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">

            {/* Direct Plant Quotation Card */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 space-y-4 shadow-2xs">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-800 block mb-0.5">
                  Direct Plant Supply
                </span>
                <h3 className="text-base font-bold text-slate-900">
                  Request Commercial Quotation
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Connect directly with Shakti Group plant engineers for bulk road tankers (10-35 KL), cylinder quads, or turnkey storage tank setups.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100">
                <NavLink
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full bg-sky-700 hover:bg-sky-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition shadow-sm"
                >
                  <span>Request Custom Quotation</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </NavLink>

                <a
                  href="tel:+919825008544"
                  className="flex items-center justify-center gap-2 w-full bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-semibold px-4 py-2.5 rounded-lg transition border border-slate-200"
                >
                  <PhoneCall className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Call +91 98250 08544</span>
                </a>
              </div>

              <div className="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-sky-800 shrink-0" />
                  <span>24/7 Dedicated Logistics Dispatch</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-sky-800 shrink-0" />
                  <span>2 - 4 Hour TAT across Gujarat Belts</span>
                </div>
              </div>
            </div>

            {/* Turnkey On-Site Storage Setup (For Liquid / Bulk Products) */}
            {(data.category === 'liquid' || data.slug === 'bulk-cryogenic') && (
              <div className="bg-slate-950 text-white rounded-xl p-5 space-y-3 border border-slate-800">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wider">
                    On-Site Storage Setup
                  </span>
                  <span className="text-[10px] bg-sky-900/60 text-sky-200 px-2 py-0.5 rounded font-semibold">
                    Rental / Opex
                  </span>
                </div>

                <h4 className="text-sm font-bold text-white">
                  Turnkey Cryogenic Tank Installation
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Install 3 KL to 60 KL vacuum-insulated storage vessels with zero capital expenditure. 24/7 IoT level telemetry triggers automated tanker replenishment.
                </p>

                <NavLink
                  to="/solutions/bulk-gas-supply"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-white pt-1 transition"
                >
                  <span>Learn about Tank Rental</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </NavLink>
              </div>
            )}

            {/* Other Gases in this Category (Replacing the 10-pill horizontal overflow) */}
            {siblingProducts.length > 0 && (
              <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 space-y-3">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Other {data.categoryLabel}
                </h4>

                <ul className="space-y-1.5 text-xs">
                  {siblingProducts.map((sib) => (
                    <li key={sib.slug}>
                      <NavLink
                        to={`/products/${sib.slug}`}
                        className="p-2 rounded-lg bg-white border border-slate-200/80 hover:border-sky-300 hover:text-sky-800 transition flex items-center justify-between font-medium text-slate-700"
                      >
                        <span className="flex items-center gap-2">
                          <span className="font-mono text-[11px] font-bold text-sky-800 w-8">
                            {sib.chemicalFormula}
                          </span>
                          <span className="truncate">{sib.title}</span>
                        </span>
                        <ChevronRight className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                      </NavLink>
                    </li>
                  ))}
                </ul>

                <NavLink
                  to="/products"
                  className="block text-center text-xs font-bold text-sky-800 hover:underline pt-2"
                >
                  Browse Full Gas Catalog →
                </NavLink>
              </div>
            )}

            {/* Direct Category Directory */}
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 space-y-2">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                All Product Categories
              </h4>
              <ul className="space-y-1 text-xs">
                <li>
                  <NavLink
                    to="/products/bulk-cryogenic"
                    className={({ isActive }) =>
                      `block p-1.5 rounded font-medium transition ${
                        isActive || data.slug === 'bulk-cryogenic'
                          ? 'text-sky-900 font-bold bg-sky-100/70'
                          : 'text-slate-600 hover:text-slate-900'
                      }`
                    }
                  >
                    • Bulk & Cryogenic Gases
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products/industrial-cylinder"
                    className={({ isActive }) =>
                      `block p-1.5 rounded font-medium transition ${
                        isActive || data.slug === 'industrial-cylinder'
                          ? 'text-sky-900 font-bold bg-sky-100/70'
                          : 'text-slate-600 hover:text-slate-900'
                      }`
                    }
                  >
                    • Industrial Compressed Cylinders
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products/specialty-calibration"
                    className={({ isActive }) =>
                      `block p-1.5 rounded font-medium transition ${
                        isActive || data.slug === 'specialty-calibration'
                          ? 'text-sky-900 font-bold bg-sky-100/70'
                          : 'text-slate-600 hover:text-slate-900'
                      }`
                    }
                  >
                    • Specialty & Calibration Gases
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products/other"
                    className={({ isActive }) =>
                      `block p-1.5 rounded font-medium transition ${
                        isActive || data.slug === 'other'
                          ? 'text-sky-900 font-bold bg-sky-100/70'
                          : 'text-slate-600 hover:text-slate-900'
                      }`
                    }
                  >
                    • Dry Ice, Dewars & Hardware
                  </NavLink>
                </li>
              </ul>
            </div>

          </aside>

        </div>
      </main>
    </div>
  );
};

export default ProductSubPage;

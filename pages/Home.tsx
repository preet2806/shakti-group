import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Factory,
  Truck,
  ShieldCheck,
  Boxes,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Activity,
  FlaskConical,
  Droplet,
  Atom,
  Wind,
  Building2,
  ChevronRight,
  TrendingUp,
  FileCheck,
  Award,
  HeartPulse,
  Utensils
} from 'lucide-react';
import { STATS, DELIVERY_OPTIONS, GROUP_COMPANIES, TIMELINE, INDUSTRIES } from '../constants';
import SEO from '../components/SEO';

// Operating Manufacturing Sites Data
const MANUFACTURING_SITES = [
  {
    id: 'karjan-asu',
    badge: 'Cryogenic Air Separation',
    company: 'Shaktishree Air Private Limited (SAPL)',
    title: 'Karjan, Gujarat – 178 TPD Cryogenic Air Separation Unit',
    description:
      'Continuous air separation facility producing Liquid Oxygen (LOX), Liquid Medical Oxygen (LMO), Liquid Nitrogen (LIN), and Liquid Argon (LAR). Features dedicated cryogenic buffer storage tanks and automated tanker loading bays for continuous bulk dispatch.',
    capacity: '178 TPD Cryogenic ASU',
    purity: 'LOX ≥ 99.5% | LIN ≥ 99.999% | LAR ≥ 99.999%',
    location: 'Karjan, Dist. Vadodara, Gujarat',
    features: [
      '1000 KL LOX | 250 KL LIN | 35 KL LAR storage backup',
      'Continuous online gas chromatography analysis',
      'Direct pipeline and tanker distribution infrastructure'
    ],
    linkText: 'Explore Bulk Cryogenic Gases',
    linkPath: '/products/bulk-cryogenic',
    images: [
      'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/webp/DSC_5398.webp',
      'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/webp/DSC_5458%20%281%29.webp',
      'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/webp/DSC_5442.webp'
    ]
  },
  {
    id: 'co2-manufacturing',
    badge: 'Carbon Dioxide Recovery & Purification',
    company: 'Indore Carbonic',
    title: 'Ahmedabad, Indore & Hyderabad – Food-Grade & Industrial Liquid CO₂ Plants',
    description:
      'Dedicated carbon dioxide recovery, catalytic purification, and liquefaction facilities with a total manufacturing capacity of 270 TPD. Produces high-purity liquid CO₂ meeting E290 food-grade standards for beverage carbonation as well as industrial CO₂ and solid dry ice.',
    capacity: '270 TPD Liquid CO₂',
    purity: 'E290 Food Grade (≥ 99.9%) & Industrial Grade',
    location: 'Ahmedabad (Gujarat), Indore (Madhya Pradesh) & Hyderabad (Telangana)',
    features: [
      'Food-grade liquid storage and insulated road tanker fleet',
      'Solid dry ice extrusion (pellets and high-density blocks)',
      'Regional distribution hubs serving Western, Central & Southern India'
    ],
    linkText: 'Explore Carbon Dioxide Products',
    linkPath: '/products/bulk-cryogenic',
    images: [
      'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/Optimised%20images/CO2%20manufacturing%20control%20room.webp',
      'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/Optimised%20images/CO2%20manufacturing%20plant.webp',
      'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/Optimised%20images/Carbon%20dioxide%20recovery%20plant.webp'
    ]
  },
  {
    id: 'specialty-compression-plants',
    badge: 'DA Manufacturing, Hydrogen Refilling & Hubs',
    company: 'Shreeji Acetylene, Shakti Gases & Shakti Air Products',
    title: 'Savli, Ranoli & Por – Gas Manufacturing, Refilling & Synthesis Hubs',
    description:
      'Network of specialized production units and cylinder refilling stations across the Vadodara industrial corridor.',
    capacity: '6+ Refilling & Synthesis Hubs',
    purity: 'Industrial, High Purity (HP) & Ultra High Purity (UHP)',
    location: 'Savli, Ranoli GIDC & Por GIDC, Vadodara, Gujarat',
    features: [
      'Shreeji Acetylene: Dissolved Acetylene (DA) gas manufacturing, HP and UHP grade',
      'Shakti Gases: Hydrogen gas refilling in cylinders, mobile cylinder skids and high-pressure cascades',
      'High Purity (HP) and Ultra High Purity (UHP) grades available for specialized industrial and analytical needs',
      'Hydrostatic cylinder testing and PESO re-certification stations'
    ],
    linkText: 'Explore Industrial Cylinders',
    linkPath: '/products/industrial-cylinder',
    images: [
      'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/cylinders.webp',
      'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/packaging.webp',
      'https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/hydrogen.webp'
    ]
  }
];

const PlantCarousel: React.FC<{ data: typeof MANUFACTURING_SITES[0]; index: number }> = ({ data, index }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const isReverse = index % 2 !== 0;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % data.images.length);
    }, 4500 + index * 500);
    return () => clearInterval(timer);
  }, [data.images.length, index]);

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-7 shadow-xs hover:border-slate-300 transition mb-6 last:mb-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Content Column */}
        <div className={`lg:col-span-6 ${isReverse ? 'lg:order-2' : 'lg:order-1'} space-y-3.5`}>
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-sky-50 text-sky-800 text-xs font-semibold px-2.5 py-0.5 rounded border border-sky-200">
              {data.badge}
            </span>
            <span className="text-xs font-semibold text-slate-500 tracking-wide uppercase">
              {data.company}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
            {data.title}
          </h3>

          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-600 font-medium">
            <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
            <span>{data.location}</span>
          </div>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            {data.description}
          </p>

          {/* Key Specs Grid */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="bg-slate-50 p-2.5 sm:p-3 rounded-lg border border-slate-200">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-0.5">Rated Output</span>
              <span className="text-xs sm:text-sm font-bold text-slate-900">{data.capacity}</span>
            </div>
            <div className="bg-slate-50 p-2.5 sm:p-3 rounded-lg border border-slate-200">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-0.5">Purity Standard</span>
              <span className="text-xs sm:text-sm font-bold text-slate-900">{data.purity}</span>
            </div>
          </div>

          {/* Feature Points */}
          <div className="space-y-1.5 pt-1">
            {data.features.map((feat, fIdx) => (
              <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          <div className="pt-1">
            <NavLink
              to={data.linkPath}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-700 hover:text-sky-900 transition"
            >
              <span>{data.linkText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </NavLink>
          </div>
        </div>

        {/* Image Slider Column - NO overlay across image */}
        <div className={`lg:col-span-6 ${isReverse ? 'lg:order-1' : 'lg:order-2'} space-y-2`}>
          <div className="relative h-[250px] sm:h-[320px] w-full rounded-lg overflow-hidden border border-slate-200 bg-slate-100 shadow-xs">
            {data.images.map((img, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  i === currentImg ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img
                  src={img}
                  alt={`${data.title} plant view ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Slide Indicators */}
            <div className="absolute top-3 right-3 z-20 flex gap-1 bg-slate-950/80 p-1.5 rounded">
              {data.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImg(i)}
                  aria-label={`View photo ${i + 1}`}
                  className={`h-1.5 rounded-xs transition-all ${
                    i === currentImg ? 'bg-sky-400 w-4' : 'bg-white/50 w-2'
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between text-xs text-slate-500 px-1">
            <span className="font-medium text-slate-700">{data.company}</span>
            <span className="text-[11px]">Facility Photo {currentImg + 1} of {data.images.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="bg-white font-sans text-slate-900">
      <SEO
        title="Shakti Industrial Gases | Industrial & Medical Gas Manufacturer | India"
        description="Shakti Group operates large-scale Air Separation Units (ASUs), CO₂ recovery plants, 65+ cryogenic road tankers and refilling stations supplying LOX, LIN, LAR, LCO₂, and specialty gases."
        keywords="Industrial Gas Manufacturer India, Bulk Cryogenic Gas Supplier, Liquid Oxygen Plant, Liquid Nitrogen Gujarat, Karjan ASU, Liquid CO2 Manufacturer, Shakti Group"
      />

      {/* 1. HERO SECTION - Full Size Video Hero */}
      <div className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] flex items-center overflow-hidden bg-slate-950 border-b border-slate-800">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/Optimised%20images/air-separation-unit-karjan.webm" type="video/webm" />
          <source src="https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/Optimised%20images/air-separation-unit-karjan.mp4" type="video/mp4" />
        </video>

        {/* Subtle optical gradient scrim for crisp text legibility without artificial shadows */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-slate-950/20 sm:to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-22 w-full text-white">
          <div className="max-w-2xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900/80 border border-slate-700/80 text-sky-400 text-xs font-medium tracking-wide rounded-full backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>PESO & CCOE Approved Gas Manufacturing</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12]">
              25+ Years of <br className="hidden sm:inline" />
              <span className="text-sky-400">Industrial Gas Engineering</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-xl">
              Production, bulk cryogenic storage, and automated distribution of oxygen, nitrogen, argon, and carbon dioxide for industrial manufacturing across India.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <NavLink
                to="/products"
                className="inline-flex items-center justify-center bg-sky-600 hover:bg-sky-500 text-white font-semibold px-6 py-3 rounded-lg text-sm transition duration-150 shadow-sm"
              >
                View Gas Portfolio
              </NavLink>
              <NavLink
                to="/contact"
                className="inline-flex items-center justify-center bg-slate-900/70 hover:bg-slate-800 text-white border border-slate-700 font-semibold px-6 py-3 rounded-lg text-sm transition duration-150 backdrop-blur-sm"
              >
                Request Supply Quote
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* 2. OUR SCALE (Key operational metrics) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {STATS.map((stat, index) => (
            <div key={index} className="bg-white p-4 sm:p-5 rounded-lg border border-slate-200 shadow-xs">
              <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5">{stat.label}</div>
              <div className="text-xl sm:text-2xl font-extrabold text-slate-900">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. WHO WE ARE (Tangible operational overview) */}
      <section className="py-10 sm:py-12 bg-white border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-wider">
              <span className="w-6 h-0.5 bg-sky-600"></span>
              <span>Operating Profile</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
              Integrated Gas Manufacturing & Bulk Distribution Network
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Shakti Group operates an integrated network of cryogenic air separation units, carbon dioxide recovery & purification plants, cylinder refilling hubs, and a dedicated distribution fleet across Western, Central, and Southern India.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              From high-tonnage liquid deliveries via vacuum-insulated road tankers to high-purity cylinder manifolds, we provide complete supply chain infrastructure supporting steelworks, chemical refineries, pharmaceutical manufacturing, food & beverage processing, and healthcare facilities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200">
              <div className="space-y-1">
                <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Factory className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Cryogenic ASUs & CO₂</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">Continuous production of liquid LOX, LIN, LAR & 270 TPD Liquid CO₂</p>
              </div>
              <div className="space-y-1">
                <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Truck className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>65+ Tankers Fleet</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">GPS-tracked cryogenic road tankers with round-the-clock dispatch</p>
              </div>
              <div className="space-y-1">
                <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Safety Certified</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">PESO approved assets, ISO 9001/14001/45001, WHO-GMP, FDA & FSSAI certified</p>
              </div>
            </div>

            <div className="pt-2">
              <NavLink
                to="/company/our-group"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-700 hover:text-sky-900 transition"
              >
                <span>Explore Group Entities & Infrastructure</span>
                <ChevronRight className="w-4 h-4" />
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MANUFACTURING NETWORK (Our Operating Locations) */}
      <section className="py-10 sm:py-12 bg-slate-50 border-b border-slate-200" id="manufacturing-network">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-8 space-y-1.5">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-wider">
              <span className="w-6 h-0.5 bg-sky-600"></span>
              <span>Production Infrastructure</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Our Manufacturing Network
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Shakti operates primary production facilities, cryogenic distillation columns, and multi-gas refilling hubs strategically situated across Western, Central and Southern India.
            </p>
          </div>

          <div className="space-y-5">
            {MANUFACTURING_SITES.map((site, index) => (
              <PlantCarousel key={site.id} data={site} index={index} />
            ))}
          </div>

        </div>
      </section>

      {/* 5. FROM PRODUCTION TO DELIVERY (Supply Chain & Packaging Modes) */}
      <section className="py-10 sm:py-12 bg-slate-950 text-white" id="supply-capabilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-8 space-y-1.5">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider">
              <span className="w-6 h-0.5 bg-sky-400"></span>
              <span>Logistics & Distribution Chain</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              From Production to Delivery
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              We manage the complete journey from cryogenic distillation and catalytic purification to multi-modal delivery formats suited for every volume requirement.
            </p>
          </div>

          {/* 3-Step Supply Process */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            <div className="bg-slate-900 p-5 rounded-lg border border-slate-800 space-y-2.5">
              <div className="w-8 h-8 rounded bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-xs">
                01
              </div>
              <h3 className="text-sm font-bold text-white">Cryogenic Production & Buffer Storage</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                ASU distillation and CO₂ recovery units feed stationary bulk liquid vacuum-insulated buffer tanks with continuous online purity verification.
              </p>
            </div>

            <div className="bg-slate-900 p-5 rounded-lg border border-slate-800 space-y-2.5">
              <div className="w-8 h-8 rounded bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-xs">
                02
              </div>
              <h3 className="text-sm font-bold text-white">65+ Cryogenic Road Tanker Fleet</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dedicated vacuum-insulated tankers equipped with GPS tracking, digital flow meters, and decanting pumps for direct client tank decanting.
              </p>
            </div>

            <div className="bg-slate-900 p-5 rounded-lg border border-slate-800 space-y-2.5">
              <div className="w-8 h-8 rounded bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-xs">
                03
              </div>
              <h3 className="text-sm font-bold text-white">High-Pressure Compression & Cylinders</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dedicated high-pressure compression manifolds fill standard cylinders, MCP quad bundles, tube cascades, and tonners with batch chromatographic testing.
              </p>
            </div>
          </div>

          {/* Packaging Formats Grid */}
          <div className="space-y-3.5">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2.5">
              <Boxes className="w-4 h-4 text-sky-400" />
              <span>Multi-Format Packaging & Delivery Modes</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {DELIVERY_OPTIONS.map((opt, idx) => (
                <div key={idx} className="bg-slate-900 p-3 rounded-lg border border-slate-800 hover:border-slate-700 transition text-center flex flex-col items-center justify-between gap-2 group">
                  <div className="w-14 h-14 rounded bg-slate-950 border border-slate-800 flex items-center justify-center p-1.5 overflow-hidden">
                    <img
                      src={opt.image}
                      alt={opt.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition"
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-slate-300 line-clamp-2 leading-tight">
                    {opt.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. GAS PORTFOLIO */}
      <section className="py-10 sm:py-12 bg-white border-b border-slate-200" id="gas-portfolio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-wider">
                <span className="w-6 h-0.5 bg-sky-600"></span>
                <span>Product Offerings</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Industrial Gas Portfolio
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                Comprehensive range of bulk cryogenic liquids, compressed cylinder gases, and high-purity calibration mixtures.
              </p>
            </div>

            <NavLink
              to="/products"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-700 hover:text-sky-900 transition shrink-0"
            >
              <span>View Complete Catalog (21+ Gases)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </NavLink>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

            {/* Category 1 */}
            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 space-y-2.5">
              <div className="w-8 h-8 rounded bg-sky-100 text-sky-800 flex items-center justify-center">
                <Droplet className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Bulk & Cryogenic Liquids</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Liquid Oxygen (LOX), Liquid Nitrogen (LIN), Liquid Argon (LAR), and Liquid Carbon Dioxide (LCO₂) delivered by road tankers.
              </p>
              <ul className="space-y-1 text-xs text-slate-700 pt-2 border-t border-slate-200">
                <li className="flex items-center gap-1.5">• LOX (≥ 99.5% purity)</li>
                <li className="flex items-center gap-1.5">• LIN (≥ 99.999% purity)</li>
                <li className="flex items-center gap-1.5">• LAR (≥ 99.999% purity)</li>
                <li className="flex items-center gap-1.5">• E290 Food-Grade LCO₂</li>
              </ul>
              <NavLink to="/products/bulk-cryogenic" className="inline-block text-xs font-bold text-sky-700 pt-1.5 hover:underline">
                View Bulk Specs →
              </NavLink>
            </div>

            {/* Category 2 */}
            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 space-y-2.5">
              <div className="w-8 h-8 rounded bg-sky-100 text-sky-800 flex items-center justify-center">
                <Wind className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Industrial & Fuel Gases</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Compressed gases in individual 47L/50L cylinders and 16-cylinder MCP quads for cutting, welding, and fabrication.
              </p>
              <ul className="space-y-1 text-xs text-slate-700 pt-2 border-t border-slate-200">
                <li className="flex items-center gap-1.5">• Compressed O₂, N₂, Argon</li>
                <li className="flex items-center gap-1.5">• Dissolved Acetylene (DA)</li>
                <li className="flex items-center gap-1.5">• High-Pressure Hydrogen (H₂)</li>
                <li className="flex items-center gap-1.5">• Gaseous Carbon Dioxide</li>
              </ul>
              <NavLink to="/products/industrial-cylinder" className="inline-block text-xs font-bold text-sky-700 pt-1.5 hover:underline">
                View Cylinder Specs →
              </NavLink>
            </div>

            {/* Category 3 */}
            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 space-y-2.5">
              <div className="w-8 h-8 rounded bg-sky-100 text-sky-800 flex items-center justify-center">
                <FlaskConical className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">High-Purity & Calibration</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ultra-High Purity (Grade 5.0 to 6.0) gases and gravimetrically blended calibration mixtures for analytical laboratories.
              </p>
              <ul className="space-y-1 text-xs text-slate-700 pt-2 border-t border-slate-200">
                <li className="flex items-center gap-1.5">• Grade 5.0 & 6.0 UHP Gases</li>
                <li className="flex items-center gap-1.5">• Pure Helium (He Grade 5.5)</li>
                <li className="flex items-center gap-1.5">• NABL Traceable Mixtures</li>
                <li className="flex items-center gap-1.5">• Laser Gas Premixes</li>
              </ul>
              <NavLink to="/products/specialty-calibration" className="inline-block text-xs font-bold text-sky-700 pt-1.5 hover:underline">
                View UHP Specs →
              </NavLink>
            </div>

            {/* Category 4 */}
            <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 space-y-2.5">
              <div className="w-8 h-8 rounded bg-sky-100 text-sky-800 flex items-center justify-center">
                <Atom className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Specialty & Refrigerants</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Chemical process gases, electrical insulating dielectrics, cold-chain dry ice, and industrial fuel gases.
              </p>
              <ul className="space-y-1 text-xs text-slate-700 pt-2 border-t border-slate-200">
                <li className="flex items-center gap-1.5">• Sulphur Hexafluoride (SF₆)</li>
                <li className="flex items-center gap-1.5">• Solid Dry Ice (Pellets/Blocks)</li>
                <li className="flex items-center gap-1.5">• Hydrogen Chloride (HCl)</li>
                <li className="flex items-center gap-1.5">• Ethylene, Methane & Propane</li>
              </ul>
              <NavLink to="/products/other" className="inline-block text-xs font-bold text-sky-700 pt-1.5 hover:underline">
                View Specialty Specs →
              </NavLink>
            </div>

          </div>

        </div>
      </section>

      {/* 7. INDUSTRIES WE SERVE */}
      <section className="py-10 sm:py-12 bg-slate-50 border-b border-slate-200" id="industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-wider">
                <span className="w-6 h-0.5 bg-sky-600"></span>
                <span>Applications & Sectors</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Industries We Serve
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                Engineering gas supply tailored to specific operational and purity standards across diverse industrial sectors.
              </p>
            </div>

            <NavLink
              to="/industries"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-700 hover:text-sky-900 transition shrink-0"
            >
              <span>Explore All Industry Solutions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </NavLink>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {INDUSTRIES.map((ind, idx) => (
              <NavLink
                key={idx}
                to="/industries"
                className="bg-white p-5 sm:p-6 rounded-lg border border-slate-200 hover:border-slate-300 hover:shadow-xs transition group space-y-2.5"
              >
                <div className="w-8 h-8 rounded bg-slate-100 text-slate-800 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition">
                  <ind.icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-sky-700 transition">
                  {ind.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Engineered supply for manufacturing pipelines, continuous combustion, reactor inerting, and high-pressure applications.
                </p>
                <div className="text-xs font-bold text-sky-700 flex items-center gap-1 pt-1">
                  <span>View Sector Overview</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </NavLink>
            ))}
          </div>

        </div>
      </section>

      {/* 8. THE SHAKTI GROUP (Condensed group entities) */}
      <section className="py-10 sm:py-12 bg-slate-950 text-white" id="the-shakti-group">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-8 space-y-1.5">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider">
              <span className="w-6 h-0.5 bg-sky-400"></span>
              <span>Corporate Structure</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              The Shakti Group of Companies
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Shakti operates through 9 specialized operating companies, each managing dedicated manufacturing units, product lines, and regional distribution nodes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {GROUP_COMPANIES.map((company, idx) => (
              <div key={idx} className="bg-slate-900 p-4 sm:p-5 rounded-lg border border-slate-800 space-y-1.5 hover:border-slate-700 transition">
                <div className="flex items-center gap-2 text-sky-400">
                  <Building2 className="w-4 h-4 shrink-0" />
                  <h3 className="text-sm font-bold text-white truncate">{company.name}</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {company.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <NavLink
              to="/company/our-group"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-400 hover:text-sky-300 transition"
            >
              <span>View Full Group Entity Details & Plant Addresses</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </NavLink>
          </div>

        </div>
      </section>

      {/* 9. 25+ YEAR JOURNEY */}
      <section className="py-10 sm:py-12 bg-white border-b border-slate-200" id="journey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-8 space-y-1.5">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-wider">
              <span className="w-6 h-0.5 bg-sky-600"></span>
              <span>Evolutionary Timeline</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              25+ Years of Operational Evolution
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              A progressive track record of continuous manufacturing expansion, fleet investment, and infrastructure building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-5 sm:p-6 rounded-lg border border-slate-200 space-y-2.5 relative">
                <div className="text-xs font-bold text-sky-800 bg-sky-100/80 inline-block px-2.5 py-0.5 rounded">
                  {item.year}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <NavLink
              to="/company/about"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-700 hover:text-sky-900 transition"
            >
              <span>Read Complete Company History & Legacy</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </NavLink>
          </div>

        </div>
      </section>

      {/* 10. QUALITY & SAFETY (Statutory Certifications & PESO Approvals) */}
      <section className="py-10 sm:py-12 bg-slate-50 border-b border-slate-200" id="quality-safety">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-8 space-y-1.5">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-700 uppercase tracking-wider">
              <span className="w-6 h-0.5 bg-sky-600"></span>
              <span>Regulatory Compliance & Accreditations</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Statutory Approvals & Quality Certifications
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              All manufacturing plants, bulk storage installations, road tanker fleets, and filling infrastructure operate under strict statutory approvals and certified international management systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">

            {/* PESO Approved Assets */}
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded bg-sky-100 text-sky-800 flex items-center justify-center">
                  <Factory className="w-4 h-4" />
                </div>
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-sky-50 text-sky-800 border border-sky-200">
                  100% PESO Approved
                </span>
              </div>
              <h3 className="text-sm font-bold text-slate-900">PESO Approved Plants & Infrastructure</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                All production plants, cryogenic storage vessels, road tankers, tube cascades, and manifold filling stations are fully approved by the Petroleum and Explosives Safety Organization (PESO / CCOE).
              </p>
            </div>

            {/* ISO Certifications */}
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  ISO 9001 / 14001 / 45001
                </span>
              </div>
              <h3 className="text-sm font-bold text-slate-900">Integrated ISO Management Systems</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Certified Quality Management (ISO 9001:2015), Environmental Management (ISO 14001:2015), and Occupational Health & Safety (ISO 45001:2018) spanning production to delivery.
              </p>
            </div>

            {/* FDA License */}
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded bg-indigo-100 text-indigo-800 flex items-center justify-center">
                  <FileCheck className="w-4 h-4" />
                </div>
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-indigo-50 text-indigo-800 border border-indigo-200">
                  Drug Mfg License
                </span>
              </div>
              <h3 className="text-sm font-bold text-slate-900">FDA Licensed Manufacturing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Approved Food and Drug Administration (FDA) licenses for the manufacturing, filling, and distribution of Medical Gases including IP Medical Oxygen and healthcare gas solutions.
              </p>
            </div>

            {/* WHO-GMP Certificate */}
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded bg-amber-100 text-amber-800 flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
                  WHO-GMP Certified
                </span>
              </div>
              <h3 className="text-sm font-bold text-slate-900">WHO-GMP Compliant Operations</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                World Health Organization Good Manufacturing Practices (WHO-GMP) certification ensuring strict cleanliness, validated batch testing, trace impurity controls, and full analytical traceability.
              </p>
            </div>

            {/* FSSAI */}
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded bg-cyan-100 text-cyan-800 flex items-center justify-center">
                  <Utensils className="w-4 h-4" />
                </div>
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-cyan-50 text-cyan-800 border border-cyan-200">
                  FSSAI Certified
                </span>
              </div>
              <h3 className="text-sm font-bold text-slate-900">FSSAI Food-Grade Certification</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Food Safety and Standards Authority of India (FSSAI) certified for food-grade Liquid Carbon Dioxide (E290), Food-Grade Nitrogen for beverage preservation/inerting, and solid Dry Ice.
              </p>
            </div>

            {/* Hydrostatic Testing */}
            <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-xs space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded bg-slate-100 text-slate-800 flex items-center justify-center">
                  <Activity className="w-4 h-4" />
                </div>
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-slate-100 text-slate-800 border border-slate-200">
                  In-House Station
                </span>
              </div>
              <h3 className="text-sm font-bold text-slate-900">Hydrostatic Testing & PESO Stamping</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                In-house peso approved cylinder testing station performing mandatory periodic hydrostatic stretch testing, internal boroscope checks, valving, and PESO neck stamping.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 11. CONTINUING GROWTH */}
      <section className="py-10 bg-white border-b border-slate-200" id="growth">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 p-5 sm:p-6 rounded-lg border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="space-y-1.5 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-bold text-sky-800">
                <TrendingUp className="w-4 h-4 text-sky-700" />
                <span>CONTINUING CAPACITY EXPANSION</span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                Ongoing Additions to Regional Supply Infrastructure
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                As part of our continuous manufacturing investments, two additional high-capacity carbon dioxide recovery and purification units are under installation in Hazira, scheduled for commissioning by mid-2027 to expand regional dispatch capacity.
              </p>
            </div>

            <NavLink
              to="/company/infrastructure"
              className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 font-bold px-4 py-2.5 rounded-lg text-xs tracking-wider uppercase transition shrink-0 shadow-xs"
            >
              View Infrastructure Details
            </NavLink>
          </div>
        </div>
      </section>

      {/* 12. REQUEST A QUOTE / CTA */}
      <section className="py-12 sm:py-14 bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider">
            <span className="w-6 h-0.5 bg-sky-400"></span>
            <span>Industrial Gas Procurement</span>
            <span className="w-6 h-0.5 bg-sky-400"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Consult Our Engineering & Gas Supply Team
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed">
            Whether you require bulk cryogenic tanker contracts, on-site storage tank installation, scheduled cylinder deliveries, or specialty gas mixtures, our operations desk is ready to assist.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <NavLink
              to="/contact"
              className="bg-sky-600 hover:bg-sky-700 text-white font-bold px-6 py-3 rounded-lg text-xs sm:text-sm tracking-wide uppercase transition shadow-sm inline-flex items-center gap-2"
            >
              <span>Request a Supply Quote</span>
              <ArrowRight className="w-4 h-4" />
            </NavLink>
            <NavLink
              to="/services"
              className="bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 font-bold px-6 py-3 rounded-lg text-xs sm:text-sm tracking-wide uppercase transition"
            >
              Explore Gas Solutions
            </NavLink>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
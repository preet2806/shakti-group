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
      'Continuous air separation facility producing high-purity Liquid Oxygen (LOX), Liquid Nitrogen (LIN), and Liquid Argon (LAR). Features dedicated cryogenic buffer storage tanks and automated tanker loading bays for continuous bulk dispatch.',
    capacity: '178 TPD Cryogenic ASU',
    purity: 'LOX ≥ 99.5% | LIN ≥ 99.999% | LAR ≥ 99.999%',
    location: 'Karjan, Dist. Vadodara, Gujarat',
    features: [
      'Low-pressure cryogenic distillation columns',
      'Dedicated bays for 35 KL cryogenic road tankers',
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
      'Catalytic oxidation and multi-stage liquefaction',
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
      'Network of specialized production units and cylinder refilling stations across the Vadodara industrial corridor. Shreeji Acetylene is a dedicated Dissolved Acetylene (DA) gas manufacturer, and Shakti Gases is a leading Hydrogen gas refiller with High Purity (HP) and Ultra High Purity (UHP) capabilities.',
    capacity: '6+ Refilling & Synthesis Hubs',
    purity: 'Industrial, High Purity (HP) & Ultra High Purity (UHP)',
    location: 'Savli, Ranoli GIDC & Por GIDC, Vadodara, Gujarat',
    features: [
      'Shreeji Acetylene: Calcium carbide chemical generators for Dissolved Acetylene (DA) gas manufacturing',
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
    }, 4000 + index * 500);
    return () => clearInterval(timer);
  }, [data.images.length, index]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-10 border-b border-gray-200 last:border-b-0">
      {/* Content Column */}
      <div className={`lg:col-span-6 ${isReverse ? 'lg:order-2' : 'lg:order-1'} space-y-4`}>
        <div className="flex flex-wrap items-center gap-2">
          <span className="bg-blue-50 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full border border-blue-200/60">
            {data.badge}
          </span>
          <span className="text-xs font-medium text-gray-500">
            {data.company}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
          {data.title}
        </h3>

        <div className="flex items-center gap-1.5 text-sm text-gray-600">
          <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
          <span>{data.location}</span>
        </div>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          {data.description}
        </p>

        {/* Key Specs Grid */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
            <span className="text-xs font-medium text-gray-500 block mb-0.5">Rated Output</span>
            <span className="text-sm sm:text-base font-bold text-slate-900">{data.capacity}</span>
          </div>
          <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
            <span className="text-xs font-medium text-gray-500 block mb-0.5">Purity Standard</span>
            <span className="text-sm font-bold text-slate-900">{data.purity}</span>
          </div>
        </div>

        {/* Feature Points */}
        <div className="space-y-2 pt-1">
          {data.features.map((feat, fIdx) => (
            <div key={fIdx} className="flex items-start gap-2 text-sm text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        <div className="pt-2">
          <NavLink
            to={data.linkPath}
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 transition"
          >
            <span>{data.linkText}</span>
            <ArrowRight className="w-4 h-4" />
          </NavLink>
        </div>
      </div>

      {/* Image Slider Column */}
      <div className={`lg:col-span-6 ${isReverse ? 'lg:order-1' : 'lg:order-2'} relative h-[320px] sm:h-[380px] w-full rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-gray-100`}>
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs sm:text-sm">
              <span className="font-semibold">{data.company}</span>
              <span className="text-xs opacity-80">Photo {i + 1} of {data.images.length}</span>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute top-3 right-3 z-20 flex gap-1.5 bg-black/40 backdrop-blur-sm p-1.5 rounded-full">
          {data.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImg(i)}
              aria-label={`View photo ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentImg ? 'bg-white w-4' : 'bg-white/50'
              }`}
            />
          ))}
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

      {/* 1. HERO SECTION (Retained existing visual identity, video, overlays & styling) */}
      <div className="relative bg-slate-900 h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/Optimised%20images/air%20seperation%20unit%20at%20karjan.webp"
          >
            <source src="https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/Optimised%20images/air-separation-unit-karjan.webm" type="video/webm" />
            <source src="https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/Optimised%20images/air-separation-unit-karjan.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1
              className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ textShadow: '0 2px 12px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.9)' }}
            >
              25+ Years <br /> Of Industrial Gas Solutions
            </h1>
            <p
              className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed"
              style={{ textShadow: '0 1px 6px rgba(0,0,0,0.8)' }}
            >
              Production, bulk storage and distribution of oxygen, nitrogen, argon, and carbon dioxide for nationwide industries.
            </p>

            <div className="flex flex-wrap gap-4">
              <NavLink
                to="/products"
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg text-sm sm:text-base transition shadow-md"
              >
                View Gas Portfolio
              </NavLink>
              <NavLink
                to="/contact"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-6 py-3 rounded-lg text-sm sm:text-base transition backdrop-blur-sm"
              >
                Request Supply Quote
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* 2. OUR SCALE (Key operational metrics) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition duration-300">
              <div className="text-sm text-gray-500 font-medium mb-1">{stat.label}</div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-700">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. WHO WE ARE (Tangible operational overview) */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider">
              <span className="w-8 h-0.5 bg-blue-600 rounded-full"></span>
              <span>Operating Profile</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
              Integrated Gas Manufacturing & Bulk Distribution Network
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Shakti Group operates an integrated network of cryogenic air separation units, carbon dioxide recovery & purification plants, cylinder refilling hubs, and a dedicated distribution fleet across Western, Central, and Southern India.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              From high-tonnage liquid deliveries via vacuum-insulated road tankers to high-purity cylinder manifolds, we provide complete supply chain infrastructure supporting steelworks, chemical refineries, pharmaceutical manufacturing, food & beverage processing, and healthcare facilities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
              <div className="space-y-1.5">
                <div className="text-base font-bold text-gray-900 flex items-center gap-2">
                  <Factory className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>Cryogenic ASUs & CO₂</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">Continuous production of liquid LOX, LIN, LAR & 270 TPD Liquid CO₂</p>
              </div>
              <div className="space-y-1.5">
                <div className="text-base font-bold text-gray-900 flex items-center gap-2">
                  <Truck className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>65+ Tankers Fleet</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">GPS-tracked cryogenic road tankers with round-the-clock dispatch</p>
              </div>
              <div className="space-y-1.5">
                <div className="text-base font-bold text-gray-900 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>PESO, ISO, FDA & FSSAI Certified</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">100% PESO approved assets, ISO 9001/14001/45001, WHO-GMP, FDA license & FSSAI certified</p>
              </div>
            </div>

            <div className="pt-2">
              <NavLink
                to="/company/our-group"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 transition"
              >
                <span>Explore Group Entities & Infrastructure</span>
                <ChevronRight className="w-4 h-4" />
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MANUFACTURING NETWORK (Our Operating Locations) */}
      <section className="py-16 bg-white" id="manufacturing-network">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider">
              <span className="w-8 h-0.5 bg-blue-600 rounded-full"></span>
              <span>Production Infrastructure</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Our Operating Manufacturing Network
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Shakti operates primary production facilities, cryogenic distillation columns, and multi-gas refilling hubs strategically situated across Western and Central India.
            </p>
          </div>

          <div className="space-y-4">
            {MANUFACTURING_SITES.map((site, index) => (
              <PlantCarousel key={site.id} data={site} index={index} />
            ))}
          </div>

        </div>
      </section>

      {/* 5. FROM PRODUCTION TO DELIVERY (Supply Chain & Packaging Modes) */}
      <section className="py-16 bg-slate-900 text-white" id="supply-capabilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-12 space-y-3">
            <span className="bg-blue-900/60 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full border border-blue-700">
              Logistics & Distribution Chain
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              From Production to Delivery
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We manage the complete journey from cryogenic distillation and catalytic purification to multi-modal delivery formats suited for every volume requirement.
            </p>
          </div>

          {/* 3-Step Supply Process */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700/80 space-y-3">
              <div className="w-9 h-9 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="text-base font-bold text-white">Cryogenic Production & Buffer Storage</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                ASU distillation and CO₂ recovery units feed stationary bulk liquid vacuum-insulated buffer tanks with continuous online purity verification.
              </p>
            </div>

            <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700/80 space-y-3">
              <div className="w-9 h-9 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="text-base font-bold text-white">65+ Cryogenic Road Tanker Fleet</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Dedicated vacuum-insulated tankers equipped with GPS tracking, digital flow meters, and decanting pumps for direct client tank decanting.
              </p>
            </div>

            <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700/80 space-y-3">
              <div className="w-9 h-9 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="text-base font-bold text-white">High-Pressure Compression & Cylinders</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Dedicated high-pressure compression manifolds fill standard cylinders, MCP quad bundles, tube cascades, and tonners with batch chromatographic testing.
              </p>
            </div>
          </div>

          {/* Packaging Formats Grid */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <Boxes className="w-5 h-5 text-blue-400" />
              <span>Multi-Format Packaging & Delivery Modes</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
              {DELIVERY_OPTIONS.map((opt, idx) => (
                <div key={idx} className="bg-slate-800/50 p-3.5 rounded-xl border border-slate-700/60 hover:border-blue-500 transition text-center flex flex-col items-center justify-between gap-2 group">
                  <div className="w-14 h-14 rounded-lg bg-slate-900/80 flex items-center justify-center p-1.5 overflow-hidden">
                    <img
                      src={opt.image}
                      alt={opt.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition"
                    />
                  </div>
                  <span className="text-xs font-medium text-slate-200 line-clamp-2 leading-tight">
                    {opt.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. GAS PORTFOLIO (Concise, structured overview) */}
      <section className="py-16 bg-slate-50 border-b border-gray-200" id="gas-portfolio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider">
                <span className="w-8 h-0.5 bg-blue-600 rounded-full"></span>
                <span>Product Offerings</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Industrial Gas Portfolio
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Comprehensive range of bulk cryogenic liquids, compressed cylinder gases, and high-purity calibration mixtures.
              </p>
            </div>

            <NavLink
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 transition shrink-0"
            >
              <span>View Complete Catalog (21+ Gases)</span>
              <ArrowRight className="w-4 h-4" />
            </NavLink>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Category 1 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                <Droplet className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900">Bulk & Cryogenic Liquids</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Liquid Oxygen (LOX), Liquid Nitrogen (LIN), Liquid Argon (LAR), and Liquid Carbon Dioxide (LCO₂) delivered by road tankers.
              </p>
              <ul className="space-y-1.5 text-sm text-gray-700 pt-2 border-t border-gray-100">
                <li className="flex items-center gap-1.5">• LOX (≥ 99.5% purity)</li>
                <li className="flex items-center gap-1.5">• LIN (-196°C cryo liquid)</li>
                <li className="flex items-center gap-1.5">• LAR (≥ 99.999% purity)</li>
                <li className="flex items-center gap-1.5">• E290 Food-Grade LCO₂</li>
              </ul>
              <NavLink to="/products/bulk-cryogenic" className="inline-block text-sm font-semibold text-blue-700 pt-2 hover:underline">
                View Bulk Specs →
              </NavLink>
            </div>

            {/* Category 2 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                <Wind className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900">Industrial & Fuel Gases</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Compressed gases in individual 47L/50L cylinders and 16-cylinder MCP quads for cutting, welding, and fabrication.
              </p>
              <ul className="space-y-1.5 text-sm text-gray-700 pt-2 border-t border-gray-100">
                <li className="flex items-center gap-1.5">• Compressed O₂, N₂, Argon</li>
                <li className="flex items-center gap-1.5">• Dissolved Acetylene (DA)</li>
                <li className="flex items-center gap-1.5">• High-Pressure Hydrogen (H₂)</li>
                <li className="flex items-center gap-1.5">• Gaseous Carbon Dioxide</li>
              </ul>
              <NavLink to="/products/industrial-cylinder" className="inline-block text-sm font-semibold text-blue-700 pt-2 hover:underline">
                View Cylinder Specs →
              </NavLink>
            </div>

            {/* Category 3 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                <FlaskConical className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900">High-Purity & Calibration</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Ultra-High Purity (Grade 5.0 to 6.0) gases and gravimetrically blended calibration mixtures for analytical laboratories.
              </p>
              <ul className="space-y-1.5 text-sm text-gray-700 pt-2 border-t border-gray-100">
                <li className="flex items-center gap-1.5">• Grade 5.0 & 6.0 UHP Gases</li>
                <li className="flex items-center gap-1.5">• Pure Helium (He Grade 5.5)</li>
                <li className="flex items-center gap-1.5">• NABL Traceable Mixtures</li>
                <li className="flex items-center gap-1.5">• Laser Gas Premixes</li>
              </ul>
              <NavLink to="/products/specialty-calibration" className="inline-block text-sm font-semibold text-blue-700 pt-2 hover:underline">
                View UHP Specs →
              </NavLink>
            </div>

            {/* Category 4 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                <Atom className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-gray-900">Specialty & Refrigerants</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Chemical process gases, electrical insulating dielectrics, cold-chain dry ice, and industrial fuel gases.
              </p>
              <ul className="space-y-1.5 text-sm text-gray-700 pt-2 border-t border-gray-100">
                <li className="flex items-center gap-1.5">• Sulphur Hexafluoride (SF₆)</li>
                <li className="flex items-center gap-1.5">• Solid Dry Ice (Pellets/Blocks)</li>
                <li className="flex items-center gap-1.5">• Hydrogen Chloride (HCl)</li>
                <li className="flex items-center gap-1.5">• Ethylene, Methane & Propane</li>
              </ul>
              <NavLink to="/products/other" className="inline-block text-sm font-semibold text-blue-700 pt-2 hover:underline">
                View Specialty Specs →
              </NavLink>
            </div>

          </div>

        </div>
      </section>

      {/* 7. INDUSTRIES WE SERVE (Concise sector grid) */}
      <section className="py-16 bg-white" id="industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider">
                <span className="w-8 h-0.5 bg-blue-600 rounded-full"></span>
                <span>Applications & Sectors</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Industries We Serve
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Engineering gas supply tailored to specific operational and purity standards across diverse industrial sectors.
              </p>
            </div>

            <NavLink
              to="/industries"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 transition shrink-0"
            >
              <span>Explore All Industry Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </NavLink>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind, idx) => (
              <NavLink
                key={idx}
                to="/industries"
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-md transition group space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition">
                  <ind.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-700 transition">
                  {ind.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Engineered supply for manufacturing pipelines, continuous combustion, reactor inerting, and high-pressure applications.
                </p>
                <div className="text-sm font-semibold text-blue-600 flex items-center gap-1 pt-1">
                  <span>View Sector Overview</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </NavLink>
            ))}
          </div>

        </div>
      </section>

      {/* 8. THE SHAKTI GROUP (Condensed group entities) */}
      <section className="py-16 bg-slate-900 text-white" id="the-shakti-group">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-10 space-y-2">
            <span className="bg-blue-900/60 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full border border-blue-700">
              Corporate Structure
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              The Shakti Group of Companies
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Shakti operates through 9 specialized operating companies, each managing dedicated manufacturing units, product lines, and regional distribution nodes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {GROUP_COMPANIES.map((company, idx) => (
              <div key={idx} className="bg-slate-800/70 p-5 rounded-xl border border-slate-700/80 space-y-2 hover:border-blue-500 transition">
                <div className="flex items-center gap-2 text-blue-400">
                  <Building2 className="w-4 h-4 shrink-0" />
                  <h3 className="text-sm sm:text-base font-bold text-white truncate">{company.name}</h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                  {company.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <NavLink
              to="/company/our-group"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition"
            >
              <span>View Full Group Entity Details & Plant Addresses</span>
              <ArrowRight className="w-4 h-4" />
            </NavLink>
          </div>

        </div>
      </section>

      {/* 9. 25+ YEAR JOURNEY (Evolutionary timeline moved lower on the page) */}
      <section className="py-16 bg-white border-b border-gray-200" id="journey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider">
              <span className="w-8 h-0.5 bg-blue-600 rounded-full"></span>
              <span>Evolutionary Timeline</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              25+ Years of Operational Evolution
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              A progressive track record of continuous manufacturing expansion, fleet investment, and infrastructure building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3 relative">
                <div className="text-xs font-bold text-blue-700 bg-blue-100/70 inline-block px-2.5 py-1 rounded">
                  {item.year}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <NavLink
              to="/company/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 transition"
            >
              <span>Read Complete Company History & Legacy</span>
              <ArrowRight className="w-4 h-4" />
            </NavLink>
          </div>

        </div>
      </section>

      {/* 10. QUALITY & SAFETY (Statutory Certifications & PESO Approvals) */}
      <section className="py-16 bg-slate-50 border-b border-gray-200" id="quality-safety">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider">
              <span className="w-8 h-0.5 bg-blue-600 rounded-full"></span>
              <span>Regulatory Compliance & Accreditations</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Statutory Approvals & Quality Certifications
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              All manufacturing plants, bulk storage installations, road tanker fleets, and filling infrastructure operate under strict statutory approvals and certified international management systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* PESO Approved Assets */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                  <Factory className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200">
                  100% PESO Approved
                </span>
              </div>
              <h3 className="text-base font-bold text-gray-900">PESO Approved Plants & Infrastructure</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                All production plants, cryogenic storage vessels, road tankers, tube cascades, and manifold filling stations are fully approved by the Petroleum and Explosives Safety Organization (PESO / CCOE).
              </p>
            </div>

            {/* ISO Certifications */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  ISO 9001 / 14001 / 45001
                </span>
              </div>
              <h3 className="text-base font-bold text-gray-900">Integrated ISO Management Systems</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Certified Quality Management (ISO 9001:2015), Environmental Management (ISO 14001:2015), and Occupational Health & Safety (ISO 45001:2018) spanning production to delivery.
              </p>
            </div>

            {/* FDA License */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                  <FileCheck className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-800 border border-indigo-200">
                  Drug Mfg License
                </span>
              </div>
              <h3 className="text-base font-bold text-gray-900">FDA Licensed Manufacturing</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Approved Food and Drug Administration (FDA) licenses for the manufacturing, filling, and distribution of Medical Gases including IP Medical Oxygen and healthcare gas solutions.
              </p>
            </div>

            {/* WHO-GMP Certificate */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                  WHO-GMP Certified
                </span>
              </div>
              <h3 className="text-base font-bold text-gray-900">WHO-GMP Compliant Operations</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                World Health Organization Good Manufacturing Practices (WHO-GMP) certification ensuring strict cleanliness, validated batch testing, trace impurity controls, and full analytical traceability.
              </p>
            </div>

            {/* FSSAI */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                  <Utensils className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-50 text-cyan-800 border border-cyan-200">
                  FSSAI Certified
                </span>
              </div>
              <h3 className="text-base font-bold text-gray-900">FSSAI Food-Grade Certification</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Food Safety and Standards Authority of India (FSSAI) certified for food-grade Liquid Carbon Dioxide (E290), Food-Grade Nitrogen for beverage preservation/inerting, and solid Dry Ice.
              </p>
            </div>

            {/* Hydrostatic Testing */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                  <Activity className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200">
                  In-House Station
                </span>
              </div>
              <h3 className="text-base font-bold text-gray-900">Hydrostatic Testing & PESO Stamping</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                In-house cylinder testing station performing mandatory 5-year periodic water-jacket hydrostatic stretch testing, internal boroscope checks, valving, and PESO neck stamping.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 11. CONTINUING GROWTH (Small, grounded concluding section) */}
      <section className="py-12 bg-white border-b border-gray-200" id="growth">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50/50 p-6 sm:p-8 rounded-2xl border border-blue-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-800">
                <TrendingUp className="w-4 h-4 text-blue-700" />
                <span>CONTINUING CAPACITY EXPANSION</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                Ongoing Additions to Regional Supply Infrastructure
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                As part of our continuous manufacturing investments, two additional high-capacity carbon dioxide recovery and purification units are under installation in Hazira, scheduled for commissioning by mid-2027 to expand regional dispatch capacity.
              </p>
            </div>

            <NavLink
              to="/company/infrastructure"
              className="bg-white hover:bg-gray-50 text-blue-700 border border-blue-300 font-semibold px-5 py-2.5 rounded-lg text-sm transition shrink-0 shadow-sm"
            >
              View Infrastructure Details
            </NavLink>
          </div>
        </div>
      </section>

      {/* 12. REQUEST A QUOTE / CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="bg-blue-900/70 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full border border-blue-700">
            Industrial Gas Procurement
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Consult Our Engineering & Gas Supply Team
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Whether you require bulk cryogenic tanker contracts, on-site storage tank installation, scheduled cylinder deliveries, or specialty gas mixtures, our operations desk is ready to assist.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <NavLink
              to="/contact"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3 rounded-lg text-sm sm:text-base transition shadow-lg inline-flex items-center gap-2"
            >
              <span>Request a Supply Quote</span>
              <ArrowRight className="w-4 h-4" />
            </NavLink>
            <NavLink
              to="/services"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-7 py-3 rounded-lg text-sm sm:text-base transition backdrop-blur-sm"
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


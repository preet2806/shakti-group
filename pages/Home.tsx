import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { STATS, VALUES } from '../constants';

const EXPANSIONS = [
  {
    id: 1,
    company: "Shaktishree Air Private Limited (SAPL)",
    title: "Karjan, Gujarat – 178 TPD Air Separation Unit",
    description:
      "The Karjan ASU is a 178 TPD cryogenic air separation facility designed for continuous production of liquid oxygen, nitrogen, and argon. Commissioned in April 2026, the plant is engineered for bulk supply to steel, refinery, EPC, and manufacturing customers, with dedicated liquid storage and tanker dispatch infrastructure.",
    linkText: "View Gas Portfolio",
    linkPath: "/products",
    images: [
      "https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/Optimised%20images/ASU%20purity%20analysis%20lab%20setup.webp",
      "https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/Optimised%20images/LIN%20LOX%20LAR%20Manufacturing%20unit.webp",
      "https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/Optimised%20images/air%20seperation%20unit%20at%20karjan.webp"
    ]
  },
  {
    id: 2,
    company: "Indore Carbonic",
    title: "Food & Industrial CO₂ Manufacturing Capacity Expansion",
    description:
      "Indore Carbonic operates dedicated carbon dioxide recovery and purification units supplying food-grade and industrial CO₂. Four plants are operational in Ahmedabad, Hyderabad and Indore, while two additional high-capacity units are under installation and scheduled for commissioning by mid-2026, enabling regional redundancy and higher dispatch volumes.",
    linkText: "View Gas Portfolio",
    linkPath: "/products",
    images: [
      "https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/Optimised%20images/CO2%20manufacturing%20control%20room.webp",
      "https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/Optimised%20images/CO2%20manufacturing%20plant.webp",
      "https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/Optimised%20images/Carbon%20dioxide%20recovery%20plant.webp"
    ]
  }
];

const ExpansionBlock: React.FC<{ data: typeof EXPANSIONS[0]; index: number }> = ({ data, index }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const isReverse = index % 2 !== 0;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % data.images.length);
    }, 3000 + (index * 500));
    return () => clearInterval(timer);
  }, [data.images.length, index]);

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 last:mb-0`}>
      <div className={`order-2 ${isReverse ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="flex items-center gap-2 mb-4">
          <span className="w-12 h-1 bg-shakti-blue rounded-full"></span>
          <h4 className="text-shakti-blue font-bold uppercase tracking-widest text-sm">
            Manufacturing Infrastructure
          </h4>
        </div>
        <h3 className="text-0.5xl font-semibold text-gray-500 mb-2">
          {data.company}
        </h3>
        <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
          {data.title}
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
          {data.description}
        </p>
        <NavLink
          to={data.linkPath}
          className="inline-flex items-center justify-center px-8 py-3 border-2 border-shakti-blue text-base font-bold rounded-lg text-shakti-blue hover:bg-shakti-blue hover:text-white transition duration-300"
        >
          {data.linkText}
        </NavLink>
      </div>

      <div className={`relative order-1 ${isReverse ? 'lg:order-1' : 'lg:order-2'} group h-[400px] w-full max-w-lg mx-auto lg:max-w-none`}>
        <div className={`absolute -inset-4 ${isReverse ? 'bg-blue-50' : 'bg-blue-100'} rounded-2xl transform ${isReverse ? '-rotate-2' : 'rotate-3'} group-hover:rotate-0 transition duration-500`}></div>

        {data.images.map((img, i) => {
          const isActive = i === currentImg;
          const isNext = i === (currentImg + 1) % data.images.length;

          let zIndex = 0;
          let opacity = 0;
          let scale = 0.9;
          let translateY = '0px';

          if (isActive) {
            zIndex = 20;
            opacity = 1;
            scale = 1;
          } else if (isNext) {
            zIndex = 10;
            opacity = 0.6;
            scale = 0.95;
            translateY = '10px';
          }

          return (
            <div
              key={i}
              className="absolute inset-0 rounded-2xl shadow-2xl overflow-hidden bg-gray-100 transition-all duration-700 ease-in-out"
              style={{
                opacity,
                zIndex,
                transform: `scale(${scale}) translateY(${translateY})`,
              }}
            >
              <img
                src={img}
                alt={`${data.company} industrial gas manufacturing facility view ${i + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="bg-white">
      {/* SEO Meta */}
      <title>
        Shakti Industrial Gases | Industrial Gas Manufacturer in India | Oxygen, Nitrogen, Argon, CO₂
      </title>
      <meta
        name="description"
        content="Shakti Industrial Gases is a leading Indian manufacturer of liquid oxygen, liquid nitrogen, liquid argon and liquid carbon dioxide. Operating large-scale ASU and CO₂ plants in Gujarat with ISO & PESO compliance."
      />
      <meta
        name="keywords"
        content="Industrial Gas Manufacturer India, Bulk Gas Supplier, Liquid Oxygen Supplier, Liquid Nitrogen Manufacturer, Liquid Argon Plant, Food Grade CO2 Manufacturer, Karjan ASU, Ahmedabad CO2 Plant, Shakti Industrial Gases"
      />

      <div className="relative bg-slate-900 h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/Optimised%20images/air%20seperation%20unit%20at%20karjan.webp"
            alt="Cryogenic tanker fleet of Shakti Industrial Gases supplying liquid oxygen and nitrogen"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              25+ Years <br /> Of Industrial Gas Solutions
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Production, bulk storage and distribution of oxygen, nitrogen, argon, and carbon dioxide for nationwide industries.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition duration-300">
              <div className="text-sm text-gray-600 font-medium mb-2">{stat.label}</div>
              <div className="text-2xl md:text-4xl font-bold text-blue-500">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="py-10 bg-white overflow-hidden" id="expansion">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900">
              Strategic Manufacturing Growth & Capacity Expansion
            </h2>
            <p className="text-gray-600 text-lg">
              Continuous investment in gas manufacturing infrastructure to meet India’s growing industrial gas demand.
            </p>
          </div>

          <div className="flex flex-col">
            {EXPANSIONS.map((exp, index) => (
              <ExpansionBlock key={exp.id} data={exp} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Core Industrial Gas Manufacturing Expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Engineering-driven operations delivering consistent purity, safety, and supply reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {VALUES.map((value, index) => (
              <div key={index} className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 border border-gray-100">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-shakti-blue mb-8">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-10">
              <div className="max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Safety, Compliance & Operating Discipline
                </h2>
                <p className="text-slate-400 mb-10 max-w-3xl mx-auto text-lg">
                    All manufacturing and refilling plants, storage tanks, and cryogenic tankers operate under PESO approval with ISO 9001:2015 certified quality systems and defined operating procedures.                </p>
                <div className="flex justify-center">
                  <div className="bg-white/10 backdrop-blur-md rounded-full p-4 px-8 border border-white/20">
                    <span className="text-white font-bold tracking-wider">
                      ISO 9001:2015 CERTIFIED
                    </span>
                  </div>
                </div>
              </div>
      </section>
    </div>
  );
};

export default Home;
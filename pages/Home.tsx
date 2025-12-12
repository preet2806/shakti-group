import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { STATS, VALUES } from '../constants';

const EXPANSIONS = [
  {
    id: 1,
    company: "Shaktishree Air Private Limited (SAPL)",
    title: "Karjan ASU: A New Era of Supply",
    description: "Our flagship expansion in Karjan features a massive 178 TPD Air Separation Unit. Commencing operations by Jan 2026, this facility is poised to revolutionize liquid gas deliveries across India, reinforcing our commitment to national reach and supply chain excellence.",
    linkText: "View Products",
    linkPath: "/products",
    images: [
      "https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/Screenshot%202025-12-04%20at%204.01.31%E2%80%AFPM.png",
      "https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/Screenshot%202025-12-04%20at%203.43.12%E2%80%AFPM.png",
      "https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/Screenshot%202025-12-04%20at%203.42.59%E2%80%AFPM.png"
    ]
  },
  {
    id: 2,
    company: "Indore Carbonic",
    title: "Aggressive CO₂ Capacity Expansion",
    description: "We are rapidly scaling our Carbon Dioxide production with 4 new dedicated units. One unit is already fully operational in Ahmedabad, ensuring immediate supply, while 3 additional high-capacity plants are in the pipeline and scheduled for commissioning by mid-2026.",
    linkText: "View Products",
    linkPath: "/products",
    images: [
      "https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-01-01%20at%2010.38.10%20AM.jpeg", // Pipes/Industrial
      "https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-01-01%20at%2010.38.42%20AM.jpeg", // Tanks
      "https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-01-01%20at%2010.41.06%20AM.jpeg"  // Cylinders
    ]
  }
];

const ExpansionBlock: React.FC<{ data: typeof EXPANSIONS[0]; index: number }> = ({ data, index }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const isReverse = index % 2 !== 0;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % data.images.length);
    }, 3000 + (index * 500)); // Offset timing slightly for natural feel
    return () => clearInterval(timer);
  }, [data.images.length, index]);

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32 last:mb-0`}>
      {/* Content Side */}
      <div className={`order-2 ${isReverse ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="flex items-center gap-2 mb-4">
          <span className="w-12 h-1 bg-shakti-blue rounded-full"></span>
          <h4 className="text-shakti-blue font-bold uppercase tracking-widest text-sm">Major Expansion</h4>
        </div>
        <h3 className="text-0.5xl font-semibold text-gray-500 mb-2">{data.company}</h3>
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

      {/* Image Side with Stack Effect */}
      <div className={`relative order-1 ${isReverse ? 'lg:order-1' : 'lg:order-2'} group h-[400px] w-full max-w-lg mx-auto lg:max-w-none`}>
        <div className={`absolute -inset-4 ${isReverse ? 'bg-blue-50' : 'bg-blue-100'} rounded-2xl transform ${isReverse ? '-rotate-2' : 'rotate-3'} group-hover:rotate-0 transition duration-500`}></div>

        {data.images.map((img, i) => {
           // Calculate styling for stack effect
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
             opacity = 0.6; // Peek behind
             scale = 0.95;
             translateY = '10px'; // Offset slightly down
           } else {
             zIndex = 0;
             opacity = 0;
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
                  alt={`${data.title} View ${i+1}`}
                  className="w-full h-full object-cover"
               />
               {/* Gradient overlay for depth */}
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
      {/* Hero Section */}
      <div className="relative bg-slate-900 h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/home_hero.png"
            alt="Industrial Gas Truck"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Industrial Gases: Technical <br/>
              Excellence, Guaranteed <br/>
              Continuity, Nationwide Reach
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Leading the industry with a commitment to quality, reliability, and nationwide logistics for all your industrial gas needs.
            </p>
            <NavLink
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out shadow-lg shadow-blue-500/30"
            >
              Request a Quote
            </NavLink>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition duration-300">
              <div className="text-sm text-gray-600 font-medium mb-2">{stat.label}</div>
              <div className="text-4xl font-bold text-blue-500">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Major Expansions Section */}
            <section className="py-10 bg-white overflow-hidden" id="expansion">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="text-center mb-20 max-w-3xl mx-auto">
                   <h2 className="text-4xl font-bold text-gray-900 mb-">Strategic Growth & Expansion</h2>
                   <p className="text-gray-600 text-lg">
                     We are aggressively expanding our production capabilities and footprint to serve the growing demands of the Indian market.
                   </p>
                 </div>

                 <div className="flex flex-col">
                   {EXPANSIONS.map((exp, index) => (
                     <ExpansionBlock key={exp.id} data={exp} index={index} />
                   ))}
                 </div>
              </div>
            </section>

      {/* Core Values Section */}
            <section className="py-24 bg-slate-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Expertise</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Driving industry standards through specialized knowledge and unwavering commitment.
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

            {/* Footer CTA */}
                  <section className="bg-gray-900 py-10">
                     <div className="max-w-5xl mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Unwavering Commitment to Safety & Compliance</h2>
                        <p className="text-slate-400 mb-10 max-w-3xl mx-auto text-lg">
                           We operate with the highest standards of safety, strictly adhering to PESO (Petroleum and Explosives Safety Organisation) compliance across all our plants, tankers, and refilling stations.
                        </p>
                        <div className="flex justify-center">
                           <div className="bg-white/10 backdrop-blur-md rounded-full p-4 px-8 border border-white/20">
                              <span className="text-white font-bold tracking-wider">ISO 9001:2015 CERTIFIED</span>
                           </div>
                        </div>
                     </div>
                  </section>
    </div>
  );
};

export default Home;
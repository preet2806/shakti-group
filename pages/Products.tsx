import React, { useState } from 'react';
import { PRODUCTS, DELIVERY_OPTIONS, INDUSTRIES } from '../constants';
import { ArrowRight } from 'lucide-react';

type Category = "liquid" | "industrial" | "high-purity" | "specialty";

const Products: React.FC = () => {
  const [filter, setFilter] = useState<Category>("liquid");

  const filteredProducts = PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative h-[500px] overflow-hidden">
        <img
          src="https://qe2eq2zzuxmkvacf.public.blob.vercel-storage.com/product_hero.png"
          alt="Product Portfolio Fleet"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
              Our Products & Delivery Solutions
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Delivering technical excellence and unmatched logistical reliability for your industrial gas needs.
            </p>
            <button
              onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition shadow-lg shadow-blue-500/30"
            >
              Explore Our Products
            </button>
          </div>
        </div>
      </div>

      {/* Portfolio */}
      <section id="portfolio" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Comprehensive Product Portfolio</h2>

        {/* Filter Controls */}
        <div className="flex flex-wrap bg-gray-100 p-1 rounded-lg w-fit mb-12 gap-2">
          {["liquid","industrial","high-purity","specialty"].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat as Category)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition ${
                filter === cat ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {(() => {
                switch (cat) {
                  case "liquid": return "Cryogenic Liquids";
                  case "industrial": return "Industrial & Fuel Gases";
                  case "high-purity": return "High-Purity / Calibration Gases";
                  case "specialty": return "Specialty & Chemical Gases";
                }
              })()}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="rounded-xl overflow-hidden mb-4 relative h-64">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-lg mb-1">{product.title}</h3>
                  <p className="text-gray-300 text-xs line-clamp-2">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Delivery Options */}
             <section className="py-12 bg-gray-50">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-20">
                     <h2 className="text-3xl font-bold text-gray-900 mb-6">Flexible & Reliable Supply Options</h2>
                     <p className="text-gray-600 max-w-2xl mx-auto text-lg">From bulk cryogenic tankers to individual cylinders, we provide a wide spectrum of supply modes to match your scale and requirements.</p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {DELIVERY_OPTIONS.map((option, index) => (
                      <div
                        key={index}
                        className="bg-white p-3 rounded-xl text-center shadow-sm hover:shadow-lg transition duration-300 border border-gray-100 group"
                      >
                        <div className="h-32 mb-3 overflow-hidden rounded-lg mx-auto bg-white relative">
                          <img
                            src={option.image}
                            alt={option.title}
                            className="w-24 h-24 mx-auto object-contain group-hover:scale-105 transition duration-500"
                           />
                        </div>

                        <h3 className="font-bold text-gray-900 text-sm">
                          {option.title}
                        </h3>
                      </div>
                    ))}
                  </div>

               </div>
             </section>

             {/* Industries */}
             <section className="py-12 bg-white">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-20 text-center">Powering Progress Across Key Industries</h2>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 text-center">
                    {INDUSTRIES.map((industry, index) => (
                      <div key={index} className="flex flex-col items-center group cursor-pointer">
                         <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center text-shakti-blue mb-6 group-hover:bg-shakti-blue group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg">
                            <industry.icon className="w-10 h-10" />
                         </div>
                         <h3 className="text-sm font-bold text-gray-900 max-w-[140px] leading-tight group-hover:text-shakti-blue transition-colors">{industry.name}</h3>
                      </div>
                    ))}
                  </div>
               </div>
             </section>
    </div>
  );
};

export default Products;

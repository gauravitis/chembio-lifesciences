'use client';
import { useEffect } from 'react';
import Image from 'next/image';

const Brands = () => {
  const brands = [
    { name: 'Merck', logo: '/brands/merck.svg' },
    { name: 'SRL', logo: '/brands/srl.svg' },
    { name: 'Sigma Aldrich', logo: '/brands/sigma.svg' },
    { name: 'Honeywell', logo: '/brands/honeywell.svg' },
    { name: 'Borosil', logo: '/brands/borosil.svg' },
    { name: 'Thermo Fischer', logo: '/brands/thermo.svg' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Trusted Brands
          </span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group relative flex items-center justify-center p-6 backdrop-blur-sm border border-white/10 rounded-xl
                hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 ease-in-out cursor-pointer"
            >
              <div className="text-2xl text-gray-300 group-hover:text-white transition-all duration-300">
                {brand.name}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-300 mt-8">
          We partner with leading brands to provide you with the highest quality products
        </p>
      </div>
    </section>
  );
};

export default Brands;

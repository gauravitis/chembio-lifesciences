'use client';
import React, { useState } from 'react';

const Products: React.FC = () => {
  const categories = [
    {
      title: 'Chemical Reagents',
      description: 'High-purity chemicals for precise research and analysis',
      icon: '⚗️',
      items: ['Analytical Reagents', 'Organic Chemicals', 'Inorganic Compounds', 'Solvents'],
    },
    {
      title: 'Lab Equipment',
      description: 'State-of-the-art equipment for modern laboratories',
      icon: '🔬',
      items: ['Microscopes', 'Analyzers', 'Measuring Instruments', 'Lab Furniture'],
    },
    {
      title: 'Diagnostic Tools',
      description: 'Advanced tools for accurate diagnostics',
      icon: '🧪',
      items: ['Test Kits', 'Diagnostic Reagents', 'Clinical Analyzers', 'Monitoring Devices'],
    },
    {
      title: 'Research Consumables',
      description: 'Essential supplies for daily research needs',
      icon: '🧬',
      items: ['Glassware', 'Plasticware', 'Filters', 'Safety Equipment'],
    },
  ];

  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Product Categories
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="grid grid-cols-2 gap-4 h-fit">
            {categories.map((category, index) => (
              <div
                key={category.title}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 backdrop-blur-sm ${
                  activeCategory === index
                    ? 'bg-white/10 shadow-lg scale-105 border-2 border-purple-500/30'
                    : 'bg-white/5 hover:bg-white/10 border border-white/10'
                }`}
                onClick={() => setActiveCategory(index)}
              >
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-300">
                  {category.description}
                </p>
              </div>
            ))}
          </div>

          <div className="backdrop-blur-sm bg-white/5 rounded-xl p-8 border border-white/10">
            <div className="text-4xl mb-4">
              {categories[activeCategory].icon}
            </div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4">
              {categories[activeCategory].title}
            </h3>
            <p className="text-gray-300 mb-6">
              {categories[activeCategory].description}
            </p>
            <ul className="space-y-3">
              {categories[activeCategory].items.map((item) => (
                <li
                  key={item}
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <span className="mr-2 text-purple-400">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <button className="mt-8 px-6 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

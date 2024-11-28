'use client';

import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

// Demo products data
const demoProducts = [
  {
    id: 'CB-001',
    name: 'Laboratory Glass Beaker Set',
    category: 'Glassware',
    brand: 'Borosil',
    description: 'High-quality borosilicate glass beaker set, includes 50ml, 100ml, 250ml, and 500ml beakers',
    price: '₹2,499'
  },
  {
    id: 'CB-002',
    name: 'Digital pH Meter',
    category: 'Instruments',
    brand: 'Thermo Fisher',
    description: 'Professional-grade digital pH meter with automatic temperature compensation',
    price: '₹12,999'
  },
  {
    id: 'CB-003',
    name: 'Sodium Hydroxide (NaOH)',
    category: 'Chemicals',
    brand: 'Merck',
    description: 'Analytical grade sodium hydroxide pellets, 500g',
    price: '₹899'
  },
  {
    id: 'CB-004',
    name: 'Magnetic Stirrer with Hot Plate',
    category: 'Equipment',
    brand: 'SRL',
    description: 'Digital magnetic stirrer with ceramic hot plate, 0-2000 RPM',
    price: '₹15,999'
  },
  {
    id: 'CB-005',
    name: 'Micropipette Set',
    category: 'Lab Supplies',
    brand: 'Sigma-Aldrich',
    description: 'Adjustable volume micropipette set with stands',
    price: '₹8,999'
  },
  {
    id: 'CB-006',
    name: 'Hydrochloric Acid (HCl)',
    category: 'Chemicals',
    brand: 'Honeywell',
    description: 'Laboratory grade hydrochloric acid, 2.5L',
    price: '₹1,299'
  },
  {
    id: 'CB-007',
    name: 'Laboratory Safety Goggles',
    category: 'Safety Equipment',
    brand: 'Borosil',
    description: 'Chemical splash and impact resistant safety goggles',
    price: '₹499'
  },
  {
    id: 'CB-008',
    name: 'Analytical Balance',
    category: 'Instruments',
    brand: 'Thermo Fisher',
    description: 'High-precision analytical balance, 0.0001g readability',
    price: '₹89,999'
  }
];

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(demoProducts);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories
  const categories = ['All', ...new Set(demoProducts.map(product => product.category))];

  // Filter products based on search term and category
  useEffect(() => {
    const filtered = demoProducts.filter(product => {
      const matchesSearch = (
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.id.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <main className="relative min-h-screen flex flex-col items-center">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

      {/* Content Container */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-white">Our Products</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Research Grade Solutions
            </span>
          </h1>
          <div className="h-1.5 w-40 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by product name or catalogue ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white 
                  focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50
                  transition-all duration-300 backdrop-blur-sm pl-14"
              />
              <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full border border-white/10 backdrop-blur-sm
                  transition-all duration-300 hover:bg-white/10
                  ${selectedCategory === category 
                    ? 'bg-white/20 text-white' 
                    : 'bg-white/5 text-gray-300'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group backdrop-blur-sm bg-white/5 rounded-3xl p-6 shadow-2xl border border-white/10
                hover:bg-white/10 transition-all duration-300 ease-in-out"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-sm text-gray-300">
                  {product.id}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
              <p className="text-gray-400 mb-2">{product.brand}</p>
              <p className="text-gray-300 mb-4 text-sm">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  {product.price}
                </span>
                <button className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 
                  transition-all duration-300 text-sm">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No products found matching your search criteria.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default ProductsPage;

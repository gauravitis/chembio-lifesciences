'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo } from 'react';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  specifications: string;
  imageUrl: string;
  price: string;
  stock: string;
  tags: string[];
}

interface ProductListProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
}

const ProductList = ({ products, onEdit, onDelete }: ProductListProps) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'stock'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [stockFilter, setStockFilter] = useState<'all' | 'in' | 'out'>('all');

  const filteredAndSortedProducts = useMemo(() => {
    return products
      .filter(product => {
        const matchesCategory = selectedCategory === 'all' || product?.category === selectedCategory;
        const matchesSearch = searchQuery === '' || (
          (product?.name?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
          (product?.description?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
          (product?.tags || []).some(tag => (tag?.toLowerCase() || '').includes(searchQuery.toLowerCase()))
        );
        const matchesPriceRange = 
          (!priceRange.min || !product?.price || parseFloat(product.price) >= parseFloat(priceRange.min)) &&
          (!priceRange.max || !product?.price || parseFloat(product.price) <= parseFloat(priceRange.max));
        const matchesStock = 
          stockFilter === 'all' ||
          (stockFilter === 'in' && product?.stock && parseInt(product.stock) > 0) ||
          (stockFilter === 'out' && (!product?.stock || parseInt(product.stock) === 0));

        return matchesCategory && matchesSearch && matchesPriceRange && matchesStock;
      })
      .sort((a, b) => {
        let comparison = 0;
        if (sortBy === 'name') {
          comparison = (a?.name || '').localeCompare(b?.name || '');
        } else if (sortBy === 'price') {
          const priceA = a?.price ? parseFloat(a.price) : 0;
          const priceB = b?.price ? parseFloat(b.price) : 0;
          comparison = priceA - priceB;
        } else if (sortBy === 'stock') {
          const stockA = a?.stock ? parseInt(a.stock) : 0;
          const stockB = b?.stock ? parseInt(b.stock) : 0;
          comparison = stockA - stockB;
        }
        return sortOrder === 'asc' ? comparison : -comparison;
      });
  }, [products, selectedCategory, searchQuery, sortBy, sortOrder, priceRange, stockFilter]);

  const toggleSortOrder = () => {
    setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
          />
        </div>

        <div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white
              focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
          >
            <option value="all" className="bg-gray-900">All Categories</option>
            <option value="chemicals" className="bg-gray-900">Chemicals</option>
            <option value="equipment" className="bg-gray-900">Equipment</option>
            <option value="consumables" className="bg-gray-900">Consumables</option>
          </select>
        </div>

        <div className="flex space-x-2">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'stock')}
            className="flex-1 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white
              focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
          >
            <option value="name" className="bg-gray-900">Sort by Name</option>
            <option value="price" className="bg-gray-900">Sort by Price</option>
            <option value="stock" className="bg-gray-900">Sort by Stock</option>
          </select>
          <button
            onClick={toggleSortOrder}
            className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white
              hover:bg-white/20 transition-all duration-300"
          >
            {sortOrder === 'asc' ? '↑' : '↓'}
          </button>
        </div>

        <select
          value={stockFilter}
          onChange={(e) => setStockFilter(e.target.value as 'all' | 'in' | 'out')}
          className="w-full px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white
            focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
        >
          <option value="all" className="bg-gray-900">All Stock</option>
          <option value="in" className="bg-gray-900">In Stock</option>
          <option value="out" className="bg-gray-900">Out of Stock</option>
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="flex space-x-4">
        <input
          type="number"
          placeholder="Min Price"
          value={priceRange.min}
          onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
          className="w-32 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
        />
        <span className="text-white self-center">-</span>
        <input
          type="number"
          placeholder="Max Price"
          value={priceRange.max}
          onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
          className="w-32 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
        />
      </div>

      {/* Results Count */}
      <div className="text-sm text-gray-400">
        Showing {filteredAndSortedProducts.length} of {products.length} products
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredAndSortedProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="backdrop-blur-sm bg-white/5 rounded-3xl p-6 border border-white/10"
            >
              <div className="aspect-w-16 aspect-h-9 mb-4 relative">
                <Image
                  src={product.imageUrl || '/placeholder-image.jpg'}
                  alt={product.name || 'Product'}
                  fill
                  className="object-cover rounded-xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder-image.jpg';
                  }}
                />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{product.name || 'Untitled Product'}</h4>
              <p className="text-sm text-gray-300 mb-1">Category: {product.category || 'Uncategorized'}</p>
              <p className="text-sm text-gray-300 mb-1">Price: ₹{product.price || '0'}</p>
              <p className="text-sm text-gray-300 mb-2">Stock: {product.stock || '0'}</p>
              <p className="text-sm text-gray-400 mb-4 line-clamp-2">{product.description || 'No description available'}</p>
              
              {(product.tags || []).length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {(product.tags || []).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs rounded-full bg-white/10 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              
              <div className="flex space-x-3">
                <button
                  onClick={() => onEdit(product)}
                  className="flex-1 px-4 py-2 rounded-xl bg-white/10 text-white text-sm
                    hover:bg-white/20 transition-all duration-300"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(product.id)}
                  className="flex-1 px-4 py-2 rounded-xl bg-red-500/20 text-red-400 text-sm
                    hover:bg-red-500/30 transition-all duration-300"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredAndSortedProducts.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-400">No products found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;

'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Product } from '@/app/types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="relative h-48 w-full">
        <Image
          src={product.imageUrl || '/placeholder-product.jpg'}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-white line-clamp-2 flex-1 mr-2">
              {product.name}
            </h3>
            <span className="text-purple-300 font-mono text-base font-medium shrink-0">
              {product.catalogueId}
            </span>
          </div>
          <p className="text-gray-300 text-sm line-clamp-2">{product.description}</p>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">Brand</span>
            <span className="text-white">{product.brand}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">CAS Number</span>
            <span className="text-white font-mono">{product.casNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Pack Size</span>
            <span className="text-white">{product.packSize}</span>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-white">
              ₹{Number(product.price).toLocaleString('en-IN')}
            </span>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Enquire
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard; 
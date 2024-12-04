'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  specifications: string;
  imageUrl: string;
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${params.id}`);
        if (!response.ok) throw new Error('Failed to fetch product');
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError('Error fetching product details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading product details...</div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center">
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-8 max-w-md mx-auto text-center">
          <p className="text-red-400 mb-4">{error || 'Product not found'}</p>
          <button
            onClick={() => router.push('/products')}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden"
        >
          <div className="md:flex">
            {/* Product Image */}
            <div className="md:w-1/2">
              <img
                src={product.imageUrl || '/placeholder.png'}
                alt={product.name}
                className="w-full h-[400px] object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-3xl font-bold text-white mb-4">{product.name}</h1>
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                    {product.category}
                  </span>
                </div>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold text-white mb-2">Description</h2>
                    <p className="text-gray-300">{product.description}</p>
                  </div>
                  {product.specifications && (
                    <div>
                      <h2 className="text-xl font-semibold text-white mb-2">Specifications</h2>
                      <p className="text-gray-300">{product.specifications}</p>
                    </div>
                  )}
                </div>

                <div className="mt-8 space-x-4">
                  <button
                    onClick={() => router.push('/products')}
                    className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Back to Products
                  </button>
                  <button
                    onClick={() => window.location.href = '/contact'}
                    className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Inquire Now
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

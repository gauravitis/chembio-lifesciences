'use client';

import { useState, useEffect } from 'react';
import { UserButton } from '@clerk/nextjs';
import CsvUpload from '../components/CsvUpload';

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  specifications: string;
  imageUrl: string;
}

export default function ClientDashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    description: '',
    specifications: '',
    imageUrl: '',
  });

  // Fetch products
  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products');
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to fetch products: ${errorText}`);
      }
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      console.error('Error in fetchProducts:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Add new product
  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log('Sending product data:', newProduct);
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      console.log('Response status:', response.status);
      const responseData = await response.text();
      console.log('Response data:', responseData);

      if (!response.ok) {
        throw new Error(`Failed to add product: ${responseData}`);
      }
      
      await fetchProducts();
      setIsAddingProduct(false);
      setNewProduct({
        name: '',
        category: '',
        description: '',
        specifications: '',
        imageUrl: '',
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      console.error('Error adding product:', err);
    }
  };

  // Delete product
  const handleDeleteProduct = async (id: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return;
    
    try {
      const response = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to delete product: ${errorText}`);
      }
      
      await fetchProducts();
    } catch (err) {
      setError('Error deleting product');
      console.error(err);
    }
  };

  const handleUploadSuccess = () => {
    fetchProducts();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <UserButton afterSignOutUrl="/admin" />
        </div>

        {/* Error Display */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-8">
            <p className="text-red-400">{error}</p>
          </div>
        )}

        {/* Add Product Button */}
        <button
          onClick={() => setIsAddingProduct(true)}
          className="mb-8 px-6 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Add New Product
        </button>

        {/* Add Product Form */}
        {isAddingProduct && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
            <div className="bg-gray-800 p-6 rounded-xl w-full max-w-md">
              <h2 className="text-xl font-bold mb-4">Add New Product</h2>
              <form onSubmit={handleAddProduct} className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">Name</label>
                  <input
                    type="text"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    className="w-full px-3 py-2 bg-gray-700 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Category</label>
                  <input
                    type="text"
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                    className="w-full px-3 py-2 bg-gray-700 rounded-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Description</label>
                  <textarea
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                    className="w-full px-3 py-2 bg-gray-700 rounded-lg"
                    rows={3}
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Specifications</label>
                  <textarea
                    value={newProduct.specifications}
                    onChange={(e) => setNewProduct({ ...newProduct, specifications: e.target.value })}
                    className="w-full px-3 py-2 bg-gray-700 rounded-lg"
                    rows={3}
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Image URL</label>
                  <input
                    type="url"
                    value={newProduct.imageUrl}
                    onChange={(e) => setNewProduct({ ...newProduct, imageUrl: e.target.value })}
                    className="w-full px-3 py-2 bg-gray-700 rounded-lg"
                  />
                </div>
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700"
                  >
                    Add Product
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsAddingProduct(false)}
                    className="flex-1 px-4 py-2 bg-gray-600 rounded-lg hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Products List */}
        {loading ? (
          <div className="text-center">Loading products...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white/10 rounded-xl p-6 backdrop-blur-sm"
              >
                <div className="relative h-48 mb-4">
                  <img
                    src={product.imageUrl || '/placeholder.png'}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-purple-400 mb-2">{product.category}</p>
                <p className="text-gray-300 mb-4 line-clamp-2">{product.description}</p>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="w-full py-2 bg-red-600/20 text-red-400 rounded-lg hover:bg-red-600/30 transition-colors"
                >
                  Delete Product
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Add CSV Upload section */}
        <CsvUpload onUploadSuccess={handleUploadSuccess} />
      </div>
    </div>
  );
}

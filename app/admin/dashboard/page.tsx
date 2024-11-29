'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

// This would typically come from your backend
interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  specifications: string;
  imageUrl: string;
}

const AdminDashboard = () => {
  const router = useRouter();
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>(() => {
    // Initialize with some sample data
    if (typeof window !== 'undefined') {
      const savedProducts = localStorage.getItem('products');
      return savedProducts ? JSON.parse(savedProducts) : [];
    }
    return [];
  });

  useEffect(() => {
    // Check if admin is authenticated
    const isAuthenticated = localStorage.getItem('adminAuthenticated');
    if (!isAuthenticated) {
      router.push('/admin');
    }
  }, [router]);

  useEffect(() => {
    // Save products to localStorage whenever they change
    if (typeof window !== 'undefined') {
      localStorage.setItem('products', JSON.stringify(products));
    }
  }, [products]);

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    router.push('/admin');
  };

  const handleAddProduct = (productData: Omit<Product, 'id'>) => {
    const newProduct = {
      ...productData,
      id: Date.now().toString(),
    };
    setProducts(prev => [...prev, newProduct]);
    setShowAddProduct(false);
  };

  const handleEditProduct = (productData: Product) => {
    setProducts(prev => prev.map(p => p.id === productData.id ? productData : p));
    setEditingProduct(null);
  };

  const handleDeleteProduct = (id: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(prev => prev.filter(p => p.id !== id));
    }
  };

  const productStats = {
    total: products.length,
    chemicals: products.filter(p => p.category === 'chemicals').length,
    equipment: products.filter(p => p.category === 'equipment').length,
    consumables: products.filter(p => p.category === 'consumables').length,
  };

  return (
    <main className="relative min-h-screen flex flex-col">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      </div>

      {/* Content Container */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 z-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">
            <span className="block text-white">Admin Dashboard</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Manage Your Products
            </span>
          </h1>
          <button
            onClick={handleLogout}
            className="px-6 py-2 rounded-xl bg-white/10 border border-white/20 text-white
              hover:bg-white/20 transition-all duration-300"
          >
            Logout
          </button>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">Total Products</h3>
            <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {productStats.total}
            </p>
          </div>
          <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">Chemicals</h3>
            <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {productStats.chemicals}
            </p>
          </div>
          <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">Equipment</h3>
            <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400">
              {productStats.equipment}
            </p>
          </div>
          <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">Consumables</h3>
            <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              {productStats.consumables}
            </p>
          </div>
        </motion.div>

        {/* Product Management Section */}
        <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 border border-white/10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Product Management</h2>
            <button
              onClick={() => {
                setEditingProduct(null);
                setShowAddProduct(!showAddProduct);
              }}
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white
                hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              {showAddProduct ? 'Cancel' : 'Add New Product'}
            </button>
          </div>

          {(showAddProduct || editingProduct) && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                {editingProduct ? 'Edit Product' : 'Add New Product'}
              </h3>
              <ProductForm
                onSubmit={editingProduct ? handleEditProduct : handleAddProduct}
                initialData={editingProduct}
                isEditing={!!editingProduct}
              />
            </div>
          )}

          <ProductList
            products={products}
            onEdit={setEditingProduct}
            onDelete={handleDeleteProduct}
          />
        </div>
      </div>
    </main>
  );
};

export default AdminDashboard;

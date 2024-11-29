'use client';

import { useRouter } from 'next/navigation';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Services from './components/Services';
import Products from './components/Products';

export default function Home() {
  const router = useRouter();

  return (
    <main className="w-full min-h-screen">
      <Hero 
        onExploreProductsClick={() => router.push('/products')}
      />
      <Brands />
      <Services />
      <Products />
    </main>
  );
}
import Link from 'next/link';

interface HeroProps {
  onExploreProductsClick: () => void;
}

const Hero = ({ onExploreProductsClick }: HeroProps) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />

      {/* Content */}
      <div className="relative px-4 py-32 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
          <span className="block mb-4">Chembio Lifesciences</span>
          <span className="block leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Empowering Research
          </span>
        </h1>
        
        <p className="mt-8 text-xl sm:text-2xl text-gray-300 max-w-3xl leading-relaxed">
          Your Trusted Vendor for High-Quality Chemicals and Lab Equipment
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onExploreProductsClick}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium
              hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
            Explore Products
          </button>
          <Link 
            href="/contact"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium
              hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
            Get Quotes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

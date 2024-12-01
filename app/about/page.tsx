import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Chembio Lifesciences',
  description: 'Learn about Chembio Lifesciences, your trusted partner in scientific and industrial excellence since 2016.',
};

const values = [
  {
    title: "Customer Satisfaction",
    description: "We prioritize our customers' needs and strive to exceed their expectations with exceptional service and support.",
    icon: "🎯"
  },
  {
    title: "Technical Support",
    description: "Our expert team provides comprehensive technical guidance and support for all our products and services.",
    icon: "⚡"
  },
  {
    title: "Logistic Support",
    description: "Efficient supply chain management ensuring smooth delivery and handling of all products.",
    icon: "🔄"
  },
  {
    title: "Timely Delivery",
    description: "We understand the importance of time in research and industry, ensuring prompt and reliable delivery.",
    icon: "⏱"
  },
  {
    title: "Quality Assurance",
    description: "Rigorous quality control measures to ensure all products meet the highest industry standards.",
    icon: "✨"
  },
  {
    title: "Innovation Focus",
    description: "Continuously updating our product range to meet evolving research and industry needs.",
    icon: "💡"
  }
];

const AboutPage = () => {
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
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-white">About Us</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Our Journey & Mission
            </span>
          </h1>
          <div className="h-1.5 w-40 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Introduction Section */}
          <section className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/10">
            <div className="space-y-8 text-gray-300 text-lg sm:text-xl leading-relaxed">
              <p>
                Welcome to Chembio Lifesciences, your trusted partner in scientific and industrial excellence. Founded in 2016 by our visionary Managing Director, Jagdish Kaushal, Chembio Lifesciences has established itself as a premier vendor and partner for some of the most renowned national and international brands, including Merck, Sigma-Aldrich, SRL, Honeywell, Borosil, and Thermo Fisher.
              </p>
              <p>
                With a commitment to quality and innovation, we proudly supply a wide range of high-quality products to prestigious research institutes, leading colleges and universities, government organizations, and prominent industrial leaders. Our mission is to support cutting-edge research and development by providing reliable, top-tier products and exceptional service.
              </p>
              <p>
                At Chembio Lifesciences, we believe in fostering strong partnerships and upholding the highest standards in every interaction. Join us in advancing science and industry with trusted solutions tailored to your needs.
              </p>
            </div>
          </section>

          {/* Key Partners Section */}
          <section className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Our Key Partners
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {['Merck', 'Sigma-Aldrich', 'SRL', 'Honeywell', 'Borosil', 'Thermo Fisher'].map((partner) => (
                <div
                  key={partner}
                  className="p-6 text-center backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 
                    hover:bg-white/10 hover:scale-105 transition-all duration-300 ease-in-out"
                >
                  <span className="text-xl text-gray-200 font-medium">{partner}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Values Section */}
          <section className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Our Core Values
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="group p-6 backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 
                    hover:bg-white/10 hover:scale-105 transition-all duration-300 ease-in-out
                    flex flex-col items-center text-center"
                >
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r 
                    from-blue-400 via-purple-400 to-pink-400">
                    {value.title}
                  </h3>
                  <p className="text-gray-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;

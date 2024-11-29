'use client';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactPage = () => {
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
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-white">Contact Us</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Get in Touch
            </span>
          </h1>
          <div className="h-1.5 w-40 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/10"
        >
          <div className="grid gap-12 md:gap-16">
            {/* Location */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center transform rotate-3 hover:rotate-6 transition-transform duration-300">
                  <FaMapMarkerAlt className="text-white text-2xl" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Our Location
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Chembio Lifesciences<br />
                  L-10 Himalya Tower, Gyankand 2, Indirapuram<br />
                  Ghaziabad, U.P<br />
                  India - 201014
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center transform -rotate-3 hover:-rotate-6 transition-transform duration-300">
                  <FaEnvelope className="text-white text-2xl" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Email Us
                </h3>
                <p className="text-gray-300 text-lg">
                  sales.chembio@gmail.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center transform rotate-3 hover:rotate-6 transition-transform duration-300">
                  <FaPhone className="text-white text-2xl" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400">
                  Call Us
                </h3>
                <p className="text-gray-300 text-lg">
                  +91 1234 567890
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default ContactPage;

'use client';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="min-h-screen pt-20 pb-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Get in touch with us for any inquiries or support
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 backdrop-blur-lg bg-opacity-80 dark:bg-opacity-80"
        >
          <div className="grid gap-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                  Our Location
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Chembio Lifesciences<br />
                  L-10 Himalya Tower, Gyankand 2, Indirapuram<br />
                  Ghaziabad, U.P<br />
                  India - 201014
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <FaEnvelope className="text-white text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                  Email Us
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  sales.chembio@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center">
                  <FaPhone className="text-white text-xl" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-pink-600 to-red-600 text-transparent bg-clip-text">
                  Call Us
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  +91 1234 567890
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;

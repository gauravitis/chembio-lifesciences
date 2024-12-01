'use client';

import React from 'react';
import Image from 'next/image';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { cn } from '@/lib/utils';

// Team data
const leadership = [
  {
    name: "Jagdish Kaushal",
    title: "Managing Director",
    email: "jagdish.chembio@gmail.com",
    phone: "+91 1234567890",
    bio: "With over 20 years of experience in scientific equipment distribution, Jagdish Kaushal has been instrumental in establishing Chembio Lifesciences as a trusted partner for research institutions nationwide.",
    image: "/placeholder.jpg"
  },
  {
    name: "Rajni Kaushal",
    title: "Managing Director",
    email: "rajni.chembio@gmail.com",
    phone: "+91 1234567890",
    bio: "A visionary leader in scientific procurement, Rajni Kaushal brings strategic insights and a commitment to quality that has positioned Chembio Lifesciences at the forefront of scientific supply solutions.",
    image: "/placeholder.jpg"
  }
];

const experts = [
  {
    name: "Rajendra Jadaoun",
    role: "Administrator",
    email: "rajendra.chembio@gmail.com",
    phone: "+91 1234567890",
    image: "/placeholder.jpg"
  },
  {
    name: "Rohit",
    role: "Jr. Administrator",
    email: "rohit.chembio@gmail.com",
    phone: "+91 1234567890",
    image: "/placeholder.jpg"
  },
  {
    name: "Rajeev Yadav",
    role: "Logistic Head",
    email: "rajeev.chembio@gmail.com",
    phone: "+91 1234567890",
    image: "/placeholder.jpg"
  },
  {
    name: "Vikas Prajapati",
    role: "Accountant",
    email: "vikas.chembio@gmail.com",
    phone: "+91 1234567890",
    image: "/placeholder.jpg"
  },
  {
    name: "Pramod Shukla",
    role: "Sales Manager",
    email: "pramod.chembio@gmail.com",
    phone: "+91 1234567890",
    image: "/placeholder.jpg"
  },
  {
    name: "Akash",
    role: "Sales Manager",
    email: "akash.chembio@gmail.com",
    phone: "+91 1234567890",
    image: "/placeholder.jpg"
  },
  {
    name: "Ayush",
    role: "Sales Manager",
    email: "ayush.chembio@gmail.com",
    phone: "+91 1234567890",
    image: "/placeholder.jpg"
  },
  {
    name: "Rahul",
    role: "Sales Manager",
    email: "rohit.chembio@gmail.com",
    phone: "+91 1234567890",
    image: "/placeholder.jpg"
  }
];

const TeamPage: React.FC = () => {
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
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-white">Our Team</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Driving Innovation and Excellence
            </span>
          </h1>
          <div className="h-1.5 w-40 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>

        {/* Leadership Section */}
        <section className="mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Our Leadership
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((leader) => (
              <div
                key={leader.name}
                className="group backdrop-blur-sm bg-white/5 rounded-3xl p-8 shadow-2xl border border-white/10
                  hover:bg-white/10 transition-all duration-300 ease-in-out"
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-white/40 transition-all">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-semibold text-white mb-2">{leader.name}</h3>
                    <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                      {leader.title}
                    </p>
                    <p className="text-gray-300 mb-4 line-clamp-3 group-hover:line-clamp-none transition-all">
                      {leader.bio}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 items-center justify-center md:justify-start">
                      <a
                        href={`mailto:${leader.email}`}
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                      >
                        <FaEnvelope /> {leader.email}
                      </a>
                      <a
                        href={`tel:${leader.phone}`}
                        className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                      >
                        <FaPhone /> {leader.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experts Section */}
        <section>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Our Experts
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {experts.map((expert) => (
              <div
                key={expert.name}
                className="group backdrop-blur-sm bg-white/5 rounded-2xl p-6 shadow-xl border border-white/10
                  hover:bg-white/10 hover:scale-105 transition-all duration-300 ease-in-out
                  flex flex-col items-center text-center"
              >
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-white/40 transition-all mb-6">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{expert.name}</h3>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                  {expert.role}
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href={`mailto:${expert.email}`}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    <FaEnvelope /> {expert.email}
                  </a>
                  <a
                    href={`tel:${expert.phone}`}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    <FaPhone /> {expert.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default TeamPage;

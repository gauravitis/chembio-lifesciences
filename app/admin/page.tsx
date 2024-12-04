'use client';

import { useEffect } from 'react';
import { SignIn, useUser } from "@clerk/nextjs";
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function AdminLogin() {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push('/admin/dashboard');
    }
  }, [isLoaded, isSignedIn, router]);

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
      <div className="relative w-full max-w-md mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 shadow-2xl border border-white/10"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">
              <span className="block text-white mb-2">Admin Portal</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Chembio Lifesciences
              </span>
            </h1>
          </div>

          <SignIn 
            appearance={{
              elements: {
                formButtonPrimary: 
                  "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-80",
                card: "bg-transparent backdrop-blur-sm",
                headerTitle: "text-white",
                headerSubtitle: "text-gray-300",
                socialButtonsBlockButton: "bg-white/10 border border-white/20 text-white hover:bg-white/20",
                socialButtonsBlockButtonText: "text-white",
                dividerLine: "bg-white/20",
                dividerText: "text-white/60",
                formFieldLabel: "text-gray-300",
                formFieldInput: "bg-white/10 border border-white/20 text-white",
                footerActionLink: "text-purple-400 hover:text-purple-300",
              },
            }}
            redirectUrl="/admin/dashboard"
            afterSignInUrl="/admin/dashboard"
          />
        </motion.div>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chembio Lifesciences",
  description: "Innovative Solutions for Life Sciences",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: "bg-purple-600 hover:bg-purple-700",
          card: "bg-white dark:bg-gray-800",
          headerTitle: "text-gray-900 dark:text-white",
          socialButtonsBlockButton: "text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600",
        }
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider>
            <Navbar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

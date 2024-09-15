"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header({ navigateToPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (page) => {
    router.push(page);
  };

  return (
    <header className="flex justify-between fixed top-0 left-0 right-0 w-full items-center px-4 py-2 bg-white shadow-md md:px-8 z-50">
      <div className="flex items-center space-x-2 md:space-x-4">
        <Image src="/images/logo (2).png" alt="Logo" width={170} height={90} />
      </div>

      {/* Desktop Links */}
      <nav className="hidden md:flex space-x-12 align-middle justify-center items-center">
        <button
          className="bg-green-500 text-white py-2 px-6 rounded-lg shadow hover:bg-green-600"
          onClick={() => handleNavigation('/start')}
        >
          Get Started
        </button>

        <Link href="/" className="text-gray-600 hover:text-black">
          Home
        </Link>
        <Link href="/services" className="text-gray-600 hover:text-black">
          Services
        </Link>
        <Link href="/contact" className="text-gray-600 hover:text-black">
          Contact
        </Link>
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden flex flex-col justify-between w-6 h-6"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="w-full h-0.5 bg-black"></div>
        <div className="w-full h-0.5 bg-black"></div>
        <div className="w-full h-0.5 bg-black"></div>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="absolute top-full justify-center align-middle left-0 right-0 bg-white flex flex-col items-center py-4 z-40">
          <Link href="/" className="text-gray-600 hover:text-black" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-black" onClick={() => setIsMenuOpen(false)}>
            Services
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-black" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>

          <button
            className="bg-green-500 text-white py-2 px-6 rounded-lg shadow hover:bg-green-600"
            onClick={() => {
              handleNavigation('/start');
              setIsMenuOpen(false); // Close the menu after navigation
            }}
          >
            Get Started
          </button>
        </nav>
      )}
    </header>
  );
}

import React from 'react';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-gray-900">
          Homeflip<span className="text-[#5EEADC]">.ai</span>
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/#why-probate" className="text-gray-600 hover:text-gray-900 hidden lg:block transition-colors font-medium">
            Why Probate
          </Link>
          <Link href="/how-it-works" className="text-gray-600 hover:text-gray-900 hidden md:block transition-colors font-medium">
            How It Works
          </Link>
          <Link href="/pricing" className="text-gray-600 hover:text-gray-900 hidden md:block transition-colors font-medium">
            Pricing
          </Link>
          <Link
            href="/waitlist"
            className="btn-gradient px-6 py-2.5 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-[#5EEADC]/25 hover:scale-105"
          >
            Join Waitlist
          </Link>
        </div>
      </div>
    </nav>
  );
};

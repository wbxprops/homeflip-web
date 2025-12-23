import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="px-6 py-16 bg-gray-950 text-gray-400">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold text-white">
              Homeflip<span className="text-[#5EEADC]">.ai</span>
            </Link>
            <p className="mt-2 text-sm">Consistent off-market deals, powered by probate.</p>
          </div>

          <div className="flex gap-8 text-sm">
            <Link href="/about" className="hover:text-[#5EEADC] transition-colors">About</Link>
            <Link href="/faq" className="hover:text-[#5EEADC] transition-colors">FAQ</Link>
            <Link href="/privacy" className="hover:text-[#5EEADC] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#5EEADC] transition-colors">Terms of Service</Link>
            <Link href="/#waitlist" className="hover:text-[#5EEADC] transition-colors">Contact</Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          © {new Date().getFullYear()} Homeflip.ai. All rights reserved.
        </div>
      </div>
    </footer>
  );
};


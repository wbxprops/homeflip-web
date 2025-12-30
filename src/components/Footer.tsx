'use client';

import React from 'react';
import Link from 'next/link';
import { CookieSettingsButton } from './CookieConsent';

export const Footer = () => {
  return (
    <footer className="px-6 py-20 bg-white text-slate-400 border-t border-slate-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-20 mb-20">
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center mb-6 group">
              <img
                src="/logo-wordmark.png"
                alt="Homeflip.ai"
                className="h-10 group-hover:opacity-80 transition-opacity"
              />
            </Link>
            <p className="text-slate-500/70 max-w-sm leading-relaxed font-normal mb-4">
              The simplified, guided, AI-powered system for real estate investors who want consistent off-market deals powered by probate.
            </p>
            <div className="text-xs text-slate-400/70 leading-relaxed font-normal">
              <p className="font-medium text-slate-500/80">Whitebox Academy, LLC</p>
              <p>7800 Cooper Road, Suite 201</p>
              <p>Cincinnati, OH 45242</p>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-slate-400 font-medium uppercase text-xs tracking-[0.08em] mb-5">Navigation</h4>
            <div className="flex flex-col gap-3 font-sans text-sm font-normal leading-[1.8]">
              <Link href="/#probate-investing" className="text-slate-600/75 hover:text-slate-900 hover:opacity-100 transition-all">Why Probate</Link>
              <Link href="/#features" className="text-slate-600/75 hover:text-slate-900 hover:opacity-100 transition-all">How It Works</Link>
              <Link href="/claim-your-county" className="text-slate-600/90 hover:text-slate-900 hover:opacity-100 transition-all">Claim Your County</Link>
              <a href="https://app.homeflip.ai" className="text-slate-600/75 hover:text-slate-900 hover:opacity-100 transition-all">Sign In</a>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-slate-400 font-medium uppercase text-xs tracking-[0.08em] mb-5">Company</h4>
            <div className="flex flex-col gap-3 font-sans text-sm font-normal leading-[1.8]">
              <Link href="/about" className="text-slate-600/75 hover:text-slate-900 hover:opacity-100 transition-all">About Us</Link>
              <Link href="/values" className="text-slate-600/75 hover:text-slate-900 hover:opacity-100 transition-all">Our Values</Link>
              <Link href="/faq" className="text-slate-600/75 hover:text-slate-900 hover:opacity-100 transition-all">FAQ</Link>
              <Link href="/privacy" className="text-slate-600/75 hover:text-slate-900 hover:opacity-100 transition-all">Privacy Policy</Link>
              <Link href="/terms" className="text-slate-600/75 hover:text-slate-900 hover:opacity-100 transition-all">Terms of Service</Link>
              <CookieSettingsButton />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em]">
          <div>© {new Date().getFullYear()} Homeflip.ai. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-900 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Twitter</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Facebook</a>
          </div>
        </div>
      </div>
      
      {/* Footer Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#0891b2]/20 to-transparent" />
    </footer>
  );
};

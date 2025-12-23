import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="px-6 py-20 bg-[#0a0118] text-white/40 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#22d3ee] to-[#a855f7] flex items-center justify-center text-black font-black shadow-lg shadow-[#22d3ee]/20 group-hover:scale-110 transition-transform text-xs">
                H
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                Homeflip<span className="text-[#22d3ee]">.ai</span>
              </span>
            </Link>
            <p className="text-white/40 max-w-sm leading-relaxed font-medium">
              The simplified, guided, AI-powered system for real estate investors who want consistent off-market deals powered by probate.
            </p>
          </div>

          <div>
            <h4 className="text-white font-black uppercase text-xs tracking-[0.2em] mb-6">Navigation</h4>
            <div className="flex flex-col gap-4 text-sm font-bold">
              <Link href="/#why-probate" className="hover:text-[#22d3ee] transition-colors">Why Probate</Link>
              <Link href="/how-it-works" className="hover:text-[#22d3ee] transition-colors">How It Works</Link>
              <Link href="/pricing" className="hover:text-[#22d3ee] transition-colors">Pricing</Link>
              <Link href="/waitlist" className="hover:text-[#22d3ee] transition-colors">Join Waitlist</Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black uppercase text-xs tracking-[0.2em] mb-6">Legal</h4>
            <div className="flex flex-col gap-4 text-sm font-bold">
              <Link href="/about" className="hover:text-[#22d3ee] transition-colors">About Us</Link>
              <Link href="/faq" className="hover:text-[#22d3ee] transition-colors">FAQ</Link>
              <Link href="/privacy" className="hover:text-[#22d3ee] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[#22d3ee] transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em]">
          <div>© {new Date().getFullYear()} Homeflip.ai. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
          </div>
        </div>
      </div>
      
      {/* Footer Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#22d3ee]/20 to-transparent" />
    </footer>
  );
};

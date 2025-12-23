'use client';

import React from 'react';

export const FinalCTA = () => {
  return (
    <section id="waitlist" className="px-6 py-24 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#5EEADC]/10 via-transparent to-[#A855F7]/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#5EEADC]/10 to-[#A855F7]/10 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black">
          Ready to Build a <span className="text-[#5EEADC]">Predictable</span> Deal Pipeline?
        </h2>
        <p className="mt-8 text-xl text-gray-300 leading-relaxed">
          Join 500+ investors who are getting early access to Homeflip.ai. Be among the first to transform your business with AI-powered probate lead intelligence.
        </p>

        <form 
          className="mt-12 max-w-xl mx-auto" 
          onSubmit={(e: React.FormEvent) => {
            e.preventDefault();
            window.location.href = '/waitlist';
          }}
        >
          <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full text-lg bg-transparent text-white placeholder-gray-400 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="btn-gradient px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-lg hover:shadow-[#5EEADC]/30 hover:scale-[1.02] whitespace-nowrap"
            >
              Get Early Access
            </button>
          </div>
        </form>

        <p className="mt-6 text-sm text-gray-500">
          No spam. Just updates on our launch and early access pricing.
        </p>
      </div>
    </section>
  );
};


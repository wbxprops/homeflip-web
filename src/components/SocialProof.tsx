import React from 'react';

export const SocialProof = () => {
  return (
    <section className="py-12 px-6 bg-white border-y border-gray-50">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-10">
          Empowering High-Volume Investors At
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          <LogoPlaceholder name="RealEstate Pros" />
          <LogoPlaceholder name="DealFlow Inc" />
          <LogoPlaceholder name="Probate Partners" />
          <LogoPlaceholder name="InvestorHQ" />
          <LogoPlaceholder name="WealthBuilder" />
        </div>
      </div>
    </section>
  );
};

const LogoPlaceholder = ({ name }: { name: string }) => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 rounded bg-gray-900" />
    <span className="text-xl font-black text-gray-900 tracking-tighter">{name}</span>
  </div>
);


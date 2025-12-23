import React from 'react';

export const SocialProof = () => {
  return (
    <section className="py-12 px-6 bg-[#0a0118] border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-[10px] font-black text-white/20 uppercase tracking-[0.4em] mb-10">
          Empowering High-Volume Investors At
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale hover:grayscale-0 hover:opacity-60 transition-all duration-700">
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
  <div className="flex items-center gap-2 group">
    <div className="w-8 h-8 rounded bg-white/10 group-hover:bg-[#22d3ee] transition-colors" />
    <span className="text-xl font-black text-white tracking-tighter">{name}</span>
  </div>
);

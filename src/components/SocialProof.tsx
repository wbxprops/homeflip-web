import React from 'react';

export const SocialProof = () => {
  return (
    <section className="py-12 px-6 bg-white border-y border-slate-100">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-10">
          Empowering High-Volume Investors At
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          <LogoPlaceholder name="Blue Chip Equity" />
          <LogoPlaceholder name="Summit Holdings" />
          <LogoPlaceholder name="River City Capital" />
          <LogoPlaceholder name="Brick & Mortar" />
          <LogoPlaceholder name="Founders Group" />
        </div>
      </div>
    </section>
  );
};

const LogoPlaceholder = ({ name }: { name: string }) => (
  <div className="flex items-center gap-2 group">
    <div className="w-8 h-8 rounded bg-slate-100 group-hover:bg-[#83d4c0] transition-colors" />
    <span className="text-xl font-black text-slate-900 tracking-tighter">{name}</span>
  </div>
);

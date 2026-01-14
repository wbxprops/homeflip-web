'use client';

import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { motion } from 'framer-motion';
import { Navbar } from "@/components/Navbar";
import { ArrowRight } from 'lucide-react';

export default function ProbateTraining1Page() {
  return (
    <div className="min-h-screen bg-[#050505] selection:bg-[#83d4c0]/20">
      <Navbar />

      {/* Hero Section - Compact, Video-First */}
      <section className="relative pt-24 sm:pt-28 pb-16 px-6 overflow-hidden" style={{ background: 'linear-gradient(180deg, #050505 0%, #0a0a0a 100%)' }}>
        {/* Background Decor */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#83d4c0]/15 via-transparent to-transparent opacity-50" />

        {/* The Glows */}
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[#83d4c0]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[0%] left-[-5%] w-[600px] h-[600px] bg-[#0891b2]/15 rounded-full blur-[140px] pointer-events-none" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#83d4c0 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />

        <div className="relative max-w-5xl mx-auto">
          {/* Compact Header - Eyebrow + Single Line Headline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-6 sm:mb-8"
          >
            <p className="text-[#83d4c0] uppercase tracking-widest text-xs sm:text-sm font-semibold mb-2">
              Free Training Series
            </p>
            <h1 className="font-hero text-[8vw] sm:text-5xl lg:text-6xl font-[800] text-white leading-[1] tracking-[-0.02em] uppercase">
              Probate Training — Part 1 of 4
            </h1>
          </motion.div>

          {/* Wistia Video Embed - Hero Position */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative mb-8 sm:mb-10 rounded-2xl overflow-hidden shadow-2xl shadow-[#83d4c0]/20 border border-white/10"
          >
            <div
              className="wistia_responsive_padding"
              style={{ padding: '56.25% 0 0 0', position: 'relative' }}
            >
              <div
                className="wistia_responsive_wrapper"
                style={{
                  height: '100%',
                  left: 0,
                  position: 'absolute',
                  top: 0,
                  width: '100%',
                }}
              >
                <div
                  className="wistia_embed wistia_async_go9lvej13w seo=true videoFoam=true"
                  style={{ height: '100%', position: 'relative', width: '100%' }}
                >
                  <div
                    className="wistia_swatch"
                    style={{
                      height: '100%',
                      left: 0,
                      opacity: 0,
                      overflow: 'hidden',
                      position: 'absolute',
                      top: 0,
                      transition: 'opacity 200ms',
                      width: '100%',
                    }}
                  >
                    <img
                      src="https://fast.wistia.com/embed/medias/go9lvej13w/swatch"
                      style={{
                        filter: 'blur(5px)',
                        height: '100%',
                        objectFit: 'contain',
                        width: '100%',
                      }}
                      alt=""
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section - Tight & Compelling */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <p className="text-slate-400 text-lg sm:text-xl font-medium mb-5 max-w-xl mx-auto">
              Ready to find off-market probate deals in your area?
            </p>
            <Link
              href="/claim-your-county"
              className="btn-gradient inline-flex items-center gap-3 px-10 sm:px-14 py-5 sm:py-6 rounded-2xl font-hero font-[900] text-xl sm:text-2xl lg:text-3xl uppercase tracking-tight shadow-2xl shadow-[#83d4c0]/30 hover:scale-105 active:scale-95 transition-all"
            >
              Claim Your County
              <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7" />
            </Link>
          </motion.div>
        </div>

        {/* Bottom Border Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#83d4c0]/50 to-transparent" />
      </section>

      {/* SEO Content Section */}
      <section className="py-16 sm:py-20 px-6 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #0d0d0d 100%)' }}>
        <div className="absolute top-0 left-[20%] w-[400px] h-[300px] bg-[#83d4c0]/[0.04] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto">
          {/* What You'll Learn */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="font-hero text-3xl sm:text-4xl font-[800] text-white uppercase tracking-tight mb-8 text-center">
              What You&apos;ll Learn in Part 1
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Why probate is the #1 source of off-market properties',
                'How to find probate leads directly from court websites',
                'Step-by-step process to access public records',
                'How to identify properties with motivated sellers',
                'Finding heirs and fiduciary contact information',
                'Real case studies with actual profit numbers',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-[#83d4c0] mt-0.5">✓</span>
                  <span className="text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Case Study: Richey Rd Before/After */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <p className="text-[#83d4c0] uppercase tracking-widest text-xs font-semibold mb-2">
                Real Case Study
              </p>
              <h3 className="font-hero text-3xl sm:text-4xl font-[800] text-white uppercase tracking-tight mb-2">
                4708 Richey Rd — Williamsburg, OH
              </h3>
              <p className="text-2xl sm:text-3xl font-bold text-[#83d4c0]">
                $130K → $348K
              </p>
              <p className="text-slate-400 mt-2">Probate wholesale + investor flip</p>
            </div>

            {/* Before Photos */}
            <div className="mb-6">
              <p className="text-slate-500 uppercase tracking-wider text-xs font-semibold mb-3">Before</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="aspect-[4/3] rounded-lg overflow-hidden border border-white/10">
                    <img
                      src={`/before-after/richey/before-${num}.jpg`}
                      alt={`Richey Rd before renovation ${num}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* After Photos */}
            <div className="mb-6">
              <p className="text-slate-500 uppercase tracking-wider text-xs font-semibold mb-3">After</p>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="aspect-[4/3] rounded-lg overflow-hidden border border-[#83d4c0]/30">
                    <img
                      src={`/before-after/richey/after-${num}.jpg`}
                      alt={`Richey Rd after renovation ${num}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* YouTube Walkthrough */}
            <div className="mt-8">
              <p className="text-slate-500 uppercase tracking-wider text-xs font-semibold mb-3">Property Walkthrough</p>
              <div className="aspect-video rounded-xl overflow-hidden border border-white/10">
                <iframe
                  src="https://www.youtube.com/embed/o18fkk3a8Jc"
                  title="Richey Rd Property Walkthrough"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Case Study: Kemper Ln Before/After */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <p className="text-[#83d4c0] uppercase tracking-widest text-xs font-semibold mb-2">
                Real Case Study
              </p>
              <h3 className="font-hero text-3xl sm:text-4xl font-[800] text-white uppercase tracking-tight mb-2">
                2241 Kemper Ln — Cincinnati, OH
              </h3>
              <p className="text-2xl sm:text-3xl font-bold text-[#83d4c0]">
                $140K → $692K
              </p>
              <p className="text-slate-400 mt-2">Probate wholesale + full renovation</p>
            </div>

            {/* Before Photos */}
            <div className="mb-6">
              <p className="text-slate-500 uppercase tracking-wider text-xs font-semibold mb-3">Before</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="aspect-[4/3] rounded-lg overflow-hidden border border-white/10">
                    <img
                      src={`/before-after/kemper/before-${num}.jpg`}
                      alt={`Kemper Ln before renovation ${num}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* After Photos */}
            <div className="mb-6">
              <p className="text-slate-500 uppercase tracking-wider text-xs font-semibold mb-3">After</p>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="aspect-[4/3] rounded-lg overflow-hidden border border-[#83d4c0]/30">
                    <img
                      src={`/before-after/kemper/after-${num}.jpg`}
                      alt={`Kemper Ln after renovation ${num}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* SEO Content Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-invert max-w-none"
          >
            <h2 className="font-hero text-2xl sm:text-3xl font-[800] text-white uppercase tracking-tight mb-6">
              Why Probate Investing Works
            </h2>

            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Probate investing is one of the most reliable sources of off-market real estate deals because the sellers—typically heirs of a deceased property owner—are highly motivated. Unlike pre-foreclosures or other distressed sales, <strong className="text-white">probate leads come with a built-in motivation to sell</strong>. The heirs often live out of state, don&apos;t want to manage the property, and need to settle the estate quickly.
              </p>

              <p>
                In this training, Gary Bailey shares 20 years of experience finding and closing probate deals in the Cincinnati market. You&apos;ll learn how to access <strong className="text-white">public court records</strong> to find new probate cases, identify properties with real estate attached, and contact the fiduciary or heirs directly.
              </p>

              <p>
                The key advantage of probate leads is that <strong className="text-white">everything is public information</strong>. When someone passes away and their estate enters probate court, a public notice is generated. This notice contains the case number, the name of the deceased, and often the names and addresses of the heirs. With a little research, you can find properties before they ever hit the MLS.
              </p>

              <p>
                Whether you&apos;re looking to wholesale, flip, or build a rental portfolio using the BRRRR strategy, probate properties offer some of the best margins in real estate. The case studies in this training show deals purchased at 40-50% of after-repair value—margins that are nearly impossible to find through traditional channels.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-slate-500 text-sm">
                <strong className="text-slate-400">About the Instructor:</strong> Gary Bailey has been a full-time real estate investor in Cincinnati, Ohio for over 20 years. He specializes in probate properties and has built systems to find, contact, and close deals consistently. This is Part 1 of a 4-part free training series.
              </p>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              href="/claim-your-county"
              className="btn-gradient inline-flex items-center gap-3 px-10 sm:px-14 py-5 sm:py-6 rounded-2xl font-hero font-[900] text-xl sm:text-2xl uppercase tracking-tight shadow-2xl shadow-[#83d4c0]/30 hover:scale-105 active:scale-95 transition-all"
            >
              Claim Your County
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-6 px-6 bg-[#050505] border-t border-white/5">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-2 text-xs text-slate-700">
          <p>&copy; 2026 WhiteBox Academy. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/terms" className="hover:text-slate-500 transition-colors">Terms</a>
            <span className="text-slate-800">·</span>
            <a href="/privacy" className="hover:text-slate-500 transition-colors">Privacy</a>
          </div>
        </div>
      </footer>

      {/* Wistia Script */}
      <Script
        src="https://fast.wistia.com/assets/external/E-v1.js"
        strategy="lazyOnload"
      />
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';
import { CheckCircle, Download, ArrowRight } from 'lucide-react';

export default function FreeGuidePage() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Format phone number as (XXX) XXX-XXXX
  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    const limited = numbers.slice(0, 10);
    if (limited.length === 0) return '';
    if (limited.length <= 3) return `(${limited}`;
    if (limited.length <= 6) return `(${limited.slice(0, 3)}) ${limited.slice(3)}`;
    return `(${limited.slice(0, 3)}) ${limited.slice(3, 6)}-${limited.slice(6)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData({ ...formData, phone: formatted });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      // Log the response
      await supabase
        .from('prospect_responses')
        .insert([{
          email: formData.email,
          name: formData.firstName,
          phone: formData.phone,
          source: 'hvco_12_secrets',
        }]);

      // Try to create prospect (ignore if exists)
      await supabase
        .from('prospects')
        .insert([{
          name: formData.firstName,
          email: formData.email,
          phone: formData.phone,
          source: 'hvco_12_secrets',
        }]);

      setStatus('success');
      // Redirect to thank you page with download
      window.location.href = '/free-guide/thank-you';
    } catch (error: any) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  const inputStyles = "w-full px-5 py-4 rounded-xl border-2 border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0891b2]/30 focus:border-[#0891b2] transition-all text-lg placeholder:text-slate-400";

  const bullets = [
    "Why right now is a golden opportunity to create generational wealth through real estate",
    "The top 3 strategies for buying off-market properties in ANY market condition",
    "How record inflation rates will affect the future of real estate investing",
    "How to position your real estate business to take advantage of this once-in-a-lifetime buying opportunity",
    "Foreclosure Wave 2.0 - what if the experts are wrong?",
    "How to build generational wealth through real estate during uncertain economic times",
  ];

  const numberedPoints = [
    "The Cold Hard TRUTH About Finding Off-Market Properties",
    "7 Little Tips To Help You Build A Property Portfolio In Only 24 Months",
    "Why Listening To Your Agent Is A Bad Idea",
    "How To Have Sellers Begging You To Buy Their House",
    "How To Position Yourself For The Next Real Estate Wave",
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-12 pb-8 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-[#0891b2] font-bold text-sm md:text-base uppercase tracking-wider mb-4">
              Attention Real Estate Investors Who Want Properties At 47% Of The After Repair Value
            </p>
            <h1 className="font-hero font-[900] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 uppercase tracking-tighter leading-[0.95] mb-6">
              How Thousands Of Investors Are Using The{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0891b2] to-[#7c3aed]">
                &quot;Property Magnet&quot;
              </span>{' '}
              To Buy Off-Market Properties Despite Record Low Inventory
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Two Column */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Book Image */}
              <div className="mb-8 flex justify-center lg:justify-start">
                <img
                  src="/ebook-12-hidden-sources-v8.png"
                  alt="12 Secrets to Buying Off-Market Properties"
                  className="w-64 h-auto drop-shadow-2xl"
                />
              </div>

              <h2 className="font-hero font-[900] text-2xl md:text-3xl text-slate-900 uppercase tracking-tight mb-6">
                Real Estate Investors Have Waited Decades For These Exact Market Conditions!
              </h2>

              <ul className="space-y-4 mb-8">
                {bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#0891b2] flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-lg">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Numbered Points */}
              <div className="bg-slate-50 rounded-2xl p-6 mb-8">
                <h3 className="font-bold text-xl text-slate-900 mb-4">Inside This Free Guide You&apos;ll Discover:</h3>
                <ol className="space-y-3">
                  {numberedPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-gradient-to-r from-[#0891b2] to-[#7c3aed] text-white font-bold flex items-center justify-center flex-shrink-0 text-sm">
                        {index + 1}
                      </span>
                      <span className="text-slate-700">{point}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Social Proof Quote */}
              <blockquote className="border-l-4 border-[#0891b2] pl-6 py-2 italic text-slate-600">
                &quot;Believe it or not, there&apos;s no need to stay away from real estate – even with the housing market being bonkers. Investing in real estate is a great way to accumulate a lot of wealth – especially if you are willing to be patient.&quot;
                <footer className="mt-2 text-slate-500 not-italic font-medium">– The Motley Fool</footer>
              </blockquote>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:sticky lg:top-8"
            >
              <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-2xl p-8">
                <div className="text-center mb-6">
                  <h3 className="font-hero font-[900] text-2xl md:text-3xl text-slate-900 uppercase tracking-tight mb-2">
                    Buy Your Next Deal In 90 Days Or Less!
                  </h3>
                  <p className="text-slate-600">
                    Get instant access to the free guide
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm">
                      {errorMessage}
                    </div>
                  )}

                  <input
                    type="text"
                    required
                    placeholder="First Name *"
                    className={inputStyles}
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />

                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    className={inputStyles}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />

                  <input
                    type="tel"
                    required
                    placeholder="Phone Number *"
                    className={inputStyles}
                    value={formData.phone}
                    onChange={handlePhoneChange}
                  />

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full btn-gradient py-5 rounded-2xl font-hero font-[900] text-xl uppercase tracking-tight shadow-lg shadow-[#0891b2]/20 hover:scale-[1.01] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {status === 'submitting' ? (
                      'Sending...'
                    ) : (
                      <>
                        <Download className="w-6 h-6" />
                        Download Your Free Guide
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-500 text-center leading-relaxed">
                    By clicking submit you consent for us to contact you by mail, phone, text or email.
                    You also consent to our{' '}
                    <a href="/privacy" className="underline hover:text-[#0891b2]">Privacy Policy</a> and{' '}
                    <a href="/terms" className="underline hover:text-[#0891b2]">Terms of Service</a>.
                  </p>
                </form>

                {/* Urgency */}
                <div className="mt-6 pt-6 border-t border-slate-200 text-center">
                  <p className="text-slate-700 font-medium">
                    We reveal exactly how we used this strategy to acquire{' '}
                    <span className="text-[#0891b2] font-bold">97 off-market properties at 47% of ARV</span>{' '}
                    in the last 24 months!
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blueprint Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#0891b2]/5 to-[#7c3aed]/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-hero font-[900] text-2xl md:text-4xl text-slate-900 uppercase tracking-tight mb-6">
              Take Advantage Of Record High Prices Using Our Proven Blueprint
            </h2>
            <p className="text-xl text-slate-700 mb-8">
              We&apos;ve created a blueprint to help real estate investors purchase off-market properties{' '}
              <span className="font-bold text-[#0891b2]">50% below market value</span> and double their margins.
              This strategy will work for flips or the BRRRR method!
            </p>
            <a
              href="#top"
              className="inline-flex items-center gap-2 btn-gradient px-8 py-4 rounded-2xl font-hero font-[900] text-lg uppercase tracking-tight shadow-lg shadow-[#0891b2]/20 hover:scale-[1.01] transition-all"
            >
              Get Your Free Guide Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6" id="top">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-hero font-[900] text-2xl md:text-3xl text-slate-900 uppercase tracking-tight mb-4">
            Download Your Guide Before Your Competitors Do!
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Simply fill in your details above and get your free guide sent straight to your inbox.
          </p>
        </div>
      </section>
    </main>
  );
}

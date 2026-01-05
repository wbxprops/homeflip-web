'use client';

import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Download, Phone, X } from 'lucide-react';

export default function FreeGuidePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    } catch (error: unknown) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const inputStyles = "w-full px-4 py-4 rounded-lg border-2 border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-[#5EEADC]/50 focus:border-[#5EEADC] transition-all text-lg";

  // CTA Button Component
  const CTAButton = ({ className = '' }: { className?: string }) => (
    <button
      onClick={openModal}
      className={`bg-gradient-to-r from-[#5EEADC] to-[#A855F7] hover:from-[#4DD9CB] hover:to-[#9945E6] text-white py-4 px-8 rounded-lg font-bold text-lg uppercase tracking-wide shadow-lg shadow-[#5EEADC]/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 ${className}`}
    >
      <Download className="w-5 h-5" />
      DOWNLOAD YOUR FREE GUIDE
    </button>
  );

  const numberedPoints = [
    {
      title: "The Cold Hard TRUTH About Finding Off-Market Properties",
      description: "Discover why most investors struggle and what the successful ones do differently"
    },
    {
      title: "7 Little Tips To Help You Build A Property Portfolio In Only 24 Months",
      description: "Simple strategies that compound into massive results"
    },
    {
      title: "Why Listening To Your Agent Is A Bad Idea",
      description: "The 2 dirty little lies they don't want you to know"
    },
    {
      title: "How To Have Sellers Begging You To Buy Their House",
      description: "Position yourself as the obvious choice for motivated sellers"
    },
    {
      title: "How To Position Yourself For The Next Real Estate Wave",
      description: "Get ahead of the market before everyone else catches on"
    },
  ];

  return (
    <main className="min-h-screen bg-[#1e293b]">
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Modal Content */}
          <div className="relative bg-[#0f172a] rounded-2xl p-8 w-full max-w-md border border-white/10 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-6">
              <h3 className="text-white text-2xl font-black uppercase mb-2">
                Get Your Free Guide!
              </h3>
              <p className="text-white/70">
                Let us know where to send it...
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {status === 'error' && (
                <div className="p-4 bg-red-500/20 border border-red-400 text-red-200 rounded-lg text-sm">
                  {errorMessage}
                </div>
              )}

              <div>
                <input
                  type="text"
                  required
                  placeholder="First Name *"
                  className={inputStyles}
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>

              <div>
                <input
                  type="email"
                  required
                  placeholder="Email *"
                  className={inputStyles}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <input
                  type="tel"
                  required
                  placeholder="Phone *"
                  className={inputStyles}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-gradient-to-r from-[#5EEADC] to-[#A855F7] hover:from-[#4DD9CB] hover:to-[#9945E6] text-white py-4 rounded-lg font-bold text-lg uppercase tracking-wide shadow-lg shadow-[#5EEADC]/20 hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? (
                  'Sending...'
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    DOWNLOAD YOUR FREE GUIDE
                  </>
                )}
              </button>

              <p className="text-xs text-white/50 text-center leading-relaxed">
                By clicking submit you consent for us to contact you by mail, phone, text or email.
                You also consent to our{' '}
                <a href="/privacy" className="underline hover:text-[#5EEADC]">Privacy Policy</a> and{' '}
                <a href="/terms" className="underline hover:text-[#5EEADC]">Terms of Service</a>.
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-[#0f172a] py-3 px-6">
        <div className="max-w-6xl mx-auto flex justify-center md:justify-end">
          <a href="tel:5139865440" className="flex items-center gap-2 text-white hover:text-[#5EEADC] transition-colors">
            <Phone className="w-4 h-4" />
            <span className="font-medium">(513) 986-5440</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-16 px-6 bg-[#0f172a]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#5EEADC] font-bold text-sm md:text-base uppercase tracking-widest mb-6">
            Attention Real Estate Investors Who Want Properties At 47% Of The After Repair Value
          </p>
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight mb-8">
            How Thousands Of Investors Are Using The New{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5EEADC] to-[#A855F7]">
              &quot;D2-S Property Magnet&quot;
            </span>{' '}
            To Buy Off-Market Properties Despite Record Low Inventory
          </h1>
        </div>
      </section>

      {/* First CTA Section */}
      <section className="py-12 px-6 bg-[#1e293b]">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-white text-2xl md:text-4xl font-black uppercase mb-4">
            Buy Your Next Deal In 90 Days Or Less!
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Let us know where to send your guide...
          </p>
          <CTAButton className="w-full sm:w-auto" />
        </div>
      </section>

      {/* eBook Image Section */}
      <section className="py-8 px-6 bg-[#0f172a]">
        <div className="max-w-md mx-auto text-center">
          <div className="relative">
            <img
              src="/ebook-12-hidden-sources-v8.png"
              alt="12 Secrets to Buying Off-Market Properties"
              className="w-full max-w-sm mx-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-[#1e293b]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-white text-2xl md:text-4xl font-black uppercase text-center mb-6">
            Real Estate Investors Have Waited Decades For These Exact Market Conditions!
          </h2>

          <p className="text-white/80 text-lg text-center mb-10">
            This brand new, free report shows you exactly how to take advantage of this once-in-a-lifetime opportunity including:
          </p>

          <div className="space-y-4 mb-10">
            {[
              "Why right now is a golden opportunity to create generational wealth through real estate",
              "The top 3 strategies for buying off-market properties in ANY market condition...",
              "How record inflation rates will affect the future of real estate investing...",
              "How to position your real estate business to take advantage of this once-in-a-lifetime buying opportunity",
              "Foreclosure Wave 2.0 - what if the experts are wrong?",
              "How to build generational wealth through real estate during uncertain economic times",
              "Why real estate is considered the best hedge against inflation and economic uncertainty",
            ].map((bullet, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#5EEADC] to-[#A855F7] flex-shrink-0 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white/90 text-lg">{bullet}</span>
              </div>
            ))}
          </div>

          <p className="text-[#5EEADC] text-xl font-bold text-center mb-10">
            And much, much more!
          </p>

          <div className="text-center">
            <CTAButton />
          </div>
        </div>
      </section>

      {/* Preview / Numbered Points Section */}
      <section className="py-16 px-6 bg-[#0f172a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-white text-2xl md:text-4xl font-black uppercase text-center mb-12">
            Here&apos;s Another Taste Of What You Can Expect When You Download Your Free Guide...
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {numberedPoints.map((point, index) => (
              <div
                key={index}
                className="bg-[#1e293b] rounded-xl p-6 border border-white/10 hover:border-[#5EEADC]/50 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#5EEADC] to-[#A855F7] flex items-center justify-center mb-4">
                  <span className="text-white font-black text-xl">{index + 1}</span>
                </div>
                <h3 className="text-white font-bold text-lg uppercase mb-2">
                  {point.title}
                </h3>
                <p className="text-white/60 text-sm">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <CTAButton />
          </div>
        </div>
      </section>

      {/* Quote / Authority Section */}
      <section className="py-16 px-6 bg-[#1e293b]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white text-xl md:text-3xl font-black uppercase mb-8">
            We Are On The Cusp Of The Most Incredible Opportunity To Create Generational Wealth Through Real Estate
          </h2>

          <blockquote className="relative">
            <div className="text-[#5EEADC] text-6xl font-serif absolute -top-4 left-0 opacity-30">&quot;</div>
            <p className="text-white/80 text-xl md:text-2xl italic leading-relaxed px-8">
              Believe it or not, there&apos;s no need to stay away from real estate – even with the housing market being bonkers. Investing in real estate is a great way to accumulate a lot of wealth – especially if you are willing to be patient.
            </p>
            <footer className="mt-6">
              <cite className="text-[#5EEADC] font-bold text-lg not-italic">– The Motley Fool</cite>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Blueprint Section */}
      <section className="py-16 px-6 bg-[#0f172a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white text-2xl md:text-4xl font-black uppercase mb-6">
            Take Advantage Of Record High Prices Using Our Proven Blueprint
          </h2>

          <p className="text-white/80 text-xl mb-10">
            We&apos;ve created a blueprint to help real estate investors purchase off-market properties{' '}
            <span className="text-[#5EEADC] font-bold">50% below market value</span> and double their margins.
            This strategy will work for flips or the BRRRR method!
          </p>

          <CTAButton />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-[#1e293b] to-[#0f172a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white text-2xl md:text-4xl font-black uppercase mb-4">
            Download Your Guide Before Your Competitors Do!
          </h2>

          <p className="text-[#5EEADC] text-lg md:text-xl font-bold mb-6">
            We reveal exactly how we used this strategy to acquire 97 off-market properties at 47% of ARV in the last 24 months!
          </p>

          <h3 className="text-white text-xl md:text-2xl font-bold mb-10">
            Click Below To Get Your Free Guide Sent Straight To Your Inbox
          </h3>

          <CTAButton />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#0f172a] border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Homeflip.ai. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

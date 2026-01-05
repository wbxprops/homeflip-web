'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Download, X, CheckCircle } from 'lucide-react';

export default function ProbateProfitMachinePage() {
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
      await supabase
        .from('prospect_responses')
        .insert([{
          email: formData.email,
          name: formData.firstName,
          phone: formData.phone,
          source: 'probate_profit_machine',
        }]);

      await supabase
        .from('prospects')
        .insert([{
          name: formData.firstName,
          email: formData.email,
          phone: formData.phone,
          source: 'probate_profit_machine',
        }]);

      setStatus('success');
      window.location.href = '/probate-profit-machine/thank-you';
    } catch (error: unknown) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const inputStyles = "w-full px-4 py-4 rounded-xl border-2 border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#83d4c0]/50 focus:border-[#83d4c0] transition-all text-lg";

  // CTA Button Component - Matches main site btn-gradient
  const CTAButton = ({ className = '', size = 'large' }: { className?: string; size?: 'large' | 'medium' }) => (
    <button
      onClick={openModal}
      className={`btn-gradient inline-flex items-center justify-center gap-3 rounded-2xl font-hero font-[900] uppercase tracking-tighter shadow-xl shadow-[#83d4c0]/20 hover:scale-105 active:scale-95 transition-all ${
        size === 'large'
          ? 'px-10 sm:px-14 py-5 sm:py-6 text-2xl sm:text-3xl md:text-4xl'
          : 'px-8 sm:px-10 py-4 sm:py-5 text-xl sm:text-2xl'
      } ${className}`}
    >
      <Download className={size === 'large' ? 'w-8 h-8' : 'w-6 h-6'} />
      Download Free Guide
    </button>
  );

  const benefits = [
    "Why right now is a golden opportunity to create generational wealth through real estate",
    "The top 3 strategies for buying off-market properties in ANY market condition",
    "How record inflation rates will affect the future of real estate investing",
    "How to position your real estate business for this once-in-a-lifetime buying opportunity",
    "Foreclosure Wave 2.0 - what if the experts are wrong?",
    "How to build generational wealth through real estate during uncertain times",
  ];

  const numberedPoints = [
    { title: "The Cold Hard TRUTH About Finding Off-Market Properties", description: "Discover why most investors struggle and what the successful ones do differently" },
    { title: "7 Tips To Build A Property Portfolio In 24 Months", description: "Simple strategies that compound into massive results" },
    { title: "Why Listening To Your Agent Is A Bad Idea", description: "The 2 dirty little lies they don't want you to know" },
    { title: "How To Have Sellers Begging You To Buy", description: "Position yourself as the obvious choice for motivated sellers" },
    { title: "Position Yourself For The Next Real Estate Wave", description: "Get ahead of the market before everyone else catches on" },
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-[#83d4c0]/20">
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeModal} />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl"
          >
            <button onClick={closeModal} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors">
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-6">
              <h3 className="font-hero text-3xl font-[900] text-slate-900 uppercase tracking-tight mb-2">
                Get Your Free Guide
              </h3>
              <p className="text-slate-500">Enter your details below</p>
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
                className="w-full btn-gradient py-5 rounded-2xl font-hero font-[900] text-xl uppercase tracking-tight shadow-lg shadow-[#83d4c0]/20 hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {status === 'submitting' ? 'Sending...' : (
                  <>
                    <Download className="w-6 h-6" />
                    Download Now
                  </>
                )}
              </button>

              <p className="text-xs text-slate-400 text-center leading-relaxed">
                By clicking submit you consent for us to contact you by mail, phone, text or email.
                You also consent to our{' '}
                <a href="/privacy" className="underline hover:text-[#83d4c0]">Privacy Policy</a> and{' '}
                <a href="/terms" className="underline hover:text-[#83d4c0]">Terms of Service</a>.
              </p>
            </form>
          </motion.div>
        </div>
      )}

      <Navbar />

      {/* Hero Section - Dark with Glows */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-[#050505] dark">
        {/* Background Decor */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#83d4c0]/15 via-transparent to-transparent opacity-50" />
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[#83d4c0]/25 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[0%] left-[-5%] w-[800px] h-[800px] bg-[#0891b2]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-r from-[#83d4c0]/15 to-[#0891b2]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#83d4c0 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left Column - 3/5 */}
            <div className="lg:col-span-3">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[#83d4c0] font-bold text-sm md:text-base uppercase tracking-widest mb-6"
              >
                Free Guide For Real Estate Investors
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-hero text-[10vw] sm:text-6xl lg:text-7xl xl:text-8xl font-[800] text-white leading-[0.9] tracking-[-0.02em] mb-8 uppercase"
              >
                The Probate<br />
                <span className="text-[#83d4c0]">Profit Machine</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-xl sm:text-2xl text-slate-400 max-w-xl leading-relaxed mb-10"
              >
                Discover how thousands of investors are finding <span className="text-white font-semibold">off-market properties at 47% of ARV</span> despite record low inventory.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <CTAButton />
              </motion.div>
            </div>

            {/* Right Column - 2/5 - eBook Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-2 flex justify-center"
            >
              <img
                src="/ebook-probate-profit-machine.png"
                alt="The Probate Profit Machine"
                className="w-full max-w-sm lg:max-w-md drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#83d4c0]/50 to-transparent" />
      </section>

      {/* Benefits Section - White */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
              What You&apos;ll Discover <span className="text-slate-400">Inside</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              This free guide reveals the exact strategies successful investors use to find deals others miss.
            </p>
          </motion.div>

          <div className="space-y-4 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#83d4c0]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-5 h-5 text-[#0891b2]" />
                </div>
                <span className="text-lg text-slate-700">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#0891b2] text-xl font-bold text-center mb-10"
          >
            And much, much more!
          </motion.p>

          <div className="text-center">
            <CTAButton size="medium" />
          </div>
        </div>
      </section>

      {/* Preview Section - Dark */}
      <section className="py-24 px-6 bg-[#050505] dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#83d4c0 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-hero text-4xl sm:text-5xl lg:text-6xl font-[800] text-white uppercase tracking-tight mb-6">
              A Taste Of What&apos;s Inside
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {numberedPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#83d4c0]/30 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#83d4c0] to-[#0891b2] flex items-center justify-center mb-4">
                  <span className="text-[#050505] font-black text-xl">{index + 1}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{point.title}</h3>
                <p className="text-slate-400 text-sm">{point.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <CTAButton size="medium" />
          </div>
        </div>
      </section>

      {/* Quote Section - White */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="text-[#83d4c0] text-8xl font-serif absolute -top-8 left-0 opacity-20">&quot;</div>
            <p className="text-2xl sm:text-3xl text-slate-700 italic leading-relaxed px-8 mb-8">
              Believe it or not, there&apos;s no need to stay away from real estate – even with the housing market being bonkers. Investing in real estate is a great way to accumulate a lot of wealth – especially if you are willing to be patient.
            </p>
            <footer>
              <cite className="text-[#0891b2] font-bold text-lg not-italic">– The Motley Fool</cite>
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* Final CTA Section - Dark */}
      <section className="py-24 px-6 bg-[#050505] dark relative overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#83d4c0]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#0891b2]/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-hero text-4xl sm:text-5xl lg:text-6xl font-[800] text-white uppercase tracking-tight mb-6">
              Get Your Free Guide Now
            </h2>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
              Join thousands of investors who have discovered the secrets to finding off-market deals at massive discounts.
            </p>
            <CTAButton />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

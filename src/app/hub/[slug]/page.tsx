'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';
import { Download, Sparkles, CheckCircle, AlertCircle, Wand2, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function HubGuidePage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const slug = params.slug as string;
  const token = searchParams.get('token');

  // State
  const [loading, setLoading] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [accessError, setAccessError] = useState<string | null>(null);
  const [showRequestForm, setShowRequestForm] = useState(false);

  // Request access form state
  const [formData, setFormData] = useState({ email: '', firstName: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');

  // DEV MODE: Bypass token validation for development
  const DEV_MODE = true;

  // Guide sections - matches ebook structure
  const guideSections = [
    {
      id: 'part-1',
      part: 'Part I',
      title: 'Why Probate',
      description: 'Why probate outperforms foreclosures, wholesaler lists, and every other lead source you\'ve tried.',
      href: `/hub/${slug}/guide/part-1`
    },
    {
      id: 'part-2',
      part: 'Part II',
      title: 'Finding Probate Leads',
      description: 'The 4-step process to find leads in any county, plus a secret source most investors miss.',
      href: `/hub/${slug}/guide/part-2`
    },
    {
      id: 'part-3',
      part: 'Part III',
      title: 'Working the Leads',
      description: 'The follow-up system that turns cold leads into $100k price drops over 6 months.',
      href: `/hub/${slug}/guide/part-3`
    },
    {
      id: 'part-4',
      part: 'Part IV',
      title: 'Tying It All Together',
      description: 'Your roadmap to consistent deal flow, whether you DIY or use Homeflip.ai.',
      href: `/hub/${slug}/guide/part-4`
    },
  ];

  // Validate token on mount
  useEffect(() => {
    async function validateAccess() {
      if (DEV_MODE) {
        setIsValid(true);
        setLoading(false);
        return;
      }

      if (!token) {
        setShowRequestForm(true);
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase.rpc('mlh_access_hub', {
          p_token: token
        });

        if (error) {
          setAccessError('Unable to validate access. Please try again.');
          setShowRequestForm(true);
          setLoading(false);
          return;
        }

        const result = data?.[0];

        if (!result || !result.is_valid) {
          setAccessError(result?.error_message || 'Invalid or expired link');
          setShowRequestForm(true);
          setLoading(false);
          return;
        }

        setIsValid(true);
        setLoading(false);

      } catch (err) {
        setAccessError('Something went wrong. Please try again.');
        setShowRequestForm(true);
        setLoading(false);
      }
    }

    validateAccess();
  }, [token]);

  // Handle request access form submission
  const handleRequestAccess = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setFormError('');

    try {
      const response = await fetch('https://whitebox-one.onrender.com/webhook/magic-link-create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.firstName,
          hub_slug: slug
        })
      });

      if (!response.ok) throw new Error('Failed to create magic link');

      const result = await response.json();
      if (!result.success) throw new Error(result.message || 'Failed to send magic link');

      setFormStatus('success');
    } catch (err) {
      setFormError('Unable to process request. Please try again.');
      setFormStatus('error');
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center" style={{ backgroundColor: '#0a0a0f' }}>
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#83d4c0] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p style={{ color: 'rgba(255,255,255,0.6)' }}>Loading your resources...</p>
        </div>
      </div>
    );
  }

  // Request access form (no token or invalid token)
  if (showRequestForm) {
    return (
      <>
        <Navbar variant="dark" />
        <main className="min-h-screen bg-[#050505] flex items-center justify-center px-6 py-16 pt-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#83d4c0]/10 via-transparent to-transparent opacity-50" />
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#83d4c0]/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#0891b2]/15 rounded-full blur-[140px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative max-w-md w-full"
          >
            <div className="bg-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/10 p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#83d4c0]/5 via-transparent to-[#0891b2]/5 pointer-events-none" />

              <div className="relative">
                <div className="w-20 h-20 mx-auto mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#83d4c0] to-[#0891b2] rounded-full blur-lg opacity-40 animate-pulse" />
                  <div className="relative w-full h-full bg-gradient-to-br from-[#83d4c0] to-[#0891b2] rounded-full flex items-center justify-center">
                    <Wand2 className="w-10 h-10 text-white" />
                  </div>
                  <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-[#83d4c0] animate-bounce" />
                  <Sparkles className="absolute -bottom-1 -left-1 w-4 h-4 text-[#0891b2] animate-bounce delay-150" />
                </div>

                {accessError && (
                  <div className="mb-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-amber-300 text-sm font-medium">Link expired or invalid</p>
                      <p className="text-amber-300/70 text-sm mt-1">No worries! Get a fresh magic link below.</p>
                    </div>
                  </div>
                )}

                {formStatus === 'success' ? (
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", duration: 0.5 }}
                      className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center"
                    >
                      <CheckCircle className="w-10 h-10 text-white" />
                    </motion.div>
                    <h2 className="font-sans font-bold text-2xl sm:text-3xl text-white mb-3">
                      Magic Link Sent!
                    </h2>
                    <p className="text-white/60 mb-4">
                      Check your inbox at <strong className="text-white">{formData.email}</strong>
                    </p>
                    <div className="bg-white/5 rounded-xl p-4 text-left border border-white/10">
                      <p className="text-sm text-white/60">
                        <span className="font-semibold text-white/80">Click the link in your email</span> to instantly access your resources. No password needed!
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="font-sans font-bold text-2xl sm:text-3xl text-white text-center mb-2">
                      Get Your <span className="text-[#83d4c0]">Magic Link</span>
                    </h2>
                    <p className="text-white/60 text-center mb-6">
                      No password needed. We&apos;ll send you a secure link for instant access.
                    </p>

                    <form onSubmit={handleRequestAccess} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-white/70 mb-1">First Name</label>
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full px-4 py-3 border-2 border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#83d4c0]/50 focus:border-[#83d4c0] transition-all text-white bg-white/5 placeholder:text-white/30"
                          placeholder="Your first name"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white/70 mb-1">Email Address</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border-2 border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#83d4c0]/50 focus:border-[#83d4c0] transition-all text-white bg-white/5 placeholder:text-white/30"
                          placeholder="you@example.com"
                          required
                        />
                      </div>

                      {formError && <p className="text-red-400 text-sm">{formError}</p>}

                      <button
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        className="w-full btn-gradient px-6 py-4 rounded-xl font-sans font-bold text-lg hover:scale-[1.01] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-[#83d4c0]/25"
                      >
                        {formStatus === 'submitting' ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Sending Magic Link...
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-5 h-5" />
                            Send My Magic Link
                          </>
                        )}
                      </button>

                      <p className="text-center text-xs text-white/40 mt-4">
                        Your link expires in 30 days. No spam, ever.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </main>
        <Footer />
      </>
    );
  }

  // Valid access - Guide Overview
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-10 md:py-14">
        {/* Header */}
        <header className="mb-10">
          <h1
            className="font-sans font-bold text-3xl md:text-4xl leading-tight mb-4"
            style={{ color: 'rgba(255,255,255,0.95)' }}
          >
            Probate Profit Machine
          </h1>
          <p
            className="text-xl leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            Your step-by-step system for finding and closing off-market probate deals before other investors even know they exist.
          </p>
        </header>

        {/* Sections */}
        <section className="mb-10">
          <div className="space-y-4">
            {guideSections.map((section, index) => (
              <Link
                key={section.id}
                href={section.href}
                className="group block p-6 rounded-2xl transition hover:bg-white/[0.04]"
                style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="mb-3">
                      <span
                        className="text-sm font-medium px-3 py-1 rounded-lg"
                        style={{ backgroundColor: 'rgba(131,212,192,0.12)', color: '#83d4c0' }}
                      >
                        {section.part}
                      </span>
                    </div>
                    <h3 className="font-semibold text-xl mb-2" style={{ color: 'rgba(255,255,255,0.95)' }}>
                      {section.title}
                    </h3>
                    <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      {section.description}
                    </p>
                  </div>
                  <ArrowRight
                    className="w-6 h-6 flex-shrink-0 mt-2 transition group-hover:translate-x-1"
                    style={{ color: 'rgba(255,255,255,0.3)' }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* PDF Download - Featured with Ebook Cover */}
        <section>
          <div
            className="p-6 sm:p-8 rounded-2xl grid grid-cols-1 sm:grid-cols-[70%_30%] items-center gap-6 relative overflow-hidden"
            style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            {/* Subtle glow behind ebook */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-[#83d4c0]/10 rounded-full blur-[80px] pointer-events-none" />

            {/* Content - Left Side (70%) */}
            <div className="text-center sm:text-left order-2 sm:order-1">
              <p className="text-lg font-semibold mb-2" style={{ color: 'rgba(255,255,255,0.9)' }}>
                Prefer Offline Reading?
              </p>
              <p className="text-base mb-5" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Download the complete Probate Profit Machine as a PDF to read anytime, anywhere.
              </p>
              <span
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  color: 'rgba(255,255,255,0.4)',
                  border: '1px solid rgba(255,255,255,0.08)'
                }}
              >
                <Download className="w-4 h-4" />
                Coming Soon
              </span>
            </div>

            {/* Ebook Cover - Right Side (30%) */}
            <div className="relative flex justify-center order-1 sm:order-2">
              <img
                src="/ebook-cover-probate-profit-machine.png"
                alt="The Probate Profit Machine"
                className="w-32 sm:w-full max-w-[140px] drop-shadow-xl"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

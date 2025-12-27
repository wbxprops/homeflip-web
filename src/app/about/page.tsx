'use client';

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Users, TrendingUp, CheckCircle, XCircle, Compass } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="font-hero font-[900] text-5xl md:text-6xl lg:text-7xl text-slate-900 uppercase tracking-tighter leading-[0.9] mb-6">
                Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0891b2] to-[#7c3aed]">
                  Story
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
                Homeflip.ai was built by a real estate investor, not a software company.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg prose-slate max-w-none"
            >
              <p className="text-xl text-slate-600 leading-relaxed">
                I'm Gary Bailey. I've been a full-time real estate investor for over 20 years and have been directly involved in more than 2,000 real estate transactions. Over that time, I learned a simple truth:
              </p>
              <blockquote className="border-l-4 border-[#0891b2] pl-6 my-8 text-2xl font-bold text-slate-900 italic">
                Most investors don't struggle because they don't understand real estate. They struggle because they can't find deals consistently.
              </blockquote>
              <p className="text-xl text-slate-600 leading-relaxed">
                I've coached and worked with hundreds of investors: brand new investors, people getting back into the game, and experienced investors who felt stuck. Across all of them, the bottleneck was always the same: unreliable deal flow.
              </p>
              <p className="text-xl text-slate-600 leading-relaxed">
                Meanwhile, in my own business, we were solving that problem a different way.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Probate Section */}
        <section className="py-16 sm:py-24 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-hero font-[900] text-4xl md:text-5xl text-slate-900 uppercase tracking-tighter mb-8">
                Why Probate Became the Foundation
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Years ago, probate became our primary source of off-market deals, not because it was trendy, but because it worked.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Motivated sellers",
                  "Distressed properties with real investor upside",
                  "Less competition",
                  "A steady, predictable flow of opportunities"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200">
                    <CheckCircle className="w-5 h-5 text-[#0891b2] flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                While other lead sources came and went with market cycles, probate remained reliable. The challenge was never whether probate worked. It was that most investors couldn't access it or didn't have the systems to work it effectively.
              </p>
              <p className="text-xl text-slate-600 leading-relaxed">
                Every county is different. The data is fragmented. The process feels confusing. Most investors give up before they ever get started. That gap is what led to Homeflip.ai.
              </p>
            </motion.div>
          </div>
        </section>

        {/* From Experience to Platform */}
        <section className="py-16 sm:py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-hero font-[900] text-4xl md:text-5xl text-slate-900 uppercase tracking-tighter mb-8">
                From Experience to Platform
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Homeflip.ai was created to remove the friction that prevents investors from executing.
              </p>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Instead of forcing investors to scrape court records, juggle spreadsheets, or chase unreliable sources, Homeflip.ai brings everything into one place, combining AI-powered probate lead generation with practical workflows and investor guidance.
              </p>

              <div className="p-8 bg-gradient-to-br from-[#0891b2]/10 to-[#7c3aed]/10 rounded-3xl border border-[#0891b2]/20 mb-8">
                <p className="text-2xl md:text-3xl font-black text-slate-900 text-center">
                  Probate is the fuel.<br />
                  <span className="text-[#0891b2]">Homeflip.ai is the vehicle.</span>
                </p>
              </div>

              <p className="text-xl text-slate-600 leading-relaxed">
                Our goal isn't to overwhelm investors with options. It's to give them a clear, repeatable way to build deal flow and take action.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Who It's Built For */}
        <section className="py-16 sm:py-24 px-6 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-hero font-[900] text-4xl md:text-5xl text-slate-900 uppercase tracking-tighter mb-6">
                What Homeflip.ai Is Built For
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Homeflip.ai is built for real estate investors who want consistent control over their deal flow.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-8 bg-white rounded-3xl border border-slate-200"
              >
                <h3 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                  It's designed for investors who:
                </h3>
                <ul className="space-y-4">
                  {[
                    "Want a reliable way to source off-market opportunities",
                    "Are tired of relying on wholesalers, the MLS, or oversaturated lists",
                    "Understand that deal flow — not strategy — is the real bottleneck",
                    "Want a repeatable system instead of chasing one-off deals"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#0891b2] flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-8 bg-white rounded-3xl border border-slate-200"
              >
                <h3 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                  Homeflip.ai works whether you're:
                </h3>
                <ul className="space-y-4">
                  {[
                    { label: "A new investor", desc: "looking for a clear, practical starting point" },
                    { label: "An active investor", desc: "struggling to maintain a steady supply of off-market deals" },
                    { label: "A returning investor", desc: "rebuilding momentum after time away" }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-[#0891b2] flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">
                        <strong className="text-slate-900">{item.label}</strong> {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-slate-600 text-sm border-t border-slate-100 pt-6">
                  The platform provides both the <strong className="text-slate-900">opportunity</strong> (leads) and the <strong className="text-slate-900">structure</strong> (guidance and workflows) so investors at any stage can take action with confidence and consistency.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Who It's NOT For */}
        <section className="py-16 sm:py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-hero font-[900] text-4xl md:text-5xl text-slate-900 uppercase tracking-tighter mb-6">
                Who Homeflip.ai Is Not For
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Homeflip.ai is intentionally focused. It was built to solve a specific problem for a specific group.
              </p>

              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4">This platform is not designed for:</h3>
                <ul className="space-y-3">
                  {[
                    "Real estate agents looking for listings or retail sellers",
                    "Agents seeking tools to grow a listing-based business",
                    "Investors who are unwilling to speak directly with sellers",
                    "Anyone looking for passive or hands-off investing shortcuts"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-xl text-slate-600 leading-relaxed">
                Homeflip.ai is built for investors who want to source, evaluate, and work off-market opportunities directly, and who understand that consistent deal flow requires active participation.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed mt-4">
                If you're looking for a listing platform, a referral system, or a retail-focused CRM, Homeflip.ai will not be a good fit, and that's intentional.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 sm:py-24 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-hero font-[900] text-4xl md:text-5xl text-slate-900 uppercase tracking-tighter mb-8">
                Our Approach
              </h2>

              <div className="text-xl text-slate-600 leading-relaxed mb-8">
                <p className="mb-4">Homeflip.ai is not a guru program.</p>
                <p className="mb-4">It's not a data dump.</p>
                <p>And it's not a "get rich quick" promise.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                {[
                  { icon: <Compass className="w-6 h-6" />, label: "Fewer, better opportunities" },
                  { icon: <Target className="w-6 h-6" />, label: "Clear systems over complexity" },
                  { icon: <TrendingUp className="w-6 h-6" />, label: "Execution over theory" },
                  { icon: <Users className="w-6 h-6" />, label: "Empowerment over dependency" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-xl border border-slate-200">
                    <div className="w-12 h-12 rounded-xl bg-[#0891b2]/10 flex items-center justify-center text-[#0891b2]">
                      {item.icon}
                    </div>
                    <span className="text-slate-900 font-bold">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-gradient-to-br from-[#0891b2]/10 to-[#7c3aed]/10 rounded-3xl border border-[#0891b2]/20">
                <p className="text-xl md:text-2xl font-bold text-slate-900 text-center">
                  Our goal is simple: to help investors take control of their deal flow and build sustainable investing businesses.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-16 sm:py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#0891b2] to-[#7c3aed] flex items-center justify-center text-white text-3xl font-black">
                GB
              </div>
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Gary Bailey</h3>
              <p className="text-[#0891b2] font-bold mb-2">Founder, Homeflip.ai</p>
              <p className="text-slate-500">Full-Time Real Estate Investor</p>
              <p className="text-slate-400 text-sm mt-1">20+ Years Experience | 2,000+ Transactions</p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 px-6 bg-slate-50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 uppercase tracking-tight">
              Ready to Take Control of Your Deal Flow?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Join investors who are building sustainable businesses with consistent, off-market opportunities.
            </p>
            <Link
              href="/claim-your-county"
              className="btn-gradient inline-block px-10 py-5 rounded-2xl font-hero font-[900] text-2xl md:text-3xl uppercase tracking-tighter shadow-xl shadow-[#83d4c0]/20 hover:scale-105 active:scale-95 transition-all"
            >
              Claim Your County
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

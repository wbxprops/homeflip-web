'use client';

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Eye, Heart, Shield, Sparkles, Rocket, Users, Target, BadgeCheck, Fuel, Handshake } from "lucide-react";

const values = [
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Transparency",
    description: "No hidden fees, no surprises, no fine print games. We tell you exactly what you're getting, what it costs, and how it works. If something isn't right for you, we'll say so. We believe trust is built through honesty, not sales tactics."
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Customer First",
    description: "Your success is our success. Every feature we build, every decision we make, starts with one question: does this help our customers win? We're not here to sell you software. We're here to help you build a real estate business that changes your life."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Integrity",
    description: "We operate in a space that touches families during difficult times. That responsibility matters to us. We hold ourselves and our community to the highest ethical standards. Do the right thing, even when no one is watching."
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Simplicity",
    description: "Complex doesn't mean better. We take the overwhelming world of probate investing and make it accessible. Our technology should make your life easier, not add more confusion. If it's not simple, we haven't finished building it yet."
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Empowerment",
    description: "We give you the tools, knowledge, and confidence to take control of your own deal flow. No more depending on wholesalers. No more fighting over MLS scraps. You have everything you need to build your own pipeline of opportunities."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Community",
    description: "Real estate investing can be lonely. We're building more than software. We're building a community of investors who learn from each other, support each other, and grow together. Your network is your net worth."
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Results-Driven",
    description: "At the end of the day, it's about closing deals and building wealth. We measure our success by your results. Everything we do ties back to one goal: helping you achieve your real estate investing dreams."
  },
  {
    icon: <BadgeCheck className="w-8 h-8" />,
    title: "Data Quality",
    description: "We stand behind our data. If for any reason the information we provide is inaccurate, simply request a credit. No questions asked. We don't make excuses. We make it right."
  },
  {
    icon: <Fuel className="w-8 h-8" />,
    title: "Fuel, Not a Burden",
    description: "Real estate investing is capital-intensive enough. Every dollar you save on tools and marketing is a dollar you can put toward your next deal. We designed our pricing to be fuel for your business, not a drain on it. The value you get should always exceed what you pay."
  },
  {
    icon: <Handshake className="w-8 h-8" />,
    title: "Long-Term Relationships",
    description: "We're looking for partners, not transactions. We want customers who stay with us for years, not months, because we want to be part of your success story. When you win, we win. As long as we keep delivering value and helping you reach your goals, we all grow together."
  }
];

export default function ValuesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-hero font-[900] text-5xl md:text-6xl lg:text-7xl text-slate-900 uppercase tracking-tighter leading-[0.9] mb-6">
                Our Core{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0891b2] to-[#7c3aed]">
                  Values
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto">
                These aren't just words on a wall. They're the principles that guide every decision we make and every interaction we have.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="pb-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 rounded-3xl border border-slate-200 hover:border-[#83d4c0]/50 hover:shadow-xl hover:shadow-[#83d4c0]/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#83d4c0]/20 to-[#0891b2]/20 flex items-center justify-center text-[#0891b2] mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="pb-24 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="p-12 rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 uppercase tracking-tight">
                Ready to Work With a Team That Shares Your Values?
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Join a community of investors who believe in doing things the right way.
              </p>
              <a
                href="/claim-your-county"
                className="btn-gradient inline-block px-10 py-5 rounded-2xl font-hero font-[900] text-2xl md:text-3xl uppercase tracking-tighter shadow-xl shadow-[#83d4c0]/20 hover:scale-105 active:scale-95 transition-all"
              >
                Claim Your County
              </a>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

'use client';

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Lightbulb, FileText, Star } from "lucide-react";
import Link from "next/link";

// Article data - add new articles here
const articles = [
  {
    slug: "probate-vs-foreclosure",
    title: "Probate vs Foreclosures: Why Investors Are Missing Double the Opportunities in 2026",
    excerpt: "Our research reveals probate properties outnumber foreclosures by nearly 2-to-1. Here's what the data shows, and what it means for your investing strategy.",
    category: "Market Research",
    readTime: "8 min read",
    icon: <BarChart3 className="w-5 h-5" />,
    featured: true
  },
  {
    slug: "tcpa-ruling-cold-calling-investors",
    title: "TCPA Ruling 2025: Investors Can Cold Call to Buy Houses",
    excerpt: "The Cofey v. Fast Easy Offer ruling confirms investor buy offers are NOT telephone solicitations under TCPA. Here's what it means for cold calling probate leads.",
    category: "Legal Update",
    readTime: "10 min read",
    icon: <Lightbulb className="w-5 h-5" />,
    featured: false
  },
  {
    slug: "ai-cold-calling-real-estate-investors",
    title: "AI Cold Calling for Real Estate: Why We Don't Recommend It for Probate",
    excerpt: "AI dialers and voice agents are everywhere in real estate. But for probate leads, they're the wrong tool. Here's why the personal approach still wins.",
    category: "Strategy Guide",
    readTime: "10 min read",
    icon: <Lightbulb className="w-5 h-5" />,
    featured: false
  },
  {
    slug: "cold-texting-real-estate-investors",
    title: "Is Cold Texting Legal for Real Estate Investors in 2026?",
    excerpt: "Cold texting probate leads without consent violates TCPA. The Coffey ruling doesn't make it legal. Learn the real penalties and compliant alternatives.",
    category: "Legal Update",
    readTime: "9 min read",
    icon: <Lightbulb className="w-5 h-5" />,
    featured: false
  }
  // Add more articles here as you create them:
  // {
  //   slug: "article-slug",
  //   title: "Article Title",
  //   excerpt: "Short description...",
  //   category: "Strategy", // or "How-To", "Case Study", "Market Research"
  //   readTime: "X min read",
  //   icon: <Lightbulb className="w-5 h-5" />,
  //   featured: false
  // }
];

const featuredArticles = articles.filter(a => a.featured);
const moreArticles = articles.filter(a => !a.featured);

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar variant="light" />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="font-hero font-[900] text-5xl md:text-6xl lg:text-7xl text-slate-900 uppercase tracking-tighter leading-[0.9] mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0891b2] to-[#7c3aed]">
                  Insights
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
                Original research, market analysis, and strategies for real estate investors.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Insights Section */}
        {featuredArticles.length > 0 && (
          <section className="pb-16 px-6">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-2 mb-6"
              >
                <Star className="w-5 h-5 text-[#0891b2]" />
                <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                  Featured Research
                </h2>
              </motion.div>

              <div className="space-y-6">
                {featuredArticles.map((article, i) => (
                  <motion.div
                    key={article.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                  >
                    <Link href={`/insights/${article.slug}`} className="block group">
                      <div className="p-8 md:p-10 bg-gradient-to-br from-slate-50/80 to-white rounded-3xl border border-slate-200 hover:border-[#0891b2]/40 hover:shadow-xl hover:shadow-[#0891b2]/10 transition-all duration-300">
                        <div className="flex flex-wrap items-center gap-3 mb-5">
                          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0891b2]/10 text-[#0891b2] rounded-full text-sm font-semibold">
                            {article.icon}
                            {article.category}
                          </span>
                          <span className="text-sm text-slate-400">{article.readTime}</span>
                        </div>

                        <h3 className="font-hero font-[900] text-2xl md:text-3xl lg:text-4xl text-slate-900 uppercase tracking-tighter leading-tight mb-4 group-hover:text-[#0891b2] transition-colors">
                          {article.title}
                        </h3>

                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                          {article.excerpt}
                        </p>

                        <div className="flex items-center gap-2 text-[#0891b2] font-bold group-hover:gap-4 transition-all">
                          Read Full Article
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* More Insights Section */}
        {moreArticles.length > 0 && (
          <section className="py-16 px-6 bg-slate-50">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-2 mb-8"
              >
                <FileText className="w-5 h-5 text-slate-400" />
                <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                  More Insights
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {moreArticles.map((article, i) => (
                  <motion.div
                    key={article.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <Link href={`/insights/${article.slug}`} className="block group h-full">
                      <div className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-[#0891b2]/30 hover:shadow-lg transition-all h-full flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-semibold">
                            {article.icon}
                            {article.category}
                          </span>
                          <span className="text-xs text-slate-400">{article.readTime}</span>
                        </div>

                        <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-[#0891b2] transition-colors leading-tight">
                          {article.title}
                        </h3>

                        <p className="text-slate-600 text-sm mb-4 flex-grow line-clamp-3">
                          {article.excerpt}
                        </p>

                        <div className="flex items-center gap-1.5 text-[#0891b2] text-sm font-semibold group-hover:gap-3 transition-all">
                          Read Article
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className={`py-16 sm:py-24 px-6 ${moreArticles.length > 0 ? 'bg-white' : 'bg-slate-50'}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 uppercase tracking-tight">
              Put These Insights Into Action
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              HomeFlip.ai delivers probate leads and guided workflows so you can act on opportunities before your competition.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/how-it-works"
                className="inline-block px-8 py-4 rounded-xl font-bold text-lg uppercase tracking-wide border-2 border-slate-300 text-slate-700 hover:border-[#0891b2] hover:text-[#0891b2] hover:scale-105 active:scale-95 transition-all"
              >
                Learn How It Works
              </Link>
              <Link
                href="/claim-your-county"
                className="btn-gradient inline-block px-8 py-4 rounded-xl font-bold text-lg uppercase tracking-wide shadow-lg shadow-[#0891b2]/20 hover:scale-105 active:scale-95 transition-all"
              >
                Claim Your County
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

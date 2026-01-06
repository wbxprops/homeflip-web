'use client';

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, BarChart3, TrendingUp, Users, Clock, Target, CheckCircle, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ProbateVsForeclosurePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar variant="light" />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 px-6 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-[#0891b2] font-medium mb-6 hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Insights
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#0891b2] font-bold text-sm uppercase tracking-wider mb-4">
                Market Research
              </p>
              <h1 className="font-hero font-[900] text-4xl md:text-5xl lg:text-6xl text-slate-900 uppercase tracking-tighter leading-[0.95] mb-6">
                Probate vs Foreclosures: Why Investors Are Missing Double the Opportunities in 2026
              </h1>
              <p className="text-xl text-slate-600 mb-6">
                Our research reveals probate properties outnumber foreclosures by nearly 2-to-1. Here's what the data shows, and what it means for your investing strategy.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <span>By Gary Bailey and the HomeFlip.ai Research Team</span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span>January 6, 2026</span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span>8 min read</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Stats Highlight */}
        <section className="py-12 px-6 border-b border-slate-100">
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { value: "~780K", label: "Annual Probate Properties", color: "text-[#0891b2]" },
                { value: "~400K", label: "Annual Foreclosure Filings", color: "text-slate-600" },
                { value: "1.95x", label: "More Probate Opportunities", color: "text-[#7c3aed]" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center p-6 bg-slate-50 rounded-2xl"
                >
                  <p className={`text-3xl md:text-4xl font-black ${stat.color}`}>{stat.value}</p>
                  <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-12 sm:py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg prose-slate max-w-none"
            >
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                Most real estate investors chase foreclosures. They attend auctions, scour REO listings, and compete with hedge funds for distressed properties.
              </p>

              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                Meanwhile, a significantly larger pool of off-market deals sits virtually untouched.
              </p>

              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                Our research at HomeFlip.ai reveals a striking imbalance: <strong className="text-slate-900">probate properties outnumber foreclosures by nearly 2-to-1</strong>. While foreclosure filings hover around 400,000 annually, probate cases generate an estimated 780,000 real estate opportunities each year.
              </p>

              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                That's nearly double the deal flow. With a fraction of the competition.
              </p>

              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                For investors comparing probate vs foreclosures, this data signals a major strategic shift. The baby boomer generation is entering the largest wealth transfer in American history, and real estate sits at the center of it.
              </p>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                Our Research Methodology
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                After two decades of investing in probate properties, we wanted to quantify what we'd observed firsthand: probate seemed to offer more opportunities than the foreclosure market everyone was chasing.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                At HomeFlip.ai, we compiled data from court statistics, industry reports, and market analysis to compare probate real estate volume against foreclosure activity.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Our approach:
              </p>

              <ol className="space-y-5 my-8">
                <li className="flex items-start gap-4">
                  <span className="w-9 h-9 rounded-full bg-[#0891b2]/10 text-[#0891b2] font-bold flex items-center justify-center flex-shrink-0 text-lg">1</span>
                  <div>
                    <strong className="text-lg text-slate-900">Probate Volume:</strong>
                    <span className="text-lg text-slate-600"> We analyzed national probate court statistics, then applied conservative estimates for the percentage of cases involving real estate.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-9 h-9 rounded-full bg-[#0891b2]/10 text-[#0891b2] font-bold flex items-center justify-center flex-shrink-0 text-lg">2</span>
                  <div>
                    <strong className="text-lg text-slate-900">Foreclosure Volume:</strong>
                    <span className="text-lg text-slate-600"> We aggregated quarterly and monthly foreclosure filing data from ATTOM Data Solutions, the leading source for property market intelligence.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-9 h-9 rounded-full bg-[#0891b2]/10 text-[#0891b2] font-bold flex items-center justify-center flex-shrink-0 text-lg">3</span>
                  <div>
                    <strong className="text-lg text-slate-900">Conservative Estimates:</strong>
                    <span className="text-lg text-slate-600"> Where ranges existed, we used midpoint or conservative figures to avoid overstating probate opportunities.</span>
                  </div>
                </li>
              </ol>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                The Scale of Probate Properties in the U.S.
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Probate is the legal process of settling a deceased person's estate. When someone passes away owning real estate, that property typically enters probate. This creates an opportunity for investors to acquire off-market real estate directly from heirs.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Annual Probate Case Volume</h3>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                According to{' '}
                <a href="https://www.probatecourtbond.com/probate-statistics-united-states/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline">
                  Probate Court Bond's analysis of U.S. probate statistics
                </a>
                , approximately <strong className="text-slate-900">2.6 million probate cases</strong> are filed annually in the United States. However, this figure includes guardianships, conservatorships, and other non-estate matters.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                When we isolate estate probates specifically (cases involving the distribution of a deceased person's assets) the number drops to approximately <strong className="text-slate-900">1.3 million estate probates per year</strong>.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">How Many Involve Real Estate?</h3>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Not every probate estate includes real property. Research from{' '}
                <a href="https://inherentvalue.ai/no-probate-list-for-finding-inherited-property/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline">
                  Inherent Value AI
                </a>
                {' '}suggests that 30-70% of probate cases may not involve real estate. That means 30-70% do involve property.
              </p>

              <div className="p-6 bg-[#0891b2]/5 border-l-4 border-[#0891b2] rounded-r-xl my-8">
                <p className="text-lg font-bold text-slate-900 m-0">
                  Using a conservative midpoint of 60% real estate involvement:
                </p>
                <p className="text-2xl font-black text-[#0891b2] mt-2 mb-0">
                  1.3 million × 60% = ~780,000 probate properties annually
                </p>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">The Baby Boomer Probate Wave</h3>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                The significance of this number will only grow. Baby boomers (born 1946-1964) represent the largest generation of homeowners in American history. As this generation ages, probate real estate volume is expected to surge.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                According to{' '}
                <a href="https://www.nar.realtor/magazine/real-estate-news/law-and-ethics/real-estate-after-life" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline">
                  NAR's analysis
                </a>
                , the coming decade will see an unprecedented transfer of real estate wealth, much of it flowing through probate courts. Investors who position themselves now will benefit from this generational wave.
              </p>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                Foreclosure Activity: A Smaller Pool Than You Might Think
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Foreclosures dominate investor conversations. They're visible, actively marketed, and have established buying processes. But the actual volume may surprise you.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Current Foreclosure Filing Data</h3>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                ATTOM Data Solutions tracks foreclosure activity nationwide. Recent reports show:
              </p>

              <ul className="space-y-4 my-8">
                <li className="flex items-start gap-3">
                  <BarChart3 className="w-6 h-6 text-[#0891b2] flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-slate-600">
                    <strong className="text-slate-900">Q3 2025:</strong>{' '}
                    <a href="https://www.attomdata.com/news/market-trends/foreclosures/q3-and-september-2025-foreclosure-market-report/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline">
                      101,513 foreclosure filings
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <BarChart3 className="w-6 h-6 text-[#0891b2] flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-slate-600">
                    <strong className="text-slate-900">October 2025:</strong>{' '}
                    <a href="https://www.attomdata.com/news/market-trends/foreclosures/october-2025-foreclosure-market-report/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline">
                      Continued elevated activity
                    </a>
                    {' '}with year-over-year increases
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <BarChart3 className="w-6 h-6 text-[#0891b2] flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-slate-600">
                    <strong className="text-slate-900">November 2025:</strong>{' '}
                    <a href="https://www.attomdata.com/news/market-trends/foreclosures/november-2025-foreclosure-market-report/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline">
                      35,651 total filings
                    </a>
                    , up 18-20% year-over-year
                  </span>
                </li>
              </ul>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Annualizing these figures suggests <strong className="text-slate-900">360,000-420,000 foreclosure filings nationally</strong> for 2025. We use ~400,000 as a working estimate.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Not All Foreclosures Become Investor Opportunities</h3>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                It's worth noting that foreclosure filings don't all convert to investor acquisitions:
              </p>

              <ul className="space-y-3 my-8">
                {[
                  "Many borrowers cure their default before auction",
                  "Lenders often retain properties as REO (bank-owned)",
                  "Institutional buyers dominate many auction markets",
                  "Some properties sell at or above market value"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-slate-400 flex-shrink-0 mt-2" />
                    <span className="text-lg text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                Key Conclusion: Probate Outnumbers Foreclosures by Nearly Double
              </h2>

              {/* Comparison Table */}
              <div className="overflow-x-auto my-8 -mx-4 px-4 sm:mx-0 sm:px-0">
                <table className="w-full border-collapse rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left p-4 font-bold text-slate-900">Metric</th>
                      <th className="text-center p-4 font-bold text-[#0891b2]">Probate Properties</th>
                      <th className="text-center p-4 font-bold text-slate-600">Foreclosure Filings</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="bg-white">
                      <td className="p-4 text-slate-700 font-medium">Annual Volume</td>
                      <td className="p-4 text-center font-bold text-[#0891b2]">~780,000</td>
                      <td className="p-4 text-center text-slate-600">~400,000</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-4 text-slate-700 font-medium">Ratio</td>
                      <td className="p-4 text-center font-bold text-[#0891b2]">1.95x</td>
                      <td className="p-4 text-center text-slate-600">1x</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 text-slate-700 font-medium">Competition Level</td>
                      <td className="p-4 text-center text-[#0891b2]">Low-Moderate</td>
                      <td className="p-4 text-center text-slate-600">High-Very High</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-4 text-slate-700 font-medium">Institutional Presence</td>
                      <td className="p-4 text-center text-[#0891b2]">Minimal</td>
                      <td className="p-4 text-center text-slate-600">Significant</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 text-slate-700 font-medium">Negotiation Flexibility</td>
                      <td className="p-4 text-center text-[#0891b2]">High</td>
                      <td className="p-4 text-center text-slate-600">Limited</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-4 text-slate-700 font-medium">Typical Seller Motivation</td>
                      <td className="p-4 text-center text-[#0891b2]">Want to settle estate</td>
                      <td className="p-4 text-center text-slate-600">Forced sale</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-8 bg-gradient-to-br from-[#0891b2]/10 to-[#7c3aed]/10 rounded-3xl border border-[#0891b2]/20 my-10">
                <p className="text-xl md:text-2xl font-bold text-slate-900 text-center m-0">
                  Probate real estate investing offers nearly double the annual deal volume of foreclosures, with substantially less competition and greater negotiation flexibility.
                </p>
              </div>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                What This Means for Real Estate Investors
              </h2>

              <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Opportunities in Probate</h3>

              <div className="grid sm:grid-cols-2 gap-4 my-8">
                {[
                  { icon: <Users className="w-5 h-5" />, title: "Less Competition", desc: "Most investors overlook probate entirely. You're not bidding against hedge funds." },
                  { icon: <Target className="w-5 h-5" />, title: "Motivated Sellers", desc: "Heirs often prioritize speed and simplicity over maximum price." },
                  { icon: <TrendingUp className="w-5 h-5" />, title: "Direct Relationships", desc: "Build rapport with executors and attorneys for repeat deal flow." },
                  { icon: <Clock className="w-5 h-5" />, title: "Predictable Volume", desc: "Unlike foreclosures, probate is consistent regardless of market conditions." }
                ].map((item, i) => (
                  <div key={i} className="p-5 bg-slate-50 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-[#0891b2]/10 flex items-center justify-center text-[#0891b2]">
                        {item.icon}
                      </div>
                      <h4 className="font-bold text-slate-900 m-0">{item.title}</h4>
                    </div>
                    <p className="text-slate-600 text-sm m-0">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Challenges to Consider</h3>

              <ul className="space-y-4 my-8">
                {[
                  { title: "Longer Timelines", desc: "Probate can take 6-18 months. Patience is essential." },
                  { title: "Emotional Sensitivity", desc: "You're working with grieving families. Professionalism and empathy are requirements." },
                  { title: "Legal Complexity", desc: "Each state has different probate laws. Understanding local procedures matters." },
                  { title: "Lead Generation", desc: "Finding probate properties requires accessing court records and building outreach systems." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-slate-400 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-slate-600">
                      <strong className="text-slate-900">{item.title}:</strong> {item.desc}
                    </span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Strategic Implications for 2026</h3>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                The baby boomer probate wave is not a future event. It's happening now. Investors who build probate expertise today will capture disproportionate deal flow as volume increases over the coming decade.
              </p>

              <ol className="space-y-5 my-8">
                {[
                  { title: "Diversify Lead Sources", desc: "Don't rely solely on foreclosures. Add probate leads to your acquisition pipeline." },
                  { title: "Build Local Court Relationships", desc: "Understand your county's probate process. Know the key players." },
                  { title: "Develop Empathy-Based Marketing", desc: "Your outreach should be helpful, not predatory. Position yourself as a problem-solver." },
                  { title: "Systematize Your Approach", desc: "Probate investing rewards consistency. Automate lead tracking and follow-up." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-9 h-9 rounded-full bg-[#7c3aed]/10 text-[#7c3aed] font-bold flex items-center justify-center flex-shrink-0 text-lg">{i + 1}</span>
                    <div>
                      <strong className="text-lg text-slate-900">{item.title}:</strong>
                      <span className="text-lg text-slate-600"> {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ol>

              {/* How HomeFlip.ai Can Help - Glassmorphic Section */}
              <div className="my-16 -mx-4 sm:-mx-8 md:-mx-12">
                <div className="bg-gradient-to-br from-slate-50/80 to-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-200/60 shadow-xl shadow-slate-200/50">
                  <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mb-4 text-center">
                    How HomeFlip.ai Can Help
                  </h2>
                  <p className="text-lg md:text-xl text-slate-600 text-center max-w-2xl mx-auto mb-10">
                    We built our platform specifically for investors pursuing off-market probate properties. Our system delivers:
                  </p>

                  <div className="space-y-3 md:space-y-4 max-w-2xl mx-auto">
                    {[
                      { title: "Fresh Probate Leads", desc: "Direct from county court records, delivered to your dashboard daily" },
                      { title: "Property Intelligence", desc: "Automatically matched to tax records and ownership data" },
                      { title: "Guided Workflows", desc: "Know exactly who to contact, when, and with what message" },
                      { title: "Timeline Tracking", desc: "Monitor case progress so you can act at the right moment" },
                      { title: "AI-Powered Prioritization", desc: "Focus on the leads most likely to convert" }
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 p-4 md:p-5 bg-white/70 backdrop-blur-sm rounded-xl border border-slate-100 hover:border-[#0891b2]/30 hover:shadow-md transition-all"
                      >
                        <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-[#0891b2]/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-[#0891b2]" />
                        </div>
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-0.5">{item.title}</h3>
                          <p className="text-slate-500 md:text-lg">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 text-center">
                    <p className="text-slate-600 text-lg mb-8">
                      While other investors fight over a limited number of foreclosures, you'll have access to nearly <span className="text-[#0891b2] font-bold">twice as many opportunities</span> with the tools to work them efficiently.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <Link
                        href="/how-it-works"
                        className="inline-block px-8 py-4 rounded-xl font-bold text-lg uppercase tracking-wide border-2 border-slate-300 text-slate-700 hover:border-[#0891b2] hover:text-[#0891b2] hover:scale-105 active:scale-95 transition-all"
                      >
                        Find Out More
                      </Link>
                      <Link
                        href="/claim-your-county"
                        className="inline-block btn-gradient px-8 py-4 rounded-xl font-bold text-lg uppercase tracking-wide shadow-lg shadow-[#0891b2]/20 hover:scale-105 active:scale-95 transition-all"
                      >
                        Claim Your County
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                Conclusion
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                The data is clear: probate properties represent a larger, less competitive opportunity than foreclosures. With an estimated 780,000 probate real estate opportunities annually, compared to roughly 400,000 foreclosure filings, investors focused exclusively on distressed properties are missing nearly half the market.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                The baby boomer probate wave will only amplify this imbalance. Trillions in real estate wealth will transfer over the coming decades, much of it flowing through probate courts across America.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Smart investors are repositioning now. The opportunity is there. The question is whether you'll take it.
              </p>

              {/* References */}
              <div className="mt-16 pt-8 border-t border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">References</h3>
                <ol className="space-y-2 text-sm text-slate-500">
                  <li className="flex items-start gap-2">
                    <span>1.</span>
                    <a href="https://www.probatecourtbond.com/probate-statistics-united-states/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline flex items-center gap-1">
                      Probate Court Bond — Probate Statistics in the United States
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>2.</span>
                    <a href="https://inherentvalue.ai/no-probate-list-for-finding-inherited-property/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline flex items-center gap-1">
                      Inherent Value AI — No Probate List for Finding Inherited Property
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>3.</span>
                    <a href="https://theprobatepro.com/blog/real-estate-in-probate-what-you-need-to-know/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline flex items-center gap-1">
                      The Probate Pro — Real Estate in Probate
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>4.</span>
                    <a href="https://www.attomdata.com/news/market-trends/foreclosures/november-2025-foreclosure-market-report/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline flex items-center gap-1">
                      ATTOM Data — November 2025 Foreclosure Market Report
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>5.</span>
                    <a href="https://www.attomdata.com/news/market-trends/foreclosures/q3-and-september-2025-foreclosure-market-report/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline flex items-center gap-1">
                      ATTOM Data — Q3 2025 Foreclosure Market Report
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>6.</span>
                    <a href="https://www.attomdata.com/news/market-trends/foreclosures/october-2025-foreclosure-market-report/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline flex items-center gap-1">
                      ATTOM Data — October 2025 Foreclosure Market Report
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>7.</span>
                    <a href="https://www.nar.realtor/magazine/real-estate-news/law-and-ethics/real-estate-after-life" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline flex items-center gap-1">
                      NAR — Real Estate After Life
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                </ol>
              </div>

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-slate-50 rounded-2xl">
                <p className="text-sm text-slate-500 mb-2">Written by</p>
                <p className="font-bold text-slate-900">Gary Bailey and the HomeFlip.ai Research Team</p>
                <p className="text-sm text-slate-600 mt-2">
                  Gary Bailey is a full-time real estate investor with over 20 years of experience and more than 2,000 transactions. He founded HomeFlip.ai to help investors build consistent deal flow through probate intelligence.
                </p>
              </div>
            </motion.div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 px-6 bg-slate-50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 uppercase tracking-tight">
              Ready to Tap Into Probate Opportunities?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Join investors who are building sustainable businesses with consistent, off-market probate deals.
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

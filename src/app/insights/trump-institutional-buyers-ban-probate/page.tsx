'use client';

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, TrendingDown, Building2, Users, Target, CheckCircle, AlertTriangle, ExternalLink, ChevronDown, MapPin, Percent } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// FAQ data
const faqs = [
  {
    question: "What did Trump announce about institutional buyers on January 7, 2026?",
    answer: "President Trump announced plans to ban large institutional investors from purchasing single-family homes, calling on Congress to make it permanent. He stated \"People live in homes, not corporations\" as the rationale."
  },
  {
    question: "Do institutional investors really buy many probate properties?",
    answer: "No. Institutional buyers focus on bulk purchases, MLS listings in target markets, and auction platforms. Probate properties, which typically sell off-market through direct executor outreach, aren't a major institutional target."
  },
  {
    question: "How much of the single-family home market do large institutions control?",
    answer: "Large institutional investors (1,000+ properties) own approximately 3-3.8% of single-family rentals nationwide. Their share of annual purchases dropped to about 0.3% in 2024."
  },
  {
    question: "Will Trump's ban make probate deals easier to get?",
    answer: "Potentially, through indirect effects. Less institutional activity could reduce competition on listed probate properties and shift seller price expectations. But your main competition on off-market probate deals comes from other individual investors."
  },
  {
    question: "What strategies should probate flippers use with less competition?",
    answer: "Focus on direct sourcing (skip tracing, cold calling, direct mail), refine executor outreach with empathy and patience, and be ready to move quickly on listed properties."
  },
  {
    question: "Is the institutional buyer ban already in effect?",
    answer: "No. As of January 8, 2026, this is an announced proposal. Implementation details, executive actions, and congressional legislation are pending."
  },
  {
    question: "How can I find exclusive probate leads before others?",
    answer: "HomeFlip.ai delivers fresh probate leads directly from county court records, providing executor and property information as cases are filed."
  },
  {
    question: "What if the ban doesn't pass Congress?",
    answer: "The policy may still have executive action components, and market psychology may shift regardless. More importantly, direct probate sourcing is advantageous regardless of policy outcomes."
  },
  {
    question: "Are there markets where institutions dominate probate?",
    answer: "Not significantly. Institutional buying concentrates in certain metros (Atlanta, Phoenix, etc.) for conventional listings, but probate properties remain dominated by individual investors doing direct outreach."
  },
  {
    question: "How does HomeFlip.ai help in a changing competitive landscape?",
    answer: "HomeFlip.ai provides exclusive probate leads from court records, helping you reach motivated sellers before properties hit public markets, regardless of what institutional buyers are doing."
  }
];

// Key stats
const keyStats = [
  { value: "3-4%", label: "Institutional share", subtext: "Of single-family rentals" },
  { value: "90%", label: "Acquisition drop", subtext: "Since 2022 peak" },
  { value: "0.3%", label: "2024 purchases", subtext: "By large institutions" },
  { value: "90%+", label: "Mom-and-pop owned", subtext: "Of investor SFR stock" }
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-slate-200 last:border-b-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-start justify-between gap-4 text-left"
      >
        <span className="text-lg font-semibold text-slate-900">{question}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 mt-1 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="pb-5 text-slate-600 leading-relaxed">
          {answer}
        </div>
      )}
    </motion.div>
  );
}

export default function InstitutionalBuyersBanPage() {
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
                Strategy
              </p>
              <h1 className="font-hero font-[900] text-4xl md:text-5xl lg:text-6xl text-slate-900 uppercase tracking-tighter leading-[0.95] mb-6">
                Trump's Proposed Ban on Institutional Buyers: What It Means for Probate Investors
              </h1>
              <p className="text-xl text-slate-600 mb-6">
                The January 7, 2026 announcement could shift competition dynamics. Here's what the data shows and how probate investors should prepare.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <span>By Gary Bailey and the HomeFlip.ai Research Team</span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span>January 2026</span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span>9 min read</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Stats Grid */}
        <section className="py-12 px-6 border-b border-slate-100">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {keyStats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="p-5 bg-gradient-to-br from-[#0891b2]/5 to-[#7c3aed]/5 rounded-2xl border border-[#0891b2]/10 text-center"
                >
                  <p className="text-3xl md:text-4xl font-black text-slate-900 mb-1">{stat.value}</p>
                  <p className="text-sm font-semibold text-slate-700">{stat.label}</p>
                  <p className="text-xs text-slate-500 mt-1">{stat.subtext}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Takeaway Highlight */}
        <section className="py-12 px-6 border-b border-slate-100">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 bg-gradient-to-br from-[#0891b2]/10 to-[#7c3aed]/10 rounded-3xl border border-[#0891b2]/20"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0891b2]/20 flex items-center justify-center flex-shrink-0">
                  <TrendingDown className="w-6 h-6 text-[#0891b2]" />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                    The Bottom Line
                  </p>
                  <p className="text-lg text-slate-700">
                    Institutional buyers own a small slice of single-family homes and rarely compete for off-market probate deals. <strong>Any benefit to probate investors is indirect.</strong> The smart play: strengthen your direct sourcing now, regardless of policy outcomes.
                  </p>
                </div>
              </div>
            </motion.div>
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
                On January 7, 2026, President Trump announced plans to ban large institutional investors from purchasing single-family homes. "People live in homes, not corporations," he posted, calling on Congress to codify the restriction.
              </p>

              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                For probate investors, this raises an obvious question: Does this mean less competition for deals?
              </p>

              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                The honest answer is nuanced. Institutional investors own a surprisingly small share of single-family homes (around 3-4% nationally), and they rarely compete directly for off-market probate properties. But policy shifts create ripple effects. Markets change. Competition dynamics shift.
              </p>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                What Trump's Proposed Ban Actually Entails
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                President Trump announced on January 7, 2026 that his administration would take "immediate steps" to ban large institutional investors from buying more single-family homes. He also called on Congress to pass legislation making the restriction permanent.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 my-8">
                {[
                  { icon: <Building2 className="w-5 h-5" />, title: "Targets Large Institutions", desc: "Wall Street firms, hedge funds, private equity. Not small landlords or individual investors." },
                  { icon: <Target className="w-5 h-5" />, title: "Single-Family Focus", desc: "Multi-family and commercial properties aren't included in the announced scope." },
                  { icon: <Users className="w-5 h-5" />, title: "Affordability Goal", desc: "Stated aim is boosting homeownership by removing deep-pocketed competitors." },
                  { icon: <AlertTriangle className="w-5 h-5" />, title: "Still a Proposal", desc: "Implementation details, legal challenges, and congressional action remain uncertain." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 bg-slate-50 rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-[#0891b2]/10 flex items-center justify-center text-[#0891b2] flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 m-0">{item.title}</h4>
                      <p className="text-slate-600 text-sm m-0 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                The Real Market Share of Institutional Buyers
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Before assuming institutional buyers are your main competition, look at the data.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                According to research from the Urban Institute and confirmed by the U.S. Government Accountability Office:
              </p>

              <ul className="space-y-3 my-8">
                {[
                  "Large institutional investors own approximately 3-3.8% of the nationwide single-family rental stock",
                  "Institutional acquisitions have dropped roughly 90% from their 2022 peak",
                  "Only about 0.3% of 2024 home sales went to large institutional buyers",
                  "Over 90% of investor-owned single-family rentals are held by mom-and-pop owners"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Percent className="w-5 h-5 text-[#0891b2] flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                In short: large institutions are a small piece of the overall market. Your real competition on most deals comes from other individual investors, owner-occupants, and small landlords.
              </p>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                Why Probate Properties Are Different
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Probate deals have a different competitive landscape than typical MLS listings or bulk REO purchases.
              </p>

              <div className="overflow-x-auto my-8 -mx-4 px-4 sm:mx-0 sm:px-0">
                <table className="w-full border-collapse rounded-xl overflow-hidden text-sm">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left p-4 font-bold text-slate-900">How Institutions Buy</th>
                      <th className="text-left p-4 font-bold text-slate-900">How Probate Properties Sell</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="bg-white">
                      <td className="p-4 text-slate-600">Bulk purchases from banks/servicers</td>
                      <td className="p-4 text-slate-600">Off-market through executor outreach</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-4 text-slate-600">MLS listings in target markets</td>
                      <td className="p-4 text-slate-600">Estate sales and local auctions</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 text-slate-600">Auction platforms at scale</td>
                      <td className="p-4 text-slate-600">Direct negotiation with heirs</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-4 text-slate-600">Data analysis and bulk acquisition</td>
                      <td className="p-4 text-slate-600">Personal relationships with families</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Probate properties favor investors who do direct outreach: cold calling, direct mail, and personal relationships with executors and heirs. This is the opposite of institutional buying.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Our research shows{' '}
                <Link href="/insights/probate-vs-foreclosure" className="text-[#0891b2] hover:underline">
                  probate properties outnumber foreclosures nearly 2-to-1 nationally
                </Link>. This is a massive, fragmented market. There's no database institutions can query to buy probate leads at scale.
              </p>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                How Reduced Competition Could Change the Game
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Even though institutions rarely compete directly for off-market probate properties, a ban could create indirect benefits:
              </p>

              <ol className="space-y-5 my-8">
                {[
                  { title: "Less Competition on Listed Probate Properties", desc: "Some probate properties hit the MLS. With fewer institutional cash offers, individual investors face less competition." },
                  { title: "Improved Negotiation Leverage", desc: "Institutional presence sets pricing benchmarks. Remove that, and sellers may have more realistic expectations." },
                  { title: "More Inventory Reaching Individual Buyers", desc: "If institutions can't absorb entry-level homes, more properties remain available for individual investors." },
                  { title: "Psychological Shift in Seller Expectations", desc: "\"A hedge fund will pay cash\" is a mental anchor. Remove that, and sellers may be more open to local investors." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-9 h-9 rounded-full bg-[#0891b2]/10 text-[#0891b2] font-bold flex items-center justify-center flex-shrink-0 text-lg">{i + 1}</span>
                    <div>
                      <strong className="text-lg text-slate-900">{item.title}</strong>
                      <span className="text-lg text-slate-600">: {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ol>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                Markets Where Institutions Concentrated
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                After the 2008 financial crisis, institutional investors aggressively bought foreclosures in certain markets:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 my-8">
                <div className="p-5 bg-slate-50 rounded-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-[#0891b2]" />
                    <h4 className="font-bold text-slate-900 m-0">High Institutional Presence</h4>
                  </div>
                  <p className="text-slate-600 text-sm m-0">Atlanta, Phoenix, Tampa/Orlando, Charlotte, Dallas/Houston</p>
                </div>
                <div className="p-5 bg-slate-50 rounded-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-[#7c3aed]" />
                    <h4 className="font-bold text-slate-900 m-0">Lower Institutional Presence</h4>
                  </div>
                  <p className="text-slate-600 text-sm m-0">Midwest metros, smaller markets, rural areas</p>
                </div>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Probate investors in high-concentration markets could see improved deal flow if institutional competition decreases, particularly on probate properties that get listed publicly.
              </p>

              {/* HomeFlip.ai CTA Section */}
              <div className="my-16 -mx-4 sm:-mx-8 md:-mx-12">
                <div className="bg-gradient-to-br from-slate-50/80 to-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-200/60 shadow-xl shadow-slate-200/50">
                  <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mb-4 text-center">
                    Actionable Strategies to Capitalize Now
                  </h2>
                  <p className="text-lg md:text-xl text-slate-600 text-center max-w-2xl mx-auto mb-10">
                    Whether or not the ban passes, strengthen your position with direct probate sourcing:
                  </p>

                  <div className="space-y-3 md:space-y-4 max-w-2xl mx-auto">
                    {[
                      { title: "Double Down on Direct Sourcing", desc: "Skip tracing, personalized mail, cold calling with genuine conversation" },
                      { title: "Refine Executor Outreach", desc: "Lead with empathy, offer solutions, be patient with timelines" },
                      { title: "Move Fast on Listed Properties", desc: "With fewer cash buyers, you may face less competition at offer stage" },
                      { title: "Get Exclusive Leads Daily", desc: "HomeFlip.ai delivers fresh probate leads from county court records" }
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
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <Link
                        href="/how-it-works"
                        className="inline-block px-8 py-4 rounded-xl font-bold text-lg uppercase tracking-wide border-2 border-slate-300 text-slate-700 hover:border-[#0891b2] hover:text-[#0891b2] hover:scale-105 active:scale-95 transition-all"
                      >
                        See How It Works
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
                Realistic Expectations and Risks
              </h2>

              <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl my-8">
                <p className="text-lg text-slate-700 font-bold m-0 mb-3">
                  What We Don't Know Yet
                </p>
                <ul className="space-y-2 text-base text-slate-600 m-0">
                  <li><strong>Implementation:</strong> This is an announcement, not law. Timeline could stretch months or years.</li>
                  <li><strong>Institutions already pulling back:</strong> Acquisitions down 90% since 2022. Ban may codify existing trends.</li>
                  <li><strong>Probate was never highly institutional:</strong> Benefits to probate investors are indirect.</li>
                  <li><strong>Policy can reverse:</strong> Administrations change. Don't build strategy around one policy.</li>
                </ul>
              </div>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                Conclusion
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Trump's proposed ban on institutional buyers is generating headlines, but the practical impact on probate investors is likely indirect. Institutional buyers already own a small share of single-family homes, and they rarely compete for off-market probate deals.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                That said, market dynamics can shift. Political pressure on institutional investors is increasing. And any reduction in competition on listed properties or adjustment in seller expectations could benefit individual investors.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                The smart play isn't waiting for Washington. It's strengthening your direct probate sourcing now. Off-market deals through executor outreach have always been less competitive than public listings. That advantage doesn't depend on policy.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Build your pipeline. Refine your outreach. Let the policy debates play out while you close deals.
              </p>

              {/* References */}
              <div className="mt-16 pt-8 border-t border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">References</h3>
                <ol className="space-y-2 text-sm text-slate-500">
                  <li className="flex items-start gap-2">
                    <span>1.</span>
                    <a href="https://www.reuters.com/world/us/us-will-ban-large-institutional-investors-buying-single-family-homes-trump-says-2026-01-07/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline flex items-center gap-1">
                      Reuters: Trump Announces Institutional Buyer Ban
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>2.</span>
                    <a href="https://www.nytimes.com/2026/01/07/business/trump-wall-street-investors-homes.html" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline flex items-center gap-1">
                      NYT: Trump Targets Wall Street Investors
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>3.</span>
                    <a href="https://www.urban.org/sites/default/files/2023-08/A%20Profile%20of%20Institutional%20Investor%E2%80%93Owned%20Single-Family%20Rental%20Properties.pdf" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline flex items-center gap-1">
                      Urban Institute: Institutional SFR Profile
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>4.</span>
                    <a href="https://www.gao.gov/products/gao-24-106643" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline flex items-center gap-1">
                      U.S. GAO: Institutional Investment Report
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>5.</span>
                    <a href="https://www.cnbc.com/2025/10/07/home-sales-investors-make-up-highest-share-of-buyers-in-5-years.html" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline flex items-center gap-1">
                      CNBC: Investor Share of Home Purchases
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
                  Gary Bailey is a full-time real estate investor with over 20 years of experience and more than 2,000 transactions. He founded HomeFlip.ai to help investors build consistent deal flow through probate intelligence. Based in Cincinnati, Ohio.
                </p>
                <p className="text-xs text-slate-400 mt-4 italic">
                  Disclaimer: This article is for informational purposes only and does not constitute investment or legal advice. Policy details are based on announcements as of January 8, 2026 and are subject to change. Consult with qualified professionals before making investment decisions.
                </p>
              </div>
            </motion.div>
          </div>
        </article>

        {/* FAQ Section */}
        <section className="py-16 px-6 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate-600">
                Common questions about the institutional buyer ban and probate investing.
              </p>
            </motion.div>

            <div className="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-200">
              {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 px-6 bg-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 uppercase tracking-tight">
              Ready to Build Your Pipeline?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Don't wait for policy. Start getting exclusive probate leads today.
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

'use client';

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, Home, Users, MapPin, CheckCircle, AlertTriangle, ExternalLink, ChevronDown, Calendar, DollarSign } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// FAQ data
const faqs = [
  {
    question: "What is the Silver Tsunami in real estate?",
    answer: "The Silver Tsunami refers to the demographic wave of baby boomers (born 1946-1964) aging and eventually exiting homeownership through downsizing, senior living, or death. It's expected to gradually increase housing inventory over the next 10-15 years."
  },
  {
    question: "How many homes do baby boomers currently own?",
    answer: "Boomers own approximately 32 million homes, representing 41% of total U.S. housing stock. These properties are valued at roughly $13.5 trillion."
  },
  {
    question: "Will the Silver Tsunami cause a flood of homes on the market in 2026?",
    answer: "No. Research from Fannie Mae and the MBA projects a gradual increase in inventory, not a sudden flood. Demand from younger generations is expected to absorb most of the supply. The shift unfolds over years, with peak impact expected in the late 2020s through 2030s."
  },
  {
    question: "How does the Silver Tsunami create more probate properties?",
    answer: "As boomers pass away, their estates must be settled. Many lack proper estate planning (trusts, etc.), meaning properties go through probate court. Rising boomer mortality means rising probate filings."
  },
  {
    question: "When is the peak of the Silver Tsunami expected?",
    answer: "Projections suggest the peak impact on housing inventory will occur between 2028 and 2035, as the largest cohorts of boomers reach their late 70s and 80s."
  },
  {
    question: "Which states or regions will see the biggest impact?",
    answer: "States with large boomer populations and high homeownership rates, including Sun Belt retiree destinations (Florida, Arizona, Texas) and Midwest/Rust Belt states (Ohio, Pennsylvania, Michigan) where boomers stayed in family homes."
  },
  {
    question: "Should investors expect lower home prices because of the Silver Tsunami?",
    answer: "Unlikely. MBA research projects that increased supply from older homeowners will be largely absorbed by demand from younger buyers. Regional variations may occur, but no dramatic price drops are expected from demographics alone."
  },
  {
    question: "How can I find probate leads tied to boomer estates?",
    answer: "HomeFlip.ai sources probate leads directly from county court records, delivering fresh filings daily. This captures estate settlements as they enter the system, including the growing volume from boomer mortality."
  },
  {
    question: "Is the Silver Tsunami more hype than reality?",
    answer: "The demographic shift is real. The hype is in expecting dramatic, sudden market changes. The actual impact is gradual but significant for investors focused on specific niches like probate."
  },
  {
    question: "What are the risks of waiting for a Silver Tsunami inventory surge?",
    answer: "The 'surge' may never feel dramatic. Waiting for a flood means missing the steady increase already underway. Investors building systems now will be positioned when volume peaks; those waiting may find themselves behind."
  }
];

// Key stats
const keyStats = [
  { value: "32M", label: "Homes owned by boomers", subtext: "41% of U.S. housing stock" },
  { value: "$13.5T", label: "Property value", subtext: "Held by boomer homeowners" },
  { value: "$17.3T", label: "Home equity", subtext: "Across boomer generation" },
  { value: "13-15M", label: "Projected exits", subtext: "From homeownership 2026-2036" }
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

export default function SilverTsunamiPage() {
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
                Silver Tsunami: How Baby Boomers Are Reshaping Probate Real Estate
              </h1>
              <p className="text-xl text-slate-600 mb-6">
                Baby boomers own 41% of U.S. homes worth $13.5 trillion. As this generation ages, probate properties will surge. Here's what investors need to know.
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
                  <TrendingUp className="w-6 h-6 text-[#0891b2]" />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                    The Bottom Line
                  </p>
                  <p className="text-lg text-slate-700">
                    The Silver Tsunami isn't a dramatic flood. It's a gradual shift over 10-15 years. For probate investors, the math is simple: <strong>more boomer deaths = more estates = more probate filings = more opportunities.</strong>
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
                You've probably heard the term "Silver Tsunami." It sounds dramatic. Headlines promise a flood of homes hitting the market as baby boomers age out of homeownership.
              </p>

              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                The reality is more nuanced. But for probate investors, the core insight matters: <strong className="text-slate-900">the largest generation of homeowners in American history is entering the stage of life where estates get settled.</strong>
              </p>

              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                Over the next decade, somewhere between 13 and 15 million boomer homeowners will exit the market through downsizing, moves to senior living, or death. Many of those properties will go through probate.
              </p>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                What Is the Silver Tsunami?
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                The term describes the broad demographic shift as baby boomers (born 1946-1964) age into retirement and beyond. According to Investopedia, it refers to "the profound social and economic changes being caused by the aging of the U.S. population."
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                In 2020, 55.8 million Americans were 65 or older, representing 16.8% of the population. That number grows every year as the boomer generation moves through their 60s, 70s, and 80s.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                The "tsunami" metaphor suggests something sudden and overwhelming. In practice, demographic shifts happen gradually. The real estate impact won't be a single wave. It's more like a rising tide that builds over years.
              </p>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                Boomers' Dominance in Housing
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                The numbers are striking. Boomers aren't just the largest group of homeowners. They're also the most equity-rich. Decades of appreciation, combined with paid-off or low-balance mortgages, mean the average boomer homeowner sits on substantial wealth locked in their property.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 my-8">
                {[
                  { icon: <Home className="w-5 h-5" />, title: "53% of sellers", desc: "Boomers represent over half of all home sellers in 2025" },
                  { icon: <Users className="w-5 h-5" />, title: "42% of buyers", desc: "Many boomers are also buying (downsizing or relocating)" },
                  { icon: <DollarSign className="w-5 h-5" />, title: "75% plan to pass on", desc: "Three quarters intend to leave home or proceeds to heirs" },
                  { icon: <Calendar className="w-5 h-5" />, title: "61% never plan to sell", desc: "Most boomers prefer aging in place" }
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

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Here's the other side: boomers are staying put. Redfin reports that 61% say they never plan to sell. They're aging in place at historically high rates. This "aging in place" preference is a major reason today's housing inventory remains tight.
              </p>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                Projected Impact on Housing Inventory
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Will the Silver Tsunami flood the market with homes? Probably not.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                According to Fannie Mae projections, <strong className="text-slate-900">13.1 to 14.6 million boomer homeowners will exit homeownership between 2026 and 2036.</strong> That's significant, averaging 1.3 to 1.5 million per year.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                But the Mortgage Bankers Association's analysis paints a balanced picture. While supply from older homeowners will increase to 8-9 million units annually by 2035, demand from Gen X, Millennials, and Gen Z buyers is expected to absorb most of this inventory.
              </p>

              <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl my-8">
                <p className="text-lg text-slate-700 font-bold m-0 mb-2">
                  For the Broader Market
                </p>
                <p className="text-base text-slate-600 m-0">
                  Expect slightly more inventory, possible regional variations, continued competition for well-priced properties, and no dramatic price corrections from demographics alone.
                </p>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                For probate investors, the picture looks different. The question isn't whether there's a market glut. It's whether probate filings increase. They will.
              </p>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                How the Silver Tsunami Drives Probate Opportunities
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                <strong className="text-slate-900">Not all estate transfers are smooth.</strong> Freddie Mac reports that 75% of boomers plan to leave their home or proceeds to their children. That sounds like a straightforward inheritance. But planning to pass on assets and actually having proper estate planning in place are two different things.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Many boomer estates will require probate because:
              </p>

              <ul className="space-y-3 my-8">
                {[
                  "No trust was established",
                  "Wills need court validation",
                  "Multiple heirs require court oversight",
                  "Property titles need clearing"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0891b2] flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                When a property goes through probate, it creates a motivated seller situation. Executors are often overwhelmed, unfamiliar with real estate, eager to settle, and dealing with a property they don't live near.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Our research at HomeFlip.ai already shows{' '}
                <Link href="/insights/probate-vs-foreclosure" className="text-[#0891b2] hover:underline">
                  probate properties outnumber foreclosures nearly 2-to-1 nationally
                </Link>. The Silver Tsunami will widen that gap.
              </p>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                Regional Variations and Timing
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Before you gear up for a "flood" of deals, some reality checks:
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Timing</h3>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                The Silver Tsunami isn't a 2026 event. It's a decade-long demographic shift. The oldest boomers are now 80. The youngest are 62. Peak impact on housing inventory is projected for the late 2020s through mid-2030s. This is a long game.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Regional Concentration</h3>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Boomer populations aren't evenly distributed. Expect higher probate volume in:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 my-8">
                <div className="p-5 bg-slate-50 rounded-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-[#0891b2]" />
                    <h4 className="font-bold text-slate-900 m-0">Sun Belt States</h4>
                  </div>
                  <p className="text-slate-600 text-sm m-0">Florida, Arizona, Texas, North Carolina (large retiree populations)</p>
                </div>
                <div className="p-5 bg-slate-50 rounded-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-[#7c3aed]" />
                    <h4 className="font-bold text-slate-900 m-0">Rust Belt/Midwest</h4>
                  </div>
                  <p className="text-slate-600 text-sm m-0">Ohio, Pennsylvania, Michigan, Illinois (boomers stayed in family homes)</p>
                </div>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                If you're claiming a county with HomeFlip.ai, consider boomer concentration as a factor. Counties with older median ages will see proportionally more probate activity.
              </p>

              {/* HomeFlip.ai CTA Section */}
              <div className="my-16 -mx-4 sm:-mx-8 md:-mx-12">
                <div className="bg-gradient-to-br from-slate-50/80 to-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-200/60 shadow-xl shadow-slate-200/50">
                  <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mb-4 text-center">
                    Position Yourself Now
                  </h2>
                  <p className="text-lg md:text-xl text-slate-600 text-center max-w-2xl mx-auto mb-10">
                    The Silver Tsunami is a long-term trend. Investors building systems today will be positioned when volume peaks.
                  </p>

                  <div className="space-y-3 md:space-y-4 max-w-2xl mx-auto">
                    {[
                      { title: "Daily Probate Leads", desc: "Fresh from county court records as estates enter the system" },
                      { title: "Property Data Matched", desc: "Address, value estimates, owner info included" },
                      { title: "Boomer Estate Capture", desc: "As mortality increases, so does your lead volume" },
                      { title: "Exclusive Counties", desc: "Less competition in your market" }
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
                Action Steps for Probate Investors
              </h2>

              <ol className="space-y-5 my-8">
                {[
                  { title: "Understand the timeline", desc: "This is a 10-15 year trend, not a short-term play. Build sustainable systems." },
                  { title: "Evaluate your markets", desc: "Counties with older median ages and high boomer homeownership will see more probate activity." },
                  { title: "Get compliant outreach in place", desc: "As volume increases, you need efficient, legal ways to contact executors." },
                  { title: "Focus on relationships, not volume", desc: "More leads means more competition. The personal approach still wins." },
                  { title: "Start now", desc: "The curve is already rising. Build expertise and pipelines today." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-9 h-9 rounded-full bg-[#7c3aed]/10 text-[#7c3aed] font-bold flex items-center justify-center flex-shrink-0 text-lg">{i + 1}</span>
                    <div>
                      <strong className="text-lg text-slate-900">{item.title}</strong>
                      <span className="text-lg text-slate-600">: {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ol>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                Conclusion
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                The Silver Tsunami is real, but it's not the dramatic wave the name suggests. It's a gradual demographic shift that will unfold over the next decade and beyond.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                For the broader housing market, expect slight increases in inventory, absorbed by strong demand from younger buyers. No crash. No flood.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                For probate investors, the opportunity is clearer. Baby boomers own 41% of American homes. As this generation ages and passes, more of those properties will enter probate. That means more motivated sellers, more executors needing help, more deals for investors who are prepared.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                The key is positioning now. Build your systems. Claim your counties. Learn compliant outreach. Focus on relationships over volume. The investors who treat the Silver Tsunami as a long-term opportunity, not a short-term event, will be the ones who benefit most.
              </p>

              {/* References */}
              <div className="mt-16 pt-8 border-t border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">References</h3>
                <ol className="space-y-2 text-sm text-slate-500">
                  <li className="flex items-start gap-2">
                    <span>1.</span>
                    <a href="https://www.investopedia.com/silver-tsunami-8418065" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline flex items-center gap-1">
                      Investopedia: Silver Tsunami - Challenges and Opportunities
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>2.</span>
                    <a href="https://www.nar.realtor/magazine/real-estate-news/the-silver-tsunami-in-real-estate-is-here-are-you-ready" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline flex items-center gap-1">
                      NAR: The Silver Tsunami in Real Estate Is Here
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>3.</span>
                    <a href="https://freddiemac.gcs-web.com/news-releases/news-release-details/silver-tsunami-likely-bring-wave-wealth-children-baby-boomer" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline flex items-center gap-1">
                      Freddie Mac: Silver Tsunami and Wealth Transfer
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>4.</span>
                    <a href="https://www.mba.org/docs/default-source/research---riha-reports/27088-research-riha-silver-tsunami-update-2024.pdf" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline flex items-center gap-1">
                      MBA Research: Who Will Buy the Boomers' Homes?
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>5.</span>
                    <a href="https://www.fanniemae.com/media/20281/display" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline flex items-center gap-1">
                      Fannie Mae: The Coming Exodus of Older Homeowners
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>6.</span>
                    <a href="https://www.redfin.com/news/silver-tsunami-baby-boomers-aging-in-place/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline flex items-center gap-1">
                      Redfin: Baby Boomers Aging in Place
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
                  Disclaimer: This article is for informational purposes only and does not constitute investment advice. Market projections are based on publicly available research and may not reflect actual outcomes. Consult with qualified professionals before making investment decisions.
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
                Common questions about the Silver Tsunami and probate investing.
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
              Ready to Capture the Opportunity?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              The Silver Tsunami is a long game. Start building your probate pipeline today.
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

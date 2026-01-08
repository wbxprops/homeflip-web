'use client';

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Bot, Phone, Heart, Shield, FileText, CheckCircle, AlertTriangle, ExternalLink, ChevronDown, UserCheck, MessageCircle, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// FAQ data
const faqs = [
  {
    question: "Can I use AI voice agents to cold call probate leads without consent?",
    answer: "No. This is illegal under federal law. The FCC ruled in February 2024 that AI-generated voices in robocalls are illegal without prior express written consent. Violations carry $500-$1,500 per call in statutory damages. Beyond legality, AI voice agents completely undermine the personal connection that makes probate deals work."
  },
  {
    question: "Why do you recommend against AI dialers for probate leads?",
    answer: "Probate leads are people dealing with loss. They can tell when they're talking to someone reading a script or when a call feels automated. The Probate Profit Machine emphasizes that the number one mistake investors make is not sounding real. AI calling removes the authenticity that builds trust with executors and heirs."
  },
  {
    question: "What about power dialers for probate calling?",
    answer: "While power dialers are legal (human on line when call connects), they still create a volume-over-quality mindset that hurts probate conversion. Probate families often tell us: 'You're the only one who sounded real.' That happens when you slow down, not speed up."
  },
  {
    question: "Are there any AI tools that work well for probate investors?",
    answer: "AI works great for research, property valuation, and CRM automation. It doesn't work for the actual conversations. Use AI to prepare for calls, not to make them."
  },
  {
    question: "What's the best way to call probate leads?",
    answer: "Manual dialing, one call at a time, with genuine conversation. Know the case details before you dial. Ask questions and listen. Sound like a human who cares, because you should be one."
  },
  {
    question: "How many probate calls should I make per day?",
    answer: "Quality over quantity. 20-30 meaningful conversations beats 200 rushed calls every time. Probate families remember how you made them feel, not how efficient you were."
  },
  {
    question: "What about using AI for scripts and objection handling?",
    answer: "Using AI to help write and refine scripts is fine. Reading from a script during the call is not. The Probate Profit Machine teaches that scripts should be internalized, not read. People can tell the difference."
  },
  {
    question: "Is AI call transcription okay to use?",
    answer: "Yes, transcription is fine. Recording calls for training and documentation helps you improve. Just follow state consent rules for recording."
  },
  {
    question: "Why do vendors push AI calling so hard?",
    answer: "Because they make money selling it to you, not closing probate deals. The vendors promoting AI calling for real estate aren't working probate leads daily. We are. The personal approach wins."
  },
  {
    question: "What results do you actually see with the personal approach?",
    answer: "Probate families tell us constantly: 'You're the only one who sounded real.' That translates to higher conversion rates, less competition, and deals that close smoothly because trust was built from the first call."
  }
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

export default function AIColdCallingPage() {
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
                Strategy Guide
              </p>
              <h1 className="font-hero font-[900] text-4xl md:text-5xl lg:text-6xl text-slate-900 uppercase tracking-tighter leading-[0.95] mb-6">
                AI Cold Calling for Real Estate: Why We Don't Recommend It for Probate
              </h1>
              <p className="text-xl text-slate-600 mb-6">
                AI dialers and voice agents are everywhere in real estate. But for probate leads, they're the wrong tool. Here's why the personal approach still wins.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <span>By Gary Bailey and the HomeFlip.ai Research Team</span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span>January 2026</span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span>10 min read</span>
              </div>
            </motion.div>
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
                  <Heart className="w-6 h-6 text-[#0891b2]" />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                    The Contrary View
                  </p>
                  <p className="text-lg text-slate-700">
                    Everyone's selling AI dialers. We're telling you not to use them for probate. <strong>Personal connection closes probate deals.</strong> Automation kills it. The families we work with say the same thing: "You're the only one who sounded real."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Critical Warning Section */}
        <section className="py-8 px-6 bg-red-50 border-y border-red-200">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold text-red-900 mb-2">
                  First, the Legal Reality
                </p>
                <p className="text-lg text-red-800 mb-3">
                  <strong>AI voice agents making unsolicited cold calls is illegal without prior express written consent.</strong> The FCC ruled in February 2024 that AI-generated voices in robocalls are prohibited. Violations carry statutory damages of $500-$1,500 <em>per call</em>.
                </p>
                <p className="text-base text-red-700">
                  Many AI vendors market their tools to real estate investors without clearly explaining this. But even setting aside the legal issues, AI calling is the wrong approach for probate. Here's why.
                </p>
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
                Every week, I get emails from investors asking about AI dialers. They've seen the ads. They've heard the promises. Triple your call volume. Scale your outreach. Let AI do the work.
              </p>

              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                I understand the appeal. I've been investing in real estate for over 20 years. I've made thousands of cold calls. The idea of automating that grind sounds great.
              </p>

              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                But here's what I've learned from 2,000+ transactions, most of them probate: <strong className="text-slate-900">The personal touch is everything.</strong> And AI calling destroys it.
              </p>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                What the Probate Profit Machine Teaches
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                In the Probate Profit Machine, I lay out the approach that's worked for decades. One principle stands out above all others:
              </p>

              <div className="p-6 bg-[#0891b2]/5 border border-[#0891b2]/20 rounded-xl my-8">
                <p className="text-lg text-slate-700 italic m-0">
                  "No cold texting. None. No multi-line dialers or AI dialing."
                </p>
                <p className="text-sm text-slate-500 mt-4 m-0">
                  — Probate Profit Machine, Section 3: Working the Leads
                </p>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Why so absolute? Because probate families aren't like other motivated sellers. They're dealing with grief. They're overwhelmed. They're getting bombarded with postcards, texts, and robocalls from investors who smell a deal.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                The investors who close deals are the ones who <em>don't</em> sound like everyone else. And nothing sounds more like "everyone else" than an AI dialer or a scripted multi-line operation.
              </p>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                "You're the Only One Who Sounded Real"
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                I can't count how many times I've heard this from probate families after closing a deal. It's the single biggest competitive advantage you can have.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Think about what that means. These families are getting 10, 20, 50 calls from investors. Most of those calls sound exactly the same: rushed, scripted, transactional. The callers don't know the details. They don't ask questions. They just push for the appointment.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                When you slow down and have a genuine conversation, you stand out immediately. That's not something AI can replicate.
              </p>

              <div className="grid sm:grid-cols-1 gap-4 my-8">
                {[
                  { icon: <UserCheck className="w-5 h-5" />, title: "You Know the Case", desc: "You've reviewed the probate filing, the property details, the timeline. You're calling prepared, not just dialing." },
                  { icon: <MessageCircle className="w-5 h-5" />, title: "You Ask Real Questions", desc: "Not reading prompts. Genuinely curious about their situation. Listening more than talking." },
                  { icon: <Heart className="w-5 h-5" />, title: "You Show Empathy", desc: "You acknowledge this is hard. You don't rush. You let silences happen." },
                  { icon: <Users className="w-5 h-5" />, title: "You Build Relationship", desc: "Probate deals take time. The trust you build on call one determines whether there's a call two." }
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
                The Mistake Most Investors Make
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                In the Probate Profit Machine, I list the top mistakes investors make when calling probate leads. Number one on the list:
              </p>

              <div className="p-6 bg-amber-50 border border-amber-200 rounded-xl my-8">
                <p className="text-lg text-slate-700 font-bold m-0 mb-2">
                  Mistake #1: Not Sounding Real
                </p>
                <p className="text-base text-slate-600 m-0">
                  Hiring offshore callers, using canned scripts, or sounding like a telemarketer kills your credibility instantly. People can tell.
                </p>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                AI dialers make this mistake unavoidable. Even if you're the one on the phone, the system is designed to maximize volume. You're racing to the next call. You don't have time to really listen. The efficiency kills the authenticity.
              </p>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                Yes, AI Tools Exist. Here's What They Actually Do.
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                I'm not against technology. I use AI every day for research, property analysis, and CRM automation. But there's a difference between AI that helps you prepare and AI that replaces human connection.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                For context, here's what's out there and what it's designed to do:
              </p>

              {/* Compliance Table */}
              <div className="overflow-x-auto my-8 -mx-4 px-4 sm:mx-0 sm:px-0">
                <table className="w-full border-collapse rounded-xl overflow-hidden text-sm">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left p-4 font-bold text-slate-900">Tool Type</th>
                      <th className="text-center p-4 font-bold text-slate-900">Legal Status</th>
                      <th className="text-center p-4 font-bold text-slate-900">Our Take for Probate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="bg-white">
                      <td className="p-4 text-slate-700">Power dialers (human on line)</td>
                      <td className="p-4 text-center"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">Legal</span></td>
                      <td className="p-4 text-center"><span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold">Not Recommended</span></td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-4 text-slate-700">AI script prompts during calls</td>
                      <td className="p-4 text-center"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">Legal</span></td>
                      <td className="p-4 text-center"><span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold">Proceed with Caution</span></td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 text-slate-700">AI transcription/recording</td>
                      <td className="p-4 text-center"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">Legal</span></td>
                      <td className="p-4 text-center"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">Good to Use</span></td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-4 text-slate-700">AI voice agents (autonomous)</td>
                      <td className="p-4 text-center"><span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">Needs Consent</span></td>
                      <td className="p-4 text-center"><span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">Never for Probate</span></td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 text-slate-700">AI-generated voice robocalls</td>
                      <td className="p-4 text-center"><span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">Needs Consent</span></td>
                      <td className="p-4 text-center"><span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">Never for Probate</span></td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-4 text-slate-700">Predictive dialers to cell phones</td>
                      <td className="p-4 text-center"><span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold">Risky</span></td>
                      <td className="p-4 text-center"><span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">Not Recommended</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Notice the pattern: even where something is legal, it doesn't mean it's effective for probate. The tools designed to maximize volume work against the trust-building that closes these deals.
              </p>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                Where AI Actually Helps
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                I'm not anti-technology. Here's where AI genuinely improves your probate investing:
              </p>

              <ul className="space-y-3 my-8">
                {[
                  { text: "Property research and valuation before you call" },
                  { text: "CRM automation for follow-up sequences" },
                  { text: "Call transcription for training and documentation" },
                  { text: "Lead scoring and prioritization" },
                  { text: "Market analysis and comp research" }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-slate-600">{item.text}</span>
                  </li>
                ))}
              </ul>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Use AI to prepare. Use AI to follow up. But when the phone rings and a grieving family answers, be human. That's what they're looking for.
              </p>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                The Human Approach That Works
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Here's the calling approach I teach in the Probate Profit Machine and use every day:
              </p>

              <ol className="space-y-5 my-8">
                {[
                  { title: "Research Before You Dial", desc: "Know the case number, property address, filing date, and executor name. You're calling prepared." },
                  { title: "One Call at a Time", desc: "Manual dialing. No multi-line systems. Full attention on this conversation." },
                  { title: "Lead with Curiosity", desc: "Ask about their situation. Listen to the answer. Don't rush to your pitch." },
                  { title: "Acknowledge the Difficulty", desc: "These families are dealing with loss. A simple 'I know this is a difficult time' goes far." },
                  { title: "Offer Help, Not Pressure", desc: "Position yourself as someone who can simplify their situation, not add to it." },
                  { title: "Follow Up Personally", desc: "Same person, same approach. Relationships build over multiple touches." }
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

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                This takes longer per call than blasting through a power dialer. That's the point. Twenty meaningful conversations beat two hundred rushed ones.
              </p>

              {/* HomeFlip.ai CTA Section */}
              <div className="my-16 -mx-4 sm:-mx-8 md:-mx-12">
                <div className="bg-gradient-to-br from-slate-50/80 to-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-200/60 shadow-xl shadow-slate-200/50">
                  <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mb-4 text-center">
                    Fresh Leads for Human Connection
                  </h2>
                  <p className="text-lg md:text-xl text-slate-600 text-center max-w-2xl mx-auto mb-10">
                    HomeFlip.ai delivers the leads. How you work them is what closes deals. We recommend the personal approach:
                  </p>

                  <div className="space-y-3 md:space-y-4 max-w-2xl mx-auto">
                    {[
                      { title: "Daily Probate Leads", desc: "Fresh from county court records, not recycled lists" },
                      { title: "Case Details Included", desc: "Filing date, case number, executor info ready for research" },
                      { title: "Property Data Matched", desc: "Address, value estimates, owner info for your prep" },
                      { title: "Exclusive to Your County", desc: "Less competition means more genuine conversations" }
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
                Why Vendors Push AI Calling
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Follow the money. Companies selling AI dialers make money when you subscribe. They don't close your deals. They don't work your leads. They don't hear the feedback from probate families.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                The sales pitch sounds great: "Triple your call volume!" But volume isn't the bottleneck in probate. Trust is. And trust doesn't scale through automation.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                When I talk to investors who've tried AI dialers for probate, they report the same thing: lots of conversations, few real connections. The numbers look busy. The pipeline stays empty.
              </p>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                Conclusion
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                AI cold calling tools exist. They work for some types of real estate leads. But for probate, they're the wrong approach.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Probate families are dealing with loss, overwhelm, and a flood of impersonal outreach. The investor who wins is the one who sounds different. Human. Real. Unhurried.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                That's what the Probate Profit Machine teaches. It's what 20+ years of experience confirms. And it's why the families we work with keep saying the same thing:
              </p>

              <div className="p-6 bg-[#7c3aed]/5 border border-[#7c3aed]/20 rounded-xl my-8">
                <p className="text-xl text-slate-900 font-bold italic m-0 text-center">
                  "You're the only one who sounded real."
                </p>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Use AI for research and follow-up. Use HomeFlip.ai for fresh probate leads. But when you pick up the phone, be human. That's what closes deals.
              </p>

              {/* References */}
              <div className="mt-16 pt-8 border-t border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">References</h3>
                <ol className="space-y-2 text-sm text-slate-500">
                  <li className="flex items-start gap-2">
                    <span>1.</span>
                    <a href="https://www.fcc.gov/document/fcc-makes-ai-generated-voices-robocalls-illegal" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline flex items-center gap-1">
                      FCC: AI-Generated Voices in Robocalls Declared Illegal (Feb 2024)
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>2.</span>
                    <span className="text-slate-600">
                      Bailey, Gary. "Probate Profit Machine: Section 3, Working the Leads." HomeFlip.ai, 2024.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>3.</span>
                    <Link href="/insights/tcpa-ruling-cold-calling-investors" className="text-[#0891b2] hover:underline">
                      TCPA Ruling 2025: What Investors Need to Know
                    </Link>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>4.</span>
                    <Link href="/insights/cold-texting-real-estate-investors" className="text-[#0891b2] hover:underline">
                      Is Cold Texting Legal for Real Estate Investors?
                    </Link>
                  </li>
                </ol>
              </div>

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-slate-50 rounded-2xl">
                <p className="text-sm text-slate-500 mb-2">Written by</p>
                <p className="font-bold text-slate-900">Gary Bailey and the HomeFlip.ai Research Team</p>
                <p className="text-sm text-slate-600 mt-2">
                  Gary Bailey is a full-time real estate investor with over 20 years of experience and more than 2,000 transactions. He founded HomeFlip.ai to help investors build consistent deal flow through probate intelligence. The Probate Profit Machine reflects his approach: personal connection over volume, relationships over automation. Based in Cincinnati, Ohio.
                </p>
                <p className="text-xs text-slate-400 mt-4 italic">
                  Disclaimer: This article is for informational purposes only and does not constitute legal advice. TCPA and FCC regulations are complex and subject to change. Consult a qualified attorney before implementing any cold calling strategy.
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
                Common questions about AI calling and the personal approach to probate.
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
              Ready to Work Probate Leads the Right Way?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Fresh leads, personal approach, real relationships. That's what closes probate deals.
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

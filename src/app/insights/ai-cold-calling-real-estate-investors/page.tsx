'use client';

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Bot, Phone, Zap, Shield, FileText, CheckCircle, AlertTriangle, ExternalLink, ChevronDown, Star, Clock, DollarSign } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// FAQ data
const faqs = [
  {
    question: "Can I use AI voice agents to cold call probate leads without consent?",
    answer: "No. This is illegal under federal law. The FCC explicitly ruled in February 2024 that AI-generated voices in robocalls are illegal without prior express written consent. AI voice agents making autonomous outbound calls to people who haven't opted in violates TCPA and can result in $500-$1,500 per call in statutory damages. Many investors have been misled by AI vendors. Don't be one of them. For unsolicited outreach, you must have a human on the line."
  },
  {
    question: "What's the best AI dialer for real estate wholesalers?",
    answer: "For wholesalers cold calling probate and motivated seller leads, BatchDialer, DealMachine AI Dialer, and REsimpli offer strong combinations of investor-focused features, AI assistance, and compliance tools."
  },
  {
    question: "Is AI call transcription legal?",
    answer: "Yes, with caveats. Federal law allows one-party consent recording, but some states require all-party consent. Know your state's rules and disclose recording when required."
  },
  {
    question: "Can AI write my cold calling scripts?",
    answer: "Absolutely. AI tools excel at generating scripts optimized for real estate cold calling. Just ensure every script positions you as a buyer making offers, not selling services."
  },
  {
    question: "Do I still need to scrub against the Do Not Call registry?",
    answer: "While investor buy offers may not technically be \"solicitations\" under TCPA, scrubbing against DNC is still professional best practice. It reduces complaints and demonstrates good faith compliance."
  },
  {
    question: "What's the difference between power dialers and predictive dialers?",
    answer: "Power dialers call one number at a time with an agent ready. Predictive dialers call multiple numbers simultaneously, routing answered calls to available agents. Predictive dialers carry more TCPA risk for cell phone calls."
  },
  {
    question: "How do AI coaching tools work during calls?",
    answer: "AI coaching tools analyze your conversation in real-time, displaying suggested responses for objections, highlighting buying signals, and prompting follow-up questions. It's like having an expert whispering in your ear."
  },
  {
    question: "Can I use AI to leave voicemails?",
    answer: "AI-generated voice voicemails fall under robocall rules. For cold calling campaigns, leave voicemails in your own voice or use \"ringless voicemail\" services carefully (compliance varies by jurisdiction)."
  },
  {
    question: "What's the ROI of AI cold calling tools?",
    answer: "Investors typically report 2-4x increases in meaningful conversations per day with AI-powered dialers. Combined with probate leads that convert at higher rates, ROI compounds quickly."
  },
  {
    question: "Should I use AI for inbound calls too?",
    answer: "Yes. AI excels at handling inbound callbacks. Tools like Callin.io and Ylopo AI Voice can qualify incoming leads 24/7, routing hot prospects to your team immediately."
  }
];

// Tool data
const tools = [
  {
    name: "DealMachine AI Dialer",
    bestFor: "All-in-one with driving for dollars",
    pros: "Seamless mobile experience, built-in lead generation",
    cons: "Monthly subscription adds up",
    pricing: "From $49/mo",
    url: "https://www.dealmachine.com/dialer"
  },
  {
    name: "BatchDialer",
    bestFor: "High-volume with compliance focus",
    pros: "Investor scripts, compliance tools, affordable",
    cons: "Complex interface",
    pricing: "From $89/mo",
    url: "https://batchdialer.com/blog/mastering-cold-calling-for-real-estate-investors-scripts-frameworks-ai-tips"
  },
  {
    name: "REsimpli",
    bestFor: "CRM + dialer integration",
    pros: "Full CRM included, strong automation",
    cons: "AI agents need consent for cold calls",
    pricing: "From $99/mo",
    url: "https://resimpli.com/blog/best-ai-agents-for-real-estate-investors/"
  },
  {
    name: "VoiceSpin",
    bestFor: "Enterprise AI coaching & analytics",
    pros: "Advanced analytics, real-time coaching",
    cons: "Higher price point",
    pricing: "Contact for quote",
    url: "https://www.voicespin.com/solutions/real-estate-dialer/"
  },
  {
    name: "Callin.io",
    bestFor: "AI voice agents (with consent)",
    pros: "Sophisticated AI, 24/7 availability",
    cons: "Requires consent for outbound",
    pricing: "Custom pricing",
    url: "https://callin.io/cold-calling-ai-for-real-estate/"
  },
  {
    name: "Convin.ai",
    bestFor: "Call analytics & coaching",
    pros: "Deep analytics, objection tracking",
    cons: "Analytics tool only, needs separate dialer",
    pricing: "Contact for quote",
    url: "https://convin.ai/blog/cold-calls-real-estate"
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
                Technology Guide
              </p>
              <h1 className="font-hero font-[900] text-4xl md:text-5xl lg:text-6xl text-slate-900 uppercase tracking-tighter leading-[0.95] mb-6">
                AI Cold Calling for Real Estate Investors 2026: Scale Probate Deals Compliantly
              </h1>
              <p className="text-xl text-slate-600 mb-6">
                The best AI cold calling tools for wholesalers and investors. Learn how to scale your probate lead outreach while staying TCPA compliant with power dialers and AI assistants.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <span>By Gary Bailey and the HomeFlip.ai Research Team</span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span>January 2026</span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span>12 min read</span>
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
                  <Bot className="w-6 h-6 text-[#0891b2]" />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                    The Opportunity
                  </p>
                  <p className="text-lg text-slate-700">
                    AI doesn't replace the human connection that closes deals. It <strong>amplifies your reach</strong>. The right tools can 2-4x your daily conversations while keeping you TCPA compliant.
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
                  The Hard Truth About AI Cold Calling
                </p>
                <p className="text-lg text-red-800 mb-3">
                  <strong>AI voice agents making unsolicited cold calls is illegal without prior express written consent.</strong> The FCC ruled in February 2024 that AI-generated voices in robocalls are prohibited. Violations carry statutory damages of $500-$1,500 <em>per call</em>.
                </p>
                <p className="text-base text-red-700">
                  Many AI vendors market their tools to real estate investors without clearly explaining this. Don't be misled. If the person you're calling hasn't opted in to receive AI calls from you, a human must be on the line. This article focuses on <strong>AI-assisted human calling</strong>, the legal way to scale.
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
                2026 is the year AI transforms cold calling for real estate investors. Between the landmark TCPA ruling that cleared investor buy offers from solicitation restrictions and the explosion of AI-powered dialing tools, you now have an unprecedented opportunity to scale your outreach, <strong className="text-slate-900">if you do it right</strong>.
              </p>

              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                For investors targeting <strong className="text-slate-900">probate leads</strong>—where motivated executors and heirs represent nearly twice the deal volume of foreclosures—this is exciting. But you need to understand what's legal and what isn't.
              </p>

              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                <strong className="text-slate-900">Here's the bottom line:</strong> Fully automated AI voice agents making unsolicited calls require prior express written consent. Without it, you're breaking federal law. The opportunity isn't in replacing yourself with a robot. It's in using <strong className="text-slate-900">AI-assisted tools</strong> to make your human cold calling faster, smarter, and more effective.
              </p>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                Quick Recap: TCPA Ruling + AI in 2026
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                The June 2025 <em>Cofey v. Fast Easy Offer</em> ruling confirmed that calls offering to buy real estate are NOT telephone solicitations under the TCPA. For a full breakdown, see our analysis:{' '}
                <Link href="/insights/tcpa-ruling-cold-calling-investors" className="text-[#0891b2] hover:underline">
                  TCPA Ruling 2025: Investors Can Cold Call to Buy Houses
                </Link>.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">The AI Wrinkle</h3>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                While manual cold calling is clear, AI automation introduces additional considerations:
              </p>

              <ul className="space-y-3 my-8">
                {[
                  { text: "AI-generated voices in robocalls were ruled illegal by the FCC (Feb 2024) without consent" },
                  { text: "Autodialers still require consent for calls to cell phones under certain conditions" },
                  { text: "AI voice agents conducting autonomous conversations fall under robocall rules" }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-slate-600">{item.text}</span>
                  </li>
                ))}
              </ul>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                <strong className="text-slate-900">The takeaway:</strong> AI can supercharge your cold calling, but it needs to <em>assist</em> human callers rather than replace them.
              </p>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                Why AI Is a Game-Changer
              </h2>

              <div className="grid sm:grid-cols-1 gap-4 my-8">
                {[
                  { icon: <Zap className="w-5 h-5" />, title: "Scale Your Reach", desc: "Triple or quadruple daily conversations by eliminating busy signals, voicemails, and disconnected numbers" },
                  { icon: <Bot className="w-5 h-5" />, title: "Real-Time Intelligence", desc: "AI analyzes conversations as they happen, suggesting responses and flagging buying signals" },
                  { icon: <FileText className="w-5 h-5" />, title: "Perfect Documentation", desc: "Every call transcribed, searchable, and synced to your CRM automatically" },
                  { icon: <Star className="w-5 h-5" />, title: "Personalization at Scale", desc: "AI pulls property data and case details into scripts dynamically" },
                  { icon: <Shield className="w-5 h-5" />, title: "Objection Handling", desc: "AI-trained responses prompt you through common seller concerns" }
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
                TCPA Compliance Breakdown for AI
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Here's how different AI use cases map to compliance:
              </p>

              {/* Compliance Table */}
              <div className="overflow-x-auto my-8 -mx-4 px-4 sm:mx-0 sm:px-0">
                <table className="w-full border-collapse rounded-xl overflow-hidden text-sm">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left p-4 font-bold text-slate-900">AI Use Case</th>
                      <th className="text-center p-4 font-bold text-slate-900">Status</th>
                      <th className="text-left p-4 font-bold text-slate-900">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="bg-white">
                      <td className="p-4 text-slate-700">Power dialers (human initiates)</td>
                      <td className="p-4 text-center"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">Compliant</span></td>
                      <td className="p-4 text-slate-600">Agent on line when call connects</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-4 text-slate-700">AI script prompts during calls</td>
                      <td className="p-4 text-center"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">Compliant</span></td>
                      <td className="p-4 text-slate-600">AI assists human caller</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 text-slate-700">AI transcription/recording</td>
                      <td className="p-4 text-center"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">Compliant</span></td>
                      <td className="p-4 text-slate-600">Follow state consent rules</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-4 text-slate-700">AI voice agents (autonomous)</td>
                      <td className="p-4 text-center"><span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold">Needs Consent</span></td>
                      <td className="p-4 text-slate-600">FCC treats as robocall</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 text-slate-700">AI-generated voice robocalls</td>
                      <td className="p-4 text-center"><span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">Needs Consent</span></td>
                      <td className="p-4 text-slate-600">Illegal without consent per FCC</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-4 text-slate-700">Predictive dialers to cell phones</td>
                      <td className="p-4 text-center"><span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold">Risky</span></td>
                      <td className="p-4 text-slate-600">May require consent</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                Top AI Cold Calling Tools for 2026
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Here's our analysis of the leading AI-enhanced platforms for real estate investors and wholesalers:
              </p>

              {/* Tools Grid */}
              <div className="grid gap-4 my-8">
                {tools.map((tool, i) => (
                  <div key={i} className="p-5 bg-white border border-slate-200 rounded-xl hover:border-[#0891b2]/30 hover:shadow-md transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                      <div>
                        <h3 className="font-bold text-lg text-slate-900 m-0">
                          <a href={tool.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#0891b2] transition-colors">
                            {tool.name}
                          </a>
                        </h3>
                        <p className="text-sm text-[#0891b2] font-medium m-0">{tool.bestFor}</p>
                      </div>
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm font-semibold whitespace-nowrap">
                        <DollarSign className="w-3 h-3" />
                        {tool.pricing}
                      </span>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2 text-sm">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">{tool.pros}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">{tool.cons}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-sm text-slate-500 my-4">
                Additional tools: <a href="https://www.ylopo.com/ylopo-ai" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline">Ylopo AI Voice</a> (consent-based),{' '}
                <a href="https://synthflow.ai/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline">Synthflow.ai</a> (custom workflows)
              </p>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                Best Practices: AI + Probate Leads
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Probate leads are the ideal application for AI-enhanced cold calling. Our{' '}
                <Link href="/insights/probate-vs-foreclosure" className="text-[#0891b2] hover:underline">
                  research on probate vs. foreclosures
                </Link>
                {' '}shows probate properties outnumber foreclosures nearly 2-to-1 nationally.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">The AI-Enhanced Workflow</h3>

              <ol className="space-y-5 my-8">
                {[
                  { title: "Get Fresh Leads", desc: "HomeFlip.ai delivers probate leads direct from county court records, matched to property data" },
                  { title: "Scrub Your Lists", desc: "Run numbers through DNC verification. Best practice even for investor calls" },
                  { title: "Load Into Your AI Dialer", desc: "Import leads with property details, case info, and notes. Let AI organize by priority" },
                  { title: "Power Dial with AI Assistance", desc: "As each call connects, AI surfaces context: address, case date, executor name, value" },
                  { title: "Follow AI-Prompted Scripts", desc: "Lead with buy offers. AI prompts responses for common objections" },
                  { title: "Document Everything", desc: "AI transcription captures conversations. Notes sync to CRM automatically" },
                  { title: "Systematic Follow-Up", desc: "Probate timelines are long. AI sequences keep you top of mind" }
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

              <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Sample AI-Prompted Script</h3>

              <div className="p-6 bg-[#0891b2]/5 border border-[#0891b2]/20 rounded-xl my-8">
                <p className="text-lg text-slate-700 italic m-0">
                  "Hi, I noticed a probate was filed for [property address]. I'm a local investor making cash offers on inherited properties. Is this something worth discussing?"
                </p>
                <p className="text-sm text-slate-500 mt-4 m-0">
                  <strong>AI prompts for objections:</strong> "not ready yet" → "I understand. Would it help if I followed up in a few months?" | "need to talk to siblings" → "Of course. Would you like me to send information you can share with them?"
                </p>
              </div>

              {/* HomeFlip.ai CTA Section */}
              <div className="my-16 -mx-4 sm:-mx-8 md:-mx-12">
                <div className="bg-gradient-to-br from-slate-50/80 to-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-200/60 shadow-xl shadow-slate-200/50">
                  <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mb-4 text-center">
                    Pair AI Tools with Fresh Leads
                  </h2>
                  <p className="text-lg md:text-xl text-slate-600 text-center max-w-2xl mx-auto mb-10">
                    The best AI dialer is useless without quality leads. HomeFlip.ai delivers:
                  </p>

                  <div className="space-y-3 md:space-y-4 max-w-2xl mx-auto">
                    {[
                      { title: "Daily Probate Leads", desc: "Fresh from county court records, not recycled lists" },
                      { title: "Property Data Matched", desc: "Address, value estimates, owner info included" },
                      { title: "Contact Information", desc: "Executor and heir details ready for outreach" },
                      { title: "Case Timeline Tracking", desc: "Know when leads are ready to move" }
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
                Action Plan for 2026
              </h2>

              <ol className="space-y-5 my-8">
                {[
                  { title: "Get exclusive probate leads", desc: "Fresh leads from court records, delivered daily from HomeFlip.ai" },
                  { title: "Choose a TCPA-compliant AI tool", desc: "Power dialers with AI assistance, not autonomous voice agents" },
                  { title: "Scrub your lists", desc: "DNC verification before loading campaigns. Document compliance" },
                  { title: "Train on buy-focused scripts", desc: "Every call positions you as the buyer, not a service seller" },
                  { title: "Start with power dialing", desc: "Human on line when each call connects. AI handles efficiency" },
                  { title: "Track metrics and optimize", desc: "Use AI analytics to identify what's working and iterate" },
                  { title: "Consult an attorney", desc: "Professional guidance on your setup and state requirements" }
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
                The convergence of TCPA clarity and AI capability makes 2026 the best year ever to scale your cold calling operation. For investors targeting probate leads, the opportunity is massive.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                AI doesn't replace the human connection that closes deals. It amplifies your reach, sharpens your conversations, and documents everything automatically. Choose tools that assist rather than automate, stay within compliance boundaries, and let AI handle the efficiency while you handle the relationships.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                AI + compliant cold calling + HomeFlip.ai probate leads = unstoppable 2026.
              </p>

              {/* References */}
              <div className="mt-16 pt-8 border-t border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">References</h3>
                <ol className="space-y-2 text-sm text-slate-500">
                  <li className="flex items-start gap-2">
                    <span>1.</span>
                    <a href="https://www.dealmachine.com/dialer" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline flex items-center gap-1">
                      DealMachine AI Dialer
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>2.</span>
                    <a href="https://resimpli.com/blog/best-ai-agents-for-real-estate-investors/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline flex items-center gap-1">
                      REsimpli AI Agents for Investors
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>3.</span>
                    <a href="https://batchdialer.com/blog/mastering-cold-calling-for-real-estate-investors-scripts-frameworks-ai-tips" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline flex items-center gap-1">
                      BatchDialer Cold Calling Guide
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>4.</span>
                    <a href="https://callin.io/cold-calling-ai-for-real-estate/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline flex items-center gap-1">
                      Callin.io AI for Real Estate
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>5.</span>
                    <a href="https://www.fcc.gov/document/fcc-makes-ai-generated-voices-robocalls-illegal" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline flex items-center gap-1">
                      FCC: AI-Generated Voices in Robocalls
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>6.</span>
                    <a href="https://realestatebees.com/guides/software/dialers/investors/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline flex items-center gap-1">
                      Real Estate Bees Dialers Comparison
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
                Common questions about AI cold calling tools and compliance.
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
              Ready to Scale Your Cold Calling?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Pair AI tools with fresh probate leads for unstoppable 2026 deal flow.
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

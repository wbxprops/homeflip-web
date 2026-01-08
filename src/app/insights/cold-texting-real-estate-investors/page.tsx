'use client';

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, MessageSquare, AlertTriangle, XCircle, CheckCircle, Shield, Scale, ExternalLink, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "What is the difference between cold calling and cold texting under TCPA?",
    answer: "Both are regulated, but texts face stricter scrutiny. For calls, the Coffey ruling exempts buy offers from DNC rules, and manual dialing avoids ATDS issues. For texts, you still need prior express written consent to send automated messages to cell phones, regardless of message content."
  },
  {
    question: "Does the Coffey ruling make cold texting legal for real estate buy offers?",
    answer: "No. Coffey only addressed DNC (Do Not Call) rules, not ATDS consent requirements. You still need consent to send automated texts to cell phones. The ruling helps with cold calling, not texting."
  },
  {
    question: "Can I manually cold text without violating TCPA?",
    answer: "Possibly, if you're truly typing each text individually on your phone. But any platform that enables bulk sending, scheduling, or automation likely qualifies as an ATDS. And even manual texts at volume trigger carrier spam filters."
  },
  {
    question: "What consent is required for texting probate leads?",
    answer: "Prior express written consent from the specific person you're texting, given before you send the message. Buying a list doesn't provide this consent."
  },
  {
    question: "What are the penalties for TCPA cold texting violations?",
    answer: "$500 per text for unintentional violations, up to $1,500 per text for willful violations. There's no cap, so a campaign of 1,000 texts could mean $500,000 to $1.5 million in liability."
  },
  {
    question: "How does the one-to-one consent rule affect real estate texting?",
    answer: "The rule takes effect January 2027. It requires consent to be given to a specific, identified sender. Broad opt-ins that allow sharing to multiple companies won't qualify. This makes purchased lead lists even less useful."
  },
  {
    question: "Are there state laws that ban cold texting beyond TCPA?",
    answer: "Yes. States like Florida, Texas, and others have their own telemarketing laws. Some are stricter than federal TCPA rules. Check your target state's requirements."
  },
  {
    question: "What alternatives to cold texting work for real estate investors?",
    answer: "Cold calling with manual dialing and buy offers (Coffey helps here), direct mail (no TCPA issues), opt-in text campaigns, email outreach, and personalized follow-up after initial compliant contact."
  },
  {
    question: "Can I use purchased lists for cold texting?",
    answer: "No. Consent must be given directly to you. A lead vendor's opt-in doesn't transfer consent for you to text those contacts."
  },
  {
    question: "How can I ensure my texting is TCPA-compliant?",
    answer: "Only text people who have given you prior express written consent. Document that consent. Use compliant platforms. Honor opt-outs immediately. When in doubt, consult a telecommunications attorney."
  }
];

const myths = [
  {
    myth: "The Coffey ruling makes cold texting legal",
    reality: "Coffey exempts buy offers from DNC rules only. You still need consent to send automated texts to cell phones.",
    icon: <XCircle className="w-5 h-5 text-red-500" />
  },
  {
    myth: "Manual texting is always safe",
    reality: "Any platform enabling bulk sending or automation likely qualifies as ATDS. Carriers also block suspected spam.",
    icon: <XCircle className="w-5 h-5 text-red-500" />
  },
  {
    myth: "Buy offers aren't marketing, so no consent needed",
    reality: "ATDS consent rules apply regardless of message content. You need consent for automated texts, period.",
    icon: <XCircle className="w-5 h-5 text-red-500" />
  },
  {
    myth: "I bought a list, so I have consent",
    reality: "Consent must be given directly to you. A vendor's opt-in doesn't transfer to you.",
    icon: <XCircle className="w-5 h-5 text-red-500" />
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

export default function ColdTextingPage() {
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
                Legal Update
              </p>
              <h1 className="font-hero font-[900] text-4xl md:text-5xl lg:text-6xl text-slate-900 uppercase tracking-tighter leading-[0.95] mb-6">
                Is Cold Texting Legal for Real Estate Investors in 2026?
              </h1>
              <p className="text-xl text-slate-600 mb-6">
                Cold texting probate leads without consent violates TCPA. Learn why the Coffey ruling doesn't make it legal, the real penalties, and compliant alternatives.
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

        {/* Critical Warning Section */}
        <section className="py-8 px-6 bg-red-50 border-y border-red-200">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold text-red-900 mb-2">
                  The Short Answer: No, Cold Texting Is Not Legal
                </p>
                <p className="text-lg text-red-800 mb-3">
                  <strong>Cold texting without prior express written consent violates the TCPA.</strong> Penalties range from $500 to $1,500 per text. A campaign of 1,000 texts could mean $500,000 to $1.5 million in liability.
                </p>
                <p className="text-base text-red-700">
                  The Coffey ruling does NOT change this. It exempts buy offers from Do Not Call rules, but the ATDS consent requirement for automated texts remains fully in effect.
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
                "Can I cold text probate leads?" We hear this question constantly from real estate investors. Many have heard about the 2025 Coffey ruling and assume it gives them a green light to text homeowners with buy offers.
              </p>

              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                It doesn't. The Coffey ruling addressed a narrow issue about the Do Not Call registry. It did not change the fundamental requirement that you need consent before sending automated text messages to cell phones.
              </p>

              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                For investors targeting probate leads, understanding these rules isn't optional. Executors and heirs dealing with inherited properties deserve respectful outreach, and your business deserves protection from catastrophic legal exposure.
              </p>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                What Is Cold Texting?
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Cold texting means sending unsolicited SMS messages to potential sellers who haven't given you permission to contact them. Investors use it because texting feels immediate, less intrusive than calls, and easy to scale.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                The appeal is obvious. You can reach hundreds of leads in minutes. Response rates for texts often beat email. And unlike cold calls, you don't have to catch someone at the right moment.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                But that scalability is exactly what makes cold texting legally dangerous. The same technology that lets you reach 500 people in an hour is what triggers TCPA liability.
              </p>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                TCPA Basics: Rules for Calls vs. Texts
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                The Telephone Consumer Protection Act (TCPA) regulates unsolicited contact to consumers. Here's what you need to know:
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Texts Are Treated as Calls</h3>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Under the TCPA, text messages are legally equivalent to phone calls. The same rules that apply to robocalls apply to automated texts. This is established law, upheld repeatedly by courts.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">The ATDS Rule</h3>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                The TCPA prohibits using an "automatic telephone dialing system" (ATDS) to send calls or texts to cell phones without prior express consent. After the 2021 Supreme Court ruling in Facebook v. Duguid, the definition of ATDS narrowed somewhat, but most texting platforms that can send bulk messages still qualify.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                If you're using software to send texts to a list of numbers, you're likely using an ATDS.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Consent Requirements</h3>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                For commercial or marketing messages, you need <strong className="text-slate-900">prior express written consent</strong>. This means the recipient must have actively agreed to receive texts from you, in writing, before you contact them.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Buying a list doesn't count as consent. The person on that list never agreed to hear from you specifically.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Penalties</h3>

              <div className="grid sm:grid-cols-3 gap-4 my-8">
                <div className="p-5 bg-red-50 rounded-xl text-center">
                  <p className="text-3xl font-black text-red-600">$500</p>
                  <p className="text-sm text-red-700 mt-1">Per unintentional violation</p>
                </div>
                <div className="p-5 bg-red-50 rounded-xl text-center">
                  <p className="text-3xl font-black text-red-600">$1,500</p>
                  <p className="text-sm text-red-700 mt-1">Per willful violation</p>
                </div>
                <div className="p-5 bg-red-50 rounded-xl text-center">
                  <p className="text-3xl font-black text-red-600">No Cap</p>
                  <p className="text-sm text-red-700 mt-1">On class action damages</p>
                </div>
              </div>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                The Coffey Ruling Explained
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                In June 2025, the U.S. District Court for the District of Arizona ruled in <em>Coffey v. Fast Easy Offer</em> that offers to buy real estate are not "telephone solicitations" under the TCPA's Do Not Call provisions.
              </p>

              <div className="p-6 bg-slate-50 border-l-4 border-[#0891b2] rounded-r-xl my-8">
                <p className="text-lg text-slate-700 italic m-0">
                  "The messages constituted an offer for defendants to purchase the plaintiff's property, not an encouragement for her to purchase something from defendants."
                </p>
                <p className="text-sm text-slate-500 mt-3 m-0">From the Coffey ruling</p>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Because the investor was offering to buy (not sell), it wasn't a "solicitation" under the DNC definition.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">What Coffey Actually Means</h3>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                The Coffey ruling exempts pure buy offers from Do Not Call registry rules. That's it.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                It does NOT:
              </p>

              <ul className="space-y-3 my-8">
                {[
                  "Eliminate the requirement for consent before sending automated texts",
                  "Allow you to text cell phones using an ATDS without permission",
                  "Create a blanket exemption for real estate investor outreach",
                  "Apply to messages that include any sales pitch for services"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                Why Cold Texting Isn't Legal (Despite the Myths)
              </h2>

              <div className="space-y-4 my-8">
                {myths.map((item, i) => (
                  <div key={i} className="p-5 bg-slate-50 rounded-xl">
                    <div className="flex items-start gap-3 mb-2">
                      {item.icon}
                      <p className="font-bold text-slate-900 m-0">Myth: "{item.myth}"</p>
                    </div>
                    <p className="text-slate-600 ml-8 m-0"><strong>Reality:</strong> {item.reality}</p>
                  </div>
                ))}
              </div>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                Risks for Your Business
              </h2>

              <div className="grid sm:grid-cols-2 gap-4 my-8">
                {[
                  { title: "Financial Liability", desc: "At $500-$1,500 per text, 1,000 messages = up to $1.5M in potential damages" },
                  { title: "Class Actions", desc: "Every person you texted is a potential class member. Settlements reach eight figures." },
                  { title: "Carrier Blocks", desc: "Spam detection blocks suspected bulk texting. Your number can be blacklisted." },
                  { title: "State Laws", desc: "Florida, Texas, and others have additional restrictions beyond federal TCPA." }
                ].map((item, i) => (
                  <div key={i} className="p-5 bg-amber-50 rounded-xl border border-amber-200">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-5 h-5 text-amber-600" />
                      <h4 className="font-bold text-slate-900 m-0">{item.title}</h4>
                    </div>
                    <p className="text-slate-600 text-sm m-0">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                Recent FCC Updates
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                The regulatory environment continues to tighten:
              </p>

              <ul className="space-y-4 my-8">
                {[
                  { title: "One-to-One Consent Rule (Jan 2027)", desc: "Consent must be given to a specific, identified sender. Broad opt-ins won't qualify." },
                  { title: "Robotext Protections", desc: "FCC treats unwanted robotexts with the same scrutiny as robocalls. Enforcement is increasing." },
                  { title: "Carrier Registration (10DLC)", desc: "Business texting requires carrier vetting specifically designed to block non-compliant senders." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[#0891b2] flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-slate-600">
                      <strong className="text-slate-900">{item.title}:</strong> {item.desc}
                    </span>
                  </li>
                ))}
              </ul>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                Compliant Alternatives That Work
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                If cold texting is off the table, here's what actually works:
              </p>

              <ol className="space-y-5 my-8">
                {[
                  { title: "Cold Calling with Manual Dialing", desc: "The Coffey ruling helps here. For buy offers, DNC restrictions don't apply. Use manual or power dialers with a human on the line." },
                  { title: "Direct Mail", desc: "Physical mail has no TCPA restrictions. Slower than texting but completely legal and effective for probate leads." },
                  { title: "Opt-In Text Campaigns", desc: "Build your own list through website forms or lead magnets. When someone actively agrees to receive texts, you have compliant consent." },
                  { title: "Email Outreach", desc: "Email is regulated by CAN-SPAM, not TCPA. Rules are more permissive for business outreach." },
                  { title: "Follow-Up After Initial Contact", desc: "Once you've made contact through a compliant channel, ask for permission to text. Document that consent." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-9 h-9 rounded-full bg-[#0891b2]/10 text-[#0891b2] font-bold flex items-center justify-center flex-shrink-0 text-lg">{i + 1}</span>
                    <div>
                      <strong className="text-lg text-slate-900">{item.title}</strong>
                      <span className="text-lg text-slate-600"> {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ol>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                For more on compliant calling strategies, see our guide:{' '}
                <Link href="/insights/ai-cold-calling-real-estate-investors" className="text-[#0891b2] hover:underline">
                  AI Cold Calling for Real Estate Investors
                </Link>
              </p>

              {/* HomeFlip.ai CTA Section */}
              <div className="my-16 -mx-4 sm:-mx-8 md:-mx-12">
                <div className="bg-gradient-to-br from-slate-50/80 to-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-200/60 shadow-xl shadow-slate-200/50">
                  <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mb-4 text-center">
                    The Right Way to Work Probate Leads
                  </h2>
                  <p className="text-lg md:text-xl text-slate-600 text-center max-w-2xl mx-auto mb-10">
                    HomeFlip.ai delivers fresh probate leads from court records. We give you the contacts. How you reach out is up to you, but we recommend compliant methods:
                  </p>

                  <div className="space-y-3 md:space-y-4 max-w-2xl mx-auto">
                    {[
                      { title: "Cold Calling with Buy Offers", desc: "Legal under Coffey when using manual dialing" },
                      { title: "Direct Mail Campaigns", desc: "No TCPA restrictions, effective for probate" },
                      { title: "Opt-In Relationship Building", desc: "Build consent through your own lead capture" },
                      { title: "Email Follow-Up", desc: "CAN-SPAM rules are more permissive" }
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
                Conclusion
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Cold texting probate leads without consent is not legal. The Coffey ruling doesn't change that. It exempts buy offers from Do Not Call rules, but the ATDS consent requirement for automated texts to cell phones remains fully in effect.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                The penalties are severe: $500 to $1,500 per text, with no cap on class actions. The risk isn't worth it.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Fortunately, compliant alternatives exist. Cold calling with buy offers is legal under Coffey. Direct mail has no TCPA restrictions. Opt-in campaigns let you text people who actually want to hear from you.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                For probate leads specifically, respectful outreach matters. These are families dealing with loss. The goal is sustainable deal flow, not a one-time blast that lands you in court.
              </p>

              {/* References */}
              <div className="mt-16 pt-8 border-t border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">References</h3>
                <ol className="space-y-2 text-sm text-slate-500">
                  <li className="flex items-start gap-2">
                    <span>1.</span>
                    <a href="https://www.fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline flex items-center gap-1">
                      FCC: Stop Unwanted Robocalls and Texts
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>2.</span>
                    <a href="https://www.mintz.com/insights-center/viewpoints/2776/2025-06-25-telephone-and-texting-compliance-wake-and-smell-coffey" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline flex items-center gap-1">
                      Mintz: Wake Up and Smell the Coffey
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>3.</span>
                    <a href="https://natlawreview.com/article/buying-activity-vs-selling-activity-court-holds-offers-buy-houses-are-not-telephone" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline flex items-center gap-1">
                      National Law Review: Buying Activity vs. Selling Activity
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>4.</span>
                    <a href="https://tcpaworld.com/2026/01/07/breaking-fcc-pushes-back-tcpa-consent-revocation-rule-new-effective-date-now-january-31-2027/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline flex items-center gap-1">
                      TCPA World: FCC Pushes Back Consent Rule
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>5.</span>
                    <a href="https://www.kelleydrye.com/viewpoints/newsletters/tcpa-tracker/tcpa-tracker-july-august-2025" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline flex items-center gap-1">
                      Kelley Drye: TCPA Tracker July-August 2025
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>6.</span>
                    <a href="https://www.eztexting.com/real-estate" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline flex items-center gap-1">
                      EZ Texting: SMS for Real Estate Compliance
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
                  Disclaimer: This article is for informational purposes only and does not constitute legal advice. TCPA regulations are complex and subject to change. Consult a qualified telecommunications attorney for guidance on your specific outreach practices.
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
                Common questions about cold texting and TCPA compliance.
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
              Fresh leads. Compliant outreach. Sustainable deal flow.
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

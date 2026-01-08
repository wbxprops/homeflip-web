'use client';

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Scale, Phone, ShieldCheck, Users, AlertTriangle, CheckCircle, ExternalLink, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// FAQ data
const faqs = [
  {
    question: "Can real estate investors cold call homeowners in 2026?",
    answer: "Yes. The Cofey v. Fast Easy Offer ruling (June 2025) confirms that calls offering to buy real estate are not \"telephone solicitations\" under the TCPA. This applies to investors, wholesalers, and flippers making purchase offers."
  },
  {
    question: "Is cold calling probate leads legal under the new TCPA ruling?",
    answer: "Yes, for investors making buy offers. Probate records are public information, and contacting executors or heirs with a cash offer to purchase inherited property falls outside the TCPA's solicitation definition per the Cofey ruling."
  },
  {
    question: "What's the difference between investor calls and agent calls under TCPA?",
    answer: "Investors offering to buy property are not making telephone solicitations. Agents pitching their services (listing, selling) are soliciting a purchase of those services, which triggers TCPA DNC provisions. This distinction led to Realogy's $20M settlement for agent cold calls."
  },
  {
    question: "Do I still need consent for robocalls as an investor?",
    answer: "Yes. The Cofey ruling addresses the DNC \"telephone solicitation\" provisions, not the separate TCPA rules requiring prior express consent for calls using autodialers or prerecorded messages. Manual dialing remains the safest approach."
  },
  {
    question: "What happened to the FCC's one-to-one consent rule?",
    answer: "The 11th Circuit vacated the rule in March 2025. This means broader consent arrangements for lead sharing are again permissible, giving more flexibility to lead generation services and the investors who use them."
  },
  {
    question: "Are there state laws I need to worry about?",
    answer: "Yes. While the Cofey ruling is federal, some states have their own telemarketing laws that may impose additional requirements. Consult an attorney familiar with telecommunications law in your target states."
  },
  {
    question: "How do I find probate leads to cold call?",
    answer: "HomeFlip.ai delivers fresh probate leads daily, sourced directly from county court records and matched to property data. This gives you the contact information, property details, and case timelines needed for effective outreach."
  },
  {
    question: "What should I say when cold calling probate leads?",
    answer: "Lead with your intent to purchase: \"I noticed a probate was filed for [property]. I'm a local investor interested in making a cash offer if the family is considering selling.\" Be direct, respectful, and empathetic to the family's situation."
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

export default function TCPARulingPage() {
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
                TCPA Ruling 2025: Investors Can Cold Call to Buy Houses
              </h1>
              <p className="text-xl text-slate-600 mb-6">
                The <em>Cofey v. Fast Easy Offer</em> ruling confirms real estate investor buy offers are NOT telephone solicitations under TCPA. Here's what it means for cold calling probate leads in 2026.
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
                  <Scale className="w-6 h-6 text-[#0891b2]" />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                    The Bottom Line
                  </p>
                  <p className="text-lg text-slate-700">
                    Calls offering to <strong>buy</strong> real estate are NOT "telephone solicitations" under the TCPA. Investors can cold call homeowners with cash offers, including probate leads, without the same legal exposure agents face for listing pitches.
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
                Game-changer alert for real estate investors: The 2025 TCPA ruling in <em>Cofey v. Fast Easy Offer</em> just handed you a massive green light. Federal courts have confirmed that calls offering to <strong className="text-slate-900">buy</strong> real estate are NOT "telephone solicitations" under the TCPA.
              </p>

              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                This distinction matters enormously. While real estate agents face ongoing TCPA liability for listing solicitation calls (see Realogy's $20 million settlement), investors making buy offers operate in a fundamentally different legal category.
              </p>

              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                For investors targeting <strong className="text-slate-900">probate leads</strong>, where motivated executors and heirs often need fast solutions, this ruling removes a major compliance concern. Now you can work those leads by phone with clarity on where the law stands.
              </p>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                What Is the TCPA? Quick Background
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                The Telephone Consumer Protection Act (TCPA) is a 1991 federal law designed to protect consumers from unwanted telemarketing calls, texts, and faxes. Its key provisions include:
              </p>

              <ul className="space-y-3 my-8">
                {[
                  { title: "Do Not Call Registry", desc: "Prohibits \"telephone solicitations\" to numbers on the National DNC list" },
                  { title: "Autodialer Restrictions", desc: "Requires prior express consent for robocalls and automated text messages" },
                  { title: "Time-of-Day Limits", desc: "Restricts telemarketing calls to 8am-9pm local time" },
                  { title: "Penalties", desc: "Statutory damages of $500-$1,500 per violation" }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#0891b2] flex-shrink-0 mt-2.5" />
                    <span className="text-lg text-slate-600">
                      <strong className="text-slate-900">{item.title}:</strong> {item.desc}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                For years, real estate investors feared that cold calling homeowners (even with legitimate cash offers) could trigger TCPA liability. That fear was overblown. And now we have federal court confirmation.
              </p>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                The Landmark Cofey v. Fast Easy Offer Ruling
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                On June 5, 2025, the U.S. District Court for the District of Arizona issued a ruling in{' '}
                <a href="https://www.casemine.com/judgement/us/6843a77b656e170da02cc29e" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline">
                  <em>Cofey v. Fast Easy Offer, LLC</em>
                </a>
                {' '}that clarified a critical distinction for real estate investors.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">The Facts</h3>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                The plaintiff received calls from Fast Easy Offer, a real estate investment company, inquiring whether she wanted to sell her property. She sued under the TCPA, claiming these were prohibited "telephone solicitations" to a DNC-registered number.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">The Court's Ruling</h3>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                The court granted summary judgment to the defendant, holding that <strong className="text-slate-900">offers to purchase real estate are not "telephone solicitations"</strong> under the TCPA.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                The reasoning centers on the TCPA's definition of "telephone solicitation":
              </p>

              <div className="p-6 bg-slate-50 border-l-4 border-[#0891b2] rounded-r-xl my-8">
                <p className="text-lg text-slate-700 italic m-0">
                  "The initiation of a telephone call or message for the purpose of encouraging the purchase or rental of, or investment in, property, goods, or services."
                </p>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                The court emphasized the key phrase: "encouraging the <strong className="text-slate-900">purchase</strong>." When an investor calls to buy a house, they're not encouraging the recipient to purchase anything. They're offering to be the purchaser themselves.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                As{' '}
                <a href="https://tcpaworld.com/2025/07/24/buy-away-another-court-holds-offers-to-buy-real-estate-are-not-telephone-solicitations-under-the-tcpas-dnc-provisions/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline">
                  TCPAWorld's analysis
                </a>
                {' '}noted: "The call was not designed to encourage the recipient to buy something. It was designed to encourage the recipient to <strong className="text-slate-900">sell</strong> something."
              </p>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                Investors vs. Agents: TCPA Breakdown
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                The <em>Cofey</em> ruling creates a clear divide between how the TCPA treats investor buy offers versus agent listing pitches:
              </p>

              {/* Comparison Table */}
              <div className="overflow-x-auto my-8 -mx-4 px-4 sm:mx-0 sm:px-0">
                <table className="w-full border-collapse rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left p-4 font-bold text-slate-900">Aspect</th>
                      <th className="text-center p-4 font-bold text-[#0891b2]">Investor Buy Offers</th>
                      <th className="text-center p-4 font-bold text-slate-600">Agent Listing Pitches</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="bg-white">
                      <td className="p-4 text-slate-700 font-medium">TCPA Status</td>
                      <td className="p-4 text-center font-bold text-[#0891b2]">NOT a solicitation</td>
                      <td className="p-4 text-center text-slate-600">IS a solicitation</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-4 text-slate-700 font-medium">Example Call</td>
                      <td className="p-4 text-center text-[#0891b2]">"I'll buy your house cash"</td>
                      <td className="p-4 text-center text-slate-600">"List with me!"</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="p-4 text-slate-700 font-medium">DNC Compliance</td>
                      <td className="p-4 text-center text-[#0891b2]">Lower risk</td>
                      <td className="p-4 text-center text-slate-600">High risk</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-4 text-slate-700 font-medium">Recent Precedent</td>
                      <td className="p-4 text-center text-[#0891b2]">Cofey ruling (win)</td>
                      <td className="p-4 text-center text-slate-600">Realogy $20M settlement</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">The Realogy Warning for Agents</h3>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                In contrast to the investor-friendly <em>Cofey</em> ruling, real estate agents face serious TCPA exposure. In 2021,{' '}
                <a href="https://nationalmortgageprofessional.com/news/realogy-settles-tcpa-class-action-lawsuit-20m" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline">
                  Realogy settled a TCPA class action for $20 million
                </a>
                {' '}over cold calls and texts to consumers.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                The difference? Agents pitch their <strong className="text-slate-900">services</strong> (listing, marketing, selling) which constitutes "encouraging the purchase" of those services. Investors offering to buy don't trigger the same provision.
              </p>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                Key Takeaways for TCPA Compliance
              </h2>

              <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">What the Ruling Allows</h3>

              <div className="grid sm:grid-cols-1 gap-4 my-8">
                {[
                  { icon: <Phone className="w-5 h-5" />, title: "Manual cold calls with buy offers", desc: "To homeowners, including those on the DNC registry" },
                  { icon: <Users className="w-5 h-5" />, title: "Direct outreach to probate leads", desc: "Inherited property owners and other motivated sellers" },
                  { icon: <ShieldCheck className="w-5 h-5" />, title: "Wholesaling calls", desc: "Where you're offering to purchase (or assign your contract)" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 bg-[#0891b2]/5 rounded-xl">
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

              <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">What Still Requires Caution</h3>

              <ul className="space-y-4 my-8">
                {[
                  { title: "Robocalls and autodialers", desc: "Prior express consent is still required for automated calling systems" },
                  { title: "State-specific laws", desc: "Some states have their own telemarketing regulations beyond federal TCPA" },
                  { title: "Misrepresentation", desc: "Calls must be truthful. Claiming you'll \"buy\" when you intend only to wholesale requires honest disclosure" },
                  { title: "Time restrictions", desc: "The 8am-9pm calling window still applies as a best practice" }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-slate-600">
                      <strong className="text-slate-900">{item.title}:</strong> {item.desc}
                    </span>
                  </li>
                ))}
              </ul>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                Related Win: One-to-One Consent Rule Vacated
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Investors received another compliance win in March 2025 when the{' '}
                <a href="https://www.wiley.law/alert-UPDATE-11th-Circuit-Vacates-FCCs-One-to-One-TCPA-Consent-Rule" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline">
                  11th Circuit vacated the FCC's "one-to-one" consent rule
                </a>
                .
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                The vacated rule would have required that consumer consent for marketing calls be limited to a single, specific seller. With the rule vacated, broader consent arrangements for lead sharing are again permissible, giving more flexibility to lead generation services and the investors who use them.
              </p>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                Cold Calling Probate Leads: The Perfect Post-Ruling Strategy
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                The <em>Cofey</em> ruling is particularly powerful when paired with <strong className="text-slate-900">probate leads</strong>. Here's why probate represents the ideal cold calling opportunity for investors in 2026.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">Why Probate?</h3>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Our{' '}
                <Link href="/insights/probate-vs-foreclosure" className="text-[#0891b2] hover:underline">
                  research on probate vs. foreclosures
                </Link>
                {' '}reveals that probate properties outnumber foreclosures by nearly 2-to-1 nationally. That's approximately 780,000 probate opportunities annually versus roughly 400,000 foreclosure filings.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 my-8">
                {[
                  { title: "Motivated sellers", desc: "Executors and heirs often prioritize speed over maximum price" },
                  { title: "Less competition", desc: "Most investors don't know how to find or work probate leads" },
                  { title: "Direct relationships", desc: "No bidding wars, just conversations with decision-makers" },
                  { title: "Consistent volume", desc: "Probate happens year-round regardless of market conditions" }
                ].map((item, i) => (
                  <div key={i} className="p-5 bg-slate-50 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="w-5 h-5 text-[#0891b2]" />
                      <h4 className="font-bold text-slate-900 m-0">{item.title}</h4>
                    </div>
                    <p className="text-slate-600 text-sm m-0">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mt-10 mb-4">A Sample Cold Call Script</h3>

              <div className="p-6 bg-[#0891b2]/5 border border-[#0891b2]/20 rounded-xl my-8">
                <p className="text-lg text-slate-700 italic m-0">
                  "Hi, this is [Name] with [Company]. I noticed a probate was filed for the property at [Address]. I'm a local investor and I'd like to make a cash offer if the family is considering selling. Would that be something worth discussing?"
                </p>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Simple. Direct. Frames you as the buyer. Exactly what the <em>Cofey</em> ruling protects.
              </p>

              <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mt-16 mb-6">
                Action Plan for Investors in 2026
              </h2>

              <ol className="space-y-5 my-8">
                {[
                  { title: "Use manual dialing", desc: "No autodialers or predictive dialers. Keep it compliant" },
                  { title: "Get targeted probate leads", desc: "Fresh leads from court records, matched to property data" },
                  { title: "Train on \"buy offer\" framing", desc: "Every call clearly communicates your intent to purchase" },
                  { title: "Document everything", desc: "Log calls in your CRM: dates, times, scripts, outcomes" },
                  { title: "Consult an attorney", desc: "Review your practices for state-level compliance" },
                  { title: "Follow up consistently", desc: "Probate timelines are long. Systematic follow-up wins deals" }
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

              {/* HomeFlip.ai CTA Section */}
              <div className="my-16 -mx-4 sm:-mx-8 md:-mx-12">
                <div className="bg-gradient-to-br from-slate-50/80 to-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-200/60 shadow-xl shadow-slate-200/50">
                  <h2 className="font-hero font-[900] text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter mb-4 text-center">
                    Put This Ruling to Work
                  </h2>
                  <p className="text-lg md:text-xl text-slate-600 text-center max-w-2xl mx-auto mb-10">
                    Pair compliant cold calling with fresh probate leads from HomeFlip.ai:
                  </p>

                  <div className="space-y-3 md:space-y-4 max-w-2xl mx-auto">
                    {[
                      { title: "Fresh Probate Leads Daily", desc: "Direct from county court records, delivered to your dashboard" },
                      { title: "Property Data Matched", desc: "Automatically linked to tax records and ownership information" },
                      { title: "Contact Information", desc: "Executor and heir details for direct outreach" },
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
                Conclusion
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                The 2025 TCPA ruling in <em>Cofey v. Fast Easy Offer</em> removes a major compliance concern for real estate investors. Federal courts have now confirmed what savvy investors suspected: offering to buy property is fundamentally different from soliciting services.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                For investors targeting probate leads, this is a green light to pick up the phone. Probate properties represent nearly twice the opportunity of foreclosures, with a fraction of the competition. Executors and heirs often need fast, simple solutions. Exactly what investor cash offers provide.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                2026 is the year to build your cold calling probate leads strategy. Get compliant. Get consistent. Get deals.
              </p>

              {/* References */}
              <div className="mt-16 pt-8 border-t border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-4">References</h3>
                <ol className="space-y-2 text-sm text-slate-500">
                  <li className="flex items-start gap-2">
                    <span>1.</span>
                    <a href="https://www.casemine.com/judgement/us/6843a77b656e170da02cc29e" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline flex items-center gap-1">
                      Cofey v. Fast Easy Offer, LLC, U.S. District Court, Arizona (June 2025)
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>2.</span>
                    <a href="https://tcpaworld.com/2025/07/24/buy-away-another-court-holds-offers-to-buy-real-estate-are-not-telephone-solicitations-under-the-tcpas-dnc-provisions/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline flex items-center gap-1">
                      TCPAWorld: Buy Away: Court Holds Offers to Buy Are Not Solicitations
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>3.</span>
                    <a href="https://www.rothjackson.com/blog/2025/06/are-real-estate-purchase-calls-telephone-solicitations-another-federal-district-court-says-no/" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline flex items-center gap-1">
                      Roth Jackson: Real Estate Purchase Calls Analysis
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>4.</span>
                    <a href="https://www.mintz.com/insights-center/viewpoints/2776/2025-06-25-telephone-and-texting-compliance-wake-and-smell-coffey" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline flex items-center gap-1">
                      Mintz: Wake and Smell the Coffey
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>5.</span>
                    <a href="https://natlawreview.com/article/buying-activity-vs-selling-activity-court-holds-offers-buy-houses-are-not-telephone" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline flex items-center gap-1">
                      National Law Review: Buying vs. Selling Activity
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>6.</span>
                    <a href="https://nationalmortgageprofessional.com/news/realogy-settles-tcpa-class-action-lawsuit-20m" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline flex items-center gap-1">
                      National Mortgage Professional: Realogy $20M Settlement
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>7.</span>
                    <a href="https://www.wiley.law/alert-UPDATE-11th-Circuit-Vacates-FCCs-One-to-One-TCPA-Consent-Rule" target="_blank" rel="noopener noreferrer" className="text-[#0891b2] hover:underline flex items-center gap-1">
                      Wiley: 11th Circuit Vacates One-to-One Consent Rule
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
                  Disclaimer: This article is for informational purposes only and does not constitute legal advice. Consult a qualified telecommunications attorney for guidance on your specific calling practices.
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
                Common questions about the TCPA ruling and cold calling probate leads.
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
              Ready to Start Cold Calling Probate Leads?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              The legal clarity is here. The leads are waiting. Build your 2026 deal pipeline with HomeFlip.ai.
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

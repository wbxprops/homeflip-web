export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-gray-900">
            Homeflip<span className="text-[#5EEADC]">.ai</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#why-probate" className="text-gray-600 hover:text-gray-900 hidden md:block transition-colors font-medium">
              Why Probate
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 hidden md:block transition-colors font-medium">
              How It Works
            </a>
            <a href="#features" className="text-gray-600 hover:text-gray-900 hidden md:block transition-colors font-medium">
              Features
            </a>
            <a
              href="#waitlist"
              className="btn-gradient px-6 py-2.5 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-[#5EEADC]/25 hover:scale-105"
            >
              Get Early Access
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - King Kong Style */}
      <section className="relative pt-32 pb-8 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5EEADC]/5 via-white to-[#A855F7]/5" />
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#5EEADC]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#A855F7]/15 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.1] tracking-tight">
            Probate Isn&apos;t About Being Early.
            <br />
            <span className="bg-gradient-to-r from-[#5EEADC] to-[#A855F7] bg-clip-text text-transparent">
              It&apos;s About Being On Time.
            </span>
          </h1>

          <p className="mt-8 text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Other vendors sell you static lists. Homeflip.ai tracks the probate timeline—so you call when it actually matters.
          </p>

          {/* Inline Email Capture */}
          <form className="mt-12 max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white rounded-full shadow-2xl shadow-gray-200/50 border border-gray-100">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full text-lg focus:outline-none"
              />
              <button
                type="submit"
                className="btn-gradient px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-lg hover:shadow-[#5EEADC]/30 hover:scale-[1.02] whitespace-nowrap"
              >
                Get Early Access
              </button>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Join 500+ investors on the waitlist. No spam, ever.
            </p>
          </form>
        </div>
      </section>

      {/* Stats Bar - King Kong Style Credibility Strip */}
      <section className="py-16 px-6 border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-black text-gray-900">$2.4M+</div>
              <div className="mt-2 text-gray-600 font-medium">Deal Value Sourced</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-black text-gray-900">500+</div>
              <div className="mt-2 text-gray-600 font-medium">Investors on Waitlist</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-black text-gray-900">10K+</div>
              <div className="mt-2 text-gray-600 font-medium">Leads Processed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-black text-gray-900">5</div>
              <div className="mt-2 text-gray-600 font-medium">Counties Live</div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Comparison - The Transformation */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900">
              Static Lists vs. Timeline Intelligence
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Probate has stages: filing, inventory, delays, listings, resolution. Most vendors give you a snapshot. We track the whole timeline.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Before - Static Lists */}
            <div className="bg-gray-100 p-8 md:p-10 rounded-3xl border-2 border-gray-200 relative">
              <div className="absolute -top-4 left-8 bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-bold">
                STATIC LISTS
              </div>
              <div className="space-y-6 mt-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-500 font-bold">✗</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Filing date only</h4>
                    <p className="text-gray-600">You get a date and a name. No context for where the case actually stands.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-500 font-bold">✗</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Already cold</h4>
                    <p className="text-gray-600">Lists are weeks or months old. You&apos;re calling cases too early—or too late.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-500 font-bold">✗</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">No lifecycle tracking</h4>
                    <p className="text-gray-600">Inventory filed? Property listed? Case delayed? You&apos;ll never know.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-500 font-bold">✗</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Shared with everyone</h4>
                    <p className="text-gray-600">Same CSV sold to 10+ investors. You&apos;re competing before you even dial.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-500 font-bold">✗</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">No guidance</h4>
                    <p className="text-gray-600">Which cases should you call today? Vendors don&apos;t answer that.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* After - Timeline Intelligence */}
            <div className="bg-gradient-to-br from-[#5EEADC]/10 to-[#A855F7]/10 p-8 md:p-10 rounded-3xl border-2 border-[#5EEADC]/30 relative">
              <div className="absolute -top-4 left-8 bg-gradient-to-r from-[#5EEADC] to-[#A855F7] text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                TIMELINE INTELLIGENCE
              </div>
              <div className="space-y-6 mt-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#5EEADC]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#2DD4BF] font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Full case lifecycle</h4>
                    <p className="text-gray-600">Track every stage: filing, inventory, delays, property listings, resolution.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#5EEADC]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#2DD4BF] font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Status change alerts</h4>
                    <p className="text-gray-600">Know when a case moves closer to sale—not weeks after it happened.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#5EEADC]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#2DD4BF] font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Timing-based priority</h4>
                    <p className="text-gray-600">We surface cases that are ready now, not just cases that exist.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#5EEADC]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#2DD4BF] font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Court-synced updates</h4>
                    <p className="text-gray-600">Continuous monitoring, not monthly dumps. Data stays fresh.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#5EEADC]/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#2DD4BF] font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Actionable answers</h4>
                    <p className="text-gray-600">Who should you call today? We tell you—based on timing, not just volume.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Probate Section */}
      <section id="why-probate" className="px-6 py-24 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black">
              Why Probate? <span className="text-[#5EEADC]">It&apos;s Simple Math.</span>
            </h2>
            <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
              While other investors fight over the same leads, you&apos;ll be working a market most people don&apos;t understand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all">
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">Motivated Sellers</h3>
              <p className="text-gray-400">
                Heirs often inherit properties they can&apos;t manage, don&apos;t want, or need to liquidate quickly. They value speed and certainty over top dollar.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all">
              <div className="text-5xl mb-6">🏆</div>
              <h3 className="text-xl font-bold text-white mb-3">Less Competition</h3>
              <p className="text-gray-400">
                Less than 5% of investors work probate. While 50 people fight over one foreclosure, you might be the only one calling a probate lead.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all">
              <div className="text-5xl mb-6">📈</div>
              <h3 className="text-xl font-bold text-white mb-3">Consistent Flow</h3>
              <p className="text-gray-400">
                Courts file new probate cases every week, year-round. No seasonal slowdowns. No market dependency. Predictable lead volume.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all">
              <div className="text-5xl mb-6">🤝</div>
              <h3 className="text-xl font-bold text-white mb-3">Win-Win Deals</h3>
              <p className="text-gray-400">
                You&apos;re helping families solve a real problem. They get a quick, hassle-free sale. You get a deal. Everyone wins.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-2xl text-gray-300 font-medium">
              Probate leads are not records—<span className="text-[#5EEADC] font-bold">they&apos;re evolving situations.</span>
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900">
              How It Works
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
              From lead to close in three simple steps.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-24 left-[20%] right-[20%] h-1 bg-gradient-to-r from-[#5EEADC] via-[#A855F7] to-[#5EEADC] rounded-full" />

            <div className="grid lg:grid-cols-3 gap-12">
              <div className="relative text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-[#5EEADC] to-[#2DD4BF] rounded-3xl flex items-center justify-center text-4xl font-black text-white mx-auto shadow-2xl shadow-[#5EEADC]/30">
                  1
                </div>
                <h3 className="mt-8 text-2xl font-bold text-gray-900">We Find the Leads</h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Our AI monitors court records daily, identifying new probate cases with real estate. Fresh leads hit your dashboard automatically—no manual work required.
                </p>
              </div>

              <div className="relative text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-[#A855F7] to-[#7C3AED] rounded-3xl flex items-center justify-center text-4xl font-black text-white mx-auto shadow-2xl shadow-[#A855F7]/30">
                  2
                </div>
                <h3 className="mt-8 text-2xl font-bold text-gray-900">We Prioritize for You</h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Not all leads are equal. Smart scoring analyzes property value, equity, and motivation signals to surface your best opportunities first.
                </p>
              </div>

              <div className="relative text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-[#5EEADC] to-[#A855F7] rounded-3xl flex items-center justify-center text-4xl font-black text-white mx-auto shadow-2xl shadow-[#5EEADC]/30">
                  3
                </div>
                <h3 className="mt-8 text-2xl font-bold text-gray-900">You Close Deals</h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Follow guided workflows to reach out, build rapport, and close. We give you the system—you build the relationships and make deals happen.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a
              href="#waitlist"
              className="inline-block btn-gradient px-10 py-5 rounded-full font-bold text-lg transition-all hover:shadow-xl hover:shadow-[#5EEADC]/30 hover:scale-105"
            >
              Start Finding Deals
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900">
              Everything You Need to Close More Deals
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
              A complete toolkit for probate real estate investing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🔍", title: "Automated Lead Discovery", desc: "Fresh probate leads delivered to your dashboard daily. No manual searching, no courthouse visits, no clunky public records." },
              { icon: "⚡", title: "AI-Powered Prioritization", desc: "Smart scoring tells you which leads to work first based on property value, equity, timing, and motivation signals." },
              { icon: "🏠", title: "Property Intelligence", desc: "Instant access to valuation estimates, ownership history, tax records, and property characteristics." },
              { icon: "📋", title: "Guided Workflows", desc: "Step-by-step processes for outreach, follow-up, offer presentation, and closing. Nothing falls through the cracks." },
              { icon: "👥", title: "Contact Management", desc: "Track attorneys, personal representatives, fiduciaries, and heirs. All your relationships in one place." },
              { icon: "🔔", title: "Real-Time Notifications", desc: "Get instant alerts when new cases match your criteria or when it's time to follow up on a lead." },
            ].map((feature, i) => (
              <div key={i} className="group bg-white hover:bg-gradient-to-br hover:from-[#5EEADC]/5 hover:to-[#A855F7]/5 p-8 rounded-3xl border border-gray-200 hover:border-[#5EEADC]/30 hover:shadow-xl transition-all duration-300">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objection Handling - Addressing Concerns */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900">
              &ldquo;But wait...&rdquo;
            </h2>
            <p className="mt-6 text-xl text-gray-600">
              Let&apos;s address the questions you&apos;re probably thinking.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                &ldquo;Isn&apos;t contacting probate families... unethical?&rdquo;
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We get it—this is the #1 concern. Here&apos;s the reality: by the time a probate case is filed, families are dealing with practical matters, including property. Many heirs are <em>relieved</em> to hear from someone who can help. You&apos;re offering a solution, not creating a problem. The key is respectful, professional outreach—and that&apos;s exactly what our system is designed for.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                &ldquo;Heirs want full market value—they won&apos;t sell at a discount.&rdquo;
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Some do, and that&apos;s fine—they&apos;re not your customer. But many heirs prioritize <strong>speed, certainty, and simplicity</strong> over maximizing price. No repairs, no staging, no showings, no waiting months for a buyer. A &ldquo;discount&rdquo; is actually a fair trade for the convenience and certainty you provide.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                &ldquo;I don&apos;t understand probate law.&rdquo;
              </h3>
              <p className="text-gray-600 leading-relaxed">
                You don&apos;t need to. The attorneys and courts handle the legal process. Your job is to find motivated sellers and make offers—same as any other deal. Title companies know how to close probate sales. And Homeflip.ai guides you through every step so you never feel lost.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                &ldquo;Are there enough probate leads in my market?&rdquo;
              </h3>
              <p className="text-gray-600 leading-relaxed">
                2.5 million people die in the US each year—many owned real estate. Even small counties see dozens of new probate cases monthly. And with Homeflip.ai, you can easily expand to multiple counties. There&apos;s more opportunity than you think.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="waitlist" className="px-6 py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5EEADC]/10 via-transparent to-[#A855F7]/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#5EEADC]/10 to-[#A855F7]/10 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black">
            Ready to Build a <span className="text-[#5EEADC]">Predictable</span> Deal Pipeline?
          </h2>
          <p className="mt-8 text-xl text-gray-300 leading-relaxed">
            Join 500+ investors who are getting early access to Homeflip.ai. Be among the first to transform your business with AI-powered probate lead intelligence.
          </p>

          <form className="mt-12 max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full text-lg bg-transparent text-white placeholder-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                className="btn-gradient px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-lg hover:shadow-[#5EEADC]/30 hover:scale-[1.02] whitespace-nowrap"
              >
                Get Early Access
              </button>
            </div>
          </form>

          <p className="mt-6 text-sm text-gray-500">
            No spam. Just updates on our launch and early access pricing.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 bg-gray-950 text-gray-400">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <div className="text-2xl font-bold text-white">
                Homeflip<span className="text-[#5EEADC]">.ai</span>
              </div>
              <p className="mt-2 text-sm">Consistent off-market deals, powered by probate.</p>
            </div>

            <div className="flex gap-8 text-sm">
              <a href="/privacy" className="hover:text-[#5EEADC] transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-[#5EEADC] transition-colors">Terms of Service</a>
              <a href="#waitlist" className="hover:text-[#5EEADC] transition-colors">Contact</a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
            © {new Date().getFullYear()} Homeflip.ai. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

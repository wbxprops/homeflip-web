export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
          <div className="text-2xl font-bold text-gray-900">
            Homeflip<span className="text-[#5EEADC]">.ai</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#why-probate" className="text-gray-600 hover:text-gray-900 hidden sm:block transition-colors">
              Why Probate
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 hidden sm:block transition-colors">
              How It Works
            </a>
            <a href="#features" className="text-gray-600 hover:text-gray-900 hidden sm:block transition-colors">
              Features
            </a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900 hidden sm:block transition-colors">
              FAQ
            </a>
            <a
              href="#waitlist"
              className="btn-gradient px-5 py-2 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-[#5EEADC]/25 hover:scale-105"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5EEADC]/5 via-white to-[#A855F7]/5" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#5EEADC]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#A855F7]/20 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-[#5EEADC]/10 to-[#A855F7]/10 rounded-full border border-[#5EEADC]/20">
            <span className="text-sm font-medium bg-gradient-to-r from-[#5EEADC] to-[#A855F7] bg-clip-text text-transparent">
              AI-Powered Probate Lead Intelligence
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight max-w-5xl mx-auto">
            Consistent Off-Market Deals,{" "}
            <span className="bg-gradient-to-r from-[#5EEADC] to-[#A855F7] bg-clip-text text-transparent">
              Powered by Probate
            </span>
          </h1>

          <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Most real estate investors struggle with inconsistent deal flow—chasing cold leads, competing with dozens of other buyers, and never knowing where their next deal will come from. Probate changes everything. And Homeflip.ai makes probate simple.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#waitlist"
              className="btn-gradient px-10 py-5 rounded-full font-semibold text-lg transition-all hover:shadow-xl hover:shadow-[#5EEADC]/30 hover:scale-105"
            >
              Join the Waitlist
            </a>
            <a
              href="#why-probate"
              className="group border-2 border-gray-200 text-gray-700 px-10 py-5 rounded-full font-semibold text-lg hover:border-[#5EEADC] hover:text-[#5EEADC] transition-all flex items-center justify-center gap-2"
            >
              Learn About Probate Investing
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#5EEADC] to-[#2DD4BF] bg-clip-text text-transparent">500+</div>
              <div className="mt-1 text-sm text-gray-500 font-medium">Active Investors</div>
            </div>
            <div className="text-center border-x border-gray-200">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#A855F7] to-[#7C3AED] bg-clip-text text-transparent">10K+</div>
              <div className="mt-1 text-sm text-gray-500 font-medium">Leads Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-[#5EEADC] to-[#A855F7] bg-clip-text text-transparent">5</div>
              <div className="mt-1 text-sm text-gray-500 font-medium">Counties Live</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem with Traditional Lead Sources */}
      <section className="px-6 py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Why Most Investors Struggle to Find Deals
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              If you&apos;ve been investing for any length of time, you know the frustration. You&apos;ve tried the &ldquo;proven&rdquo; lead sources, but they all have the same problems.
            </p>
          </div>

          {/* Traditional Lead Sources Comparison */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-3xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-3xl">📋</span>
                MLS & Listed Properties
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-gray-600"><strong className="text-gray-900">Maximum competition</strong> — Every agent and investor in your market sees the same listings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-gray-600"><strong className="text-gray-900">Retail pricing</strong> — Sellers expect market value, leaving little room for profit</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-gray-600"><strong className="text-gray-900">Bidding wars</strong> — Even distressed properties attract multiple offers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-gray-600"><strong className="text-gray-900">Agent gatekeepers</strong> — You&apos;re always going through intermediaries</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-3xl">📬</span>
                Direct Mail Campaigns
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-gray-600"><strong className="text-gray-900">Expensive at scale</strong> — Printing, postage, and list costs add up fast</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-gray-600"><strong className="text-gray-900">Low response rates</strong> — Typical response is 0.5-2%, meaning lots of waste</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-gray-600"><strong className="text-gray-900">Saturated lists</strong> — The same &ldquo;distressed&rdquo; homeowners get dozens of letters</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-gray-600"><strong className="text-gray-900">Unpredictable results</strong> — Some months nothing, other months a flood</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-3xl">🚗</span>
                Driving for Dollars
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-gray-600"><strong className="text-gray-900">Time intensive</strong> — Hours spent driving neighborhoods looking for distressed properties</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-gray-600"><strong className="text-gray-900">Limited coverage</strong> — You can only cover so much ground each week</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-gray-600"><strong className="text-gray-900">Skip tracing costs</strong> — Finding owner contact info adds expense and time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-gray-600"><strong className="text-gray-900">No motivation signals</strong> — A vacant property doesn&apos;t mean a motivated seller</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-3xl">💰</span>
                Paid Lead Services
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-gray-600"><strong className="text-gray-900">Shared leads</strong> — You&apos;re paying for leads that 5-10 other investors also received</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-gray-600"><strong className="text-gray-900">Stale data</strong> — Lists are often months old by the time you see them</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-gray-600"><strong className="text-gray-900">High monthly costs</strong> — Subscriptions can run $200-500+/month with no guaranteed ROI</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 mt-1">✗</span>
                  <span className="text-gray-600"><strong className="text-gray-900">Generic targeting</strong> — One-size-fits-all lists that don&apos;t match your market</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 md:p-12 rounded-3xl text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              The common thread? <span className="text-[#5EEADC]">Competition and unpredictability.</span>
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Every traditional lead source puts you in direct competition with other investors fighting for the same deals. The result? Inconsistent deal flow, compressed margins, and constant hustle just to stay in the game.
            </p>
          </div>
        </div>
      </section>

      {/* Why Probate - Deep Dive */}
      <section id="why-probate" className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Why <span className="bg-gradient-to-r from-[#5EEADC] to-[#A855F7] bg-clip-text text-transparent">Probate</span> Is Different
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Probate real estate isn&apos;t just another lead source—it&apos;s a fundamentally different approach to finding off-market deals. Here&apos;s why savvy investors are making the switch.
            </p>
          </div>

          {/* Advantages Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-[#5EEADC]/5 to-white p-8 rounded-3xl border border-[#5EEADC]/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#5EEADC]/20 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Motivated Sellers by Default</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                When someone inherits a property through probate, they&apos;re often dealing with a situation they didn&apos;t plan for. The property might be:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#5EEADC] mt-1">✓</span>
                  <span className="text-gray-600"><strong className="text-gray-900">Out of state</strong> — Heirs live far away and can&apos;t manage the property</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#5EEADC] mt-1">✓</span>
                  <span className="text-gray-600"><strong className="text-gray-900">In disrepair</strong> — Years of deferred maintenance make it hard to sell traditionally</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#5EEADC] mt-1">✓</span>
                  <span className="text-gray-600"><strong className="text-gray-900">A financial burden</strong> — Taxes, insurance, and upkeep strain the estate</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#5EEADC] mt-1">✓</span>
                  <span className="text-gray-600"><strong className="text-gray-900">Part of a complex estate</strong> — Multiple heirs want to liquidate and split proceeds</span>
                </li>
              </ul>
              <p className="mt-4 text-gray-600 leading-relaxed">
                These sellers aren&apos;t emotionally attached to getting top dollar. They want the problem solved quickly and cleanly.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#A855F7]/5 to-white p-8 rounded-3xl border border-[#A855F7]/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#A855F7]/20 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">🏆</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Far Less Competition</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Most investors avoid probate because they think it&apos;s:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span className="text-gray-600">Too complicated (it&apos;s not, with the right system)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span className="text-gray-600">Hard to find leads (court records are public)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span className="text-gray-600">Ethically questionable (we&apos;ll address this below)</span>
                </li>
              </ul>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Their hesitation is your opportunity. While 50 investors fight over the same foreclosure lead, you might be the only one reaching out to a probate heir who genuinely needs help.
              </p>
              <div className="mt-6 p-4 bg-[#A855F7]/10 rounded-2xl">
                <p className="text-sm text-[#7C3AED] font-medium">
                  💡 In most markets, less than 5% of real estate investors actively work probate leads.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-3xl border border-emerald-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">📈</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Consistent, Predictable Flow</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Unlike other lead sources that ebb and flow with the market, probate is remarkably consistent:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span className="text-gray-600"><strong className="text-gray-900">Courts operate year-round</strong> — New cases are filed every week, regardless of season</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span className="text-gray-600"><strong className="text-gray-900">Recession-resistant</strong> — Probate volume doesn&apos;t depend on economic conditions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span className="text-gray-600"><strong className="text-gray-900">Predictable timing</strong> — You can anticipate your lead volume month to month</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 mt-1">✓</span>
                  <span className="text-gray-600"><strong className="text-gray-900">Growing demographic</strong> — As baby boomers age, probate volume is increasing</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl border border-blue-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Helping Families in Transition</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                This is the part most investors don&apos;t understand: <strong>you&apos;re providing a valuable service.</strong>
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span className="text-gray-600"><strong className="text-gray-900">Simplifying complexity</strong> — Heirs often don&apos;t know where to start with a property</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span className="text-gray-600"><strong className="text-gray-900">Offering certainty</strong> — A cash offer removes the uncertainty of traditional sales</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span className="text-gray-600"><strong className="text-gray-900">Handling problems</strong> — You buy as-is, solving their repair and cleanup headaches</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span className="text-gray-600"><strong className="text-gray-900">Providing closure</strong> — A quick sale helps families move forward after loss</span>
                </li>
              </ul>
              <p className="mt-4 text-gray-600 leading-relaxed">
                When done respectfully, probate investing is a win-win: you get deals, and families get solutions.
              </p>
            </div>
          </div>

          {/* Property Types */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-3xl mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Types of Properties You&apos;ll Find in Probate</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl text-center">
                <span className="text-4xl mb-4 block">🏚️</span>
                <h4 className="font-bold text-gray-900">Distressed Homes</h4>
                <p className="text-sm text-gray-600 mt-2">Properties needing significant repairs that heirs can&apos;t or won&apos;t handle</p>
              </div>
              <div className="bg-white p-6 rounded-2xl text-center">
                <span className="text-4xl mb-4 block">🏡</span>
                <h4 className="font-bold text-gray-900">Move-In Ready</h4>
                <p className="text-sm text-gray-600 mt-2">Well-maintained homes from owners who took pride in their property</p>
              </div>
              <div className="bg-white p-6 rounded-2xl text-center">
                <span className="text-4xl mb-4 block">🏢</span>
                <h4 className="font-bold text-gray-900">Multi-Family</h4>
                <p className="text-sm text-gray-600 mt-2">Duplexes and small apartments that heirs don&apos;t want to manage</p>
              </div>
              <div className="bg-white p-6 rounded-2xl text-center">
                <span className="text-4xl mb-4 block">🌳</span>
                <h4 className="font-bold text-gray-900">Vacant Land</h4>
                <p className="text-sm text-gray-600 mt-2">Lots and acreage with holding costs heirs want to eliminate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why People Don't Use Probate (Objections) */}
      <section className="px-6 py-24 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Why Most Investors <span className="text-red-400">Avoid</span> Probate
            </h2>
            <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              There are common objections to probate investing. Let&apos;s address each one honestly.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">😰</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    &ldquo;Isn&apos;t it unethical to contact grieving families?&rdquo;
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    This is the #1 objection, and it&apos;s worth taking seriously. Here&apos;s the reality:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-[#5EEADC] mt-1">•</span>
                      <span className="text-gray-300"><strong>Probate is a legal process, not a funeral.</strong> By the time a case is filed, families are dealing with practical matters—including property.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#5EEADC] mt-1">•</span>
                      <span className="text-gray-300"><strong>You&apos;re offering a solution, not creating a problem.</strong> Many heirs are relieved to hear from someone who can help.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#5EEADC] mt-1">•</span>
                      <span className="text-gray-300"><strong>Approach matters.</strong> Respectful, professional outreach is appreciated. Pushy, insensitive tactics are not.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#5EEADC] mt-1">•</span>
                      <span className="text-gray-300"><strong>The alternative is worse.</strong> Without help, families may make poor decisions under pressure or let properties deteriorate.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">💵</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    &ldquo;Heirs want full market value—they won&apos;t sell at a discount.&rdquo;
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Some heirs do want top dollar—and that&apos;s fine. They&apos;re not your customer. But many heirs prioritize:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-[#5EEADC] mt-1">•</span>
                      <span className="text-gray-300"><strong>Speed</strong> — Closing in weeks rather than months</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#5EEADC] mt-1">•</span>
                      <span className="text-gray-300"><strong>Certainty</strong> — A guaranteed cash offer vs. hoping for a buyer</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#5EEADC] mt-1">•</span>
                      <span className="text-gray-300"><strong>Simplicity</strong> — No repairs, no staging, no showings, no agent commissions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#5EEADC] mt-1">•</span>
                      <span className="text-gray-300"><strong>Closure</strong> — Moving on from a difficult chapter in their lives</span>
                    </li>
                  </ul>
                  <p className="text-gray-400 leading-relaxed mt-4">
                    For these sellers, a &ldquo;discount&rdquo; is actually a fair trade for the convenience and certainty you provide.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🔍</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    &ldquo;There aren&apos;t enough probate leads in my market.&rdquo;
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    This concern usually comes from not understanding the volume. Consider:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-[#5EEADC] mt-1">•</span>
                      <span className="text-gray-300"><strong>2.5 million people die in the US each year</strong> — Many owned real estate</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#5EEADC] mt-1">•</span>
                      <span className="text-gray-300"><strong>Probate cases are filed constantly</strong> — Even small counties see dozens per month</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#5EEADC] mt-1">•</span>
                      <span className="text-gray-300"><strong>Not every case has property</strong> — But enough do to keep you busy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#5EEADC] mt-1">•</span>
                      <span className="text-gray-300"><strong>You can expand to multiple counties</strong> — Homeflip.ai makes this easy</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🤯</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    &ldquo;Probate is too complicated. I don&apos;t understand the legal process.&rdquo;
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    Here&apos;s the secret: <strong>you don&apos;t need to be a probate expert.</strong>
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-[#5EEADC] mt-1">•</span>
                      <span className="text-gray-300"><strong>The legal process is handled by attorneys and the court</strong> — Not you</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#5EEADC] mt-1">•</span>
                      <span className="text-gray-300"><strong>Your job is to find motivated sellers and make offers</strong> — Same as any other deal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#5EEADC] mt-1">•</span>
                      <span className="text-gray-300"><strong>Title companies handle the closing</strong> — They know how to close probate sales</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#5EEADC] mt-1">•</span>
                      <span className="text-gray-300"><strong>Homeflip.ai guides you through the process</strong> — We tell you exactly what to do at each step</span>
                    </li>
                  </ul>
                  <p className="text-gray-400 leading-relaxed mt-4">
                    Probate investing is hard without a system. With the right tools and guidance, it&apos;s actually simpler than many other strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Value Section */}
      <section className="px-6 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#5EEADC]/5 to-white" />

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              How <span className="bg-gradient-to-r from-[#5EEADC] to-[#A855F7] bg-clip-text text-transparent">Homeflip.ai</span> Makes Probate Simple
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We built the system we wished existed when we started probate investing. Everything you need to find leads, prioritize opportunities, and close deals—all in one place.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#5EEADC] to-[#2DD4BF] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Automated Lead Discovery</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Stop spending hours at the courthouse or wrestling with clunky public records websites.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-[#5EEADC]">✓</span> AI scrapes court records daily
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-[#5EEADC]">✓</span> New leads delivered to your dashboard
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-[#5EEADC]">✓</span> Property details automatically matched
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-[#5EEADC]">✓</span> Contact information included
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#A855F7] to-[#7C3AED] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Prioritization</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Not all leads are equal. Our AI helps you focus on the best opportunities first.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-[#A855F7]">✓</span> Property value estimates
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-[#A855F7]">✓</span> Equity analysis
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-[#A855F7]">✓</span> Motivation scoring
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-[#A855F7]">✓</span> Recommended actions
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-[#5EEADC] to-[#A855F7] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Guided Workflows</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Know exactly what to do at every stage, from first contact to closing.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-[#5EEADC]">✓</span> Step-by-step task lists
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-[#5EEADC]">✓</span> Outreach templates
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-[#5EEADC]">✓</span> Follow-up reminders
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <span className="text-[#5EEADC]">✓</span> Deal pipeline tracking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="px-6 py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              How It Works
            </h2>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
              From lead to close in three simple steps.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-1 bg-gradient-to-r from-[#5EEADC] via-[#A855F7] to-[#5EEADC]" />

            <div className="grid md:grid-cols-3 gap-12">
              <div className="relative text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#5EEADC] to-[#2DD4BF] rounded-3xl flex items-center justify-center text-3xl font-bold text-white mx-auto shadow-xl shadow-[#5EEADC]/30">
                  1
                </div>
                <h3 className="mt-8 text-2xl font-bold text-gray-900">We Find the Leads</h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Our AI monitors court records across your target markets, automatically identifying new probate cases with real estate. Fresh leads are added to your dashboard daily.
                </p>
              </div>

              <div className="relative text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#A855F7] to-[#7C3AED] rounded-3xl flex items-center justify-center text-3xl font-bold text-white mx-auto shadow-xl shadow-[#A855F7]/30">
                  2
                </div>
                <h3 className="mt-8 text-2xl font-bold text-gray-900">We Prioritize for You</h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Not all leads are created equal. Our smart scoring system analyzes property values, equity positions, and other factors to highlight your best opportunities.
                </p>
              </div>

              <div className="relative text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#5EEADC] to-[#A855F7] rounded-3xl flex items-center justify-center text-3xl font-bold text-white mx-auto shadow-xl shadow-[#5EEADC]/30">
                  3
                </div>
                <h3 className="mt-8 text-2xl font-bold text-gray-900">You Close Deals</h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Follow our guided workflows to reach out, build rapport, make offers, and close. We give you the system—you build the relationships and make the deals happen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
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
              { icon: "🔔", title: "Real-Time Notifications", desc: "Get instant alerts when new cases match your criteria or when it&apos;s time to follow up on a lead." },
            ].map((feature, i) => (
              <div key={i} className="group bg-gray-50 hover:bg-white p-8 rounded-3xl border border-transparent hover:border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="px-6 py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "How is this different from buying probate lists?", a: "Traditional probate list providers sell you stale data that's shared with dozens of other investors. Homeflip.ai scrapes court records directly and delivers fresh leads to your dashboard—often before list providers even know the case exists. Plus, we match property data, provide valuation insights, and guide you through the entire process." },
              { q: "What markets do you cover?", a: "We're currently live in 5 counties in Ohio (Hamilton, Butler, Warren, Clermont, and Brown) with more being added regularly. If you're interested in a specific market, let us know—we prioritize expansion based on user demand." },
              { q: "Do I need to understand probate law?", a: "No. You don't need to be a legal expert. The attorneys and courts handle the legal process. Your job is to find motivated sellers and make offers—just like any other real estate deal. We provide the guidance and workflows to help you navigate the process confidently." },
              { q: "How much does it cost?", a: "We're currently in early access and building our waitlist. Pricing will be announced when we launch. Join the waitlist to be notified and get early access pricing." },
              { q: "Can I use this if I'm a new investor?", a: "Absolutely. In fact, our guided workflows are designed to help newer investors succeed with probate. We tell you exactly what to do at each step, from first contact to closing. Experienced investors appreciate the efficiency; new investors appreciate the guidance." },
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                <h3 className="text-lg font-bold text-gray-900 flex items-start gap-3">
                  <span className="text-[#A855F7]">Q:</span>
                  {faq.q}
                </h3>
                <p className="mt-4 text-gray-600 leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="waitlist" className="px-6 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5EEADC]/10 via-white to-[#A855F7]/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#5EEADC]/20 to-[#A855F7]/20 rounded-full blur-3xl" />

        <div className="relative max-w-2xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Ready for Consistent Deal Flow?
          </h2>
          <p className="mt-6 text-xl text-gray-600 leading-relaxed">
            Join the waitlist to get early access to Homeflip.ai. Be among the first investors to transform your deal pipeline with AI-powered probate lead intelligence.
          </p>

          <form className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-8 py-5 rounded-full border-2 border-gray-200 text-lg w-full sm:w-96 focus:outline-none focus:border-[#5EEADC] transition-colors"
            />
            <button
              type="submit"
              className="btn-gradient px-10 py-5 rounded-full font-bold text-lg transition-all hover:shadow-xl hover:shadow-[#5EEADC]/30 hover:scale-105"
            >
              Join Waitlist
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-500">
            No spam. Just updates on our launch and early access pricing.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-16 bg-gray-900 text-gray-400">
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

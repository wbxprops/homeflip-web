export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <div className="text-2xl font-bold text-gray-900">
          Homeflip<span className="text-[#5EEADC]">.ai</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 hidden sm:block">
            How It Works
          </a>
          <a href="#features" className="text-gray-600 hover:text-gray-900 hidden sm:block">
            Features
          </a>
          <a href="#faq" className="text-gray-600 hover:text-gray-900 hidden sm:block">
            FAQ
          </a>
          <a
            href="#waitlist"
            className="btn-gradient px-5 py-2 rounded-full font-medium transition-opacity"
          >
            Join Waitlist
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
          Consistent Off-Market Deals,{" "}
          <span className="bg-gradient-to-r from-[#5EEADC] to-[#A855F7] bg-clip-text text-transparent">
            Powered by Probate
          </span>
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          The simplified, guided, AI-powered system for real estate investors who want
          consistent deal flow without the chaos.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#waitlist"
            className="btn-gradient px-8 py-4 rounded-full font-semibold text-lg transition-opacity"
          >
            Join the Waitlist
          </a>
          <a
            href="#how-it-works"
            className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-gray-400 transition-colors"
          >
            See How It Works
          </a>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="px-6 py-8 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-gray-500 uppercase tracking-wide font-medium">
            Trusted by working investors across the country
          </p>
          <div className="mt-4 flex justify-center items-center gap-8 opacity-40">
            <span className="text-2xl font-bold text-gray-400">500+ Investors</span>
            <span className="text-gray-300">|</span>
            <span className="text-2xl font-bold text-gray-400">10,000+ Leads</span>
            <span className="text-gray-300">|</span>
            <span className="text-2xl font-bold text-gray-400">5 Counties</span>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
            Tired of Inconsistent Deal Flow?
          </h2>
          <p className="mt-4 text-xl text-gray-600 text-center max-w-2xl mx-auto">
            Most investors struggle with scattered tools, unpredictable leads, and no real system.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900">Inconsistent Leads</h3>
              <p className="mt-2 text-gray-600">
                Feast or famine. Some months are hot, others are dead silence. You never know what next week holds.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900">Scattered Tools</h3>
              <p className="mt-2 text-gray-600">
                Spreadsheets, apps, lists everywhere. No single source of truth. Deals slip through the cracks.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900">No System</h3>
              <p className="mt-2 text-gray-600">
                You know you need a process, but building one from scratch takes time you don&apos;t have.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Probate Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
            Why Probate?
          </h2>
          <p className="mt-4 text-xl text-gray-600 text-center max-w-2xl mx-auto">
            Probate is the fuel. Homeflip.ai is the vehicle.
          </p>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-[#5EEADC]/10 text-[#5EEADC] rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                1
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">Motivated Sellers</h3>
              <p className="mt-2 text-sm text-gray-600">
                Heirs often want quick, hassle-free sales.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-[#5EEADC]/10 text-[#5EEADC] rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                2
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">Less Competition</h3>
              <p className="mt-2 text-sm text-gray-600">
                Most investors avoid probate. That&apos;s your advantage.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-[#5EEADC]/10 text-[#5EEADC] rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                3
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">Consistent Flow</h3>
              <p className="mt-2 text-sm text-gray-600">
                New cases filed every week, year-round.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-[#5EEADC]/10 text-[#5EEADC] rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                4
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">Help Families</h3>
              <p className="mt-2 text-sm text-gray-600">
                Provide a clean, respectful solution during a difficult time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Value Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Your Complete Probate System
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to find, prioritize, and close probate deals—without the guesswork.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#5EEADC] to-[#A855F7] rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Guided System</h3>
              <p className="mt-2 text-gray-600">
                Step-by-step workflows so you always know what to do next. No more guessing.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#5EEADC] to-[#A855F7] rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">AI-Powered Prioritization</h3>
              <p className="mt-2 text-gray-600">
                Smart scoring tells you which leads to call first, based on real data.
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#5EEADC] to-[#A855F7] rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Consistent Deal Flow</h3>
              <p className="mt-2 text-gray-600">
                Fresh leads delivered automatically. No more feast or famine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
            How Homeflip.ai Works
          </h2>
          <p className="mt-4 text-xl text-gray-600 text-center max-w-2xl mx-auto">
            From lead to close in three simple steps.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5EEADC] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                1
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">We Find the Leads</h3>
              <p className="mt-2 text-gray-600">
                AI-powered scraping finds probate cases in your target markets automatically. New leads every day.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#A855F7] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                2
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">We Prioritize for You</h3>
              <p className="mt-2 text-gray-600">
                Smart scoring highlights the best opportunities so you focus on what matters most.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#5EEADC] to-[#A855F7] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                3
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">You Close Deals</h3>
              <p className="mt-2 text-gray-600">
                Follow the guided workflow to reach out, negotiate, and close consistently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
            Everything You Need to Close More Deals
          </h2>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Automated Lead Discovery", desc: "Fresh probate leads delivered to your dashboard daily. No manual searching." },
              { title: "AI-Powered Prioritization", desc: "Know which leads to call first based on property value, equity, and timing." },
              { title: "Property Insights", desc: "Valuation data, ownership history, and property details at your fingertips." },
              { title: "Guided Workflows", desc: "Step-by-step process so nothing falls through the cracks." },
              { title: "Contact Management", desc: "Track attorneys, fiduciaries, and heirs all in one place." },
              { title: "Real-Time Notifications", desc: "Get alerted when new opportunities match your criteria." },
            ].map((feature, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objection Handling / FAQ Section */}
      <section id="faq" className="px-6 py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
            Common Questions
          </h2>
          <div className="mt-12 space-y-6">
            <div className="bg-white p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900">
                &ldquo;Isn&apos;t probate investing... kind of unethical?&rdquo;
              </h3>
              <p className="mt-2 text-gray-600">
                Not at all. Families in probate often need help selling property quickly. You&apos;re providing a clean, respectful solution during a difficult time—and many heirs genuinely appreciate the simplicity.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900">
                &ldquo;Don&apos;t heirs want top dollar?&rdquo;
              </h3>
              <p className="mt-2 text-gray-600">
                Some do. But many heirs prioritize speed, simplicity, and avoiding the hassle of listing. They&apos;d rather close quickly and move on than wait months for a retail sale.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900">
                &ldquo;Are there really enough probate leads?&rdquo;
              </h3>
              <p className="mt-2 text-gray-600">
                Yes. Probate cases are filed consistently year-round—courts don&apos;t take breaks. It&apos;s one of the most reliable lead sources in real estate.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900">
                &ldquo;Probate seems too complicated.&rdquo;
              </h3>
              <p className="mt-2 text-gray-600">
                It&apos;s complicated without a system. Homeflip.ai gives you the guided workflow, contact info, and property data so you can focus on relationships—not research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA / Waitlist Section */}
      <section id="waitlist" className="px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Ready for Consistent Deal Flow?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Join the waitlist and be the first to know when we launch.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 rounded-full border border-gray-300 text-lg w-full sm:w-80 focus:outline-none focus:border-[#5EEADC]"
            />
            <button
              type="submit"
              className="btn-gradient px-8 py-4 rounded-full font-semibold text-lg transition-opacity"
            >
              Join Waitlist
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-500">
            No spam. Just updates on our launch.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-900 text-gray-400">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xl font-bold text-white">
            Homeflip<span className="text-[#5EEADC]">.ai</span>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} Homeflip.ai. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

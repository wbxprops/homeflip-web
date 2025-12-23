export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
        <div className="text-2xl font-bold text-gray-900">
          Homeflip<span className="text-teal-500">.ai</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 hidden sm:block">
            How It Works
          </a>
          <a href="#features" className="text-gray-600 hover:text-gray-900 hidden sm:block">
            Features
          </a>
          <a
            href="#waitlist"
            className="bg-teal-500 text-white px-5 py-2 rounded-full font-medium hover:bg-teal-600 transition-colors"
          >
            Join Waitlist
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
          Consistent Off-Market Deals,{" "}
          <span className="text-teal-500">Powered by Probate</span>
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          The simplified, guided, AI-powered system for real estate investors who want
          consistent deal flow without the chaos.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#waitlist"
            className="bg-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-600 transition-colors"
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

      {/* Problem Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
            Tired of Inconsistent Deal Flow?
          </h2>
          <p className="mt-4 text-xl text-gray-600 text-center max-w-2xl mx-auto">
            Most investors struggle with scattered tools, unpredictable leads, and no real system.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="text-3xl mb-4">😤</div>
              <h3 className="text-xl font-semibold text-gray-900">Inconsistent Leads</h3>
              <p className="mt-2 text-gray-600">
                Feast or famine. Some months are hot, others are dead silence.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold text-gray-900">Scattered Tools</h3>
              <p className="mt-2 text-gray-600">
                Spreadsheets, apps, lists everywhere. No single source of truth.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="text-3xl mb-4">🤷</div>
              <h3 className="text-xl font-semibold text-gray-900">No System</h3>
              <p className="mt-2 text-gray-600">
                You know you need a process, but building one takes time you don&apos;t have.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
            How Homeflip.ai Works
          </h2>
          <p className="mt-4 text-xl text-gray-600 text-center max-w-2xl mx-auto">
            Probate is the fuel. Homeflip.ai is the vehicle.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                1
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">We Find the Leads</h3>
              <p className="mt-2 text-gray-600">
                AI-powered scraping finds probate cases in your target markets automatically.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                2
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">We Prioritize for You</h3>
              <p className="mt-2 text-gray-600">
                Smart scoring highlights the best opportunities so you focus on what matters.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
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
      <section id="features" className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
            Everything You Need
          </h2>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Automated Lead Discovery", desc: "Fresh probate leads delivered to your dashboard daily." },
              { title: "AI-Powered Prioritization", desc: "Know which leads to call first based on real data." },
              { title: "Property Insights", desc: "Valuation data and property details at your fingertips." },
              { title: "Guided Workflows", desc: "Step-by-step process so nothing falls through the cracks." },
              { title: "Contact Management", desc: "Track attorneys, fiduciaries, and heirs in one place." },
              { title: "Real-Time Notifications", desc: "Get alerted when new opportunities match your criteria." },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
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
              className="px-6 py-4 rounded-full border border-gray-300 text-lg w-full sm:w-80 focus:outline-none focus:border-teal-500"
            />
            <button
              type="submit"
              className="bg-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-600 transition-colors"
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
            Homeflip<span className="text-teal-400">.ai</span>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} Homeflip.ai. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

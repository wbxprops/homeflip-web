import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { WaitlistForm } from "@/components/WaitlistForm";

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        <Section className="!pb-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              Join the <span className="text-[#5EEADC]">Waitlist</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Homeflip.ai is currently in private beta. Be the first to know when we open up new spots in your market.
            </p>
          </div>
        </Section>

        <Section className="!pt-0">
          <div className="max-w-xl mx-auto">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-2xl shadow-gray-200/50">
              <WaitlistForm />
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8 text-center">
              <div>
                <div className="text-3xl font-black text-gray-900">500+</div>
                <div className="text-sm text-gray-500 font-medium">Investors Waiting</div>
              </div>
              <div>
                <div className="text-3xl font-black text-gray-900">5</div>
                <div className="text-sm text-gray-500 font-medium">Counties Live</div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}


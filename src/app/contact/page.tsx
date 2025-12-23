import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { WaitlistForm } from "@/components/WaitlistForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        <Section className="!pb-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
              Get in <span className="text-[#5EEADC]">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have questions or want to join our private beta? Fill out the form below and our team will get back to you shortly.
            </p>
          </div>
        </Section>

        <Section className="!pt-0">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Join the Waitlist</h2>
              <WaitlistForm />
            </div>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Support & Sales</h3>
                <p className="text-gray-600 mb-4">
                  For support inquiries or enterprise sales, please email us directly:
                </p>
                <a 
                  href="mailto:hello@homeflip.ai" 
                  className="text-2xl font-black text-[#5EEADC] hover:text-[#2DD4BF] transition-colors"
                >
                  hello@homeflip.ai
                </a>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Location</h3>
                <p className="text-gray-600">
                  Based in Sunny Florida.<br />
                  Serving investors nationwide.
                </p>
              </div>

              <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Are you a court reporter?</h3>
                <p className="text-gray-600">
                  We are always looking to partner with local court data providers. If you have access to probate records in your county, we&apos;d love to talk.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}


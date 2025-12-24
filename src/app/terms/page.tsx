import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        <Section>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-black text-slate-900 mb-8">Terms of Service</h1>
            <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
              <p className="font-bold">Last Updated: December 23, 2025</p>
              
              <h2 className="text-2xl font-bold text-slate-900">1. Agreement to Terms</h2>
              <p>By accessing or using Homeflip.ai, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the service.</p>
              
              <h2 className="text-2xl font-bold text-slate-900">2. Use of Service</h2>
              <p>Homeflip.ai provides lead intelligence for real estate investors. You agree to use this service only for lawful purposes and in accordance with all local, state, and federal laws regarding real estate marketing and privacy.</p>

              <h2 className="text-2xl font-bold text-slate-900">3. Waitlist Registration</h2>
              <p>By joining our waitlist, you agree to receive email communications from us regarding our launch, product updates, and promotional offers. You can unsubscribe at any time.</p>

              <h2 className="text-2xl font-bold text-slate-900">4. Limitation of Liability</h2>
              <p>In no event shall Homeflip.ai, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of the service.</p>

              <h2 className="text-2xl font-bold text-slate-900">5. Changes to Terms</h2>
              <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page.</p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}


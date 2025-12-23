import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24">
        <Section>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-black text-gray-900 mb-8">Privacy Policy</h1>
            <div className="prose prose-gray max-w-none space-y-6 text-gray-600">
              <p className="font-bold">Last Updated: December 23, 2025</p>
              
              <h2 className="text-2xl font-bold text-gray-900">1. Introduction</h2>
              <p>Welcome to Homeflip.ai. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website.</p>
              
              <h2 className="text-2xl font-bold text-gray-900">2. Data We Collect</h2>
              <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Identity Data:</strong> includes first name, last name.</li>
                <li><strong>Contact Data:</strong> includes email address and phone number.</li>
                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900">3. How We Use Your Data</h2>
              <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to register you for our waitlist and to send you updates about our service.</p>

              <h2 className="text-2xl font-bold text-gray-900">4. Contact Us</h2>
              <p>If you have any questions about this privacy policy, please contact us at hello@homeflip.ai.</p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}


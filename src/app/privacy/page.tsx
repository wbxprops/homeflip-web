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
            <h1 className="text-4xl font-black text-slate-900 mb-8">Privacy Policy</h1>
            <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
              <p className="font-bold">Last Updated: December 27, 2025</p>

              <p>
                This Privacy Policy describes how Homeflip.ai, operated by Whitebox Academy, LLC, a Delaware limited liability company (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), collects, uses, and shares information about you when you use our website, platform, and services (collectively, the &quot;Services&quot;). By using our Services, you agree to the collection and use of information in accordance with this policy.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8">1. Information We Collect</h2>

              <h3 className="text-xl font-bold text-slate-800">1.1 Information You Provide to Us</h3>
              <p>We collect information you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Account Information:</strong> When you create an account or join our waitlist, we collect your name, email address, phone number, and the geographic markets (counties) you are interested in.</li>
                <li><strong>Payment Information:</strong> When you make a purchase, our third-party payment processor collects your payment card information, billing address, and other financial data necessary to process your transaction. We do not store complete payment card numbers on our servers.</li>
                <li><strong>Communications:</strong> When you contact us, participate in coaching calls, or communicate through our platform, we may collect the contents of those communications.</li>
                <li><strong>Business Information:</strong> Information about your real estate investing business, strategies, and goals that you share with us during onboarding or coaching sessions.</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800">1.2 Information We Collect Automatically</h3>
              <p>When you access or use our Services, we automatically collect certain information, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Device and Usage Information:</strong> We collect information about the device you use to access our Services, including hardware model, operating system, browser type, IP address, and device identifiers.</li>
                <li><strong>Log Information:</strong> We collect log information about your use of the Services, including access times, pages viewed, features used, and the page you visited before navigating to our Services.</li>
                <li><strong>Cookies and Similar Technologies:</strong> We use cookies, pixels, and similar technologies to collect information about your browsing activities. See Section 6 for more details.</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800">1.3 Information from Third-Party Sources</h3>
              <p>We may obtain information about you from third-party sources, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Public Records:</strong> Our Services involve aggregating publicly available information from county court records, property records, and other government sources to provide probate lead information.</li>
                <li><strong>Data Providers:</strong> We may obtain property ownership data, contact information, and other real estate-related data from third-party data providers.</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-8">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our Services</li>
                <li>Process transactions and send related information, including confirmations and invoices</li>
                <li>Send you technical notices, updates, security alerts, and support messages</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Communicate with you about products, services, offers, and events</li>
                <li>Personalize your experience and deliver content relevant to your interests</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our Services</li>
                <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-8">3. How We Share Your Information</h2>
              <p>We may share information about you as follows:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> We share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf, including payment processing, data analysis, email delivery, hosting, customer service, and marketing.</li>
                <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information if we believe disclosure is necessary to comply with any applicable law, regulation, legal process, or governmental request.</li>
                <li><strong>Protection of Rights:</strong> We may disclose information to protect the rights, property, and safety of Homeflip.ai, our users, or others.</li>
                <li><strong>With Your Consent:</strong> We may share information with your consent or at your direction.</li>
              </ul>
              <p>We do not sell your personal information to third parties.</p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8">4. Data Retention</h2>
              <p>
                We retain personal information for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. The retention period may vary depending on the context of the processing and our legal obligations.
              </p>
              <p>
                When you close your account, we will delete or anonymize your personal information within 90 days, unless we are required to retain it for legal purposes or have a legitimate business need to do so.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures designed to protect the security of your personal information. However, no method of transmission over the Internet or electronic storage is completely secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
              </p>
              <p>Our security measures include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Encryption of data in transit using TLS/SSL</li>
                <li>Encryption of sensitive data at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls limiting employee access to personal data</li>
                <li>Secure data centers with physical security measures</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-8">6. Cookies and Tracking Technologies</h2>
              <p>We use cookies and similar tracking technologies to collect and track information and to improve and analyze our Services. Cookies are small data files stored on your device.</p>

              <h3 className="text-xl font-bold text-slate-800">Types of Cookies We Use:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Essential Cookies:</strong> Required for the operation of our Services. They enable basic functions like page navigation and access to secure areas.</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our Services by collecting and reporting information anonymously.</li>
                <li><strong>Marketing Cookies:</strong> Used to track visitors across websites to display relevant advertisements.</li>
              </ul>
              <p>
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Services.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8">7. Your Privacy Rights</h2>

              <h3 className="text-xl font-bold text-slate-800">7.1 All Users</h3>
              <p>You may:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access, update, or delete your account information at any time by logging into your account settings</li>
                <li>Opt out of receiving promotional communications by following the unsubscribe instructions in those messages</li>
                <li>Request a copy of the personal information we hold about you</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800">7.2 California Residents (CCPA/CPRA)</h3>
              <p>If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA):</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Right to Know:</strong> You have the right to request information about the categories and specific pieces of personal information we have collected about you, the sources of that information, the business purposes for collecting it, and the categories of third parties with whom we share it.</li>
                <li><strong>Right to Delete:</strong> You have the right to request deletion of your personal information, subject to certain exceptions.</li>
                <li><strong>Right to Correct:</strong> You have the right to request correction of inaccurate personal information.</li>
                <li><strong>Right to Opt-Out of Sale/Sharing:</strong> We do not sell your personal information. If this changes, we will provide a clear opt-out mechanism.</li>
                <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising any of your CCPA/CPRA rights.</li>
              </ul>
              <p>
                To exercise these rights, please contact us at privacy@homeflip.ai. We will verify your identity before processing your request.
              </p>

              <h3 className="text-xl font-bold text-slate-800">7.3 Other State Privacy Rights</h3>
              <p>
                Residents of Virginia, Colorado, Connecticut, Utah, and other states with comprehensive privacy laws may have similar rights. Please contact us to exercise any applicable rights under your state&apos;s privacy law.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8">8. Third-Party Services</h2>
              <p>Our Services may contain links to third-party websites and services. We are not responsible for the privacy practices of these third parties. We encourage you to read the privacy policies of any third-party services you access.</p>
              <p>We use the following categories of third-party services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Payment Processing:</strong> Stripe</li>
                <li><strong>Analytics:</strong> Google Analytics, Vercel Analytics</li>
                <li><strong>Customer Communication:</strong> Email service providers</li>
                <li><strong>Scheduling:</strong> Calendly</li>
                <li><strong>Hosting:</strong> Vercel, Supabase</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-8">9. Children&apos;s Privacy</h2>
              <p>
                Our Services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information promptly. If you believe we have collected information from a child under 18, please contact us.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8">10. International Data Transfers</h2>
              <p>
                Our Services are hosted in the United States. If you access our Services from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States where our servers are located. By using our Services, you consent to the transfer of your information to the United States.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8">11. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. If we make material changes, we will notify you by posting the updated policy on this page and updating the &quot;Last Updated&quot; date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8">12. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us at:</p>
              <div className="bg-slate-50 p-6 rounded-xl mt-4">
                <p className="font-bold text-slate-900">Whitebox Academy, LLC</p>
                <p>A Delaware Limited Liability Company</p>
                <p className="mt-2">7800 Cooper Road, Suite 201</p>
                <p>Cincinnati, OH 45242</p>
                <p className="mt-2">Email: privacy@homeflip.ai</p>
                <p>Website: homeflip.ai</p>
              </div>

              <p className="mt-8 text-sm text-slate-500">
                This Privacy Policy is provided for informational purposes and does not constitute legal advice. We recommend consulting with a qualified attorney for legal guidance specific to your situation.
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

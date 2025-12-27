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
              <p className="font-bold">Last Updated: December 27, 2025</p>

              <p>
                These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) and Whitebox Academy, LLC, a Delaware limited liability company (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), governing your access to and use of the Homeflip.ai website, platform, and services (collectively, the &quot;Services&quot;).
              </p>
              <p>
                By accessing or using the Services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Services.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8">1. Eligibility</h2>
              <p>
                You must be at least 18 years old and have the legal capacity to enter into a binding agreement to use our Services. By using the Services, you represent and warrant that you meet these eligibility requirements. If you are using the Services on behalf of a business or other legal entity, you represent that you have the authority to bind that entity to these Terms.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8">2. Description of Services</h2>
              <p>
                Homeflip.ai provides a software-as-a-service platform designed for real estate investors. Our Services include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access to probate lead data aggregated from public court records</li>
                <li>Property ownership verification and related real estate data</li>
                <li>Customer relationship management (CRM) tools</li>
                <li>AI-powered lead analysis and recommendations</li>
                <li>Educational content, coaching, and community access</li>
              </ul>
              <p>
                We reserve the right to modify, suspend, or discontinue any aspect of the Services at any time without prior notice.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8">3. Account Registration</h2>
              <p>
                To access certain features of the Services, you must create an account. When registering, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security and confidentiality of your login credentials</li>
                <li>Notify us immediately of any unauthorized access to your account</li>
                <li>Accept responsibility for all activities that occur under your account</li>
              </ul>
              <p>
                We reserve the right to suspend or terminate your account if any information provided is inaccurate, false, or violates these Terms.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8">4. Subscription and Payment Terms</h2>

              <h3 className="text-xl font-bold text-slate-800">4.1 Fees and Billing</h3>
              <p>
                Access to certain features of the Services requires payment of subscription fees and/or per-lead fees. All fees are stated in U.S. dollars and are non-refundable except as expressly provided in these Terms or required by law. You authorize us to charge your designated payment method for all applicable fees.
              </p>

              <h3 className="text-xl font-bold text-slate-800">4.2 Subscription Terms</h3>
              <p>
                Subscriptions automatically renew at the end of each billing period unless you cancel before the renewal date. You may cancel your subscription at any time through your account settings or by contacting us. Cancellation will take effect at the end of the current billing period.
              </p>

              <h3 className="text-xl font-bold text-slate-800">4.3 Price Changes</h3>
              <p>
                We may change our fees at any time. For existing subscribers, fee changes will take effect at the start of the next billing period following notice of the change. Your continued use of the Services after a fee change constitutes acceptance of the new fees.
              </p>

              <h3 className="text-xl font-bold text-slate-800">4.4 Lead Credits</h3>
              <p>
                Leads are purchased in credit packages. Lead credits are non-refundable and non-transferable. Unused credits may expire as specified at the time of purchase. If you receive inaccurate lead information, you may request a credit replacement in accordance with our accuracy guarantee policy.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8">5. License and Use Restrictions</h2>

              <h3 className="text-xl font-bold text-slate-800">5.1 License Grant</h3>
              <p>
                Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Services for your internal business purposes.
              </p>

              <h3 className="text-xl font-bold text-slate-800">5.2 Restrictions</h3>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sublicense, sell, resell, transfer, assign, or distribute the Services or any data obtained through the Services</li>
                <li>Modify, copy, or create derivative works based on the Services</li>
                <li>Reverse engineer, disassemble, or decompile any aspect of the Services</li>
                <li>Access the Services to build a competitive product or service</li>
                <li>Use the Services for any unlawful purpose or in violation of any applicable laws</li>
                <li>Use automated scripts, bots, or other means to access the Services without our express permission</li>
                <li>Circumvent any access controls or usage limits</li>
                <li>Share your account credentials with third parties</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-8">6. Lead Data and Information</h2>

              <h3 className="text-xl font-bold text-slate-800">6.1 Nature of Lead Data</h3>
              <p>
                The lead data provided through our Services is compiled from publicly available sources, including county court records, property records, and other government databases. While we strive for accuracy, we do not guarantee that all information is complete, current, or error-free.
              </p>

              <h3 className="text-xl font-bold text-slate-800">6.2 Your Responsibilities</h3>
              <p>
                You are solely responsible for how you use the lead data obtained through our Services. You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use lead data in compliance with all applicable federal, state, and local laws</li>
                <li>Comply with the Telephone Consumer Protection Act (TCPA), CAN-SPAM Act, and other applicable marketing regulations</li>
                <li>Treat individuals represented in lead data with respect and professionalism</li>
                <li>Not use lead data for harassment, fraud, or any illegal purpose</li>
                <li>Maintain appropriate do-not-contact lists and honor opt-out requests</li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800">6.3 Market Exclusivity</h3>
              <p>
                We limit the number of subscribers per geographic market (county). However, we do not guarantee exclusive access to leads, as probate information is derived from public records that may be accessed by others outside our platform.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8">7. Intellectual Property</h2>
              <p>
                The Services, including all content, features, functionality, software, and technology, are owned by the Company and are protected by copyright, trademark, and other intellectual property laws. Our trademarks, service marks, and logos may not be used without our prior written consent.
              </p>
              <p>
                You retain ownership of any content you submit through the Services. By submitting content, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, and display such content in connection with providing the Services.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8">8. Disclaimers</h2>
              <p className="uppercase font-bold">
                THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
              </p>
              <p>
                We do not warrant that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The Services will meet your specific requirements or expectations</li>
                <li>The Services will be uninterrupted, timely, secure, or error-free</li>
                <li>The lead data or other information obtained through the Services will be accurate, complete, or reliable</li>
                <li>Any errors in the Services will be corrected</li>
              </ul>
              <p>
                We are not a real estate brokerage, law firm, or financial advisor. The Services are informational tools only and do not constitute legal, financial, or real estate advice. You should consult with appropriate professionals before making investment decisions.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8">9. Limitation of Liability</h2>
              <p className="uppercase font-bold">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL THE COMPANY, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your access to or use of, or inability to access or use, the Services</li>
                <li>Any conduct or content of any third party on the Services</li>
                <li>Any lead data or information obtained from the Services</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                <li>Any real estate transaction or investment decision made based on information from the Services</li>
              </ul>
              <p className="uppercase font-bold">
                OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM OR RELATING TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNTS YOU PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR (B) ONE HUNDRED DOLLARS ($100).
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8">10. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless the Company and its affiliates, officers, directors, employees, and agents from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys&apos; fees) arising from or relating to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your use of the Services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any applicable law or regulation</li>
                <li>Your marketing activities or communications with individuals in lead data</li>
                <li>Any real estate transaction you enter into based on information from the Services</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-8">11. Termination</h2>
              <p>
                We may terminate or suspend your access to the Services immediately, without prior notice or liability, for any reason, including without limitation if you breach these Terms. Upon termination, your right to use the Services will cease immediately.
              </p>
              <p>
                You may terminate your account at any time by contacting us or through your account settings. Termination does not entitle you to a refund of any fees paid.
              </p>
              <p>
                Provisions of these Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnification, and limitations of liability.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8">12. Governing Law and Dispute Resolution</h2>

              <h3 className="text-xl font-bold text-slate-800">12.1 Governing Law</h3>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions.
              </p>

              <h3 className="text-xl font-bold text-slate-800">12.2 Dispute Resolution</h3>
              <p>
                Any dispute arising from or relating to these Terms or the Services shall first be attempted to be resolved through good-faith negotiation. If the dispute cannot be resolved through negotiation within thirty (30) days, either party may pursue resolution through binding arbitration administered by the American Arbitration Association in accordance with its Commercial Arbitration Rules.
              </p>
              <p>
                The arbitration shall be conducted in Hamilton County, Ohio. The arbitrator&apos;s decision shall be final and binding. Judgment on the arbitration award may be entered in any court having jurisdiction.
              </p>

              <h3 className="text-xl font-bold text-slate-800">12.3 Class Action Waiver</h3>
              <p>
                YOU AGREE THAT ANY DISPUTE RESOLUTION PROCEEDINGS WILL BE CONDUCTED ONLY ON AN INDIVIDUAL BASIS AND NOT IN A CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8">13. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. If we make material changes, we will notify you by posting the updated Terms on this page and updating the &quot;Last Updated&quot; date. Your continued use of the Services after any changes constitutes acceptance of the new Terms.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8">14. General Provisions</h2>

              <h3 className="text-xl font-bold text-slate-800">14.1 Entire Agreement</h3>
              <p>
                These Terms, together with the Privacy Policy and any other agreements expressly incorporated by reference, constitute the entire agreement between you and the Company regarding the Services.
              </p>

              <h3 className="text-xl font-bold text-slate-800">14.2 Severability</h3>
              <p>
                If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall be enforced to the fullest extent under law.
              </p>

              <h3 className="text-xl font-bold text-slate-800">14.3 Waiver</h3>
              <p>
                Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.
              </p>

              <h3 className="text-xl font-bold text-slate-800">14.4 Assignment</h3>
              <p>
                You may not assign or transfer these Terms without our prior written consent. We may assign these Terms without restriction.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8">15. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
              <div className="bg-slate-50 p-6 rounded-xl mt-4">
                <p className="font-bold text-slate-900">Whitebox Academy, LLC</p>
                <p>A Delaware Limited Liability Company</p>
                <p className="mt-2">7800 Cooper Road, Suite 201</p>
                <p>Cincinnati, OH 45242</p>
                <p className="mt-2">Email: legal@homeflip.ai</p>
                <p>Website: homeflip.ai</p>
              </div>

              <p className="mt-8 text-sm text-slate-500">
                These Terms of Service are provided for informational purposes and do not constitute legal advice. We recommend consulting with a qualified attorney for legal guidance specific to your situation.
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

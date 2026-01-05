'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Download, Mail } from 'lucide-react';

export default function ThankYouPage() {
  // TODO: Replace with actual PDF URL
  const pdfDownloadUrl = '/12-off-market-property-secrets.pdf';

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        {/* Success Icon */}
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-[#0891b2] to-[#7c3aed] rounded-full flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-hero font-[900] text-3xl sm:text-4xl md:text-5xl text-slate-900 uppercase tracking-tighter leading-[0.95] mb-6">
          You&apos;re In!{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0891b2] to-[#7c3aed]">
            Download Your Free Guide
          </span>
        </h1>

        <p className="text-xl text-slate-600 mb-8">
          Click the button below to download your copy of<br />
          <strong>&quot;12 Off-Market Property Secrets&quot;</strong>
        </p>

        {/* Download Button */}
        <a
          href={pdfDownloadUrl}
          download
          className="inline-flex items-center gap-3 btn-gradient px-10 py-5 rounded-2xl font-hero font-[900] text-xl uppercase tracking-tight shadow-lg shadow-[#0891b2]/20 hover:scale-[1.01] transition-all mb-8"
        >
          <Download className="w-6 h-6" />
          Download Now (PDF)
        </a>

        {/* Email Notice */}
        <div className="bg-slate-50 rounded-2xl p-6 text-left">
          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-[#0891b2] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Check Your Email</h3>
              <p className="text-slate-600">
                We&apos;ve also sent a copy to your inbox. If you don&apos;t see it within a few minutes,
                check your spam or promotions folder.
              </p>
            </div>
          </div>
        </div>

        {/* What's Next */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <h3 className="font-bold text-lg text-slate-900 mb-4">What&apos;s Next?</h3>
          <p className="text-slate-600 mb-6">
            Ready to start finding off-market probate properties in your area?
          </p>
          <a
            href="/claim-your-county"
            className="inline-flex items-center gap-2 text-[#0891b2] font-bold hover:text-[#7c3aed] transition-colors"
          >
            Claim Your County &rarr;
          </a>
        </div>
      </motion.div>
    </main>
  );
}

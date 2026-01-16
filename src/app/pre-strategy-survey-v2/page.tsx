'use client';

import React, { Suspense } from 'react';
import { StrategyCallSurvey } from '@/components/StrategyCallSurvey';

function StrategyCallContent() {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col">
      {/* Subtle background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#83d4c0]/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#0891b2]/6 rounded-full blur-[150px]" />
      </div>

      {/* Main content - centered with top bias */}
      <main className="relative flex-1 flex items-start justify-center pt-[15vh] pb-12 px-6">
        <div className="w-full max-w-[640px]">
          {/* Glassmorphic card container */}
          <div className="bg-white/[0.02] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-8 sm:p-10">
            <StrategyCallSurvey />
          </div>
        </div>
      </main>
    </div>
  );
}

export default function StrategyCallSetupPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#83d4c0]/30 border-t-[#83d4c0] rounded-full animate-spin" />
      </div>
    }>
      <StrategyCallContent />
    </Suspense>
  );
}

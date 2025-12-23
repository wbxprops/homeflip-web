import React from 'react';
import { Section } from './Section';

export const Comparison = () => {
  return (
    <Section>
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-black text-gray-900">
          Static Lists vs. Timeline Intelligence
        </h2>
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          Probate has stages: filing, inventory, delays, listings, resolution. Most vendors give you a snapshot. We track the whole timeline.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Before - Static Lists */}
        <div className="bg-gray-100 p-8 md:p-10 rounded-3xl border-2 border-gray-200 relative">
          <div className="absolute -top-4 left-8 bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-bold">
            STATIC LISTS
          </div>
          <div className="space-y-6 mt-4">
            <ComparisonItem
              title="Filing date only"
              description="You get a date and a name. No context for where the case actually stands."
              isNegative
            />
            <ComparisonItem
              title="Already cold"
              description="Lists are weeks or months old. You're calling cases too early—or too late."
              isNegative
            />
            <ComparisonItem
              title="No lifecycle tracking"
              description="Inventory filed? Property listed? Case delayed? You'll never know."
              isNegative
            />
            <ComparisonItem
              title="Shared with everyone"
              description="Same CSV sold to 10+ investors. You're competing before you even dial."
              isNegative
            />
            <ComparisonItem
              title="No guidance"
              description="Which cases should you call today? Vendors don't answer that."
              isNegative
            />
          </div>
        </div>

        {/* After - Timeline Intelligence */}
        <div className="bg-gradient-to-br from-[#5EEADC]/10 to-[#A855F7]/10 p-8 md:p-10 rounded-3xl border-2 border-[#5EEADC]/30 relative">
          <div className="absolute -top-4 left-8 bg-gradient-to-r from-[#5EEADC] to-[#A855F7] text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
            TIMELINE INTELLIGENCE
          </div>
          <div className="space-y-6 mt-4">
            <ComparisonItem
              title="Full case lifecycle"
              description="Track every stage: filing, inventory, delays, property listings, resolution."
            />
            <ComparisonItem
              title="Status change alerts"
              description="Know when a case moves closer to sale—not weeks after it happened."
            />
            <ComparisonItem
              title="Timing-based priority"
              description="We surface cases that are ready now, not just cases that exist."
            />
            <ComparisonItem
              title="Court-synced updates"
              description="Continuous monitoring, not monthly dumps. Data stays fresh."
            />
            <ComparisonItem
              title="Actionable answers"
              description="Who should you call today? We tell you—based on timing, not just volume."
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

const ComparisonItem = ({ title, description, isNegative = false }: { title: string; description: string; isNegative?: boolean }) => (
  <div className="flex items-start gap-4">
    <div className={`w-8 h-8 rounded-full ${isNegative ? 'bg-red-100' : 'bg-[#5EEADC]/20'} flex items-center justify-center flex-shrink-0`}>
      <span className={`${isNegative ? 'text-red-500' : 'text-[#2DD4BF]'} font-bold`}>
        {isNegative ? '✗' : '✓'}
      </span>
    </div>
    <div>
      <h4 className="font-bold text-gray-900">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);


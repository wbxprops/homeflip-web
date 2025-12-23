import React from 'react';

export const StatsBar = () => {
  const stats = [
    { label: "Deal Value Sourced", value: "$2.4M+" },
    { label: "Investors on Waitlist", value: "500+" },
    { label: "Leads Processed", value: "10K+" },
    { label: "Counties Live", value: "5" },
  ];

  return (
    <section className="py-16 px-6 border-y border-gray-100 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl sm:text-5xl font-black text-gray-900">{stat.value}</div>
              <div className="mt-2 text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


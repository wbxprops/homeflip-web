'use client';

import React, { useEffect, useState, ReactNode } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { SectionNavigator } from './SectionNavigator';
import { MobileNavigator } from './MobileNavigator';

interface Part {
  id: string;
  title: string;
  content: ReactNode;
}

interface NavigationLink {
  href: string;
  label: string;
}

interface GuideSectionProps {
  sectionNumber: string;
  sectionTitle: string;
  sectionSubtitle: string;
  parts: Part[];
  prevSection?: NavigationLink;
  nextSection?: NavigationLink;
}

export function GuideSection({
  sectionNumber,
  sectionTitle,
  sectionSubtitle,
  parts,
  prevSection,
  nextSection,
}: GuideSectionProps) {
  const [activePart, setActivePart] = useState<string | null>(parts[0]?.id || null);

  // Set up Intersection Observer to track which part is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const partId = entry.target.getAttribute('data-part-id');
            if (partId) {
              setActivePart(partId);
            }
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    // Observe all part sections
    parts.forEach((part) => {
      const element = document.getElementById(part.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [parts]);

  // Handle navigator click - smooth scroll to part
  const handlePartClick = (partId: string) => {
    const element = document.getElementById(partId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const partsMeta = parts.map(p => ({ id: p.id, title: p.title }));

  return (
    <div className="flex-1">
      {/* Mobile Navigator - sticky at top */}
      <div className="lg:hidden sticky top-0 z-20">
        <MobileNavigator
          parts={partsMeta}
          activePart={activePart}
          onPartClick={handlePartClick}
        />
      </div>

      {/* Desktop Layout - content + sticky nav */}
      <div className="flex">
        {/* Content Column */}
        <div className="flex-1 lg:pr-[320px]">
          <article className="max-w-4xl mx-auto px-8 md:px-12 py-8 md:py-12">
            {/* Section Header */}
            <header className="mb-12 pb-8" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
              <span
                className="text-xs font-semibold uppercase tracking-[0.2em] mb-3 block"
                style={{ color: '#83d4c0' }}
              >
                {sectionNumber}
              </span>
              <h1
                className="font-sans font-bold text-3xl md:text-4xl leading-tight mb-3"
                style={{ color: 'rgba(255,255,255,0.95)' }}
              >
                {sectionTitle}
              </h1>
              <p
                className="text-lg leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                {sectionSubtitle}
              </p>
            </header>

            {/* Parts Content */}
            <div className="space-y-16">
              {parts.map((part, index) => (
                <section
                  key={part.id}
                  id={part.id}
                  data-part-id={part.id}
                  className="scroll-mt-24"
                >
                  {/* Part Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className="text-xs font-medium px-2 py-1 rounded"
                      style={{ backgroundColor: 'rgba(131,212,192,0.1)', color: '#83d4c0' }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2
                      className="text-xl md:text-2xl font-semibold"
                      style={{ color: 'rgba(255,255,255,0.9)' }}
                    >
                      {part.title}
                    </h2>
                  </div>

                  {/* Part Content */}
                  <div className="prose-dark">
                    {part.content}
                  </div>
                </section>
              ))}
            </div>

            {/* Navigation Footer */}
            <footer className="mt-16 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="flex justify-between items-center">
                {prevSection ? (
                  <Link
                    href={prevSection.href}
                    className="flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium transition hover:bg-white/[0.04]"
                    style={{ color: 'rgba(255,255,255,0.5)' }}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    {prevSection.label}
                  </Link>
                ) : (
                  <div />
                )}
                {nextSection ? (
                  <Link
                    href={nextSection.href}
                    className="flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium transition hover:bg-white/[0.04]"
                    style={{ color: '#83d4c0' }}
                  >
                    {nextSection.label}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </footer>
          </article>
        </div>

        {/* Navigator Column - fixed on right (desktop only) */}
        <div className="hidden lg:block fixed right-0 top-0 w-[320px] h-screen border-l border-white/[0.06] bg-[#0a0a0f]">
          <div className="pt-20">
            <SectionNavigator
              parts={partsMeta}
              activePart={activePart}
              onPartClick={handlePartClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';
import { hubConfig } from '@/config/hub.config';

export default function HubTrainingPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { trainingVideos } = hubConfig;

  return (
    <>
      {/* Page Header */}
      <div className="border-b border-white/[0.06]" style={{ backgroundColor: '#0a0a0f' }}>
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-8">
          <h1 className="font-sans font-bold text-2xl md:text-3xl" style={{ color: 'rgba(255,255,255,0.95)' }}>
            Training Videos
          </h1>
          <p className="text-base mt-2 leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Watch the full Probate Profit Machine training — one chapter at a time. Each video walks through the
            concepts from the written guide so you can see the strategies in action.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-8 space-y-8">

          {trainingVideos.map((video) => (
            <section
              key={video.part}
              className="rounded-2xl overflow-hidden"
              style={{ backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              {/* Chapter Header */}
              <div className="px-6 pt-6 pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span
                      className="text-sm font-medium px-3 py-1 rounded-lg inline-block mb-3"
                      style={{ backgroundColor: 'rgba(131,212,192,0.12)', color: '#83d4c0' }}
                    >
                      Part {video.part} of {trainingVideos.length}
                    </span>
                    <h2 className="font-sans font-semibold text-xl mb-1" style={{ color: 'rgba(255,255,255,0.95)' }}>
                      {video.title}
                    </h2>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      {video.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Wistia Video Embed */}
              <div className="px-6">
                <div
                  className="aspect-video rounded-xl overflow-hidden"
                  style={{ backgroundColor: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <iframe
                    src={`https://fast.wistia.net/embed/iframe/${video.wistiaId}?seo=false&videoFoam=true`}
                    title={`Part ${video.part}: ${video.title}`}
                    className="w-full h-full"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Read the Guide Link */}
              <div className="px-6 py-4">
                <Link
                  href={`/hub/${slug}/guide/part-${video.part}`}
                  className="group inline-flex items-center gap-2 text-sm font-medium transition hover:opacity-80"
                  style={{ color: '#83d4c0' }}
                >
                  <BookOpen className="w-4 h-4" />
                  Read Part {video.part} in the written guide
                  <ArrowRight className="w-3.5 h-3.5 transition group-hover:translate-x-0.5" />
                </Link>
              </div>
            </section>
          ))}

        </div>
      </div>
    </>
  );
}

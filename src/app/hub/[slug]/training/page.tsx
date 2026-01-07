'use client';

import React from 'react';
import { Play } from 'lucide-react';

export default function HubTrainingPage() {
  const videos = [
    {
      id: 1,
      title: 'Finding Your First Probate Deal',
      duration: '18 min',
      embedUrl: 'https://player.vimeo.com/video/123456789',
    },
    {
      id: 2,
      title: 'How to Contact Probate Families',
      duration: '24 min',
      embedUrl: 'https://player.vimeo.com/video/987654321',
    },
  ];

  return (
    <>
      {/* Page Header */}
      <div className="border-b border-white/[0.06]" style={{ backgroundColor: '#0a0a0f' }}>
        <div className="p-6">
          <h1 className="font-sans font-bold text-2xl" style={{ color: 'rgba(255,255,255,0.95)' }}>
            Training Videos
          </h1>
          <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Watch real training sessions on probate investing
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6 space-y-6">

          {/* Videos */}
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Live Training Replays
            </h2>
            <div className="grid gap-4">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="rounded-2xl overflow-hidden"
                  style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#83d4c0] to-[#0891b2] rounded-lg flex items-center justify-center">
                        <Play className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-sans font-medium text-base" style={{ color: 'rgba(255,255,255,0.95)' }}>
                          {video.title}
                        </h3>
                        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{video.duration}</p>
                      </div>
                    </div>
                    <div
                      className="aspect-video rounded-lg overflow-hidden"
                      style={{ backgroundColor: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      <iframe
                        src={video.embedUrl}
                        className="w-full h-full"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  );
}

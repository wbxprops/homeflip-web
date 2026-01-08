'use client';

import React from 'react';
import { hubConfig } from '@/config/hub.config';

interface Part {
  id: string;
  title: string;
}

interface SectionNavigatorProps {
  parts: Part[];
  activePart: string | null;
  onPartClick: (partId: string) => void;
}

export function SectionNavigator({ parts, activePart, onPartClick }: SectionNavigatorProps) {
  const { titleMaxLength, truncationSuffix } = hubConfig.navigation;

  const truncateTitle = (title: string) => {
    if (title.length <= titleMaxLength) return title;
    return title.slice(0, titleMaxLength).trimEnd() + truncationSuffix;
  };

  return (
    <div className="h-full overflow-y-auto p-4">
      <p className="text-xs font-semibold uppercase tracking-wider mb-4 px-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
        In This Section
      </p>
      <nav className="space-y-1">
        {parts.map((part, index) => {
          const isActive = part.id === activePart;

          return (
            <button
              key={part.id}
              onClick={() => onPartClick(part.id)}
              className={`w-full text-left px-3 py-2.5 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-[#83d4c0]/10'
                  : 'hover:bg-white/[0.04]'
              }`}
              title={part.title}
            >
              <div className="flex items-start gap-3">
                <span
                  className="text-xs font-medium mt-0.5"
                  style={{ color: isActive ? '#83d4c0' : 'rgba(255,255,255,0.3)' }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span
                  className="text-sm leading-snug"
                  style={{ color: isActive ? '#83d4c0' : 'rgba(255,255,255,0.6)' }}
                >
                  {truncateTitle(part.title)}
                </span>
              </div>
            </button>
          );
        })}
      </nav>
    </div>
  );
}

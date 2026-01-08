'use client';

import React, { useRef, useEffect } from 'react';

interface Part {
  id: string;
  title: string;
}

interface MobileNavigatorProps {
  parts: Part[];
  activePart: string | null;
  onPartClick: (partId: string) => void;
}

export function MobileNavigator({ parts, activePart, onPartClick }: MobileNavigatorProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeIndex = parts.findIndex(p => p.id === activePart);

  // Auto-scroll to keep active item visible
  useEffect(() => {
    if (scrollRef.current && activeIndex !== -1) {
      const container = scrollRef.current;
      const activeButton = container.children[activeIndex] as HTMLElement;
      if (activeButton) {
        const containerWidth = container.offsetWidth;
        const buttonLeft = activeButton.offsetLeft;
        const buttonWidth = activeButton.offsetWidth;
        const scrollLeft = buttonLeft - (containerWidth / 2) + (buttonWidth / 2);
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [activeIndex]);

  return (
    <div className="bg-[#0a0a0f] border-b border-white/[0.06] px-4 py-3">
      {/* Progress indicator */}
      <div className="flex items-center gap-1.5 mb-3">
        {parts.map((part, index) => {
          const isActive = part.id === activePart;
          const isPast = activeIndex > index;

          return (
            <button
              key={part.id}
              onClick={() => onPartClick(part.id)}
              className="flex-1 h-1 rounded-full transition-colors"
              style={{
                backgroundColor: isActive
                  ? '#83d4c0'
                  : isPast
                    ? 'rgba(131,212,192,0.4)'
                    : 'rgba(255,255,255,0.1)',
              }}
            />
          );
        })}
      </div>

      {/* Current section label */}
      <div className="flex items-center gap-2">
        <span className="text-xs font-medium" style={{ color: '#83d4c0' }}>
          {String(activeIndex + 1).padStart(2, '0')}
        </span>
        <span className="text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
          {parts[activeIndex]?.title || 'Introduction'}
        </span>
      </div>
    </div>
  );
}

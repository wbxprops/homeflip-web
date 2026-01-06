'use client';

import React from 'react';

export const TsunamiBackground = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: '#020617',
        overflow: 'hidden'
      }}
    >
      {/* Background effects layer */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none' }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at top, rgba(148,163,184,0.32), transparent 60%), radial-gradient(circle at bottom, rgba(15,23,42,0.95), transparent 80%)'
          }}
        />

        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, mixBlendMode: 'screen', opacity: 0.9 }}>
          {/* Wave layer 1 */}
          <div
            style={{
              position: 'absolute',
              inset: '-25%',
              filter: 'blur(48px)',
              animation: 'wave-shift 21s cubic-bezier(0.36, 0.11, 0.16, 0.99) infinite',
              backgroundImage: `
                radial-gradient(circle at 18% 12%, rgba(248,250,252,0.32), transparent 60%),
                radial-gradient(circle at 80% 22%, rgba(209,213,219,0.6), transparent 65%),
                radial-gradient(circle at 52% 82%, rgba(148,163,184,0.55), transparent 65%),
                radial-gradient(circle at 10% 78%, rgba(148,163,184,0.4), transparent 60%)
              `
            }}
          />

          {/* Wave layer 2 */}
          <div
            style={{
              position: 'absolute',
              inset: '-22%',
              opacity: 0.9,
              animation: 'wave-parallax 24s cubic-bezier(0.4, 0.07, 0.15, 0.96) infinite',
              backgroundImage: `
                radial-gradient(circle at 12% 6%, rgba(249,250,251,0.95), transparent 48%),
                radial-gradient(circle at 72% 30%, rgba(229,231,235,0.9), transparent 60%),
                radial-gradient(circle at 46% 86%, rgba(209,213,219,0.85), transparent 55%),
                radial-gradient(circle at 92% 78%, rgba(248,250,252,0.9), transparent 52%)
              `,
              filter: 'drop-shadow(0 0 18px rgba(148,163,184,0.8))'
            }}
          />

          {/* Star field base */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.85,
              backgroundImage: `
                radial-gradient(circle, rgba(248,250,252,0.95) 0.6px, transparent 0.6px),
                radial-gradient(circle, rgba(209,213,219,0.85) 0.55px, transparent 0.55px),
                radial-gradient(circle, rgba(148,163,184,0.7) 0.55px, transparent 0.55px)
              `,
              backgroundSize: '20px 32px, 28px 36px, 44px 60px',
              backgroundPosition: '0 0, 8px 10px, -12px 18px',
              maskImage: `
                radial-gradient(circle at 10% 30%, black 0%, transparent 55%),
                radial-gradient(circle at 40% 45%, black 0%, transparent 60%),
                radial-gradient(circle at 75% 60%, black 0%, transparent 65%)
              `,
              WebkitMaskImage: `
                radial-gradient(circle at 10% 30%, black 0%, transparent 55%),
                radial-gradient(circle at 40% 45%, black 0%, transparent 60%),
                radial-gradient(circle at 75% 60%, black 0%, transparent 65%)
              `
            }}
          />

          {/* Twinkling particles */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `
                  radial-gradient(circle, rgba(248,250,252,0.9) 1px, transparent 1px),
                  radial-gradient(circle, rgba(148,163,184,0.7) 1.1px, transparent 1.1px)
                `,
                backgroundSize: '44px 46px, 72px 68px',
                backgroundPosition: '4px 10px, -16px -18px',
                animation: 'twinkle 19s cubic-bezier(0.32, 0.02, 0.16, 0.98) infinite, particle-drift-a 33s ease-in-out infinite',
                opacity: 0.7
              }}
            />

            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `
                  radial-gradient(circle, rgba(248,250,252,0.85) 0.8px, transparent 0.8px),
                  radial-gradient(circle, rgba(148,163,184,0.65) 0.9px, transparent 0.9px)
                `,
                backgroundSize: '38px 40px, 62px 64px',
                backgroundPosition: '18px -6px, -10px 22px',
                animation: 'twinkle 17s cubic-bezier(0.32, 0.02, 0.16, 0.98) infinite alternate, particle-drift-b 27s ease-in-out infinite',
                opacity: 0.65
              }}
            />

            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `
                  radial-gradient(circle, rgba(248,250,252,0.8) 0.6px, transparent 0.6px),
                  radial-gradient(circle, rgba(148,163,184,0.6) 0.6px, transparent 0.6px)
                `,
                backgroundSize: '52px 54px, 80px 78px',
                backgroundPosition: '-12px 4px, 20px -14px',
                animation: 'twinkle 21s cubic-bezier(0.32, 0.02, 0.16, 0.98) infinite reverse, particle-drift-c 31s ease-in-out infinite',
                opacity: 0.55
              }}
            />
          </div>

          {/* Center glow */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: '50%',
              height: '33%',
              transform: 'translateY(-50%)',
              filter: 'blur(48px)',
              opacity: 0.8,
              background: 'radial-gradient(ellipse at center, rgba(248,250,252,0.5), transparent 75%)'
            }}
          />

          {/* Swoosh band */}
          <div
            style={{
              position: 'absolute',
              inset: '-30%',
              pointerEvents: 'none',
              mixBlendMode: 'screen',
              backgroundImage: `
                radial-gradient(circle at 50% 50%, rgba(248,250,252,0.35), transparent 55%),
                radial-gradient(circle at 40% 40%, rgba(148,163,184,0.3), transparent 65%),
                radial-gradient(circle at 60% 60%, rgba(209,213,219,0.32), transparent 70%)
              `,
              filter: 'blur(32px)',
              maskImage: 'radial-gradient(circle at 50% 50%, black 0%, transparent 58%)',
              WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 0%, transparent 58%)',
              opacity: 0,
              animation: 'swoosh-band 27s cubic-bezier(0.25, 0.03, 0.12, 0.98) infinite'
            }}
          />
        </div>
      </div>

      {/* Content layer */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

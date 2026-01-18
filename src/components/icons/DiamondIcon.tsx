'use client';

import React from 'react';

interface DiamondIconProps {
  size?: number;
  className?: string;
  variant?: 'amber' | 'teal' | 'purple' | 'gray';
  style?: React.CSSProperties;
}

/**
 * Faceted diamond SVG icon
 * Designed to match the Homeflip gemstone visual language
 *
 * Variants:
 * - amber: New cases (opportunity, anticipation)
 * - teal: Unclaimed cases (ready to claim)
 * - purple: Claimed cases
 * - gray: Neutral/empty states
 */
const DiamondIcon: React.FC<DiamondIconProps> = ({
  size = 64,
  className = '',
  variant = 'amber',
  style = {},
}) => {
  // Color schemes for each variant
  const colorSchemes = {
    amber: {
      // Warm, opportunity-focused
      topFacet: '#fcd34d',      // Lightest - crown highlight
      leftFacet: '#f59e0b',     // Left facet
      rightFacet: '#d97706',    // Right facet (slightly darker)
      bottomFacet: '#b45309',   // Pavilion (deepest)
      stroke: '#92400e',        // Subtle edge definition
      shadowColor: 'rgba(245, 158, 11, 0.4)',
    },
    teal: {
      topFacet: '#99f6e4',
      leftFacet: '#5eead4',
      rightFacet: '#2dd4bf',
      bottomFacet: '#14b8a6',
      stroke: '#0f766e',
      shadowColor: 'rgba(94, 234, 212, 0.4)',
    },
    purple: {
      topFacet: '#d8b4fe',
      leftFacet: '#c084fc',
      rightFacet: '#a855f7',
      bottomFacet: '#9333ea',
      stroke: '#7e22ce',
      shadowColor: 'rgba(168, 85, 247, 0.4)',
    },
    gray: {
      topFacet: '#e2e8f0',
      leftFacet: '#cbd5e1',
      rightFacet: '#94a3b8',
      bottomFacet: '#64748b',
      stroke: '#475569',
      shadowColor: 'rgba(148, 163, 184, 0.3)',
    },
  };

  const colors = colorSchemes[variant];
  const uniqueId = `diamond-gradient-${variant}-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        filter: `drop-shadow(0 4px 12px ${colors.shadowColor})`,
        ...style,
      }}
    >
      <defs>
        {/* Gradient for the top crown facet */}
        <linearGradient id={`${uniqueId}-top`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors.topFacet} />
          <stop offset="100%" stopColor={colors.leftFacet} />
        </linearGradient>
        {/* Subtle inner highlight */}
        <linearGradient id={`${uniqueId}-highlight`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>

      {/* Diamond shape - classic brilliant cut silhouette */}
      {/* Crown (top section) */}
      <polygon
        points="32,8 12,24 52,24"
        fill={`url(#${uniqueId}-top)`}
        stroke={colors.stroke}
        strokeWidth="0.5"
        strokeOpacity="0.3"
      />

      {/* Table facet (top flat surface) */}
      <polygon
        points="22,24 42,24 38,18 26,18"
        fill={colors.topFacet}
        stroke={colors.stroke}
        strokeWidth="0.5"
        strokeOpacity="0.2"
      />

      {/* Left crown facets */}
      <polygon
        points="12,24 22,24 26,18 32,8"
        fill={colors.leftFacet}
        stroke={colors.stroke}
        strokeWidth="0.5"
        strokeOpacity="0.2"
      />

      {/* Right crown facets */}
      <polygon
        points="52,24 42,24 38,18 32,8"
        fill={colors.rightFacet}
        stroke={colors.stroke}
        strokeWidth="0.5"
        strokeOpacity="0.2"
      />

      {/* Pavilion (bottom section) */}
      {/* Left pavilion facet */}
      <polygon
        points="12,24 32,56 32,24"
        fill={colors.leftFacet}
        stroke={colors.stroke}
        strokeWidth="0.5"
        strokeOpacity="0.2"
      />

      {/* Right pavilion facet */}
      <polygon
        points="52,24 32,56 32,24"
        fill={colors.rightFacet}
        stroke={colors.stroke}
        strokeWidth="0.5"
        strokeOpacity="0.2"
      />

      {/* Center pavilion (culet) */}
      <polygon
        points="22,24 42,24 32,56"
        fill={colors.bottomFacet}
        stroke={colors.stroke}
        strokeWidth="0.5"
        strokeOpacity="0.2"
      />

      {/* Highlight overlay for depth */}
      <polygon
        points="32,8 26,18 38,18"
        fill={`url(#${uniqueId}-highlight)`}
      />
    </svg>
  );
};

export default DiamondIcon;

/**
 * Hub Configuration
 *
 * Centralized configuration for the Resource Hub.
 * This file is designed to be portable when the hub becomes a standalone product.
 *
 * @see magic-link-hub project for product vision and roadmap
 */

/**
 * Logo Assets
 *
 * NAMING CONVENTION: "onDark" = use on dark backgrounds (light-colored asset)
 *                    "onLight" = use on light backgrounds (dark-colored asset)
 *
 * DEFAULT: Always use `logos.logo` (full logo) unless you have a specific reason.
 *
 * ASSET TYPES:
 *   logo     = DEFAULT - Full logo: house icon + "homeflip.ai" text
 *   wordmark = SPECIAL - Text only, for use WITH animated icon
 *   icon     = SPECIAL - House icon only, for animations/effects
 */
export const logos = {
  /** DEFAULT: Full logo with house icon + "homeflip.ai" wordmark */
  logo: {
    onDark: '/homeflip-logo-dark.png',   // Light logo for dark backgrounds
    onLight: '/homeflip-logo-light.png', // Dark logo for light backgrounds
  },
  /** SPECIAL: Wordmark only - use alongside animated icon */
  wordmark: {
    onDark: '/wordmark-dark.png',
    onLight: '/wordmark-light.png',
  },
  /** SPECIAL: Icon only - use for animations/effects */
  icon: {
    onDark: '/logo-icon-dark.svg',
    onLight: '/logo-icon-light.svg',
  },
} as const;

/**
 * Hub Branding
 *
 * Product-specific branding for each resource hub.
 * Used on access pages, emails, and anywhere hub-specific content appears.
 */
export const hubBranding: Record<string, HubBrand> = {
  'probate-profit-machine': {
    name: 'Probate Profit Machine',
    tagline: 'Your step-by-step system for finding and closing off-market probate deals',
    coverImage: '/ebook-cover-probate-profit-machine.png',
    accentColor: '#83d4c0',
    optInPath: '/probate-profit-machine', // Where to send new users
    benefits: [
      'How to find probate leads in any market',
      'Scripts that actually convert grieving families',
      'The follow-up system that closes deals',
      'Timeline intelligence for perfect timing',
    ],
  },
  // Future hubs can be added here
};

export interface HubBrand {
  name: string;
  tagline: string;
  coverImage: string;
  accentColor: string;
  optInPath: string;
  benefits: string[];
}

export const hubConfig = {
  // Layout
  layout: {
    /** Width of the right-side section navigator (desktop) */
    navigatorWidth: 360,
    /** Width of the left sidebar */
    sidebarWidth: 280,
    /** Max width of content column */
    contentMaxWidth: '4xl', // Tailwind size
  },

  // Navigation
  navigation: {
    /** Max characters for nav item titles before truncation */
    titleMaxLength: 36,
    /** Truncation suffix */
    truncationSuffix: '...',
  },

  // Colors (design tokens)
  colors: {
    /** Primary accent color (teal) */
    accent: '#83d4c0',
    /** Background color */
    background: '#0a0a0f',
    /** Border color */
    border: 'rgba(255,255,255,0.06)',
    /** Text colors */
    text: {
      primary: 'rgba(255,255,255,0.95)',
      secondary: 'rgba(255,255,255,0.6)',
      muted: 'rgba(255,255,255,0.4)',
    },
  },

  // Intersection Observer settings for scroll tracking
  scrollTracking: {
    /** Root margin for detecting active section */
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0,
  },

  // Content structure
  sections: {
    /** Guide section names (for consistency across the app) */
    guide: {
      part1: 'Why Probate',
      part2: 'Finding Probate Leads',
      part3: 'Working the Leads',
      part4: 'Tying It All Together',
    },
  },

  // Training videos (Wistia)
  trainingVideos: [
    {
      part: 1,
      wistiaId: 'go9lvej13w',
      title: 'Why Probate',
      description: 'Why probate outperforms foreclosures, wholesaler lists, and every other lead source you\'ve tried.',
    },
    {
      part: 2,
      wistiaId: 't5no3z2sml',
      title: 'Finding Probate Leads',
      description: 'The 4-step process to find leads in any county, plus a secret source most investors miss.',
    },
    {
      part: 3,
      wistiaId: 'n6rwzv0yrl',
      title: 'Working the Leads',
      description: 'The follow-up system that turns cold leads into $100k price drops over 6 months.',
    },
    {
      part: 4,
      wistiaId: 'bhjcu7uqir',
      title: 'Tying It All Together',
      description: 'Your roadmap to consistent deal flow, whether you DIY or use Homeflip.ai.',
    },
  ],
} as const;

// Type exports for use elsewhere
export type HubConfig = typeof hubConfig;

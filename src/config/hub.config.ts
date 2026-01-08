/**
 * Hub Configuration
 *
 * Centralized configuration for the Resource Hub.
 * This file is designed to be portable when the hub becomes a standalone product.
 *
 * @see magic-link-hub project for product vision and roadmap
 */

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
} as const;

// Type exports for use elsewhere
export type HubConfig = typeof hubConfig;

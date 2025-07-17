export const designTokens = {
  colors: {
    primary: '#005FA3',
    accent: '#79B435'
  },
  fontSizes: {
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem'
  },
  radii: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    full: '9999px'
  },
  shadows: {
    sm: '0 1px 2px rgba(0,0,0,0.05)',
    md: '0 4px 6px rgba(0,0,0,0.1)'
  },
  spacing: {
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem'
  },
  transitions: {
    default: 'all 0.2s ease-in-out'
  }
} as const
export type DesignTokens = typeof designTokens

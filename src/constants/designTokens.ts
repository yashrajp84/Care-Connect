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
    sm: '1rem',
    md: '0.375rem',
    lg: '0.5rem',
    full: '9999px'
  },
  shadows: {
    sm: '0px 0px 11.9px rgba(177, 177, 177, 0.22)',
    md: '0px 0px 11.9px rgba(177, 177, 177, 0.22)'
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

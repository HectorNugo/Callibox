import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: 'var(--color-brand)',
        'brand-light': 'var(--color-brand-light)',
        'brand-dark': 'var(--color-brand-dark)',
        ink: 'var(--color-ink)',
        'ink-soft': 'var(--color-ink-soft)',
        'ink-mute': 'var(--color-ink-mute)',
        surface: 'var(--color-surface)',
        'surface-alt': 'var(--color-surface-alt)',
        border: 'var(--color-border)',
        'calli-green': 'var(--color-calli-green)',
        'calli-green-light': 'var(--color-calli-green-light)',
        'calli-blue': 'var(--color-calli-blue)',
        'calli-blue-light': 'var(--color-calli-blue-light)',
        'calli-amber': 'var(--color-calli-amber)',
        'calli-amber-light': 'var(--color-calli-amber-light)',
        'calli-purple': 'var(--color-calli-purple)',
        'calli-purple-light': 'var(--color-calli-purple-light)',
        'calli-teal': 'var(--color-calli-teal)',
        'calli-teal-light': 'var(--color-calli-teal-light)',
      },
      fontFamily: {
        sans: ['var(--font-sora)', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif'],
      },
      borderRadius: {
        DEFAULT: '10px',
        sm: '6px',
      },
    },
  },
  plugins: [],
}

export default config

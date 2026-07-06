import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          white: '#FFFFFF',
          gray: '#F4F4F4',
          charcoal: '#1A1A1A',
        },
        accent: {
          indigo: '#2F3E63',
        },
        surface: {
          tint: '#EEF1F7',
        },
        line: {
          hairline: '#D8DCE3',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;

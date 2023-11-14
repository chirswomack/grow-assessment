import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'green': '#025B4B',
      'green-light': 'rgba(2, 91, 75, 0.10)',
      'avocado-200': '#ECF1E0',
      'avocado-300': '#E0E9CB',
      'marigold': '#E68A00',
      'marigold-200': '#FAE7CC',
      'neutral-000': '#FFF',
      'neutral-100': '#F5F7F7',
      'neutral-300': '#E7EAEB',
      'neutral-400': '#D4D8D9',
      'neutral-500': '#A7AAAB',
      'neutral-600': '#737680',
      'neutral-900': '#05090D',
      'black': '#000'
    },
    fontFamily: {
      sans: 'Poppins, sans-serif',
      serif: 'Lora, serif'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'blunt2px': '0px 2px 0px 0px rgba(2, 91, 75, 0.10)'
      },
      fontSize: {
        sm: ['14px', '16px'],
        '4.5': ['40px', '60px']
      }
    },
  },
  plugins: [],
}
export default config

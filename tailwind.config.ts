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
      'green-300': '#4d8b80',
      'ivy': '#B3CEC9',
      'avocado-200': '#ECF1E0',
      'avocado-300': '#E0E9CB',
      'marigold': '#E68A00',
      'marigold-200': '#FAE7CC',
      'neutral-000': '#FFF',
      'neutral-100': '#F5F7F7',
      'neutral-100-hover': 'rgb(247, 247, 247, 0.5)',
      'neutral-300': '#E7EAEB',
      'neutral-400': '#D4D8D9',
      'neutral-500': '#A7AAAB',
      'neutral-600': '#737680',
      'neutral-900': '#05090D',
      'black': '#000',
      'text-primary': '#020202'
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
        'blunt2px': '0px 2px 0px 0px rgba(2, 91, 75, 0.10)',
        'card': '0px 2px 0px 1px rgba(5, 9, 13, 0.06)',
        'popover': '0px 4px 24px 0px #0000001F'
      },
      fontSize: {
        sm2: ['14px', '16px'],
        '3xl': ['28px', '42px'],
        '4xl': ['40px', '60px']
      }
    },
  },
  plugins: [],
}
export default config

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'piko-purple': '#582C8D',
        'piko-plum': '#3E1C6D',
        'piko-lilac': '#9A6AFD',
        'piko-teal': '#14B8A6',
        'piko-green': '#10B981',
        'piko-soft-grey': '#F5F7FA',
        'piko-black': '#1A1A1A',
        'piko-medium-grey': '#555555',
        'piko-light-grey': '#888888',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': ['56px', { lineHeight: '1.4', fontWeight: '700' }],
        'h2': ['44px', { lineHeight: '1.4', fontWeight: '600' }],
        'h3': ['32px', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
      },
      spacing: {
        'section-mobile': '50px',
        'section-tablet': '70px',
        'section-desktop': '100px',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'fade-up-delayed': 'fadeUp 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-up-delayed': 'slideUp 0.7s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #3E1C6D 0%, #582C8D 50%, #9A6AFD 100%)',
      },
    },
  },
  plugins: [],
};

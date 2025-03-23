/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      extend: {
        colors: {
          'cream': '#fdf0d5',
          'red-primary': '#d00c1c',
          'red-dark': '#780000',
          'blue-light': '#669bcc',
          'blue-dark': '#003049',
          'gray': {
            50: '#f9fafb',
            100: '#f3f4f6',
            200: '#e5e7eb',
            300: '#d1d5db',
            400: '#9ca3af',
            500: '#6b7280',
            600: '#4b5563',
            700: '#374151',
            800: '#1f2937',
            900: '#111827',
          },
          'dark': {
            'bg': '#121212',
            'surface': '#1e1e1e',
            'border': '#2e2e2e',
            'muted': '#6b7280',
            'text': '#f9fafb',
          },
          'light': {
            'bg': '#ffffff',
            'surface': '#f3f4f6',
            'border': '#e5e7eb',
            'muted': '#6b7280',
            'text': '#18273a',
          }
        },
        fontFamily: {
          'sans': ['Poppins', 'sans-serif'],
          'arabic': ['Tajawal', 'sans-serif'],
        },
        boxShadow: {
          'dark': '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.14)',
        },
        typography: (theme) => ({
          DEFAULT: {
            css: {
              color: theme('colors.light.text'),
              a: {
                color: theme('colors.blue-light'),
              },
              h1: {
                color: theme('colors.blue-dark'),
              },
              h2: {
                color: theme('colors.blue-dark'),
              },
              h3: {
                color: theme('colors.blue-dark'),
              },
              h4: {
                color: theme('colors.blue-dark'),
              },
            },
          },
          dark: {
            css: {
              color: theme('colors.dark.text'),
              a: {
                color: theme('colors.blue-light'),
              },
              h1: {
                color: theme('colors.blue-light'),
              },
              h2: {
                color: theme('colors.blue-light'),
              },
              h3: {
                color: theme('colors.blue-light'),
              },
              h4: {
                color: theme('colors.blue-light'),
              },
            },
          },
        }),
        animation: {
          blob: "blob 7s infinite",
        },
        keyframes: {
          blob: {
            "0%": {
              transform: "translate(0px, 0px) scale(1)",
            },
            "33%": {
              transform: "translate(30px, -50px) scale(1.1)",
            },
            "66%": {
              transform: "translate(-20px, 20px) scale(0.9)",
            },
            "100%": {
              transform: "translate(0px, 0px) scale(1)",
            },
          },
        },
      },
    },
    plugins: [],
  }
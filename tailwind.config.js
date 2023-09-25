/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@sira-ui/tailwind')({
      themes: [
        {
          name: 'custom',
          colorScheme: 'dark' | 'light',
          prefersColorScheme: true,
          colors: {
            primary: '#634673',
            secondary: '#583533',
          },
        },
      ],
    }),
  ],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Background': "url('./src/assets/bg.png')",
      },
      colors: {
        'bg-color': '#805A8A',
        'button-file': '#D64D69',
        'pengurus': '#FEDCDA',
        'tahun-genap': '#F8E1B7',
        'tahun-ganjil': '#ED6B8F'
      }
    },
  },
  plugins: [],
}
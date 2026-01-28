/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2E5AA7',    // 青
        secondary: '#F8E6A0',  // 薄黄色
        accent: '#FFA62B',     // 黄色
        // neutral: '#6B7280',    
      }
    },
  },
  plugins: [],
}

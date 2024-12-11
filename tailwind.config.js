/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "bg-gray-700",
    "bg-green-500",
    "bg-yellow-500",
    "bg-red-500",
    "bg-blue-500",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


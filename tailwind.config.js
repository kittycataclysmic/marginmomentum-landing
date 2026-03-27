/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["'Bebas Neue'", "sans-serif"],
        mono: ["'DM Mono'", "monospace"],
        serif: ["'Libre Baskerville'", "serif"],
      },
      colors: {
        ink:    "#0A0A0A",
        ink2:   "#111111",
        border: "#1E1E1E",
        border2:"#2A2A2A",
        steel:  "#6B7280",
        ash:    "#E8E8E8",
        fog:    "#F4F4F4",
        dim:    "#3A3A3A",
      },
    },
  },
  plugins: [],
}

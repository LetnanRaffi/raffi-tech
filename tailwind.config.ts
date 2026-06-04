import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        raffi: {
          bg: "#0A0A0A",
          surface: "#111111",
          text: "#FFFFFF",
          muted: "#A1A1AA",
          accent: "#8B1E3F",
          border: "rgba(255,255,255,0.08)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        hero: ['"Times New Roman"', "Times", "serif"],
        title: ["var(--font-playfair)", '"Times New Roman"', "Times", "serif"],
      },
      boxShadow: {
        premium: "0 24px 80px rgba(0,0,0,0.42)",
      },
    },
  },
  plugins: [],
};

export default config;

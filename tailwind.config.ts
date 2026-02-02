import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark Mode Premium con acentos eléctricos
        primary: "#FFFFFF",
        secondary: "#A1A1AA",
        muted: "#71717A",
        border: "#27272A",
        surface: "#141414",
        background: "#0A0A0A",
        dark: "#000000",
        "dark-surface": "#1A1A1A",

        // Acentos eléctricos
        electric: {
          cyan: "#00D4FF",
          "cyan-light": "#67E8F9",
          "cyan-dark": "#00B4D8",
        },
        accent: {
          red: "#FF3B3B",
          "red-light": "#FF6B6B",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 212, 255, 0.6)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": {
            boxShadow:
              "0 0 5px rgba(0, 212, 255, 0.5), 0 0 10px rgba(0, 212, 255, 0.3)",
          },
          "100%": {
            boxShadow:
              "0 0 20px rgba(0, 212, 255, 0.8), 0 0 30px rgba(0, 212, 255, 0.5)",
          },
        },
      },
      boxShadow: {
        "glow-cyan": "0 0 20px rgba(0, 212, 255, 0.4)",
        "glow-red": "0 0 20px rgba(255, 59, 59, 0.4)",
        soft: "0 4px 20px rgba(0, 0, 0, 0.3)",
        card: "0 8px 30px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
export default config;

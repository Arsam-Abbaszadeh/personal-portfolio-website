import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: [
          "Geist Mono",
          "SFMono-Regular",
          "ui-monospace",
          "Menlo",
          "monospace",
        ],
      },
      colors: {
        ink: {
          950: "#08090a",
          900: "#0c0d0f",
          850: "#111316",
          800: "#181b1f",
          700: "#252a30",
        },
        accent: {
          DEFAULT: "#4ade80",
          soft: "#8ff3b2",
        },
      },
      boxShadow: {
        quiet: "0 18px 60px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
} satisfies Config;

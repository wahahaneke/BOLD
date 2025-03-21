import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        toby: {
          yellow: {
            50: "#fffde7",
            100: "#fff9c4",
            200: "#fff59d",
            300: "#fff176",
            400: "#ffee58",
            500: "#f7d900",
            600: "#fdd835",
            700: "#fbc02d",
            800: "#f9a825",
            900: "#f57f17",
          },
          green: {
            50: "#e8f5e9",
            100: "#c8e6c9",
            200: "#a5d6a7",
            300: "#81c784",
            400: "#66bb6a",
            500: "#55b175",
            600: "#4caf50",
            700: "#43a047",
            800: "#388e3c",
            900: "#2c563b",
          },
          black: "#0f0f0f",
          darkbg: "#1c1c1c",
          tan: "#d9d9bf",
          brown: {
            300: "#8d7b66",
            500: "#584c39",
            700: "#362a23",
          },
          red: "#d64828",
          blue: {
            300: "#a3b8cc",
            500: "#627a92",
            700: "#13384e",
          }
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "chart-1": {
          DEFAULT: "hsl(var(--chart-1))"
        },
        "chart-2": {
          DEFAULT: "hsl(var(--chart-2))"
        },
        "chart-3": {
          DEFAULT: "hsl(var(--chart-3))"
        },
        "chart-4": {
          DEFAULT: "hsl(var(--chart-4))"
        },
        "chart-5": {
          DEFAULT: "hsl(var(--chart-5))"
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        archivo: ["var(--font-archivo-black)", ...fontFamily.sans],
        montserrat: ["var(--font-montserrat)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

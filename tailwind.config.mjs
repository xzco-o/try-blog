/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        97: "26rem",
        98: "28rem",
        "12/10": "120%",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "bg-active": "#1E293B",
        "bg-hover": "#334155",
        "primary-hover": "#2563EB",
        "background-primary": "#1a1a1a",
        "text-normal": "#bebebe",
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        ob: "var(--text-accent)",
        "ob-normal": "var(--text-normal)",
        "ob-trans": "var(--background-trans)",
        "ob-backdrop": "var(--background-backdrop)",
        "ob-accent-55": "var(--bg-accent-55)",
        "ob-secondary": "var(--text-sub-accent)",
        "ob-bright": "var(--text-bright)",
        "ob-invert": "var(--text-invert)",
        "ob-dim": "var(--text-dim)",
        "ob-deep": {
          800: "var(--background-secondary)",
          900: "var(--background-primary)",
        },
        "ob-screen": "var(--app-screen-bg)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      "ob-deep-800": "var(--background-secondary)",
    },
    boxShadow: {
      ob: "var(--accent-shadow)",
      lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    },
    gradientColorStops: {
      "strong-gradient-start": "#87c2fd",
      "strong-gradient-end": "#dcb9fc",
    },
  },
  plugins: [],
};

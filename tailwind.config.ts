import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    fontFamily: {
      ego: ["var(--font-barracuda)"],
      inter: ["var(--font-inter)"],
    },

    extend: {
      colors: {
        EgostixBlue: "#001bff",
      },
      // fontFamily: {
      //   ego: ["var(--font-barracuda)"],
      // },
      animation: {
        "background-shine": "background-shine 5s linear infinite",
        slideIn: "slideIn 0.5s ease-out forwards",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(50%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "background-shine": {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

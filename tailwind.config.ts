import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        primaryAccent: "#7F1B1B",
        secondaryAccent: "#D26E19",
        primaryBg: "#000",
        secondaryBg: "#181818",
        tertiaryBg: "rgba(0,0,0,0.1)",
        textLight: "snow",
        textLighter: "#b3b3b3",
      },
      spacing: {
        wrapperWidth: "clamp(16rem, 93vw, 75rem)",
        wrapperPadding: "clamp(1.09rem, 1rem + 0.47vw, 1.33rem)",
      },
    },
  },
  plugins: [],
};
export default config;

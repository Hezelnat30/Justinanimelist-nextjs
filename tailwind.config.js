/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    borderWidth: {
      3: "3px",
    },
    extend: {
      boxShadow: {
        "images-shadow": "0 0 15px 3px rgba(239, 160, 11, 1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
        spartan: ["League Spartan", "sans-serif"],
      },
      colors: {
        color: {
          primary: "#51328E",
          accent: {
            100: "#F2AC20",
            200: "#F4B836",
          },
          secondary: "#effff8",
          dark: "#011627",
          light: "#f8fefa",
        },
      },
    },
  },
  plugins: [],
};

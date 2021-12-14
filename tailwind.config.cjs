const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.svelte", "./src/contents/*.ts"],
  // we have to safelist these because there are dynamically added to the dom via JS and for prod tailwind ships the classes via analyzing the markup without doing so these won't make there way to prod unless used somewhere on the markup.
  safelist: ["overflow-y-hidden", "mr-4"],
  theme: {
    extend: {
      screens: {
        lgx: "1140px",
        "1/2xl": "1442px",
      },
      backgroundImage: {
        "gitpod-kumquat-gradient":
          "linear-gradient(137.41deg, #FFAD33 14.37%, #FF8A00 91.32%)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      colors: {
        black: "var(--black)",
        "dark-grey": "var(--dark-grey)",
        "light-grey": "var(--light-grey)",
        "link-grey": "var(--link-grey)",
        divider: "var(--divider)",
        "sand-dark": "var(--sand-dark)",
        "sand-light": "var(--sand-light)",
        "off-white": "var(--off-white)",
        white: "var(--white)",
        "brand-hover": "var(--brand-hover)",
        "black-hover": "var(--black-hover)",

        gray: {
          900: "var(--black)",
          800: "var(--dark-grey)",
          700: "var(--light-grey)",
          400: "var(--divider)",
          300: "var(--sand-dark)",
          200: "var(--sand-light)",
          100: "var(--off-white)",
        },
        orange: {
          900: "var(--brand-almost-ripe)",
          800: "var(--brand-ripe)",
          700: "var(--brand-light)",
        },
        pink: {
          900: "var(--salmon)",
        },
      },
      fontSize: {
        h1: "var(--h1)",
        h2: "var(--h2)",
        h3: "var(--h3)",
        h4: "var(--h4)",
        h5: "var(--h5)",
        h6: "var(--h6)",
        "p-large": "var(--p-large)",
        "p-medium": "var(--p-medium)",
        "p-small": "var(--p-small)",
        "p-xsmall": "var(--p-xsmall)",
        "p-footer": "var(--p-footer)",
        "btn-small": "var(--btn-small)",
        "fine-print": "var(--fine-print)",
      },
      lineHeight: {
        "x-small": "var(--x-small)",
      },
      maxWidth: {
        row: "var(--row-max-width)",
        "container-normal": "var(--container-normal)",
      },
      spacing: {
        huge: "var(--huge)",
        "xx-large": "var(--xx-large)",
        "x-large": "var(--x-large)",
        large: "var(--large)",
        medium: "var(--medium)",
        small: "var(--small)",
        "x-small": "var(--x-small)",
        "xx-small": "var(--xx-small)",
        micro: "var(--micro)",
        macro: "var(--macro)",
      },
      boxShadow: {
        normal: "var(--shadow)",
        light: "var(--shadow-light)",
        medium: "var(--shadow-medium)",
        brand: "var(--shadow-brand)",
      },
      zIndex: {
        "-10": "-10",
      },
    },
    minHeight: {
      13: "3.375rem",
      ...defaultTheme.minHeight,
    },
  },
  plugins: [],
};

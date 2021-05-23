module.exports = {
  purge: {
    enabled: true,
    content: [
      "./src/components/**/template.jsx",
      "./src/pages/*.jsx",
      "./src/segments/**/template.jsx",
      "./src/templates/**/template.jsx",
    ],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        192: "48rem",
      },
    },
    fontFamily: {
      neue: ["Neue Round"],
      nikkyo: ["Nikkyo Sans"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

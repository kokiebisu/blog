const path = require("path")

module.exports = {
  stories: ["../src/**/*.stories.jsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async config => {
    config.resolve.modules = [
      path.resolve(__dirname, "..", "src"),
      "node_modules",
    ]

    // Alternately, for an alias:
    config.resolve.alias = {
      "@components": path.resolve(__dirname, "..", "src", "components"),
    }

    return config
  },
}

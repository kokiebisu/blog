const path = require("path")

module.exports = {
  stories: ["../src/components/**/*.stories.jsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async config => {
    config.resolve.modules = [
      path.resolve(__dirname, "..", "src"),
      "node_modules",
    ]

    config.resolve.alias = {
      "@components": path.resolve(__dirname, "..", "src", "components"),
    }

    return config
  },
}

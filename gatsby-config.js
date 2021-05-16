require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "ここブロッ！",
    author: "Kenichi Okiebisu",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": "src/components",
          "@layouts": "src/layouts",
          "@pages": "src/pages",
          "@segments": "src/segments",
          "@providers": "src/providers",
          "@styles": "src/styles",
          "@templates": "src/templates",
          "@graphql": "src/graphql",
          "@hooks": "src/hooks",
        },
        extensions: ["js", "jsx"],
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    "gatsby-plugin-offline",
    "gatsby-plugin-scroll-reveal",
    {
      resolve: "gatsby-plugin-algolia",
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require("./src/utils/algolia-queries"),
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 980,
            },
          },
        ],
      },
    },
  ],
}

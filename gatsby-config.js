require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "ここブロッ！",
    author: "Kenichi Okiebisu",
  },
  plugins: [
    // {
    //   resolve: "gatsby-source-contentful",
    //   options: {
    //     spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
    //     accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
    //   },
    // },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "kokoblo",
        accessToken: process.env.PRISMIC_API_KEY,
        linkResolver: ({ node, key, value }) => article => `/${article.uid}`,
        schemas: {
          article: require("./src/model/article.json"),
        },
        shouldDownloadImage: ({ node, key, value }) => {
          // Return true to download the image or false to skip.
          return true
        },
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
    `gatsby-transformer-remark`,
  ],
}

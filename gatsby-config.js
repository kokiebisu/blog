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
        },
        extensions: ["js", "jsx"],
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    "gatsby-plugin-offline",
    "gatsby-plugin-scroll-reveal",
  ],
}

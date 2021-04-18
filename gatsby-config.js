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
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    "gatsby-plugin-offline",
    "gatsby-plugin-scroll-reveal",
  ],
}

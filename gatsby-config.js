module.exports = {
  siteMetadata: {
    title: "ここブロッ！",
    author: "Kenichi Okiebisu",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://localhost:1337",
        contentTypes: ["article", "user"],
        queryLimit: 1000,
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-offline",
  ],
}

require("dotenv").config()

const siteMetadata = {
  title: "ここブロッ！",
  author: "Kenichi Okiebisu",
  description: "Kenichi's blog",
  keywords: ["ソフトウェアエンジニア", "カナダ"],
  siteUrl: "https://www.kocoblo.com",
}

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `article`,
        path: `${__dirname}/src/contents/articles`,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
            },
          },
        ],
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
    "gatsby-plugin-dark-mode",
    "gatsby-plugin-offline",
    "gatsby-plugin-scroll-reveal",
    {
      resolve: "gatsby-plugin-algolia",
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.GATSBY_ALGOLIA_ADMIN_API_KEY,
        queries: require("./src/utils/algolia-queries"),
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-s3",
      options: {
        bucketName: "kocoblo.com",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          // without options
          "gatsby-remark-normalize-paths",
          // or
          // with options
          {
            resolve: "gatsby-remark-normalize-paths",
            options: {
              pathFields: ["keyword"],
            },
          },
        ],
      },
    },
    // {
    //   resolve: "gatsby-plugin-manifest",
    //   options: {
    //     name: "A learning, teaching and writing software engineer",
    //     short_name: "Kocoblo",
    //     start_url: "/",
    //     background_color: "#fff",
    //     theme_color: "#525dce",
    //     display: "standalone",
    //     // icon: 'assets/logo.png',
    //   },
    // },
    {
      resolve: "gatsby-plugin-eslint-v2",
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
  ],
}

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
        path: `${__dirname}/contents/articles`,
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
          "@context": "src/context",
          "@meta": "src/meta",
          "@utils": "src/utils",
        },
        extensions: ["js", "jsx"],
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    "gatsby-plugin-dark-mode",
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: ["**/*.{js,jpg,png,html,css}"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: "[data-sal]", // Selector of the elements to be animated
        animateClassName: "sal-animate", // Class name which triggers animation
        disabledClassName: "sal-disabled", // Class name which defines the disabled state
        rootMargin: "0% 50%", // Corresponds to root's bounding box margin
        enterEventName: "sal:in", // Enter event name
        exitEventName: "sal:out", // Exit event name
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
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Kocoblo`,
        short_name: `kocoblo`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `./favicon.png`,
        cache_busting_mode: "none",
      },
    },
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

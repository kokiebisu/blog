const path = require("path")
const readingTime = require("reading-time")

/**
 * Adds a `ReadingTime` GraphQL type to represent data from the `reading-time` library.
 */
exports.createSchemaCustomization = gatsbyContext => {
  const { actions, schema } = gatsbyContext
  const { createTypes } = actions

  const ReadingTime = schema.buildObjectType({
    name: "ReadingTime",
    fields: {
      text: "String!",
      minutes: "Int!",
      time: "Int!",
      words: "Int!",
    },
  })

  createTypes([ReadingTime])
}

/**
 * Adds a `readingTime` field to `PrismicBlogPost`.
 *
 * NOTE: This field will only be processed during build-time. During a
 * client-side Prismic preview, `readingTime` be the non-preview value.
 */
exports.createResolvers = gatsbyContext => {
  const { createResolvers } = gatsbyContext

  const resolvers = {
    PrismicArticle: {
      readingTime: {
        type: "ReadingTime",
        resolve: source => {
          if (source.data?.body?.text) {
            return readingTime(source.data?.body?.text)
          } else {
            return null
          }
        },
      },
    },
  }

  createResolvers(resolvers)
}

/**
 * Creates the page for a specific `Article` model
 */
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  try {
    const res = await graphql(`
      query {
        allPrismicArticle {
          edges {
            node {
              id
              uid
              type
              last_publication_date(fromNow: true)
              data {
                title {
                  text
                }
                image {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(
                        height: 400
                        placeholder: BLURRED
                        formats: WEBP
                      )
                    }
                  }
                }
                body {
                  html
                  text
                }
                tags {
                  keywords {
                    document {
                      ... on PrismicTag {
                        id
                        data {
                          name {
                            text
                          }
                        }
                      }
                    }
                  }
                }
              }
              readingTime {
                text
                words
              }
            }
          }
        }
      }
    `)
    if (res.errors) {
      console.error(res.errors)
    }

    const articleTemplate = path.resolve(
      "./src/templates/template-article/index.jsx"
    )

    res.data.allPrismicArticle.edges.forEach(({ node }) => {
      createPage({
        component: articleTemplate,
        path: `/blog/${node.uid}`,
        context: {
          article: node,
        },
      })
    })
  } catch (err) {
    console.error(err)
  }
}

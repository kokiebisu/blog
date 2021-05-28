const path = require("path")
const readingTime = require("reading-time")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

/**
 * Creates the page for a specific `Article` model
 */
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const articleTemplate = path.resolve(
    "src/templates/template-article/index.jsx"
  )

  try {
    const res = await graphql(`
      query {
        allMdx(
          sort: { fields: frontmatter___date, order: DESC }
          filter: { frontmatter: { published: { eq: true } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)

    const articles = res.data.allMdx.edges

    articles.forEach(
      (
        {
          node: {
            fields: { slug },
          },
        },
        index
      ) => {
        const previous =
          index === articles.length - 1 ? null : articles[index + 1]
        const next = index === 0 ? null : articles[index - 1]
        createPage({
          path: slug,
          component: articleTemplate,
          context: {
            slug,
            previous,
            next,
          },
        })
      }
    )
  } catch (err) {
    console.error(err)
  }
}

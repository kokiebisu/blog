const path = require("path")
const readingTime = require("reading-time")

/**
 * Creates the page for a specific `Article` model
 */
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  try {
    const res = await graphql(`
      query {
        allMdx {
          edges {
            node {
              id
              frontmatter {
                slug
                category
              }
            }
          }
        }
      }
    `)

    res.data.allMdx.edges.forEach(
      ({
        node: {
          frontmatter: { category, slug },
          id,
        },
      }) => {
        createPage({
          path: `/blog/${category}/${slug}`,
          component: require.resolve(
            "./src/templates/template-article/index.jsx"
          ),
          context: {
            id,
          },
        })
      }
    )
    if (res.errors) {
      console.error(res.errors)
    }
  } catch (err) {
    console.error(err)
  }
}

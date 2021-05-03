const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  try {
    const res = await graphql(`
      query {
        allContentfulArticle {
          edges {
            node {
              slug
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

    res.data.allContentfulArticle.edges.forEach(edge => {
      createPage({
        component: articleTemplate,
        path: `/blog/${edge.node.slug}`,
        context: {
          slug: edge.node.slug,
        },
      })
    })
  } catch (err) {
    console.error(err)
  }
}

const path = require("path")

// module.exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions

//   if (node.data && Object.keys(node.data) && node.data.body.text) {
//     const { text } = node.data.body
//     createNodeField({
//       node,
//       name: "readingTime",
//       value: readingTime(text),
//     })
//   }
// }

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  try {
    const res = await graphql(`
      query {
        allPrismicArticle {
          nodes {
            uid
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

    res.data.allPrismicArticle.nodes.forEach(node => {
      createPage({
        component: articleTemplate,
        path: `/blog/${node.uid}`,
        context: {
          slug: node.uid,
        },
      })
    })
  } catch (err) {
    console.error(err)
  }
}

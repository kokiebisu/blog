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
      console.log("uid", node.uid)
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

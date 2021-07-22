const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const { createRemoteFileNode } = require("gatsby-source-filesystem")
const moment = require("moment")

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(`
    type Mdx implements Node {
      frontmatter: Frontmatter
      featuredImg: File @link(from: "featuredImg___NODE")
    }
    type Frontmatter {
      title: String!
      coverImg: String!
      fromNow: String!
    }
  `)
}

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    Frontmatter: {
      fromNow: {
        resolve(source, _args, _context, _info) {
          return moment(source.date.split("T")[0]).fromNow()
        },
      },
    },
  }
  createResolvers(resolvers)
}

exports.onCreateNode = async ({
  node,
  actions: { createNode, createNodeField },
  store,
  cache,
  createNodeId,
  getNode,
}) => {
  if (node.internal.type === "Mdx" && node.frontmatter.coverImg !== null) {
    let fileNode = await createRemoteFileNode({
      url: node.frontmatter.coverImg, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      cache, // Gatsby's cache
      store, // Gatsby's Redux store
    })
    // if the file was created, attach the new node to the parent node
    if (fileNode) {
      node.featuredImg___NODE = fileNode.id
    }
  }
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
              excerpt(pruneLength: 100)
              body
              timeToRead
              fields {
                slug
              }
              featuredImg {
                childImageSharp {
                  gatsbyImageData
                }
              }
              frontmatter {
                category
                title
                keywords
                photographer
                published
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

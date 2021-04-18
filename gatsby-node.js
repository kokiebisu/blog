const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const articleTemplate = path.resolve("./src/templates/article.js")
  const {
    mostRecentArticle: {
      edges: { mostRecentArticleEdge },
    },
    recentArticles: {
      edges: { recentArticlesEdges },
    },
    articles: {
      edges: { articlesEdges },
    },
  } = await graphql(`
    query {
      mostRecentArticle: allContentfulArticle(
        sort: { fields: publishedDate, order: DESC }
        limit: 1
      ) {
        edges {
          node {
            slug
          }
        }
      }
      recentArticles: allContentfulArticle(
        sort: { fields: publishedDate, order: DESC }
        limit: 3
        skip: 1
      ) {
        edges {
          node {
            slug
          }
        }
      }
      articles: allContentfulArticle(
        sort: { fields: publishedDate, order: DESC }
        skip: 4
      ) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  createPage({
    component: articleTemplate,
    path: `/blog/${mostRecentArticleEdge[0].node.slug}`,
    context: {
      slug: mostRecentArticleEdge[0].node.slug,
    },
  })

  recentArticlesEdges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })

  articlesEdges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}

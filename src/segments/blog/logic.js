import * as mockData from "./mock"
import { graphql, useStaticQuery } from "gatsby"

export const useBlog = () => {
  const {
    mostRecentArticle: { edges: mostRecentArticleEdge },
    recentArticles: { edges: recentArticlesEdges },
    articles: { edges: articlesEdges },
  } = useStaticQuery(graphql`
    query {
      mostRecentArticle: allContentfulArticle(
        sort: { fields: publishedDate, order: DESC }
        limit: 1
      ) {
        edges {
          node {
            id
            title
            body {
              raw
            }
            slug
            publishedDate(fromNow: true)
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
            id
            title
            body {
              raw
            }
            slug
            publishedDate(fromNow: true)
          }
        }
      }
      articles: allContentfulArticle(
        sort: { fields: publishedDate, order: DESC }
        skip: 4
      ) {
        edges {
          node {
            id
            title
            body {
              raw
            }
            slug
            publishedDate(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  `)
  const mostRecentArticle = mostRecentArticleEdge[0].node
  const recentArticles = recentArticlesEdges.map(({ node }) => node)
  const articles = articlesEdges.map(({ node }) => node)

  return { ...mockData, mostRecentArticle, recentArticles, articles }
}

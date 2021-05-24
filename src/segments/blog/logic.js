import * as mockData from "./mock"
import { graphql, useStaticQuery } from "gatsby"

export const useBlog = () => {
  const {
    mostRecentArticle: { edges: mostRecentArticleNodes },
    recentArticles: { edges: recentArticlesNodes },
    articles: { edges: articlesNodes },
  } = useStaticQuery(graphql`
    query {
      mostRecentArticle: allPrismicArticle(
        sort: { order: DESC, fields: last_publication_date }
        limit: 1
      ) {
        edges {
          node {
            id
            uid
            data {
              body {
                html
              }
              title {
                text
              }
              image {
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      placeholder: BLURRED
                      width: 980
                      formats: WEBP
                    )
                  }
                }
              }
            }
            type
            last_publication_date(fromNow: true)
            readingTime {
              text
              words
            }
          }
        }
      }
      recentArticles: allPrismicArticle(
        sort: { order: DESC, fields: last_publication_date }
        limit: 3
        skip: 1
      ) {
        edges {
          node {
            id
            uid
            data {
              body {
                html
              }
              title {
                text
              }
              image {
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      placeholder: BLURRED
                      width: 980
                      formats: WEBP
                    )
                  }
                }
              }
            }
            type
            last_publication_date(fromNow: true)
            readingTime {
              text
              words
            }
          }
        }
      }
      articles: allPrismicArticle(
        sort: { order: DESC, fields: last_publication_date }
        skip: 4
      ) {
        edges {
          node {
            id
            uid
            data {
              body {
                html
              }
              title {
                text
              }
              image {
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      placeholder: BLURRED
                      width: 980
                      formats: WEBP
                    )
                  }
                }
              }
            }
            type
            last_publication_date(fromNow: true)
            readingTime {
              text
              words
            }
          }
        }
      }
    }
  `)

  const mostRecentArticle = mostRecentArticleNodes.map(({ node }) => {
    return node
  })
  const recentArticles = recentArticlesNodes.map(({ node }) => {
    return node
  })
  const articles = articlesNodes.map(({ node }) => {
    return node
  })

  return { ...mockData, mostRecentArticle, recentArticles, articles }
}

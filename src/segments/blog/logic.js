import * as mockData from "./mock"
import { graphql, useStaticQuery } from "gatsby"

export const useBlog = () => {
  const {
    mostRecentArticle: { nodes: mostRecentArticleNodes },
    recentArticles: { nodes: recentArticlesNodes },
    articles: { nodes: articlesNodes },
  } = useStaticQuery(graphql`
    query {
      mostRecentArticle: allPrismicArticle(
        sort: { order: DESC, fields: last_publication_date }
        limit: 1
      ) {
        nodes {
          id
          uid
          tags
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
                    width: 980
                    placeholder: BLURRED
                    formats: WEBP
                  )
                }
              }
            }
            body {
              html
            }
          }
        }
      }
      recentArticles: allPrismicArticle(
        sort: { order: DESC, fields: last_publication_date }
        limit: 3
        skip: 1
      ) {
        nodes {
          id
          uid
          tags
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
                    width: 980
                    placeholder: BLURRED
                    formats: WEBP
                  )
                }
              }
            }
            body {
              html
            }
          }
        }
      }
      articles: allPrismicArticle(
        sort: { order: DESC, fields: last_publication_date }
        skip: 4
      ) {
        nodes {
          id
          uid
          tags
          type
          last_publication_date(fromNow: true)
          data {
            title {
              text
            }
            body {
              html
            }
          }
        }
      }
    }
  `)

  const mostRecentArticle = mostRecentArticleNodes[0]
  const recentArticles = recentArticlesNodes
  const articles = articlesNodes
  return { ...mockData, mostRecentArticle, recentArticles, articles }
}

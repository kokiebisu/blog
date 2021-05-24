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
                text
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
                text
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
              keywords {
                tag {
                  document {
                    ... on PrismicTag {
                      id
                      data {
                        color
                        name {
                          text
                        }
                      }
                    }
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
                text
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
              keywords {
                tag {
                  document {
                    ... on PrismicTag {
                      id
                      data {
                        color
                        name {
                          text
                        }
                      }
                    }
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
    return {
      uid: node.uid,
      last_publication_date: node.last_publication_date,
      readingTime: node.readingTime,
      title: node.data.title,
      body: node.data.body,
      keywords: node.data.keywords
        ? node.data.keywords.map(keyword => {
            return keyword.tag.document
          })
        : null,
      image: node.data.image,
    }
  })
  const recentArticles = recentArticlesNodes.map(({ node }) => {
    return {
      uid: node.uid,
      last_publication_date: node.last_publication_date,
      readingTime: node.readingTime,
      title: node.data.title,
      body: node.data.body,
      keywords: node.data.keywords.length
        ? node.data.keywords.map(keyword => {
            return keyword.tag.document
          })
        : null,
      image: node.data.image,
    }
  })
  const articles = articlesNodes.map(({ node }) => {
    return {
      uid: node.uid,
      last_publication_date: node.last_publication_date,
      readingTime: node.readingTime,
      title: node.data.title,
      body: node.data.body,
      keywords: node.data.keywords.length
        ? node.data.keywords.map(keyword => {
            return keyword.tag.document
          })
        : null,
      image: node.data.image,
    }
  })

  return { ...mockData, mostRecentArticle, recentArticles, articles }
}

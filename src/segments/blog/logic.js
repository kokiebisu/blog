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
            type
            last_publication_date(fromNow: true)
            data {
              title {
                text
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
            readingTime {
              text
              words
            }
          }
        }
      }
    }
  `)

  const mostRecentArticle = mostRecentArticleNodes[0].node
  const recentArticles = recentArticlesNodes
  const articles = articlesNodes

  return { ...mockData, mostRecentArticle, recentArticles, articles }
}

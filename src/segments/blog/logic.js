import * as mockData from "./mock"
import { graphql, useStaticQuery } from "gatsby"

export const useBlog = () => {
  const {
    allMdx: { edges },
  } = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
        limit: 1
      ) {
        edges {
          node {
            frontmatter {
              category
              date(fromNow: true)
              title
              coverImg {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, width: 980)
                }
              }
            }
            excerpt(pruneLength: 200)
            fields {
              slug
            }
            timeToRead
          }
        }
      }
    }
  `)

  const formattedArticles = edges.map(({ node }) => {
    return {
      excerpt: node.excerpt,
      slug: node.fields.slug,
      coverImg: node.frontmatter.coverImg,
      publishedDate: node.frontmatter.date,
      title: node.frontmatter.title,
      readTime: node.timeToRead,
      category: node.frontmatter.category,
    }
  })

  const mostRecentArticle = formattedArticles.slice(0, 1)
  const recentArticles =
    formattedArticles.length > 1 ? formattedArticles.slice(2, 5) : null
  const articles =
    formattedArticles.length > 5 ? formattedArticles.slice(6, 8) : null
  return { mostRecentArticle, recentArticles, articles }
}

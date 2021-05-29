import { graphql, useStaticQuery } from "gatsby"

export const useBlog = () => {
  const {
    allMdx: { edges },
  } = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
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
              keywords
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

  const formattedArticles = edges.map(
    ({
      node: {
        frontmatter: { coverImg, date, title, category, keywords },
        timeToRead,
        fields: { slug },
        excerpt,
      },
    }) => {
      return {
        excerpt,
        slug,
        coverImg,
        publishedDate: date,
        title,
        timeToRead,
        category,
        keywords,
      }
    }
  )

  console.log("fo", formattedArticles)

  const mostRecentArticle = formattedArticles.slice(0, 1)
  const recentArticles =
    formattedArticles.length > 1 ? formattedArticles.slice(1, 2) : null
  const articles =
    formattedArticles.length > 5 ? formattedArticles.slice(6, 8) : null

  console.log("most", mostRecentArticle)
  return { mostRecentArticle, recentArticles, articles }
}

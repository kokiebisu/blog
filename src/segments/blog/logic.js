import { useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FilterContext } from "../../context/filter"

export const useBlog = () => {
  const { filterState } = useContext(FilterContext)
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

  let formattedArticles = edges.map(
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

  formattedArticles =
    filterState.filterBy === "latest"
      ? formattedArticles
      : formattedArticles.filter(article =>
          article.keywords.includes(filterState.filterBy)
        )

  const size = formattedArticles.length > 12 ? 12 : formattedArticles.length

  const mostRecentArticle = formattedArticles.slice(0, 1)
  const recentArticles =
    size > 1 && size <= 4 ? formattedArticles.slice(1, size) : null
  const articles =
    size > 4 && size <= 12 ? formattedArticles.slice(5, size) : null

  return { mostRecentArticle, recentArticles, articles }
}

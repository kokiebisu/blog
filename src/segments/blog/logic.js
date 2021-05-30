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
            excerpt(pruneLength: 10)
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
              date(fromNow: true)
              photographer
              published
            }
          }
        }
      }
    }
  `)

  let formattedArticles = edges.map(
    ({
      node: {
        frontmatter: { date, title, category, keywords },
        timeToRead,
        fields: { slug },
        excerpt,
        featuredImg,
      },
    }) => {
      return {
        excerpt,
        slug,
        coverImg: featuredImg,
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

  const mostRecentArticle = formattedArticles.splice(0, 1)

  const recentArticles =
    formattedArticles.length > 4
      ? formattedArticles.splice(0, 4)
      : formattedArticles
  const articles =
    formattedArticles.length > 4
      ? formattedArticles.splice(0, 6)
      : formattedArticles
  return { mostRecentArticle, recentArticles, articles }
}

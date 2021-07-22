import { useContext, useMemo } from "react"
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
            excerpt(pruneLength: 100)
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
              fromNow
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
        frontmatter: { fromNow, title, category, keywords },
        timeToRead,
        fields,
        excerpt,
        featuredImg,
      },
    }) => {
      return {
        excerpt,
        slug: fields.slug,
        coverImg: featuredImg,
        publishedDate: fromNow,
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
      : useMemo(
          formattedArticles.filter(article =>
            article.keywords.includes(filterState.filterBy)
          ),
          [filterState.filterBy]
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

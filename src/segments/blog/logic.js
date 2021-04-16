import { graphql, useStaticQuery } from "gatsby"

export const useBlog = () => {
  const {
    allStrapiArticle: { edges: articles },
  } = useStaticQuery(graphql`
    query {
      allStrapiArticle {
        edges {
          node {
            id
            title
            content
          }
        }
      }
    }
  `)
  return { articles }
}

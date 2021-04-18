import * as mockData from "./mock"
import { graphql, useStaticQuery } from "gatsby"

export const useBlog = () => {
  const {
    allContentfulArticle: { edges },
  } = useStaticQuery(graphql`
    query {
      allContentfulArticle(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            id
            title
            body {
              raw
            }
            slug
            publishedDate(fromNow: true)
          }
        }
      }
    }
  `)
  const articles = edges.map(({ node }) => node)
  console.log("ss", articles)
  return { ...mockData }
}

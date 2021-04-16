import * as mockData from "./mock"

export const useBlog = () => {
  // const {
  //   allStrapiArticle: { edges: articles },
  // } = useStaticQuery(graphql`
  //   query {
  //     allStrapiArticle {
  //       edges {
  //         node {
  //           id
  //           title
  //           content
  //           created_at
  //         }
  //       }
  //     }
  //   }
  // `)
  return mockData
}

export const GET_ARTICLES_QUERY = graphql`
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
`

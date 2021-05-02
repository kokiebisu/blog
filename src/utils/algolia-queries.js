const indexName = `Article`

const articleQuery = `{
  allContentfulArticle {
    edges {
      node {
        body {
          raw
        }
        contentful_id
        createdAt
        id
        publishedDate
        slug
        title
        updatedAt
      }
    }
  }
}

`

const queries = [
  {
    query: articleQuery,
    transformer: ({ data }) =>
      data.allContentfulArticle.edges.map(({ node: { id, ...rest } }) => {
        return {
          objectID: id,
          ...rest,
        }
      }),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]

module.exports = queries

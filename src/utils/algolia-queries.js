const indexName = `Article`

const articleQuery = `{
  allPrismicArticle {
    nodes {
      id
      uid
      tags
      type
      last_publication_date(fromNow: true)
      data {
        title {
          text
        }
        image {
          fluid {
            base64
            sizes
            src
          }
        }
        body {
          html
        }
      }
    }
  }
}
`

const queries = [
  {
    query: articleQuery,
    transformer: ({ data }) =>
      data.allPrismicArticle.nodes.map(({ id, ...rest }) => {
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

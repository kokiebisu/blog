const indexName = `Article`

const articleQuery = `{
  allPrismicArticle {
    edges {
      node {
        id
        uid
        tags
        type
        last_publication_date(fromNow: true)
        data {
          title {
            text
          }
          body {
            html
          }
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
      data.allPrismicArticle.edges.map(
        ({
          node: {
            id,
            data: { title, body },
            ...rest
          },
        }) => {
          return {
            objectID: id,
            title: title.text,
            body: body.html,
            ...rest,
          }
        }
      ),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]

module.exports = queries

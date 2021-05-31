const indexName = `Article`

const articleQuery = `{
    allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              category
              date(fromNow: true)
              title
              published
              keywords
              photographer
            }
            excerpt(pruneLength: 100)
            fields {
              slug
            }
            timeToRead
          }
        }
    }
  
}
`

const queries = [
  {
    query: articleQuery,
    transformer: ({ data }) =>
      data.allMdx.edges.map(
        ({ node: { id, frontmatter, excerpt, fields, ...rest } }) => {
          return {
            objectID: id,
            title: frontmatter.title,
            category: frontmatter.category,
            date: frontmatter.date,
            excerpt,
            slug: fields.slug,
            ...rest,
          }
        }
      ),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]

module.exports = queries

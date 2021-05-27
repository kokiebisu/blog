// const indexName = `Article`

// const articleQuery = `{
//   allPrismicArticle {
//     edges {
//       node {
//         id
//         uid
//         data {
//           body {
//             html
//           }
//           title {
//             text
//           }
//           image {
//             localFile {
//               childImageSharp {
//                 gatsbyImageData(placeholder: BLURRED, width: 980, formats: WEBP)
//               }
//             }
//           }
//         }
//         type
//         last_publication_date(fromNow: true)
//         readingTime {
//           text
//           words
//         }
//       }
//     }
//   }
// }
// `

// const queries = [
//   {
//     query: articleQuery,
//     transformer: ({ data }) =>
//       data.allPrismicArticle.edges.map(
//         ({
//           node: {
//             id,
//             data: { title, body },
//             ...rest
//           },
//         }) => {
//           return {
//             objectID: id,
//             title: title.text,
//             body: body.html,
//             ...rest,
//           }
//         }
//       ),
//     indexName,
//     settings: { attributesToSnippet: [`excerpt:20`] },
//   },
// ]

// module.exports = queries

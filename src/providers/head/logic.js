import { graphql, useStaticQuery } from "gatsby"

export const useHead = text => {
  let {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  title = `${text} | ${title}`

  return { title }
}

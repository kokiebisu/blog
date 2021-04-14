import { graphql, useStaticQuery } from "gatsby"

export const useFooter = () => {
  const {
    site: {
      siteMetadata: { author },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return { author }
}

import { graphql, useStaticQuery } from "gatsby"

export const useFooter = () => {
  const {
    data: {
      site: {
        siteMetadata: { author },
      },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetdata {
          author
        }
      }
    }
  `)

  return { author }
}

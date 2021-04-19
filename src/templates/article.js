import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    contentfulArticle(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM DD, YYYY")
    }
  }
`

const ArticleTemplate = ({
  data: {
    contentfulArticle: { title, publishedDate },
  },
}) => {
  return (
    <div>
      <div>{title}</div>
      <div>{publishedDate}</div>
    </div>
  )
}

export default ArticleTemplate

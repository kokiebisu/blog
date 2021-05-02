import React from "react"
import { graphql } from "gatsby"
import { DetailedArticleTemplate } from "./template"

const DetailedArticle = ({ data: { contentfulArticle } }) => {
  return <DetailedArticleTemplate {...contentfulArticle} />
}

export const query = graphql`
  query($slug: String!) {
    contentfulArticle(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM DD, YYYY")
    }
  }
`

export default DetailedArticle

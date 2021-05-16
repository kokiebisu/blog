import React from "react"
import { graphql } from "gatsby"
import { DetailedArticleTemplate } from "./template"

const DetailedArticle = ({
  data: {
    prismicArticle: { data },
  },
}) => {
  return <DetailedArticleTemplate {...data} />
}

export const query = graphql`
  query MyQuery($uid: StringQueryOperatorInput = {}) {
    prismicArticle(uid: $uid) {
      data {
        body {
          html
        }
        title {
          text
        }
      }
    }
  }
`

export default DetailedArticle

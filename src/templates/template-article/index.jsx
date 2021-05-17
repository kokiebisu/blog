import React from "react"
import { DetailedArticleTemplate } from "./template"

const DetailedArticle = ({ pageContext }) => {
  const { data, ...rest } = pageContext.article
  return (
    <DetailedArticleTemplate
      {...rest}
      title={data.title.text}
      image={data.image.localFile}
      body={data.body.html}
      tags={data.tags}
    />
  )
}

export default DetailedArticle

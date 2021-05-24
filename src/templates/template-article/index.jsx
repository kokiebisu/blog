import React from "react"
import { DetailedArticleTemplate } from "./template"
import PropTypes from "prop-types"

const DetailedArticle = ({ pageContext }) => {
  const { data, ...rest } = pageContext.article
  return (
    <DetailedArticleTemplate
      {...rest}
      title={data.title.text}
      image={data.image.localFile}
      body={data.body}
      tags={data.tags}
    />
  )
}

DetailedArticle.propTypes = {
  pageContext: PropTypes.object,
}

export default DetailedArticle

import React from "react"
import * as PropTypes from "prop-types"

export const DetailedArticleTemplate = ({ body, title }) => {
  return (
    <div>
      <div>{title.text}</div>
      <div>{body.html}</div>
    </div>
  )
}

DetailedArticleTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
}

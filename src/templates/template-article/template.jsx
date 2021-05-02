import React from "react"
import * as PropTypes from "prop-types"

export const DetailedArticleTemplate = ({ title, publishedDate }) => {
  return (
    <div>
      <div>{title}</div>
      <div>{publishedDate}</div>
    </div>
  )
}

DetailedArticleTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
}

import React from "react"
import { Link } from "gatsby"
import { AbstractArticleTemplate } from "./template"
import PropTypes from "prop-types"

export const AbstractArticle = ({ slug, ...props }) => {
  return (
    <Link to={slug}>
      <AbstractArticleTemplate {...props} />
    </Link>
  )
}

AbstractArticle.propTypes = {
  slug: PropTypes.string,
}

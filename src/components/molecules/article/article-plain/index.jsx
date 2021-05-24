import React from "react"
import { Link } from "gatsby"
import { PlainArticleTemplate } from "./template"
import PropTypes from "prop-types"

export const PlainArticle = ({ slug, ...props }) => {
  return (
    <Link to={slug}>
      <PlainArticleTemplate {...props} />
    </Link>
  )
}

PlainArticle.propTypes = {
  slug: PropTypes.string,
}

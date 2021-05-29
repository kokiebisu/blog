import React from "react"
import { Link } from "gatsby"
import { HeadArticleTemplate } from "./template"
import PropTypes from "prop-types"

export const HeadArticle = ({ slug, ...props }) => {
  return (
    <Link to={slug}>
      <HeadArticleTemplate {...props} />
    </Link>
  )
}

HeadArticle.propTypes = {
  slug: PropTypes.string,
}

import React from "react"
import { AbstractArticle } from "./article-abstract"
import { HeadArticle } from "./article-head"
import { PlainArticle } from "./article-plain"
import PropTypes from "prop-types"

export const Article = ({ variant, ...props }) => {
  const variants = {
    head: <HeadArticle {...props} />,
    plain: <PlainArticle {...props} />,
    abstract: <AbstractArticle {...props} />,
  }
  return variants[variant]
}

Article.propTypes = {
  variant: PropTypes.string,
}

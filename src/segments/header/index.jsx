import React from "react"
import { ArticleHeader } from "./header-article"
import { GeneralHeader } from "./header-general"
import PropTypes from "prop-types"

export const Header = ({ variant, ...props }) => {
  const variants = {
    article: <ArticleHeader {...props} />,
    general: <GeneralHeader {...props} />,
  }
  return variants[variant]
}

Header.propTypes = {
  variant: PropTypes.string,
}

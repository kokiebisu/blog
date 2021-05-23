import React from "react"
import { ArticleHeader } from "./header-article"
import { GeneralHeader } from "./header-general"
import PropTypes from "prop-types"

export const Header = ({ variant }) => {
  const variants = {
    article: <ArticleHeader />,
    general: <GeneralHeader />,
  }
  return variants[variant]
}

Header.propTypes = {
  variant: PropTypes.string,
}

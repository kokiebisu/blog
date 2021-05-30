import React from "react"
import { GeneralHeader } from "./header-general"
import { BlogHeader } from "./header-blog"
import { BlogsHeader } from "./header-blogs"
import PropTypes from "prop-types"

export const Header = ({ variant, ...props }) => {
  const variants = {
    general: <GeneralHeader {...props} />,
    blog: <BlogHeader {...props} />,
    blogs: <BlogsHeader {...props} />,
  }
  return variants[variant]
}

Header.propTypes = {
  variant: PropTypes.string,
}

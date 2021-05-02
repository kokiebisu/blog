import React from "react"
import * as PropType from "prop-types"
import { Link } from "gatsby"
import { NavTextTemplate, NavTextTemplateProps } from "./template"

export const NavText = ({ to, ...props }) => {
  return (
    <Link to={to}>
      <NavTextTemplate {...props} />
    </Link>
  )
}

NavText.propTypes = {
  to: PropType.string.isRequired,
  ...NavTextTemplateProps,
}

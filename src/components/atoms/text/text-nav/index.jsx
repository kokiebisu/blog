import React from "react"
import { NavTextTemplate } from "./template"
import PropTypes from "prop-types"

export const NavText = ({ ...props }) => {
  return <NavTextTemplate {...props} />
}

NavText.propTypes = {
  to: PropTypes.string,
}

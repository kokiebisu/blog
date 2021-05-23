import React from "react"
import { NavTextTemplate } from "./template"
import { useNavText } from "./logic"
import PropTypes from "prop-types"

export const NavText = ({ to, ...props }) => {
  const data = useNavText({ to })
  return <NavTextTemplate {...props} {...data} />
}

NavText.propTypes = {
  to: PropTypes.string,
}

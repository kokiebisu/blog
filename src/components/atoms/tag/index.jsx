import React from "react"
import { TagTemplate } from "./template"
import PropTypes from "prop-types"

export const Tag = ({ ...props }) => {
  return <TagTemplate {...props} />
}

Tag.propTypes = {
  redirectTo: PropTypes.string,
}

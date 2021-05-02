import React from "react"
import * as PropType from "prop-types"

export const NavTextTemplate = ({ label }) => {
  return (
    <p className="text-gray-400 hover:text-green-500 transition font-bold">
      {label}
    </p>
  )
}

export const NavTextTemplateProps = {
  label: PropType.string.isRequired,
}

NavTextTemplate.propTypes = {
  ...NavTextTemplateProps,
}

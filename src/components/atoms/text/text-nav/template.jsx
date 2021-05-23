import React from "react"
import PropTypes from "prop-types"

export const NavTextTemplate = ({ label }) => {
  return (
    <div className="text-gray-400 hover:text-green-500 transition font-bold">
      {label}
    </div>
  )
}

NavTextTemplate.propTypes = {
  label: PropTypes.string,
  handleRedirect: PropTypes.func,
}

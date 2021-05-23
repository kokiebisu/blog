import React from "react"
import PropTypes from "prop-types"

export const NavTextTemplate = ({ label, handleRedirect }) => {
  return (
    <button
      onClick={handleRedirect}
      className="text-gray-400 hover:text-green-500 transition font-bold"
    >
      {label}
    </button>
  )
}

NavTextTemplate.propTypes = {
  label: PropTypes.string,
  handleRedirect: PropTypes.func,
}

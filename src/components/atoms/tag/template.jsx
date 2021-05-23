import React from "react"
import PropTypes from "prop-types"

export const TagTemplate = ({ label }) => {
  return (
    <div className="hover:bg-blue-400 hover:text-white hover:border-transparent transition inline-block text-xs px-2 py-1 border border-gray-400 rounded">
      {label}
    </div>
  )
}

TagTemplate.propTypes = {
  label: PropTypes.string,
  handleRedirect: PropTypes.func,
}

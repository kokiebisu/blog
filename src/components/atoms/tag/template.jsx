import React from "react"
import PropTypes from "prop-types"

export const TagTemplate = ({ label, color }) => {
  return (
    <div
      className={`hover:bg-${color}-400 hover:text-white hover:border-transparent transition inline-block text-xs px-2 py-1 border border-gray-400 dark:border-white dark:text-white rounded`}
    >
      {label}
    </div>
  )
}

TagTemplate.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  handleRedirect: PropTypes.func,
}

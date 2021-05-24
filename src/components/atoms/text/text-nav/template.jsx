import React from "react"
import PropTypes from "prop-types"

export const NavTextTemplate = ({ label }) => {
  return (
    <div className="text-gray-400 hover:text-green-500 transition font-bold dark:text-white dark:hover:text-green-300">
      {label}
    </div>
  )
}

NavTextTemplate.propTypes = {
  label: PropTypes.string,
  handleRedirect: PropTypes.func,
}

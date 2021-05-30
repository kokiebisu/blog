import React from "react"
import PropTypes from "prop-types"

export const FooterTemplate = ({ author }) => {
  return (
    <div className="py-4 border-t border-gray-300 dark:border-white">
      <p className="text-black dark:text-white text-sm">Created by {author}</p>
    </div>
  )
}

FooterTemplate.propTypes = {
  author: PropTypes.string,
}

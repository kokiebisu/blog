import React from "react"
import PropTypes from "prop-types"

export const FooterTemplate = ({ author }) => {
  return (
    <div className="py-4 bg-blue-500">
      <h3>created by {author}</h3>
    </div>
  )
}

FooterTemplate.propTypes = {
  author: PropTypes.string,
}

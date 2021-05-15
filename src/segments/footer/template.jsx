import React from "react"

export const FooterTemplate = ({ author }) => {
  return (
    <div className="py-4 bg-blue-500">
      <h3>created by {author}</h3>
    </div>
  )
}

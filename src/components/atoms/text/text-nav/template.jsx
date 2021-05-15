import React from "react"

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

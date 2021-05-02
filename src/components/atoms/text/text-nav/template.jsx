import React from "react"

export const NavTextTemplate = ({ label }) => {
  return (
    <p className="text-gray-400 hover:text-green-500 transition font-bold">
      {label}
    </p>
  )
}

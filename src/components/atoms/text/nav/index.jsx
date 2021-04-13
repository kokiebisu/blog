import React from "react"

export const Nav = ({ label, to }) => {
  return (
    <Link to={to} className="text-gray-600 hover:text-green-500 transition">
      {label}
    </Link>
  )
}

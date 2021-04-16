import React from "react"
import Link from "gatsby-link"

export const Nav = ({ label, to }) => {
  return (
    <Link
      to={to}
      className="text-gray-400 hover:text-green-500 transition font-bold"
    >
      {label}
    </Link>
  )
}

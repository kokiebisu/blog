import { Link } from "gatsby"
import React from "react"

const HomePage = () => {
  return (
    <div className="bg-red-500">
      Hello
      <Link to="/contact">Click me</Link>
    </div>
  )
}

export default HomePage

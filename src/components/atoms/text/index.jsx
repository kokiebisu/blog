import React from "react"
import { Nav } from "./nav"

export const Text = ({ variant, ...props }) => {
  const variants = {
    nav: <Nav {...props} />,
  }
  return variants[variant]
}

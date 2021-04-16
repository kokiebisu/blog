import React from "react"
import { Nav } from "./text-nav"

export const Text = ({ variant, ...props }) => {
  const variants = {
    nav: <Nav {...props} />,
  }
  return variants[variant]
}

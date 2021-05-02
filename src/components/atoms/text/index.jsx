import React from "react"
import { NavText } from "./text-nav"

export const Text = ({ variant, ...props }) => {
  const variants = {
    nav: <NavText {...props} />,
  }
  return variants[variant]
}

import React from "react"
import { LogoIcon } from "./logo"

export const Icon = ({ variant, ...props }) => {
  const variants = {
    logo: <LogoIcon {...props} />,
  }
  return variants[variant]
}

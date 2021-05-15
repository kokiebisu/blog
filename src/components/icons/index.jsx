import React from "react"
import { LogoIcon } from "./logo"
import { LinkIcon } from "./link"

export const Icon = ({ variant, ...props }) => {
  const variants = {
    logo: <LogoIcon {...props} />,
    link: <LinkIcon {...props} />,
  }
  return variants[variant]
}

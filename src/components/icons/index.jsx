import React from "react"
import { LogoIcon } from "./logo"
import { LinkIcon } from "./link"
import { MagnifyIcon } from "./magnify"

export const Icon = ({ variant, ...props }) => {
  const variants = {
    logo: <LogoIcon {...props} />,
    link: <LinkIcon {...props} />,
    magnify: <MagnifyIcon {...props} />,
  }
  return variants[variant]
}

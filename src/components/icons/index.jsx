import React from "react"
import { LogoIcon } from "./logo"
import { LinkIcon } from "./link"
import { ChevronRightIcon } from "./chevron-right"
import { ChevronLeftIcon } from "./chevron-left"
import { MagnifyIcon } from "./magnify"

export const Icon = ({ variant, ...props }) => {
  const variants = {
    logo: <LogoIcon {...props} />,
    link: <LinkIcon {...props} />,
    magnify: <MagnifyIcon {...props} />,
    chevronLeft: <ChevronRightIcon {...props} />,
    chevronRight: <ChevronLeftIcon {...props} />,
  }
  return variants[variant]
}

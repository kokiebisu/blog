import React from "react"
import { LogoIcon } from "./logo"
import { LinkIcon } from "./link"
import { ChevronRightIcon } from "./chevron-right"
import { ChevronLeftIcon } from "./chevron-left"
import { MagnifyIcon } from "./magnify"
import { MailIcon } from "./mail"
import { SunnyIcon } from "./sunny"
import { MoonIcon } from "./moon"

export const Icon = ({ variant, ...props }) => {
  const variants = {
    logo: <LogoIcon {...props} />,
    link: <LinkIcon {...props} />,
    magnify: <MagnifyIcon {...props} />,
    chevronLeft: <ChevronRightIcon {...props} />,
    chevronRight: <ChevronLeftIcon {...props} />,
    mail: <MailIcon {...props} />,
    sunny: <SunnyIcon {...props} />,
    moon: <MoonIcon {...props} />,
  }
  return variants[variant]
}

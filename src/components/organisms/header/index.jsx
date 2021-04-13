import React from "react"
import { useHeader } from "./logic"
import { HeaderTemplate } from "./template"

export const Header = () => {
  const data = useHeader()

  return <HeaderTemplate {...data} />
}

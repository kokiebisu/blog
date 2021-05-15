import React from "react"
import { NavTextTemplate } from "./template"
import { useNavText } from "./logic"

export const NavText = ({ to, ...props }) => {
  const data = useNavText({ to })
  return <NavTextTemplate {...props} {...data} />
}

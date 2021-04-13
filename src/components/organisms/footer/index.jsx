import React from "react"
import { useFooter } from "./logic"
import { FooterTemplate } from "./template"

export const Footer = () => {
  const data = useFooter()
  return <FooterTemplate />
}

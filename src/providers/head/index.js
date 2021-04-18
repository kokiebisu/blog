import React from "react"
import { Helmet } from "react-helmet"
import { useHead } from "./logic"

export const Head = ({ title }) => {
  const data = useHead(title)
  return <Helmet {...data} />
}

import React from "react"
import { useTag } from "./logic"
import { TagTemplate } from "./template"

export const Tag = props => {
  const data = useTag()
  return <TagTemplate {...data} {...props} />
}

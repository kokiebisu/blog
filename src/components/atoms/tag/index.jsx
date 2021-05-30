import React from "react"

import { TagTemplate } from "./template"
import { generateTagColor } from "../../../utils/tag"

export const Tag = ({ ...props }) => {
  const { label } = props

  return <TagTemplate {...props} color={generateTagColor(label)} />
}

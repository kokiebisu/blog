import React from "react"
import { useBlogHeader } from "./logic"
import { BlogHeaderTemplate } from "./template"

export const BlogHeader = props => {
  const data = useBlogHeader()
  return <BlogHeaderTemplate {...data} {...props} />
}

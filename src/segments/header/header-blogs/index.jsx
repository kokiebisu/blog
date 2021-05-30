import React from "react"
import { useBlogsHeader } from "./logic"
import { BlogsHeaderTemplate } from "./template"

export const BlogsHeader = props => {
  const data = useBlogsHeader()

  return <BlogsHeaderTemplate {...data} {...props} />
}

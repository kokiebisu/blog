import React from "react"
import { useBlog } from "./logic"
import { BlogSegmentTemplate } from "./template"

export const BlogSegment = () => {
  const data = useBlog()

  return <BlogSegmentTemplate {...data} />
}

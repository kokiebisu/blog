import React from "react"
import { useBlog } from "./logic"

export const BlogSegment = () => {
  useBlog()
  return (
    <div>
      <Head title="Blog" />
      <BlogSegmentTemplate />
    </div>
  )
}

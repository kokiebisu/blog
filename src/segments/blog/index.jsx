import React from "react"
import { useBlog } from "./logic"
import { Head } from "../../provider/head"
import { BlogSegmentTemplate } from "./template"

export const BlogSegment = () => {
  const data = useBlog()
  return (
    <div>
      <Head title="Blog" />
      <BlogSegmentTemplate {...data} />
    </div>
  )
}

import React from "react"
import { BlogSegment } from "@segments/blog"
import { Layout } from "@layouts"

const BlogPage = () => (
  <Layout>
    <div className="mt-12">
      <BlogSegment />
    </div>
  </Layout>
)

export default BlogPage

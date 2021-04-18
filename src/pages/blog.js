import React from "react"
import { BlogSegment } from "@segments/blog"
import { Header } from "@segments/header"
import { Head } from "@providers/head"

const BlogPage = () => (
  <div style={{ maxWidth: 1300 }} className="w-full px-8 mx-auto">
    <Head title="Blog" />
    <Header />
    <div className="mt-12">
      <BlogSegment />
    </div>
  </div>
)

export default BlogPage

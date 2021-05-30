import React from "react"
import { BlogSegment } from "@segments/blog"
import { Layout } from "@layouts"

const LatestArticlesPage = () => (
  <Layout headerType="blogs">
    <div className="mt-12">
      <BlogSegment />
    </div>
  </Layout>
)

export default LatestArticlesPage

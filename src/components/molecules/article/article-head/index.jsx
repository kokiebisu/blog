import React from "react"
import { Link } from "gatsby"
import { HeadArticleTemplate } from "./template"

export const HeadArticle = ({ slug, ...props }) => {
  return (
    <Link to={`/blog/${slug}`}>
      <HeadArticleTemplate {...props} />
    </Link>
  )
}

import React from "react"
import { Link } from "gatsby"
import { PlainArticleTemplate } from "./template"

export const PlainArticle = ({ slug, ...props }) => {
  return (
    <Link to={slug}>
      <PlainArticleTemplate {...props} />
    </Link>
  )
}

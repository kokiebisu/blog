import React from "react"
import { Link } from "gatsby"
import { AbstractArticleTemplate } from "./template"

export const AbstractArticle = ({ slug, ...props }) => {
  return (
    <Link to={slug}>
      <AbstractArticleTemplate {...props} />
    </Link>
  )
}

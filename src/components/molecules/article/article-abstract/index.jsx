import React from "react"
import { Link } from "gatsby"
import { AbstractArticleTemplate } from "./template"
import { useAbstractArticle } from "./logic"

export const AbstractArticle = ({ slug, body, ...props }) => {
  const data = useAbstractArticle({ body })
  return (
    <Link to={slug}>
      <AbstractArticleTemplate {...props} {...data} />
    </Link>
  )
}

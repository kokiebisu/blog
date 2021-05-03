import React from "react"
import { Link } from "gatsby"
import { PlainArticleTemplate } from "./template"
import { usePlainArticle } from "./logic"

export const PlainArticle = ({ slug, body, ...props }) => {
  const data = usePlainArticle({ body })
  return (
    <Link to={slug}>
      <PlainArticleTemplate {...props} {...data} />
    </Link>
  )
}

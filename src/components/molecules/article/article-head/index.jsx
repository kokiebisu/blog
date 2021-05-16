import React from "react"
import { Link } from "gatsby"
import { HeadArticleTemplate } from "./template"
import { useHeadArticle } from "./logic"

export const HeadArticle = ({ slug, ...props }) => {
  const { body } = props
  const data = useHeadArticle({ body })
  return (
    <Link to={slug}>
      <HeadArticleTemplate {...props} {...data} />
    </Link>
  )
}

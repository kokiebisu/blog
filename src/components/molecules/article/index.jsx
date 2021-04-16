import React from "react"
import { HeadArticle } from "./article-head"

export const Article = ({ variant, ...props }) => {
  const variants = {
    head: <HeadArticle {...props} />,
  }
  return variants[variant]
}

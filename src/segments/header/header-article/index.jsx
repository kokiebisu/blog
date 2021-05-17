import React from "react"
import { useArticleHeader } from "./logic"
import { ArticleHeaderTemplate } from "./template"

export const ArticleHeader = () => {
  const data = useArticleHeader()
  return <ArticleHeaderTemplate {...data} />
}

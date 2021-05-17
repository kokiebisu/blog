import React from "react"
import { ArticleHeader } from "./header-article"
import { GeneralHeader } from "./header-general"

export const Header = ({ variant }) => {
  const variants = {
    article: <ArticleHeader />,
    general: <GeneralHeader />,
  }
  return variants[variant]
}

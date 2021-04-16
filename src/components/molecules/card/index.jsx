import React from "react"
import { ArticleCard } from "./card-article"

export const Card = ({ variant, ...props }) => {
  const variants = {
    article: <ArticleCard {...props} />,
  }
  return variants[variant]
}

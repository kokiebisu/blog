import React from "react"
import { Article } from "../../components/molecules/card/card-article"

export const BlogSegmentTemplate = ({ articles }) => {
  return (
    <div>
      {articles.map(({ node: { id, ...article } }) => (
        <div key={id}>
          <Article {...article} />
        </div>
      ))}
    </div>
  )
}

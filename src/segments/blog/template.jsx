import React from "react"
import { Article } from "../../components/molecules/article"

export const BlogSegmentTemplate = ({ articles }) => {
  return (
    <div>
      <div>
        <Article
          variant="head"
          title={articles[0].node.title}
          content={articles[0].node.content}
          category={articles[0].node.category}
          date={articles[0].node.date}
          image={articles[0].node.image}
        />
      </div>
      <div className="my-12 grid grid-cols-2 gap-10">
        {articles.map(({ node: { id, ...article } }) => (
          <div key={id}>
            <Article variant="plain" {...article} />
          </div>
        ))}
      </div>
    </div>
  )
}

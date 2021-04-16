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
          category="product"
          date={articles[0].node.date}
          image={articles[0].node.image}
        />
      </div>
      <div className="my-12 md:grid grid-cols-2">
        <div className="lg:pr-8">
          {articles.slice(1, 3).map(({ node: { id, ...article } }) => (
            <div className="mb-16" key={id}>
              <Article variant="plain" {...article} />
            </div>
          ))}
        </div>
        <div className="lg:pl-8">
          {articles.map(({ node: { id, ...article } }, index) => (
            <div className="mb-8" key={id}>
              <div className="pb-8">
                <Article variant="abstract" {...article} category="product" />
              </div>
              <div
                className={`flex justify-center items-center ${
                  index === articles.length - 1 ? "hidden" : ""
                }`}
              >
                <div className="w-2 h-2 bg-gray-300 rounded-full mx-2" />
                <div className="w-2 h-2 bg-gray-300 rounded-full mx-2" />
                <div className="w-2 h-2 bg-gray-300 rounded-full mx-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

import React from "react"
import { Article } from "../../components/molecules/article"

export const BlogSegmentTemplate = ({
  mostRecentArticle,
  recentArticles,
  articles,
}) => {
  return (
    <div>
      <div>
        {Object.keys(mostRecentArticle) ? (
          <>
            {console.log("most", mostRecentArticle)}
            <Article
              variant="head"
              title={mostRecentArticle.title}
              body={mostRecentArticle.body}
              category="product"
              date={mostRecentArticle.publishedDate}
              slug={mostRecentArticle.slug}
              image={mostRecentArticle.image}
            />
          </>
        ) : null}
      </div>
      <div className="my-12 md:grid grid-cols-2">
        <div className="sm:pr-4 lg:pr-8">
          {recentArticles.length > 0
            ? recentArticles.map(
                ({ id, title, body, publishedDate, slug, image }) => (
                  <div className="mb-16" key={id}>
                    <Article
                      variant="plain"
                      title={title}
                      body={body}
                      date={publishedDate}
                      category="product"
                      slug={slug}
                      image={image}
                    />
                  </div>
                )
              )
            : null}
        </div>
        <div className="sm:pl-4 lg:pl-8">
          {articles.length
            ? articles.map(
                ({ id, title, body, publishedDate, slug }, index) => (
                  <div className="mb-8" key={id}>
                    <div className="pb-8">
                      <Article
                        variant="abstract"
                        title={title}
                        body={body}
                        publishedDate={publishedDate}
                        category="product"
                        slug={slug}
                      />
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
                )
              )
            : null}
        </div>
      </div>
    </div>
  )
}

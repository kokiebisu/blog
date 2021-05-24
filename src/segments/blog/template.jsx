import React from "react"
import { Article } from "../../components/molecules/article"
import PropTypes from "prop-types"

export const BlogSegmentTemplate = ({
  mostRecentArticle,
  recentArticles,
  articles,
}) => {
  return (
    <div>
      <div>
        {mostRecentArticle
          ? mostRecentArticle.map(
              ({
                id,
                data: { title, body, image, tags },
                last_publication_date,
                uid,
                readingTime,
              }) => {
                return (
                  <Article
                    key={id}
                    variant="head"
                    title={title.text}
                    body={body}
                    category="product"
                    publishedDate={last_publication_date}
                    slug={uid}
                    image={image.localFile}
                    tags={tags}
                    readingTime={readingTime.text}
                  />
                )
              }
            )
          : null}
      </div>
      <div className="my-12 md:grid grid-cols-2">
        <div className="sm:pr-4 lg:pr-8">
          {recentArticles
            ? recentArticles.map(
                ({
                  id,
                  data: { title, body, image },
                  last_publication_date,
                  uid,
                  readingTime,
                }) => (
                  <div className="mb-16" key={id}>
                    <Article
                      variant="plain"
                      title={title.text}
                      body={body}
                      publishedDate={last_publication_date}
                      category="product"
                      slug={uid}
                      image={image.localFile}
                      readingTime={readingTime.text}
                    />
                  </div>
                )
              )
            : null}
        </div>
        <div className="sm:pl-4 lg:pl-8">
          {articles.length
            ? articles.map(
                (
                  {
                    id,
                    data: { title, body },
                    last_publication_date,
                    uid,
                    readingTime,
                  },
                  index
                ) => (
                  <div className="mb-8" key={id}>
                    <div className="pb-8">
                      <Article
                        variant="abstract"
                        title={title.text}
                        body={body}
                        publishedDate={last_publication_date}
                        category="product"
                        slug={uid}
                        readingTime={readingTime.text}
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

BlogSegmentTemplate.propTypes = {
  mostRecentArticle: PropTypes.object,
  recentArticles: PropTypes.array,
  articles: PropTypes.array,
}

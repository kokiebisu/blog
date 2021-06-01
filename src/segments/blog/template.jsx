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
              (
                {
                  excerpt,
                  slug,
                  coverImg,
                  publishedDate,
                  timeToRead,
                  category,
                  title,
                  keywords,
                },
                index
              ) => {
                return (
                  <Article
                    key={index}
                    variant="head"
                    title={title}
                    body={excerpt}
                    category={category}
                    publishedDate={publishedDate}
                    slug={slug}
                    image={coverImg}
                    keywords={keywords}
                    timeToRead={timeToRead}
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
                (
                  {
                    excerpt,
                    slug,
                    coverImg,
                    publishedDate,
                    timeToRead,
                    category,
                    title,
                    keywords,
                  },
                  index
                ) => {
                  return (
                    <div key={index} className="mb-8">
                      <Article
                        variant="plain"
                        title={title}
                        body={excerpt}
                        category={category}
                        publishedDate={publishedDate}
                        slug={slug}
                        image={coverImg}
                        keywords={keywords}
                        timeToRead={timeToRead}
                      />
                    </div>
                  )
                }
              )
            : null}
        </div>
        <div className="sm:pl-4 lg:pl-8">
          {articles
            ? articles.map(
                (
                  {
                    excerpt,
                    slug,
                    coverImg,
                    publishedDate,
                    timeToRead,
                    category,
                    title,
                    keywords,
                  },
                  index
                ) => (
                  <div className="mb-8" key={index}>
                    <div className="pb-8">
                      <Article
                        key={index}
                        variant="abstract"
                        title={title}
                        body={excerpt}
                        category={category}
                        publishedDate={publishedDate}
                        slug={slug}
                        image={coverImg}
                        keywords={keywords}
                        timeToRead={timeToRead}
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
  mostRecentArticle: PropTypes.array,
  recentArticles: PropTypes.array,
  articles: PropTypes.array,
}

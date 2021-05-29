import React from "react"
import { Layout } from "@layouts"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Tag } from "@components/atoms/tag"
import PropTypes from "prop-types"

export const DetailedArticleTemplate = ({
  title,
  date,
  body,
  previous,
  next,
  coverImg,
  keywords,
}) => {
  const optimizedImage = getImage(coverImg)

  return (
    <Layout headerType="general">
      <main>
        <div className="mt-16 flex flex-col items-center">
          <div className="mb-3">
            <p className="dark:text-gray-100">Published {date}</p>
          </div>
          <div className="mb-6">
            <h2 className="dark:text-white">{title}</h2>
          </div>
          <div className="flex mb-8">
            {keywords
              ? keywords.map((keyword, index) => (
                  <div key={index} className="mx-1">
                    {console.log("key", keyword)}
                    <Tag label={keyword} color="blue" />
                  </div>
                ))
              : null}
          </div>
        </div>
        <div className="flex justify-center h-96">
          <GatsbyImage image={optimizedImage} alt="article" />
        </div>
        <div className="flex justify-center my-16">
          <div className="w-full max-w-2xl">{body}</div>
        </div>
        <div className="flex">
          <div>{previous}</div>
          <div>{next}</div>
        </div>
      </main>
    </Layout>
  )
}

DetailedArticleTemplate.propTypes = {
  last_publication_date: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  body: PropTypes.string,
  tags: PropTypes.array,
}

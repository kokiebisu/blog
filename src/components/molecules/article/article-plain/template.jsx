import React from "react"
import { Badge } from "../../badge"
import { Profile } from "../../badge/badge-profile/template.stories"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Tag } from "@components/atoms/tag"
import PropTypes from "prop-types"

export const PlainArticleTemplate = ({
  category,
  publishedDate,
  title,
  body,
  image,
  readingTime,
  tags,
}) => {
  const optimizedImage = getImage(image)
  return (
    <div
      data-sal="slide-up"
      data-sal-delay="100"
      data-sal-easing="ease"
      className="relative"
    >
      <div className="h-full">
        <div className="w-full h-72">
          <GatsbyImage image={optimizedImage} alt="article" />
        </div>
        <div className="h-full mt-8">
          <div className="flex items-center my-2">
            <div>
              <h5 className="text-xs text-gray-600 font-light dark:text-gray-100">
                {category.toUpperCase()}
              </h5>
            </div>
            <div className="text-gray-600 dark:text-gray-100">
              &nbsp;•&nbsp;
            </div>
            <div>
              <h5 className="text-xs text-gray-600 font-light dark:text-gray-100">
                {publishedDate}
              </h5>
            </div>
            <div className="text-gray-600 dark:text-gray-100">
              &nbsp;•&nbsp;
            </div>
            <div>
              <h5 className="text-xs text-gray-600 font-light dark:text-gray-100">
                {readingTime}
              </h5>
            </div>
          </div>
          <div className="my-3">
            <Badge variant="profile" {...Profile.args} />
          </div>
          <div className="mb-3">
            <h3 className="font-bold text-xl text-gray-600 leading-7 tracking-wide dark:text-white">
              {title}
            </h3>
          </div>
          <div
            style={{ height: 115 }}
            className="h-full overflow-hidden text-md text-gray-500 dark:text-gray-200"
          >
            {body}
          </div>
          <div className="flex my-4">
            {tags
              ? tags.map(
                  (
                    {
                      data: {
                        name: { text, color },
                      },
                    },
                    index
                  ) => {
                    return (
                      <div key={index} className="mr-2">
                        <Tag label={text} color={color} />
                      </div>
                    )
                  }
                )
              : null}
          </div>
        </div>
      </div>
    </div>
  )
}

PlainArticleTemplate.propTypes = {
  category: PropTypes.string,
  publishedDate: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  image: PropTypes.string,
  readingTime: PropTypes.string,
  tags: PropTypes.array,
}

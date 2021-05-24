import React from "react"
import { Badge } from "../../badge"
import { Profile } from "../../badge/badge-profile/template.stories"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Tag } from "@components/atoms/tag"
import PropTypes from "prop-types"

export const HeadArticleTemplate = ({
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
      className="flex flex-col-reverse lg:grid grid-cols-2"
    >
      <div className="flex flex-col justify-between lg:pr-8">
        <div>
          <div className="flex items-center my-2 lg:mt-0 lg:mb-2">
            <div>
              <h5 className="text-xs text-gray-600 font-light">
                {category.toUpperCase()}
              </h5>
            </div>
            <div>&nbsp;•&nbsp;</div>
            <div>
              <h5 className="text-xs text-gray-600 font-light">
                {publishedDate}
              </h5>
            </div>
            <div>&nbsp;•&nbsp;</div>
            <div>
              <h5 className="text-xs text-gray-600 font-light">
                {readingTime}
              </h5>
            </div>
          </div>
          <div className="mb-3">
            <h3 className="font-bold text-xl text-gray-600 leading-7 tracking-wide">
              {title}
            </h3>
          </div>
          <div
            style={{ height: 115 }}
            className="h-full truncate-fade overflow-hidden text-md text-gray-500"
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
        <div className="mt-3 lg:mt-0">
          <Badge variant="profile" {...Profile.args} />
        </div>
      </div>
      <div className="w-full h-80 lg:pl-8">
        <GatsbyImage image={optimizedImage} alt="article" />
      </div>
    </div>
  )
}

HeadArticleTemplate.propTypes = {
  category: PropTypes.string,
  publishedDate: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  image: PropTypes.string,
  readingTime: PropTypes.string,
  tags: PropTypes.array,
}

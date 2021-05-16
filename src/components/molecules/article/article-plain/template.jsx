import React from "react"
import { Badge } from "../../badge"
import { Profile } from "../../badge/badge-profile/template.stories"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const PlainArticleTemplate = ({
  category,
  date,
  title,
  body,
  image,
  readingTime,
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
              <h5 className="text-xs text-gray-600 font-light">
                {category.toUpperCase()}
              </h5>
            </div>
            <div>&nbsp;•&nbsp;</div>
            <div>
              <h5 className="text-xs text-gray-600 font-light">{date}</h5>
            </div>
            <div>&nbsp;•&nbsp;</div>
            <div>
              <h5 className="text-xs text-gray-600 font-light">
                {readingTime}
              </h5>
            </div>
          </div>
          <div className="my-3">
            <Badge variant="profile" {...Profile.args} />
          </div>
          <div className="mb-3">
            <h3 className="font-bold text-xl text-gray-600 leading-7 tracking-wide">
              {title}
            </h3>
          </div>
          <div
            className="text-md text-gray-500 leading-7 overflow-ellipsis overflow-hidden"
            dangerouslySetInnerHTML={{ __html: body.html }}
          />
        </div>
      </div>
    </div>
  )
}

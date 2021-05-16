import React from "react"
import { Badge } from "../../badge"
import { Profile } from "../../badge/badge-profile/template.stories"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const HeadArticleTemplate = ({ category, date, title, body, image }) => {
  const optimizedImage = getImage(image)
  return (
    <div
      data-sal="slide-up"
      data-sal-delay="100"
      data-sal-easing="ease"
      className="flex flex-col-reverse lg:grid grid-cols-2"
    >
      <div
        style={{ gridTemplateRows: "auto auto auto auto" }}
        className="grid lg:h-80 lg:pr-8"
      >
        <div className="flex items-center my-2 lg:mt-0 lg:mb-2">
          <div>
            <h5 className="text-xs text-gray-600 font-light">
              {category.toUpperCase()}
            </h5>
          </div>
          <div>&nbsp;•&nbsp;</div>
          <div>
            <h5 className="text-xs text-gray-600 font-light">{date}</h5>
          </div>
        </div>
        <div className="mb-3">
          <h3 className="font-bold text-xl text-gray-600 leading-7 tracking-wide">
            {title}
          </h3>
        </div>
        <div
          style={{ height: "auto" }}
          className="truncate-fade overflow-hidden"
        >
          <p className="text-md text-gray-500 leading-7">{body}</p>
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

import React from "react"
import { Badge } from "../../badge"
import { Profile } from "../../badge/badge-profile/template.stories"

export const AbstractArticleTemplate = ({
  category,
  date,
  title,
  body,
  readingTime,
}) => {
  return (
    <div data-sal="slide-up" data-sal-easing="ease" className="relative">
      <div className="h-full">
        <div className="h-full">
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
            className="truncate-fade h-12 overflow-hidden text-md text-gray-500 leading-7 overflow-ellipsis"
            dangerouslySetInnerHTML={{ __html: body.html }}
          />
        </div>
      </div>
    </div>
  )
}

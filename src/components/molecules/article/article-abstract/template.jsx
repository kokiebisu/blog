import React from "react"
import { Badge } from "../../badge"
import { Profile } from "../../badge/badge-profile/template.stories"
import { Tag } from "../../../atoms/tag"
import PropTypes from "prop-types"

export const AbstractArticleTemplate = ({
  category,
  title,
  body,
  readingTime,
  publishedDate,
  tags,
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
          <div className="flex my-4">
            {tags
              ? tags.map(({ keyword }, index) => {
                  return (
                    <div key={index} className="mr-2">
                      <Tag label={keyword} />
                    </div>
                  )
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  )
}

AbstractArticleTemplate.propTypes = {
  category: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  readingTime: PropTypes.string,
  publishedDate: PropTypes.stirng,
  tags: PropTypes.array,
}

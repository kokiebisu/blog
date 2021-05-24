import React from "react"
import { Badge } from "../../badge"
import { Profile } from "../../badge/badge-profile/template.stories"
import { Tag } from "@components/atoms/tag"
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
              <h5 className="text-xs text-gray-600 font-light dark:text-white">
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
          <div className="h-12 overflow-hidden text-md text-gray-500 leading-7 overflow-ellipsis dark:text-gray-200">
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

AbstractArticleTemplate.propTypes = {
  category: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  readingTime: PropTypes.string,
  publishedDate: PropTypes.stirng,
  tags: PropTypes.array,
}

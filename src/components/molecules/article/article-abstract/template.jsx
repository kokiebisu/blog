import React from "react"
import { Badge } from "../../badge"
import { Tag } from "@components/atoms/tag"
import PropTypes from "prop-types"

export const AbstractArticleTemplate = ({
  category,
  title,
  body,
  timeToRead,
  publishedDate,
  keywords,
}) => {
  return (
    <div data-sal="fade-in" data-sal-easing="ease" className="relative">
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
                {timeToRead} {timeToRead === 1 ? "minute" : "minutes"} read
              </h5>
            </div>
          </div>
          <div className="my-3">
            <Badge
              variant="profile"
              image="https://images.unsplash.com/photo-1534342357876-491359270a66?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
              name="Kenichi Okiebisu"
              title="Lead Product Owner"
            />
          </div>
          <div className="mb-3">
            <h3 className="font-bold text-xl text-gray-600 leading-7 tracking-wide dark:text-white">
              {title}
            </h3>
          </div>
          <div className="overflow-hidden text-md text-gray-500 leading-7 overflow-ellipsis dark:text-gray-200">
            {body}
          </div>
          <div className="flex my-4">
            {keywords
              ? keywords.map((keyword, index) => {
                  return (
                    <div key={index} className="mr-2">
                      <Tag label={keyword} color="blue" />
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
  timeToRead: PropTypes.string,
  publishedDate: PropTypes.stirng,
  tags: PropTypes.array,
}

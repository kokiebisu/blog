import React from "react"
import { Badge } from "../../badge"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Tag } from "@components/atoms/tag"
import PropTypes from "prop-types"

export const HeadArticleTemplate = ({
  category,
  publishedDate,
  title,
  body,
  image,
  timeToRead,
  keywords,
}) => {
  const optimizedImage = getImage(image)
  return (
    <div
      data-sal="fade-in"
      data-sal-delay="100"
      data-sal-easing="ease"
      className="flex flex-col-reverse lg:grid grid-cols-2"
    >
      <div className="flex flex-col lg:pr-8">
        <div>
          <div className="flex items-center my-2 lg:mt-0 lg:mb-2">
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
                {timeToRead} {timeToRead === 1 ? "minute" : "minutes"} read
              </h5>
            </div>
          </div>
          <div className="mb-3">
            <h3 className="font-bold text-xl text-gray-600 leading-7 tracking-wide dark:text-white">
              {title}
            </h3>
          </div>
          <div className="overflow-hidden text-md text-gray-500 dark:text-gray-200 leading-7">
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
        <div className="mt-3 lg:mt-0">
          <Badge
            variant="profile"
            image="https://images.unsplash.com/photo-1534342357876-491359270a66?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGF2YXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
            name="Kenichi Okiebisu"
            title="Lead Product Owner"
          />
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
  image: PropTypes.object,
  timeToRead: PropTypes.number,
  tags: PropTypes.array,
}

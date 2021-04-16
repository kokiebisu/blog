import React from "react"
import { Badge } from "../../badge"
import { Profile } from "../../badge/badge-profile/index.stories"

export const HeadArticle = ({ category, date, title, content, image }) => {
  return (
    <div className="relative">
      <div className="h-80 lg:flex">
        <div style={{ minWidth: 600 }} className="w-full h-full">
          <img
            src={image}
            alt="article"
            className="block h-full w-full object-cover rounded-md"
          />
        </div>
        <div
          style={{ gridTemplateRows: "auto auto auto auto" }}
          className="grid h-full lg:ml-5"
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
          <div className="truncate-fade overflow-hidden">
            <p className="text-md text-gray-500 leading-7">{content}</p>
          </div>
          <div>
            <Badge variant="profile" {...Profile.args} />
          </div>
        </div>
      </div>
    </div>
  )
}

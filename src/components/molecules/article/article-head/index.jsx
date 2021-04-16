import React from "react"
import { Badge } from "../../badge"
import { Profile } from "../../badge/badge-profile/index.stories"

export const HeadArticle = ({ category, date, title, content, image }) => {
  return (
    <div className="flex flex-col-reverse lg:grid grid-cols-2">
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
          <p className="text-md text-gray-500 leading-7">{content}</p>
        </div>
        <div className="mt-3 lg:mt-0">
          <Badge variant="profile" {...Profile.args} />
        </div>
      </div>
      <div className="w-full h-80 lg:pl-8">
        <img
          src={image}
          alt="article"
          className="block h-full w-full object-cover rounded-md"
        />
      </div>
    </div>
  )
}

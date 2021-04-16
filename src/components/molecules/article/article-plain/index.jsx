import React from "react"

export const PlainArticle = ({ category, date, title, content, image }) => {
  return (
    <div className="relative">
      <div className="h-full">
        <div className="w-full h-72">
          <img
            src={image}
            alt="article"
            className="block h-full w-full object-cover rounded-md"
          />
        </div>
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
          </div>
          <div className="mb-3">
            <h3 className="font-bold text-xl text-gray-600 leading-7 tracking-wide">
              {title}
            </h3>
          </div>
          <div>
            <p className="text-md text-gray-500 leading-7 overflow-ellipsis overflow-hidden">
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

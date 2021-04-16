import React from "react"

export const ArticleCard = ({ category, date, title, content, image }) => {
  return (
    <div className="relative" style={{ paddingTop: 300 }}>
      <div className="absolute top-0 bottom-0 right-0 left-0">
        <div className="h-full md:flex">
          <div
            style={{ minWidth: 400, maxWidth: 700 }}
            className="w-full h-full"
          >
            <img
              src={image}
              alt="article"
              className="block h-full w-full object-cover rounded-md"
            />
          </div>
          <div className="h-full md:ml-5 mt-5 md:mt-0">
            <div className="flex items-center">
              <div>
                <h5 className="text-xs text-gray-600">{category}</h5>
              </div>
              <div>&nbsp;•&nbsp;</div>
              <div>
                <h5 className="text-xs text-gray-500">{date}</h5>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="font-medium text-xl text-gray-600 leading-7">
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
    </div>
  )
}

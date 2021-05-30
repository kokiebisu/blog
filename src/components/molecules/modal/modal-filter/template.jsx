import React from "react"
import { Button } from "@components/atoms/button"

export const FilterModalTemplate = ({ keywords, selectKeyword }) => {
  return (
    <div className="max-w-3xl py-5 px-8 mx-8 rounded-2xl bg-white shadow-xl dark:bg-gray-600">
      <div className="my-8">
        <h1 className="font-extrabold dark:text-gray-200">フィルター</h1>
      </div>
      <div className="flex flex-wrap my-8 overflow-y-auto">
        {keywords.map((keyword, index) => {
          return (
            <div key={index} className="mr-2 mb-3">
              <Button
                variant="filter"
                keyword={keyword}
                onClick={() => selectKeyword(keyword)}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

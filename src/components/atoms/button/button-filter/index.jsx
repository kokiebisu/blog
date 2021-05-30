import React from "react"
import { generateTagColor } from "../../../../utils/tag"

export const FilterButton = ({ keyword }) => {
  const color = generateTagColor(keyword)
  return (
    <button
      className={`dark:text-white dark:hover:text-gray-100 block px-3 py-1 border-gray-400 border-2 rounded-full hover:bg-${color} hover:border-transparent hover:text-white`}
    >
      {keyword}
    </button>
  )
}

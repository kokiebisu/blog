import React from "react"

export const FilterButtonTemplate = ({ onClick, keyword, bgColor }) => {
  return (
    <button
      onClick={onClick}
      className={`dark:text-white dark:hover:text-gray-100 block px-3 py-1 border-gray-400 border-2 rounded-full hover:bg-${bgColor} hover:border-transparent hover:text-white`}
    >
      {keyword}
    </button>
  )
}

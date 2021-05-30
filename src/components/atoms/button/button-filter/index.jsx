import React from "react"
import { generateTagColor } from "../../../../utils/tag"
import { FilterButtonTemplate } from "./template"

export const FilterButton = ({ keyword, onClick }) => {
  const color = generateTagColor(keyword)
  return (
    <FilterButtonTemplate onClick={onClick} bgColor={color} keyword={keyword} />
  )
}

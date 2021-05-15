import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import { Search as SearchIcon } from "@styled-icons/fa-solid"

export default connectSearchBox(
  ({ refine, currentRefinement, className, onFocus }) => (
    <form className={className}>
      <input
        className={`outline-none text-md transaction duration-100 rounded text-red-500 ${
          onFocus
            ? "border w-16 cursor-text -ml-4 pl-4"
            : "border-none w-0 bg-transparent cursor-pointer -ml-3 pl-3"
        }`}
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={e => refine(e.target.value)}
        value={currentRefinement}
        onFocus={onFocus}
      />
      <SearchIcon className="SearchIcon" />
    </form>
  )
)

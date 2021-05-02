import React from "react"
import { SearchIcon } from "@heroicons/react/solid"

export const SearchbarTemplate = ({
  refine,
  currentRefinement,
  className,
  onFocus,
  expanded,
  ...props
}) => {
  return (
    <form
      className={`inline-flex items-center h-12 ${
        expanded ? "pl-3 w-56" : "justify-center w-12"
      } transition ease-in-out duration-100 border border-gray-300 rounded-full`}
    >
      <div>
        <SearchIcon className="block h-5 w-5 text-gray-300" />
      </div>
      <input
        className={`outline-none ${
          expanded ? "ml-2 w-full mr-3" : "w-0"
        } transition duration-100`}
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={e => refine(e.target.value)}
        value={currentRefinement}
        onFocus={onFocus}
      />
    </form>
  )
}

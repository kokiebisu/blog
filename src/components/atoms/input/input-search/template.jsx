import React from "react"
import { Search as SearchIcon } from "@styled-icons/fa-solid"

export const SearchInputTemplate = ({ onChange, value, onFocus, hasFocus }) => {
  return (
    <form className="flex flex-row-reverse items-center mb-0 h-10">
      <input
        className={`py-2 outline-none text-md transaction duration-200 ease-in-out text-gray-600 ${
          hasFocus
            ? "border-b w-56 cursor-text pl-8 -ml-6"
            : "border-none w-0 bg-transparent cursor-pointer pl-8 -ml-6"
        }`}
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={onChange}
        value={value}
        onFocus={onFocus}
      />
      <SearchIcon
        style={{ width: "1rem", margin: "0.3rem", pointerEvents: "none" }}
      />
    </form>
  )
}

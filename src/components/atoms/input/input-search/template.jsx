import React from "react"
import { Icon } from "@components/icons"
import PropTypes from "prop-types"

export const SearchInputTemplate = ({ onChange, value, onFocus, hasFocus }) => {
  return (
    <form className="flex flex-row-reverse items-center mb-0 h-10">
      <input
        className={`dark:placeholder-white dark:text-white py-2 outline-none text-md transaction duration-200 ease-in-out text-gray-600 ${
          hasFocus
            ? "w-56 cursor-text pl-8 -ml-6 bg-transparent"
            : "w-0 bg-transparent cursor-pointer pl-8 -ml-6"
        }`}
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={onChange}
        value={value}
        onFocus={onFocus}
      />
      <Icon
        variant="magnify"
        height={18}
        width={18}
        stroke={
          typeof window !== "undefined" &&
          localStorage.getItem("theme") === "dark"
            ? "white"
            : "black"
        }
        style={{ margin: "0.3rem", pointerEvents: "none" }}
      />
    </form>
  )
}

SearchInputTemplate.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  onFocus: PropTypes.func,
  hasFocus: PropTypes.bool,
}

import React from "react"
import { useThemeButtonTemplate } from "./use-template"
import PropTypes from "prop-types"

export const ThemeButtonTemplate = ({ handleThemeChange }) => {
  const { isDarkMode, handleDarkModeChange } = useThemeButtonTemplate({
    handleThemeChange,
  })
  return (
    <button
      className={`${isDarkMode ? "bg-blue-500" : "bg-red-500"}`}
      onClick={handleDarkModeChange}
    >
      <div>hello</div>
    </button>
  )
}

ThemeButtonTemplate.propTypes = {
  handleThemeChange: PropTypes.func,
}

import React from "react"
import { useThemeButton } from "./use-template"

export const ThemeButtonTemplate = ({ onClick }) => {
  const { isDarkMode, handleDarkModeChange } = useThemeButton()
  return (
    <button onClick={onClick}>
      <div>hello</div>
    </button>
  )
}

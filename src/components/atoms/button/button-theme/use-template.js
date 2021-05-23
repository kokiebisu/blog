import { useState } from "react"

export const useThemeButtonTemplate = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleDarkModeChange = () => setIsDarkMode(!isDarkMode)

  return { isDarkMode, handleDarkModeChange }
}

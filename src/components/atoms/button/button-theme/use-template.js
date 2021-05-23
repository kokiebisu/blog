export const useThemeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleDarkModeChange = () => setIsDarkMode(!isDarkMode)

  return { isDarkMode, handleDarkModeChange }
}

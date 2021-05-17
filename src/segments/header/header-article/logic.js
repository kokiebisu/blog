import { useState } from "react"
import { navigate } from "gatsby"

export const useArticleHeader = () => {
  const [searchbarExpanded, setSearchbarExpanded] = useState(false)

  const handleSearchbarExpand = () => setSearchbarExpanded(!searchbarExpanded)

  const handleRedirectToHome = () => navigate("/")

  return {
    searchbarExpanded,
    handleSearchbarExpand,
    handleRedirectToHome,
  }
}

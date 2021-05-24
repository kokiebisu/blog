import { useState } from "react"
import { navigate } from "gatsby"

export const useGeneralHeader = () => {
  const [searchbarExpanded, setSearchbarExpanded] = useState(false)

  const handleSearchbarExpand = () => setSearchbarExpanded(!searchbarExpanded)

  const handleRedirectToHome = () => navigate("/")

  return {
    searchbarExpanded,
    handleSearchbarExpand,
    handleRedirectToHome,
  }
}

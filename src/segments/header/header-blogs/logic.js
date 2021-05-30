import { useState } from "react"
import { navigate } from "gatsby"
import * as content from "./content"

export const useBlogsHeader = () => {
  const [searchbarExpanded, setSearchbarExpanded] = useState(false)

  const handleSearchbarExpand = () => setSearchbarExpanded(!searchbarExpanded)

  const handleRedirectToHome = () => navigate("/")

  return {
    ...content,
    searchbarExpanded,
    handleSearchbarExpand,
    handleRedirectToHome,
  }
}

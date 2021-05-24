import { useState } from "react"
import { navigate } from "gatsby"
import * as content from "./content"

export const useBlogHeader = () => {
  const [selected, setSelected] = useState("canada")
  const [searchbarExpanded, setSearchbarExpanded] = useState(false)

  const handleSelectChange = newSelected => {
    setSelected(newSelected)
  }

  const handleSearchbarExpand = () => setSearchbarExpanded(!searchbarExpanded)

  const handleRedirectToHome = () => navigate("/")

  return {
    ...content,
    selected,
    searchbarExpanded,
    handleSelectChange,
    handleSearchbarExpand,
    handleRedirectToHome,
  }
}

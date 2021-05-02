import { useState } from "react"
import * as content from "./content"

export const useHeader = () => {
  const [selected, setSelected] = useState("people")
  const [searchbarExpanded, setSearchbarExpanded] = useState(false)

  const handleSelectChange = newSelected => {
    setSelected(newSelected)
  }

  const handleSearchbarExpand = () => setSearchbarExpanded(!searchbarExpanded)

  return {
    ...content,
    selected,
    searchbarExpanded,
    handleSelectChange,
    handleSearchbarExpand,
  }
}

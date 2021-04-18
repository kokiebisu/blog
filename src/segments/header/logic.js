import { useState } from "react"
import * as content from "./content"

export const useHeader = () => {
  const [selected, setSelected] = useState("people")
  const [menuExpanded, setMenuExpanded] = useState(false)
  const handleSelectChange = newSelected => {
    setSelected(newSelected)
  }

  const handleMenuExpand = () => setMenuExpanded(!menuExpanded)

  return {
    ...content,
    selected,
    menuExpanded,
    handleSelectChange,
    handleMenuExpand,
  }
}

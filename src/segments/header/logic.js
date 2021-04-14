import { useState } from "react"
import * as content from "./content"

export const useHeader = () => {
  const [selected, setSelected] = useState("people")
  const handleSelectChange = newSelected => {
    setSelected(newSelected)
  }

  return { ...content, selected, handleSelectChange }
}

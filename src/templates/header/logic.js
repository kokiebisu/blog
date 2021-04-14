import { useState } from "react"

export const useHeader = () => {
  const [selected, setSelected] = useState("people")
  const handleSelectChange = newSelected => {
    setSelected(newSelected)
  }

  return { selected, handleSelectChange }
}

import React from "react"
import { HeaderTemplate } from "./template"

export const Header = () => {
  const [selected, setSelected] = useState("people")
  const handleSelectChange = newSelected => {
    setSelected(newSelected)
  }

  return (
    <HeaderTemplate
      selected={selected}
      handleSelectChange={handleSelectChange}
    />
  )
}

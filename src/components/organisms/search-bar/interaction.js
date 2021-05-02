import { useState } from "react"

export const useSearchbarInteraction = () => {
  const [expanded, setExpanded] = useState()

  const handleExpanded = () => setExpanded(!expanded)

  return { expanded, handleExpanded }
}

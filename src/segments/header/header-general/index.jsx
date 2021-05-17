import React from "react"
import { useGeneralHeader } from "./logic"
import { GeneralHeaderTemplate } from "./template"

export const GeneralHeader = () => {
  const data = useGeneralHeader()
  return <GeneralHeaderTemplate {...data} />
}

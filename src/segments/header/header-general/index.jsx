import React from "react"
import { useGeneralHeader } from "./logic"
import { GeneralHeaderTemplate } from "./template"

export const GeneralHeader = props => {
  const data = useGeneralHeader()
  return <GeneralHeaderTemplate {...data} {...props} />
}

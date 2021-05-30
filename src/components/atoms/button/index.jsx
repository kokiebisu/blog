import React from "react"
import { ModeButton } from "./button-mode"
import { FilterButton } from "./button-filter"

export const Button = props => {
  switch (props.variant) {
    case "mode":
      return <ModeButton {...props} />
    case "filter":
      return <FilterButton {...props} />
    default:
      throw new Error("Invalid Button variant")
  }
}

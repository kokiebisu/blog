import React from "react"
import { FilterModal } from "./modal-filter"

export const Modal = props => {
  switch (props.variant) {
    case "filter":
      return <FilterModal {...props} />
    default:
      throw new Error("Invalid Modal variant")
  }
}

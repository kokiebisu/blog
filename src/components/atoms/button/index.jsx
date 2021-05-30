import React from "react"
import { ModeButton } from "./button-mode"

export const Button = props => {
  switch (props.variant) {
    case "mode":
      return <ModeButton {...props} />
  }
}

import React from "react"
import { ModalProvider } from "./src/context/modal"
import "./src/styles/global.css"
import "./src/styles/prism.css"

export const wrapRootElement = ({ element }) => (
  <ModalProvider>{element}</ModalProvider>
)

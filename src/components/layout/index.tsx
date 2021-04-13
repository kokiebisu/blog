import React from "react"
import { Footer } from "../organisms/footer"
import { Header } from "../organisms/header"

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-none">
        <Header />
      </div>
      <div className="flex-grow">{children}</div>
      <div className="flex-none">
        <Footer />
      </div>
    </div>
  )
}

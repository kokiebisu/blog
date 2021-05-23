import React from "react"
import { Footer } from "@segments/footer"
import { Header } from "@segments/header"
import PropTypes from "prop-types"

export const Layout = ({ children, headerType = "general" }) => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <div
        style={{ maxWidth: 1100 }}
        className="w-full h-full px-8 md:px-16 flex-col flex mx-auto flex-grow"
      >
        <div className="flex-none">
          <Header variant={headerType} />
        </div>
        <div className="flex-grow">{children}</div>
      </div>
      <div className="flex-none bg-blue-500">
        <div
          style={{ maxWidth: 1100 }}
          className="w-full mx-auto px-8 md:px-16 "
        >
          <Footer />
        </div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.element,
  headerType: PropTypes.string,
}

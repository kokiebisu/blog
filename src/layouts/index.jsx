import React from "react"
import { Footer } from "@segments/footer"
import { Header } from "@segments/header"
import PropTypes from "prop-types"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

export const Layout = ({ children, headerType = "general" }) => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div
          style={{ gridTemplateRows: "auto 1fr auto" }}
          className={`dark:bg-gray-500 bg-white grid min-h-screen px-8`}
        >
          <div className="w-full max-w-5xl mx-auto">
            <Header
              variant={headerType}
              theme={theme}
              toggleTheme={toggleTheme}
            />
          </div>
          <div className="w-full max-w-5xl mx-auto">{children}</div>

          <div className="w-full max-w-5xl mx-auto">
            <Footer />
          </div>
        </div>
      )}
    </ThemeToggler>
  )
}

Layout.propTypes = {
  children: PropTypes.element,
  headerType: PropTypes.string,
}

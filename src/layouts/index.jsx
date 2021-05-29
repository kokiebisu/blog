import React from "react"
import { Footer } from "@segments/footer"
import { Header } from "@segments/header"
import PropTypes from "prop-types"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { MDXProvider } from "@mdx-js/react"

export const Layout = ({ children, headerType = "general" }) => {
  return (
    <MDXProvider
      components={{
        p: props => (
          <p
            {...props}
            className="text-gray-600 text-md leading-7 dark:text-gray-300"
          />
        ),
        h3: props => (
          <div className="my-6 pt-5">
            <h1
              {...props}
              className="text-gray-700 text-lg dark:text-gray-200"
            />
          </div>
        ),
      }}
    >
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div
            style={{ minHeight: "100vh" }}
            className="flex flex-col w-full dark:bg-gray-700 transition ease-in-out"
          >
            <div
              style={{ maxWidth: 1100, flex: 1 }}
              className="w-full h-full px-8 md:px-16 flex-col flex mx-auto flex-grow"
            >
              <div className="flex-none">
                <Header
                  variant={headerType}
                  theme={theme}
                  toggleTheme={toggleTheme}
                />
              </div>
              <div className="flex-grow ">{children}</div>
            </div>
            <div className="flex-none ">
              <div
                style={{ maxWidth: 1100 }}
                className="w-full mx-auto px-8 md:px-16"
              >
                <Footer />
              </div>
            </div>
          </div>
        )}
      </ThemeToggler>
    </MDXProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.element,
  headerType: PropTypes.string,
}

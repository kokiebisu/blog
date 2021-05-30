import React from "react"
import { Search } from "@components/organisms/search"
import PropTypes from "prop-types"
import { Button } from "@components/atoms/button"

const searchIndices = [{ name: `Article`, title: `Articles` }]

export const GeneralHeaderTemplate = ({
  handleRedirectToHome,
  toggleTheme,
}) => {
  return (
    <header className="no-select pt-6">
      <div className="flex items-center justify-between mt-6 mb-8 lg:mb-3">
        <div>
          <button
            onClick={handleRedirectToHome}
            className="block text-4xl font-nikkyo tracking-wide dark:text-white"
          >
            ここブロッ！
          </button>
        </div>
        <div className="flex items-center">
          <div className="flex items-center mx-1">
            <Button
              variant="mode"
              onClick={() => {
                if (typeof window !== "undefined") {
                  const mode = localStorage.getItem("theme")
                  toggleTheme(mode === "light" ? "dark" : "light")
                }
              }}
            />
          </div>
          <div className="ml-2">
            <Search indices={searchIndices} />
          </div>
        </div>
      </div>
    </header>
  )
}

GeneralHeaderTemplate.propTypes = {
  handleRedirectToHome: PropTypes.func,
  toggleTheme: PropTypes.any,
  theme: PropTypes.any,
  navItems: PropTypes.array,
}

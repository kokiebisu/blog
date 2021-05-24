import React, { useState, useEffect } from "react"
import { Search } from "@components/organisms/search"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Text } from "@components/atoms/text"
const searchIndices = [{ name: `Article`, title: `Articles` }]

export const GeneralHeaderTemplate = ({
  handleRedirectToHome,
  toggleTheme,
  navItems,
}) => {
  const [darkMode, setDarkMode] = useState(false)
  useEffect(() => {
    toggleTheme(!darkMode ? "light" : "dark")
  }, [darkMode])
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
        <div className="flex">
          <div className="p-6 border border-gray-400 rounded-full">
            <button
              onClick={() => {
                setDarkMode(!darkMode)
              }}
            >
              click
            </button>
          </div>
          <div>
            {navItems.map((item, index) => (
              <li key={index} className="px-3 py-2">
                <Link to={item.to}>
                  <Text variant="nav" {...item} />
                </Link>
              </li>
            ))}
          </div>
          <div>
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

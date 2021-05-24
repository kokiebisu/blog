import React, { useState, useEffect } from "react"
import { Search } from "@components/organisms/search"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Text } from "@components/atoms/text"
import { SunnyIcon, MoonIcon } from "../../../../static/svg"

const searchIndices = [{ name: `Article`, title: `Articles` }]

export const GeneralHeaderTemplate = ({
  handleRedirectToHome,
  toggleTheme,
  navItems,
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
            <button
              className="inline-flex justify-center items-center shadow-md rounded-full w-8 h-8 bg-white dark:bg-gray-600"
              onClick={() => {
                if (typeof window !== "undefined") {
                  const mode = localStorage.getItem("theme")
                  toggleTheme(mode === "light" ? "dark" : "light")
                }
              }}
            >
              {typeof window !== "undefined" &&
              localStorage.getItem("theme") === "dark" ? (
                <div className="p-2">
                  <MoonIcon size={16} fill="white" />
                </div>
              ) : (
                <div className="p-2">
                  <SunnyIcon size={16} fill="gray" />
                </div>
              )}
            </button>
          </div>
          <div className="mx-2">
            {navItems.map((item, index) => (
              <li key={index} className="px-3 py-2 list-none">
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

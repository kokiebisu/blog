import React from "react"
import { Text } from "@components/atoms/text"
import { Search } from "@components/organisms/search"
import PropTypes from "prop-types"
import { Link } from "gatsby"
const searchIndices = [{ name: `Article`, title: `Articles` }]

export const GeneralHeaderTemplate = ({
  selected,
  handleSelectChange,
  navItems,
  categoryItems,
  handleRedirectToHome,
  theme,
  toggleTheme,
}) => {
  return (
    <header className="no-select pt-6">
      <div className="flex items-center justify-between mt-6 mb-8 lg:mb-3">
        <div>
          <button
            onClick={handleRedirectToHome}
            className="block text-4xl font-nikkyo tracking-wide dark:text-white transition ease-in-out"
          >
            ここブロッ！
          </button>
        </div>
        <nav className="hidden md:flex list-none">
          <input
            type="checkbox"
            onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
            checked={theme === "dark"}
          />
          {navItems.map((item, index) => (
            <li key={index} className="px-3 py-2">
              <Link to={item.to}>
                <Text variant="nav" {...item} />
              </Link>
            </li>
          ))}
        </nav>
      </div>
      <div className="w-full flex items-center justify-between">
        <nav className="flex list-none items-center">
          {categoryItems.map(({ label, value }, index) => (
            <li key={index} className="mr-6">
              <button
                disable={selected === value}
                className={`p-3 text-sm font-bold  ${
                  selected === value
                    ? "text-green-700 border-b-2 border-green-700 dark:text-green-300 dark:border-green-300"
                    : "text-gray-500 dark:text-gray-white"
                }`}
                onClick={() => handleSelectChange(value)}
              >
                {label}
              </button>
            </li>
          ))}
        </nav>
        <div>
          <Search indices={searchIndices} />
        </div>
      </div>
    </header>
  )
}

GeneralHeaderTemplate.propTypes = {
  selected: PropTypes.string,
  handleSelectChange: PropTypes.func,
  navItems: PropTypes.array,
  categoryItems: PropTypes.array,
  handleRedirectToHome: PropTypes.func,
  theme: PropTypes.any,
  toggleTheme: PropTypes.any,
}

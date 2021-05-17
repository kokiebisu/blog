import React from "react"
import { Text } from "@components/atoms/text"

import { Search } from "@components/organisms/search"
const searchIndices = [{ name: `Article`, title: `Articles` }]

export const GeneralHeaderTemplate = ({
  selected,
  handleSelectChange,
  navItems,
  categoryItems,
  handleRedirectToHome,
}) => {
  return (
    <header className="no-select pt-6">
      <div className="flex items-center justify-between mt-6 mb-8 lg:mb-3">
        <div>
          <button
            onClick={handleRedirectToHome}
            className="block text-4xl font-nikkyo tracking-wide"
          >
            ここブロッ！
          </button>
        </div>
        <nav className="hidden md:flex list-none">
          {navItems.map((item, index) => (
            <li key={index} className="px-3 py-2">
              <Text variant="nav" {...item} />
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
                    ? "text-green-700 border-b-2 border-green-700"
                    : "text-gray-500"
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

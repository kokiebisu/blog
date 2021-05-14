import React from "react"
import { Text } from "@components/atoms/text"

import { Search } from "../../components/organisms/search"
const searchIndices = [{ name: `Article`, title: `Articles` }]

export const HeaderTemplate = ({
  selected,
  handleSelectChange,
  navItems,
  categoryItems,
}) => {
  return (
    <header className="no-select pb-3 pt-6 lg:py-3 border-gray-200 border-b">
      <div className="flex items-center justify-between mb-6 lg:mb-3">
        <div>
          <h1 className="text-4xl font-nikkyo tracking-wide">ここブロッ！</h1>
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
                className={`text-sm font-bold text-gray-500 ${
                  selected === value ? "" : ""
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

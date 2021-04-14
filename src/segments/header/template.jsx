import React from "react"
import { Icon } from "../../components/icons"
import { Text } from "../../components/atoms/text"

export const HeaderTemplate = ({
  selected,
  handleSelectChange,
  navItems,
  categoryItems,
}) => {
  return (
    <header className="no-select px-5 py-3">
      <div className="flex items-center justify-between mb-3">
        <div>
          <Icon variant="logo" width={150} height={30} />
        </div>
        <nav className="flex list-none">
          {navItems.map(({ item, index }) => (
            <li key={index} className="px-3 py-2">
              <Text variant="nav" {...item} />
            </li>
          ))}
        </nav>
      </div>
      <div className="w-full border-b py-3 border-gray-200 flex items-center justify-between">
        <nav className="list-none flex items-center">
          {categoryItems.map(({ label, value }, index) => (
            <li key={index} className="mr-4">
              <button
                className={`text-sm font-medium text-gray-500 ${
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
          <button>Search</button>
        </div>
      </div>
    </header>
  )
}

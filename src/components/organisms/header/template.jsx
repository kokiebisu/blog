import React from "react"
import Link from "gatsby-link"
import { Icon } from "../../icons"

export const HeaderTemplate = ({ selected, handleSelectChange }) => {
  return (
    <header className="px-5 py-3">
      <div className="flex items-center justify-between mb-3">
        <div>
          <Icon variant="logo" width={150} height={30} />
        </div>
        <nav className="flex list-none">
          <li className="px-3 py-2">
            <Link className="hover:text-green-500 transition">Home</Link>
          </li>
          <li className="px-3 py-2">
            <Link className="hover:text-green-500 transition">Blog</Link>
          </li>
          <li className="px-3 py-2">
            <Link className="hover:text-green-500 transition">About me</Link>
          </li>
          <li className="px-3 py-2">
            <Link className="hover:text-green-500 transition">Contact</Link>
          </li>
        </nav>
      </div>
      <div className="w-full border-b py-3 border-gray-200 flex items-center justify-between">
        <nav className="list-none flex items-center">
          <li className="mr-3">
            <button
              className={`text-sm font-light text-gray-500 ${
                selected === "people" ? "" : ""
              }`}
              onClick={() => handleSelectChange("company")}
            >
              People
            </button>
          </li>
          <li className="mr-3">
            <button
              className={`text-sm font-light text-gray-500 ${
                selected === "engineering" ? "" : ""
              }`}
              onClick={() => handleSelectChange("company")}
            >
              Engineering
            </button>
          </li>
          <li className="mr-3">
            <button
              className={`text-sm font-light text-gray-500 ${
                selected === "growth" ? "" : ""
              }`}
              onClick={() => handleSelectChange("company")}
            >
              Growth Marketing
            </button>{" "}
          </li>
          <li className="mr-3">
            <button
              className={`text-sm font-light text-gray-500 ${
                selected === "company" ? "border-b border-green-500" : ""
              }`}
              onClick={() => handleSelectChange("company")}
            >
              Company
            </button>
          </li>
        </nav>
        <div>
          <button>Search</button>
        </div>
      </div>
    </header>
  )
}

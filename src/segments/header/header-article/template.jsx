import React from "react"
import { Search } from "@components/organisms/search"
import PropTypes from "prop-types"

const searchIndices = [{ name: `Article`, title: `Articles` }]

export const ArticleHeaderTemplate = ({ handleRedirectToHome }) => {
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
        <div>
          <Search indices={searchIndices} />
        </div>
      </div>
    </header>
  )
}

ArticleHeaderTemplate.propTypes = {
  handleRedirectToHome: PropTypes.func,
}

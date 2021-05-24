import React from "react"
import { Link } from "gatsby"
import {
  connectStateResults,
  Highlight,
  Hits,
  Index,
  Snippet,
  PoweredBy,
} from "react-instantsearch-dom"
import { Icon } from "@components/icons"
import PropTypes from "prop-types"

const PageHit = ({ hit }) => {
  return (
    <Link to={hit.uid}>
      <div className="p-3 hover:bg-gray-200 dark:hover:bg-gray-500">
        <div className="flex items-center">
          <div className="mr-4">
            <Icon
              variant="link"
              height={18}
              width={18}
              stroke={
                localStorage.getItem("theme") === "dark" ? "white" : "gray"
              }
            />
          </div>
          <h4 className="dark:text-white">
            <Highlight attribute="title" hit={hit} tagName="mark" />
          </h4>
        </div>
        <Snippet attribute="excerpt" hit={hit} tagName="mark" />
      </div>
    </Link>
  )
}

PageHit.propTypes = {
  hit: PropTypes.object,
}

const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits

  return hitCount > 0 ? (
    <div className="flex justify-end mb-2">
      <p className="dark:text-gray-100">
        {hitCount} result{hitCount !== 1 ? `s` : ``}
      </p>
    </div>
  ) : null
})

const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <div className="pr-3">
      <HitCount />
    </div>
    <div>
      <Hits hitComponent={PageHit} />
    </div>
  </Index>
)

HitsInIndex.propTypes = {
  index: PropTypes.object,
}

export const SearchResultModalTemplate = ({ indices, show }) => (
  <div
    style={{ maxHeight: "80vh", width: "40vw" }}
    className={`bg-white dark:bg-gray-600 overflow-scroll absolute z-10 right-0 top-full mt-4 shadow-md rounded-lg ${
      show ? "block" : "hidden"
    }`}
  >
    <div className="relative">
      <div className="h-2 bg-green-600 dark:bg-green-300 absolute top-0 w-full" />
      <div className="py-4">
        <div className="mt-1">
          {indices.map(index => (
            <HitsInIndex index={index} key={index.name} />
          ))}
        </div>
        <div className="flex justify-end text-sm pr-3">
          <PoweredBy />
        </div>
      </div>
    </div>
  </div>
)

SearchResultModalTemplate.propTypes = {
  indices: PropTypes.array,
  show: PropTypes.bool,
}

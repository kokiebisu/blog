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

const PageHit = ({ hit }) => (
  <div className="py-3">
    <div className="flex items-center">
      <div className="mr-2">
        <Lightbulb height={25} width={25} />
      </div>
      <Link to={hit.slug}>
        <h4>
          <Highlight attribute="title" hit={hit} tagName="mark" />
        </h4>
      </Link>
    </div>
    <Snippet attribute="excerpt" hit={hit} tagName="mark" />
  </div>
)

const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits

  return hitCount > 0 ? (
    <div className="flex justify-end">
      {hitCount} result{hitCount !== 1 ? `s` : ``}
    </div>
  ) : null
})

const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <HitCount />
    <div>
      <Hits hitComponent={PageHit} />
    </div>
  </Index>
)

export const SearchResultModalTemplate = ({ indices, show }) => (
  <div
    style={{ maxHeight: "80vh", width: "40vw" }}
    className={`bg-white overflow-scroll absolute z-10 right-0 top-full mt-4 shadow-md rounded-lg ${
      show ? "block" : "hidden"
    }`}
  >
    <div className="relative">
      <div className="h-2 bg-green-600 absolute top-0 w-full" />
      <div className="p-4">
        <div className="mt-1">
          {indices.map(index => (
            <HitsInIndex index={index} key={index.name} />
          ))}
        </div>
        <div className="flex justify-end text-sm">
          <PoweredBy />
        </div>
      </div>
    </div>
  </div>
)

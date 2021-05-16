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

const PageHit = ({ hit }) => (
  <Link to={hit.slug}>
    <div className="p-3 hover:bg-gray-200">
      <div className="flex items-center">
        <div className="mr-4">
          <Icon variant="link" height={18} width={18} />
        </div>
        <h4>
          <Highlight attribute="title" hit={hit} tagName="mark" />
        </h4>
      </div>
      <Snippet attribute="excerpt" hit={hit} tagName="mark" />
    </div>
  </Link>
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
    <div class="pr-3">
      <HitCount />
    </div>
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

import algoliasearch from "algoliasearch/lite"
import { createRef, default as React, useState } from "react"
import { InstantSearch } from "react-instantsearch-dom"
import { SearchInput } from "../../atoms/input/input-search"
import { SearchResultModal } from "../../molecules/modal/modal-search-result"
import useClickOutside from "../../../hooks/use-click-outside"

export const Search = ({ indices }) => {
  const rootRef = createRef()
  const [query, setQuery] = useState()
  const [hasFocus, setFocus] = useState(false)
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_API_KEY
  )

  useClickOutside(rootRef, () => setFocus(false))

  return (
    <div className="relative mx-0" ref={rootRef}>
      <InstantSearch
        searchClient={searchClient}
        indexName={indices[0].name}
        onSearchStateChange={({ query }) => setQuery(query)}
      >
        <SearchInput onFocus={() => setFocus(true)} hasFocus={hasFocus} />
        <div className="z-50">
          <SearchResultModal
            show={query && query.length > 0 && hasFocus}
            indices={indices}
          />
        </div>
      </InstantSearch>
    </div>
  )
}

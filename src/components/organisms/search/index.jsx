
import { createRef, default as React, useState } from "react"
import useClickOutside from "../../../hooks/use-click-outside"
import PropTypes from "prop-types"

export const Search = ({ indices }) => {
  const rootRef = createRef()
  const [query, setQuery] = useState()
  const [hasFocus, setFocus] = useState(false)

  useClickOutside(rootRef, () => setFocus(false))

  return (
    <div className="relative mx-0" ref={rootRef}>
      {/* <InstantSearch
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
      </InstantSearch> */}
    </div>
  )
}

Search.propTypes = {
  indices: PropTypes.array,
}

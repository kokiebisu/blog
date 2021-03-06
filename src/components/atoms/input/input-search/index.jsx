import React from "react"
import { SearchInputTemplate } from "./template"
import { connectSearchBox } from "react-instantsearch-dom"
import { useSearchInput } from "./logic"
import PropTypes from "prop-types"

const Component = ({ refine, ...props }) => {
  const data = useSearchInput({ refine })
  return <SearchInputTemplate {...props} {...data} />
}

export const SearchInput = connectSearchBox(
  ({ refine, currentRefinement, onFocus, ...rest }) => {
    return (
      <Component
        {...rest}
        refine={refine}
        onFocus={onFocus}
        value={currentRefinement}
      />
    )
  }
)

Component.propTypes = {
  refine: PropTypes.any,
}

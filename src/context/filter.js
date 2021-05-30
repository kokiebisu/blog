import React, { useContext, useReducer } from "react"

const initialState = {
  filterBy: "latest",
}

export const FilterContext = useContext(initialState)

const FILTER_BY_LATEST = "FILTER_BY_LATEST"
const FILTER_BY_KEYWORD = "FILTER_BY_KEYWORD"

const reducer = (_, action) => {
  switch (action.type) {
    case FILTER_BY_LATEST:
      return { filterBy: "latest" }
    case FILTER_BY_KEYWORD:
      return { filterBy: action.payload }
    default:
      throw new Error(`Filter Context Action: ${action.type}  was invalid`)
  }
}

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const filterByLatest = () => {
    dispatch({
      type: FILTER_BY_LATEST,
    })
  }

  const filterByKeyword = keyword => {
    dispatch({
      type: FILTER_BY_KEYWORD,
      payload: keyword,
    })
  }

  return (
    <FilterContext.Provider
      value={{ filterByLatest, filterByKeyword, filterState: state }}
    >
      {children}
    </FilterContext.Provider>
  )
}

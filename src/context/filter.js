import React, { createContext, useReducer } from "react"

export const FilterContext = createContext({
  filterBy: "latest",
})

const FILTER_BY_LATEST = "FILTER_BY_LATEST"
const FILTER_BY_KEYWORD = "FILTER_BY_KEYWORD"

const reducer = (_, action) => {
  console.log("action", action)
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
  const [state, dispatch] = useReducer(reducer, {
    filterBy: "latest",
  })

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

  console.log("filterState", state.filterBy)

  return (
    <FilterContext.Provider
      value={{ filterByLatest, filterByKeyword, filterState: state }}
    >
      {children}
    </FilterContext.Provider>
  )
}

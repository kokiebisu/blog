import { useState, useContext } from "react"
import { navigate } from "gatsby"
import { ModalContext } from "../../../context/modal"
import { FilterContext } from "../../../context/filter"
import * as content from "./content"

export const useBlogsHeader = () => {
  const [searchbarExpanded, setSearchbarExpanded] = useState(false)
  const { openModal, modalState } = useContext(ModalContext)
  const { filterState } = useContext(FilterContext)

  const handleSearchbarExpand = () => setSearchbarExpanded(!searchbarExpanded)

  const handleRedirectToHome = () => navigate("/")

  return {
    ...content,
    searchbarExpanded,
    handleSearchbarExpand,
    handleRedirectToHome,
    openModal,
    modalShouldAppear: modalState.modalAppear,
    searchedKeyword: filterState.filterBy,
  }
}

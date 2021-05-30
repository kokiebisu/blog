import { useContext, useRef } from "react"
import useLockBodyScroll from "../../../../hooks/use-lock-body-scroll"
import useOnClickOutside from "../../../../hooks/use-click-outside"
import { ModalContext } from "../../../../context/modal"
import { FilterContext } from "../../../../context/filter"
import { keywords } from "../../../../meta/keywords"

export const useFilterModal = () => {
  const modalRef = useRef()
  const { closeModal } = useContext(ModalContext)
  useLockBodyScroll()

  useOnClickOutside(modalRef, () => {
    closeModal()
  })
  const { filterByKeyword } = useContext(FilterContext)

  const selectKeyword = keyword => {
    filterByKeyword(keyword)
    closeModal()
  }

  return {
    modalRef,
    keywords,
    selectKeyword,
  }
}

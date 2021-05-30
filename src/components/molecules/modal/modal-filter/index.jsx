import React from "react"
import { useFilterModal } from "./logic"
import { FilterModalTemplate } from "./template"

export const FilterModal = () => {
  const { modalRef, ...data } = useFilterModal()

  return (
    <div ref={modalRef}>
      <FilterModalTemplate {...data} />
    </div>
  )
}

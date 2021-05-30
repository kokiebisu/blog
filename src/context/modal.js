import React, { createContext, useReducer } from "react"

export const ModalContext = createContext({
  modalAppear: false,
})

const OPEN_MODAL = "OPEN_MODAL"
const CLOSE_MODAL = "CLOSE_MODAL"

const reducer = (state, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { modalAppear: true }
    case CLOSE_MODAL:
      return { modalAppear: false }
    default:
      throw new Error("Something is wrong")
  }
}

export const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    modalAppear: false,
  })

  const openModal = () => {
    dispatch({
      type: OPEN_MODAL,
    })
  }

  const closeModal = () => {
    dispatch({
      type: CLOSE_MODAL,
    })
  }

  return (
    <ModalContext.Provider value={{ openModal, closeModal, modalState: state }}>
      {children}
    </ModalContext.Provider>
  )
}

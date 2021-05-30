import React from "react"
import { Search } from "@components/organisms/search"
import PropTypes from "prop-types"
import { Button } from "@components/atoms/button"
import { motion } from "framer-motion"
import { Modal } from "../../../components/molecules/modal"

const searchIndices = [{ name: `Article`, title: `Articles` }]

export const BlogsHeaderTemplate = ({
  handleRedirectToHome,
  toggleTheme,
  openModal,
  modalShouldAppear,
  modalRef,
  searchedKeyword,
}) => {
  return (
    <header className="no-select pt-6">
      <div className="flex items-center justify-between mt-6 mb-8 lg:mb-3">
        <div>
          <button
            onClick={handleRedirectToHome}
            className="block text-4xl font-nikkyo tracking-wide dark:text-white"
          >
            ここブロッ！
          </button>
        </div>
        <div className="flex items-center">
          <div className="flex items-center mx-1">
            <Button
              variant="mode"
              onClick={() => {
                if (typeof window !== "undefined") {
                  const mode = localStorage.getItem("theme")
                  toggleTheme(mode === "light" ? "dark" : "light")
                }
              }}
            />
          </div>
          <div className="ml-2">
            <Search indices={searchIndices} />
          </div>
        </div>
      </div>
      <div className="my-8 flex justify-between items-center">
        <div className="">
          <motion.button
            onClick={openModal}
            whileTap={{ y: 2 }}
            className="relative py-2 px-5 rounded-md border-gray-400 border shadow-md"
          >
            <div>
              <h4 className="dark:text-white text-sm">フィルター</h4>
            </div>
            <div className="absolute -top-1 -right-1">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
              </span>
            </div>
          </motion.button>
        </div>
        <div className="pl-4">
          <h3 className="text-5xl text-gray-800 dark:text-white">
            {searchedKeyword}
          </h3>
        </div>
      </div>
      {modalShouldAppear ? (
        <motion.div
          initial={{ backgroundColor: "transparent" }}
          animate={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          style={{ minHeight: "100vh" }}
          className="z-20 fixed top-0 bottom-0 left-0 right-0 h-full w-screen"
        >
          <div className="w-screen h-full relative flex justify-center items-center">
            <div ref={modalRef}>
              <Modal variant="filter" />
            </div>
          </div>
        </motion.div>
      ) : null}
    </header>
  )
}

BlogsHeaderTemplate.propTypes = {
  handleRedirectToHome: PropTypes.func,
  toggleTheme: PropTypes.any,
  theme: PropTypes.any,
  navItems: PropTypes.array,
}

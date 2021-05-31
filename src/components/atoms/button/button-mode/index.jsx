import React from "react"
import { motion } from "framer-motion"
import { Icon } from "@components/icons"

export const ModeButton = ({ onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="inline-flex justify-center items-center shadow-md rounded-full w-8 h-8 bg-white dark:bg-gray-600"
      onClick={onClick}
    >
      {typeof window !== "undefined" &&
      localStorage.getItem("theme") === "dark" ? (
        <div className="p-2">
          <Icon variant="sunny" size={16} fill="white" />
        </div>
      ) : (
        <div className="p-2">
          <Icon variant="moon" size={16} fill="gray" />
        </div>
      )}
    </motion.button>
  )
}

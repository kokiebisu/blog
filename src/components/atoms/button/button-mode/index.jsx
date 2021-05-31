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
      <div className="p-2">
        <Icon
          variant={
            typeof window !== "undefined" &&
            localStorage.getItem("theme") === "dark"
              ? "moon"
              : "sunny"
          }
          size={16}
          fill={
            typeof window !== "undefined" &&
            localStorage.getItem("theme") === "dark"
              ? "white"
              : "gray"
          }
        />
      </div>
    </motion.button>
  )
}

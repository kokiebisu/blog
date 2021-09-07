import React from "react"
import { useState } from "react"
import { Icon } from "../../icons"
import { motion } from "framer-motion"
import { navigate } from "gatsby"
import { API_ENDPOINT } from "../../../config"

export const Form = () => {
  const [values, setValues] = useState({
    email: "",
    content: "",
  })

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const response = await fetch(`${API_ENDPOINT}/form`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          method: "POST",
          body: {
            email: values.email,
            content: values.content,
          },
        }),
      })
      console.log("RESPONSE", response)
      if (response.status === 200) {
        navigate("/contact/success")
      } else {
        console.log("Status not 200")
      }
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <div className="md:my-0">
      <div className="mb-16 mt-8">
        <div className="mb-8 md:mb-0">
          <div className="mb-4">
            <h2 className="text-3xl dark:text-white text-gray-700 text-center md:text-left">
              繋がりませんか？
            </h2>
          </div>
          <div className="mt-1 mb-4">
            <h2 className="text-lg font-semibold dark:text-gray-300 text-gray-500 text-center md:text-left">
              連絡をしていただければお返事します！
            </h2>
          </div>
        </div>
        <div className="w-74">
          <form onSubmit={handleSubmit} className="block mr-1">
            <div className="mb-3">
              <div className="border rounded-lg flex items-center">
                <div className="px-2 top-1/2 relative">
                  <Icon variant="mail" width={18} height={16} />
                </div>
                <input
                  value={values.email}
                  onChange={e =>
                    setValues({ ...values, email: e.target.value })
                  }
                  placeholder="user@gmail.com"
                  className="dark:text-white bg-transparent border-transparent py-2 outline-none rounded-lg"
                  type="text"
                />
              </div>
            </div>
            <div className="my-3">
              <div className="border rounded-lg p-2">
                <textarea
                  value={values.content}
                  onChange={e =>
                    setValues({ ...values, content: e.target.value })
                  }
                  placeholder="Message here"
                  className="dark:text-white w-full bg-transparent border-transparent outline-none "
                  type="text"
                />
              </div>
            </div>
            <div className="flex justify-center md:justify-start">
              <motion.input
                whileTap={{ y: 10 }}
                type="submit"
                className="w-full block px-6 py-3 rounded-lg font-semibold text-white bg-black"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

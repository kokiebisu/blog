import React from "react"
import { useState } from "react"
import { Icon } from "../../icons"
import { motion } from "framer-motion"

export const Form = () => {
  const [values, setValues] = useState({
    email: "",
    content: "",
  })

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const response = await fetch(
        "https://hcftyxv83c.execute-api.us-east-1.amazonaws.com/prod/form",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ values }),
        }
      )
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
      <div className="mb-16 mt-8 md:flex md:justify-between">
        <div className="mb-8 md:mb-0">
          <div>
            <h2 className="text-3xl text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 dark:from-pink-100 dark:to-red-300 text-center md:text-left">
              繋がりませんか？
            </h2>
          </div>
          <div className="mt-1">
            <h2 className="text-lg font-semibold text-gray-500 text-center md:text-left">
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
                  className="bg-transparent border-transparent py-2 outline-none rounded-lg"
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
                  className="w-full bg-transparent border-transparent outline-none "
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

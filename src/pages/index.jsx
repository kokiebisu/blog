import React, { useState, createRef, useEffect } from "react"
import { Layout } from "@layouts"
import { Head } from "@providers/head"
import { Link } from "gatsby"
import { Icon } from "@components/icons"
import lottie from "lottie-web"
import articleLight from "../../static/animation/article-light.json"
import { motion } from "framer-motion"

const HomePage = () => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  let blogAnimationContainer = createRef()
  let blogAnimationElement = createRef()

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: blogAnimationElement.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: articleLight,
    })

    if (blogAnimationContainer && blogAnimationContainer.current) {
      blogAnimationContainer.current.addEventListener("mouseenter", () => {
        anim.goToAndPlay(0)
      })
    }

    return () => {
      // blogAnimationContainer.current.removeEventListener("mouseenter")
      anim.destroy()
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/form', {
        method: 'POST',
        body: JSON.stringify({values})
      })
      if (response.status === 200) {
        navigate('/contact/success')
      } else {
        console.log('Status not 200')
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Layout>
      <Head title="Home" />
      <main className="mt-16">
        <div className="">
          <div style={{ width: "60vw" }} className="my-4">
            <h1 className="text-md md:text-2xl text-gray-600 dark:text-white">
              はじめまして
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mx-2 relative top-2 font-baby text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 dark:from-pink-100 dark:to-red-300"
              >
                Ken
              </motion.span>
              です。
            </h1>
          </div>
          <div className="hidden md:block" style={{ width: "65vw" }}>
            <h2 className="text-gray-600 dark:text-gray-300">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-md md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-600 dark:from-blue-100 dark:to-green-200"
              >
                カナダ
              </motion.span>
              でソフトウェアを作っています。
            </h2>
          </div>
          <div className="flex my-16 md:justify-start">
            <div className="mr-4">
              <Link to="/latest">
                <div
                  ref={blogAnimationContainer}
                  className="flex flex-col justify-center items-center rounded-md w-40 h-40 shadow-md hover:shadow-lg transition ease-in-out duration-300 dark:bg-gray-600"
                >
                  <div className="w-20 h-20" ref={blogAnimationElement} />
                  <div>
                    <p className="dark:text-gray-200 font-semibold text-gray-500">
                      ブログ
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
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
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="user@gmail.com"
                      className="bg-transparent border-transparent py-2 outline-none rounded-lg"
                      type="text"
                    />
                  </div>
                </div>
                <div className="my-3">
                  <div className="border rounded-lg p-2">
                    <textarea
                      value={message}
                      onChange={e => setMessage(e.target.value)}
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
      </main>
    </Layout>
  )
}

export default HomePage

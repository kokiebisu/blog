import React, { createRef, useEffect } from "react"
import { Layout } from "@layouts"
import { Head } from "@providers/head"
import { Link } from "gatsby"
import lottie from "lottie-web"
import articleLight from "../../static/animation/article-light.json"
import { motion } from "framer-motion"

const HomePage = () => {
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

  return (
    <Layout>
      <Head title="Home" />
      <main className="mt-16">
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
      </main>
    </Layout>
  )
}

export default HomePage

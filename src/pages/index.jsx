import React from "react"
import { Layout } from "@layouts"
import { Head } from "@providers/head"
import { Link } from "gatsby"

const HomePage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <main className="mt-24">
        <div className="my-4">
          <h1 className="text-gray-800 dark:text-white">
            はじめまして。
            <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600 dark:from-pink-100 dark:to-red-300">
              Ken
            </span>
            です。
          </h1>
        </div>
        <div>
          <h2 className="text-gray-600 dark:text-gray-300">
            <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-600 dark:from-blue-100 dark:to-green-200">
              カナダ
            </span>
            で
            <span className="text-3xl font-extrabold text-white dark:text-gray-800 bg-gradient-to-br from-purple-400 to-red-600 dark:from-purple-300 dark:to-red-400">
              ソフトウェア
            </span>
            を作っています。
          </h2>
        </div>
        <div className="flex my-16">
          <div className="mr-4">
            <Link to="/blog">
              <div className="rounded-md w-40 h-40 shadow-md hover:shadow-lg transition ease-in-out duration-300 dark:bg-gray-600"></div>
            </Link>
          </div>
          <div>
            <Link to="/blog">
              <div className="rounded-md w-40 h-40 shadow-md hover:shadow-lg transition ease-in-out duration-300 dark:bg-gray-600"></div>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default HomePage

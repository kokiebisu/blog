import React from "react"
import { Layout } from "@layouts"
import { Head } from "@providers/head"

const HomePage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <main>this is the home page</main>
    </Layout>
  )
}

export default HomePage

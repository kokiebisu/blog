import React from "react"
import { Layout } from "../layout"
import { Head } from "../provider/head"

const HomePage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <main>this is the home page</main>
    </Layout>
  )
}

export default HomePage

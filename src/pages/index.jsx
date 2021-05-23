import React from "react"
import { Layout } from "@layouts"
import { Head } from "@providers/head"

const HomePage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <main>Is the new user working?</main>
    </Layout>
  )
}

export default HomePage

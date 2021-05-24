import React from "react"
import { Layout } from "@layouts"
import { Head } from "@providers/head"

const HomePage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <main className="dark:bg-red-500">
        <div>Is the new user working?</div>
      </main>
    </Layout>
  )
}

export default HomePage

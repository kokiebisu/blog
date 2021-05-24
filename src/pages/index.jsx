import React from "react"
import { Layout } from "@layouts"
import { Head } from "@providers/head"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const HomePage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <main className="dark:bg-red-500">
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
            />
            Is the new user working?
          </main>
        )}
      </ThemeToggler>
    </Layout>
  )
}

export default HomePage

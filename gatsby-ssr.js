import React from "react"
import { ModalProvider, FilterProvider } from "./src/context"
import { MDXProvider } from "@mdx-js/react"
import "./src/styles/global.css"
import "./src/styles/prism.css"

export const wrapRootElement = ({ element }) => (
  <MDXProvider
    components={{
      p: props => (
        <p
          {...props}
          className="text-gray-600 text-md leading-7 dark:text-gray-300"
        />
      ),
      h3: props => (
        <div className="my-6 pt-5">
          <h1 {...props} className="text-gray-700 text-lg dark:text-gray-200" />
        </div>
      ),
    }}
  >
    <ModalProvider>
      <FilterProvider>{element} </FilterProvider>
    </ModalProvider>
  </MDXProvider>
)

import { MDXProvider } from "@mdx-js/react"
import Highlight, { defaultProps } from "prism-react-renderer"
import React from "react"
import Code from "./src/components/atoms/code"

const components = {
  // h2: ({ children }) => <h2 style={{ color: "rebeccapurple" }}>{children}</h2>,
  // "p.inlineCode": props => (
  //   <code style={{ backgroundColor: "lightgray" }} {...props} />
  // ),
  // pre: props => <Code {...props} />,
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)

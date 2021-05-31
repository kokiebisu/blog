import React from "react"
import { Helmet } from "react-helmet"
import { useHead } from "./logic"
import PropTypes from "prop-types"

export const Head = ({ title }) => {
  const data = useHead(title)
  return (
    <Helmet {...data}>
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="apple-mobile-web-app-title" content="App Title" />
    </Helmet>
  )
}

Head.propTypes = {
  title: PropTypes.string,
}

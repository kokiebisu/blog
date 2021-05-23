import React from "react"
import { Helmet } from "react-helmet"
import { useHead } from "./logic"
import PropTypes from 'prop-types'

export const Head = ({ title }) => {
  const data = useHead(title)
  return <Helmet {...data} />
}

Head.propTypes = {
  title: PropTypes.string
}
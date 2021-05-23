import React from "react"
import { Link } from "gatsby"
import { PlainArticleTemplate } from "./template"
import PropTypes from "prop-types"
import { convertTags } from "@utils/tags"

export const PlainArticle = ({ slug, tags, ...props }) => {
  const convertedTags = convertTags(tags)

  return (
    <Link to={slug}>
      <PlainArticleTemplate {...props} tags={convertedTags} />
    </Link>
  )
}

PlainArticle.propTypes = {
  slug: PropTypes.string,
  tags: PropTypes.array,
}

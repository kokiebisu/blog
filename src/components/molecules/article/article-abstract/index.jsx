import React from "react"
import { Link } from "gatsby"
import { AbstractArticleTemplate } from "./template"
import PropTypes from "prop-types"
import { convertTags } from "@utils/tags"

export const AbstractArticle = ({ slug, tags, ...props }) => {
  const convertedTags = convertTags(tags)
  return (
    <Link to={slug}>
      <AbstractArticleTemplate {...props} tags={convertedTags} />
    </Link>
  )
}

AbstractArticle.propTypes = {
  slug: PropTypes.string,
  tags: PropTypes.array,
}

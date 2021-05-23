import React from "react"
import { Link } from "gatsby"
import { HeadArticleTemplate } from "./template"
import PropTypes from "prop-types"
import { convertTags } from "@utils/tags"

export const HeadArticle = ({ slug, tags, ...props }) => {
  const convertedTags = convertTags(tags)
  return (
    <Link to={`/blog/${slug}`}>
      <HeadArticleTemplate {...props} tags={convertedTags} />
    </Link>
  )
}

HeadArticle.propTypes = {
  slug: PropTypes.string,
}

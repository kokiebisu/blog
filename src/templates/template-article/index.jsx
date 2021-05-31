import React from "react"
import { DetailedArticleTemplate } from "./template"
import { MDXRenderer } from "gatsby-plugin-mdx"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
import { Icon } from "@components/icons"
import { motion } from "framer-motion"

const DetailedArticle = ({
  data: {
    mdx: { body, frontmatter, featuredImg },
  },
  pageContext: { next, previous },
}) => {
  return (
    <DetailedArticleTemplate
      title={frontmatter.title}
      date={frontmatter.date}
      photographer={frontmatter.photographer}
      previous={
        previous ? (
          <Link to={previous.node.fields.slug}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex justify-center items-center w-12 h-12 shadow-md rounded-full bg-white dark:bg-gray-500"
            >
              <Icon variant="chevronRight" />
            </motion.div>
          </Link>
        ) : null
      }
      next={
        next ? (
          <Link to={next.node.fields.slug}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex justify-center items-center w-12 h-12 shadow-md rounded-full bg-white dark:bg-gray-500"
            >
              <Icon variant="chevronLeft" />
            </motion.div>
          </Link>
        ) : null
      }
      coverImg={featuredImg}
      body={<MDXRenderer>{body}</MDXRenderer>}
    />
  )
}

DetailedArticle.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
}

export default DetailedArticle

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 100)
      body
      timeToRead
      fields {
        slug
      }
      featuredImg {
        childImageSharp {
          gatsbyImageData
        }
      }
      frontmatter {
        category
        title
        keywords
        date(fromNow: true)
        photographer
        published
      }
    }
  }
`

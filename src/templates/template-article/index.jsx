import React from "react"
import { DetailedArticleTemplate } from "./template"
import { MDXRenderer } from "gatsby-plugin-mdx"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"

const DetailedArticle = ({
  data: {
    mdx: { body, frontmatter, fields, timeToRead, excerpt },
  },
  pageContext: { next, previous },
}) => {
  return (
    <DetailedArticleTemplate
      title={frontmatter.title}
      date={frontmatter.date}
      previous={next ? <Link to={next.node.fields.slug}>次の記事</Link> : null}
      next={
        previous ? <Link to={previous.node.fields.slug}>前の記事</Link> : null
      }
      coverImg={frontmatter.coverImg}
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
      frontmatter {
        category
        date(fromNow: true)
        title
        coverImg {
          childImageSharp {
            gatsbyImageData(
              width: 980
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      excerpt(pruneLength: 10)
      body
      fields {
        slug
      }
      timeToRead
    }
  }
`

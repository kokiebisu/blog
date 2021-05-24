import React from "react"
import { Layout } from "@layouts"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Tag } from "@components/atoms/tag"
import PropTypes from "prop-types"

export const DetailedArticleTemplate = ({
  last_publication_date,
  title,
  image,
  body,
  tags,
}) => {
  const optimizedImage = getImage(image)

  return (
    <Layout headerType="general">
      <main>
        <div className="mt-16 flex flex-col items-center">
          <div className="mb-3">
            <p className="dark:text-gray-100">
              Published {last_publication_date}
            </p>
          </div>
          <div className="mb-6">
            <h2 className="dark:text-white">{title}</h2>
          </div>
          <div className="flex mb-8">
            {tags
              ? tags.map(
                  (
                    {
                      keywords: {
                        tag: {
                          document: {
                            data: {
                              color,
                              name: { text },
                            },
                          },
                        },
                      },
                    },
                    index
                  ) => (
                    <div key={index} className="mx-1">
                      <Tag label={text} color={color} />
                    </div>
                  )
                )
              : null}
          </div>
        </div>
        <div className="flex justify-center h-70">
          <GatsbyImage image={optimizedImage} alt="article" />
        </div>
        <div className="px-6 my-24 md:flex mx-auto">
          <div
            className="w-full dark:text-white"
            dangerouslySetInnerHTML={{ __html: body.html }}
          />
          <div className="max-w-md w-full h-24 pl-16">hello</div>
        </div>
      </main>
    </Layout>
  )
}

DetailedArticleTemplate.propTypes = {
  last_publication_date: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  body: PropTypes.string,
  tags: PropTypes.array,
}

import { getImage } from "gatsby-plugin-image"

export const usePlainArticleTemplate = ({ image }) => {
  const optimizedImage = getImage(image)

  return { optimizedImage }
}

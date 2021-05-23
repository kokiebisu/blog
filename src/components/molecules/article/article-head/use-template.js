import { getImage } from "gatsby-plugin-image"

export const useHeadArticleTemplate = ({ image }) => {
  const optimizedImage = getImage(image)

  return { optimizedImage }
}

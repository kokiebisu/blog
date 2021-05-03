import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { options } from "../../../../utils/rich-text"

export const useHeadArticle = ({ body }) => {
  const content = documentToReactComponents(JSON.parse(body.raw), options)

  return { body: content }
}

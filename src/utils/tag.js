import { keywords } from "../meta/keywords"
import { colors } from "../styles/colors"

export const generateTagColor = keyword => {
  const map = Object.fromEntries(
    keywords.map((_, i) => [keywords[i], colors[i]])
  )

  return map[keyword]
}

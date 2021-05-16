import generateReadingTime from "reading-time"

export const useHeadArticle = ({ body }) => {
  const readingTime = generateReadingTime(body.text)

  return { readingTime: readingTime.text }
}

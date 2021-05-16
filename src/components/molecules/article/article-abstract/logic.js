import generateReadingTime from "reading-time"

export const useAbstractArticle = ({ body }) => {
  const readingTime = generateReadingTime(body.text)

  return { readingTime: readingTime.text }
}

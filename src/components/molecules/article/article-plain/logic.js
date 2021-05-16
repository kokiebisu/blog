import generateReadingTime from "reading-time"

export const usePlainArticle = ({ body }) => {
  const readingTime = generateReadingTime(body.text)

  return { readingTime: readingTime.text }
}

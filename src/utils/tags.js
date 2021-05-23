export const convertTags = tags => {
  return tags.map(tag => {
    return {
      keyword: tag.keywords.document.data.name,
    }
  })
}

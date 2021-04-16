export const useBlog = () => {
  const data = useStaticQuery(GET_ARTICLES_QUERY)
  console.log("blog", data)
}

export const useSearchInput = ({ refine }) => {
  const onChange = e => refine(e.target.value)

  return { onChange }
}

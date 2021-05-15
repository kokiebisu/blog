import { navigate } from "gatsby"

export const useNavText = ({ to }) => {
  const handleRedirect = () => navigate(to)

  return { handleRedirect }
}

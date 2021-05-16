import { navigate } from "gatsby"

export const useTag = () => {
  const handleRedirect = () => navigate("/")
  return { handleRedirect }
}

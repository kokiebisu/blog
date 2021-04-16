import React from "react"
import { ProfileBadge } from "./badge-profile"

export const Badge = () => {
  const variants = {
    profile: <ProfileBadge />,
  }
  return variants[variant]
}

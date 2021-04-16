import React from "react"
import { ProfileBadge } from "./badge-profile"

export const Badge = ({ variant, ...props }) => {
  const variants = {
    profile: <ProfileBadge {...props} />,
  }
  return variants[variant]
}

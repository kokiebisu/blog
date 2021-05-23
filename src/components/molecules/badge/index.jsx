import React from "react"
import { ProfileBadge } from "./badge-profile"
import PropTypes from "prop-types"

export const Badge = ({ variant, ...props }) => {
  const variants = {
    profile: <ProfileBadge {...props} />,
  }
  return variants[variant]
}

Badge.propTypes = {
  variant: PropTypes.string,
}

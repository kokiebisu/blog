import React from "react"
import PropTypes from "prop-types"

export const ProfileBadgeTemplate = ({ image, name, title }) => {
  return (
    <div className="flex items-center">
      <div className="w-12 h-12 border-2 border-blue-600 rounded-full">
        <img
          src={image}
          alt="avatar"
          className="block w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="ml-3">
        <div>
          <h5 className="dark:text-white">{name}</h5>
        </div>
        <div>
          <p className="dark:text-gray-200">{title}</p>
        </div>
      </div>
    </div>
  )
}

ProfileBadgeTemplate.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
}

import React from "react"

export const ProfileBadge = ({ image, name, title }) => {
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
          <h5>{name}</h5>
        </div>
        <div>
          <p>{title}</p>
        </div>
      </div>
    </div>
  )
}

import React from "react"
import PropTypes from "prop-types"

export const SunnyIcon = ({ fill, size }) => {
  return (
    <div style={{ height: size, width: size }}>
      <svg
        height="100%"
        viewBox="0 0 512 512"
        width="100%"
        style={{ display: "block" }}
      >
        <g>
          <path
            fill={fill}
            d="m256 400c-79.402 0-144-64.598-144-144s64.598-144 144-144 144 64.598 144 144-64.598 144-144 144zm0-256c-61.757 0-112 50.243-112 112s50.243 112 112 112 112-50.243 112-112-50.243-112-112-112z"
          />
          <path
            fill={fill}
            d="m256 80c-8.837 0-16-7.164-16-16v-48c0-8.836 7.163-16 16-16s16 7.164 16 16v48c0 8.836-7.163 16-16 16z"
          />
          <path
            fill={fill}
            d="m256 512c-8.837 0-16-7.164-16-16v-48c0-8.836 7.163-16 16-16s16 7.164 16 16v48c0 8.836-7.163 16-16 16z"
          />
          <path
            fill={fill}
            d="m496 272h-48c-8.837 0-16-7.164-16-16s7.163-16 16-16h48c8.837 0 16 7.164 16 16s-7.163 16-16 16z"
          />
          <path
            fill={fill}
            d="m64 272h-48c-8.837 0-16-7.164-16-16s7.163-16 16-16h48c8.837 0 16 7.164 16 16s-7.163 16-16 16z"
          />
          <path
            fill={fill}
            d="m391.765 136.235c-14.126 0-21.422-17.206-11.313-27.314l33.941-33.941c6.249-6.248 16.38-6.249 22.627 0 6.249 6.248 6.249 16.379 0 22.627l-33.941 33.941c-3.125 3.125-7.22 4.687-11.314 4.687z"
          />
          <path
            fill={fill}
            d="m86.294 441.706c-14.126 0-21.422-17.206-11.313-27.314l33.941-33.941c6.25-6.248 16.381-6.248 22.627 0 6.249 6.248 6.249 16.379 0 22.627l-33.942 33.942c-3.124 3.123-7.218 4.686-11.313 4.686z"
          />
          <path
            fill={fill}
            d="m425.706 441.706c-4.095 0-8.189-1.562-11.313-4.686l-33.941-33.941c-6.249-6.249-6.249-16.379 0-22.627 6.248-6.249 16.379-6.249 22.627 0l33.941 33.941c10.108 10.106 2.812 27.313-11.314 27.313z"
          />
          <path
            fill={fill}
            d="m120.235 136.235c-4.095 0-8.189-1.562-11.313-4.686l-33.942-33.941c-6.249-6.249-6.249-16.379 0-22.627 6.248-6.249 16.379-6.249 22.627 0l33.941 33.941c10.109 10.107 2.813 27.313-11.313 27.313z"
          />
        </g>
      </svg>
    </div>
  )
}

SunnyIcon.propTypes = {
  size: PropTypes.number,
  fill: PropTypes.string,
}

import React from "react"
import PropTypes from "prop-types"

export const MoonIcon = ({ fill, size }) => {
  return (
    <div style={{ height: size, width: size }}>
      <svg
        style={{ display: "block" }}
        viewBox="0 0 512 512"
        width="100%"
        height="100%"
      >
        <g>
          <path
            fill={fill}
            d="M459.782,347.328c-4.288-5.28-11.488-7.232-17.824-4.96c-17.76,6.368-37.024,9.632-57.312,9.632
			c-97.056,0-176-78.976-176-176c0-58.4,28.832-112.768,77.12-145.472c5.472-3.712,8.096-10.4,6.624-16.832
			S285.638,2.4,279.078,1.44C271.59,0.352,264.134,0,256.646,0c-132.352,0-240,107.648-240,240s107.648,240,240,240
			c84,0,160.416-42.688,204.352-114.176C464.55,360.032,464.038,352.64,459.782,347.328z"
          />
        </g>
      </svg>
    </div>
  )
}

MoonIcon.propTypes = {
  size: PropTypes.number,
  fill: PropTypes.string,
}

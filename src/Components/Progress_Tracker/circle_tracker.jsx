

import PropTypes from "prop-types";

export function CircleProgress({ percentage }) {
  const radius = 30; // radius of circle
  const stroke = 6;  // thickness
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg
      height={radius * 2}
      width={radius * 2}
    >
      {/* background circle */}
      <circle
        stroke="#ddd"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      {/* progress circle */}
      <circle
        stroke="tomato"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference + " " + circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        style={{ transition: "stroke-dashoffset 0.35s" }}
      />
      {/* percentage text */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="14"
        fontWeight="bold"
      >
        {percentage}%
      </text>
    </svg>
  );
}

CircleProgress.propTypes = {
  percentage: PropTypes.number.isRequired,
};



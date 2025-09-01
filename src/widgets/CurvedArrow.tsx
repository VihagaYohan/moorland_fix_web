interface CurvedArrowProps {
  width?: number;
  height?: number;
  strokeColor?: string;
  strokeWidth?: number;
  flip?: boolean; // to reverse direction on mobile if needed
}

export default function CurvedArrow({
  width = 100,
  height = 40,
  strokeColor = "#D1D5DB", // Tailwind gray-300
  strokeWidth = 2,
  flip = false,
}: CurvedArrowProps) {
  const transform = flip ? "scale(-1,1) translate(-100,0)" : "";

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-2"
    >
      <path
        d={`M 0 ${height / 2} C ${width / 3} 0, ${(2 * width) / 3} ${height}, ${
          width - 10
        } ${height / 2}`}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        fill="none"
        transform={transform}
        markerEnd="url(#arrowhead)"
      />
      <defs>
        <marker
          id="arrowhead"
          markerWidth="6"
          markerHeight="6"
          refX="5"
          refY="3"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M0,0 L0,6 L6,3 z" fill={strokeColor} />
        </marker>
      </defs>
    </svg>
  );
}

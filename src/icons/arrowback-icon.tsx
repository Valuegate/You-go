import { IconProps } from "./types";

export const ArrowBackIcon = ({ color, width, height }: IconProps) => {
  return (
    <svg
      width={width ?? "24"}
      height={height ?? "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.57007 5.92993L3.50007 11.9999L9.57007 18.0699"
        stroke="#2C4C3B"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.5 12H3.67"
        stroke="#2C4C3B"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

import { IconProps } from "./types";

export const ArrowRightIcon = ({ color, width, height }: IconProps) => {
  return (
    <svg
      width={width ?? "21"}
      height={height ?? "22"}
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.6106 17.7644L13.1798 12.1952C13.8375 11.5375 13.8375 10.4613 13.1798 9.80354L7.6106 4.23438"
        stroke={color ?? "white"}
        stroke-width="1.28125"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

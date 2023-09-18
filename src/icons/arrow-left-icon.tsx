import { IconProps } from "./types";

export const ArrowLeftIcon = ({ color, width, height }: IconProps) => {
  return (
    <svg
      width={width ?? "21"}
      height={height ?? "22"}
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.8894 17.7644L7.32024 12.1952C6.66253 11.5375 6.66253 10.4613 7.32024 9.80354L12.8894 4.23438"
        stroke={color ?? "#2C4C3B"}
        stroke-width="1.28125"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

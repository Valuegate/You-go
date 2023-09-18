import { IconProps } from "./types";

export const LevelIcon = ({ color, width, height }: IconProps) => {
  return (
    <svg
      width={width ?? "21"}
      height={height ?? "21"}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.33325 12.1836C3.10825 15.9836 6.46659 18.8336 10.4999 18.8336C14.5166 18.8336 17.8666 15.9919 18.6582 12.2086"
        stroke={color ?? "#292D32"}
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.6749 8.88317C17.9249 5.04984 14.5499 2.1665 10.4999 2.1665C6.47492 2.1665 3.11659 5.02485 2.33325 8.81651"
        stroke={color ?? "#292D32"}
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.5 11.75C11.1904 11.75 11.75 11.1904 11.75 10.5C11.75 9.80964 11.1904 9.25 10.5 9.25C9.80964 9.25 9.25 9.80964 9.25 10.5C9.25 11.1904 9.80964 11.75 10.5 11.75Z"
        stroke={color ?? "#292D32"}
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

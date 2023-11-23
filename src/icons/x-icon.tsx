import { IconProps } from "./types";

export const XIcon = ({ color, width, height }: IconProps) => {
  return (
    <svg
      width={width ?? "16"}
      height={height ?? "16"}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.2175 1.26953H14.4665L9.55316 6.88519L15.3334 14.5268H10.8075L7.26271 9.89222L3.20665 14.5268H0.956308L6.21164 8.52026L0.666687 1.26953H5.30743L8.51162 5.50575L12.2175 1.26953ZM11.4282 13.1807H12.6744L4.63028 2.54495H3.29299L11.4282 13.1807Z"
        fill={color ?? "#D4145A"}
      />
    </svg>
  );
};

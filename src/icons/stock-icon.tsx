import { IconProps } from "./types";

export const StockIcon = ({ color, width, height }: IconProps) => {
  return (
    <svg
      width={width ?? "13"}
      height={height ?? "17"}
      viewBox="0 0 13 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.119 14.1803V4.87604C12.119 4.72055 12.0714 4.58092 11.9635 4.47303L8.19357 0.671361C8.08568 0.563467 7.94605 0.5 7.79056 0.5H0.571202C0.263388 0.5 0 0.763388 0 1.0712V15.9256C0 16.2493 0.263388 16.4968 0.571202 16.4968H11.5446C11.8683 16.4968 12.1158 16.2493 12.1158 15.9256V15.3386H1.15827V1.65827H6.78461V5.29492C6.78461 5.61543 7.04482 5.87565 7.36533 5.87565H10.9607V14.1803H12.119ZM7.94605 2.06763L10.5609 4.71737H7.94605V2.06763Z"
        fill={color ?? "#0C0B0B"}
      />
    </svg>
  );
};

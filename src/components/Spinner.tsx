import { CgSpinner } from "react-icons/cg";

type SpinnerOptions = {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "none" | "inherit";
  color?: "primary" | "white" | "black" | "muted" | "rich" | "none" | "inherit";
  className?: string;
  [x: string]: any;
};

// Size classes
const sizeClasses = {
  xs: "text-base",
  sm: "text-xl",
  base: "text-3xl",
  lg: "text-5xl",
  xl: "text-7xl",
  none: "",
  inherit: "text-[1em]",
};

// Color classes
const colorClasses = {
  primary: "text-primary",
  white: "text-white",
  black: "text-gray-900",
  muted: "text-muted",
  rich: "text-rich",
  none: "",
  inherit: "text-current",
};

export default function Spinner({
  size = "base",
  color = "primary",
  className = "",
  ...rest
}: SpinnerOptions) {
  return (
    <CgSpinner
      className={`animate-spinner ${sizeClasses[size]} ${colorClasses[color]} ${className}`}
      {...rest}
    />
  );
}

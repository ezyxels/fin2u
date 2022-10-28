type TextOptions = {
  as?: React.ElementType;
  children: React.ReactNode;
  color?:
    | "rich"
    | "muted"
    | "white"
    | "black"
    | "primary"
    | "secondary"
    | "tertiary"
    | "none";
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  align?: "left" | "center" | "right" | "justify" | "inherit";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";
  leading?: "xs" | "sm" | "base" | "lg" | "xl";
  font?: "sans" | "serif" | "mono";
  className?: string;
  [x: string]: any;
};

// Color classes
const colorClasses = {
  rich: "text-rich",
  muted: "text-muted",
  white: "text-white",
  black: "text-gray-900",
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
  none: "",
};

// Size classes -> https://tailwindcss.com/docs/font-size
const sizeClasses = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-lg xs:text-xl",
  "2xl": "text-xl sm:text-2xl",
  "3xl": "text-xl sm:text-2xl md:text-3xl",
  "4xl": "text-2xl sm:text-3xl md:text-4xl",
};

// Align classes
const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
  inherit: "",
};

// Font classes
const fontClasses = {
  sans: "font-sans",
  serif: "font-serif",
  mono: "font-mono",
};

const leadingClasses = {
  xs: "leading-tight",
  sm: "leading-snug",
  base: "leading-[1.6]",
  lg: "leading-[1.8]",
  xl: "leading-loose",
};

// Weight classes
const weightClasses = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
};

export default function Text({
  as: Tag = "p",
  color = "muted",
  size = "base",
  align = "inherit",
  leading = "lg",
  weight = "normal",
  font = "sans",
  className = "",
  children,
  ...rest
}: TextOptions) {
  // Logic goes here
  return (
    <Tag
      className={`${colorClasses[color]} ${sizeClasses[size]} ${alignClasses[align]} ${fontClasses[font]} ${leadingClasses[leading]} ${weightClasses[weight]} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

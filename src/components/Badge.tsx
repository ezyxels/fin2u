type BadgeOptions = {
  children: string;
  as?: React.ElementType;
  variant?: "filled" | "tinted" | "outlined";
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "error"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "muted"
    | "rich";
  shape?: "square" | "rounded" | "pill";
  size?: "sm" | "lg";
  hasDot?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  [x: string]: any;
};

// Type classes
const variantClasses = {
  filled: "text-opacity-90",
  tinted: "bg-opacity-15",
  outlined: "shadow-[inset_0px_0px_0px_1.5px] bg-opacity-0",
};

// Filled type color classes
const filledColorClasses = {
  primary: "bg-primary text-white",
  secondary: "bg-secondary text-white",
  tertiary: "bg-tertiary text-white",
  success: "bg-success text-white",
  error: "bg-error text-white",
  warning: "bg-warning text-white",
  info: "bg-info text-white",
  light: "bg-gray-50 text-gray-900",
  dark: "bg-gray-900 text-white",
  muted: "bg-muted text-invert",
  rich: "bg-rich text-invert",
};

// Tinted color classes
const tintedColorClasses = {
  primary: "bg-primary text-primary",
  secondary: "bg-secondary text-secondary",
  tertiary: "bg-tertiary text-tertiary",
  success: "bg-success text-success",
  error: "bg-error text-error",
  warning: "bg-warning text-warning",
  info: "bg-info text-info",
  light: "bg-gray-100 text-white",
  dark: "bg-gray-800 text-gray-900",
  muted: "bg-muted text-muted",
  rich: "bg-rich text-rich",
};

// Outlined color classes
const outlinedColorClasses = {
  primary: "bg-primary text-primary shadow-primary",
  secondary: "bg-secondary text-secondary shadow-secondary",
  tertiary: "bg-tertiary text-tertiary shadow-tertiary",
  success: "bg-success text-success shadow-success",
  error: "bg-error text-error shadow-error",
  warning: "bg-warning text-warning shadow-warning",
  info: "bg-info text-info shadow-info",
  light: "bg-gray-100 text-gray-100 shadow-gray-100",
  dark: "bg-gray-900 text-gray-900 shadow-gray-900",
  muted: "bg-muted text-muted shadow-muted",
  rich: "bg-rich text-rich shadow-rich",
};

// Shape classes
const shapeClasses = {
  square: "rounded-none",
  rounded: "rounded-md",
  pill: "rounded-full",
};

// Size classes
const sizeClasses = {
  sm: "px-2.5 py-1.5 text-xs",
  lg: "px-3.5 py-2.5 text-base",
};

export default function Badge({
  as: Tag = "span",
  variant = "tinted",
  color = "primary",
  shape = "pill",
  size = "sm",
  hasDot = false,
  leftIcon = null,
  rightIcon = null,
  className = "",
  onClick,
  children,
  ...rest
}: BadgeOptions) {
  return (
    <Tag
      className={`inline-flex items-center justify-center font-medium leading-none tracking-wide no-underline 
      ${variantClasses[variant]}
      ${variant === "filled" ? filledColorClasses[color] : ""} 
      ${variant === "tinted" ? tintedColorClasses[color] : ""} 
      ${variant === "outlined" ? outlinedColorClasses[color] : ""} 
      ${shapeClasses[shape]} ${sizeClasses[size]}
      ${className}
      `}
      onClick={onClick}
      {...rest}
    >
      {/* Dot */}
      {hasDot === true && (
        <span
          className={`mr-1.5 h-1.5 w-1.5 rounded-full bg-current opacity-70`}
        ></span>
      )}

      {/* Left icon */}
      {leftIcon !== null && (
        <span className={`mr-1 text-[1em]`}>{leftIcon}</span>
      )}

      {/* Text */}
      <span>{children}</span>

      {/* Left icon */}
      {rightIcon !== null && (
        <span className={`ml-1 text-[1em]`}>{rightIcon}</span>
      )}
    </Tag>
  );
}

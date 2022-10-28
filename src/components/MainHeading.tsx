type MainHeadingOptions = {
  as?: React.ElementType;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  size?: "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "none";
  number?: string;
  className?: string;
  children: React.ReactNode;
  [x: string]: any;
};

type MainHeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

// Size classes -> https://tailwindcss.com/docs/font-size
const sizeClasses = {
  sm: "text-lg",
  base: "text-xl xs:text-2xl",
  lg: "text-2xl xs:text-3xl lg:text-4xl",
  xl: "text-3xl xs:text-4xl lg:text-6xl",
  "2xl": "text-3xl xs:text-4xl sm:text-5xl lg:text-7xl",
  "3xl": "text-4xl xs:text-5xl sm:text-7xl lg:text-9xl",
  none: "",
};

export default function MainHeading({
  as: Tag = "div",
  level = 1,
  size = "xl",
  number = "",
  className = "",
  children,
  ...rest
}: MainHeadingOptions) {
  // dynamic tag generated from level prop
  const Level = `h${level}` as MainHeadingTag;

  return (
    <Tag className={`flex items-start ${className}`}>
      <Level
        className={`mr-2 font-display font-bold leading-[1.2] text-white 
        ${sizeClasses[size]}`}
        {...rest}
      >
        {children}
      </Level>
      {number !== "" && (
        <span className="block font-display text-base font-semibold leading-[1.2] text-white md:text-lg lg:text-xl">
          {number}
        </span>
      )}
    </Tag>
  );
}

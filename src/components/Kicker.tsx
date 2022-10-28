type Props = {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  [x: string]: any;
};

export default function Kicker({
  as: Tag = "span",
  className = "",
  children,
  ...rest
}: Props) {
  // Logic goes here
  return (
    <Tag
      className={`block text-sm font-semibold uppercase leading-tight tracking-widest xs:text-base sm:text-lg ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

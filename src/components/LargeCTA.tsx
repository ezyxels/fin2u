import Heading from "./Heading";

type Props = {
  as?: React.ElementType;
  title?: string;
  text?: string;
  children: React.ReactNode;
  className?: string;
  [x: string]: any;
};

export default function LargeCTA({
  as: Tag = "div",
  title = "Lorem ipsum, dolor sit amet consectetur",
  text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid architecto eveniet sint quia quis? Laudantium natus at accusamus.",
  className = "",
  children,
  ...rest
}: Props) {
  // Logic goes here
  return (
    <Tag
      className={`relative z-0 flex w-full flex-col items-center justify-center gap-10 overflow-hidden rounded-xl bg-gradient-to-tl from-secondary to-primary px-6 py-24 ${className}`}
      {...rest}
    >
      <img
        src="/svg/2.svg"
        alt="2"
        className="pointer-events-none absolute top-0 -right-32 -z-10 hidden h-full opacity-50 md:block"
      />
      <Heading
        level={3}
        size="lg"
        align="center"
        color="white"
        className="max-w-3xl"
      >
        {title}
      </Heading>
      <p className="max-w-prose text-center text-white">{text}</p>
      <div className="flex flex-col gap-5 sm:flex-row">{children}</div>
    </Tag>
  );
}

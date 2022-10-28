import Heading from "@components/Heading";
import Kicker from "@components/Kicker";
import ScrollReveal from "@components/ScrollReveal";

type Props = {
  as?: React.ElementType;
  kicker: string;
  heading: string;
  caption?: string | null;
  gradient?: "top" | "left" | "right";
  className?: string;
  [x: string]: any;
};

const gradientClasses = {
  top: "bg-gradient-to-t",
  left: "bg-gradient-to-tl via-transparent",
  right: "bg-gradient-to-tr via-transparent",
};

export default function Template({
  as: Tag = "div",
  className = "",
  kicker = "kicker",
  heading = "heading",
  gradient = "top",
  caption = null,
  ...rest
}: Props) {
  // Logic goes here
  return (
    <Tag
      className={`block ${gradientClasses[gradient]} from-transparent to-tertiary py-16 px-8 sm:px-14 md:py-28 ${className}`}
      {...rest}
    >
      <ScrollReveal
        staggerChildren
        staggerChildrenIncrement="200"
        className="flex flex-col items-center justify-center"
      >
        <Kicker className="text-center text-primary">{kicker}</Kicker>
        <Heading level={2} size="lg" className="mt-5" align="center">
          {heading}
        </Heading>
        {caption !== null && (
          <p className="mt-10 max-w-prose text-center">{caption}</p>
        )}
      </ScrollReveal>
    </Tag>
  );
}

import ExportedImage from "next-image-export-optimizer";
import Heading from "./Heading";

type Props = {
  as?: React.ElementType;
  imageSrc?: string;
  title?: string;
  text?: string;
  children: React.ReactNode;
  className?: string;
  [x: string]: any;
};

export default function LargeCTA({
  as: Tag = "div",
  imageSrc = "/images/cung-s-doutnikem.jpg",
  title = "Lorem ipsum, dolor sit amet consectetur",
  text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid architecto eveniet sint quia quis? Laudantium natus at accusamus.",
  className = "",
  children,
  ...rest
}: Props) {
  // Logic goes here
  return (
    <Tag
      className={`grid w-full grid-cols-1 overflow-hidden rounded-xl md:grid-cols-2 ${className}`}
      {...rest}
    >
      <ExportedImage
        src={imageSrc}
        alt={"alt"}
        width={800}
        height={500}
        loading="lazy"
        objectFit="cover"
        className="col-span-1 aspect-[16/10] h-full"
      />
      <div className="col-span-1 flex flex-col items-start justify-start gap-10 bg-gradient-to-tl from-primary to-secondary px-6 py-24 sm:px-10 xl:px-20">
        <Heading level={3} size="lg" color="white" className="max-w-3xl">
          {title}
        </Heading>
        <p className="text-white">{text}</p>
        <div className="flex flex-col gap-5 sm:flex-row">{children}</div>
      </div>
    </Tag>
  );
}

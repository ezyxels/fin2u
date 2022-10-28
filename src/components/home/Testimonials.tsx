import ScrollReveal from "@components/ScrollReveal";
import ExportedImage from "next-image-export-optimizer";
// import Link from "next/link";

type Props = {
  className?: string;
};

const testimonials = [
  {
    id: 1,
    photoSrc: "/images/testimonial.jpg",
    name: "Jméno Příjmení",
    position: "Specializace",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Aliquam id dolor. Etiam commodo dui eget wisi. Maecenas lorem. Integer vulputate sem a nibh rutrum consequat.",
    class: "flex",
  },
  {
    id: 2,
    photoSrc: "/images/testimonial.jpg",
    name: "Jméno Příjmení",
    position: "Specializace",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Aliquam id dolor. Etiam commodo dui eget wisi. Maecenas lorem. Integer vulputate sem a nibh rutrum consequat.",
    class: "flex sm:translate-y-10",
  },
  {
    id: 3,
    photoSrc: "/images/testimonial.jpg",
    name: "Jméno Příjmení",
    position: "Specializace",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Aliquam id dolor. Etiam commodo dui eget wisi. Maecenas lorem. Integer vulputate sem a nibh rutrum consequat.",
    class: "flex ",
  },
  {
    id: 4,
    photoSrc: "/images/testimonial.jpg",
    name: "Jméno Příjmení",
    position: "Specializace",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Aliquam id dolor. Etiam commodo dui eget wisi. Maecenas lorem. Integer vulputate sem a nibh rutrum consequat.",
    class: "flex sm:translate-y-10 xl:translate-y-0",
  },
  {
    id: 5,
    photoSrc: "/images/testimonial.jpg",
    name: "Jméno Příjmení",
    position: "Specializace",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Aliquam id dolor. Etiam commodo dui eget wisi. Maecenas lorem. Integer vulputate sem a nibh rutrum consequat.",
    class: "hidden sm:flex xl:translate-y-10",
  },
  {
    id: 6,
    photoSrc: "/images/testimonial.jpg",
    name: "Jméno Příjmení",
    position: "Specializace",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Aliquam id dolor. Etiam commodo dui eget wisi. Maecenas lorem. Integer vulputate sem a nibh rutrum consequat.",
    class: "hidden sm:flex sm:translate-y-10 xl:translate-y-0",
  },
  {
    id: 7,
    photoSrc: "/images/testimonial.jpg",
    name: "Jméno Příjmení",
    position: "Specializace",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Aliquam id dolor. Etiam commodo dui eget wisi. Maecenas lorem. Integer vulputate sem a nibh rutrum consequat.",
    class: "hidden sm:flex ",
  },
  {
    id: 8,
    photoSrc: "/images/testimonial.jpg",
    name: "Jméno Příjmení",
    position: "Specializace",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Aliquam id dolor. Etiam commodo dui eget wisi. Maecenas lorem. Integer vulputate sem a nibh rutrum consequat.",
    class: "hidden sm:flex sm:translate-y-10",
  },
  {
    id: 9,
    photoSrc: "/images/testimonial.jpg",
    name: "Jméno Příjmení",
    position: "Specializace",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Aliquam id dolor. Etiam commodo dui eget wisi. Maecenas lorem. Integer vulputate sem a nibh rutrum consequat.",
    class: "hidden xl:flex ",
  },
  {
    id: 10,
    photoSrc: "/images/testimonial.jpg",
    name: "Jméno Příjmení",
    position: "Specializace",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Aliquam id dolor. Etiam commodo dui eget wisi. Maecenas lorem. Integer vulputate sem a nibh rutrum consequat.",
    class: "hidden xl:flex sm:translate-y-10 xl:translate-y-0",
  },
  {
    id: 11,
    photoSrc: "/images/testimonial.jpg",
    name: "Jméno Příjmení",
    position: "Specializace",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Aliquam id dolor. Etiam commodo dui eget wisi. Maecenas lorem. Integer vulputate sem a nibh rutrum consequat.",
    class: "hidden xl:flex xl:translate-y-10",
  },
  {
    id: 12,
    photoSrc: "/images/testimonial.jpg",
    name: "Jméno Příjmení",
    position: "Specializace",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Aliquam id dolor. Etiam commodo dui eget wisi. Maecenas lorem. Integer vulputate sem a nibh rutrum consequat.",
    class: "hidden xl:flex sm:translate-y-10 xl:translate-y-0",
  },
];

export default function Testimonials({ className = "" }: Props) {
  return (
    <div
      className={`grid grid-cols-1 items-start gap-10 sm:grid-cols-2 xl:grid-cols-3 ${className}`}
    >
      {testimonials.map((testimonial) => (
        <ScrollReveal
          animation="fade"
          duration="1200"
          key={testimonial.id}
          className={`flex-col rounded-xl bg-white p-5 shadow-xl sm:p-12 ${testimonial.class}`}
        >
          <div className="flex items-center justify-start">
            <div className="mr-5 aspect-square h-12 w-12 overflow-hidden rounded-full">
              <ExportedImage
                src={testimonial.photoSrc}
                alt={testimonial.name}
                width={100}
                height={100}
                loading="lazy"
                objectFit="cover"
                className="aspect-square h-full w-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-widest text-primary sm:text-base">
                {testimonial.name}
              </span>
              <span className="text-xs tracking-wider text-muted">
                {testimonial.position}
              </span>
            </div>
          </div>
          <p className="mt-8 w-full text-sm text-muted">{testimonial.text}</p>
        </ScrollReveal>
      ))}
    </div>
  );
}

import Heading from "@components/Heading";
import ScrollReveal from "@components/ScrollReveal";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

type Props = {
  className?: string;
};

const team = [
  {
    name: "David Šimana",
    position: "CEO, Hypoteční specialista",
    linkHref: "/tym/david-simana",
    photoSrc: "/images/poradci/david-simana.jpg",
  },
  {
    name: "Duc Trung Nguyen",
    position: "Ředitel pro vzdělání",
    linkHref: "/tym/duc-trung-nguyen",
    photoSrc: "/images/poradci/duc-trung-nguyen.jpg",
  },
  {
    name: "Jan Voves",
    position: "Obchodní konzultant",
    linkHref: "/tym/jan-voves",
    photoSrc: "/images/poradci/jan-voves.jpg",
  },
  {
    name: "Daniel Říha",
    position: "Investiční poradce, Analytik",
    linkHref: "/tym/daniel-riha",
    photoSrc: "/images/poradci/daniel-riha.jpg",
  },
  {
    name: "Zdeněk Zajíček",
    position: "Manažer, úvěrový specialisa",
    linkHref: "/tym/zdenek-zajicek",
    photoSrc: "/images/poradci/zdenek-zajicek.jpg",
  },
  {
    name: "Václav Kraut",
    position: "Investiční poradce",
    linkHref: "/tym/vaclav-kraut",
    photoSrc: "/images/poradci/vaclav-kraut.jpg",
  },
];

export default function Team({ className = "" }: Props) {
  return (
    <div
      className={`team-cards-shifted grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 sm:gap-y-20 sm:pb-64 ${className}`}
    >
      {team.map((member) => (
        <Link href={member.linkHref} key={member.name}>
          <ScrollReveal
            as={"a"}
            animation="fade"
            tabIndex="0"
            className="team-card-transition group flex cursor-pointer flex-col bg-white outline-none hover:shadow-2xl focus-visible:ring-4 focus-visible:ring-primary/70"
          >
            <div className="aspect-[16/10] w-full">
              <ExportedImage
                src={member.photoSrc}
                alt={member.name}
                width={800}
                height={500}
                loading="lazy"
                objectFit="cover"
                className="aspect-[16/10] h-full w-full"
              />
            </div>
            <div className="flex flex-col items-center justify-center py-6 sm:py-12">
              <Heading
                level={3}
                size="base"
                className="transition-colors duration-300"
              >
                {member.name}
              </Heading>
              <span className="mt-1.5 text-sm tracking-wider text-muted">
                {member.position}
              </span>
              <div className="mt-2.5 font-semibold tracking-wider text-muted transition-colors duration-200 group-hover:text-primary sm:text-lg">
                Zjistit více &#8594;
              </div>
            </div>
          </ScrollReveal>
        </Link>
      ))}
    </div>
  );
}

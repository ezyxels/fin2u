import Button from "@components/Button";
import CollabLogos from "@components/CollabLogos";
import Heading from "@components/Heading";
import Hero from "@components/Hero";
import LargeCTA from "@components/LargeCTA";
import LargeImageCTA from "@components/LargeImageCTA";
import ScrollReveal from "@components/ScrollReveal";
import SectionHeader from "@components/SectionHeader";
import Seo from "@components/Seo";
import Wrapper from "@components/Wrapper";
import { contacts } from "@configs/contacts";
import AppLayout from "@layouts/AppLayout";
import type { NextPage } from "next";
import ExportedImage from "next-image-export-optimizer";
import { HiMail, HiPhone } from "react-icons/hi";

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
];

const ZajisteniRizik: NextPage = () => {
  return (
    <AppLayout navbarInitialStyle="dark">
      <Seo title="Zajištění rizik" description="Popisek služby" />

      {/* Hero */}
      <Hero>
        <ScrollReveal
          as={"div"}
          staggerChildren
          staggerChildrenIncrement="200"
          className="flex flex-col items-center gap-8"
        >
          <Heading level={1} size="xl" align="center" color="white">
            Zajištění rizik
          </Heading>
          <p className="max-w-prose text-center text-lg text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt atque
            ipsam, nulla similique voluptatibus laboriosam voluptatem accusamus
            ducimus.
          </p>
          <div className="mt-8 flex gap-5 pb-28">
            <Button>Call to action</Button>
            <Button color="light">Call to action</Button>
          </div>
        </ScrollReveal>
      </Hero>

      {/* Content */}
      <Wrapper size="sm" paddedContent="base">
        <ScrollReveal
          animation="slide-up"
          className="mb-16 flex flex-col items-center justify-center sm:mb-28"
        >
          <Heading level={2} size="base">
            <span className="mr-2 text-[1.25em] text-primary">1.</span> Lorem
            ipsum dolor sit amet?
          </Heading>
          <p className="mt-8 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sed
            veritatis ullam magnam quas molestias saepe aut facilis! Et dolorum
            id nostrum labore corporis assumenda animi quaerat, quam hic
            tempora!
          </p>
        </ScrollReveal>
        <ScrollReveal
          animation="slide-up"
          className="my-16 flex flex-col items-center justify-center sm:my-28"
        >
          <Heading level={2} size="base">
            <span className="mr-2 text-[1.25em] text-primary">2.</span> Lorem
            ipsum dolor sit amet?
          </Heading>
          <p className="mt-8 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sed
            veritatis ullam magnam quas molestias saepe aut facilis! Et dolorum
            id nostrum labore corporis assumenda animi quaerat, quam hic
            tempora!
          </p>
        </ScrollReveal>
        <ScrollReveal
          animation="slide-up"
          className="mt-16 flex flex-col items-center justify-center sm:mt-28"
        >
          <Heading level={2} size="base">
            <span className="mr-2 text-[1.25em] text-primary">3.</span> Lorem
            ipsum dolor sit amet?
          </Heading>
          <p className="mt-8 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sed
            veritatis ullam magnam quas molestias saepe aut facilis! Et dolorum
            id nostrum labore corporis assumenda animi quaerat, quam hic
            tempora!
          </p>
        </ScrollReveal>
      </Wrapper>

      {/* CTA 1 */}
      <Wrapper size="lg" paddedContent="base">
        <ScrollReveal>
          <LargeImageCTA imageSrc="/images/meeting.jpg">
            <Button
              as="a"
              href={contacts.rizika.emailLink}
              color="light"
              leftIcon={<HiMail />}
            >
              {contacts.rizika.emailLabel}
            </Button>
            <Button
              as="a"
              href={contacts.rizika.phoneLink}
              color="light"
              leftIcon={<HiPhone />}
            >
              {contacts.rizika.phoneLabel}
            </Button>
          </LargeImageCTA>
        </ScrollReveal>
      </Wrapper>

      {/* Spolupráce loga */}
      <Wrapper>
        <CollabLogos headingColor="primary" />
      </Wrapper>

      {/* Reference */}
      <SectionHeader
        gradient="top"
        kicker="Reference"
        heading="Naši klienti o nás napsali"
        className="mt-24 xl:mt-32"
      />
      <Wrapper className="pb-20 sm:pb-28">
        <div
          className={`grid grid-cols-1 items-start gap-10 sm:grid-cols-2 xl:grid-cols-3`}
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
              <p className="mt-8 w-full text-sm text-muted">
                {testimonial.text}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </Wrapper>

      {/* CTA 2 */}
      <Wrapper size="lg" paddedContent="base">
        <ScrollReveal>
          <LargeCTA>
            <Button
              as="a"
              href={contacts.rizika.emailLink}
              color="light"
              leftIcon={<HiMail />}
            >
              {contacts.rizika.emailLabel}
            </Button>
            <Button
              as="a"
              href={contacts.rizika.phoneLink}
              color="light"
              leftIcon={<HiPhone />}
            >
              {contacts.rizika.phoneLabel}
            </Button>
          </LargeCTA>
        </ScrollReveal>
      </Wrapper>
    </AppLayout>
  );
};

export default ZajisteniRizik;

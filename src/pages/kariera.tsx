import Button from "@components/Button";
import Heading from "@components/Heading";
import Hero from "@components/Hero";
import LargeImageCTA from "@components/LargeImageCTA";
import ScrollReveal from "@components/ScrollReveal";
import Seo from "@components/Seo";
import Wrapper from "@components/Wrapper";
import AppLayout from "@layouts/AppLayout";
import type { NextPage } from "next";
import Link from "next/link";
import { HiMail } from "react-icons/hi";

const testimonials = [
  {
    id: 1,
    photoSrc: "/images/conf.jpg",
    name: "Jméno Příjmení",
    position: "Specializace",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Aliquam id dolor. Etiam commodo dui eget wisi. Maecenas lorem. Integer vulputate sem a nibh rutrum consequat.",
    class: "flex",
  },
  {
    id: 2,
    photoSrc: "/images/conf.jpg",
    name: "Jméno Příjmení",
    position: "Specializace",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Aliquam id dolor. Etiam commodo dui eget wisi. Maecenas lorem. Integer vulputate sem a nibh rutrum consequat.",
    class: "flex sm:translate-y-10",
  },
  {
    id: 3,
    photoSrc: "/images/conf.jpg",
    name: "Jméno Příjmení",
    position: "Specializace",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla est. Aliquam id dolor. Etiam commodo dui eget wisi. Maecenas lorem. Integer vulputate sem a nibh rutrum consequat.",
    class: "flex ",
  },
];

const Carrier: NextPage = () => {
  return (
    <AppLayout navbarInitialStyle="dark">
      <Seo title="Kariéra" description="Přidej se do týmu fin2u" />

      {/* Hero */}
      <Hero hasWatermark>
        <ScrollReveal
          as={"div"}
          staggerChildren
          staggerChildrenIncrement="200"
          className="flex flex-col items-center gap-8"
        >
          <Heading level={1} size="xl" align="center" color="white">
            Přidej se k nám do týmu
          </Heading>
          <p className="max-w-prose text-center text-lg text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt atque
            ipsam, nulla similique voluptatibus laboriosam voluptatem accusamus
            ducimus.
          </p>
          <div className="mt-8 flex gap-5 pb-28">
            <Button>Pracovní dotazník</Button> {/* -> Rovnou spustit */}
            <Button color="light">Zjistit více</Button>
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
            Lorem ipsum dolor sit amet?
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
            Lorem ipsum dolor sit amet?
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
            Lorem ipsum dolor sit amet?
          </Heading>
          <p className="mt-8 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sed
            veritatis ullam magnam quas molestias saepe aut facilis! Et dolorum
            id nostrum labore corporis assumenda animi quaerat, quam hic
            tempora!
          </p>
        </ScrollReveal>
      </Wrapper>

      {/* CTA */}
      <Wrapper size="lg" paddedContent="base">
        <ScrollReveal>
          <LargeImageCTA title="Chceš pracovat s námi?">
            <Link href="/kariera-test">
              <Button as="a" color="light" leftIcon={<HiMail />}>
                Přidej se k nám do týmu
              </Button>
            </Link>
          </LargeImageCTA>
        </ScrollReveal>
      </Wrapper>
    </AppLayout>
  );
};

export default Carrier;

import Button from "@components/Button";
import Heading from "@components/Heading";
import ContactForm from "@components/kontakt/ContactForm";
import LargeImageCTA from "@components/LargeImageCTA";
import ScrollReveal from "@components/ScrollReveal";
import Seo from "@components/Seo";
import Wrapper from "@components/Wrapper";
import { contacts } from "@configs/contacts";
import { socials } from "@configs/socials";
import AppLayout from "@layouts/AppLayout";
import type { NextPage } from "next";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiMail, HiPhone } from "react-icons/hi";

const Contact: NextPage = () => {
  return (
    <AppLayout navbarInitialStyle="light">
      <Seo title="Kontakt" description="Přidej se do týmu fin2u" />

      <div className="py-32">
        <Wrapper size="lg" className="relative mt-12 lg:mt-20">
          {/* <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] bg-primary" /> */}
          <img
            src="/svg/triangle-gradient.svg"
            alt="background"
            aria-hidden="true"
            width={"600"}
            height={"600"}
            className="absolute top-0 right-0 -z-10 hidden aspect-square h-[300px] w-[300px] lg:block xl:h-[600px] xl:w-[600px]"
          />

          <Wrapper
            size="base"
            className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:gap-16"
          >
            {/* Kontaktní údaje */}
            <div className="col-span-1 flex flex-col gap-4 lg:gap-8">
              <Heading level={1} size="xl">
                Kontakt
              </Heading>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                sunt dolore, a quisquam facilis numquam? Sit vero dignissimos
                quam culpa.
              </p>
              <div className="mt-8 flex flex-col gap-8 rounded-xl bg-body-100 p-6 sm:p-12">
                <Heading level={2} size="base">
                  Kontaktní informace
                </Heading>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis praesentium ad eligendi fugiat deserunt repellat
                  architecto dolores veniam illum, reprehenderit labore at, est
                  voluptatibus pariatur laboriosam consequuntur perspiciatis
                  deleniti modi.
                </p>
              </div>
              <a
                href={contacts.main.phoneLink}
                className="flex items-center justify-start rounded-xl bg-body-100 px-6 py-5 text-lg text-primary outline-none transition duration-300 hover:scale-105 hover:bg-primary/15 focus-visible:ring-4 focus-visible:ring-primary/70 sm:text-xl lg:px-12"
              >
                <HiPhone className="mr-4 scale-125" />
                <span className="block font-medium">
                  {contacts.main.phoneLabel}
                </span>
              </a>
              <a
                href={contacts.main.emailLink}
                className="flex items-center justify-start rounded-xl bg-body-100 px-6 py-5 text-lg text-primary outline-none transition duration-300 hover:scale-105 hover:bg-primary/15 focus-visible:ring-4 focus-visible:ring-primary/70 sm:text-xl lg:px-12"
              >
                <HiMail className="mr-4 scale-125" />
                <span className="block font-medium">
                  {contacts.main.emailLabel}
                </span>
              </a>
              <div className="flex items-center justify-start gap-8">
                <a
                  href={socials.facebook.link}
                  aria-label={socials.facebook.ariaLabel}
                  target="blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-full bg-gray-100 p-4 text-lg text-primary outline-none transition duration-300 hover:scale-[1.15] hover:bg-primary/15 focus-visible:ring-4 focus-visible:ring-primary/70 sm:text-xl"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={socials.instagram.link}
                  aria-label={socials.instagram.ariaLabel}
                  target="blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-full bg-gray-100 p-4 text-lg text-primary outline-none transition duration-300 hover:scale-[1.15] hover:bg-primary/15 focus-visible:ring-4 focus-visible:ring-primary/70 sm:text-xl"
                >
                  <FaInstagram />
                </a>
                <a
                  href={socials.linkedin.link}
                  aria-label={socials.linkedin.ariaLabel}
                  target="blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-full bg-gray-100 p-4 text-lg text-primary outline-none transition duration-300 hover:scale-[1.15] hover:bg-primary/15 focus-visible:ring-4 focus-visible:ring-primary/70 sm:text-xl"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            {/* Formulář */}
            <div className="col-span-1 rounded-xl bg-body p-6 shadow-xl sm:p-12 lg:mt-20">
              <ContactForm />
            </div>
          </Wrapper>
        </Wrapper>
      </div>

      {/* Kde nás najdete */}
      <Wrapper paddedContent="sm">
        <div className="flex w-full flex-col items-center justify-center gap-8">
          <Heading level={2} size="lg" align="center">
            Kde nás najdete
          </Heading>
          <p className="max-w-prose text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            reprehenderit nulla facilis recusandae cumque, voluptas reiciendis?
          </p>
        </div>
        <div className="mt-20 grid grid-cols-2 gap-10 lg:grid-cols-3">
          <div className="col-span-1 flex flex-col gap-6">
            <Heading level={3} size="sm">
              Plzeň
            </Heading>
            <p>Prešovská 15, 301 00 Plzeň 3</p>
          </div>
          <div className="col-span-1 flex flex-col gap-6">
            <Heading level={3} size="sm">
              Praha
            </Heading>
            <p>Na Poříčí 24, 110 00 Nové Město</p>
          </div>
          <div className="col-span-1 flex flex-col gap-6">
            <Heading level={3} size="sm">
              Brno
            </Heading>
            <p>Olomoucká 1129/61, 627 00 Brno-Černovice</p>
          </div>
        </div>
      </Wrapper>

      {/* CTA */}
      <Wrapper size="lg" paddedContent="sm" className="mb-28">
        <ScrollReveal>
          <LargeImageCTA title="Chceš pracovat s námi?">
            <Link href="/kariera">
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

export default Contact;

import Badge from "@components/Badge";
import Button from "@components/Button";
import Heading from "@components/Heading";
import LargeCTA from "@components/LargeCTA";
import ScrollReveal from "@components/ScrollReveal";
import SectionHeader from "@components/SectionHeader";
import Seo from "@components/Seo";
import Question from "@components/tym/Question";
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
    name: "Jiří Dvořák",
    position: "Specializace",
    text: "p.Zajíček naprosto přesně ví, co dělá. Umí člověka uklidnit a vysvětlit vše, co potřebujete vědět. Když se ho desetkrát zeptáte, vysvětlí to jedenáctkrát. Toho si cením. Doporučuji!",
    class: "flex",
  },
  {
    id: 2,
    photoSrc: "/images/testimonial.jpg",
    name: "Jaroslav Lindner",
    position: "Specializace",
    text: "Zdeněk je poradcem nové generace. Líbí se mi na něm ta profesionalita. Umí vás vzdělat a musím říct, že si pak vůbec nemůžete stěžovat, že něčemu nerozumíte. Po 3-4 schůzkách s ním, jsem si i já, finančně nevzdělaný člověk připadal skoro jako specialista.",
    class: "flex sm:translate-y-10",
  },
  {
    id: 3,
    photoSrc: "/images/testimonial.jpg",
    name: "Marie Bartáková",
    position: "Specializace",
    text: "Byla jsem vůči poradenství skeptická. Ke Zdeňkovi jsem přišla náhodou přes doporučení. Nelituji toho, že jsem to zkusila. Jednání s ním je příjemné a kdykoliv jsem něco potřebovala, tak tu pro mě byl. Jeho práce má vždy nějakou hlavu a patu a také se mi líbí jeho vystupování. Chová se jako kamarád a člověk se na něj těší.",
    class: "flex ",
  },
];

const ZdenekZajicek: NextPage = () => {
  return (
    <AppLayout navbarInitialStyle="light">
      <Seo title="Zdeněk Zajíček" description="Manažer, úvěrový specialisa" />

      {/* Služby */}
      <Wrapper paddedContent="lg">
        {/* Úvod */}
        <SectionHeader
          gradient="left"
          kicker="Manažer, úvěrový specialisa"
          heading="Zdeněk Zajíček"
          caption={
            "Zdravím vás, jsem Zdeněk a už to bude hezkých pár let od chvíle, kdy jsem začal samostatně podnikat. Věnuji se správě a plánování finančního směru svých klientů."
          }
        />

        {/* Popis + fotka */}
        <ScrollReveal
          staggerChildren
          staggerChildrenIncrement="200"
          className="grid grid-cols-1 items-center gap-10 pt-10 md:grid-cols-2 md:pt-20"
        >
          <ExportedImage
            src={"/images/poradci/zdenek-zajicek.jpg"}
            alt="Profilovka"
            width={500}
            height={400}
            loading="lazy"
            objectFit="cover"
            className="col-span-1"
          />
          <div className="col-span-1 flex flex-col gap-7">
            <p>
              Kromě toho, že mě tento obor živí, je také mým velkým koníčkem.
              Umím vám pomoci s veškerými finančními a pojistnými produkty, jenž
              jsou na trhu. Umím naslouchat a zároveň do naší vzájemné
              spolupráce vkládat své znalosti a zkušenosti. Zaměřuji se jak na
              podnikatele, firmy tak i na zaměstnance a ostatní – mých služeb
              vlastně může využít úplně každý.
            </p>
            <p>
              Rád se probouzím do dalšího dne s vědomím, že to, co dělám dává mě
              i lidem, kteří mi důvěřují smysl a že pro ně mohu udělat maximum.
              Proto si zakládám na co nejprofesionálnějším přístupu a zároveň na
              co nejpevnějších mezilidských vztazích. Vzájemná důvěra je pro mě
              absolutní základ.
            </p>
            <div className="flex gap-4">
              <Badge size="lg" hasDot={true}>
                Specialista pojistných rizik
              </Badge>
              <Badge size="lg" hasDot={true}>
                Úvěry
              </Badge>
            </div>
          </div>
        </ScrollReveal>

        {/* Q&A */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-20 pt-20 md:grid-cols-2 md:gap-y-32 md:pt-32 lg:gap-x-16">
          <Heading
            level={2}
            size="lg"
            className="col-span-2 mx-auto max-w-xl"
            align="center"
          >
            5 nejčastějších oblastÍ vašeho zájmu a odpověď, jak je řešit
          </Heading>
          <Question
            number="1"
            question="lorem ipsum dolor sit amet de la cox?"
            answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis deserunt commodi dicta error, tempore ullam in soluta, a deleniti accusamus dolor, earum eum praesentium totam sunt natus laboriosam quis. Eos."
            className="col-span-1"
          />
          <Question
            number="1"
            question="lorem ipsum dolor sit amet de la cox?"
            answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis deserunt commodi dicta error, tempore ullam in soluta, a deleniti accusamus dolor, earum eum praesentium totam sunt natus laboriosam quis. Eos."
            className="col-span-1"
          />
          <Question
            number="1"
            question="lorem ipsum dolor sit amet de la cox?"
            answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis deserunt commodi dicta error, tempore ullam in soluta, a deleniti accusamus dolor, earum eum praesentium totam sunt natus laboriosam quis. Eos."
            className="col-span-1"
          />
          <Question
            number="1"
            question="lorem ipsum dolor sit amet de la cox?"
            answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis deserunt commodi dicta error, tempore ullam in soluta, a deleniti accusamus dolor, earum eum praesentium totam sunt natus laboriosam quis. Eos."
            className="col-span-1"
          />
        </div>
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

      {/* CTA */}
      <Wrapper size="lg" paddedContent="base">
        <ScrollReveal>
          <LargeCTA>
            <Button
              as="a"
              href={contacts.zdenekZajicek.emailLink}
              color="light"
              leftIcon={<HiMail />}
            >
              {contacts.zdenekZajicek.emailLabel}
            </Button>
            <Button
              as="a"
              href={contacts.zdenekZajicek.phoneLink}
              color="light"
              leftIcon={<HiPhone />}
            >
              {contacts.zdenekZajicek.phoneLabel}
            </Button>
          </LargeCTA>
        </ScrollReveal>
      </Wrapper>
    </AppLayout>
  );
};

export default ZdenekZajicek;

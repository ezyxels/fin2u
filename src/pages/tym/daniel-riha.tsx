import Badge from "@components/Badge";
import Button from "@components/Button";
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
    name: "Dáša",
    position: "Specializace",
    text: "S Danielem jsem se sešla na základě doporučení od mé kamarádky. Narozdíl od předešlé zkušenosti s finančním poradcem mě mile překvapilo, že Daniel mi nenabízel žádné produkty, ale na základě finanční analýzy se vžil do mé situace a nabídl mi řešení na míru. S Danielem jsem si jasně uvědomila své životní cíle a dala jim jasné parametry. Jsem vděčná za tuto spolupráci.",
    class: "flex",
  },
  {
    id: 2,
    photoSrc: "/images/testimonial.jpg",
    name: "Filip",
    position: "Specializace",
    text: "Daniela jsem oslvovil díky doslechu od svého bratra. Potřeboval jsem se svými úsporami překonat inflaci. Daniel mi však vysvětlil, že je třeba kompletní analýza, aby mi mohl dát řešení přímo na míru. Při auditu aktuálních produktů mi doporučil jejich optimalizaci a navíc porážíme inflaci. Jsem naprosto spokojený a spolupráce si vážím.",
    class: "flex sm:translate-y-10",
  },
  {
    id: 3,
    photoSrc: "/images/testimonial.jpg",
    name: "Dominika",
    position: "Specializace",
    text: "Na Daniela jsem dostala doporučení od své mamky. Daniel se na první schůzce představil – měl k tomu super prezentaci. Na druhé schhůzce proběhla důkladná analýza, kde jsem si vytyčila jasné cíle a priority. Na další schůzce mi Daniel navrhl takové doporučení, které naprosto odpovídalo mé představě. Zajistil odkládání na budoucí hypotéku a optimalizoval veškeré mé produkty. Na servisní schůzce přinesl manželovy koňak, o kterém se s ním bavil 10 měsíců zpět. Daniela sjem doporučila svým přátelům i rodině.",
    class: "flex",
  },
];

const DanielRiha: NextPage = () => {
  return (
    <AppLayout navbarInitialStyle="light">
      <Seo title="Daniel Říha" description="Investiční poradce, Analytik" />

      {/* Služby */}
      <Wrapper paddedContent="lg">
        {/* Úvod */}
        <SectionHeader
          gradient="left"
          kicker="Investiční poradce, Analytik"
          heading="Daniel Říha"
        />

        {/* Popis + fotka */}
        <ScrollReveal
          staggerChildren
          staggerChildrenIncrement="200"
          className="grid grid-cols-1 items-center gap-10 pt-10 md:grid-cols-2 md:pt-20"
        >
          <ExportedImage
            src={"/images/poradci/daniel-riha.jpg"}
            alt="Daniel Říha"
            width={500}
            height={400}
            loading="lazy"
            objectFit="cover"
            className="col-span-1"
          />
          <div className="col-span-1 flex flex-col gap-7">
            <p>
              Ve financích se pohybuji již 3 rokem. Je to moje práce, ale
              zároveň koníček. Investování s přidanou hodnotou a zdravým selským
              rozumem. S klienty řeším dlouhodobé i krátkodobé cíle. Největší
              zadostiučinění je vidět spokojeného klienta, který dosáhl svých
              cílů díky plánu, který jsme spolu vytvořili.
            </p>
            <p>
              Specializuji se především na dlouhodobé investice bonitních
              klientů. Dále řeším hypoteční úvěry pro začínající rodiny, které
              potřebují nejvíce pomoci.
            </p>
            <p>
              Další má specializace je zajištění majetku právnických osob.
              Výrobní haly, sklady, činžovní domy.
            </p>
            <div className="flex gap-4">
              <Badge size="lg" hasDot={true}>
                Investice
              </Badge>
              <Badge size="lg" hasDot={true}>
                Zahraniční klientela
              </Badge>
              <Badge size="lg" hasDot={true}>
                Osobní finance
              </Badge>
            </div>
          </div>
        </ScrollReveal>

        {/* Q&A */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-20 pt-20 md:grid-cols-2 md:gap-y-32 md:pt-32 lg:gap-x-16">
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
              href={contacts.danielRiha.emailLink}
              color="light"
              leftIcon={<HiMail />}
            >
              {contacts.danielRiha.emailLabel}
            </Button>
            <Button
              as="a"
              href={contacts.danielRiha.phoneLink}
              color="light"
              leftIcon={<HiPhone />}
            >
              {contacts.danielRiha.phoneLabel}
            </Button>
          </LargeCTA>
        </ScrollReveal>
      </Wrapper>
    </AppLayout>
  );
};

export default DanielRiha;

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
    photoSrc: "/images/reference/jan-javurek.jpg",
    name: "Jan Javůrek",
    position: "Specializace",
    text: "Doporučuji! profesionální přístup a trpělivost. Velmi mi pomohl s mými investicemi a finančním plánem.",
    class: "flex",
  },
  {
    id: 2,
    photoSrc: "/images/reference/antu-nguyen.jpg",
    name: "Antu Nguyen",
    position: "Specializace",
    text: "Trung je člověk který, udržuje moje emoce na uzdě a díky tomu se snažím v rámci investic přemýšlet dlouhodobě. Občas zavolá a řekne, ted je dobrý čas nakoupit, zvaž to! Mohu jen doporučit!",
    class: "flex sm:translate-y-10",
  },
  {
    id: 3,
    photoSrc: "/images/reference/anh-tuan-nguyen.jpg",
    name: "Anh Tuan Nguyen",
    position: "Specializace",
    text: "Doporučuji ! profesionální přístup. A perfektně mi zajistil ochranu majetku před inflací.",
    class: "flex ",
  },
];

const DucTrungNguyen: NextPage = () => {
  return (
    <AppLayout navbarInitialStyle="light">
      <Seo title="Duc Trung Nguyen" description="Ředitel pro vzdělání" />

      {/* Služby */}
      <Wrapper paddedContent="lg">
        {/* Úvod */}
        <SectionHeader
          gradient="left"
          kicker="Ředitel pro vzdělání"
          heading="Duc Trung Nguyen, EFA"
          caption={
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam vitae at vero explicabo perferendis rerum tempore, qui ipsa ratione incidunt."
          }
        />

        {/* Popis + fotka */}
        <ScrollReveal
          staggerChildren
          staggerChildrenIncrement="200"
          className="grid grid-cols-1 items-center gap-10 pt-10 md:grid-cols-2 md:pt-20"
        >
          <ExportedImage
            src={"/images/poradci/duc-trung-nguyen.jpg"}
            alt="Profilovka"
            width={500}
            height={400}
            loading="lazy"
            objectFit="cover"
            className="col-span-1"
          />
          <div className="col-span-1 flex flex-col gap-7">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              vero voluptatem obcaecati, suscipit nulla dolores iste itaque
              tempora. Placeat libero, nulla reiciendis necessitatibus eveniet
              alias eaque rerum quas dolores facilis, in perspiciatis. Adipisci
              ad pariatur, deleniti fugiat ipsa officiis culpa a sunt magnam
              excepturi magni quo eos, praesentium numquam distinctio?
            </p>
            <div className="flex gap-4">
              <Badge size="lg" hasDot={true}>
                Vzdělávání
              </Badge>
              <Badge size="lg" hasDot={true}>
                Investice
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
              href={contacts.ducTrungNguyen.emailLink}
              color="light"
              leftIcon={<HiMail />}
            >
              {contacts.ducTrungNguyen.emailLabel}
            </Button>
            <Button
              as="a"
              href={contacts.ducTrungNguyen.phoneLink}
              color="light"
              leftIcon={<HiPhone />}
            >
              {contacts.ducTrungNguyen.phoneLabel}
            </Button>
          </LargeCTA>
        </ScrollReveal>
      </Wrapper>
    </AppLayout>
  );
};

export default DucTrungNguyen;

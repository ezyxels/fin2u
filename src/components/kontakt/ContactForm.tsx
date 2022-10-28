import Alert from "@components/Alert";
import Button from "@components/Button";
import Checkbox from "@components/forms/Checkbox";
import Input from "@components/forms/Input";
import Textarea from "@components/forms/Textarea";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useRef, useState } from "react";
import { HiArrowRight } from "react-icons/hi";

type Props = {
  className?: string;
};

export default function ContactForm({ className = "" }: Props) {
  // Ref
  const refHoneypot = useRef<HTMLInputElement>(null);

  // State
  const [mailSent, setmailSent] = useState(false);
  const [formError, setFormError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Sending function
  function sendEmail(e: any) {
    e.preventDefault();
    setIsLoading(true);

    var honeypot = refHoneypot.current?.value;

    if (honeypot === "" || honeypot === null) {
      emailjs
        .sendForm(
          "service_zvy683n",
          "template_slf3tzq",
          e.target,
          "user_2tNsUaIQSULo6wFXKZVCs"
        )
        .then(
          (result) => {
            setmailSent(true);
            e.target.reset();
            setIsLoading(false);
          },
          (error) => {
            setFormError(true);
            setIsLoading(false);
          }
        );
    } else {
      setmailSent(true);
      e.target.reset();
      setIsLoading(false);
    }
  }
  return (
    <form
      className={`${className}`}
      aria-label="Registrační formulář na workshopy"
      onSubmit={sendEmail}
    >
      <div className="flex flex-col items-start gap-y-8">
        <Input
          type="text"
          id="name"
          name="name"
          label="Jméno a příjmení"
          isRequired
        />

        {/* Honeypot - anti spam */}
        <div className="lib-input-hp">
          <input
            type="text"
            placeholder="surname"
            id="surname"
            ref={refHoneypot}
          />
          <label htmlFor="website">Příjmení</label>
        </div>
        {/* ---- Honeypot - anti spam ---- */}

        <Input type="tel" id="tel" name="tel" label="Telefon" isRequired />
        <Input type="email" id="email" name="email" label="E-mail" isRequired />
        <Textarea id="message" name="message" label="Vaše zpráva" isRequired />

        <Checkbox id="gdpr" name="gdpr" label="gdpr" isRequired>
          * Souhlasím se{" "}
          <Link href={"/gdpr"}>
            <a className="c-link-3-a text-primary outline-none focus-visible:ring-4 focus-visible:ring-primary/70">
              zpracováním osobních údajů.
            </a>
          </Link>
        </Checkbox>

        <Button
          as="button"
          type="submit"
          text="Odeslat"
          className="w-full sm:w-auto"
          isLoading={isLoading}
          rightIcon={<HiArrowRight />}
        >
          Odeslat
        </Button>
      </div>

      <div className="w-full">
        {mailSent ? (
          <Alert
            variant="filled"
            status="success"
            isDismissable={true}
            hasIcon={true}
            title="E-mail úspěšně odeslán"
            text="Váš e-mail se podařilo úspěšně odeslat. Co nejdříve vám odpovíme. Děkujeme."
            className="my-6"
          />
        ) : null}
        {formError ? (
          <Alert
            variant="filled"
            status="error"
            isDismissable={true}
            hasIcon={true}
            title="Něco se pokazilo"
            text="Je nám líto, ale e-mail se nepodařilo odeslat. Zkuste to znovu později nebo využijte jinou možnost kontaktu."
            className="my-6"
          />
        ) : null}
      </div>
    </form>
  );
}

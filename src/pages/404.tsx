import Button from "@components/Button";
import Heading from "@components/Heading";
import Seo from "@components/Seo";
import Wrapper from "@components/Wrapper";
import AppLayout from "@layouts/AppLayout";
import type { NextPage } from "next";
import Link from "next/link";

const NotFoundPage: NextPage = () => {
  return (
    <AppLayout navbarInitialStyle="light">
      <Seo
        title="Stránka nenalezena"
        description="Stránka, kterou se pokoušíte nalézt již neexistuje, nebo byla přesunuta"
        noFollow={true}
        noIndex={true}
      />
      <Wrapper
        className="flex min-h-screen flex-col items-center justify-center"
        paddedContent="lg"
      >
        <Heading
          level={1}
          size="2xl"
          className="pt-20 md:pt-32"
          color="primary"
          align="center"
        >
          Stránka nenalazena
        </Heading>
        <Heading level={2} size="base" align="center" className="mt-8">
          Chyba 404
        </Heading>
        <div className="mt-10 flex flex-col items-center gap-10">
          <p className="max-w-xl text-center text-lg font-medium">
            Je nám líto, ale stránka, kterou se pokoušíte nalézt již neexistuje,
            nebo byla přesunuta. Kliknutím na tlačítko můžete přejít na hlavní
            stránku webu.
          </p>
          <Link href={"/"}>
            <Button as="a" size="lg">
              Hlavní strana
            </Button>
          </Link>
        </div>
      </Wrapper>
    </AppLayout>
  );
};

export default NotFoundPage;

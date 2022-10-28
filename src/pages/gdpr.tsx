import GdprPolicy from "@components/gdpr/GdprPolicy";
import Heading from "@components/Heading";
import Seo from "@components/Seo";
import Wrapper from "@components/Wrapper";
import AppLayout from "@layouts/AppLayout";
import type { NextPage } from "next";
import { globalConfig } from "src/configs/globalConfig";

const GdprPage: NextPage = () => {
  return (
    <AppLayout navbarInitialStyle="light">
      <Seo
        title="Zpracování osobních údajů"
        description="Lorem ipsum dolor sit amet"
      />
      <Wrapper className="pt-24 md:pb-16 md:pt-36">
        <Heading
          level={1}
          size="2xl"
          font="display"
          className="pt-20 md:pt-32"
          color="primary"
          align="center"
        >
          Zpracování osobních údajů
        </Heading>
      </Wrapper>
      <Wrapper size="sm" className="pt-24 pb-40">
        <GdprPolicy
          ownerName={globalConfig.client.fullName}
          adress={globalConfig.client.adress}
          email={globalConfig.client.email}
          phone={globalConfig.client.phone}
          ico={globalConfig.client.ico}
          takesEffectDate="1. 9. 2022"
        />
      </Wrapper>
    </AppLayout>
  );
};

export default GdprPage;

import BrandLogo from "@components/BrandLogo";
import Heading from "@components/Heading";
import ScrollReveal from "@components/ScrollReveal";

type Props = {
  headingColor?: "primary" | "white";
};

export default function CollabLogos({ headingColor = "white" }: Props) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-20 py-20">
      <ScrollReveal>
        <Heading
          level={2}
          size="base"
          color={headingColor}
          className="text-center"
        >
          Spolupracujeme
        </Heading>
      </ScrollReveal>
      <ScrollReveal
        staggerChildren
        staggerChildrenIncrement="100"
        className="grid w-full grid-cols-2 justify-between gap-10 md:grid-cols-3 xl:grid-cols-6"
      >
        <div className="col-span-1 flex items-center justify-center p-4">
          <BrandLogo className="col-span-1" />
        </div>
        <div className="col-span-1 flex items-center justify-center p-4">
          <BrandLogo className="col-span-1" />
        </div>
        <div className="col-span-1 flex items-center justify-center p-4">
          <BrandLogo className="col-span-1" />
        </div>
        <div className="col-span-1 flex items-center justify-center p-4">
          <BrandLogo className="col-span-1" />
        </div>
        <div className="col-span-1 flex items-center justify-center p-4">
          <BrandLogo className="col-span-1" />
        </div>
        <div className="col-span-1 flex items-center justify-center p-4">
          <BrandLogo className="col-span-1" />
        </div>
      </ScrollReveal>
    </div>
  );
}

import Heading from "@components/Heading";
import Link from "next/link";
import { BsFillHouseFill, BsFillShieldLockFill } from "react-icons/bs";
import { HiArrowRight, HiPresentationChartLine } from "react-icons/hi";
import { IoWallet } from "react-icons/io5";

type Props = {
  className?: string;
};

const services = [
  {
    name: "Hypotéky a refinancování",
    description: "Lorem ipsum dolor sit amet",
    href: "/sluzby/hypoteky",
    icon: BsFillHouseFill,
  },
  {
    name: "Firemní a podnikatelské financování",
    description: "Lorem ipsum dolor sit amet",
    href: "/sluzby/firemni-financovani",
    icon: IoWallet,
  },
  {
    name: "Finanční nezávislost",
    description: "Lorem ipsum dolor sit amet",
    href: "/sluzby/financni-nezavislost",
    icon: HiPresentationChartLine,
  },
  {
    name: "Zajištění rizik",
    description: "Lorem ipsum dolor sit amet",
    href: "/sluzby/zajisteni-rizik",
    icon: BsFillShieldLockFill,
  },
];

export default function Services({ className = "" }: Props) {
  return (
    <div className={`grid grid-cols-1 gap-8 lg:grid-cols-2 ${className}`}>
      {services.map((item) => (
        <Link href={item.href} key={item.name}>
          <a className="group relative col-span-1 flex origin-center flex-col gap-5 rounded-xl py-12 px-6 outline-none transition duration-300 hover:scale-105 hover:bg-primary/15 focus-visible:ring-4 focus-visible:ring-primary/70 md:py-16 md:px-14">
            <div className="flex items-center justify-start gap-5">
              <div className="rounded-lg bg-primary/20 p-4">
                <item.icon className="text-xl text-primary transition-colors duration-300 sm:text-3xl lg:text-4xl" />
              </div>
              <Heading level={3} size="base">
                {item.name}
              </Heading>
            </div>
            <p>{item.description}</p>
            <HiArrowRight className="absolute right-0 top-1/2 -translate-x-24 -translate-y-1/2 text-lg text-primary opacity-0 transition duration-300 group-hover:-translate-x-12 group-hover:opacity-100 sm:text-2xl" />
          </a>
        </Link>
      ))}
      {/* <Link href="/sluzby/bez-kalkulacky">
        <a className="group col-span-1 flex origin-center flex-col gap-5 py-12 px-6 transition duration-300 hover:scale-105 hover:bg-primary md:py-16 md:px-14">
          <div className="flex items-center justify-start gap-5">
            <HiHome className="text-xl text-primary transition-colors duration-300 group-hover:text-white sm:text-3xl lg:text-4xl" />
            <Heading
              level={3}
              size="base"
              className="transition-colors duration-300 group-hover:text-white"
            >
              Bez Kalkulačky
            </Heading>
          </div>
          <p className="transition-colors duration-300 group-hover:text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis ex at officiis!
          </p>
        </a>
      </Link> */}
    </div>
  );
}

import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";
import { BsFillHouseFill, BsFillShieldLockFill } from "react-icons/bs";
import { HiChevronDown, HiPresentationChartLine } from "react-icons/hi";
import { IoWallet } from "react-icons/io5";

type NavbarMainLinksOptions = {
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

export default function NavbarMainLinks({
  className = "",
}: NavbarMainLinksOptions) {
  return (
    <ul
      className={`flex list-none gap-x-5 xl:gap-x-8 2xl:gap-x-12 ${className}`}
    >
      <li>
        <Link href={"/"}>
          <a className="c-link-3-a text-sm font-medium tracking-wider text-rich outline-none focus-visible:ring-4 focus-visible:ring-primary/70">
            Hlavní strana
          </a>
        </Link>
      </li>
      <Popover as="li" className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                c-link-3-a inline-flex items-center gap-1 text-sm font-medium tracking-wider text-rich outline-none`}
            >
              <span>Služby</span>
              <HiChevronDown
                className={`${open ? "" : "text-opacity-70"} scale-125`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 2xl:max-w-md">
                <div className="overflow-hidden rounded-lg shadow-xl ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white p-7">
                    {services.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-50">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20 text-primary sm:h-14 sm:w-14">
                            <item.icon
                              aria-hidden="true"
                              className="text-xl sm:text-2xl"
                            />
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium leading-tight text-gray-900">
                              {item.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
      <li>
        <Link href={"/#tym"}>
          <a className="c-link-3-a text-sm font-medium tracking-wider text-rich outline-none focus-visible:ring-4 focus-visible:ring-primary/70">
            Náš tým
          </a>
        </Link>
      </li>
      <li>
        <Link href={"/#reference"}>
          <a className="c-link-3-a text-sm font-medium tracking-wider text-rich outline-none focus-visible:ring-4 focus-visible:ring-primary/70">
            Reference
          </a>
        </Link>
      </li>
      <li>
        <Link href={"/kontakt"}>
          <a className="c-link-3-a text-sm font-medium tracking-wider text-rich outline-none focus-visible:ring-4 focus-visible:ring-primary/70">
            Kontakt
          </a>
        </Link>
      </li>
    </ul>
  );
}

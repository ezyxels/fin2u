import BrandLogo from "@components/BrandLogo";
import Wrapper from "@components/Wrapper";
import useScrollListener from "@hooks/useScrollListener";
import Link from "next/link";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import NavbarAdditionalLinks from "./NavbarAdditionalLinks";
import NavbarMainLinks from "./NavbarMainLinks";

export default function Navbar({ initialStyle = "dark" }) {
  // // State
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);
  // const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  // // use Scroll Listener hook
  const scroll = useScrollListener();

  useEffect(() => {
    // Aktivuje třídu po scrollnutí o více než 60px
    if (scroll.y > 60) {
      setIsNavbarScrolled(true);
    } else {
      setIsNavbarScrolled(false);
    }

    // // Skryje / ukáže navigaci na základě podmínky
    // if (scroll.y > 540 && scroll.y - scroll.lastY > 0) {
    //   setIsNavbarVisible(false);
    // } else {
    //   setIsNavbarVisible(true);
    // }
  }, [scroll.y, scroll.lastY]);
  return (
    // <nav
    //   className={`fixed z-[100] w-screen transform-gpu border-b border-solid border-body-100 bg-body backdrop-blur transition-[background,border,transform,height,box-shadow] duration-[400ms] ease-in-out ${
    //     isNavbarScrolled
    //       ? "h-20 border-opacity-100 bg-opacity-70"
    //       : "h-20 border-opacity-0 bg-opacity-0 md:h-28"
    //   } ${isNavbarVisible ? "translate-y-0" : "-translate-y-full shadow-none"}`}
    // >
    <nav
      className={`fixed z-[100] h-20 w-screen transition duration-500 md:h-24 
      ${
        isNavbarScrolled
          ? "bg-white/80 shadow-xl backdrop-blur-md"
          : "bg-transparent"
      }
      ${initialStyle === "dark" && !isNavbarScrolled ? "dark" : ""}
      `}
    >
      <Wrapper
        size="lg"
        className="flex h-full items-center justify-between gap-6 md:gap-10 xl:gap-16"
      >
        <NavbarMainLinks className="hidden xl:flex" />
        <Menu className="xl:hidden" />
        <Link href="/">
          <a className="absolute top-1/2 left-1/2 z-[110] max-w-[128px] -translate-y-1/2 -translate-x-1/2 scale-[0.85] outline-none focus-visible:ring-4 focus-visible:ring-primary/70 sm:max-w-[160px] sm:scale-100">
            <BrandLogo
              className="origin-left"
              isInverted={initialStyle === "dark" && !isNavbarScrolled}
            />
          </a>
        </Link>
        <NavbarAdditionalLinks />
      </Wrapper>
    </nav>
  );
}

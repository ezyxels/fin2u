import SocialLinks from "@components/SocialLinks";
import Wrapper from "@components/Wrapper";
import { useEffect, useState } from "react";
import MenuAdditionalLinks from "./MenuAdditionalLinks";
import MenuButton from "./MenuButton";
import MenuMainLinks from "./MenuMainLinks";

type MenuOptions = {
  className?: string;
};

export default function Menu({ className = "" }: MenuOptions) {
  let [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (isOpen === true) {
      document.body.classList.add("helper-scroll-lock");
    } else {
      document.body.classList.remove("helper-scroll-lock");
    }
    return () => {};
  }, [isOpen, setIsOpen]);

  return (
    <>
      <MenuButton
        onClick={toggleMenu}
        isActivated={isOpen}
        className={`relative z-[120] ${className}`}
      />
      <div
        className={`dark fixed inset-0 z-[115] h-screen w-screen overflow-y-auto bg-secondary transition-[opacity,visibility] ease-out ${
          isOpen
            ? "visible opacity-100 duration-[400ms]"
            : "invisible opacity-0 duration-150"
        }`}
      >
        <Wrapper
          size="lg"
          className="flex flex-col items-start space-y-16 pt-28 pl-0 md:pt-36 xl:pl-[50%]"
        >
          <MenuMainLinks
            onEachLinkClick={closeMenu}
            className={`transform-gpu transition-[transform,opacity] ease-out ${
              isOpen
                ? "translate-y-0 opacity-100 delay-150 duration-500"
                : "duration-0 -translate-y-12 opacity-0 delay-150"
            }`}
          />
          <MenuAdditionalLinks
            className={`transform-gpu transition-[transform,opacity] ease-out ${
              isOpen
                ? "translate-y-0 opacity-100 delay-300 duration-500"
                : "duration-0 -translate-y-12 opacity-0 delay-150"
            }`}
          />
          <SocialLinks
            className={`transform-gpu transition-[transform,opacity] ease-out ${
              isOpen
                ? "translate-y-0 opacity-100 delay-[450ms] duration-500"
                : "duration-0 -translate-y-12 opacity-0 delay-150"
            }`}
          />
        </Wrapper>
      </div>
    </>
  );
}

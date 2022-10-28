import Wrapper from "@components/Wrapper";
import React from "react";

type Props = {
  children: React.ReactNode;
  hasWatermark?: boolean;
  className?: string;
  [x: string]: any;
};

export default function Hero({
  className = "",
  hasWatermark = false,
  children,
  ...rest
}: Props) {
  // Logic goes here
  return (
    <header className="relative w-screen overflow-hidden bg-gradient-to-tl from-secondary to-gray-800 pt-28 md:pt-40">
      {hasWatermark && (
        <img
          src="/svg/2.svg"
          alt="2"
          className="pointer-events-none absolute top-1/2 left-1/2 hidden h-[90%] w-[200%] -translate-x-1/4 -translate-y-1/2 scale-[1.65] opacity-[0.08] lg:block"
        />
      )}
      <Wrapper className={`${className}`} paddedContent="base" {...rest}>
        {children}
      </Wrapper>
    </header>
  );
}

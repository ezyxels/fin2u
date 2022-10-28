// DOCS: https://headlessui.com/react/disclosure

import { Disclosure } from "@headlessui/react";
import { HiMinus, HiPlus } from "react-icons/hi";

type AccordionOptions = {
  title: string;
  children: React.ReactNode;
  isDefaultOpen?: boolean;
};

export default function Accordion({
  title = "Lorem ipsum dolor sit amet?",
  children = "Yes! You can purchase a license that you can share with your entire team",
  isDefaultOpen = false,
}: AccordionOptions) {
  return (
    <Disclosure defaultOpen={isDefaultOpen}>
      {({ open }) => (
        <div>
          <Disclosure.Button
            className={`flex w-full items-center justify-between py-4 text-left text-xl font-semibold focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/70`}
          >
            <span className={`${open ? "text-primary" : "text-rich"}`}>
              {title}
            </span>
            {open ? (
              <HiMinus className="text-primary" />
            ) : (
              <HiPlus className="text-rich" />
            )}
          </Disclosure.Button>
          <Disclosure.Panel className="pt-2 pb-8">{children}</Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}

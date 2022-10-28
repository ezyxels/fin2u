import Button from "@components/Button";
import SocialLinks from "@components/SocialLinks";
import { contacts } from "@configs/contacts";
import { HiPhone } from "react-icons/hi";

type NavbarAdditionalLinksOptions = {
  className?: string;
};

export default function NavbarAdditionalLinks({
  className = "",
}: NavbarAdditionalLinksOptions) {
  return (
    <div
      className={`flex items-center gap-x-6 md:gap-x-10 2xl:gap-x-16 ${className}`}
    >
      <SocialLinks className="hidden lg:block" />
      <Button
        as="a"
        href={contacts.main.phoneLink}
        target="blank"
        rel="noopener noreferrer"
        size="sm"
        leftIcon={<HiPhone />}
        className="hidden sm:inline-flex"
      >
        {contacts.main.phoneLabel}
      </Button>
    </div>
  );
}

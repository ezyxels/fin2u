import { contacts } from "@configs/contacts";

type MenuAdditionalLinksOptions = {
  className?: string;
  onEachLinkClick?: () => void;
};

export default function MenuAdditionalLinks({
  className = "",
  onEachLinkClick,
}: MenuAdditionalLinksOptions) {
  return (
    <ul
      className={`flex list-none flex-col space-y-4 leading-none ${className}`}
    >
      <li>
        <a
          href={contacts.main.phoneLink}
          className="c-link-3-a text-lg font-semibold text-muted xl:text-2xl"
        >
          {contacts.main.phoneLabel}
        </a>
      </li>
      <li>
        <a
          href={contacts.main.emailLink}
          className="c-link-3-a text-lg font-semibold text-muted xl:text-2xl"
        >
          {contacts.main.emailLabel}
        </a>
      </li>
    </ul>
  );
}

import { socials } from "@configs/socials";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

type SocialLinksOptions = {
  as?: React.ElementType;
  className?: string;
  [x: string]: any;
};

export default function SocialLinks({
  as: Tag = "div",
  className = "",
  ...rest
}: SocialLinksOptions) {
  // Logic goes here
  return (
    <Tag className={`${className}`} {...rest}>
      <ul className="flex gap-x-10">
        <li>
          <a
            href={socials.facebook.link}
            aria-label={socials.facebook.ariaLabel}
            target="blank"
            rel="noopener noreferrer"
            className="text-xl text-rich transition-colors duration-150 ease-in-out hover:text-muted"
          >
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a
            href={socials.instagram.link}
            aria-label={socials.instagram.ariaLabel}
            target="blank"
            rel="noopener noreferrer"
            className="text-xl text-rich transition-colors duration-150 ease-in-out hover:text-muted"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href={socials.linkedin.link}
            aria-label={socials.linkedin.ariaLabel}
            target="blank"
            rel="noopener noreferrer"
            className="text-xl text-rich transition-colors duration-150 ease-in-out hover:text-muted"
          >
            <FaLinkedinIn />
          </a>
        </li>
      </ul>
    </Tag>
  );
}

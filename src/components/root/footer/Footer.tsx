import SocialLinks from "@components/SocialLinks";
import Wrapper from "@components/Wrapper";
import Link from "next/link";
import { mainRoutes } from "../../../configs/routes";
import FooterAuthor from "./FooterAuthor";

export default function Footer() {
  return (
    <footer className="border-t border-solid border-body-100 bg-gradient-to-tl from-primary/20 via-white to-white">
      {/* <div className="pointer-events-none absolute right-0 bottom-0 -z-10 h-full w-full bg-gradient-to-tl from-primary/30 via-white to-white"></div> */}
      <Wrapper
        size="lg"
        paddedContent="sm"
        className="flex flex-col items-center justify-center gap-16"
      >
        {/* Hlavní menu */}
        <ul className="flex flex-col items-center gap-x-20 gap-y-4 lg:flex-row">
          {mainRoutes.map((route) => (
            <li key={route.label}>
              <Link href={route.path}>
                <a className="c-link-3-a font-medium text-muted outline-none focus-visible:ring-4 focus-visible:ring-primary/70">
                  {route.label}
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <SocialLinks />

        <ul className="flex flex-col items-center gap-x-20 gap-y-4 lg:flex-row">
          <li className="font-medium text-muted">
            © {new Date().getFullYear()} Fin2u.cz
          </li>
          <li className="font-medium text-muted">Všechna práva vyhrazena</li>
          <li>
            <Link href="/cookies">
              <a className="c-link-3-a font-medium text-muted outline-none focus-visible:ring-4 focus-visible:ring-primary/70">
                Cookies
              </a>
            </Link>
          </li>
          <li>
            <Link href="/gdpr">
              <a className="c-link-3-a font-medium text-muted outline-none focus-visible:ring-4 focus-visible:ring-primary/70">
                Zpracování osobních údajů
              </a>
            </Link>
          </li>
        </ul>
      </Wrapper>

      {/* Autor webu - podpis */}
      <Wrapper
        size="lg"
        className="flex items-center justify-center border-t border-solid border-body-100 py-10"
      >
        <FooterAuthor />
      </Wrapper>
    </footer>
  );
}

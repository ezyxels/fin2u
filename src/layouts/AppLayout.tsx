import CookieConsentBar from "@components/root/cookieConsent/CookieConsentBar";
import { Footer } from "@components/root/footer";
import { Head } from "@components/root/head";
import { Navbar } from "@components/root/navbar";
import { SkipToContent } from "@components/root/skipToContent";

type AppShellOptions = {
  children: React.ReactNode;
  navbarInitialStyle?: "dark" | "light";
};

export default function AppLayout({
  children,
  navbarInitialStyle = "dark",
}: AppShellOptions) {
  return (
    <>
      <header>
        <SkipToContent />
        <Head />
        <Navbar initialStyle={navbarInitialStyle} />
      </header>
      <CookieConsentBar />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}

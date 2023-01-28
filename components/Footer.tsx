import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/Footer.module.css";
import { brLinks, usLinks } from "./Navbar";

const NO_FOOTER_PAGES = ["/rsvp", "/ceremony", "/guide"];

export const Footer: React.FC = () => {
  const [links, setLinks] = useState(usLinks);
  const [showSiteMap, setShowSiteMap] = useState(true);
  const [showFooterBanner, setShowFooterBanner] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (router.locale === "pt-BR") {
      setLinks(brLinks);
    }

    // Hide sitemap on home page.
    if (router.pathname === "/") {
      setShowSiteMap(false);
    }

    if (NO_FOOTER_PAGES.includes(router.pathname)) {
      setShowFooterBanner(false);
    }
  }, [router]);

  return (
    <footer>
      {showSiteMap && (
        <div className="link-container" style={{ padding: "8px" }}>
          {links.map((link) => (
            <Link key={link.href} className="link-button" href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
      {showFooterBanner && (
        <div
          className={`${styles["banner-container"]} parallax-container-small`}
        ></div>
      )}
    </footer>
  );
};

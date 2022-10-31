import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/Footer.module.css";
import { brLinks, usLinks } from "./Navbar";

export const Footer: React.FC = () => {
  const [links, setLinks] = useState(usLinks);
  const [showSiteMap, setShowSiteMap] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (router.locale === "pt-BR") {
      setLinks(brLinks);
    }

    // Hide sitemap on home page.
    if (router.pathname === "/") {
      setShowSiteMap(false);
    }
  }, [router]);

  return (
    <footer>
      {showSiteMap && (
        <div className='link-container' style={{ padding: "8px" }}>
          {links.map((link) => (
            <Link key={link.href} className='link-button' href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
      <div
        className={`${styles["banner-container"]} parallax-container-small`}
      ></div>
    </footer>
  );
};

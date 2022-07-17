import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/Footer.module.css";
import { brLinks, usLinks } from "./Navbar";
import { NavLink } from "./NavLink";

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
        <div className="link-container" style={{ padding: "8px" }}>
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className="link-button">{link.label}</a>
            </Link>
          ))}
        </div>
      )}
      <div
        className="parallax-container-small"
        style={{ backgroundImage: "url(/rio_beach.jpg)" }}
      ></div>
    </footer>
  );
};

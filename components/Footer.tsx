import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/Footer.module.css";
import { brLinks, usLinks } from "./Navbar";
import { NavLink } from "./NavLink";

export const Footer: React.FC = () => {
  const [links, setLinks] = useState(usLinks);
  const [gbMessage, setGbMessage] = useState("See you in Rio!");
  const router = useRouter();

  useEffect(() => {
    if (router.locale === "pt-BR") {
      setLinks(brLinks);
      setGbMessage("Nos Vemos no Rio!");
    }
  }, [router]);

  return (
    <footer>
      <div
        className="parallax-container-small"
        style={{ backgroundImage: "url(/rio_beach.jpg)" }}
      >
        <div className="abs-flex">
          <div className="content-container">
            <h3>Questions?</h3>
            <h4>
              Email us at{" "}
              <a className="inline" href="mailto:nicandchase@madeinrio2023.com">
                nicandchase@madeinrio2023.com
              </a>
            </h4>
          </div>
          <div className="content-container">
            <div className={styles["site-map-grid"]}>
              {links.map((link) => (
                <NavLink key={link.href} href={link.href} label={link.label} />
              ))}
            </div>
          </div>
        </div>
        <div
          className="content-container"
          style={{ position: "absolute", bottom: "0" }}
        >
          <div className="abs-center-content">{gbMessage}</div>
        </div>
      </div>
    </footer>
  );
};

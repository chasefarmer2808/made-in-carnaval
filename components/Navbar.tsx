import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";
import { NavLink, NavLinkProps } from "./NavLink";
import styles from "../styles/Navbar.module.css";

export const usLinks: NavLinkProps[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Ceremony",
    href: "/ceremony",
  },
  {
    label: "Travel Guide",
    href: "/guide",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Honeyfund",
    href: "/honeyfund",
  },
];

export const brLinks: NavLinkProps[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Cerimônia",
    href: "/ceremony",
  },
  {
    label: "Travel Guide",
    href: "/guide",
  },
  {
    label: "Galeria",
    href: "/gallery",
  },
  {
    label: "Cota Lua de Mel",
    href: "/honeyfund",
  },
];

enum Langs {
  enUS = "English",
  ptBR = "Português",
}

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navClass, setNavClass] = useState("");
  const [links, setLinks] = useState(usLinks);
  const [langBtnText, setLangBtnText] = useState(Langs.ptBR);
  const prevScrollPos = useRef(0);
  const router = useRouter();
  const { pathname, asPath, query } = router;

  useEffect(() => {
    if (router.locale === "pt-BR") {
      setLinks(brLinks);
      setLangBtnText(Langs.enUS);
    }
    setMenuOpen(false);
  }, [router]);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (prevScrollPos.current > currentScrollPos || currentScrollPos === 0) {
      // Scrolling down.
      setNavClass("");
    } else {
      // Scrolling up.
      setNavClass("nav-hidden");
      setMenuOpen(false);
    }

    prevScrollPos.current = currentScrollPos;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
  }, []);

  const handleLanguageSelect = () => {
    if (langBtnText === Langs.enUS) {
      router.push({ pathname, query }, asPath, { locale: "en-US" });
      setLangBtnText(Langs.ptBR);
    } else {
      router.push({ pathname, query }, asPath, { locale: "pt-BR" });
      setLangBtnText(Langs.enUS);
    }
  };

  return (
    <nav className={navClass}>
      <div className={styles["nav-title-container"]}>
        <span>Made In Rio</span>
        <span
          className={styles["nav-menu-btn"]}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <Icon name="cancel" sizeRem={2} />
          ) : (
            <Icon name="hamburger" sizeRem={2} />
          )}
        </span>
      </div>
      <span
        className={
          menuOpen
            ? styles["nav-link-container-active"]
            : styles["nav-link-container"]
        }
      >
        {links.map((link) => (
          <NavLink key={link.href} href={link.href} label={link.label} />
        ))}
        <span className={styles["language-menu-container-mobile"]}>
          <button className="primary" onClick={handleLanguageSelect}>
            {langBtnText}
          </button>
        </span>
      </span>
      <div className={styles["language-menu-container"]}>
        <button className="primary" onClick={handleLanguageSelect}>
          {langBtnText}
        </button>
      </div>
    </nav>
  );
};

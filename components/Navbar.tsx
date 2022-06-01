import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";
import { NavLink, NavLinkProps } from "./NavLink";
import styles from "../styles/Navbar.module.css";
import { DropDownMenu } from "./DropDownMenu";

const usLinks: NavLinkProps[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Travel Guide",
    href: "/guide",
  },
  {
    label: "Things To Do",
    href: "/things",
  },
  {
    label: "Honeyfund",
    href: "/honeyfund",
  },
  {
    label: "RSVP",
    href: "/rsvp",
  },
  {
    label: "Portuguese Phrases",
    href: "/phrases",
  },
];

const brLinks: NavLinkProps[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Travel Guide",
    href: "/guide",
  },
  {
    label: "Things To Do",
    href: "/things",
  },
  {
    label: "Cota Lua de Mel",
    href: "/honeyfund",
  },
  {
    label: "Confirmação de presença",
    href: "/rsvp",
  },
  {
    label: "Frases em Inglês",
    href: "/phrases",
  },
];

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navClass, setNavClass] = useState("");
  const [links, setLinks] = useState(usLinks);
  const prevScrollPos = useRef(0);
  const router = useRouter();
  const { pathname, asPath, query } = router;

  useEffect(() => {
    if (router.locale === "pt-BR") {
      setLinks(brLinks);
    }
    setMenuOpen(false);
  }, [router]);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (prevScrollPos.current > currentScrollPos) {
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

  const handleLanguageSelect = (language: string) => {
    if (language === "Portuguese") {
      router.push({ pathname, query }, asPath, { locale: "pt-BR" });
    } else {
      router.push({ pathname, query }, asPath, { locale: "en-US" });
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
          <DropDownMenu
            items={["English", "Portuguese"]}
            onSelect={handleLanguageSelect}
          />
        </span>
      </span>
      <span className={styles["language-menu-container"]}>
        <DropDownMenu
          items={["English", "Portuguese"]}
          onSelect={handleLanguageSelect}
        />
      </span>
    </nav>
  );
};

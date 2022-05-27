import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";
import { NavLink, NavLinkProps } from "./NavLink";
import styles from "../styles/Navbar.module.css";

const usLinks: NavLinkProps[] = [
  {
    label: "Home",
    href: "/home",
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

  useEffect(() => {
    console.log(router);
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
        {/* // <NavLink href="/" label="Home" />
        // <NavLink href="/guide" label="Travel Guide" />
        // <NavLink href="/things" label="Things To Do" />
        // <NavLink href="/honeyfund" label="Honeyfund" />
        // <NavLink href="/rsvp" label="RSVP" />
        // <NavLink href="/phrases" label="Portuguese Phrases" /> */}
      </span>
    </nav>
    // <div
    //   style={{
    //     width: "100%",
    //     height: "1.5rem",
    //     position: "relative",
    //     zIndex: "1",
    //     backgroundColor: "#d09a6e",
    //   }}
    // >
    //   <Link href="/">
    //     <a>Home</a>
    //   </Link>
    //   <Link href="/guide">
    //     <a>Travel Guide</a>
    //   </Link>
    //   <Link href="/things">
    //     <a>Things To Do</a>
    //   </Link>
    //   <Link href="/honeyfund">
    //     <a>Honeyfund</a>
    //   </Link>
    //   <Link href="/rsvp">
    //     <a>RSVP</a>
    //   </Link>
    //   <Link href="/phrases">
    //     <a>Portugrese Phrases</a>
    //   </Link>
    // </div>
  );
};

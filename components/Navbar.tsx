import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";
import { NavLink } from "./NavLink";
import styles from "../styles/Navbar.module.css";

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navClass, setNavClass] = useState("");
  const prevScrollPos = useRef(0);
  const router = useRouter();

  useEffect(() => {
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
        <NavLink href="/" label="Home" />
        <NavLink href="/guide" label="Travel Guide" />
        <NavLink href="/things" label="Things To Do" />
        <NavLink href="/honeyfund" label="Honeyfund" />
        <NavLink href="/rsvp" label="RSVP" />
        <NavLink href="/phrases" label="Portuguese Phrases" />
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

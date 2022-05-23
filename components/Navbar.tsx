import Link from "next/link";

export const Navbar: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "1.5rem",
        position: "relative",
        zIndex: "1",
        backgroundColor: "#d09a6e",
      }}
    >
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/guide">
        <a>Travel Guide</a>
      </Link>
      <Link href="/honeyfund">
        <a>Honeyfund</a>
      </Link>
      <Link href="/rsvp">
        <a>RSVP</a>
      </Link>
      <Link href="/phrases">
        <a>Portugrese Phrases</a>
      </Link>
    </div>
  );
};

import ThemeToggle from "./ThemeToggle";

const links = [
  ["experience", "Experience"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["education", "Education"],
  ["contact", "Contact"],
];

export default function Nav() {
  return (
    <header className="nav">
      <a href="#top" className="nav-mark" aria-label="Back to top">
        JE
      </a>
      <nav className="nav-links" aria-label="Sections">
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`}>
            {label}
          </a>
        ))}
      </nav>
      <ThemeToggle />
    </header>
  );
}

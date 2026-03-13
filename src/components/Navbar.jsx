import { useState } from "react";

const NAV_ITEMS = ["Home", "Discovery", "Photos", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <span className="nav-logo">Logo</span>

        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          {NAV_ITEMS.map((item) => (
            <li key={item}>
              <a href="#" className={item === "Home" ? "active" : ""}>
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div className="nav-avatar">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=68&q=80"
              alt="User avatar"
            />
          </div>
          <button
            className="nav-mobile-toggle"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span style={{ transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
          </button>
        </div>
      </div>
    </nav>
  );
}

"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#layanan", label: "Layanan" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#lokasi", label: "Lokasi" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Kontak" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const ids = links.map((l) => l.href.slice(1));
      let current = "#home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = "#" + id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={"topbar" + (scrolled ? " scrolled" : "")}>
      <div className="wrap nav">
        <a className="brand" href="#home" aria-label="Bramverse">
          <img src="/bramverse-logo.png" alt="Bramverse" />
        </a>
        <nav className={"menu" + (open ? " open" : "")}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={active === l.href ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav-cta">
          <a href="#contact" className="btn btn-light btn-sm">
            Hubungi Kami
          </a>
          <button
            className="hamb"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>
        </div>
      </div>
    </div>
  );
}

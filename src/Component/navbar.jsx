import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const colors = {
  navbarBg: "#1c1c1c",
  lightPurple: "#7d7d7d",
  mediumChocolate: "#b88a5f",
  textSecondary: "#c9b8ff",
};

const styles = {
  navbar: {
    position: "sticky",
    top: 0,
    backgroundColor: colors.navbarBg,
    padding: "1rem 3rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1000,
    boxShadow: `0 2px 8px ${colors.mediumChocolate}33`,
  },
  navBrand: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    color: colors.lightPurple,
  },
  navLinks: {
    display: "flex",
    gap: "1.5rem",
  },
  navLinksMobileOpen: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "60px",
    right: "20px",
    backgroundColor: colors.navbarBg,
    padding: "1rem 2rem",
    borderRadius: "8px",
    boxShadow: `0 4px 15px ${colors.mediumChocolate}aa`,
  },
  navLink: {
    color: '#7d7d7d',
    textDecoration: "none",
    fontWeight: 500,
    cursor: "pointer",
    transition: "color 0.3s ease",
  },
  navLinkHover: {
    color: colors.lightPurple,
  },
  hamburger: {
    display: "none",
    flexDirection: "column",
    cursor: "pointer",
    gap: "5px",
  },
  bar: {
    width: "25px",
    height: "3px",
    backgroundColor: colors.textSecondary,
    borderRadius: "2px",
    transition: "background-color 0.3s ease",
  },
};

const Navbar = () => {
  const [hovered, setHovered] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <nav style={styles.navbar}>
      <div style={styles.navBrand}>Code Syndicate</div>

      {isMobile && (
        <div
          className="hamburger"
          style={{ ...styles.hamburger, display: "flex" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => (e.key === "Enter" ? setMenuOpen(!menuOpen) : null)}
        >
          <div
            style={{
              ...styles.bar,
              backgroundColor: menuOpen ? colors.lightPurple : colors.textSecondary,
            }}
          />
          <div
            style={{
              ...styles.bar,
              backgroundColor: menuOpen ? colors.lightPurple : colors.textSecondary,
            }}
          />
          <div
            style={{
              ...styles.bar,
              backgroundColor: menuOpen ? colors.lightPurple : colors.textSecondary,
            }}
          />
        </div>
      )}

      <div
        className={`nav-links ${menuOpen ? "open" : ""}`}
        style={{
          ...(isMobile
            ? menuOpen
              ? styles.navLinksMobileOpen
              : { display: "none" }
            : styles.navLinks),
        }}
      >
        {["Home", "About", "Projects", "Contact"].map((link, i) => {
          const to = link === "Home" ? "/" : link === "About" ? "/aboutpage" : `/${link.toLowerCase()}`;
          return (
            <Link
              key={i}
              to={to}
              style={{
                ...styles.navLink,
                ...(hovered === i ? styles.navLinkHover : {}),
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => isMobile && setMenuOpen(false)}
            >
              {link}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;

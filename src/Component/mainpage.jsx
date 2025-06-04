import React, { useEffect, useState } from "react";
import img_main from '../Assets/lady_boos1.png';
import { Link } from "react-router-dom";

const colors = {
    background: "#0a0a0a",
    navbarBg: "#1c1c1c",
    lightPurple: "#7d7d7d",
    mediumChocolate: "#b88a5f",
    textSoft: "#ddd6f3",
    textSecondary: "#c9b8ff",
    accentAnimatedStart: "#9b8cfc", // light purple start
    accentAnimatedEnd: "#b88a5f",   // medium chocolate end
};

const styles = {
    container: {
        backgroundColor: colors.background,
        color: colors.textSoft,
        minHeight: "100vh",
        overflowX: "hidden",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        display: "flex",
        flexDirection: "column",
    },
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
        color:'#7d7d7d' ,
        textDecoration: "none",
        fontWeight: 500,
        cursor: "pointer",
        letterSpacing: "1px",
        fontfamily:'helvetica',
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
    mainContentWrapper: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "3rem",
        maxWidth: "1200px",
        margin: "4rem auto",
        padding: "0 2rem",
        alignItems: "center",
        justifyContent: "space-between",
    },
    content: (visible) => ({
        flex: 1,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-50px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
    }),
    heading: {
        fontSize: "2.5rem",
        marginBottom: "1rem",
        color: '#9b8cfc',
    },
    subheading: {
        fontSize: "1.2rem",
        marginBottom: "2rem",
        // animation: "colorShift 4s ease-in-out infinite alternate",
    },
    paragraph: {
        fontSize: "1rem",
        lineHeight: "1.6",
        color: colors.textSoft,
    },
    imageWrapper: (visible) => ({
        flex: 1,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(50px)",
        transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
        display: "flex",
        justifyContent: "center",
    }),
    image: {
        maxWidth: "100%",
        maxHeight: "450px",
        borderRadius: "12px",
        filter: "drop-shadow(0 0 20px rgba(253, 253, 253, 0.4))",
        height: "auto",
    },
};

// Keyframe CSS for animated color
const styleSheet = `
@keyframes colorShift {
  0% {
    color: ${colors.accentAnimatedStart};
  }
  100% {
    color: ${colors.accentAnimatedEnd};
  }
}

@media (max-width: 768px) {
  .hamburger {
    display: flex !important;
  }
  .nav-links {
    display: none;
  }
  .nav-links.open {
    display: flex !important;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: ${colors.navbarBg};
    padding: 1rem 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 15px ${colors.mediumChocolate}aa;
    gap: 1rem;
  }
}
`;

function PortfolioMainPage() {
    const [hovered, setHovered] = useState(null);
    const [contentVisible, setContentVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const dynamicStyles = {
        heading: {
            fontSize: isMobile ? "1.8rem" : "2.5rem",
            marginBottom: "1rem",
            color: colors.lightPurple,
            letterSpacing: "1px",

        },
        subheading: {
            fontSize: isMobile ? "1rem" : "1.2rem",
            marginBottom: isMobile ? "1.5rem" : "2rem",
            // animation: "colorShift 4s ease-in-out infinite alternate",
            // color will be overridden by animation
            color: "#a7c6d9",  // set static color
            // fontFamily: 'poppins',
            fontStyle: "italic",
            letterSpacing: "2px",
        },
        paragraph: {
            fontSize: isMobile ? "0.95rem" : "1rem",
            lineHeight: "1.6",
            color: colors.textSoft,
            letterSpacing: "0.5px",
        },
    };

    // Detect screen size for responsive layout
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => setContentVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    // Add the keyframe style tag dynamically
    useEffect(() => {
        const styleTag = document.createElement("style");
        styleTag.innerHTML = styleSheet;
        document.head.appendChild(styleTag);
        return () => {
            document.head.removeChild(styleTag);
        };
    }, []);






    return (
        <div style={styles.container}>
            <nav style={styles.navbar}>
                <div style={styles.navBrand}>Code Syndicate</div>

                {/* Hamburger for mobile */}
                {isMobile && (
                    <div
                        className="hamburger"
                        style={styles.hamburger}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle navigation menu"
                        role="button"
                        tabIndex={0}
                        onKeyDown={e => (e.key === "Enter" ? setMenuOpen(!menuOpen) : null)}
                    >
                        <div style={{ ...styles.bar, backgroundColor: menuOpen ? colors.lightPurple : colors.textSecondary }} />
                        <div style={{ ...styles.bar, backgroundColor: menuOpen ? colors.lightPurple : colors.textSecondary }} />
                        <div style={{ ...styles.bar, backgroundColor: menuOpen ? colors.lightPurple : colors.textSecondary }} />
                    </div>
                )}

                {/* Nav Links */}
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
                        // const to = link === "Home" ? "/" : `/${link.toLowerCase()}`;
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

            <main
                style={{
                    ...styles.mainContentWrapper,
                    flexDirection: isMobile ? "column" : "row",
                    padding: isMobile ? "2rem 1rem" : "0 2rem",
                    margin: isMobile ? "2rem auto" : "4rem auto",
                    gap: isMobile ? "2rem" : "3rem",
                    textAlign: isMobile ? "center" : "left",
                }}
            >
                <section
                    style={{
                        ...styles.content(contentVisible),
                        transform: contentVisible
                            ? "translateX(0)"
                            : isMobile
                                ? "translateY(50px)"
                                : "translateX(-50px)",
                    }}
                >
                    <h1 style={styles.heading}>Bending code to will. Building what’s never been seen.</h1>
                    <h2 style={dynamicStyles.subheading}>React.js Frontend Developer</h2>
                    <p style={dynamicStyles.paragraph}>
                        Crafting elegant, high-performance web applications with clean code and creative vision.
                        As a React frontend developer, I focus on building smooth, responsive, and intuitive web interfaces that blend performance with aesthetic. With every line of clean code, I aim to bring ideas to life — translating vision into interactive, user-first experiences. My approach is rooted in clarity, creativity, and precision, where every component has a purpose and every detail adds depth.
                    </p>
                    <h2 style={{ fontStyle: 'italic', textAlign: 'right', paddingRight: '55px', color: '#e94560', letterSpacing: '2px' }}>~ Vedanshi</h2>
                </section>

                <section
                    style={{
                        ...styles.imageWrapper(contentVisible),
                        transform: contentVisible
                            ? "translateX(0)"
                            : isMobile
                                ? "translateY(50px)"
                                : "translateX(50px)",
                    }}
                >
                    <img
                        src={img_main}
                        alt="Developer working"
                        style={styles.image}
                    />
                </section>
            </main>
        </div>
    );
}

export default PortfolioMainPage;

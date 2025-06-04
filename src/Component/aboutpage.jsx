import React, { useEffect, useState } from "react";
import Navbar from "../Component/navbar";
import img_about from '../Assets/Home_img.png';

const colors = {
  background: "#0a0a0a",
  textSoft: "#e1f7f7",
  lightPurple: "#005f73",
  accent: "#e94560",
};

const styles = {
  container: {
    backgroundColor: colors.background,
    color: colors.textSoft,
    minHeight: "100vh",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    paddingBottom: "10px",
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    maxWidth: "1200px",
    margin: "4rem auto",
    padding: "0 2rem",
    gap: "1rem",
    flexWrap: "wrap",
  },
  imageWrapper: {
    maxWidth: "450px",
    flexShrink: 0,
  },
  image: {
    width: "100%",
    borderRadius: "12px",
    height: "auto",
    filter: "drop-shadow(0 0 20px rgba(253, 253, 253, 0.4))",
    display: "block",
  },
  textWrapper: {
    flex: 1,
    minWidth: "300px",
    paddingLeft: "1rem",
  },
  paragraph: {
    fontSize: "1.1rem",
    lineHeight: "1.8",
    color: colors.textSoft,
    marginBottom: "1.5rem",
    letterSpacing: '1px',
  },
  heading: {
    fontSize: "2rem",
    color: colors.lightPurple,
    marginBottom: "1rem",
    letterSpacing: '2px',
    fontStyle: "italic",
  },
  techList: {
    fontSize: "1.1rem",
    marginBottom: "1rem",
    color: "#f7f9f9",
    letterSpacing: '1px',
    paddingLeft: "25px",
  },
  spanHighlight: {
    color: colors.accent,
    fontWeight: "bold",
    letterSpacing: '1px',
  },
};

// Helper function to get responsive style overrides
const getResponsiveStyles = (width) => {
  if (width <= 768) {
    // Mobile and tablet
    return {
      contentWrapper: {
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 1rem",
        gap: "2rem",
      },
      imageWrapper: {
        maxWidth: "100%",
        flexShrink: 0,
      },
      textWrapper: {
        maxWidth: "100%",
        paddingLeft: 0,
      },
    };
  } else {
    // Desktop
    return {
      contentWrapper: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        padding: "0 2rem",
        gap: "1rem",
      },
      imageWrapper: {
        maxWidth: "450px",
        flexShrink: 0,
      },
      textWrapper: {
        flex: 1,
        minWidth: "300px",
        paddingLeft: "1rem",
      },
    };
  }
};

const AboutPage = () => {
  const [visible, setVisible] = useState(false);
  const [responsiveStyles, setResponsiveStyles] = useState(getResponsiveStyles(window.innerWidth));

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);

    const handleResize = () => {
      setResponsiveStyles(getResponsiveStyles(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const animatedStyles = {
    imageWrapper: {
      ...responsiveStyles.imageWrapper,
      opacity: visible ? 1 : 0,
      transform: visible ? "translateX(0)" : "translateX(-20px)",
      transition: "opacity 0.8s ease, transform 0.8s ease",
    },
    textWrapper: {
      ...responsiveStyles.textWrapper,
      opacity: visible ? 1 : 0,
      transform: visible ? "translateX(0)" : "translateX(20px)",
      transition: "opacity 0.8s ease, transform 0.8s ease",
    },
  };

  return (
    <div style={styles.container}>
      <Navbar />
      <div style={{ ...styles.contentWrapper, ...responsiveStyles.contentWrapper }}>
        <div style={animatedStyles.imageWrapper}>
          <img src={img_about} alt="About visual" style={styles.image} />
        </div>
        <div style={animatedStyles.textWrapper}>
          <p style={styles.paragraph}>
            Not just a coder — I’m a creator with vision and discipline. Every
            project reflects clarity, consistency, and a little chaos — the good kind.
          </p>

          <h2 style={styles.heading}>Tech I'm Fluent In</h2>
          <p style={styles.techList}>HTML | CSS | JavaScript | React.JS</p>
          <p style={styles.techList}>VS Code | GitHub</p>

          <h2 style={styles.heading}>Aesthetics Matter</h2>
          <p style={{ color: '#e1f7f7', fontSize: '20px', paddingLeft: '25px' }}>
            Design isn't decoration — it's strategy.
          </p>
          <p style={{ color: '#e1f7f7', fontSize: '20px', paddingLeft: '25px' }}>
            Code isn't just logic — it's my{" "}
            <span
              style={{
                fontFamily: 'Papyrus',
                fontStyle: 'italic',
                color: colors.accent,
                fontSize: '20px',
                fontWeight: 'bold',
                letterSpacing: '2px'
              }}
            >
              language of influence.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

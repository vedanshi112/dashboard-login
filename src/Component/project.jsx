import React, { useEffect, useState } from "react";
import Navbar from "../Component/navbar";
import { FaGithub } from "react-icons/fa";
import projAvada from '../Assets/avadaa.jpg';
import projCurrency from '../Assets/currency-con.jpg';
import projDashboard from '../Assets/dashboard.avif';

const colors = {
  background: "#0a0a0a",
  textSoft: "#e1f7f7",
  lightPurple: "#a4d7e1",
  accent: "#e94560",
  hoverBg: "#002d32",
  viewProjectColor: "#0f3460",
  viewProjectHoverBg: "#0f3460",
  viewProjectHoverText: "#ffffff",
};

const styles = {
  container: {
    backgroundColor: colors.background,
    color: colors.textSoft,
    minHeight: "100vh",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    paddingBottom: "40px",
  },
  pageHeading: {
    textAlign: "center",
    fontSize: "2.5rem",
    color: '#a7c6d9',
    marginBottom: "2rem",
    letterSpacing: "2px",
    fontFamily: 'Helvetica',
    paddingBottom: '30px',
    paddingTop: '30px',
    cursor: 'pointer',
  },
  projectsWrapper: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
    justifyContent: "center",
    padding: "0 1rem",
  },
  projectCard: {
    backgroundColor: "#121212",
    borderRadius: "16px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.7)",
    width: "360px",
    cursor: "pointer",
    color: colors.textSoft,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    opacity: 0,
    transform: "translateY(20px)",
    transition: "opacity 0.8s ease, transform 0.8s ease, background-color 0.3s ease",
    position: "relative",
    textDecoration: "none",
  },
  projectCardVisible: {
    opacity: 1,
    transform: "translateY(0)",
  },
  projectImageWrapper: {
    overflow: "hidden",
    height: "200px",
  },
  projectImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.4s ease",
  },
  projectImageHover: {
    transform: "scale(1.1)",
  },
  projectContent: {
    padding: "1.2rem 1.5rem",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  projectTitle: {
    fontSize: "1.6rem",
    marginBottom: "0.5rem",
    color: colors.lightPurple,
    letterSpacing: "1.5px",
    textDecoration: "none",
  },
  projectDesc: {
    fontSize: "1rem",
    marginBottom: "1rem",
    lineHeight: "1.5",
    color: colors.textSoft,
    textDecoration: "none",
  },
  techList: {
    fontSize: "0.95rem",
    color: "#a0a0a0",
    marginBottom: "1.5rem",
    letterSpacing: "1px",
    textDecoration: "none",
  },
  projectLink: {
    color: colors.viewProjectColor,
    fontWeight: "bold",
    textDecoration: "none",
    alignSelf: "flex-start",
    border: `1.5px solid ${colors.viewProjectColor}`,
    padding: "0.4rem 1rem",
    borderRadius: "8px",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "1rem",
    transition: "background-color 0.3s ease, color 0.3s ease",
  },
  projectLinkHover: {
    backgroundColor: colors.viewProjectHoverBg,
    color: colors.viewProjectHoverText,
  },
};

const getResponsiveStyles = (width) => {
  if (width <= 768) {
    return {
      projectsWrapper: {
        flexDirection: "column",
        alignItems: "center",
      },
      projectCard: {
        width: "90%",
      },
    };
  } else {
    return {
      projectsWrapper: {
        flexDirection: "row",
      },
      projectCard: {
        width: "360px",
      },
    };
  }
};

const projectsData = [
  {
    id: 1,
    title: "Avada The Ultimate Ecommerce",
    desc: "A modern ecommerce website clone with product listings and cart features.",
    tech: "HTML  | CSS | Bootstrap",
    img: projAvada,
    link: "https://github.com/vedanshi112/Avada-Website-Builder",
  },
  {
    id: 2,
    title: "JavaScript Currency Converter",
    desc: "Simple and effective currency converter using JavaScript and HTML.",
    tech: "JavaScript | HTML & CSS",
    img: projCurrency,
    link: "https://github.com/vedanshi112/Currency-Converter",
  },
  {
    id: 3,
    title: "Dashboard Login",
    desc: "A clean and responsive dashboard login UI built with React.js.",
    tech: "React.js | CSS | Responsive Design",
    img: projDashboard,
    link: "https://github.com/vedanshi112/dashboard-login",
  },
];

const ProjectPage = () => {
  const [visible, setVisible] = useState(false);
  const [responsiveStyles, setResponsiveStyles] = useState(getResponsiveStyles(window.innerWidth));
  const [hoveredProjectId, setHoveredProjectId] = useState(null);
  const [hoveredLinkId, setHoveredLinkId] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 150);
    const handleResize = () => {
      setResponsiveStyles(getResponsiveStyles(window.innerWidth));
    };
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={styles.container}>
      <Navbar />
      <h1 style={styles.pageHeading}>CodeAlchemy</h1>
      <div style={{ ...styles.projectsWrapper, ...responsiveStyles.projectsWrapper }}>
        {projectsData.map((proj) => (
          <div
            key={proj.id}
            style={{
              ...styles.projectCard,
              ...(visible ? styles.projectCardVisible : {}),
              ...responsiveStyles.projectCard,
              backgroundColor: hoveredProjectId === proj.id ? colors.hoverBg : "#121212",
            }}
            onMouseEnter={() => setHoveredProjectId(proj.id)}
            onMouseLeave={() => setHoveredProjectId(null)}
            onClick={() => window.open(proj.link, "_blank")}
          >
            <div style={styles.projectImageWrapper}>
              <img
                src={proj.img}
                alt={proj.title}
                style={{
                  ...styles.projectImage,
                  ...(hoveredProjectId === proj.id ? styles.projectImageHover : {}),
                }}
              />
            </div>
            <div style={styles.projectContent}>
              <h2 style={styles.projectTitle}>{proj.title}</h2>
              <p style={styles.projectDesc}>{proj.desc}</p>
              <p style={styles.techList}>{proj.tech}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...styles.projectLink,
                  ...(hoveredLinkId === proj.id ? styles.projectLinkHover : {}),
                }}
                onMouseEnter={() => setHoveredLinkId(proj.id)}
                onMouseLeave={() => setHoveredLinkId(null)}
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub size={18} />
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;

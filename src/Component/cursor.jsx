import React, { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [shapeIndex, setShapeIndex] = useState(0);

  const shapes = ["circle", "square", "triangle"];

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    const shapeTimer = setInterval(() => {
      setShapeIndex((prev) => (prev + 1) % shapes.length);
    }, 2000);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      clearInterval(shapeTimer);
    };
  }, []);

  const lavenderTransparent = "rgba(155, 140, 252, 0.25)"; // light lavender transparent
  const lavenderBorder = "rgba(155, 140, 252, 0.3)";      // lavender border
  const lavenderGlow = "rgba(155, 140, 252, 0.6)";        // lavender glow

  const cursorStyle = {
    position: "fixed",
    top: position.y,
    left: position.x,
    pointerEvents: "none",
    width: 25,
    height: 25,
    backgroundColor: lavenderTransparent,
    border: `1.5px solid ${lavenderBorder}`,
    boxShadow: `0 0 8px ${lavenderGlow}`,
    backdropFilter: "blur(4px)",
    transform: "translate(-50%, -50%)",
    transition: "all 0.3s ease",
    zIndex: 9999,
  };

  const shapeVariants = {
    circle: { borderRadius: "50%" },
    square: { borderRadius: "8px" },
  };

  const isTriangle = shapes[shapeIndex] === "triangle";

  if (isTriangle) {
    return (
      <div
        style={{
          position: "fixed",
          top: position.y,
          left: position.x,
          pointerEvents: "none",
          width: 0,
          height: 0,
          borderLeft: "12.5px solid transparent",
          borderRight: "12.5px solid transparent",
          borderBottom: `25px solid ${lavenderTransparent}`,
          filter: `drop-shadow(0 0 6px ${lavenderGlow})`,
          transform: "translate(-50%, -50%)",
          transition: "all 0.3s ease",
          zIndex: 9999,
        }}
      />
    );
  }

  return (
    <div
      style={{
        ...cursorStyle,
        ...shapeVariants[shapes[shapeIndex]],
      }}
    />
  );
};

export default Cursor;

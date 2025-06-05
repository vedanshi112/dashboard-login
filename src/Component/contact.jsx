import React, { useEffect, useState } from "react";
import Navbar from "../Component/navbar";
import emailjs from "emailjs-com";
import contactImg from "../Assets/project.png";

const colors = {
    background: "#0a0a0a",
    textSoft: "#e1f7f7",
    accent: "#1a3e5d",
    inputBoxShadow: "#002d32",
    hoverBg: "#002d32",
    success: "#d9e4e0",     // Light green
    error: "#ff4c4c",        // Red
};

const ContactPage = () => {
    const [visible, setVisible] = useState(false);
    const [inputFocus, setInputFocus] = useState({});
    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        email: "",
        message: "",
    });
    const [sending, setSending] = useState(false);
    const [feedbackMsg, setFeedbackMsg] = useState("");
    const [feedbackType, setFeedbackType] = useState(""); // "success" or "error"
    const [btnHover, setBtnHover] = useState(false);
    const isMobile = window.innerWidth <= 768;

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 150);
        return () => clearTimeout(timer);
    }, []);

    const handleFocus = (field) => {
        setInputFocus((prev) => ({ ...prev, [field]: true }));
    };

    const handleBlur = (field) => {
        setInputFocus((prev) => ({ ...prev, [field]: false }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setFeedbackMsg("Please fill all fields.");
            setFeedbackType("error");
            return;
        }

        setSending(true);
        setFeedbackMsg("");
        setFeedbackType("");

        const SERVICE_ID = "service_frx44ts";
        const TEMPLATE_ID = "template_xd2bovm";
        const USER_ID = "7CaEYELSaebQVF8D1";

        emailjs
            .send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_phone: formData.phoneNumber,
                    from_email: formData.email,
                    message: formData.message,
                },
                USER_ID
            )
            .then(() => {
                setSending(false);
                setFeedbackMsg("Message sent successfully! Thank you.");
                setFeedbackType("success");
                setFormData({ name: "", phoneNumber: "", email: "", message: "" });
            })
            .catch((error) => {
                setSending(false);
                setFeedbackMsg("Failed to send message. Please try again later.");
                setFeedbackType("error");
                console.error("EmailJS error:", error);
            });
    };

    const containerStyle = {
        backgroundColor: colors.background,
        minHeight: "100vh",
        padding: "0 2rem",
        color: colors.textSoft,
        fontFamily: "Helvetica",
        display: "flex",
        flexDirection: "column",
        paddingBottom: "40px",
    };

    const contentWrapperStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "3rem",
        gap: "2rem",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
        flexDirection: isMobile ? "column" : "row",
        padding: isMobile ? "0 1rem" : "0 2rem",
    };

    const imageStyle = {
        width: "100%",
        maxWidth: "400px",
        height: "auto",
        borderRadius: "10px",
        filter: "drop-shadow(0 0 20px rgba(253, 253, 253, 0.4))",
    };

    const inputStyle = {
        backgroundColor: "transparent",
        border: `2px solid ${colors.accent}`,
        borderRadius: "6px",
        padding: "0.75rem 1rem",
        marginBottom: "1rem",
        fontSize: "1rem",
        color: colors.textSoft,
        outline: "none",
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
        resize: "none",
        fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
    };

    const inputFocusStyle = {
        borderColor: colors.inputBoxShadow,
        boxShadow: `inset 0 0 8px ${colors.inputBoxShadow}`,
    };

    const buttonStyle = {
        backgroundColor: btnHover ? colors.hoverBg : colors.accent,
        border: "none",
        padding: "0.85rem",
        borderRadius: "6px",
        color: colors.background,
        fontSize: "1.1rem",
        fontWeight: "600",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
    };

    const feedbackStyle = {
        marginTop: "1rem",
        color: feedbackType === "error" ? colors.error : colors.success,
        fontWeight: "bold",
        fontSize: "1rem",
    };

    return (
        <>
            <Navbar />
            <div style={containerStyle}>
                <div style={contentWrapperStyle}>
                    <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img src={contactImg} alt="Contact" style={imageStyle} />
                    </div>
                    <div style={{ flex: 1, padding: "1rem 2rem" }}>
                        <h1 style={{ fontSize: "2.5rem", marginBottom: "1.5rem", fontWeight: "700", color: colors.accent }}>
                            Get in Touch
                        </h1>
                        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                style={{
                                    ...inputStyle,
                                    ...(inputFocus.name ? inputFocusStyle : {}),
                                }}
                                onFocus={() => handleFocus("name")}
                                onBlur={() => handleBlur("name")}
                                value={formData.name}
                                onChange={handleChange}
                                disabled={sending}
                                required
                                autoComplete="off"
                            />
                            <input
                                type="tel"
                                name="phoneNumber"
                                placeholder="Phone Number"
                                style={{
                                    ...inputStyle,
                                    ...(inputFocus.phoneNumber ? inputFocusStyle : {}),
                                }}
                                onFocus={() => handleFocus("phoneNumber")}
                                onBlur={() => handleBlur("phoneNumber")}
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                disabled={sending}
                                required
                                autoComplete="off"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                style={{
                                    ...inputStyle,
                                    ...(inputFocus.email ? inputFocusStyle : {}),
                                }}
                                onFocus={() => handleFocus("email")}
                                onBlur={() => handleBlur("email")}
                                value={formData.email}
                                onChange={handleChange}
                                disabled={sending}
                                required
                                autoComplete="off"
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                style={{
                                    ...inputStyle,
                                    minHeight: "120px",
                                    ...(inputFocus.message ? inputFocusStyle : {}),
                                }}
                                onFocus={() => handleFocus("message")}
                                onBlur={() => handleBlur("message")}
                                value={formData.message}
                                onChange={handleChange}
                                disabled={sending}
                                required
                            />
                            <button
                                type="submit"
                                style={buttonStyle}
                                onMouseEnter={() => setBtnHover(true)}
                                onMouseLeave={() => setBtnHover(false)}
                                disabled={sending}
                            >
                                {sending ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                        {feedbackMsg && <p style={feedbackStyle}>{feedbackMsg}</p>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPage;

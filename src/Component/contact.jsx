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
};

const styles = {
    container: {
        backgroundColor: colors.background,
        minHeight: "100vh",
        padding: "0 2rem",
        color: colors.textSoft,
        fontFamily: "Helvetica",
        // letterspacing:'2px',
        display: "flex",
        flexDirection: "column",
        paddingBottom: "40px",
    },
    contentWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "3rem",
        opacity: 0,
        transform: "translateY(20px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
        gap: "2rem",
    },
    contentVisible: {
        opacity: 1,
        transform: "translateY(0)",
    },
    leftSide: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
    },
    rightSide: {
        flex: 1,
        padding: "1rem 2rem",
    },
    image: {
        maxWidth: "100%",
        // height: "auto",
        // paddingbottom: "30px",
        height: "450px",
        borderRadius: "10px",
        filter: "drop-shadow(0 0 20px rgba(253, 253, 253, 0.4))",
    },
    heading: {
        fontSize: "2.5rem",
        marginBottom: "1.5rem",
        fontWeight: "700",
        color: colors.accent,
    },
    form: {
        display: "flex",
        flexDirection: "column",
    },
    input: {
        backgroundColor: "transparent",
        border: `2px solid ${colors.accent}`,
        borderRadius: "6px",
        padding: "0.75rem 1rem",
        marginBottom: "1rem",
        fontSize: "1rem",
        color: colors.textSoft,
        outline: "none",
        boxShadow: `inset 0 0 8px transparent`,
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
        resize: "none",
        fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
    },
    textarea: {
        minHeight: "120px",
    },
    inputFocus: {
        borderColor: colors.inputBoxShadow,
        boxShadow: `inset 0 0 8px ${colors.inputBoxShadow}`,
    },
    submitButton: {
        backgroundColor: colors.accent,
        border: "none",
        padding: "0.85rem",
        borderRadius: "6px",
        color: colors.background,
        fontSize: "1.1rem",
        fontWeight: "600",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
    },
    submitButtonHover: {
        backgroundColor: colors.hoverBg,
    },
    feedbackMsg: {
        marginTop: "1rem",
        color: colors.accent,
    },

    // Responsive
    "@media (max-width: 768px)": {
        contentWrapper: {
            flexDirection: "column",
        },
        leftSide: {
            padding: "0",
            marginBottom: "2rem",
        },
        rightSide: {
            padding: "0 1rem",
        },
    },
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
    const [btnHover, setBtnHover] = useState(false);

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
            return;
        }

        setSending(true);
        setFeedbackMsg("");

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
            .then(
                (response) => {
                    setSending(false);
                    setFeedbackMsg("Message sent successfully! Thank you.");
                    setFormData({ name: "", phoneNumber: "", email: "", message: "" });
                },
                (error) => {
                    setSending(false);
                    setFeedbackMsg("Failed to send message. Please try again later.");
                    console.error("EmailJS error:", error);
                }
            );
    };

    // Responsive inline style fix for contentWrapper flexDirection
    const isMobile = window.innerWidth <= 768;

    return (
        <>
            <Navbar />
            <div style={styles.container}>

                <div
                    style={{
                        ...styles.contentWrapper,
                        ...(visible ? styles.contentVisible : {}),
                        flexDirection: isMobile ? "column" : "row",
                    }}
                >
                    <div style={styles.leftSide}>
                        <img src={contactImg} alt="Contact" style={styles.image} />
                    </div>
                    <div style={styles.rightSide}>
                        <h1 style={styles.heading}>Get in Touch</h1>
                        <form style={styles.form} onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                style={{
                                    ...styles.input,
                                    ...(inputFocus.name ? styles.inputFocus : {}),
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
                                name="phone number"
                                placeholder="Phone Number"
                                style={{
                                    ...styles.input,
                                    ...(inputFocus.phoneNumber ? styles.inputFocus : {}),
                                }}
                                onFocus={() => handleFocus("phone number")}
                                onBlur={() => handleBlur("phone number")}
                                value={formData.name}
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
                                    ...styles.input,
                                    ...(inputFocus.email ? styles.inputFocus : {}),
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
                                    ...styles.input,
                                    ...styles.textarea,
                                    ...(inputFocus.message ? styles.inputFocus : {}),
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
                                style={{
                                    ...styles.submitButton,
                                    ...(btnHover ? styles.submitButtonHover : {}),
                                }}
                                onMouseEnter={() => setBtnHover(true)}
                                onMouseLeave={() => setBtnHover(false)}
                                disabled={sending}
                            >
                                {sending ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                        {feedbackMsg && <p style={styles.feedbackMsg}>{feedbackMsg}</p>}
                    </div>
                </div>
            </div>
        </>

    );
};

export default ContactPage;

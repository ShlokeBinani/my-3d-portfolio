import React from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm3D() {
  // Initialize Formspree with your form ID
  const [state, handleSubmit] = useForm("mnnvgknw");

  // Local form state for controlled inputs
  const [data, setData] = React.useState({
    name: "",
    email: "",
    message: ""
  });

  // Update local state on change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      viewport={{ amount: 0.3 }}
      style={{
        textAlign: "center",
        padding: "3rem 1rem",
        margin: "4rem auto",
        background: "var(--card-bg)",
        border: "1.5px solid var(--primary)",
        borderRadius: "1.5rem",
        maxWidth: 1000,
        position: "relative",
        zIndex: 2
      }}
    >
      <h2
        style={{
          color: "var(--primary)",
          marginBottom: "2rem",
          fontSize: "2.5rem"
        }}
      >
        Get In Touch
      </h2>

      {/* Formspree handles submission */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          maxWidth: 500,
          margin: "0 auto",
          padding: "2.5rem",
          background: "var(--background)",
          border: "1.5px solid var(--primary)",
          borderRadius: "1.5rem",
          boxShadow: "0 8px 32px 0 rgba(187, 10, 33, 0.15)"
        }}
      >
        <input
          name="name"
          type="text"
          value={data.name}
          onChange={handleChange}
          required
          placeholder="Your Name"
          style={{
            padding: "1rem 1.5rem",
            border: "2px solid var(--primary)",
            borderRadius: "1rem",
            background: "var(--card-bg)",
            color: "var(--text-primary)",
            fontSize: "1rem",
            outline: "none",
            transition: "border-color 0.3s ease"
          }}
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <input
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
          required
          placeholder="Your Email"
          style={{
            padding: "1rem 1.5rem",
            border: "2px solid var(--primary)",
            borderRadius: "1rem",
            background: "var(--card-bg)",
            color: "var(--text-primary)",
            fontSize: "1rem",
            outline: "none",
            transition: "border-color 0.3s ease"
          }}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <textarea
          name="message"
          value={data.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Your Message"
          style={{
            padding: "1rem 1.5rem",
            border: "2px solid var(--primary)",
            borderRadius: "1rem",
            background: "var(--card-bg)",
            color: "var(--text-primary)",
            fontSize: "1rem",
            outline: "none",
            resize: "vertical",
            minHeight: "120px",
            transition: "border-color 0.3s ease"
          }}
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <motion.button
          type="submit"
          disabled={state.submitting}
          whileHover={{
            scale: 1.05,
            background: "var(--accent)",
            boxShadow: "0 8px 25px rgba(255, 26, 75, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "1rem 2rem",
            background: "var(--primary)",
            border: "none",
            borderRadius: "1rem",
            color: "#fff",
            fontSize: "1.1rem",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "all 0.3s ease"
          }}
        >
          {state.submitting ? "Sending..." : "Send Message"}
        </motion.button>
      </form>
    </motion.section>
  );
}

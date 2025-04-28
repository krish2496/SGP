import React, { useState } from "react";
import "./ContactUs.css";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { FaThLarge } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response =await fetch("http://localhost:5000/feedback/submit-feedback_table", { 

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setResponseMessage(data.message);

      if (response.ok) {
        setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setResponseMessage("Error submitting feedback");
    }
  };

  return (
    <div className="contact-us-container">
      <div className="contact-us-header">
        <h1>
          Get in Touch <span className="highlight">With Us</span>
        </h1>
        <p>Your inquiries matter to us. Please share them via the form, and we'll respond promptly.</p>
      </div>
      <div className="contact-us-content">
        <div className="contact-info">
          <h2>Contact Details</h2>
          <div className="address">
            <h3>Registered Office Address:</h3>
            <p>JPS School</p>
            <p>Kalavad, Jamnagar</p>
            <p>Gujarat 361160, India</p>
          </div>
          <div className="sales-contact">
            <h3>School Contact</h3>
            <p>
              <FaPhoneAlt style={{ color: "#012A4A", marginRight: "10px" }} />
              +91 9978506929
            </p>
            <p>
              <FaEnvelope style={{ color: "#012A4A", marginRight: "10px" }} />
              Jpsschool2012@gmail.com
            </p>
            <button className="whatsapp-button">
              <FaWhatsapp style={{ marginRight: "10px" }} />
              WhatsApp
            </button>
          </div>
        </div>
        <div className="contact-form">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
            <textarea name="message" placeholder="Message" rows="5" value={formData.message} onChange={handleChange} required />
            <button type="submit">Submit</button>
          </form>
          {responseMessage && <p>{responseMessage}</p>}
        </div>
      </div>
      <button className="projects-button">
        <FaThLarge className="button-icon" />
        Contact Us
      </button>
    </div>
  );
};

export default ContactUs;

import React from "react";
import { FaBookOpen, FaEye, FaLightbulb, FaSchool } from "react-icons/fa";
import "./Informations.css";

const Informations = () => {
  const infoSections = [
    {
      title: "Welcome to Our School",
      icon: <FaSchool className="info-icon" />,
      content:
        "Our school provides a nurturing environment where students thrive academically and personally. With a focus on holistic development, we aim to inspire lifelong learning and leadership.",
    },
    {
      title: "Our Vision",
      icon: <FaEye className="info-icon" />,
      content:
        "To create a world-class educational institution that fosters excellence in academics, character building, and extracurricular achievements.",
    },
    {
      title: "Our Mission",
      icon: <FaLightbulb className="info-icon" />,
      content:
        "Empowering students with knowledge, creativity, and critical thinking skills while instilling values like integrity, respect, and responsibility.",
    },
    {
      title: "Why Choose Us?",
      icon: <FaBookOpen className="info-icon" />,
      content:
        "State-of-the-art facilities, experienced faculty, diverse extracurricular activities, and a track record of academic excellence.",
    },
  ];

  const videoURL = "https://www.youtube.com/embed/kokvMsf9ds4";

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Inspiring Tomorrow's Leaders Today</h1>
        <p>
          Join us in shaping a brighter future for students with world-class
          education and values.
        </p>
        <button className="cta-button">Learn More</button>
      </div>

      {/* Main Content */}
      <div className="info-page-container">
        <div className="info-content">
          {infoSections.map((section, index) => (
            <div key={index} className="info-section">
              {section.icon}
              <h3>{section.title}</h3>
              <p>{section.content}</p>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="info-video">
          <h3>Explore Our Campus</h3>
          <iframe
            width="100%"
            height="315"
            src={videoURL}
            title="School Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p>Watch our students in action!</p>
        </div>
      </div>
    </div>
  );
};

export default Informations;

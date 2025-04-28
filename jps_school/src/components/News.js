import React from "react";
import "./News.css";

const News = () => {
  const programs = [
    { title: "Science", description: "Advanced science courses for Grades 9-12.", icon: "🔬" },
    { title: "Mathematics", description: "Mathematics from foundational to advanced levels.", icon: "➗" },
    { title: "Sports", description: "Football, Cricket, Basketball, and Athletics programs.", icon: "⚽" },
    { title: "Arts", description: "Painting, music, and creative arts workshops.", icon: "🎨" },
    { title: "Technology", description: "Programming, robotics, and AI courses.", icon: "💻" },
    { title: "Literature", description: "Creative writing, debates, and public speaking.", icon: "📚" },
  ];

  const news = [
    { date: "Feb 10, 2025", content: "Admissions open for the academic year 2025-26." },
    { date: "Feb 5, 2025", content: "Annual Sports Day scheduled for March 15." },
    { date: "Jan 28, 2025", content: "Science Exhibition results announced." },
  ];

  return (
    <div className="home-container">
      <section className="programs-section">
        <h2>Our Offerings</h2>
        <div className="programs-grid">
          {programs.map((program, index) => (
            <div key={index} className="program-card">
              <div className="program-icon">{program.icon}</div>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
            </div>
          ))}
        </div>
        
      </section>
    </div>
  );
};

export default News;

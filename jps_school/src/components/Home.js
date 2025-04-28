import React from "react";
import Navbar from "./Navbar";
import About from "./About"; // Adjusted the path
import News from "./News"; // Adjusted the path

const HomePage = () => {
  const image = { src: "/images/d.jpg", alt: "School Image" }; // Choose one image

  return (
    <div>
   
      
      <div className="carousel-container">
        <div className="carousel-slide">
          <img src={image.src} alt={image.alt} className="carousel-image" />
        </div>
      </div>

      <About />
      <News />
    </div>
  );
};

export default HomePage;

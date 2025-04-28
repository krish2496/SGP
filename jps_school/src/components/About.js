import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About JPS SCHOOL</h1>
      <p className="about-text">
        <strong>JPS SCHOOL</strong> was established in <strong>2012</strong> and is managed by the Pvt. Unaided. 
        It is located in the Urban area of the <strong>KALAVAD</strong> block in the <strong>JAMNAGAR</strong> district of Gujarat. 
        The school provides education from <strong>Grades 1 to 12</strong> and is <strong>Co-educational</strong>. 
        The medium of instruction is <strong>Gujarati</strong>. The school operates in its own building, 
        with the academic session starting in <strong>April</strong>.
      </p>

      <div className="about-details">
        <h2 className="section-title">Facilities at JPS SCHOOL</h2>
        <ul className="facilities-list">
          <li><span>🏫 Building:</span> Private, with <strong>16 classrooms</strong> in good condition.</li>
          <li><span>⚡ Electricity:</span> Available and functional.</li>
          <li><span>💧 Water:</span> Tap water, functional.</li>
          <li><span>🚻 Toilets:</span> <strong>16 boys </strong>  and <strong> 8 girls</strong> toilets, all functional.</li>
          <li><span>🏀 Playground:</span> Available.</li>
          <li><span>📚 Library:</span> <strong>5000 books</strong>.</li>
          <li><span>🖥️ Computers:</span> <strong>30 functional computers</strong> with a computer-aided learning lab.</li>
          <li><span>♿ Accessibility:</span> No ramp needed for disabled children.</li>
        </ul>
      </div>

      <div className="about-highlights">
        <h2 className="section-title highlight-title">Key Highlights</h2>
        <p className="about-text">
          JPS SCHOOL is easily accessible by an all-weather road and provides a 
          <strong> safe, inclusive learning environment</strong> for students. With a focus on 
          <strong> holistic education</strong>, the school is equipped with 
          <strong> modern infrastructure and facilities</strong> to support 
          academic and extracurricular development.
        </p>
      </div>
    </div>
  );
};

export default About;

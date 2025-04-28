import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import "./Studentpanel.css";
import Timetable from "./Student_timetable"; // Ensure correct import
import StudentProfile from "./Student_profile";
 // Ensure correct path

const Sidebar = () => (
  <div className="sidebar">
    <h2>Student Panel</h2>
    <ul>
      <li><Link to="/studentpanel">Dashboard</Link></li>
      <li><Link to="/studentpanel/student_timetable">Time Table</Link></li>
      
      <li><Link to="/studentpanel/ReportCard ">ReportCard </Link></li>
      <li><Link to="/studentpanel/Fees">Fees</Link></li>
      <li><Link to="/studentpanel/student_profile">Profile</Link></li>
      

      <li>
        <button
          onClick={() => {
            localStorage.removeItem("student");
            window.location.href = "/login";
          }}
        >
          Logout
        </button>
      </li>
    </ul>
  </div>
);

const Dashboard = () => {
  const studentData = JSON.parse(localStorage.getItem("student"));
  const studentName = studentData ? studentData.name : "Student"; // Default if not found

  return (
    <div className="content">
      <h1>Welcome, {studentName}!</h1>
      <div className="card-container">
        <Card title="Upcoming Assignment" content="Math Homework due on 25th Feb" />
        <Card title="Attendance" content="85% this semester" />
        <Card title="Fees Status" content="Paid till March" />
      </div>
    </div>
  );
};

const Card = ({ title, content }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
);

const Studentpanel = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const student = localStorage.getItem("student");
    if (!student) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/student_timetable" element={<Timetable />} /> 
          <Route path="/student_profile" element={<StudentProfile />} /> 
        </Routes>
      </div>
    </div>
  );
};

export default Studentpanel;

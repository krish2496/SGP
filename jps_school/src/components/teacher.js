import React from "react";
import "./teacher.css";

// Teacher data with gender property
const teachers = [
  {
    name: "Rajesh Sharma",
    subject: "Mathematics",
    experience: "10 years",
    qualification: "M.Sc, B.Ed",
    photo: "https://via.placeholder.com/150",
    gender: "male", // Male gender
  },
  {
    name: "Sunita Verma",
    subject: "English",
    experience: "8 years",
    qualification: "M.A, B.Ed",
    photo: "https://via.placeholder.com/150",
    gender: "female", // Female gender
  },
  {
    name: "Amit Kumar",
    subject: "Science",
    experience: "12 years",
    qualification: "M.Sc, Ph.D",
    photo: "https://via.placeholder.com/150",
    gender: "male", // Male gender
  },
  {
    name: "Pooja Mishra",
    subject: "History",
    experience: "9 years",
    qualification: "M.A, B.Ed",
    photo: "https://via.placeholder.com/150",
    gender: "female", // Female gender
  },
  {
    name: "Vikram Singh",
    subject: "Physics",
    experience: "11 years",
    qualification: "M.Sc, B.Ed",
    photo: "https://via.placeholder.com/150",
    gender: "male", // Male gender
  },
  {
    name: "Neha Agarwal",
    subject: "Chemistry",
    experience: "10 years",
    qualification: "M.Sc, Ph.D",
    photo: "https://via.placeholder.com/150",
    gender: "female", // Female gender
  },
  {
    name: "Ravi Prasad",
    subject: "Computer Science",
    experience: "8 years",
    qualification: "MCA, B.Ed",
    photo: "https://via.placeholder.com/150",
    gender: "male", // Male gender
  },
  {
    name: "Anjali Kapoor",
    subject: "Hindi",
    experience: "12 years",
    qualification: "M.A, B.Ed",
    photo: "https://via.placeholder.com/150",
    gender: "female", // Female gender
  },
  {
    name: "Suresh Chandra",
    subject: "Geography",
    experience: "15 years",
    qualification: "M.A, B.Ed",
    photo: "https://via.placeholder.com/150",
    gender: "male", // Male gender
  },
];

const TeacherCard = ({ teacher }) => {
  // Use Flaticon Teacher icon for both genders
  const teacherIcon = (
    <img
      src="https://img.icons8.com/ios/50/000000/teacher.png" // Flaticon teacher icon for both
      alt="Teacher Icon"
      className="teacher-icon-img"
    />
  );

  return (
    <div className="teacher-card">
      <div className="teacher-icon">{teacherIcon}</div>
      <div className="teacher-info">
        <h2>{teacher.name}</h2>
        <p><strong>Subject:</strong> {teacher.subject}</p>
        <p><strong>Experience:</strong> {teacher.experience}</p>
        <p><strong>Qualification:</strong> {teacher.qualification}</p>
      </div>
    </div>
  );
};

const TeacherPage = () => {
  return (
    <div className="teacher-container">
      <h1 className="teacher-title">Our Respected Teachers</h1>
      <div className="teacher-list">
        {teachers.map((teacher, index) => (
          <TeacherCard key={index} teacher={teacher} />
        ))}
      </div>
    </div>
  );
};

export default TeacherPage;

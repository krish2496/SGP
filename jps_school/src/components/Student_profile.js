import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Student_profile.css";
import { FaUserGraduate, FaEnvelope, FaPhone, FaSchool, FaAward } from "react-icons/fa";

const StudentProfile = () => {
  const { email } = useParams();
  const storedEmail = sessionStorage.getItem("userEmail");
  const userEmail = email || storedEmail;

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userEmail) {
      setError("Invalid email.");
      setLoading(false);
      return;
    }

    fetch(`http://localhost:5000/profile/${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Could not fetch profile.");
        setLoading(false);
      });
  }, [userEmail]);

  if (loading) return <p className="loading-message">Loading...</p>;
  if (error) return <p className="error-message">{error}</p>;
  if (!profile) return <p className="no-profile-message">No profile found.</p>;

  return (
    <div className="profile-container">
      {[
        {
          title: "Basic Info",
          icon: <FaUserGraduate className="profile-icon" />,
          details: [
            { label: "Name", value: profile.full_name },
            { label: "Date of Birth", value: profile.dob },
            { label: "Gender", value: profile.gender },
            { label: "Student ID", value: profile.student_id },
          ],
        },
        {
          title: "Contact Info",
          icon: <FaEnvelope className="profile-icon" />,
          details: [
            { label: "Email", value: email },
            { label: "Phone", value: profile.phone },
            { label: "Address", value: profile.address },
          ],
        },
        {
          title: "Academic Details",
          icon: <FaSchool className="profile-icon" />,
          details: [
            { label: "Class", value: profile.class_grade },
            { label: "Section", value: profile.section },
            { label: "Roll No.", value: profile.roll_number },
          ],
        },
        {
          title: "Achievements",
          icon: <FaAward className="profile-icon" />,
          details: [
            { label: "Sports", value: "Not Available" },
            { label: "Clubs", value: "Not Available" },
            { label: "Awards", value: "Not Available" },
          ],
        },
      ].map((section, index) => (
        <div key={index} className="profile-section">
          {section.icon}
          <h3>{section.title}</h3>
          {section.details.map((detail, idx) => (
            <p key={idx}>
              <strong>{detail.label}:</strong> {detail.value || "Not Available"}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default StudentProfile;

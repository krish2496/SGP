import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ReportCard.css";

const ReportCard = () => {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);

  const storedEmail = sessionStorage.getItem("userEmail");
  const email = storedEmail || "";

  useEffect(() => {
    if (!email) return;

    axios.get(`http://localhost:5000/reportcard/${email}`)
      .then((res) => {
        console.log("Fetched Report:", res.data); // ✅ ADD THIS
        setReport(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching report card:", err);
        setLoading(false);
      });
  }, [email]);

  if (loading) return <p className="loading-message">Loading...</p>;
  if (!report) return <p className="error-message">No report card available.</p>;

  const { student, subjects } = report;

  return (
    <div className="report-card-container">
      <h2>JPS School</h2>

      <div className="student-info">
        <p><strong>Name:</strong> {student.student_name}</p>
        <p><strong>Grade:</strong> {student.overall_grade}</p>
        <p><strong>Email:</strong> {student.student_email}</p>
        <p><strong>Date:</strong> {new Date(student.report_date).toLocaleDateString()}</p>
      </div>

      <table className="grades-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Marks</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subj, index) => (
            <tr key={index}>
              <td>{subj.subject_name}</td>
              <td>{subj.marks_obtained}</td>
              <td>{subj.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="remarks">
        <p><strong>Remarks:</strong> Excellent performance. Keep it up!</p>
      </div>
    </div>
  );
};

export default ReportCard;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./Fees.css";

const Fees = () => {
  const navigate = useNavigate();

  const feeData = [
    { grade: "Grade 1", tuition: "₹40,000", books: "₹5,000", total: "₹45,000" },
    { grade: "Grade 2", tuition: "₹42,000", books: "₹5,500", total: "₹47,500" },
    { grade: "Grade 3", tuition: "₹44,000", books: "₹6,000", total: "₹50,000" },
    { grade: "Grade 4", tuition: "₹46,000", books: "₹6,500", total: "₹52,500" },
    { grade: "Grade 5", tuition: "₹48,000", books: "₹7,000", total: "₹55,000" },
    { grade: "Grade 6", tuition: "₹50,000", books: "₹7,500", total: "₹57,500" },
    { grade: "Grade 7", tuition: "₹52,000", books: "₹8,000", total: "₹60,000" },
    { grade: "Grade 8", tuition: "₹54,000", books: "₹8,500", total: "₹62,500" },
    { grade: "Grade 9", tuition: "₹56,000", books: "₹9,000", total: "₹65,000" },
    { grade: "Grade 10", tuition: "₹58,000", books: "₹9,500", total: "₹67,500" },
    { grade: "Grade 11", tuition: "₹60,000", books: "₹10,000", total: "₹70,000" },
    { grade: "Grade 12", tuition: "₹62,000", books: "₹10,500", total: "₹72,500" },
  ];

  const handlePayment = (grade, total) => {
    navigate(`/payment?grade=${grade}&total=${total}`);
  };
  

  return (
    <div className="fees-container">
      <h2 className="fees-title">School Fees Structure (₹ - INR)</h2>
      <table className="fees-table">
        <thead>
          <tr>
            <th>Grade</th>
            <th>Tuition Fees</th>
            <th>Books & Materials</th>
            <th>Total Fees</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {feeData.map((item, index) => (
            <tr key={index}>
              <td>{item.grade}</td>
              <td>{item.tuition}</td>
              <td>{item.books}</td>
              <td>{item.total}</td>
              <td>
                <button
                  className="pay-button"
                  onClick={() => handlePayment(item.grade, item.total)}
                >
                  Pay Fees
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Fees;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Sign_in.css";

const Sign_in = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    student_name: "",
    student_email: "",
    student_password: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/register", formData);
      alert(response.data.message);
      navigate("/dashboard"); // Redirect to another page after success (change route as needed)
    } catch (error) {
      console.error("Error:", error);
      alert("Registration failed. Try again!");
    }
  };

  return (
    <div className="login-container">
      <div className="illustration">
        <div className="graphic">
          <img src="/images/login-Page.png" alt="Sign In Illustration" />
        </div>
      </div>
      <div className="login-form">
        <div className="logo">
          <span className="icon-only">🚀</span>
        </div>
        <h2>Sign In</h2>
        <p>Enter your details to sign in</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="student_name"
              placeholder="User name"
              className="form-control"
              value={formData.student_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="student_email"
              placeholder="Email"
              className="form-control"
              value={formData.student_email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="student_password"
              placeholder="Password"
              className="form-control"
              value={formData.student_password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn-submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sign_in;

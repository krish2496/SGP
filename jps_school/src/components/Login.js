import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/login", {
        student_email: email,
        student_password: password,
      });

      if (response.data.success) {
        // Store student name in localStorage
        const studentData = {
          id: response.data.student.id,
          name: response.data.student.name,
          email: response.data.student.email
        };
        
        localStorage.setItem("student", JSON.stringify(studentData));
        sessionStorage.setItem("userEmail", studentData.email);  // ✅ Store email in sessionStorage
        
        navigate("/studentpanel");
        
        navigate("/studentpanel");
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <div className="illustration">
        <div className="graphic">
          <img src="/images/login-page.png" alt="Login Illustration" />
        </div>
      </div>

      <div className="login-form">
        <h2>Welcome to School! 👋</h2>
        <p>Please sign in to your account and start the adventure</p>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-submit">Login</button>
        </form>

        <p className="signup-link">
          New on our platform? <Link to="/Sign_in">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

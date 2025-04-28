import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import About from './components/About';
import News from './components/News';
import Footer from './components/Footer';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Informations from './components/Informations';
import Sign_in from './components/Sign_in';
import Studentpanel from './components/Studentpanel';
import Timetable from './components/Student_timetable';
import StudentProfile from './components/Student_profile';
import TeacherPage from './components/teacher';
import Fees from './components/Fees';
import PaymentPage from './components/PaymentPage';  // ✅ Added Payment Page Import
import ReportCard from './components/ReportCard'; // adjust path if needed


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/news" element={<News />} />
          <Route path="/Informations" element={<Informations />} />
          <Route path="/Sign_in" element={<Sign_in />} />
          <Route path="/studentpanel/*" element={<Studentpanel />} />
          <Route path="/studentpanel/student_timetable" element={<Timetable />} />
          <Route path="/studentpanel/student_profile/:email" element={<StudentProfile />} />
          <Route path="/teacher" element={< TeacherPage/>} />
          <Route path="/studentpanel/Fees" element={<Fees />} />
          <Route path="/payment" element={<PaymentPage />} /> 
          <Route path="/studentpanel/reportcard" element={<ReportCard />} />

         
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

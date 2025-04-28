import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./PaymentPage.css";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const grade = queryParams.get("grade");
  const total = queryParams.get("total");

  const [formData, setFormData] = useState({
    holder_name: "",
    bank_name: "",
    account_number: "",
    ifsc_code: "",
    payment_mode: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfirmPayment = async () => {
    try {
      await axios.post("http://localhost:5000/payment", {
        ...formData,
        payment_date: new Date().toISOString().split("T")[0], // format: YYYY-MM-DD
      });

      alert(`Payment of ${total} for ${grade} successful!`);
      navigate("/studentpanel/Fees");
    } catch (error) {
      alert("Payment failed. Please try again.");
      console.error("Payment error:", error);
    }
  };

  return (
    <div className="payment-container">
      <h2>Fee Payment</h2>
      <p><strong>Grade:</strong> {grade}</p>
      <p><strong>Total Amount:</strong> {total}</p>

      <div className="bank-details">
        <label>Account Holder Name</label>
        <input type="text" name="holder_name" onChange={handleChange} />

        <label>Bank Name</label>
        <input type="text" name="bank_name" onChange={handleChange} />

        <label>Account Number</label>
        <input type="text" name="account_number" onChange={handleChange} />

        <label>IFSC Code</label>
        <input type="text" name="ifsc_code" onChange={handleChange} />

        <label>Payment Mode</label>
        <select name="payment_mode" onChange={handleChange}>
          <option value="">Select</option>
          <option value="Net Banking">Net Banking</option>
          <option value="UPI">UPI</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Debit Card">Debit Card</option>
        </select>
      </div>

      <button className="confirm-button" onClick={handleConfirmPayment}>
        Confirm Payment
      </button>
    </div>
  );
};

export default PaymentPage;

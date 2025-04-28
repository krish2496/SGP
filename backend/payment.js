const express = require("express");
const router = express.Router();
const { sql } = require("./db");

router.post("/", async (req, res) => {
  const {
    holder_name,
    bank_name,
    account_number,
    ifsc_code,
    payment_mode,
    payment_date,
  } = req.body;

  if (!holder_name || !bank_name || !account_number || !ifsc_code || !payment_mode || !payment_date) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const request = new sql.Request();
    request.input("holder_name", sql.VarChar, holder_name);
    request.input("bank_name", sql.VarChar, bank_name);
    request.input("account_number", sql.VarChar, account_number);
    request.input("ifsc_code", sql.VarChar, ifsc_code);
    request.input("payment_mode", sql.VarChar, payment_mode);
    request.input("payment_date", sql.Date, payment_date);

    await request.query(`
      INSERT INTO bank_details (holder_name, bank_name, account_number, ifsc_code, payment_mode, payment_date)
      VALUES (@holder_name, @bank_name, @account_number, @ifsc_code, @payment_mode, @payment_date)
    `);

    res.status(201).json({ message: "Payment saved successfully" });
  } catch (err) {
    console.error("Error saving payment:", err);
    res.status(500).json({ message: "Database error" });
  }
});

module.exports = router;

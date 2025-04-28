const express = require("express");
const { sql, connectDB } = require("./db"); // Import database connection

const router = express.Router();

// Ensure database connection on server start


// Route to handle feedback submission
router.post("/submit-feedback_table", async (req, res) => {
    const { name, phone, email, subject, message } = req.body;

    if (!name || !phone || !email || !subject || !message) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const pool = await sql.connect();
        const request = pool.request();
        request.input("name", sql.VarChar, name);
        request.input("phone", sql.VarChar, phone);
        request.input("email", sql.VarChar, email);
        request.input("subject", sql.VarChar, subject);
        request.input("message", sql.Text, message);

        await request.query(`
            INSERT INTO feedback_table (name, phone, email, subject, message)
            VALUES (@name, @phone, @email, @subject, @message)
        `);

        res.status(201).json({ message: "Feedback submitted successfully" });
    } catch (error) {
        console.error("❌ Error inserting feedback:", error);
        res.status(500).json({ message: "Database error" });
    }
});

module.exports = router;

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const { sql, connectDB } = require("./db"); // Import database connection
const feedbackRoutes = require("./feedback");
const profileRoutes = require("./profile"); 
const reportcardRoute = require("./reportcard");
const paymentRoutes = require("./payment")
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use("/feedback", feedbackRoutes);
app.use("/profile", profileRoutes);
app.use("/reportcard", reportcardRoute);
app.use("/payment", paymentRoutes); 
// Connect to the database
connectDB();

/**
 * ✨ REGISTER FUNCTIONALITY START ✨
 * Route to handle student registration
 */
app.post("/register", async (req, res) => {
    const { student_name, student_email, student_password } = req.body;

    if (!student_name || !student_email || !student_password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        // Hash the password before storing it in the database
        const hashedPassword = await bcrypt.hash(student_password, 10);

        // Define SQL query to insert student data
        const query = `
            INSERT INTO student (student_name, student_email, student_password)
            VALUES (@student_name, @student_email, @student_password)
        `;

        // Execute the query using prepared statements to prevent SQL injection
        const request = new sql.Request();
        request.input("student_name", sql.VarChar, student_name);
        request.input("student_email", sql.VarChar, student_email);
        request.input("student_password", sql.VarChar, hashedPassword);

        await request.query(query);

        res.status(201).json({ message: "Student registered successfully" });
    } catch (error) {
        console.error("Error inserting student:", error);
        res.status(500).json({ message: "Database error" });
    }
});
/**
 * ✨ REGISTER FUNCTIONALITY END ✨
 */


/**
 * ✨ LOGIN FUNCTIONALITY START ✨
 * Route to handle student login
 */
app.post("/login", async (req, res) => {
    const { student_email, student_password } = req.body;

    if (!student_email || !student_password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        await connectDB();

        const query = `SELECT student_id, student_name, student_email, student_password FROM student WHERE student_email = @student_email`;
        const request = new sql.Request();
        request.input("student_email", sql.VarChar, student_email);
        const result = await request.query(query);

        if (result.recordset.length === 0) {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
        }

        const student = result.recordset[0];
        const isMatch = await bcrypt.compare(student_password, student.student_password);

        if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
        }

        res.status(200).json({
            success: true,
            message: "Login successful",
            student: { id: student.student_id, name: student.student_name, email: student.student_email }
        });

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Database error" });
    }
});

/**
 * ✨ LOGIN FUNCTIONALITY END ✨
 */

// Start the server
app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
});

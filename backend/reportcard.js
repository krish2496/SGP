const express = require("express");
const { sql, connectDB } = require("./db");
const router = express.Router();

// 📋 Route to fetch full report card using email
router.get("/:email", async (req, res) => {
    const studentEmail = req.params.email;

    try {
        await connectDB();

        // Step 1: Get student_id from student table
        const studentRequest = new sql.Request();
        studentRequest.input("email", sql.VarChar, studentEmail);
        const studentResult = await studentRequest.query(`
            SELECT student_id FROM student WHERE student_email = @email
        `);

        if (studentResult.recordset.length === 0) {
            return res.status(404).json({ message: "Student not found" });
        }

        const studentId = studentResult.recordset[0].student_id;

        // Step 2: Get main report card details
        const reportRequest = new sql.Request();
        reportRequest.input("id", sql.Int, studentId);
        const reportResult = await reportRequest.query(`
            SELECT student_id, student_name, student_email, overall_grade, report_date
            FROM reportcard
            WHERE student_id = @id
        `);

        if (reportResult.recordset.length === 0) {
            return res.status(404).json({ message: "Report card not found" });
        }

        const studentReport = reportResult.recordset[0];

        // Step 3: Get subject-wise marks
        const subjectResult = await reportRequest.query(`
            SELECT subject_name, marks_obtained, grade
            FROM subjects
            WHERE student_id = @id
        `);

        res.status(200).json({
            student: studentReport,
            subjects: subjectResult.recordset
        });
    } catch (err) {
        console.error("Error fetching report card:", err);
        res.status(500).json({ message: "Server error while fetching report card" });
    }
});

module.exports = router;

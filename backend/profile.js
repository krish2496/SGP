const express = require("express");
const { sql, connectDB } = require("./db");
const router = express.Router();

// Route to fetch student profile by email
router.get("/:email", async (req, res) => {
    const studentEmail = req.params.email;

    try {
        await connectDB();  // Ensure DB connection is established

        // Fetch student_id using email
        const studentQuery = `SELECT student_id FROM student WHERE student_email = @studentEmail`;
        const studentRequest = new sql.Request();
        studentRequest.input("studentEmail", sql.VarChar, studentEmail);
        const studentResult = await studentRequest.query(studentQuery);

        if (studentResult.recordset.length === 0) {
            return res.status(404).json({ message: "Student not found" });
        }

        const studentId = studentResult.recordset[0].student_id;

        // Fetch profile data using student_id
        const profileQuery = `SELECT * FROM profile WHERE email = @studentEmail`;
        const profileRequest = new sql.Request();
        profileRequest.input("studentEmail", sql.VarChar, studentEmail);

        const profileResult = await profileRequest.query(profileQuery);

        // If no profile is found, return default values for the profile
        if (profileResult.recordset.length === 0) {
            const defaultProfile = {
                student_id: studentId,
                full_name: "NA",
                dob: "NA",
                gender: "NA",
                class_grade: "NA",
                section: "NA",
                roll_number: "NA",
                academic_year: "NA",
                phone: "NA",
                address: "NA",
                parent_name: "NA",
                parent_contact: "NA",
                emergency_contact: "NA",
                admission_number: "NA",
                admission_date: "NA",
                subjects: "NA",
                attendance_percentage: "NA",
                grades: "NA",
                performance_report: "NA",
                fee_status: "NA",
                payment_history: "NA",
                scholarships: "NA",
                clubs: "NA",
                sports: "NA",
                achievements: "NA"
            };

            return res.status(200).json(defaultProfile);
        }

        // Send the profile data if found
        res.status(200).json(profileResult.recordset[0]);
    } catch (error) {
        console.error("Error fetching profile:", error);
        res.status(500).json({ message: "Database error" });
    }
});

module.exports = router;

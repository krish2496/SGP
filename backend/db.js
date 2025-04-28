const sql = require("mssql");

const config = {
    user: "admin1",  // Use the correct username
    password: "12345678",  // Use the correct password
    server: "localhost",  // Use "localhost" or "127.0.0.1" instead of LAPTOP-O38ROQ8L
    database: "JPSSchoolMangment",
    port: 1433,
    options: {
        encrypt: false,  
        trustServerCertificate: true, 
    }
};

const connectDB = async () => {
    try {
        await sql.connect(config);
        console.log("✅ Connected to SQL Server");
    } catch (err) {
        console.error("❌ Database connection failed:", err);
    }
};

module.exports = { sql, connectDB };

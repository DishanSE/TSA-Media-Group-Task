const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./db');
const app = express();
const authRoutes = require("./routes/auth")

// Load environment variables
dotenv.config();

app.use(cors());
app.use(express.json());

// Port configuration
const PORT = process.env.PORT;

// Routes
app.use("/api/auth", authRoutes);


// Start the server
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Test dabase connection
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    process.exit(1);
  }
  console.log('MySQL Database Connected...');
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.error(`Unhandled Rejection: ${err.message}`);
    server.close(() => {
        process.exit(1);
    });
});
const mongoose = require("mongoose");

// MongoDB connection string
const MONGO_URI =
  "mongodb+srv://laiba:Dj83vFpu0F18PePi@cluster0.m3qn8.mongodb.net/my_playlist"; // Replace with your DB URI

// Function to connect to the database
async function connectToDatabase() {
  console.log("trying to connect to database");
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGO_URI);
    console.log("✅✅ Successfully connected to MongoDB....");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with failure
  }
}

module.exports = connectToDatabase;

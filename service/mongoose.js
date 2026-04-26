import mongoose from "mongoose";

let isConnected = false;

export async function dbConnect() {
  try {
    if (isConnected) {
      console.log("✅ Using existing database connection");
      return;
    }

    const conn = await mongoose.connect(
      process.env.MONGODB_CONNECTION_STRING,
      {
        dbName: "lms", // optional but recommended
      }
    );

    isConnected = conn.connections[0].readyState === 1;

    console.log("🚀 New database connection established");

  } catch (error) {
    console.error("❌ Database connection error:", error.message);
    throw new Error("Database connection failed");
  }
}
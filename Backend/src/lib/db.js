import mongoose from "mongoose";
import dotenv from "dotenv";

// console.log("URI", process.env.MONGODB_URI)

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Connected to MongoDB ${conn.connection.host}`);
    } catch (error) {
        console.log("Failed to connect to MongoDB", error);
        process.exit(1);

    }
}
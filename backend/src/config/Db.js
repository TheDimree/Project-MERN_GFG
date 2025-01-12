import mongoose from "mongoose";

const DB_URL = process.env.CON_URL ?? "mongodb://localhost:27017/merndemoproject";  // * MongoDB UR, merndemoproject is the db name

// console.log(DB_URL)

const connectDB = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log('MongoDB connected');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        setTimeout(connectDB, 5000); // Retry connection after 5 seconds
    }
}
export default connectDB;
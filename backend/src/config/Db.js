import mongoose from "mongoose";

const DB_URL = process.env.CON_URL ?? "mongodb://localhost:27017/merndemoproject";  // * MongoDB UR, merndemoproject is the db name

// console.log(DB_URL)

const db_connection = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log("MongoDB is connected successfully");
    }
    catch (err) {
        console.log(`MongoDB connection error`);
    }
}
export default db_connection;
import dotenv from "dotenv";

// Automatically loads .env from the root directory
// dotenv.config();

dotenv.configDotenv({path: "./.env"})

// Configuration settings
const appConfig = {
  PORT: process.env.PORT ?? 8000, // App's port (default to 5000)
  DB_URL: process.env.CON_URL ?? "mongodb://localhost:27017/merndemoproject",  // MongoDB UR, merndemoproject is the db name
  JWT_SECRET: process.env.JWT_SECRET?? "mysecretkey",  // JWT secret key (default to "mysecretkey")
};

// console.log("appConfig: ", appConfig)
export default appConfig;
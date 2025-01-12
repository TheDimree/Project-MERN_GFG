import express from "express"
import cors from "cors"
import dotenv from "dotenv";
dotenv.config(); // Automatically loads .env from the root directory
// dotenv.configDotenv({path: "./.env"})
import connection from "./src/config/Db.js";
import AuthRouter from "./src/routes/AuthoRouter.js"
import ProductRouter from "./src/routes/ProductRouter.js"

const app = express();
const PORT = process.env.PORT ?? 8000;
app.use(cors())
app.use(express.json())
app.use('/images', express.static('uploads')) // * It allows to access the pic in uploads folder via: http://localhost:8008/images/1736484724309-hp-laptop.jpeg
app.use("/api/v1/auth", AuthRouter)
app.use("/api/v1/products", ProductRouter)

const startServer = () => {
  connection()
  app.listen(PORT, (err) => {
    if (err) return err
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();
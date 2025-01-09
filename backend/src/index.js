import express from "express"
import cors from "cors"
import appConfig from "./config/appConfig.js"
import connection from "./config/Db.js";
import AuthRouter from "./routes/AuthoRouter.js"
import ProductRouter from "./routes/ProductRouter.js"

const app = express();

app.use(cors())
app.use(express.json())
app.use("/api/v1/auth", AuthRouter)
app.use("/api/v1/products", ProductRouter)

const startServer = () => {
  connection()
  app.listen(appConfig.PORT, (err) => {
    if (err) return err
    console.log(`Server is running on port ${appConfig.PORT}`);
  });
}

startServer();
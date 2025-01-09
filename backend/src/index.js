import express from "express"
import appConfig from "./config/appConfig.js"
import connection from "./config/Db.js";
import AuthRouter from "./routes/AuthoRouter.js"
import cors from "cors"

const app = express();

app.use(cors())
app.use(express.json())
app.use("/api/v1/auth", AuthRouter)

const startServer = () => {
  connection()
  app.listen(appConfig.PORT, (err) => {
    if (err) return err
    console.log(`Server is running on port ${appConfig.PORT}`);
  });
}

startServer();
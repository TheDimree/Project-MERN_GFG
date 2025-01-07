import express from "express"
import appConfig from "./config/appConfig.js"

const app = express();

app.get("/", (req, res) => {
  // res.send("Hello, World!");
  res.json({"err":false, "msg":"My Application"});
});

app.get("/products", (req, res)=> {
  res.json({"err":false, "msg":"My Products"}) 
})

app.listen(appConfig.PORT, (err)=> {
    if(err) return err
    console.log(`Server is running on port ${appConfig.PORT}`);
});
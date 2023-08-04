const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;

app.get("/",(req,res)=>{
  res.send("Yeah Codepipeline is working good! GREAT")
})
app.listen(PORT, () => {
  console.log("App is runnig at=>  " + PORT);
});

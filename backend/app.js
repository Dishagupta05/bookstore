const express = require("express");
const app = express();

require("dotenv").config();
require("./conn/conn");
const user = require("./routes/user");
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello from backend side,Disha!!!!!")
})
//routes
app.use("/api/v1",user);
// creating port
app.listen(process.env.PORT,()=>{
    console.log(`server started ${process.env.PORT}`);
});
const express = require("express");
const app = express();

require("dotenv").config();
require("./conn/conn");
const user = require("./routes/user");
const Books=require("./routes/book");
const Favrourite = require("./routes/favrourite");
const Cart = require("./routes/cart");
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello from backend side,Disha!!!!!")
})
//routes
app.use("/api/v1",user);
app.use("/api/v1",Books);
app.use("/api/v1",Favrourite);
app.use("/api/v1",Cart);
// creating port
app.listen(process.env.PORT,()=>{
    console.log(`server started ${process.env.PORT}`);
});
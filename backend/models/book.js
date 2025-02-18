const mongoose = require("mongoose");
const books = new mongoose.Schema(
    {
       url:{
        type:String,
        required:true,
       },
       title:{
        type:String,
        require:true,
       },
       author:{
        type:String,
        require:true,
       },
       price:{
        type:String,
        require:true,
       },
       desc:{
        type:String,
        require:true,
        },
        language:{
            type:String,
            require:true,
        }

       
    },
    {timestamps:true}
);

module.exports=mongoose.model("book",books);
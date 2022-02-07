const express = require("express");

const app = express();

const mongoose = require("mongoose");

const connect = () => {
    mongoose.connect(
        "mongodb://127.0.0.1:27017"
    )
}
  //  ---------------SCHEMAS-----------
  
  //---------USER SCHEMA---------------

  const User = new mongoose.Schema({
      firstName: {type:String, required:true},
      middleName: {type:String},
      lastName :{type:String, required:true},
      
  })

app.listen(5555, async(req, res)=>{

    try{
        await connect();
        console.log('listening to port 5555')
    }
    catch(e){
        console.log(e.message)
    }
})
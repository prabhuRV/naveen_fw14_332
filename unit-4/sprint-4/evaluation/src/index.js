const express = require("express");

const connect = require("./config/db")
const userController = require("./controllers/user.controllers")
const app = express();

app.use("/users", userController)
app.listen(1234, async() => {
    try{
        await connect();
        console.log("listening at 1234")
    }
    catch(err){
        console.log(err.message)
    }
})
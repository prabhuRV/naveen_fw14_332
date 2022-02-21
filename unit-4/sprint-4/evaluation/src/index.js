const express = require("express");

const connect = require("./config/db")
const userController = require("./controllers/user.controllers")
const postController = require("./controllers/post.controllers")
const likeController = require("./controllers/like.controllers")
const app = express();

app.use("/users", userController)
app.use("/posts", postController)
app.use("/likes", likeController)
app.listen(1234, async() => {
    try{
        await connect();
        console.log("listening at 1234")
    }
    catch(err){
        console.log(err.message)
    }
})
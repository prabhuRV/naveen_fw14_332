const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    body : {type:String, required:false},
    likes : {type:String, required:true},
    image: {type:String, required:false},

}, {
    versionKey:false,
    timeStamps:true,
})

const Post = mongoose.model("post", postSchema);
const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema( {
    body : {type : String, required:true},
    postId : { type: mongoose.Schema.Types.ObjectId, ref : "post"} ,
    userId : { type : mongoose.Schema.Types.ObjectId, ref : "user"},
})

const comments = mongoose.model("comments", commentSchema);
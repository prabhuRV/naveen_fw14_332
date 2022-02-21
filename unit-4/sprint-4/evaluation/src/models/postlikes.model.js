const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
    postId : { type: mongoose.Schema.Types.ObjectId, ref : "post"} ,
    userId : { type : mongoose.Schema.Types.ObjectId, ref : "user"}

}, {
    versionKey:false,
    timeStamps:true,
})

const likes = mongoose.model("like", likeSchema);
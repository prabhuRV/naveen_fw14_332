const express = require("express");

const router = express.Router();
const like = require("../models/postlikes.model")
const posts = require("../models/post.model");
const user = require("../models/user.model")
router.post("", async(req, res) => {
    try{
        const userfind = await user.find({_id : req.body.userId})
        if(!userfind) {
            return res.status(500).send("User not found")
        }
        const postfind = await posts.find({_id : req.body.postId})
        if(!postfind) {
            return res.status(500).send("post not found")
        }

        const likes = await posts.updateOne({likes}, {$inc : {likes : 1}})
    }
    catch(err){
        return res.status(500).send(err.message)
    }
})

module.exports = router;
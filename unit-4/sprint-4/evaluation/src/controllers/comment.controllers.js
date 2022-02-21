const express = require("express");
const comments = require('../models/comment.model')
const posts = require("../models/post.model");
const user = require("../models/user.model")

const router = express.Router();

router.post("", async(req,res) => {
    try{
       const comment = comment.create(req.body.body);
       return res.status(201).send(comment)
    }
    catch(err){
        return res.status(500).send(err.message)
    }
})
module.exports = router
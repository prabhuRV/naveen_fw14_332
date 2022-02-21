const express = require("express");
const {body, validationResult} = require("express-validator");
const router = express.Router();

const Posts = require("../models/post.model");

router.post("", async(req, res) => {
    try{
        const posts = await Posts.create(req.body)
        return res.status(201).send(posts)
    }
    catch(err){
        return res.status(500).send(err.message)
    }

})

module.exports = router;
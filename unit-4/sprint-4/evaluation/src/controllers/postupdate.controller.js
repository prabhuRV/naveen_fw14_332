const express = require("express");

const router = express.Router();

const posts = require("../models/post.model");
const user = require("../models/user.model")

router.patch("", async(req, res) => {
    try{
        const userfind = await user.findbyId(req.body.userId)
        if(!userfind) {
            return res.status(500).send("User not found")
        }
       
    }
    catch(err){
        return res.status(500).send(err.message)
    }
})
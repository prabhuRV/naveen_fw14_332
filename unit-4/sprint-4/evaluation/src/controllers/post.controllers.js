const express = require("express");
const {body, validationResult} = require("express-validator");
const router = express.Router();

const Posts = require("../models/post.model");

router.post("",
body("body")
    .toString(),
body("likes")
    .isInt(),
body("images")
    .toString(),
   async(req, res) => {
    try{
        // const errors = validationResult(req);
        //     if (!errors.isEmpty()) {
        //         let newErrors;
        //         newErrors = errors.array().map((err)=>{
        //             return { key: err.param, message:err.msg};
        //         });
        //         return res.status(400).json({ errors: newErrors });

        //      };
        const posts = await Posts.create(req.body)
        return res.status(201).send(posts)
    }
    catch(err){
        return res.status(500).send(err.message)
    }

})

module.exports = router;
const { application } = require("express");
const {body, validationResult} = require("express-validator");
const {upload, uploadSingle} = require("../middlewares/fileuploads")
const express = require("express");
const User = require("../models/user.model")
const router = express.Router();

router.post("", 
body("firstName")
    .isString()
    .isLowercase()
    .isLength({min : 3, max : 30}),
body("lastName")
    .isString()
    .isLowercase()
    .isLength({min: 3, max: 30}),
body("age")
    .isAlphanumeric(),
body("email")
    .isEmail()
    .custom(async(values) => {
        const user = User.findOne( {email : value});
        if(user) {
            throw new Error("Email already exists");
        }
        return true;
    }), uploadSingle("profileImages"),
async(req, res) => {
    try{
      const user = await User.create({
          firstName : req.body.firstName,
          lastName : req.body.lastName,
          age : req.body.age,
          email : req.body.email,
          profileImages: req.body.profileImages
      });
    }
    catch(err){
       return res.status(400).send(err.message)
    }
})

module.exports = router
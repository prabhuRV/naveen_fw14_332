const { application } = require("express");

const {body, validationResult} = require("express-validator");
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
    }),
async(req, res) => {
    try{
      const user = await User.create(req.body);
    }
    catch(err){
       return res.status(400).send(err.message)
    }
})

//module.exports = router
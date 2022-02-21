const { application } = require("express");
const {body, validationResult} = require("express-validator");
const {upload,uploadSingle} = require("../middlewares/fileuploads")
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
    .isEmail(),
    // .custom(async(value) => {
    //     const user = User.findOne( {email : value});
    //     if(user) {
    //         throw new Error("Email already exists");
    //     }
    //     return true;
    // }), 
    uploadSingle("profileImages"),
    async(req, res) => {
        try{
            // const errors = validationResult(req);
            // if (!errors.isEmpty()) {
            //     let newErrors;
            //     newErrors = errors.array().map((err)=>{
            //         return { key: err.param, message:err.msg};
            //     });
            //     return res.status(400).json({ errors: newErrors });

            // };
            
      const user = await User.create({
          firstName : req.body.firstName,
          lastName : req.body.lastName,
          age : req.body.age,
          email : req.body.email,
          profileImages: req.file.path
        });
      return res.status(201).send(user);
        }
        catch(err){
       return res.status(400).send(err.message)
        }
})

module.exports = router
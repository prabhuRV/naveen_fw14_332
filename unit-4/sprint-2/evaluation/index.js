const express = require("express");

const app = express();

const mongoose = require("mongoose");

const connect = () => {
    mongoose.connect(
        "mongodb://127.0.0.1:27017"
    )
}
  //  ---------------SCHEMAS-----------
  
  //---------USER SCHEMA---------------

  const userSchema = new mongoose.Schema({
      firstName: {type:String, required:true},
      middleName: {type:String},
      lastName :{type:String, required:true},
      age : {type:Number, required:true},
      email:{type:String, required:true},
      address:{type:String, required:true},
      gender:{type:String,required:false, default:"female"},
      type: { type:String, default:"customer",required:false},

  }, {
      versionKey:false,
      timestamps:true,
  })

  const User = mongoose.model("user", userSchema);

  //  --------------------Branch Detail Schema-----------------

  const branchSchema = new mongoose.Schema({
       name:{type:String, required:true},
       address:{type:String, required:true},
       IFSC:{type:String, required:true},
       MICR :{type:String, required:true},
       
  },{
      versionKey:false,
      timestamps:true,
  })

  const branchdetails = mongoose.model("branch_Details", branchSchema);

// ---------------------Master Account----------------

const masteracc_schema = new mongoose.Schema({
    balance:{type:Number, required:true},
    user_id :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    branch_id: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"branch_Details",
        required:true,
    }
},{
    versionKey:false,
    timestamps:true,
})

const MasterAcct_Schema = mongoose.model("master_acct", masteracc_schema);

//--------------------Saving Account------------------

const savingacc_schema = new mongoose.Schema({
    account_number : {type:Number, required:true, unique:true},
    balance:{type:Number, required:true},
    interestRate:{type:Number, required:true},

}, {
    versionKey:false,
    timestamps:true,
});

const SavingAcc_Schema = mongoose.model("saving_acct", savingacc_schema);

// -------------------------Fixed Account---------------------

const fixedacc_schema = new mongoose.Schema({
    account_number :{
        type:Number,
        required:true,
        unique:true,
    },
    balance:{type:Number, required:true,},
    interestRate:{type:Number, required:true},
    startDate :{
        type:Date, required:true,
    },
    maturityDate :{
        type:Date,
        required:true,
    }
},{
    versionKey:false,
    timestamps:true,
})

const FixedAcc_Schema = mongoose.model('fixed_acct', fixedacc_schema);

//----------------------------------------------
app.listen(5555, async(req, res)=>{

    try{
        await connect();
        console.log('listening to port 5555')
    }
    catch(e){
        console.log(e.message)
    }
})
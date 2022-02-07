const express = require("express");

const app = express();

app.use(express.json());
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
    MasterAcc_id:{
        type : mongoose.Schema.Types.ObjectId,
        ref:"master_acct",
      //  required:true,
    }
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
    },
    MasterAcc_Id :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"master_acct",
       
    }
},{
    versionKey:false,
    timestamps:true,
})

const FixedAcc_Schema = mongoose.model('fixed_acct', fixedacc_schema);

//----------------------------------------------

// -------------------User---------------

app.post("/users", async(req, res)=> {

    try{
        const user = await User.create(req.body);
        res.send(user);
    }
    catch(e){
        res.send(e.message);
    }
}),



app.get("/users", async(req, res)=> {

    try{
        const user = await User.find().lean().exec();
        res.send(user);
    }
    catch(e){
        res.send(e.message);
    }
}),

//-----------------------------Master ACC----------

app.post("/master_accounts", async (req, res)=>{
    try{
        const master_acc = await MasterAcct_Schema.create(req.body);
       
        res.send(master_acc);
    }
    catch(e){
        res.send(e.message);
    }
}),

app.get("/master_accounts", async (req, res)=>{
    try{
        const master_acc = await MasterAcct_Schema.find()
        .populate({ path:"user_id"}).
        populate({ path:"branch_id"})
        .lean().exec();
        res.send(master_acc)
    }
    catch(e){
        res.send(e.message);
    }
})

// -----------------Branches-------------

app.post("/branches", async(req, res)=>{
    try{
        const branch = await branchdetails.create(req.body);
        res.send(branch)
    }
    catch(e){
        res.send(e.message);
    }
});

app.get('/branches', async(req, res)=>{
    try{
        const branch = await branchdetails.find().lean().exec();
        res.send(branch);
    }
    catch(e){
        res.send(e.message);
    }
})

// --------------------Savings Account-------------

app.post('/savings_account', async(req, res)=>{
    try{
        const saving = await SavingAcc_Schema.create(req.body);
        res.send(saving);
    }
    catch(e){
         res.send(e.message);
    }
})


app.listen(3333, async(req, res)=>{

    try{
        await connect();
        console.log('listening to port 3333')
    }
    catch(e){
        console.log(e.message)
    }
})
const expressasynchandler = require('express-async-handler');
const User = require('../../model/User');


const registerUser= expressasynchandler(async(req,res) => {
    const{email,firstName,lastName,password}=req?.body;

    

    try{
        const userExists= await User.findOne({email});
    if(userExists) throw new Error("User already exists");

        
        const user= await User.create({email,firstName,lastName,password});
        res.status(200).json(user);

    }
    catch(err){
        res.json(err);
    }
});


//Fetch all users
const fetchUserCtrl=expressasynchandler(async(req,res)=>{
    try{
        const users= await User.find({});
        res.json(users);
    }
    catch(err){
        res.json(err)
    }
});





module.exports = {registerUser,fetchUserCtrl};
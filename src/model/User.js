const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


const userSchema= mongoose.Schema({
    firstName:{
        required: [true,"First Name is required"],
        type: 'string'
    },
    lastName:{
        required: [true,"Last Name is required"],
        type: 'string'
    },
    email:{
        required: [true,"Email ID is required"],
        type: 'string'
    },
    password:{
        required: [true,"Password is reuired"],
        type: 'string'
    },
    isAdmin:{
        type: 'boolean',
        default: false,

    }
},{
    timestamp: true,
});

//HASH PASSWORD
userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password= await bcrypt.hash(this.password, salt);
    next();
})


const User= mongoose.model('User',userSchema);

module.exports = User;
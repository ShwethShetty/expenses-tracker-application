const express = require('express');
const { registerUser, fetchUserCtrl } = require("../../controllers/users/usersCtrl");

const userRoute=express.Router();

userRoute.post('/register',registerUser);
userRoute.get('/',fetchUserCtrl);

module.exports =userRoute;
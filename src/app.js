const express=require("express");
const dbConnect=require("./config/dbconnect");
// const { registerUser } = require("./controllers/users/usersCtrl");
const dotenv=require("dotenv");
const {errorHandler, notFound} = require("./middleware/errorMiddleware");
const userRoute = require("./routes/users/usersRoute");
const app= express();

// const logger=(req,res,next)=>{
//     console.log("I am a logger");
//     next();
// };

// app.use(logger);
dotenv.config();

dbConnect();

//middleware
app.use(express.json());


app.get("/",(req,res)={
    res.json({msg:"Welcom to Expenses API"});
})

app.use("/api/users",userRoute);

//error
app.use(notFound);

app.use(errorHandler);

// app.post('/register',registerUser);

module.exports = app;


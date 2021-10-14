const mongoose = require('mongoose');

//

//

const dbConnect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            // useCreateIndex: true,
            // useFindAndModify: false,
            useUnifiedTopology: true,
            useNewUrlParser: true,

        });
        console.log('DB connected successfully');

    }
    catch(err){
        console.log(`Error ${err}`);
    }
}

module.exports = dbConnect;
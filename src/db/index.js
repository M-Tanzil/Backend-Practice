import mongoose from "mongoose";
 const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
        console.log(`Connected to MongoDB !! DB.Host : ${connectionInstance.connection.host}`);
    }
    catch(err){
        console.log(err);
        throw err;
        process.exit(1);
    }
 }
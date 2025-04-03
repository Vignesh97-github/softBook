import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch{
        console.log(error)
        process.exit(1);
    }
};

export default connectDB;



//mongodb   nosql database, schmaless, validation minimal, no middlewares
// mongoose   odm for mongodb, to provide schema, validation strong, provides predefined middleware (pre/post hooks)
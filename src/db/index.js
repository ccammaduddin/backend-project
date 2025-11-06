import mongoose from "mongoose";
import { DB_NAME } from "../constants/index.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`Connected to DB : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("Error occured while connecting to DB: ", error);
        process.exit(1);
    }
}

export default connectDB;
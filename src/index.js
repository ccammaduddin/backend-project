// require ("dotenv").config();
import dotenv from "dotenv";
dotenv.config({ path: "./env" });
import connectDB from "./db/index.js";
import app from "./app.js";

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port : ${process.env.PORT || 8000}`);
    });
    })
.catch((error) => {
    console.error("Error occured in DB connection: ", error);
    process.exit(1);
});








// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express"

// const app =express();

// ;(async ()=> {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error", (error)=>{
//             console.error("Error occured : ", error);
//             throw error;
//         })
//         app.listen(process.env.PORT, ()=>{
//             console.log(`Server is running on port : ${process.env.PORT}`);
//         });
//     }
//     catch (error){
//         console.error("Error occured : ", error);
//         throw error;
//     }
// })()
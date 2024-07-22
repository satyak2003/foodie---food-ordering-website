import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://carlo:carlo2k23@cluster0.hhlwlv2.mongodb.net/Foodie').then(()=>console.log("Database Conected"));

}
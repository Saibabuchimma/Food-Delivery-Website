import mongoose from "mongoose";

const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://root:root123@cluster0.tkmzf.mongodb.net/react+vite').then(()=>console.log("DB Connected"));
}

export default connectDB;
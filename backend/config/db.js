import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://abhiaditya926:HOsLL1oikrThK4x4@cluster0.3kh5q.mongodb.net/reactjs-food-delivery-app').then(()=>{
       console.log('DB connected') ;
    })
}
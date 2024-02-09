const express=require("express");
const mongoose=require("mongoose");
const cookieParser=require("cookie-parser");
const authRoutes=require('./routes/auth');
const cors=require("cors");
const dotenv=require("dotenv");
const app=express();
const port=8000;

//middlewares
dotenv.config();
app.use(express.json());
app.use(cors());

//routes
app.use("/api/auth",authRoutes);

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(port,()=>{
        console.log("Connected to db...");
        console.log(`App is listening in port ${port}`);
    })
})
.catch((err)=>{
    console.log(err);
})
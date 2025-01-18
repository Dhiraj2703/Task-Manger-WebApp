import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import TaskRouter from "./routes/Task.routes.js";

dotenv.config();

const PORT = process.env.port;

const app = express();

//form ka data json mai jata hai isliye
app.use(express.json());

//kyuki humara frontend and backend ka port alag hai isliye 
app.use(cors({
    origin:"http://localhost:5173"
})); 

app.listen(PORT,()=>{
    console.log("server running to port 3000");
})

//routes
app.use("/api/task" , TaskRouter)

mongoose.connect(process.env.MONGO_URL).then(
    console.log("Database connected")
).catch(err=>{
    console.log("Database conection failed :-",err)
})
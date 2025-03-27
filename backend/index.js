import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoutes from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";
import {app, server} from "./SocketIO/server.js"


dotenv.config();

app.use(express.json());

app.use(cookieParser());

app.use(cors());

const PORT = process.env.PORT || 5000;
const URI = process.env.MONGODB_URI;

try {
    mongoose.connect(URI);
    console.log("Connected to MongoDB");
} catch (error) {
    console.error(error)
}

app.use("/api/user", userRoutes);
app.use("/api/message", messageRoute);

server.listen(PORT, ()=>{
    console.log("server is running on port 5002");
})
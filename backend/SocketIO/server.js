import {Server} from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server,{
    cors: {
        origin: "http://localhost:4001",
        methods: ["GET", "POST"],
    }
});


const users = {}

io.on("connection", (socket)=>{
    console.log("a new client connected", socket.id);
    const userId = socket.handshake.query.userId;
    if(userId){
        users[userId] = socket.id;
        console.log(users);
        
    }

    socket.on("disconnect",()=>{
        console.log("a client disconnected",socket.id);
    })

});

export {app, io, server}
import { WebSocketServer } from "ws";
const wss=new WebSocketServer({port:8080})

// event handling
wss.on("connection",(socket)=>{
    console.log("user connnected")
    socket.on("message",(e)=>{
        if(e.toString()=="ping"){
            socket.send("pong");
        }
    })
})
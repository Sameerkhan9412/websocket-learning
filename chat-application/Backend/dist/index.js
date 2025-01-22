"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let allSockets = []; //[socket1,socket2,socket3...]
wss.on("connection", (socket) => {
    socket.on("message", (message) => {
        console.log("message recieved " + message.toString());
        //@ts-ignore
        const parseMessage = JSON.parse(message);
        if (parseMessage.type === "join") {
            allSockets.push({
                socket,
                room: parseMessage.payload.roomId
            });
        }
        if (parseMessage.type === "chat") {
            // const currentUserRoom=allSockets.find((x)=>x.socket==socket).room;
            let currentUserRoom = null;
            for (let i = 0; i < allSockets.length; i++) {
                if (allSockets[i].socket == socket) {
                    currentUserRoom = allSockets[i].room;
                }
            }
            for (let i = 0; i < allSockets.length; i++) {
                if (allSockets[i].room == currentUserRoom) {
                    allSockets[i].socket.send(parseMessage.payload.message);
                }
            }
        }
    });
    // socket.on("disconnect",()=>{
    //     allSockets=allSockets.filter(x=>x!=socket)
    // })
});

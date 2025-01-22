import { WebSocketServer,WebSocket } from "ws";

const wss=new WebSocketServer({port:8080});
interface User{
    socket:WebSocket;
    room:string;
}

let allSockets:User[]=[];//[socket1,socket2,socket3...]

wss.on("connection",(socket)=>{ //this line will run each time for each person when they comes on websocket to chat
    socket.on("message",(message)=>{  //this line will run for each user who connected.
        console.log("message recieved "+message.toString())
        //@ts-ignore
      const parseMessage=JSON.parse(message)
      if(parseMessage.type==="join"){
        allSockets.push({
            socket,
            room:parseMessage.payload.roomId
        })
      }

      if(parseMessage.type==="chat"){
          // const currentUserRoom=allSockets.find((x)=>x.socket==socket).room;
          let currentUserRoom=null;
          for(let i=0;i<allSockets.length;i++){
              if(allSockets[i].socket==socket){
                currentUserRoom=allSockets[i].room;
              }
          }
          for(let i=0;i<allSockets.length;i++){
              if(allSockets[i].room==currentUserRoom){
                  allSockets[i].socket.send(parseMessage.payload.message)
              }
          }
      }
    })

    // socket.on("disconnect",()=>{
    //     allSockets=allSockets.filter(x=>x!=socket)
    // })

})
import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [socket,setSocket]=useState()
  const inputRef=useRef();

  function sendMessage(){
    if(!socket) return;
    const message=inputRef.current.value;
    // @ts-ignore
    socket.send(message)
  }

  useEffect(()=>{
    // fetch("http://localhost:3000/users")
    const ws=new WebSocket("ws://localhost:8080");
    setSocket(ws)
    // ws.onerror=()=>{

    // }
    // ws.close(()=>{

    // })

    // ws.onopen=()=>{

    // }

    ws.onmessage=(e)=>{
      alert(e.data)
    }

  },[])

  return (
    <div>
      <input ref={inputRef} placeholder="enter msg" type="text" name="" id="" />
      <button onClick={sendMessage} > Send</button>
    </div>
  )
}

export default App

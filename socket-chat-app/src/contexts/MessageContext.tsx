import { messageType } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";
import {ReactNode} from 'react';
type messageContextType={
    socketMessage:messageType,
    socket:any,
    setSocketMessage:React.Dispatch<React.SetStateAction<messageType>>,
}
export const MessageContext=createContext<messageContextType>({
    socketMessage:{
        senderId:"",
        text:"",
        chatId:"",
        createdAt:"",
        messageId:"",
    },
    setSocketMessage:()=>{},
    socket:null,
})
export const MessageContextProvider=({children}:{children:ReactNode})=>{
    const newSocket=new WebSocket("ws://localhost:8000");
    const [socketMessage,setSocketMessage]=useState<messageType >({
        senderId:"",
        text:"",
        chatId:"",
        createdAt:"",
        messageId:"",
    })
    const [socket,setSocket]=useState(newSocket);
    useEffect(()=>{
      if(!socket) return ;
      socket.addEventListener('message',(event)=>{
        const message=JSON.parse(event.data.toString());
        console.log(message);
        setSocketMessage({
            text:message?.message || '',
            senderId:message?.senderId || '',
            chatId:message?.chatId || '',
            messageId:message?.messageId || '',
        });
      })  
    },[socketMessage,socket])
    return <MessageContext.Provider value={{socketMessage,setSocketMessage,socket}}>
        {children}
    </MessageContext.Provider>
}
// export const useMessageContext=()=>{
//     return useContext(MessageContext)
// }
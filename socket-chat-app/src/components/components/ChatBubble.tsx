import { UserContextType } from '@/types'
import React, { useContext } from 'react'
import moment from "moment"
import { UserContext } from '../../contexts/UserContext';
import{ useState }from 'react';
type messageType={
  senderId:string,
  chatId:string,
  text:string,
  createdAt:string,
  messageId:string,
}

const ChatBubble = ({message}:{message:messageType}) => {
  const {User}=useContext<UserContextType>(UserContext);
  const [hover,setHover]=useState<boolean>(false);
  return (
    <div className={`flex my-4 mx-2 justify-start ${message.senderId==User.userId ? "justify-end":""}`}>
      <div onClick={()=>setHover((prev)=>!prev)}>
      <div className={`bg-gray-200 p-2 ${message.senderId==User.userId ? " chat-bubble-right":" chat-bubble-left"}`}>{message.text}</div>
      {hover?<span className='text-xs'>{moment().startOf('day').fromNow()}</span>:null}
      </div>
    </div>
  )
}

export default ChatBubble
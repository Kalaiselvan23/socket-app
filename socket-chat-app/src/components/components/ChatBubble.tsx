import { UserContextType } from '@/types'
import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext';
type messageType={
  senderId:string,
  chatId:string,
  text:string,
  createdAt:string,
}

const ChatBubble = ({message}:{message:messageType}) => {
  const {User}=useContext<UserContextType>(UserContext);
  console.log(typeof message.createdAt)
  return (
    <div className={`flex my-4 justify-start ${message.senderId==User.userId ? "justify-end":""}`}>
      <div>
      <div className='bg-gray-200 p-2 chat-bubble'>{message.text}</div>
      <span>{message.createdAt}</span>
      </div>
    </div>
  )
}

export default ChatBubble
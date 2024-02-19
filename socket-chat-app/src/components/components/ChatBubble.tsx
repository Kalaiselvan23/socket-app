import React from 'react'

const ChatBubble = ({message}:{message:string}) => {
  return (
    <div className='bg-gray-200 p-2 chat-bubble'>{message}</div>
  )
}

export default ChatBubble
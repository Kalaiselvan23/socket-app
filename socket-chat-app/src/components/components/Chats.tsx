import ChatBubble from './ChatBubble'
import { Button } from '../ui/button';
import { IoSend } from "react-icons/io5";
import { Input } from '../ui/input';
import MembersDialog from './MembersDialog';
import { useState } from 'react';
const Chats = () => {
  const [message,setMessage]=useState<string>("");
  const handleSend=(event)=>{
    event.preventDefault();
    console.log(message);
  }
  const handleChange=(event)=>{
    setMessage(event.target.value);
  }
  return (
    <div className='bg-white rounded-lg p-2'>
      <div className='flex justify-between py-5 px-2'>
        <h2 className='font-medium text-2xl'>Random</h2>
        <MembersDialog/>
      </div>
      <div className='w-full h-[80%]'>
        <ChatBubble/>
      </div>
      <form className='flex gap-2 my-2'>
        <Input className='text-lg' onChange={handleChange}/>
        <Button className='bg-gray-300 text-black' onClick={handleSend}><IoSend /></Button>
      </form>
    </div>
  )
}

export default Chats
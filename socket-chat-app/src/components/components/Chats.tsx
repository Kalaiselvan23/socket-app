  import ChatBubble from './ChatBubble'
  import { Button } from '../ui/button';
  import { IoSend } from "react-icons/io5";
  import { Input } from '../ui/input';
  import MembersDialog from './MembersDialog';
  import { useContext, useState } from 'react';
  import { useMutation, useQuery } from 'react-query';
  import Api from '@/Api';
  import { useSelectedChat } from '../../contexts/SelectedChatContext';
  import { UserContextType } from '@/types';
  import { UserContext } from '@/contexts/UserContext';

  const Chats = () => {
    const [message, setMessage] = useState<string>("");
    const { User: { userId } } = useContext<UserContextType>(UserContext)
    const { chat: { chatId,chatName} } = useSelectedChat();
    // console.log(`textmessages_${chatId}`))
    const {data:textMessages,isLoading} = useQuery(`textmessages-${chatId?chatId:""}`, async() => {
      const res=await Api.get(`/messages?chatId=${chatId}`);
      return res.data.messages;
    },{
      staleTime:0,
    })
    const messageMutation = useMutation({
      mutationFn: (data: string) => {
        Api.post("/messages", {
          message: data,
          chatId,
          senderId: userId,
        })
      }
    })
    console.log(chatName);
    const handleSend = async (event) => {
      event.preventDefault();
      console.log(message)
      messageMutation.mutate(message)
      setMessage("");
    }
    const handleChange = (event) => {
      setMessage(event.target.value);
    }
    console.log(textMessages)
    return (
      <div className='bg-white rounded-lg p-2'>
        <div className='flex justify-between py-5 px-2'>
          <h2 className='font-medium text-2xl'>{chatName}</h2>
          <MembersDialog />
        </div>
        <div className='w-full h-[80%] overflow-y-scroll'>
        {isLoading?<div>Loading</div>:textMessages?.map((message)=>{
            return <ChatBubble message={message}/>
          })}
        </div>
        <form className='flex gap-2 my-2'>
          <Input className='text-lg' onChange={handleChange} />
          <Button className='bg-gray-300 text-black' onClick={handleSend}><IoSend /></Button>
        </form>
      </div>
    )
  }

  export default Chats
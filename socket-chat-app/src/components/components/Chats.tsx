// import { useEffect, useState, useContext, useRef } from 'react';
// import { useQuery, useMutation } from 'react-query';
// import { IoSend } from "react-icons/io5";
// import {v4 as uuid} from 'uuid'
// import Api from '@/Api';
// import { useSelectedChat } from '../../contexts/SelectedChatContext';
// import { UserContextType } from '@/types';
// import { UserContext } from '@/contexts/UserContext';

// import ChatBubble from './ChatBubble';
// import { Button } from '../ui/button';
// import { Input } from '../ui/input';
// import MembersDialog from './MembersDialog';
// import { MessageContext } from '../../contexts/MessageContext';
// import { messageType } from '../../types';


// const Chats = () => {
//   // const [socket, setSocket] = useState(null);
//   const {socket,socketMessage}=useContext(MessageContext);
//   const [id,setId]=useState<string>('');
//   const [message, setMessage] = useState("");
//   const { User: { userId } } = useContext<UserContextType>(UserContext);
//   const { chat: { chatId, chatName } } = useSelectedChat();
//   console.log(socketMessage)
//   const { data: textMessages, isLoading } = useQuery(`textmessages-${chatId || ""}`, async () => {
//     const res = await Api.get(`/messages?chatId=${chatId}`);
//     return res.data.messages;
//   }, {
//     staleTime: 0,
//   });

//   const messageMutation = useMutation((data: string) => {
//     Api.post("/messages", {
//       message: data,
//       chatId,
//       senderId: userId,
//       messageId:id,
//     });
//   });

//   const handleSend = async (event:any) => {
//     event.preventDefault();
//     setMessage("");
//     setId(uuid());
//     messageMutation.mutate(message);
//     socket.send(JSON.stringify({
//       messageId:id,
//       message,
//       chatId,
//       senderId: userId,
//     }));
//   };

//   const handleChange = (event) => {
//     setMessage(event.target.value);
//   };
//   if (!chatId) {
//     return <div className='bg-white rounded-lg flex items-center justify-center'>
//       <h2 className='text-2xl  font-bold text-gray-400 '>Select chat to display messages</h2>
//     </div>
//   }
//   const filteredMessages=textMessages?.filter((message:messageType)=>socketMessage.messageId!=message.messageId) ||[];
//   return (
//     <div className='bg-white rounded-lg p-2'>
//       <div className='flex justify-between py-5 px-2'>
//         <h2 className='font-medium text-2xl'>{chatName}</h2>
//         <MembersDialog />
//       </div>
//       <div className='w-full h-[80%] overflow-y-scroll message-scroll'>
//         {isLoading ? <div>Loading</div> : filteredMessages?.map((message:messageType) => (
//           <ChatBubble message={message} key={message.messageId} />
//         ))}
//         {socketMessage && (
//           <ChatBubble  message={socketMessage} key="socket" />
//         )}
//       </div>
//       <form className='flex gap-2 my-2'>
//         <Input className='text-lg' onChange={handleChange} value={message} />
//         <Button className='bg-gray-300 text-black' onClick={handleSend}><IoSend /></Button>
//       </form>
//     </div>
//   );
// };


// export default Chats;


import { useEffect, useState, useContext, useRef } from 'react';
import { useQuery, useMutation } from 'react-query';
import { IoSend } from "react-icons/io5";
import { v4 as uuid } from 'uuid';
import Api from '@/Api';
import { useSelectedChat } from '../../contexts/SelectedChatContext';
import { UserContextType } from '@/types';
import { UserContext } from '@/contexts/UserContext';
import ChatBubble from './ChatBubble';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import MembersDialog from './MembersDialog';
import { MessageContext } from '../../contexts/MessageContext';
import { messageType } from '../../types';

const Chats = () => {
  const { socket, socketMessage } = useContext(MessageContext);
  const [id, setId] = useState<string>('');
  const [message, setMessage] = useState("");
  const { User: { userId } } = useContext<UserContextType>(UserContext);
  const { chat: { chatId, chatName } } = useSelectedChat();
  const { data: textMessages, isLoading } = useQuery(`textmessages-${chatId || ""}`, async () => {
    const res = await Api.get(`/messages?chatId=${chatId}`);
    return res.data.messages;
  }, {
    staleTime: 0,
  });

  const messageMutation = useMutation((data: string) => {
    Api.post("/messages", {
      message: data,
      chatId,
      senderId: userId,
      messageId: id,
    });
  });

  const handleSend = async (event: any) => {
    event.preventDefault();
    setMessage("");
    setId(uuid());
    messageMutation.mutate(message);
    socket.send(JSON.stringify({
      messageId: id,
      message,
      chatId,
      senderId: userId,
    }));
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  if (!chatId) {
    return (
      <div className='bg-white rounded-lg flex items-center justify-center'>
        <h2 className='text-2xl  font-bold text-gray-400 '>Select chat to display messages</h2>
      </div>
    );
  }

  const filteredMessages = textMessages?.filter((msg: messageType) => msg.messageId !== socketMessage.messageId) || [];

  return (
    <div className='bg-white rounded-lg p-2'>
      <div className='flex justify-between py-5 px-2'>
        <h2 className='font-medium text-2xl'>{chatName}</h2>
        <MembersDialog />
      </div>
      <div className='w-full h-[80%] overflow-y-scroll message-scroll'>
        {isLoading ? <div>Loading</div> : filteredMessages.map((msg: messageType) => (
          <ChatBubble message={msg} key={msg.messageId} />
        ))}
        {socketMessage && (
          <ChatBubble message={socketMessage} key="socket" />
        )}
      </div>
      <form className='flex gap-2 my-2'>
        <Input className='text-lg' onChange={handleChange} value={message} />
        <Button className='bg-gray-300 text-black' onClick={handleSend}><IoSend /></Button>
      </form>
    </div>
  );
};

export default Chats;

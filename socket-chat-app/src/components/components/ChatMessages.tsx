import { useSelectedChat } from "@/contexts/SelectedChatContext"
import { useQueryClient } from "react-query";

import io from "socket.io-client";
const ChatMessages = ({chatName,chatId}:{chatName:string,chatId:string}) => {
  const {chat,setChat}=useSelectedChat();
  const data=useQueryClient().getQueryData([`textmessages-${chatId}`])
  const lastData= data && data[data.length-1];
  const handleClick=()=>{
    setChat({chatId,chatName})
  }
  return (
    <div className="bg-[#E8E8E8] rounded-lg p-2" onClick={handleClick}>
        <h4>{chatName}</h4>
        <div className="flex">
            <span className="font-semibold">Guest User:</span>
            <p>{ lastData && lastData?.text}</p>
        </div>
    </div>
  )
}

export default ChatMessages
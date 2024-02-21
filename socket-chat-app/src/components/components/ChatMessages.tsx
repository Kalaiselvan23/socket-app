import { useSelectedChat } from "@/contexts/SelectedChatContext"
import { useQueryClient } from "react-query";

const ChatMessages = ({chatName,chatId}:{chatName:string,chatId:string}) => {
  const {chat,setChat}=useSelectedChat();
  const data=useQueryClient().getQueryData([`textmessages`])
  const lastData= data[data?.length-1];
  console.log(lastData?.text);
  const handleClick=()=>{
    setChat({chatId,chatName})
    console.log(chatId)
  }
  return (
    <div className="bg-[#E8E8E8] rounded-lg p-2" onClick={handleClick}>
        <h4>{chatName}</h4>
        <div className="flex">
            <span className="font-semibold">Guest User:</span>
            <p>{lastData?.text}</p>
        </div>
    </div>
  )
}

export default ChatMessages
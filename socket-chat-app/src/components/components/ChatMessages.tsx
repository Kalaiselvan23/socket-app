import { useSelectedChat } from "@/contexts/SelectedChatContext"

const ChatMessages = ({chatName,chatId}:{chatName:string,chatId:string}) => {
  const {chat,setChat}=useSelectedChat();
  const handleClick=()=>{
    setChat({chatId,chatName})
    console.log(chatId)
  }
  return (
    <div className="bg-[#E8E8E8] rounded-lg p-2" onClick={handleClick}>
        <h4>{chatName}</h4>
        <div className="flex">
            <span className="font-semibold">Guest User:</span>
            <p>Kalaiselvan hii!!</p>
        </div>
    </div>
  )
}

export default ChatMessages
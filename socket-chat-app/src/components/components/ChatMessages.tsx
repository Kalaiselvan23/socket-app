
const ChatMessages = ({groupName}:{groupName:string}) => {
  return (
    <div className="bg-[#E8E8E8] rounded-lg p-2">
        <h4>{groupName}</h4>
        <div className="flex">
            <span className="font-semibold">Guest User:</span>
            <p>Kalaiselvan hii!!</p>
        </div>
    </div>
  )
}

export default ChatMessages
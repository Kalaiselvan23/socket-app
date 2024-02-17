
import ChatMessages from "./ChatMessages";
import GroupModal from "./GroupModal";
const AllMessages = () => {
  return (
    <div className="bg-white p-2 rounded-lg">
        <div className="flex justify-between mb-3">
            <h3 className="text-3xl font-medium">My Chats</h3>
            <GroupModal/>
        </div>
        <div className="flex flex-col gap-2">
            <ChatMessages/>
            <ChatMessages/>
            <ChatMessages/>
        </div>
    </div>
  )
}

export default AllMessages
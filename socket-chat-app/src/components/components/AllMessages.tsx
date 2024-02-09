import { IoMdAdd } from "react-icons/io";
import { Button } from "../ui/button";
import ChatMessages from "./ChatMessages";
const AllMessages = () => {
  return (
    <div className="bg-white p-2 rounded-lg">
        <div className="flex justify-between mb-3">
            <h3 className="text-3xl font-medium">My Chats</h3>
            <Button className="bg-gray-400 hover-bg-gray-300 text-xl font-semibold flex gap-2"><span>New Group</span><IoMdAdd /></Button>
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

import { SelectedUserProvider } from "@/contexts/GroupDropContext";
import ChatMessages from "./ChatMessages";
import GroupModal from "./GroupModal";
import { useQuery } from "react-query";
import Api from "@/Api";
import { useContext } from "react";
import { UserContextType } from "@/types";
import { UserContext } from "@/contexts/UserContext";
const AllMessages = () => {
  const {User}=useContext<UserContextType>(UserContext)
  const {data:groups}=useQuery('group',async()=>{
    const res=await Api.get(`/groups?id={}`)
    return res.data.groups
  })
  return (
    <SelectedUserProvider>
    <div className="bg-white p-2 rounded-lg">
        <div className="flex justify-between mb-3">
            <h3 className="text-3xl font-medium">My Chats</h3>
            <GroupModal/>
        </div>
        <div className="flex flex-col gap-2">
          {groups?.map((group)=>{
            console.log(group)
            return <ChatMessages groupName={group.chatName}/>
          })}
        </div>
    </div>
    </SelectedUserProvider>
  )
}

export default AllMessages
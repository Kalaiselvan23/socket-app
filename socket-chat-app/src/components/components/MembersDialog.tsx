import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FaEye } from "react-icons/fa";
import { Button } from '../ui/button';
import { Input } from "../ui/input";
import Api from "@/Api";
import { useMutation } from "react-query";
const MembersDialog = () => {
  const LeaveGroupMutation=useMutation({
    mutationFn:(data)=>{
      Api.delete(`/group?chatId=${chatId}`,{

      })
    }
  })
  const handleDelete=(event)=>{
    event.preventDefault();
    
  }
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button className='text-black bg-gray-300 hover:bg-gray-200'>
            <FaEye />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center my-2">
              Chat name
            </DialogTitle>
            <DialogDescription>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <Input placeholder="Chat name" />
                  <Button className="bg-[#2c7a7b] hover:bg-[#2c7a7a]">
                    Update
                  </Button>
                </div>
                <Input className="my-2" placeholder="Add user to group" />
                <Button className="bg-red-500 ali hover:bg-red-400" onClick={handleDelete}>Leave group</Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

    </div>
  )
}

export default MembersDialog
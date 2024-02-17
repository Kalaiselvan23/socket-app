import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { UserContext } from "@/contexts/UserContext";
import { UserContextType } from "@/types";
import { useContext } from "react";
import { FaCircleUser } from "react-icons/fa6";
const AccountDrop = () => {
  const {User,setUser}=useContext<UserContextType>(UserContext)
  const handleClick=()=>{
    setUser({
      isLogin:false,
      username:"",
    })

  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <FaCircleUser className="text-2xl" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem >
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleClick}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

  )
}

export default AccountDrop
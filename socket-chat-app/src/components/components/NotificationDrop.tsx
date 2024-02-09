import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { IoIosNotifications } from "react-icons/io";

const NotificationDrop = () => {
  return (
    <DropdownMenu>
  <DropdownMenuTrigger>
  <IoIosNotifications className="text-3xl"/>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Notification</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <div>
      0 notifications
    </div>
  </DropdownMenuContent>
</DropdownMenu>

  )
}

export default NotificationDrop
import NotificationDrop from "./NotificationDrop";
import AccountDrop from "./AccountDrop";
import SearchSheet from "./SearchSheet";
const Topbar = () => {
  return (
    <div className="flex justify-between p-4 col-span-2 rounded-lg bg-white">
      <SearchSheet/>
      <div className="flex gap-10">
        <NotificationDrop/>
        <AccountDrop />
      </div>
    </div>
  )
}

export default Topbar
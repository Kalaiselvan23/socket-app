import AllMessages from '../components/components/AllMessages'
import Topbar from '../components/components/Topbar'
import Chats from '../components/components/Chats'

function Home() {
  return (
    <div className="outer-div bg-[url('/public/background.png')] bg-no-repeat bg-cover">
    <Topbar/>
    <AllMessages/>
    <Chats/>
    </div>
  )
}

export default Home

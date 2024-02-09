import './App.css'
import { Routes,Route } from 'react-router'
import LoginSingnup from './Pages/LoginSignup'
import Home from './Pages/Home'


function App() {
  return (
    <>
    <Routes>
      <Route path="/auth" element={<LoginSingnup/>}/>
      <Route path="/" element={<Home/>}/>
      <Route/>
    </Routes>

    </>
  )
}

export default App

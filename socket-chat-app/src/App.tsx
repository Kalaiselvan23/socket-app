import './App.css'
import { Routes,Route } from 'react-router'
import LoginSingnup from './Pages/LoginSignup'
import Home from './Pages/Home'
import ProtectedRoute from './components/components/ProtectedRoute'

function App() {
  return (
    <>
    <Routes>
      <Route path="/auth" element={<LoginSingnup/>}/>
      <Route path="/" element={
        <ProtectedRoute>
        <Home/>
        </ProtectedRoute>}
        />
    </Routes>

    </>
  )
}

export default App

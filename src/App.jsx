import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom/dist'
import DarkMode from './component/theme'
import Login from './pages/Login'

function App() {

  return (
    <DarkMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </DarkMode>
  )
}

export default App 

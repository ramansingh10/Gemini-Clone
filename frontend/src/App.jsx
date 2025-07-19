import { useEffect, useState } from 'react'
import SideBar from './pages/SideBar/SideBar'
import Main from './pages/Main/Main'
import Register from './pages/Register/Register'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import HomePage from './pages/HomePage/HomePage'

function App() {
  const [count, setCount] = useState(0)

  const MainPage = ()=>{
    return(
      <>
      <SideBar />
      <Main />
      </>
    )
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/main" element={<MainPage />}></Route>
      </Routes>
    </>
  )
}

export default App

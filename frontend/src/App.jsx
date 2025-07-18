import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './components/SideBar/SideBar'
import Main from './components/Main/Main'
import Register from './components/Register/Register'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'
import HomePage from './components/HomePage/HomePage'

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
        <Route path="/main" element={<MainPage />}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </>
  )
}

export default App

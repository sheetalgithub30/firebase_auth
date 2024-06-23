import React from 'react'
import Register from './Register'
import LogIn from './LogIn'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
     <Routes>
      <Route path="/" element={<LogIn/>}></Route>
      <Route path ="/register" element={<Register/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
     </Routes>
    </div>
  )
}

export default App
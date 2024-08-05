import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Login from '../../Screens/Login/Login'
import Register from '../../Screens/Register/Register'
import Home from '../../Screens/Home/Home'
import Admin from '../../Screens/Admin/Admin'
import Studentsview from '../../Screens/Students/Students'


const Routerconfigs = () => {
  return (

    <BrowserRouter>
    
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="admin" element={<Admin/>}/>
        <Route path='students/:uniqueIdentifier' element={<Studentsview/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Routerconfigs
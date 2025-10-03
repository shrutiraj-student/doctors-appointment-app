import React from 'react'

import Home from './components/Home'
import { Route,Routes } from 'react-router-dom'
import AllDoctor from './components/AllDoctor'
import Login from './components/Login'
import About from './components/About'
import Contact from './components/Contact'
import Appointment from './components/Appointment'



const App = () => {
  return (
    
    <div className='container'>
    <Routes> 
    <Route path='/' element={<Home/>}/>
    <Route path='/doctors' element={<AllDoctor/>}/>
    <Route path='/doctors/:speciality' element={<AllDoctor/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/appointment/:docId' element={<Appointment/>}/>
    <Route path='/login' element={<Login/>}/>
    </Routes>
    </div>
  )
}

export default App

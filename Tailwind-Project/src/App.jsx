import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './component/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './component/Footer'

export default function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

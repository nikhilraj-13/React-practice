import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './component/Nav'
import Home from './pages/Home'

export default function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  )
}

import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';
function App() {
 

  return (
    <> 
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/footer" element={<Footer />}/>

        
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

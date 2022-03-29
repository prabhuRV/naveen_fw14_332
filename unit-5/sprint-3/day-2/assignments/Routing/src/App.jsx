import { useState } from 'react'

import './App.css'
import { Routes,Route } from "react-router-dom";
import Hello from './components/Hello';
import About from './components/About';
import Navbar from './components/Navbar';
import Users from './components/Users';
import Productdetails from './components/Productdetails';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Hello/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/users/:id' element={<Productdetails/>} />
      </Routes>
    </div>
  )
}

export default App
import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Home section="services"/>}/>
        <Route path='/usecases' element={<Home section="usecases"/>}/>
        <Route path='/pricing' element={<Home section="pricing"/>}/>
        <Route path='/blog' element={<Home section="blog"/>}/>
      </Routes>
    </>
  )
}

export default App

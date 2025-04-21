import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import HomePage from './Pages/HomePage/HomePage'
import Navbar from './Pages/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails'
// import { Home } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/project/:id' element={<ProjectDetails/>}></Route>
      </Routes>
    </>
  )
}

export default App

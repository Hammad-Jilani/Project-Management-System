import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import HomePage from './Pages/HomePage/HomePage'
import Navbar from './Pages/Navbar/Navbar'
// import { Home } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <HomePage/>
    </>
  )
}

export default App

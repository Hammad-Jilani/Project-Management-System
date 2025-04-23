import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import HomePage from './Pages/HomePage/HomePage'
import Navbar from './Pages/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails'
import IssueDetails from './Pages/IssueDetails/IssueDetails'
import Auth from './Pages/Auth/Auth'
// import { Home } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {
        false? <div>
                <Navbar/>
                <Routes>
                  <Route path='/' element={<HomePage/>}></Route>
                  <Route path='/project/:id' element={<ProjectDetails/>}></Route>
                  <Route path='/project/:projectId/issue/:issueId' element={<IssueDetails/>}></Route>
                </Routes>
              </div>:<Auth/>
      }
    </>
    
    
  )
}

export default App

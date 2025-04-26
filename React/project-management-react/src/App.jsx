import { useEffect, useState } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from './Redux/Auth/Action'
import { fetchProjects } from './Redux/Project/Action'
import AccetInvitation from './Pages/Project/AccetInvitation'
// import { Home } from 'lucide-react'

function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()
  const {auth} = useSelector(store=>store)
  useEffect(()=>{
    dispatch(getUser())
    dispatch(fetchProjects({}))
  },[auth.jwt])
  console.log('App.jsx auth',auth);
  
  return (
    <>
      {
        auth.user ? <div>
                <Navbar/>
                <Routes>
                  <Route path='/' element={<HomePage/>}></Route>
                  <Route path='/project/:id' element={<ProjectDetails/>}></Route>
                  <Route path='/project/:projectId/issue/:issueId' element={<IssueDetails/>}></Route>
                  <Route path='/accept_invitation' element={<AccetInvitation/>}></Route>
                </Routes>
              </div>:<Auth/>
      }
    </>
    
    
  )
}

export default App

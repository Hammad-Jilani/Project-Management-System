import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'
import CreateForm from '../Project/CreateForm'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger,DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { PersonIcon } from '@radix-ui/react-icons'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '@/Redux/Store'
import { logout } from '@/Redux/Auth/Action'

function Navbar() { 
  const navigate= useNavigate()
  const {auth} = useSelector(store=>store)
  const dispatch = useDispatch()
  function handleLogout(){
      dispatch(logout())
  }
  return (
    <div className='border-b py-4 px-5 flex items-center justify-between'>
      <div className='flex items-center gap-3'>
        <p className='cursor-pointer'>
          <Link to={"/"}>
          Project Management</Link>
        </p>
        <Dialog>
          <DialogTrigger>
            <Button variant="ghost">New Project</Button>
          </DialogTrigger>
          
          <DialogContent>
            <DialogHeader>Create New Project</DialogHeader>
            <CreateForm></CreateForm>
          </DialogContent>
        </Dialog>
        <Button variant="ghost">Upgrade</Button>
      </div>
      <div className='flex gap-3 items-center'>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline" size="icon" className="rounded-full border-2 border-gray-500">
              <PersonIcon></PersonIcon>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={handleLogout}>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <p>{auth.user?.fullName}</p>
      </div>
    </div>
  )
}

export default Navbar
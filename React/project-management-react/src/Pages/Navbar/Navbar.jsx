import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'
import CreateForm from '../Project/CreateForm'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger,DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { PersonIcon } from '@radix-ui/react-icons'

function Navbar() {
  return (
    <div className='border-b py-4 px-5 flex items-center justify-between'>
      <div className='flex items-center gap-3'>
        <p className='cursor-pointer'>
          Project Management
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
            <DropdownMenuItem>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <p>Syed Hammad Ali</p>
      </div>
    </div>
  )
}

export default Navbar
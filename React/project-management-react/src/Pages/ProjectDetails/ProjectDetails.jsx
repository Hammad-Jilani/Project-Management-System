import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogClose, DialogHeader,DialogContent } from '@/components/ui/dialog'
import {  DialogTrigger } from '@radix-ui/react-dialog'
import { PlusIcon } from '@radix-ui/react-icons'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import React from 'react'
import InviteUserForm from './InviteUserForm'
import IssueList from './IssueList'
import ChatBox from './ChatBox'

function ProjectDetails() {
  function handleProjectInvitation(){

  }
  return (
    <div className='mt-5 lg:px-10'>
      <div className='lg:flex gap-5 justify-between pb-4'>
        <ScrollArea className='h-screen lg:w-[69%] pr-2'>
          <div className='text-gray-400 pb-10 w-full'>
            <h1 className='text-lg font-semibold pb-5'>Create Ecommerce website using react</h1>
            <div className='space-y-5 pb-10 text-sm'>
              <p className='w-full md:max-w-lg lg:max-w-xl '>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil ut, mollitia quasi voluptate tenetur dicta vitae alias odit quod harum dolorem aspernatur voluptatum nostrum est nemo excepturi temporibus consequuntur provident.
              </p>
              <div className='flex '>
                <p className='w-36'>Project Lead : </p>
                <p>Hammad</p>
              </div>

              <div className='flex'>
                <p className='w-36'>Members :</p>
                <div className='flex items-center gap-2'>
                  {
                    [1,1,1,1,1].map((items)=><Avatar>
                      <AvatarFallback>H</AvatarFallback>
                    </Avatar>)
                  }

                </div>
                <Dialog>
                  <DialogTrigger>
                    <DialogClose>
                      <Button onClick={handleProjectInvitation} size={"sm"} className="ml-2" variant={"ghost"}>
                        <span>Invite</span>
                        <PlusIcon className='w-3 h-3'></PlusIcon>
                      </Button>
                      
                    </DialogClose>
                  </DialogTrigger>

                  <DialogContent>
                    <DialogHeader>Invite User</DialogHeader>
                    <InviteUserForm></InviteUserForm>
                  </DialogContent>
                </Dialog>
              </div>

              <div className='flex'>
                <p className='w-36'>Category : </p>
                <p>Full Stack</p>
              </div>

              <div className='flex'>
                <p className='w-36'>Project Lead : </p>
                <Badge variant={"ghost"}>Hammad</Badge>
              </div>

            </div>

            <section>
              <p className='py-5 border-b text-lg -tracking-wider'>Tasks</p>
              <div className='lg:flex md:flex gap-3 justify-between py-5'>
                <IssueList status="pending" title="Todo List"></IssueList>
                <IssueList status="in_progress" title="In Progress"></IssueList>
                <IssueList status="done" title="Done"></IssueList>
              </div>
            </section>
          </div>
          

        </ScrollArea>
        <div className='lg:w-[25%] rounded-md sticky right-5 top-10'>
          <ChatBox></ChatBox>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
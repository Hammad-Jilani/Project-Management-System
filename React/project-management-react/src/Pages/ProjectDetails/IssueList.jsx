import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTrigger,DialogTitle } from '@/components/ui/dialog'
import React from 'react'
import IssueCard from './IssueCard'
// import { DialogTitle } from '@radix-ui/react-dialog'
import { Button } from '@/components/ui/button'
import { PlusIcon } from '@radix-ui/react-icons'
import CreateIssueForm from './CreateIssueForm'


function IssueList({title,status}) {
  return (
    <div>
      <Dialog>
        <Card className="w-full md:w-[300px] lg:w-[270px]">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent className="px-2">
            <div className='space-y-2'>
              {[1,1,1].map((items)=><IssueCard key={items}/>)}
            </div>
          </CardContent>
          <CardFooter>
            <DialogTrigger>
                <Button variant="outline" className="w-full border flex items-center gap-2">
                  Create Issue
                  <PlusIcon></PlusIcon>
                </Button>
            </DialogTrigger>
          </CardFooter>
        </Card>
        

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Issue</DialogTitle>
          </DialogHeader>
          <CreateIssueForm></CreateIssueForm>
        </DialogContent>
        
      </Dialog>
    </div>
  )
}

export default IssueList